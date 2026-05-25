# Use an official base image
FROM node:20-alpine

# Set working directory
WORKDIR /src

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies (example: bash)
RUN npm install

# Copy application files (if any)
COPY . .


# Expose a port (optional)
#EXPOSE 3000

# Default command
CMD npm run dev 