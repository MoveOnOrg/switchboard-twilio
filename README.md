# Switchboard-Operator

"Hello, operator? Could I buy some phone numbers please?"

This is a small script to buy phone numbers from Twilio to text from.

## Requirements

* npm
* [jest](https://jestjs.io/docs/en/getting-started.html)

## Set up

Use npm to install requirements.

```shell
$ cd switchboard-operator
$ npm install
```

You'll also need to set up environment variables:

```shell
$ export ACCOUNT_SID=[account sid]
```

```shell
$ export AUTH_TOKEN=[auth token]
```

## Run

You can activate the virtual env:

```shell
$ switchboard-operator
```

## Development

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
