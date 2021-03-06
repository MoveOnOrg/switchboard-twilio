require('dotenv').config()
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const messagingServiceSid = process.env.SMS_APP_SID
const client = require('twilio')(accountSid, authToken)

const releaseNumbersFromMessagingService = async function() {
  return client.messaging.services(messagingServiceSid)
          .phoneNumbers
          .each(phoneNumbers => {
            if(phoneNumbers.phoneNumber){
              releaseNumber(phoneNumbers.phoneNumber)
            }
          });
  // function to get all numbers and return it in an array
}

const releaseNumber = phoneNumber => {
  client.incomingPhoneNumbers
    .each({
      phoneNumber: `${phoneNumber}`
    }, (incomingPhoneNumbers) => {
      client.incomingPhoneNumbers(incomingPhoneNumbers.sid)
        .remove()
        .then(() => {console.log('removed number: ' + incomingPhoneNumbers.sid)})
        .done()
    })
}

module.exports = { releaseNumbersFromMessagingService, releaseNumber }
