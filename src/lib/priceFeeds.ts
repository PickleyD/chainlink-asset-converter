export type Feed = {
  readonly id: number;
  readonly from: string;
  readonly to: string;
  readonly address: string;
  readonly decimals: number;
};

const ETH_USD_AGGREGATOR = 'eth-usd.data.eth';
const BTC_USD_AGGREGATOR = 'btc-usd.data.eth';
const LINK_USD_AGGREGATOR = 'link-usd.data.eth';
const XAU_USD_AGGREGATOR = 'xau-usd.data.eth';
const SNX_USD_AGGREGATOR = 'snx-usd.data.eth';
const DAI_USD_AGGREGATOR = 'dai-usd.data.eth';
const COMP_USD_AGGREGATOR = 'comp-usd.data.eth';
const DASH_USD_AGGREGATOR = 'dash-usd.data.eth';
const AUD_USD_AGGREGATOR = 'aud-usd.data.eth';
const LTC_USD_AGGREGATOR = 'ltc-usd.data.eth';
const GBP_USD_AGGREGATOR = 'gbp-usd.data.eth';
const ETC_USD_AGGREGATOR = 'etc-usd.data.eth';
const BCH_USD_AGGREGATOR = 'bch-usd.data.eth';
const XRP_USD_AGGREGATOR = 'xrp-usd.data.eth';
const EOS_USD_AGGREGATOR = 'eos-usd.data.eth';
const XAG_USD_AGGREGATOR = 'xag-usd.data.eth';
const KNC_USD_AGGREGATOR = 'knc-usd.data.eth';
const SDEFI_USD_AGGREGATOR = 'sdefi-usd.data.eth';
const FIL_USD_AGGREGATOR = 'fil-usd.data.eth';
const MCAP_USD_AGGREGATOR = '0xEC8761a0A73c34329CA5B1D3Dc7eD07F30e836e2';
const XMR_USD_AGGREGATOR = 'xmr-usd.data.eth';
const BNT_USD_AGGREGATOR = 'bnt-usd.data.eth';
const SXP_USD_AGGREGATOR = 'sxp-usd.data.eth';
const TRX_USD_AGGREGATOR = 'trx-usd.data.eth';
const N225_JPY_AGGREGATOR = 'n225-jpy.data.eth';
const UNI_USD_AGGREGATOR = 'uni-usd.data.eth';
const XTZ_USD_AGGREGATOR = 'xtz-usd.data.eth';
const DOT_USD_AGGREGATOR = 'dot-usd.data.eth';
const JPY_USD_AGGREGATOR = 'jpy-usd.data.eth';
const EUR_USD_AGGREGATOR = 'eur-usd.data.eth';
const BNB_USD_AGGREGATOR = 'bnb-usd.data.eth';
const OXT_USD_AGGREGATOR = 'oxt-usd.data.eth';
const ADX_USD_AGGREGATOR = 'adx-usd.data.eth';
const YFI_USD_AGGREGATOR = 'yfi-usd.data.eth';
const SCEX_USD_AGGREGATOR = 'scex-usd.data.eth';
const REN_USD_AGGREGATOR = 'ren-usd.data.eth';
const FNX_USD_AGGREGATOR = 'fnx-usd.data.eth';
const BRENT_USD_AGGREGATOR = 'brent-usd.data.eth';
const AAVE_USD_AGGREGATOR = 'aave-usd.data.eth';
const FTSE_GBP_AGGREGATOR = 'ftse-gbp.data.eth';
const CHF_USD_AGGREGATOR = 'chf-usd.data.eth';
const ADA_USD_AGGREGATOR = 'ada-usd.data.eth';

