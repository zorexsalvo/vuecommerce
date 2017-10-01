FROM node:8.6.0
MAINTAINER Zorex Salvo (zorexsalvo@gmail.com)

COPY package.json /opt/
WORKDIR /opt/

RUN npm install -g
COPY . /opt/

EXPOSE 8080

CMD ["npm", "run", "dev"]
