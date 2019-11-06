FROM node:lts-alpine

WORKDIR /explorer
COPY . .

RUN npm i
RUN npm i -g webdriverio

CMD ./start.sh