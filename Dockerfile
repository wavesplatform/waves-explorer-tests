FROM node:lts-alpine
ARG TESTURL
ENV TEST_URL=${TESTURL}

WORKDIR /explorer
COPY . .

RUN npm i
RUN npm i -g webdriverio

ENTRYPOINT ["./start.sh"]