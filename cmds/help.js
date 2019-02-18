const menus = {
  main: `
    switchboard [command] <options>

    buy ................ buy phone numbers from Twilio
    version ............ show package version
    help ............... show help menu for a command
    release ............ release a phone number from Twilio
    wipe ............... release all phone numbers from Twilio Messaging Service`,

  buy: `
    switchboard buy <options>

    --area_code, -a ..... the area code to use
    --quantity, -q ...... the number of phone numbers to buy`,

  release: `
    switchboard release <options>

    --phone_number ...... phone number to buy`,

  release: `
    switchboard --wipe all

    --wipe all ...... RELEASES ALL PHONE NUMBERS FROM MESSAGING SERVICE`
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
