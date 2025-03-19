FROM node:20-alpine

WORKDIR /cat-app
COPY ./cat-app/package*.json ./
RUN npm install

COPY ./cat-app/ .
EXPOSE 8080
ENV PORT=8080

CMD ["npm", "run", "dev"]
