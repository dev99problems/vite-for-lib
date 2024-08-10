import type { AddMethod } from './types'

const add: AddMethod = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
}

export { add }
