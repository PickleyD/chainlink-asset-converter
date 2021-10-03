import assetsData from '../data/assets.json';

export type Asset = {
  readonly code: string;
};

export const supportedAssets: readonly Asset[] = assetsData.map((asset) => ({
  code: asset,
}));
