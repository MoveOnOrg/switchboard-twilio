const ora = require('ora')
const releaseArgsValidation = require('../utils/release_args_validation')

module.exports = async (args) => {
  const spinner = ora('Loading').start();

  try {
	const releaseNumber = require('../utils/twilio_release')

	if (releaseArgsValidation(args)) {
    const phoneNumber = args.phone_number
	  spinner.text = `Releasing ${phoneNumber}`

	  var current_phone_number = 0

		const release = await releaseNumber(phoneNumber)
		spinner.succeed(purchase.phoneNumber)
		spinner.start()
	  }

	  spinner.succeed(`Finished releasing ${phoneNumber}`)
	} else {
	  spinner.fail('Error releasing number')
	}
  } catch (err) {
    spinner.fail(err)
  }
}
