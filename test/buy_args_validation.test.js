const buyArgsValidation = require('../utils/buy_args_validation')

test('buyArgsValidation returns false if the areaCode is undefined', () => {
  const areaCode = undefined
  const quantity = 5
  expect(buyArgsValidation(areaCode, quantity)).toBe(false)
})

test('buyArgsValidation returns false if the quantity is undefined', () => {
  const areaCode = '617'
  const quantity = undefined
  expect(buyArgsValidation(areaCode, quantity)).toBe(false)
})

test('buyArgsValidation returns false if the quantity is more than 100', () => {
  const areaCode = '617'
  const quantity = 500
  expect(buyArgsValidation(areaCode, quantity)).toBe(false)
})

test('buyArgsValidation returns false if the areaCode is less than 0', () => {
  const areaCode = '617'
  const quantity = -4
  expect(buyArgsValidation(areaCode, quantity)).toBe(false)
})

test('buyArgsValidation returns true if the args look valid', () => {
  const areaCode = '617'
  const quantity = 5
  expect(buyArgsValidation(areaCode, quantity)).toBe(true)
})
