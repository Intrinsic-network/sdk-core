import invariant from 'tiny-invariant'
import { Currency } from './currency'
import { NativeCurrency } from './nativeCurrency'
import { Token } from './token'
import { WRBTC } from './wrbtc'

/**
 * RBTC is the main usage of a 'native' currency, i.e. for RSK mainnet and testnet
 */
export class RBTC extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'RBTC', 'RBTC')
  }

  public get wrapped(): Token {
    const wrbtc = WRBTC[this.chainId]
    invariant(!!wrbtc, 'WRAPPED')
    return wrbtc
  }

  private static _rbtcCache: { [chainId: number]: RBTC } = {}

  public static onChain(chainId: number): RBTC {
    return this._rbtcCache[chainId] ?? (this._rbtcCache[chainId] = new RBTC(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
