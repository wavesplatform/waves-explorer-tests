FROM node:lts-alpine
ARG TESTURL
ENV TEST_URL=${TESTURL}
ENV SELENIUM_HOST='hub'

WORKDIR /explorer
COPY . .
RUN chmod 755 ./start.sh

RUN npm i
RUN npm i -g webdriverio

ENTRYPOINT ["./start.sh"]