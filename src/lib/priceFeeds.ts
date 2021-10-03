import feedsData from '../data/feeds.json';

export type Feed = {
  readonly id: number;
  readonly from: string;
  readonly to: string;
  readonly address: string;
  readonly decimals: number;
};

export const mainnetPriceFeeds: readonly Feed[] = feedsData;
