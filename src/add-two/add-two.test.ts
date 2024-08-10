import { describe, it, expect } from 'vitest'

import { addTwo } from './add-two'

describe('addTwo', () => {
  it('should return "undefined" if passed param is not "number"', () => {
    //@ts-expect-error this done intentionally
    const result = addTwo('2')

    expect(result).toBeUndefined()
  })

  it('should return sum of passed number with 2', () => {
    const result = addTwo(8)

    expect(result).toBe(10)
  })
})