const DAI_ETH_AGGREGATOR = 'dai-eth.data.eth';
const USDC_ETH_AGGREGATOR = 'usdc-eth.data.eth';
const USDT_ETH_AGGREGATOR = 'usdt-eth.data.eth';
const SUSD_ETH_AGGREGATOR = 'susd-eth.data.eth';
const LINK_ETH_AGGREGATOR = 'link-eth.data.eth';
const ZRX_ETH_AGGREGATOR = 'zrx-eth.data.eth';
const BTC_ETH_AGGREGATOR = 'btc-eth.data.eth';
const KNC_ETH_AGGREGATOR = 'knc-eth.data.eth';
const TUSD_ETH_AGGREGATOR = 'tusd-eth.data.eth';
const BAT_ETH_AGGREGATOR = 'bat-eth.data.eth';
const AAVE_ETH_AGGREGATOR = 'aave-eth.data.eth';
const LRC_ETH_AGGREGATOR = 'lrc-eth.data.eth';
const MKR_ETH_AGGREGATOR = 'mkr-eth.data.eth';
const MANA_ETH_AGGREGATOR = 'mana-eth.data.eth';
const BUSD_ETH_AGGREGATOR = 'busd-eth.data.eth';
const REP_ETH_AGGREGATOR = 'rep-eth.data.eth';
const SNX_ETH_AGGREGATOR = 'snx-eth.data.eth';
const REN_ETH_AGGREGATOR = 'ren-eth.data.eth';
const ENJ_ETH_AGGREGATOR = 'enj-eth.data.eth';
const UNI_ETH_AGGREGATOR = 'uni-eth.data.eth';
const CRV_ETH_AGGREGATOR = 'crv-eth.data.eth';
const BNT_ETH_AGGREGATOR = 'bnt-eth.data.eth';
const PAX_ETH_AGGREGATOR = '0x3a08ebBaB125224b7b6474384Ee39fBb247D2200';
const ETH_XDR_AGGREGATOR = 'eth-xdr.data.eth';
const YFI_ETH_AGGREGATOR = 'yfi-eth.data.eth';
const CRO_ETH_AGGREGATOR = 'cro-eth.data.eth';
const DMG_ETH_AGGREGATOR = 'dmg-eth.data.eth';
const RCN_BTC_AGGREGATOR = 'rcn-btc.data.eth';
const BZRX_ETH_AGGREGATOR = 'bzrx-eth.data.eth';
const WOM_ETH_AGGREGATOR = 'wom-eth.data.eth';

