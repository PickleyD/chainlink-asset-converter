import test from 'ava';
import sinon from 'sinon';
import { ethers } from 'ethers';

import { Feed } from './priceFeeds';
import { convert } from './converter';

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

test('convert test', (t) => {
  const provider = sinon.fake();

  const contractConstructorStub = sinon.stub();
  contractConstructorStub.withArgs('0x001', sinon.match.any, provider).returns({
    latestRoundData: () => ({
      answer: 100,
    }),
  });

  sinon.replace(ethers, 'Contract', contractConstructorStub);

  t.deepEqual(
    convert({
      amount: 5,
      from: 'A',
      to: 'B',
      provider,
      feeds: testFeedsA,
    }),
    500
  );
});
