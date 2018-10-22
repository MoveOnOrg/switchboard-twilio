const twilio = require('twilio')
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)


module.exports = async (areaCode) => {
  // Find and then purchase a phone number
	return client
		.availablePhoneNumbers('US')
		.local.list({
			areaCode: areaCode,
			smsEnabled: true,
		})
		.then(data => {
			const number = data[0];
			return client.incomingPhoneNumbers.create({
				phoneNumber: number.phoneNumber,
			});
		})
}
