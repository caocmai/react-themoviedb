# pull base image
FROM node:alpine

# set working directory
WORKDIR /app

# install dependies
COPY package.json /app

# install yarn
RUN yarn install && yarn cache clean

# add app
COPY . /app
EXPOSE 3000


# start app
CMD ["yarn", "run", "build", "--host=0.0.0.0"]