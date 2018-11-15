# Switchboard-Operator

"Hello, operator? Could I buy some phone numbers please?"

This is a small CLI app to buy phone numbers from Twilio to text from.

## Requirements

* npm
* [jest](https://jestjs.io/docs/en/getting-started.html)
* Node v10.7.0 +

## Set up

Use npm to install requirements.

```shell
$ cd switchboard-operator
$ npm install
```

You'll also need to set up environment variables via export or a .env file (based on .example.env):

```shell
$ export ACCOUNT_SID=[account sid]
```

```shell
$ export AUTH_TOKEN=[auth token]
```

```shell
$ export SMS_APP_SID=[sms messaging service sid]
```

```shell
$ export FRIENDLY_NAME=[friendly name added in twilio]
```

```shell
$ export VOICE_URL=[voice url added to number in twilio]
```

## Run

To buy phone numbers, example:

```shell
$ switchboard-operator buy --area_code 617 --quantity 2
```

If you need help:

```shell
$ switchboard-operator help <command>
```

## Development

To run for development:

```shell
$ cd switchboard-operator
$ npm link
$ switchboard-operator
```

or

```shell
$ cd switchboard-operator
$ ./bin/switchboard-operator
```

## Test

```shell
$ npm test
```

## Other

This CLI app is based off [this tutorial](https://timber.io/blog/creating-a-real-world-cli-app-with-node/).
