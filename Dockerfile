FROM nginx:1.15.2-alpine
COPY ./build /var/www
COPY /assets /var/www/assets
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
