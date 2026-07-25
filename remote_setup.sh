#!/bin/bash
set -e

echo "Setting up repository..."
mkdir -p /var/www
cd /var/www/tyrand

echo "Cleaning up..."
rm -rf node_modules package-lock.json yarn.lock || true

echo "Installing yarn..."
npm install -g yarn || true

echo "Installing dependencies with Yarn..."
yarn config set network-timeout 300000
yarn install

echo "Building the application..."
yarn build

echo "Setting up PM2..."
pm2 stop tyrand || true
pm2 delete tyrand || true
PORT=7001 pm2 start yarn --name "tyrand" -- start -p 7001
pm2 save

echo "Setting up Nginx..."
cat << 'EOF' > /etc/nginx/sites-available/tyrand
server {
    listen 80;
    server_name tyrand.dev www.tyrand.dev;

    location / {
        proxy_pass http://localhost:7001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

ln -sf /etc/nginx/sites-available/tyrand /etc/nginx/sites-enabled/tyrand
nginx -t
systemctl restart nginx

echo "Deployment complete!"
