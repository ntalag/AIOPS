FROM node
WORKDIR /app
COPY package*.json ./
COPY ./ .
RUN npm install
EXPOSE 8000
CMD  "npm start"

