FROM node:16 as builder
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
WORKDIR /app
COPY pnpm-lock.yaml ./
RUN pnpm fetch
COPY . .
RUN pnpm install --offline --no-frozen-lockfile
RUN pnpm run build

FROM pierrezemb/gostatic:latest
COPY --from=builder /app/dist /srv/http
EXPOSE 8043
CMD [ "-fallback", "404.html" ]
