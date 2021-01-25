import { Feed, mainnetPriceFeeds } from './priceFeeds';

export type Path = readonly PathSection[];

export type PathSection = {
  readonly feedId: number;
  readonly inverse: boolean;
};

/**
 * By modelling a tree where all the assets are our vertices and all the price feeds
 * are our path sections between those vertices, we can recursively traverse through to find the
 * shortest path between our origin asset and the destination asset.
 *
 * ### Example
 * ``` typescript
 * const feeds: readonly Feed[] = [
 *   {
 *     id: 0,
 *     from: 'ETH',
 *     to: 'USD',
 *     address: '',
 *     decimals: 1,
 *   },
 *   {
 *     id: 1,
 *     from: 'BTC',
 *     to: 'USD',
 *     address: '',
 *     decimals: 1,
 *   }
 * ];
 *
 * getShortestPath('ETH', 'BTC', feeds);
 * // => [
 * //   {
 * //     feedId: 0,
 * //     inverse: false,
 * //   },
 * //   {
 * //     feedId: 1,
 * //     inverse: true,
 * //   },
 * // ];
 * ```
 *
 * @param fromAsset The asset vertex to begin pathing from for this iteration
 * @param toAsset The destination asset vertex (the asset we ultimately wish to convert to)
 * @param feeds The feeds representing the paths between all vertices
 * @returns [[`Path`]] representing the shortest path between our origin and destination asset vertices
 */
export const getShortestPath = (
  fromAsset: string,
  toAsset: string,
  feeds: readonly Feed[] = mainnetPriceFeeds
): Path => getShortestPathRecursively(fromAsset, toAsset, feeds);

/**
 * @ignore
 * By modelling a tree where all the assets are our vertices and all the price feeds
 * are our paths between those vertices, we can recursively traverse through to find the
 * shortest path between our origin asset and the destination asset.
 * @param fromAsset The asset vertex to begin pathing from for this iteration
 * @param toAsset The destination asset vertex (the asset we ultimately wish to convert to)
 * @param feeds The feeds representing the paths between all vertices
 * @param currentPathArray An array of the [[`PathSection`]]s taken to reach this vertex
 * @returns [[`Path`]] representing the shortest path between our origin and destination asset vertices
 */
const getShortestPathRecursively = (
  fromAsset: string,
  toAsset: string,
  feeds: readonly Feed[],
  currentPathSectionArray: readonly PathSection[] = []
): Path => {
  // Find all feeds containing our 'fromAsset' in their 'from' prop
  const matchingFromFeeds = getFeedsWhereFromMatches(fromAsset, feeds);

  // Find all feeds containing our 'fromAsset' in their 'to' prop
  const matchingToFeeds = getFeedsWhereToMatches(fromAsset, feeds);

  // No feed contains our 'fromAsset' so return empty array
  if (matchingFromFeeds.length === 0 && matchingToFeeds.length === 0) return [];

  const pathSectionsToTraverse: readonly PathSection[] = [
    ...matchingFromFeeds.map((feed: Feed) => ({
      feedId: feed.id,
      inverse: false,
    })),
    ...matchingToFeeds.map((feed: Feed) => ({
      feedId: feed.id,
      inverse: true,
    })),
  ];

  const matches = pathSectionsToTraverse.filter(
    (pathSection: PathSection) =>
      getAssetOnOtherSideOfPathSection(pathSection, feeds) === toAsset
  );

  // Return match
  if (matches.length > 0) {
    return [...currentPathSectionArray, matches[0]];
  }
  // No matches - traverse the next descendants
  else {
    // Exclude feeds we have already found matches in
    const traversedFeedIdsThisRound = pathSectionsToTraverse.map(
      (pathSection: PathSection) => pathSection.feedId
    );
    const newFeeds = feeds.filter(
      (feed: Feed) => !traversedFeedIdsThisRound.includes(feed.id)
    );

    return pathSectionsToTraverse.map((pathSection: PathSection) => {
      const nextFromAsset = getAssetOnOtherSideOfPathSection(
        pathSection,
        feeds
      );
      return getShortestPathRecursively(nextFromAsset, toAsset, newFeeds, [
        ...currentPathSectionArray,
        pathSection,
      ]);
    })[0];
  }
};

/**
 * @ignore
 * @param id
 * @param feeds
 */
const getFeedById = (id: number, feeds: readonly Feed[]) =>
  feeds.find((feed: Feed) => feed.id === id);

/**
 * @ignore
 * @param asset
 * @param feeds
 */
const getFeedsWhereFromMatches = (asset: string, feeds: readonly Feed[]) =>
  feeds.filter((feed: Feed) => feed.from === asset);

/**
 * @ignore
 * @param asset
 * @param feeds
 */
const getFeedsWhereToMatches = (asset: string, feeds: readonly Feed[]) =>
  feeds.filter((feed: Feed) => feed.to === asset);

/**
 * @ignore
 * @param pathSection
 * @param feeds
 */
const getAssetOnOtherSideOfPathSection = (
  pathSection: PathSection,
  feeds: readonly Feed[]
) => {
  const feed = getFeedById(pathSection.feedId, feeds);
  return pathSection.inverse === false ? feed.to : feed.from;
};
