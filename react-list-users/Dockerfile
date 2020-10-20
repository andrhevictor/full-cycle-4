FROM node:12.14.0-alpine3.11

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install react-scripts@3.4.0

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]