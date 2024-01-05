FROM node:14-alpine AS build

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3030
