FROM node:lts-alpine as build

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn run build

FROM nginx:1.16.0-alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY /nginx/nginx.conf /etc/nginx/conf.d

ARG PORT
EXPOSE ${PORT}

CMD ["nginx", "-g", "daemon off;"]
