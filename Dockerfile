FROM node:22-alpine
WORKDIR /app
EXPOSE 5050
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm", "start"]