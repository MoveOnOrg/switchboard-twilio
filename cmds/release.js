const ora = require('ora')
const { releaseArgsValidation } = require('../utils/release_args_validation')

module.exports = async (args) => {
  const spinner = ora('Loading').start()

  try {
    const releaseNumber = require('../utils/twilio_release')
    const wipeAllNumbers = require('../utils/twilio_wipe_phone_numbers')
    const phoneNumber = args.phone_number || args.a
    const wipePhoneNumbers = args["_"][0].indexOf('wipe') > -1
    if (releaseArgsValidation(phoneNumber)) {
      spinner.text = `Releasing ${phoneNumber} from messaging service`
      const release = await releaseNumber(args)
      spinner.succeed(release)
      spinner.start()
    } else if (wipePhoneNumbers && !phoneNumber) {
      console.log('args:', args);
      spinner.text = `Releasing all phone numbers from messaging service`
      const wipe = await wipeAllNumbers()
      spinner.suceed(wipe)
      spinner.start()
    } else {
      spinner.fail('Error releasing number')
    }
    spinner.succeed(`Released ${phoneNumber}`)
  } catch (err) {
    spinner.fail(err)
  }
}
