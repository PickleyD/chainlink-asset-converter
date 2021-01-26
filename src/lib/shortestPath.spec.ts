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
  {
    id: 3,
    from: 'D',
    to: 'E',
    address: '',
    decimals: 1,
  },
  {
    id: 4,
    from: 'E',
    to: 'F',
    address: '',
    decimals: 1,
  },
  {
    id: 5,
    from: 'B',
    to: 'F',
    address: '',
    decimals: 1,
  },
];

const shortestPathFromAToB: Path = [
  {
    feedId: 0,
    inverse: false,
  },
];

test('shortestPathAToB', (t) => {
  t.deepEqual(getShortestPath('A', 'B', testFeedsA), shortestPathFromAToB);
});

const shortestPathFromAToC: Path = [
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

const shortestPathFromAToD: Path = [
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

const shortestPathFromDToA: Path = [
  {
    feedId: 2,
    inverse: true,
  },
  {
    feedId: 1,
    inverse: true,
  },
  {
    feedId: 0,
    inverse: true,
  },
];

test('shortestPathDToA', (t) => {
  t.deepEqual(getShortestPath('D', 'A', testFeedsA), shortestPathFromDToA);
});

const shortestPathFromEToB: Path = [
  {
    feedId: 4,
    inverse: false,
  },
  {
    feedId: 5,
    inverse: true,
  },
];

test('shortestPathEToB', (t) => {
  t.deepEqual(getShortestPath('E', 'B', testFeedsA), shortestPathFromEToB);
});
