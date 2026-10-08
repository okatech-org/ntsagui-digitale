# Image du site web, à construire depuis la racine du monorepo :
#   docker build -f apps/web/Dockerfile .
# Bun sert de gestionnaire de paquets, Node exécute Next.js.

FROM oven/bun:1.3.11 AS bun

FROM node:22-slim AS build
COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun
WORKDIR /app
COPY . .
RUN bun install --frozen-lockfile

# Les variables NEXT_PUBLIC_* sont figées dans le bundle au moment du build.
ARG NEXT_PUBLIC_CONVEX_URL
ARG NEXT_PUBLIC_CONVEX_SITE_URL
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_TELEMETRY_DISABLED=1
RUN cd apps/web && bun run build

FROM node:22-slim
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000
WORKDIR /app
COPY --from=build --chown=node:node /app /app
WORKDIR /app/apps/web
USER node
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]
