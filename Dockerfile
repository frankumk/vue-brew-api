# # build
# FROM node:lts-alpine as build-stage
# RUN apk update
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # EXPOSE 8080
# # EXPOSE 8082

# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
# RUN rm -rf /etc/nginx/nginx.conf
# EXPOSE 80

# CMD ["nginx","-g","daemon off;"]


# RUN npm run start

# CMD [ "npm", "run", "start"]
# CMD ["npm", "run", "serve"]

# build
FROM node:lts-alpine as build-stage
RUN apk update
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
COPY babel.config.js /app/
COPY src /app/src/
COPY . .

EXPOSE 80

RUN npm install
WORKDIR /app
RUN npm run build

# production
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]