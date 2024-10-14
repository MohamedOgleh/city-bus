FROM node:16-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

ENV PORT=3000

CMD [ "node","app.js" ]