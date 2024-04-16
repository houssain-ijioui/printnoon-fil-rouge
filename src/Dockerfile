FROM node:20-alpine

WORKDIR /app/cient

COPY ../package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "front"]