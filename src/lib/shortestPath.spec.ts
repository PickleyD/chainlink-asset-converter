import test from 'ava';

import { Feed } from './priceFeeds';
import { getShortestPath, Path } from './shortestPath';

const testFeedsA: readonly Feed[] = [
  {
    id: 0,
    from: 'A',
    to: 'B',
    address: '',
    decimals: 1,
  },
  {
    id: 1,
    from: 'B',
    to: 'C',
    address: '',
    decimals: 1,
  },
  {
    id: 2,
    from: 'C',
    to: 'D',
    address: '',
    decimals: 1,
  },
];

const shortestPathFromAToB: readonly Path[] = [
  {
    feedId: 0,
    inverse: false,
  },
];

test('shortestPathAToB', (t) => {
  t.deepEqual(getShortestPath('A', 'B', testFeedsA), shortestPathFromAToB);
});

const shortestPathFromAToC: readonly Path[] = [
  {
    feedId: 0,
    inverse: false,
  },
  {
    feedId: 1,
    inverse: false,
  },
];

test('shortestPathAToC', (t) => {
  t.deepEqual(getShortestPath('A', 'C', testFeedsA), shortestPathFromAToC);
});

const shortestPathFromAToD: readonly Path[] = [
  {
    feedId: 0,
    inverse: false,
  },
  {
    feedId: 1,
    inverse: false,
  },
  {
    feedId: 2,
    inverse: false,
  },
];

test('shortestPathAToD', (t) => {
  t.deepEqual(getShortestPath('A', 'D', testFeedsA), shortestPathFromAToD);
});
