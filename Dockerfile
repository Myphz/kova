FROM node:20
WORKDIR /usr/src/app

ENV NODE_ENV production

COPY package*.json ./
RUN npm ci --include=dev

COPY . .
RUN npm run build

RUN npm prune

EXPOSE 3000

CMD [ "npm", "run", "start" ]