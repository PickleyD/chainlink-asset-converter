import { Feed, mainnetPriceFeeds } from './priceFeeds';

export type Path = readonly PathSection[];

export type PathSection = {
  readonly feedId: number;
  readonly inverse: boolean;
};

/**
 * By modelling a tree where all the currencies are our vertices and all the price feeds
 * are our path sections between those vertices, we can recursively traverse through to find the
 * shortest path between our origin currency and the destination currency.
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
 * @param fromCurrency The currency vertex to begin pathing from for this iteration
 * @param toCurrency The destination currency vertex (the currency we ultimately wish to convert to)
 * @param feeds The feeds representing the paths between all vertices
 * @returns [[`Path`]] representing the shortest path between our origin and destination currency vertices
 */
export const getShortestPath = (
  fromCurrency: string,
  toCurrency: string,
  feeds: readonly Feed[] = mainnetPriceFeeds
): Path => getShortestPathRecursively(fromCurrency, toCurrency, feeds);

/**
 * @ignore
 * By modelling a tree where all the currencies are our vertices and all the price feeds
 * are our paths between those vertices, we can recursively traverse through to find the
 * shortest path between our origin currency and the destination currency.
 * @param fromCurrency The currency vertex to begin pathing from for this iteration
 * @param toCurrency The destination currency vertex (the currency we ultimately wish to convert to)
 * @param feeds The feeds representing the paths between all vertices
 * @param currentPathArray An array of the [[`PathSection`]]s taken to reach this vertex
 * @returns [[`Path`]] representing the shortest path between our origin and destination currency vertices
 */
const getShortestPathRecursively = (
  fromCurrency: string,
  toCurrency: string,
  feeds: readonly Feed[],
  currentPathSectionArray: readonly PathSection[] = []
): Path => {
  // Find all feeds containing our 'fromCurrency' in their 'from' prop
  const matchingFromFeeds = getFeedsWhereFromMatches(fromCurrency, feeds);

  // Find all feeds containing our 'fromCurrency' in their 'to' prop
  const matchingToFeeds = getFeedsWhereToMatches(fromCurrency, feeds);

  // No feed contains our 'fromCurrency' so return empty array
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
      getCurrencyOnOtherSideOfPathSection(pathSection, feeds) === toCurrency
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
      const nextFromCurrency = getCurrencyOnOtherSideOfPathSection(
        pathSection,
        feeds
      );
      return getShortestPathRecursively(
        nextFromCurrency,
        toCurrency,
        newFeeds,
        [...currentPathSectionArray, pathSection]
      );
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
 * @param currency
 * @param feeds
 */
const getFeedsWhereFromMatches = (currency: string, feeds: readonly Feed[]) =>
  feeds.filter((feed: Feed) => feed.from === currency);

/**
 * @ignore
 * @param currency
 * @param feeds
 */
const getFeedsWhereToMatches = (currency: string, feeds: readonly Feed[]) =>
  feeds.filter((feed: Feed) => feed.to === currency);

/**
 * @ignore
 * @param pathSection
 * @param feeds
 */
const getCurrencyOnOtherSideOfPathSection = (
  pathSection: PathSection,
  feeds: readonly Feed[]
) => {
  const feed = getFeedById(pathSection.feedId, feeds);
  return pathSection.inverse === false ? feed.to : feed.from;
};
