FROM node:18

WORKDIR /usr/app

COPY package*.json ./
RUN npm install --force

COPY . .

# Install Files
RUN npm install 

# Copy SRC
COPY . .

# Build
RUN npm run build

# Open Port
EXPOSE 1337

# Docker Command to Start Service
CMD [ "node", "build/server.js" ]