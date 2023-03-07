import { RBTC } from './rbtc'

describe('RBTC', () => {
  it('static constructor uses cache', () => {
    expect(RBTC.onChain(30) === RBTC.onChain(30)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(RBTC.onChain(30) !== RBTC.onChain(31)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(RBTC.onChain(30).equals(RBTC.onChain(31))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(RBTC.onChain(30).equals(RBTC.onChain(30))).toEqual(true)
  })
})
