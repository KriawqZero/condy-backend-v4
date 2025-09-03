# Dockerfile para o Backend NestJS
FROM node:18-alpine AS base

# Instalar dependências apenas quando necessário
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Instalar dependências baseadas no arquivo de lock preferido
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Reconstruir o código fonte quando necessário
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Gerar o cliente Prisma
RUN npx prisma generate

# Build da aplicação
RUN yarn build

# Etapa de produção
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs

# Copiar arquivos necessários
COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nestjs:nodejs /app/prisma ./prisma

USER nestjs

EXPOSE 3001

CMD ["yarn", "start:prod"]
