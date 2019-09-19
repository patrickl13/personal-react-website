# base image
FROM node:alpine

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH


# install and cache app dependencies
RUN npm install --silent
RUN npm install json-server --silent
COPY . . 

# start app
CMD ["node", "server.js"]