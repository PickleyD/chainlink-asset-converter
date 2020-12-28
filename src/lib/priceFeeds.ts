export type Feed = {
  readonly id: number;
  readonly from: string;
  readonly to: string;
  readonly address: string;
  readonly decimals: number;
};

const ETH_USD_AGGREGATOR = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419';
const BTC_USD_AGGREGATOR = '0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c';
const LINK_USD_AGGREGATOR = '0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c';
const BTC_ETH_AGGREGATOR = '0xdeb288F737066589598e9214E782fa5A8eD689e8';
const LINK_ETH_AGGREGATOR = '0xDC530D9457755926550b59e8ECcdaE7624181557';

export const mainnetPriceFeeds: readonly Feed[] = [
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
    to: 'USD',
    address: LINK_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 3,
    from: 'BTC',
    to: 'ETH',
    address: BTC_ETH_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 4,
    from: 'LINK',
    to: 'ETH',
    address: LINK_ETH_AGGREGATOR,
    decimals: 8,
  },
];
