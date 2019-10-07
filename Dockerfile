FROM node:alpine as builder
EXPOSE 3000
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build --prod

#/app/build <--- has all the stuff

CMD npm start
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
# #react-router fix
# RUN rm -rf /etc/nginx/conf.d
# COPY conf /etc/nginx
