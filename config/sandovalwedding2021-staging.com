server {
    listen 80;
    listen [::]:80;
    server_name     sandovalwedding2021.com www.sandovalwedding2021.com;

    location ~ /.well-known/acme-challenge {
        allow all;
        root /usr/share/nginx/html;
    }
}