export const mainnetPriceFeeds: readonly Feed[] = [
  {
    id: 0,
    from: 'ETH',
    to: 'USD',
    address: ETH_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 1,
    from: 'BTC',
    to: 'USD',
    address: BTC_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 2,
    from: 'LINK',
    to: 'USD',
    address: LINK_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 3,
    from: 'XAU',
    to: 'USD',
    address: XAU_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 4,
    from: 'SNX',
    to: 'USD',
    address: SNX_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 5,
    from: 'DAI',
    to: 'USD',
    address: DAI_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 6,
    from: 'COMP',
    to: 'USD',
    address: COMP_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 7,
    from: 'DASH',
    to: 'USD',
    address: DASH_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 8,
    from: 'AUD',
    to: 'USD',
    address: AUD_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 9,
    from: 'LTC',
    to: 'USD',
    address: LTC_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 10,
    from: 'GBP',
    to: 'USD',
    address: GBP_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 11,
    from: 'ETC',
    to: 'USD',
    address: ETC_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 12,
    from: 'BCH',
    to: 'USD',
    address: BCH_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 13,
    from: 'XRP',
    to: 'USD',
    address: XRP_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 14,
    from: 'EOS',
    to: 'USD',
    address: EOS_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 15,
    from: 'XAG',
    to: 'USD',
    address: XAG_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 16,
    from: 'KNC',
    to: 'USD',
    address: KNC_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 17,
    from: 'SDEFI',
    to: 'USD',
    address: SDEFI_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 18,
    from: 'FIL',
    to: 'USD',
    address: FIL_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 19,
    from: 'MCAP',
    to: 'USD',
    address: MCAP_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 20,
    from: 'XMR',
    to: 'USD',
    address: XMR_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 21,
    from: 'BNT',
    to: 'USD',
    address: BNT_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 22,
    from: 'SXP',
    to: 'USD',
    address: SXP_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 23,
    from: 'TRX',
    to: 'USD',
    address: TRX_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 24,
    from: 'N225',
    to: 'JPY',
    address: N225_JPY_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 25,
    from: 'UNI',
    to: 'USD',
    address: UNI_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 26,
    from: 'XTZ',
    to: 'USD',
    address: XTZ_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 27,
    from: 'DOT',
    to: 'USD',
    address: DOT_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 28,
    from: 'JPY',
    to: 'USD',
    address: JPY_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 29,
    from: 'EUR',
    to: 'USD',
    address: EUR_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 30,
    from: 'BNB',
    to: 'USD',
    address: BNB_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 31,
    from: 'OXT',
    to: 'USD',
    address: OXT_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 32,
    from: 'ADX',
    to: 'USD',
    address: ADX_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 33,
    from: 'YFI',
    to: 'USD',
    address: YFI_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 34,
    from: 'SCEX',
    to: 'USD',
    address: SCEX_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 35,
    from: 'REN',
    to: 'USD',
    address: REN_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 36,
    from: 'FNX',
    to: 'USD',
    address: FNX_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 37,
    from: 'BRENT',
    to: 'USD',
    address: BRENT_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 38,
    from: 'AAVE',
    to: 'USD',
    address: AAVE_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 39,
    from: 'FTSE',
    to: 'GBP',
    address: FTSE_GBP_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 40,
    from: 'CHF',
    to: 'USD',
    address: CHF_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 41,
    from: 'ADA',
    to: 'USD',
    address: ADA_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 42,
    from: 'DAI',
    to: 'ETH',
    address: DAI_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 43,
    from: 'USDC',
    to: 'ETH',
    address: USDC_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 44,
    from: 'USDT',
    to: 'ETH',
    address: USDT_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 45,
    from: 'SUSD',
    to: 'ETH',
    address: SUSD_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 46,
    from: 'LINK',
    to: 'ETH',
    address: LINK_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 47,
    from: 'ZRX',
    to: 'ETH',
    address: ZRX_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 48,
    from: 'BTC',
    to: 'ETH',
    address: BTC_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 49,
    from: 'KNC',
    to: 'ETH',
    address: KNC_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 50,
    from: 'TUSD',
    to: 'ETH',
    address: TUSD_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 51,
    from: 'BAT',
    to: 'ETH',
    address: BAT_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 52,
    from: 'AAVE',
    to: 'ETH',
    address: AAVE_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 53,
    from: 'LRC',
    to: 'ETH',
    address: LRC_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 54,
    from: 'MKR',
    to: 'ETH',
    address: MKR_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 55,
    from: 'MANA',
    to: 'ETH',
    address: MANA_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 56,
    from: 'BUSD',
    to: 'ETH',
    address: BUSD_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 57,
    from: 'REP',
    to: 'ETH',
    address: REP_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 58,
    from: 'SNX',
    to: 'ETH',
    address: SNX_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 59,
    from: 'REN',
    to: 'ETH',
    address: REN_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 60,
    from: 'ENJ',
    to: 'ETH',
    address: ENJ_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 61,
    from: 'UNI',
    to: 'ETH',
    address: UNI_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 62,
    from: 'CRV',
    to: 'ETH',
    address: CRV_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 63,
    from: 'BNT',
    to: 'ETH',
    address: BNT_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 64,
    from: 'PAX',
    to: 'ETH',
    address: PAX_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 65,
    from: 'ETH',
    to: 'XDR',
    address: ETH_XDR_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 66,
    from: 'YFI',
    to: 'ETH',
    address: YFI_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 67,
    from: 'CRO',
    to: 'ETH',
    address: CRO_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 68,
    from: 'DMG',
    to: 'ETH',
    address: DMG_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 69,
    from: 'RCN',
    to: 'BTC',
    address: RCN_BTC_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 70,
    from: 'BZRX',
    to: 'ETH',
    address: BZRX_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 71,
    from: 'WOM',
    to: 'ETH',
    address: WOM_ETH_AGGREGATOR,
    decimals: 18,
  },
];
