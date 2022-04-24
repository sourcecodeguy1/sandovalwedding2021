server {
    listen 80;
    listen [::]:80;
    server_name sandovalwedding2021.com www.sandovalwedding2021.com;

    location ~ /.well-known/acme-challenge {
        allow all;
        root /usr/share/nginx/html;
    }
}

server {
    listen 443 ssl;
    server_name sandovalwedding2021.com www.sandovalwedding2021.com;

    ssl_certificate /etc/letsencrypt/live/sandovalwedding2021.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/sandovalwedding2021.com/privkey.pem;

    location / {
        proxy_pass http://172.17.0.2:3000;
    }
}
