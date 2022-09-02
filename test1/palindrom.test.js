const palindrom = require('./palindrom')

test('palindrom function', () => {
  expect(palindrom('kasur ini rusak')).toBe(true)
  expect(palindrom('aabbaa')).toBe(true)
  expect(palindrom('palindrom')).toBe(false)
})