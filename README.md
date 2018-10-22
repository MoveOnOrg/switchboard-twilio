# Switchboard-Operator

"Hello, operator? Could I buy some phone numbers please?"

This is a small script to buy phone numbers from Twilio to serve as text-from addresses.

## Requirements

* Python 3
* [pipenv](https://pipenv.readthedocs.io/en/latest/)

## Set up

Use pipenv to install requirements.

```shell
$ cd switchboard-operator
$ pipenv install
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
$ pipenv shell
$ python run.py
```

Or alternatively:

```shell
$ pipenv run python run.py
```

## Test

```shell
$ pipenv run pytest
```
