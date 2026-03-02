FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Configures the port
ENV PORT=5000
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
