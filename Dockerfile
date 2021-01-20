FROM node:15

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install --s fs

COPY . .

ENV PORT =3000

EXPOSE 3000

CMD [ "npm", "run", "dev"]