import test from 'ava';
import { ethers } from 'ethers';
import sinon from 'sinon';

import { convert } from './converter';
import { Feed } from './priceFeeds';

const testFeedsA: readonly Feed[] = [
  {
    id: 0,
    from: 'A',
    to: 'B',
    address: '0xAB',
    decimals: 8,
  },
  {
    id: 1,
    from: 'B',
    to: 'C',
    address: '0xBC',
    decimals: 8,
  },
  {
    id: 2,
    from: 'C',
    to: 'D',
    address: '0xCD',
    decimals: 8,
  },
];

/**
 * Set answers to the following:
 *   A/B: 100
 *   B/C: 0.2
 *   C/D: 0.001
 */
test.before(() => {
  const contractConstructorStub = sinon.stub();
  contractConstructorStub
    .withArgs('0xAB', sinon.match.any, sinon.match.any)
    .returns({
      latestRoundData: () => ({
        answer: 10000000000,
      }),
    });

  contractConstructorStub
    .withArgs('0xBC', sinon.match.any, sinon.match.any)
    .returns({
      latestRoundData: () => ({
        answer: 20000000,
      }),
    });

  contractConstructorStub
    .withArgs('0xCD', sinon.match.any, sinon.match.any)
    .returns({
      latestRoundData: () => ({
        answer: 100000,
      }),
    });

  sinon.replace(ethers, 'Contract', contractConstructorStub);
});

test.after.always(() => {
  sinon.restore();
});

test('5A to 5A', async (t) => {
  const provider = sinon.fake();

  const result = await convert({
    amount: 5,
    from: 'A',
    to: 'A',
    provider,
    feeds: testFeedsA,
  });

  t.deepEqual(result, 5);
});

test('5A to 500B', async (t) => {
  const provider = sinon.fake();

  const result = await convert({
    amount: 5,
    from: 'A',
    to: 'B',
    provider,
    feeds: testFeedsA,
  });

  t.deepEqual(result, 500);
});

test('5A to 100C', async (t) => {
  const provider = sinon.fake();

  const result = await convert({
    amount: 5,
    from: 'A',
    to: 'C',
    provider,
    feeds: testFeedsA,
  });

  t.deepEqual(result, 100);
});

test('5A to .1D', async (t) => {
  const provider = sinon.fake();

  const result = await convert({
    amount: 5,
    from: 'A',
    to: 'D',
    provider,
    feeds: testFeedsA,
  });

  t.deepEqual(result, 0.1);
});

test('5D to 250A', async (t) => {
  const provider = sinon.fake();

  const result = await convert({
    amount: 5,
    from: 'D',
    to: 'A',
    provider,
    feeds: testFeedsA,
  });

  t.deepEqual(result, 250);
});

test('.001C to .000001D', async (t) => {
  const provider = sinon.fake();

  const result = await convert({
    amount: 0.001,
    from: 'C',
    to: 'D',
    provider,
    feeds: testFeedsA,
  });

  t.deepEqual(result, 0.000001);
});

test('1000000A to 100000000B', async (t) => {
  const provider = sinon.fake();

  const result = await convert({
    amount: 1000000,
    from: 'A',
    to: 'B',
    provider,
    feeds: testFeedsA,
  });

  t.deepEqual(result, 100000000);
});
