FROM nginx:alpine
COPY nginx/nginx-site.conf /etc/nginx/nginx.conf
COPY /build/ /usr/share/nginx/html/