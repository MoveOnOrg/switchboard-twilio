function releaseArgsValidation(args) {
	if (args.phone_number === undefined) {
		return false
	} else if (args.friendly_name === undefined) {
		return false
	} else {
		return false
	}
}

module.exports = releaseArgsValidation
