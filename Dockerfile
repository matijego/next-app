FROM node:16.16.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i

COPY next.config.js ./next.config.js

COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY components ./components
COPY assets ./assets

CMD ["npm", "run", "dev"]

