import fs from 'fs';
import path from 'path';

import axios from 'axios';

const FEEDS_JSON_URL = 'https://weiwatchers.com/feeds.json';
const EXCEPTIONS = [
  'difficulty',
  'fast gas',
  'height',
  'cv',
  'index',
  'por',
  'marketcap',
  'vesper',
  'tvl',
  'reserves',
];

type RawFeedsData = {
  readonly pair: ReadonlyArray<string>;
  readonly ens: string;
  readonly multiply: string;
};

const isTickerValidForConversion = (ticker: string) => {
  return ticker !== '' && !EXCEPTIONS.includes(ticker.toLowerCase());
};

const getMainnetPriceFeedsDataAsync = async () => {
  const feedsData: {
    readonly data: ReadonlyArray<RawFeedsData>;
  } = await axios.get(FEEDS_JSON_URL);

  const formattedFeedsData = feedsData.data.map((data, index) => ({
    id: index,
    from: data.pair[0],
    to: data.pair[1],
    address: `${data.ens}.data.eth`,
    decimals: Math.round(Math.log(parseInt(data.multiply)) / Math.log(10)),
  }));

  fs.writeFileSync(
    path.resolve(__dirname, '../src/data/feeds.json'),
    JSON.stringify(formattedFeedsData)
  );

  const formattedAssetsData = formattedFeedsData.reduce((unique, item) => {
    const result1 =
      unique.includes(item.from) || !isTickerValidForConversion(item.from)
        ? unique
        : [...unique, item.from];
    const result2 =
      result1.includes(item.to) || !isTickerValidForConversion(item.to)
        ? result1
        : [...result1, item.to];
    return result2;
  }, []);

  fs.writeFileSync(
    path.resolve(__dirname, '../src/data/assets.json'),
    JSON.stringify(formattedAssetsData)
  );
};

getMainnetPriceFeedsDataAsync();
