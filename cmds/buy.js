const ora = require('ora')
const buyArgsValidation = require('../utils/buy_args_validation')

module.exports = async (args) => {
  const spinner = ora('Loading').start();

  try {
	const buyNumber = require('../utils/twilio')

    const areaCode = args.area_code || args.a
	const quantity = args.quantity || args.q

	if (buyArgsValidation(areaCode, quantity)) {
	  spinner.text = `Buying ${quantity} phone numbers with area code ${areaCode}`

	  var current_phone_number = 0

	  while (current_phone_number < quantity) {
		current_phone_number += 1
		const purchase = await buyNumber('' + areaCode)
		spinner.succeed(purchase.phoneNumber)
		spinner.start()
		spinner.text = `Buying ${quantity - current_phone_number} phone numbers with area code ${areaCode}`
	  }

	  spinner.succeed(`Finished buying ${quantity} phone numbers with area code ${areaCode}`)
	} else {
	  spinner.fail('Please ensure --area_code and --quantity are specified, and that --quantity is <= 100')
	}
  } catch (err) {
    spinner.fail(err)
  }
}
