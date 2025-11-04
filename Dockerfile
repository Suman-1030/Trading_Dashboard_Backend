# Use official Node.js image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Command to run the app
CMD ["node", "index.js"]
