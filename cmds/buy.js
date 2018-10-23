const ora = require('ora')
const buyArgsValidation = require('../utils/buy_args_validation')

module.exports = async (args) => {
  const spinner = ora('Loading unicorns').start();

  try {
		const buyNumber = require('../utils/twilio')

    const areaCode = args.area_code || args.a
		const quantity = args.quantity || args.q

		if (buyArgsValidation(areaCode, quantity)) {
			spinner.text = `Buying ${quantity} phone numbers with area code ${areaCode}`

			Array.from(new Array(quantity),
								 (x,i) => {
									 spinner.text = `Buying phone number ${i+1}`
									 const purchase = buyNumber('' + areaCode)
									 purchase.then(purchasedNumber => spinner.text = `Purchased: ${purchasedNumber.sid}`)
								 })

			spinner.success(`Finished buying ${quantity} phone numbers with area code ${areaCode}`)
		} else {
			spinner.fail('Please ensure --area_code and --quantity are specified, and that --quantity is <= 100')
		}
  } catch (err) {
    spinner.fail(err)
  }
}
