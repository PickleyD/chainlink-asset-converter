import { ethers } from 'ethers';
import { getShortestPath, Path, PathSection } from './shortestPath';
import { Feed, mainnetPriceFeeds } from './priceFeeds';

export type ConvertProps = {
  amount: number;
  from: string;
  to: string;
  provider: ethers.providers.JsonRpcProvider;
  feeds?: readonly Feed[];
};

export const convert = ({
  amount,
  from,
  to,
  provider,
  feeds = mainnetPriceFeeds,
}: ConvertProps) => {
  const shortestPath: Path = getShortestPath(from, to, feeds);

  const result = shortestPath.reduce(
    (newAmount: number, pathSection: PathSection) => {
      const { feedId, inverse } = pathSection;
      const { address: feedAddress, decimals } = feeds.find(
        (feed: Feed) => feed.id === feedId
      );
      const aggregatorContract = createAggregatorContract(
        feedAddress,
        provider
      );
      const { answer } = getLatest(aggregatorContract);

      // TODO: Use big number lib
      const exchangeRate = answer / decimals;
      newAmount = inverse
        ? (1.0 / exchangeRate) * amount
        : exchangeRate * amount;
      return newAmount;
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

export const getLatest = (contract) => contract.latestRoundData();
