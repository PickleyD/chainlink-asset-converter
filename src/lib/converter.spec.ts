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
    address: '0x001',
    decimals: 1,
  },
  {
    id: 1,
    from: 'B',
    to: 'C',
    address: '0x002',
    decimals: 1,
  },
  {
    id: 2,
    from: 'C',
    to: 'D',
    address: '0x003',
    decimals: 1,
  },
];

test.afterEach(() => {
  sinon.restore();
});

test('convert test', async (t) => {
  const provider = sinon.fake();

  const contractConstructorStub = sinon.stub();
  contractConstructorStub.withArgs('0x001', sinon.match.any, provider).returns({
    latestRoundData: () => ({
      answer: 100,
    }),
  });

  sinon.replace(ethers, 'Contract', contractConstructorStub);

  const result = await convert({
    amount: 5,
    from: 'A',
    to: 'B',
    provider,
    feeds: testFeedsA,
  });

  t.deepEqual(result, 500);
});
