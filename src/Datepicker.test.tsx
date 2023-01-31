import { render } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'
import App from './App'

describe('Date Picker', () => {
  beforeEach(() => {
    render(<App />)
  })
})
