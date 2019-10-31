# Waves Explorer UI tests

Waves Explorer UI tests
https://wavesexplorer.com


### Installation

```sh
$ npm i
```

### Running tests
#### All tests

```sh
$ npx codeceptjs run
```

#### Single test
Default browser is Google Chrome
```sh
$ npx codeceptjs run tests/assetInfo_tets.js
```

#### Run tests on different url
```sh
$ TEST_URL=https://stage.wavesexplorer.com npx codeceptjs run
```