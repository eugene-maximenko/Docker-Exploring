FROM node:14

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY . /usr/src/app/
RUN npm ci --only=production && npm cache clean --force

EXPOSE 8080

ENV TZ Europe/Moscow

CMD [ "node", "print.js"]