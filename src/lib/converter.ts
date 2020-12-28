import { ethers } from 'ethers';

import { Feed, mainnetPriceFeeds } from './priceFeeds';
import { getShortestPath, Path, PathSection } from './shortestPath';

export type ConvertProps = {
  readonly amount: number;
  readonly from: string;
  readonly to: string;
  readonly provider: ethers.providers.JsonRpcProvider;
  readonly feeds?: readonly Feed[];
};

export const convert = async ({
  amount = 0,
  from,
  to,
  provider,
  feeds = mainnetPriceFeeds,
}: ConvertProps) => {
  if (amount === 0) return 0;

  if (from == null) Promise.reject(new Error("'from' must be defined"));
  if (to == null) Promise.reject(new Error("'to' must be defined"));
  if (provider == null) Promise.reject(new Error("'provider' must be defined"));

  const shortestPath: Path = getShortestPath(from, to, feeds);

  const getLatestAnswerPromises = shortestPath.map(
    (pathSection: PathSection) => {
      const { feedId } = pathSection;
      const { address: feedAddress } = feeds.find(
        (feed: Feed) => feed.id === feedId
      );
      const aggregatorContract = createAggregatorContract(
        feedAddress,
        provider
      );
      return getLatest(aggregatorContract);
    }
  );

  const latestAnswers = await Promise.all(getLatestAnswerPromises);

  const result: number = shortestPath.reduce(
    (_newAmount: number, pathSection: PathSection, index: number): number => {
      const { feedId, inverse } = pathSection;
      const { decimals } = feeds.find((feed: Feed) => feed.id === feedId);

      const { answer } = latestAnswers[index];
      // TODO: Use big number lib
      const exchangeRate = answer / decimals;
      return inverse ? (1.0 / exchangeRate) * amount : exchangeRate * amount;
    },
    0
  );

  return result;
};

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

export const getLatest = async (contract) => await contract.latestRoundData();
