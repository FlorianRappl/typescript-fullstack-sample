FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . .

ENV NODE_ENV production
ENV PORT 9000

EXPOSE 9000
CMD [ "npm", "run", "serve" ]
