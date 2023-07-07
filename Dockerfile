FROM ubuntu:22.04
LABEL authors="h.tatsuhiro"

RUN apt update && apt install -y nodejs npm curl
RUN npm install -g n
RUN n 18.16.1

RUN apt purge -y nodejs npm
RUN apt autoremove -y

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]