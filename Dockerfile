# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
COPY . .
RUN npm ci && npm run build

# Runtime stage
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./server.js
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev
USER node
EXPOSE 8080
CMD ["node", "server.js"]
