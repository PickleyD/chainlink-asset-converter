import { BigNumber } from 'bignumber.js';
import { ethers } from 'ethers';

import { Feed, mainnetPriceFeeds } from './priceFeeds';
import { getShortestPath, Path, PathSection } from './shortestPath';

export type ConvertProps = {
  readonly amount: number;
  readonly from: string;
  readonly to: string;
  readonly provider?: ethers.providers.JsonRpcProvider;
  readonly endpoint?: string;
  readonly feeds?: readonly Feed[];
};

export const convert = async ({
  amount = 0,
  from,
  to,
  provider = null,
  endpoint = '',
  feeds = mainnetPriceFeeds,
}: ConvertProps) => {
  if (amount === 0) return 0;

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

  if (shortestPath.length === 0) return amount;

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
      const exchangeRate = new BigNumber(answer).dividedBy(
        new BigNumber(10).exponentiatedBy(decimals)
      );
      return inverse
        ? new BigNumber(1).dividedBy(exchangeRate).multipliedBy(_newAmount)
        : exchangeRate.multipliedBy(_newAmount);
    },
    new BigNumber(amount)
  );

  return result.toNumber();
};

/**
 * @param endpoint Your Ethereum JSON-RPC endpoint
 */
export const createProvider = (
  endpoint: string
): ethers.providers.JsonRpcProvider => {
  return new ethers.providers.JsonRpcProvider(endpoint);
};

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
