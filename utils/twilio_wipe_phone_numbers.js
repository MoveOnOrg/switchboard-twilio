require('dotenv').config()
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)
const { releaseNumbersFromMessagingService }  = require('./helper_twilio')

module.exports = async () => {
  // gets all numbers from messaging service and releases them 1 by 1
  await releaseNumbersFromMessagingService()
}
