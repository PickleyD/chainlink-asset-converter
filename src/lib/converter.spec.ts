import test from 'ava';

import { getShortestPath, Path } from './converter';

const shortestPathFromEthToBtc: readonly Path[] = [
  {
    feedId: 0,
    inverse: false,
  },
  {
    feedId: 1,
    inverse: true,
  },
];

test('shortestPathEthToBtc', (t) => {
  t.deepEqual(getShortestPath('ETH', 'BTC'), shortestPathFromEthToBtc);
});

const shortestPathFromBtcToLink: readonly Path[] = [
  {
    feedId: 1,
    inverse: false,
  },
  {
    feedId: 0,
    inverse: true,
  },
  {
    feedId: 2,
    inverse: true,
  },
];

test('shortestPathBtcToLink', (t) => {
  t.deepEqual(getShortestPath('BTC', 'LINK'), shortestPathFromBtcToLink);
});
