# Étape 1 : Construction de l'application Angular

FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build -- --configuration production --project=TP-DEVOPS


# Étape 2 : Runtime avec Nginx pour servir l'application

FROM nginx:1.27-alpine AS runtime

RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/TP-DEVOPS/browser /usr/share/nginx/html

EXPOSE 80
