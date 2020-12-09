# # pull base image
# FROM node:alpine

# # set working directory
# WORKDIR /app

# # install dependies
# COPY package.json /app

# # install yarn
# RUN yarn install && yarn cache clean

# # add app
# COPY . /app
# # EXPOSE 3000


# # start app
# CMD ["yarn", "run", "build"]

# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]