FROM node:16-alpine

WORKDIR /app
COPY package.json ./
RUN nmp install
COPY ./ ./
CMD ["npm", "start"]
