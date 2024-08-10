import { describe, it, expect } from 'vitest'

import { add } from '../add'

describe('add', () => {
  it('should return "undefined" if one of params is not "number"', () => {
    //@ts-expect-error this done intentionally
    const result1 = add(1, '2')
    //@ts-expect-error this done intentionally
    const result2 = add('1', 2)

    expect(result1).toBeUndefined()
    expect(result2).toBeUndefined()
  })

  it('should return sum of 2 passed numbers', () => {
    const result = add(1, 2)

    expect(result).toBe(3)
  })
})
