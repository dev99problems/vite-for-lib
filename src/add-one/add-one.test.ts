import { describe, it, expect } from 'vitest'

import { addOne } from './add-one'

describe('addOne', () => {
  it('should return "undefined" if passed param is not "number"', () => {
    //@ts-expect-error this done intentionally
    const result = addOne('2')

    expect(result).toBeUndefined()
  })

  it('should return sum of passed number with 1', () => {
    const result = addOne(19)

    expect(result).toBe(20)
  })
})
