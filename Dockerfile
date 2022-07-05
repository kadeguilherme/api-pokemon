FROM node:16-alpine

ENV PORT=3000

WORKDIR /api-pokemon

COPY package.json /api-pokemon

RUN npm install

COPY /src/ /api-pokemon/src
COPY /public/ /api-pokemon/public

EXPOSE $PORT

CMD ["npm","start"]

