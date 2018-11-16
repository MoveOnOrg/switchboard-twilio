require('dotenv').config()
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const smsApplicationSid = process.env.SMS_APP_SID
const client = require('twilio')(accountSid, authToken)

module.exports = async (args) => {
  if(args.phone_number){
    let sid = ''
    client.incomingPhoneNumbers
      .each({
         phoneNumber: `+1${args.phone_number}`
       }, (incomingPhoneNumbers) => {
           console.log(incomingPhoneNumbers.sid)
           sid = incomingPhoneNumbers.sid
         }
       )
       .then(
         client.incomingPhoneNumbers(sid)
         .remove()
         .then(incoming_phone_number => console.log('Released ' + incoming_phone_number.sid))
         .done()
       )
  }

  if(args.friendly_name){

  }
  
  if(args.area_code){

  }
}
