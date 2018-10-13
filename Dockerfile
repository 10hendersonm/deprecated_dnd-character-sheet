FROM nginx
COPY nginx/nginx-site.conf /etc/nginx/conf.d/default.conf
COPY /build/ /usr/share/nginx/html/