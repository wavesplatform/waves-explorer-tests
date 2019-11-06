#!/bin/sh

sleep 5
SELENIUM_HOST='hub' npx codeceptjs run tests/assetInfo_test.js --plugins allure