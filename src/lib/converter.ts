import { ethers } from 'ethers';

const ETH_USD_AGGREGATOR = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419';
const BTC_USD_AGGREGATOR = '0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c';

export type Feed = {
  readonly id: number;
  readonly from: string;
  readonly to: string;
  readonly address: string;
  readonly decimals: number;
};

export type Path = {
  readonly feedId: number;
  readonly inverse: boolean;
};

const priceFeeds: readonly Feed[] = [
  {
    id: 0,
    from: 'ETH',
    to: 'USD',
    address: ETH_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 1,
    from: 'BTC',
    to: 'USD',
    address: BTC_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 2,
    from: 'LINK',
    to: 'ETH',
    address: '0x000',
    decimals: 8,
  },
];

const getFeedById = (id: number, feeds: readonly Feed[]) =>
  feeds.find((feed: Feed) => feed.id === id);

const getFeedsWhereFromMatches = (currency: string, feeds: readonly Feed[]) =>
  feeds.filter((feed: Feed) => feed.from === currency);

const getFeedsWhereToMatches = (currency: string, feeds: readonly Feed[]) =>
  feeds.filter((feed: Feed) => feed.to === currency);

const getCurrencyOnOtherSideOfPath = (path: Path, feeds: readonly Feed[]) => {
  const feed = getFeedById(path.feedId, feeds);
  return path.inverse === false ? feed.to : feed.from;
};

export const getShortestPath = (
  fromCurrency: string,
  toCurrency: string,
  currentPathArray: readonly Path[] = [],
  feeds: readonly Feed[] = priceFeeds
) => {
  // Find all feeds containing our 'fromCurrency' in their 'from' prop
  const matchingFromFeeds = getFeedsWhereFromMatches(fromCurrency, feeds);

  // Find all feeds containing our 'fromCurrency' in their 'to' prop
  const matchingToFeeds = getFeedsWhereToMatches(fromCurrency, feeds);

  // No feed contains our 'fromCurrency' so return null
  if (matchingFromFeeds.length === 0 && matchingToFeeds.length === 0)
    return null;

  const pathsToTraverse: readonly Path[] = [
    ...matchingFromFeeds.map((feed: Feed) => ({
      feedId: feed.id,
      inverse: false,
    })),
    ...matchingToFeeds.map((feed: Feed) => ({
      feedId: feed.id,
      inverse: true,
    })),
  ];

  const matches = pathsToTraverse.filter(
    (path: Path) => getCurrencyOnOtherSideOfPath(path, feeds) === toCurrency
  );

  // Return match
  if (matches.length > 0) {
    return [...currentPathArray, matches[0]];
  }
  // No matches - traverse the next descendants
  else {
    // Exclude feeds we have already found matches in
    const traversedFeedIdsThisRound = pathsToTraverse.map(
      (path: Path) => path.feedId
    );
    const newFeeds = feeds.filter(
      (feed: Feed) => !traversedFeedIdsThisRound.includes(feed.id)
    );

    return pathsToTraverse.map((path: Path) => {
      const nextFromCurrency = getCurrencyOnOtherSideOfPath(path, feeds);
      return getShortestPath(
        nextFromCurrency,
        toCurrency,
        [...currentPathArray, path],
        newFeeds
      );
    })[0];
  }
};

// export const convert = (amount: number, from: string, to: string, provider: ethers.providers.JsonRpcProvider) => {

// }

export const createContract = (endpoint: string) => {
  const provider: ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider(
    endpoint
  );

  const aggregatorV3InterfaceABI = [
    {
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'description',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint80', name: '_roundId', type: 'uint80' }],
      name: 'getRoundData',
      outputs: [
        { internalType: 'uint80', name: 'roundId', type: 'uint80' },
        { internalType: 'int256', name: 'answer', type: 'int256' },
        { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
        { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
        { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'latestRoundData',
      outputs: [
        { internalType: 'uint80', name: 'roundId', type: 'uint80' },
        { internalType: 'int256', name: 'answer', type: 'int256' },
        { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
        { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
        { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'version',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
  ];

  return new ethers.Contract(
    ETH_USD_AGGREGATOR,
    aggregatorV3InterfaceABI,
    provider
  );
};

export const getLatest = (contract) => contract.latestRoundData();
