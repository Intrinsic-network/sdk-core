import { Token } from './token'

/**
 * Known WRBTC implementation addresses, used in our implementation of Rbtc#wrapped
 */
export const WRBTC: { [chainId: number]: Token } = {
  [30]: new Token(30, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WRBTC', 'Wrapped RBTC'),
  [31]: new Token(31, '0x09b6ca5e4496238a1f176aea6bb607db96c2286e', 18, 'WRBTC', 'Wrapped RBTC'),
}
