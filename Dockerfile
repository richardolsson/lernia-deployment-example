FROM node:20

WORKDIR /var/app

ADD package.json /var/app/package.json
RUN npm install

ADD . /var/app

CMD npm start
