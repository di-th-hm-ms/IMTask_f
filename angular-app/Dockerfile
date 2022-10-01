FROM node:16.11.1 AS build

WORKDIR /app
# COPY ./app/package*.json ./
COPY ./app/package*.json /app/

RUN npm install
# COPY ./app/ ./
COPY ./app/ /app/
# ARG configuration=production

# RUN npm run build --output-path=./dist/out
# CMD ["ls", "/"]
RUN npm run build

# Nginx

FROM nginx:1.23.1 AS server

COPY --from=build /app/dist/app /usr/share/nginx/html
# COPY --from=build /app/dist/angular-app /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
