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
const BAND_USD_AGGREGATOR = '0x919C77ACc7373D000b329c1276C76586ed2Dd19F';
const BTC_ARS_AGGREGATOR = '0xA912dd6b62B1C978e205B86994E057B1b494D73a';
const CNY_USD_AGGREGATOR = '0xeF8A4aF35cd47424672E3C590aBD37FBB7A7759a';
const COVER_USD_AGGREGATOR = '0x0ad50393F11FfAc4dd0fe5F1056448ecb75226Cf';
const DPI_USD_AGGREGATOR = '0xD2A593BF7594aCE1faD597adb697b5645d5edDB2';
const HEGIC_USD_AGGREGATOR = '0xBFC189aC214E6A4a35EBC281ad15669619b75534';
const IOST_USD_AGGREGATOR = '0xd0935838935349401c73a06FCde9d63f719e84E5';
const TSLA_USD_AGGREGATOR = '0x1ceDaaB50936881B3e449e47e40A2cDAF5576A4a';
const XHV_USD_AGGREGATOR = '0xeccBeEd9691d8521385259AE596CF00D68429de0';

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
const BAL_ETH_AGGREGATOR = 'bal-eth.data.eth';
const BAND_ETH_AGGREGATOR = '0x0BDb051e10c9718d1C29efbad442E88D38958274';
const CEL_ETH_AGGREGATOR = '0x75FbD83b4bd51dEe765b2a01e8D3aa1B020F9d33';
const COMP_ETH_AGGREGATOR = '0x1B39Ee86Ec5979ba5C322b826B3ECb8C79991699';
const COVER_ETH_AGGREGATOR = '0x7B6230EF79D5E97C11049ab362c0b685faCBA0C2';
const CREAM_ETH_AGGREGATOR = '0x82597CFE6af8baad7c0d441AA82cbC3b51759607';
const DPI_ETH_AGGREGATOR = '0x029849bbc0b1d93b85a8b6190e979fd38F5760E2';
const FTT_ETH_AGGREGATOR = '0xF0985f7E2CaBFf22CecC5a71282a89582c382EFE';
const HEGIC_ETH_AGGREGATOR = '0xAf5E8D9Cd9fC85725A83BF23C52f1C39A71588a6';
const KP3R_ETH_AGGREGATOR = '0xe7015CCb7E5F788B8c1010FC22343473EaaC3741';
const MLN_ETH_AGGREGATOR = '0xDaeA8386611A157B08829ED4997A8A62B557014C';
const MTA_ETH_AGGREGATOR = '0x98334b85De2A8b998Ba844c5521e73D68AD69C00';
const NMR_ETH_AGGREGATOR = '0x9cB2A01A7E64992d32A34db7cEea4c919C391f6A';
const OMG_ETH_AGGREGATOR = '0x57C9aB3e56EE4a83752c181f241120a3DBba06a1';
const RLC_ETH_AGGREGATOR = '0x4cba1e1fdc738D0fe8DB3ee07728E2Bc4DA676c6';
const RUNE_ETH_AGGREGATOR = '0x875D60C44cfbC38BaA4Eb2dDB76A767dEB91b97e';
const SRM_ETH_AGGREGATOR = '0x050c048c9a0CD0e76f166E2539F87ef2acCEC58f';
const SUSHI_ETH_AGGREGATOR = '0xe572CeF69f43c2E488b33924AF04BDacE19079cf';
const UMA_ETH_AGGREGATOR = '0xf817B69EA583CAFF291E287CaE00Ea329d22765C';
const USDK_ETH_AGGREGATOR = '0xfAC81Ea9Dd29D8E9b212acd6edBEb6dE38Cb43Af';
const UST_ETH_AGGREGATOR = '0xa20623070413d42a5C01Db2c8111640DD7A5A03a';
const WNXM_ETH_AGGREGATOR = '0xe5Dc0A609Ab8bCF15d3f35cFaa1Ff40f521173Ea';
const YFII_ETH_AGGREGATOR = '0xaaB2f6b45B28E962B3aCd1ee4fC88aEdDf557756';

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
  {
    id: 72,
    from: 'BAND',
    to: 'USD',
    address: BAND_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 73,
    from: 'BTC',
    to: 'ARS',
    address: BTC_ARS_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 74,
    from: 'CNY',
    to: 'USD',
    address: CNY_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 75,
    from: 'COVER',
    to: 'USD',
    address: COVER_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 76,
    from: 'DPI',
    to: 'USD',
    address: DPI_USD_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 77,
    from: 'HEGIC',
    to: 'USD',
    address: HEGIC_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 78,
    from: 'IOST',
    to: 'USD',
    address: IOST_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 79,
    from: 'TSLA',
    to: 'USD',
    address: TSLA_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 80,
    from: 'XHV',
    to: 'USD',
    address: XHV_USD_AGGREGATOR,
    decimals: 8,
  },
  {
    id: 81,
    from: 'BAL',
    to: 'ETH',
    address: BAL_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 82,
    from: 'BAND',
    to: 'ETH',
    address: BAND_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 83,
    from: 'CEL',
    to: 'ETH',
    address: CEL_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 84,
    from: 'COMP',
    to: 'ETH',
    address: COMP_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 85,
    from: 'COVER',
    to: 'ETH',
    address: COVER_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 86,
    from: 'CREAM',
    to: 'ETH',
    address: CREAM_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 87,
    from: 'DPI',
    to: 'ETH',
    address: DPI_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 88,
    from: 'FTT',
    to: 'ETH',
    address: FTT_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 89,
    from: 'HEGIC',
    to: 'ETH',
    address: HEGIC_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 90,
    from: 'KP3R',
    to: 'ETH',
    address: KP3R_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 91,
    from: 'MLN',
    to: 'ETH',
    address: MLN_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 92,
    from: 'MTA',
    to: 'ETH',
    address: MTA_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 93,
    from: 'NMR',
    to: 'ETH',
    address: NMR_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 94,
    from: 'OMG',
    to: 'ETH',
    address: OMG_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 95,
    from: 'RLC',
    to: 'ETH',
    address: RLC_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 96,
    from: 'RUNE',
    to: 'ETH',
    address: RUNE_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 97,
    from: 'SRM',
    to: 'ETH',
    address: SRM_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 98,
    from: 'SUSHI',
    to: 'ETH',
    address: SUSHI_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 99,
    from: 'UMA',
    to: 'ETH',
    address: UMA_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 100,
    from: 'USDK',
    to: 'ETH',
    address: USDK_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 101,
    from: 'UST',
    to: 'ETH',
    address: UST_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 102,
    from: 'WNXM',
    to: 'ETH',
    address: WNXM_ETH_AGGREGATOR,
    decimals: 18,
  },
  {
    id: 103,
    from: 'YFII',
    to: 'ETH',
    address: YFII_ETH_AGGREGATOR,
    decimals: 18,
  },
];
