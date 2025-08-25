# Étape 1 : Construction de l'application Angular

FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build -- --configuration production --project=m1iage

# Étape 2 : Runtime avec Nginx

FROM nginx:1.27-alpine AS runtime

RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/m1iage /usr/share/nginx/html

EXPOSE 80
