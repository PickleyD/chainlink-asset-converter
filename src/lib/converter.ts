// import { ethers } from 'ethers';

// const ETH_USD_AGGREGATOR = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419';
// const BTC_USD_AGGREGATOR = '0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c';

// export type Feed = {
//   readonly id: number;
//   readonly from: string;
//   readonly to: string;
//   readonly address: string;
//   readonly decimals: number;
// };

// export type Path = {
//   readonly feedId: number;
//   readonly inverse: boolean;
// };

// const priceFeeds: readonly Feed[] = [
//   {
//     id: 0,
//     from: 'ETH',
//     to: 'USD',
//     address: ETH_USD_AGGREGATOR,
//     decimals: 8,
//   },
//   {
//     id: 1,
//     from: 'BTC',
//     to: 'USD',
//     address: BTC_USD_AGGREGATOR,
//     decimals: 8,
//   },
//   {
//     id: 2,
//     from: 'LINK',
//     to: 'ETH',
//     address: '0x000',
//     decimals: 8,
//   },
// ];

// // export const convert = (amount: number, from: string, to: string, provider: ethers.providers.JsonRpcProvider) => {

// // }

// export const createContract = (endpoint: string) => {
//   const provider: ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider(
//     endpoint
//   );

//   const aggregatorV3InterfaceABI = [
//     {
//       inputs: [],
//       name: 'decimals',
//       outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
//       stateMutability: 'view',
//       type: 'function',
//     },
//     {
//       inputs: [],
//       name: 'description',
//       outputs: [{ internalType: 'string', name: '', type: 'string' }],
//       stateMutability: 'view',
//       type: 'function',
//     },
//     {
//       inputs: [{ internalType: 'uint80', name: '_roundId', type: 'uint80' }],
//       name: 'getRoundData',
//       outputs: [
//         { internalType: 'uint80', name: 'roundId', type: 'uint80' },
//         { internalType: 'int256', name: 'answer', type: 'int256' },
//         { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
//         { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
//         { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
//       ],
//       stateMutability: 'view',
//       type: 'function',
//     },
//     {
//       inputs: [],
//       name: 'latestRoundData',
//       outputs: [
//         { internalType: 'uint80', name: 'roundId', type: 'uint80' },
//         { internalType: 'int256', name: 'answer', type: 'int256' },
//         { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
//         { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
//         { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
//       ],
//       stateMutability: 'view',
//       type: 'function',
//     },
//     {
//       inputs: [],
//       name: 'version',
//       outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
//       stateMutability: 'view',
//       type: 'function',
//     },
//   ];

//   return new ethers.Contract(
//     ETH_USD_AGGREGATOR,
//     aggregatorV3InterfaceABI,
//     provider
//   );
// };

// export const getLatest = (contract) => contract.latestRoundData();
