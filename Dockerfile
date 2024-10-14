FROM node:22-alpine3.19

WORKDIR /app

COPY package*.json /app

RUN npm install 

COPY . .

ENV PORT=3000\NAME=MOHAMED


CMD ["node","app.js"]