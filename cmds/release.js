const ora = require('ora')
const releaseArgsValidation = require('../utils/release_args_validation')

module.exports = async (args) => {
  const spinner = ora('Loading').start();

  try {
	const releaseNumber = require('../utils/twilio_release')
  const phoneNumber = args.phone_number || args.a
	if (releaseArgsValidation(phoneNumber)) {
    // const phoneNumber = args.phone_number || ''
	  // spinner.text = `Releasing ${phoneNumber}`
		const release = await releaseNumber(args)
		// spinner.succeed(purchase.phoneNumber)
		spinner.start()
  	} else {
  	  spinner.fail('Error releasing number')
    }
   // spinner.succeed(`Finished releasing ${phoneNumber}`)
  } catch (err) {
    spinner.fail(err)
  }
}
