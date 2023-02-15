FROM node:18-alpine as build

WORKDIR /usr/local/app

COPY ../../src/AngularProductsCRUD.UI /usr/local/app/
RUN npm install
RUN npm run build --  --output-path=dist --output-hashing=all

FROM nginx:1.19.3-alpine
COPY  --from=build /usr/local/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.sample.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]