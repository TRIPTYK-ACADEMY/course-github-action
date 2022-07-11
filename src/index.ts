import { Quote, quotes } from './quotes.js'
import { randomElement } from './random-element.js'

export default function (): Quote {
  return randomElement(quotes)
}

export * from './quotes.js'
export * from './random-element.js'
