FROM node:18

WORKDIR /usr/app

COPY package*.json ./
RUN npm install --force

COPY . .

# Install Files
RUN npm install 

# Copy SRC
COPY . .
