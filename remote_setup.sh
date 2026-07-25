#!/bin/bash
set -e

echo "Setting up repository..."
mkdir -p /var/www
cd /var/www
if [ -d "tyrand" ]; then
    cd tyrand
    git pull origin main
else
    git clone https://github.com/jarifMohammed/tyrand.git
    cd tyrand
fi

echo "Writing .env file..."
cat << 'EOF' > .env
MONGODB_URI=mongodb+srv://tyrand:tyrand@cluster0.l75simn.mongodb.net/?appName=Cluster0
EMAIL_USER=info.tyrand@gmail.com
EMAIL_PASS=mkqx smin tvho nbyu
EDGE_STORE_ACCESS_KEY=ERDMYOiXVWdV1fmcXJtM5MF2cutywpuQ
EDGE_STORE_SECRET_KEY=a4oERBVg4tTHLIKYqORKiplpXldD40AuMkHlrSKWCyv6ZbYw
EOF

echo "Installing dependencies..."
npm install

echo "Building the application..."
npm run build

echo "Setting up PM2..."
pm2 stop tyrand || true
pm2 delete tyrand || true
PORT=7001 pm2 start npm --name "tyrand" -- run start -- -p 7001
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
