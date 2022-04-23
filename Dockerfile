FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

EXPOSE 80
CMD [ "node","index.js" ]