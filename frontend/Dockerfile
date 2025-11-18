# Use Node.js 20 Alpine as base image for Vite compatibility
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the Vite development server
CMD ["npm", "run", "dev"]
