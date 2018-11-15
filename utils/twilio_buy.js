require('dotenv').config()
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const smsApplicationSid = process.env.SMS_APP_SID
const friendlyName = process.env.FRIENDLY_NAME
const voiceUrl = process.env.VOICE_URL
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
	  const number = data[0]
	  return client.incomingPhoneNumbers.create({
	  	friendlyName: friendlyName,
	  	phoneNumber: number.phoneNumber,
	  	voiceMethod: 'POST',
	  	voiceUrl: 'https://demo.twilio.com/welcome/voice/'
	  })
	})
	.then(purchasedNumber => {
	  return client.messaging.services(smsApplicationSid)
	  	.phoneNumbers
	  	.create({phoneNumberSid: purchasedNumber.sid})
	})
}
