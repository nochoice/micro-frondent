FROM node:14

# Create app directory
RUN mkdir -p /code
WORKDIR /code

# Install app dependencies
COPY package.json /code/
COPY yarn.lock /code/
COPY webpack.config.js /code/
COPY .babelrc /code/
RUN npm install

# Bundle app source
COPY ./src /code/src
RUN npm run build

EXPOSE 5000
CMD [ "npm", "run", "build:start" ]