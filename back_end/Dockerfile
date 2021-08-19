FROM ubuntu:20.04

FROM node:14

WORKDIR /back_end

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]