# build environment
FROM node:13.12.0-alpine as build
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
# install npm with a clean slate
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
# copy app
COPY . ./
# run build to build react app
RUN npm run build

# production environment
FROM nginx:stable-alpine
# copy built react to `/usr/share/nginx/html` 
COPY --from=build /app/build /usr/share/nginx/html
# copy nginx configuration file to  to `/etc/nginx/conf.d/default.conf` 
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# expose a port to make it accessible
EXPOSE 80
# run ngnix in production mode
CMD ["nginx", "-g", "daemon off;"]