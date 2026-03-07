FROM node:24-alpine AS build
ARG SITE_URL
ARG ROBOTS_PATH_ALLOWED
ARG ROBOTS_PATH_DISALLOWED
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN SITE_URL=$SITE_URL \
 ROBOTS_PATH_ALLOWED=$ROBOTS_PATH_ALLOWED \
 ROBOTS_PATH_DISALLOWED=$ROBOTS_PATH_DISALLOWED \
 npm run build

FROM nginx:alpine-slim
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]