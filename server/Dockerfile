FROM node:11

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY . /app

CMD [ "node", "main.js" ]