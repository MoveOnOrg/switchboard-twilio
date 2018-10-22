const menus = {
  main: `
    switchboard-operator [command] <options>

    buy ................ buy phone numbers from Twilio
    version ............ show package version
    help ............... show help menu for a command`,

  buy: `
    switchboard-operator buy <options>

    --area-code, -a ..... the area code to use
    --quantity, -q ...... the number of phone numbers to buy`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
