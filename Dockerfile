FROM nginx:alpine
COPY nginx/nginx-site.conf /etc/nginx/conf.d/default.conf
COPY /build/ /app/