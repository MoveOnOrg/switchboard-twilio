require('dotenv').config()
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

module.exports = async () => {
  console.log('getting here?');
  const allNumbers = []
  if(!!allNumbers.length){
    // iterate through allNumbers array and release 1 by 1 and print message that number has been released
    client.incomingPhoneNumbers
      .each({
        phoneNumber: `+1${args.phone_number}`
      }, (incomingPhoneNumbers) => {
        client.incomingPhoneNumbers(incomingPhoneNumbers.sid)
          .remove()
          .then(() => incomingPhoneNumbers.sid)
          .done()
      }
      )
  }
}
