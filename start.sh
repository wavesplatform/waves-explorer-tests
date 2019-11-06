#!/bin/sh

sleep 5
# SELENIUM_HOST='hub' npx codeceptjs run-workers --suites 4 --plugins allure
SELENIUM_HOST='hub' npx codeceptjs run --plugins allure