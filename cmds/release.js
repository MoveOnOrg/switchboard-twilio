const ora = require('ora')
const releaseArgsValidation = require('../utils/release_args_validation')

module.exports = async (args) => {
  const spinner = ora('Loading').start();

  try {
	const releaseNumber = require('../utils/twilio_release')
  const phoneNumber = args.phone_number || args.a
	if (releaseArgsValidation(phoneNumber)) {
    spinner.text = `Releasing ${phoneNumber} from messaging service`
		const release = await releaseNumber(args)
		spinner.succeed(release)
    spinner.start()
  	} else {
  	  spinner.fail('Error releasing number')
    }
   spinner.succeed(`Released ${phoneNumber}`)
  } catch (err) {
    spinner.fail(err)
  }
}
