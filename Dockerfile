FROM node:20-alpine

WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com/ \
 && npm config set fetch-retries 10 \
 && npm config set fetch-retry-mintimeout 20000 \
 && npm config set fetch-retry-maxtimeout 120000 \
 && npm config set maxsockets 1

COPY package*.json ./

RUN npm ci --no-audit --no-fund

COPY . .

CMD ["npm", "run", "dev"]
