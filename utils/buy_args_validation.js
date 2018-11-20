function buyArgsValidation(area_code, quantity) {
  if (area_code === undefined) {
    return false
  } else if (quantity === undefined) {
    return false
  } else if (quantity > 100) {
    return false
  } else if (quantity > 0) {
    return true
  } else {
    return false
  }
}

module.exports = buyArgsValidation
