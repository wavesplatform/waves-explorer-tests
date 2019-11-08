# Waves Explorer UI tests

Waves Explorer UI tests
https://wavesexplorer.com


### Installation

```sh
$ npm i
```

### Running tests
Need running local Selenium on port 4444

Or enable selenium-standalone plugin in config file

```javascript
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
```

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
$ TEST_URL=https://wavesexplorer.com npx codeceptjs run
```

### Docker Compose
Compose with included selenium grid as service
#### Run all tests
```sh
$ TEST_URL=https://wavesexplorer.com docker-compose up --abort-on-container-exit --build
```