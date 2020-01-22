FROM node:lts-alpine

WORKDIR /explorer
COPY . .
RUN chmod 755 ./start.sh

RUN npm i
RUN npm i -g webdriverio

ENTRYPOINT ["./start.sh"]