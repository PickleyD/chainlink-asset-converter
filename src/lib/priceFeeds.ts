export type Feed = {
  readonly id: number;
  readonly from: string;
  readonly to: string;
  readonly address: string;
  readonly decimals: number;
};

const ETH_USD_AGGREGATOR = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419';
const BTC_USD_AGGREGATOR = '0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c';

export const priceFeeds: readonly Feed[] = [
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
