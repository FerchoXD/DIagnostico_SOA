# Use the Node.js 20 image as the base image
FROM node:20

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies specified in the package.json file
RUN npm install

# Add node_modules/.bin to the PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy all the files from the current directory to the working directory inside the container
COPY . .

# Build the application using the specified build command
RUN npm run build

# Expose port 3000 to allow incoming connections
EXPOSE 3000

# Start the application by running the specified command
CMD ["npm", "start"]
