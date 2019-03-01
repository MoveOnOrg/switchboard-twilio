function releaseArgsValidation(phone_number) {
  if (phone_number === undefined) {
    return false
  } else if (phone_number) {
    return true
  }
}

module.exports = { releaseArgsValidation }
