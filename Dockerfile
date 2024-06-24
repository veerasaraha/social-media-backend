# build stage

FROM node:iron-alpine3.19 AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build


# production stage

FROM node:iron-alpine3.19 AS production

WORKDIR /app

COPY package*.json .

RUN  npm ci --only=roduction

COPY --from=build /app/dist ./dist

CMD [ "node" , "dist/index.js"]
