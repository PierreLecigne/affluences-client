FROM node:12-alpine

WORKDIR /app

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@9.1.9

COPY . /app

CMD ng serve --host 0.0.0.0
