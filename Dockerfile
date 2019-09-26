FROM node:alpine as builder
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

#/app/build <--- has all the stuff

FROM nginx
EXPOSE 80
COPY --from=builder /app/build/ /usr/share/nginx/html
#react-router fix
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
