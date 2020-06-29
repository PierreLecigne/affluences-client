FROM node:12-alpine

WORKDIR /app

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@10.0.0

COPY . /app

CMD ng serve --host 0.0.0.0
