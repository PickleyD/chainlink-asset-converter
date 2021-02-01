# chainlink-asset-converter

![Logo](https://user-images.githubusercontent.com/6655367/106485704-cd810480-64a8-11eb-852a-e481f92693ff.png?raw=true 'chainlink-asset-converter')

### Super easy conversion between any of the assets currently supported by [Chainlink's price feeds network](https://data.chain.link/)

## Installation

`npm i chainlink-asset-converter`

## Basic Usage

```typescript
import { convert } from 'chainlink-asset-converter';

await convert({
  amount: 5,
  from: 'ETH',
  to: 'BTC',
  // Your Ethereum JSON-RPC endpoint*
  endpoint: 'https://mainnet.infura.io/v3/ab01ab01ab01ab01ab01ab01',
});
// => '0.2'
```

\*you could get your own one of these with a free-tier account at [Infura](https://infura.io) for example

## [Demo](https://convert.link) // [Docs](https://pickleyd.github.io/chainlink-asset-converter/)
