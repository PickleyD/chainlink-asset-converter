import { BigNumber } from 'bignumber.js';
import { ethers } from 'ethers';

import { Feed, mainnetPriceFeeds } from './priceFeeds';
import { getShortestPath, Path, PathSection } from './shortestPath';

/** Options for {@link convert} */
export type ConvertProps = {
  /**
   * The amount of the `from` asset to convert
   */
  readonly amount: number;
  /**
   * The asset to convert from
   */
  readonly from: string;
  /**
   * The asset to convert to
   */
  readonly to: string;
  /**
   * The JsonRpcProvider (either this or the `endpoint` must be provided)
   */
  readonly provider?: ethers.providers.JsonRpcProvider;
  /**
   * The JSON RPC endpoint (either this or the `provider` must be provided)
   */
  readonly endpoint?: string;
  /**
   * Optionally pass in a custom array of price feeds
   */
  readonly feeds?: readonly Feed[];
};

/**
 * Convert a known amount in one asset to some amount of another asset.
 *
 * ### Example
 * ``` typescript
 * await convert({
 *  amount: 5,
 *  from: 'ETH',
 *  to: 'BTC',
 *  endpoint: 'https://mainnet.infura.io/v3/ab01ab01ab01ab01ab01ab01'
 * });
 * // => '0.2'
 * ```
 *
 * @param {ConvertProps} options
 * @returns The resulting amount of the `to` asset after conversion
 */
export const convert = async (options: ConvertProps): Promise<string> => {
  const {
    amount = 0,
    from,
    to,
    provider = null,
    endpoint = '',
    feeds = mainnetPriceFeeds,
  } = options;

  if (amount === 0) return '0';

  if (provider == null && endpoint == '') {
    return Promise.reject(
      new Error(`Either 'provider' or 'endpoint' must be defined`)
    );
  }

  if (from == null) {
    return Promise.reject(new Error(`'from' must be defined`));
  }
  if (to == null) {
    return Promise.reject(new Error(`'to' must be defined`));
  }

  const internalProvider = provider ? provider : createProvider(endpoint);

  const shortestPath: Path = getShortestPath(from, to, feeds);

  if (shortestPath.length === 0) return amount.toString();

  const getLatestAnswerPromises = shortestPath.map(
    (pathSection: PathSection) => {
      const { feedId } = pathSection;
      const { address: feedAddress } = feeds.find(
        (feed: Feed) => feed.id === feedId
      );
      const aggregatorContract = createAggregatorContract(
        feedAddress,
        internalProvider
      );
      return getLatest(aggregatorContract);
    }
  );

  const latestAnswers = await Promise.all(getLatestAnswerPromises);

  const result: BigNumber = shortestPath.reduce(
    (
      _newAmount: BigNumber,
      pathSection: PathSection,
      index: number
    ): BigNumber => {
      const { feedId, inverse } = pathSection;
      const { decimals } = feeds.find((feed: Feed) => feed.id === feedId);

      const { answer } = latestAnswers[index];
      const exchangeRate = new BigNumber(answer.toString()).dividedBy(
        new BigNumber(10).exponentiatedBy(decimals)
      );

      return inverse
        ? new BigNumber(1).dividedBy(exchangeRate).multipliedBy(_newAmount)
        : exchangeRate.multipliedBy(_newAmount);
    },
    new BigNumber(amount)
  );

  return result.toString();
};

/**
 * @param endpoint Your Ethereum JSON-RPC endpoint
 */
export const createProvider = (
  endpoint: string
): ethers.providers.JsonRpcProvider => {
  return new ethers.providers.JsonRpcProvider(endpoint);
};

/**
 * @ignore
 * @param address
 * @param provider
 */
const createAggregatorContract = (
  address: string,
  provider: ethers.providers.JsonRpcProvider
) => {
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

  return new ethers.Contract(address, aggregatorV3InterfaceABI, provider);
};

/**
 * @ignore
 * @param contract
 */
const getLatest = async (contract) => await contract.latestRoundData();
