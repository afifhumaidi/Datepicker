import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  test("Should shoe App text", () => {
    expect(screen.getByText(/App/i)).toBeDefined()
  })
})
