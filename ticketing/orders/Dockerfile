FROM node:alpine

WORKDIR /app
RUN apk update && apk upgrade && \
  apk add --no-cache make gcc g++ python bash git openssh
COPY package.json .
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]