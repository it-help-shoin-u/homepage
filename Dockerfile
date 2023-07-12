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
# npm startは開発用のサーバーが立ち上がる。
# これをローカルのファイルと同期させたい場合はコンテナ実行時に--mount type=bind,src=./src,dst=/usr/src/app/srcと指定する。
# (src=./srcはReact Appにおける一般的なソースコードが格納されているディレクトリを指定すること。）