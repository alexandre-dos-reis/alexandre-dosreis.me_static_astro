FROM node:16 as builder
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM pierrezemb/gostatic:latest
COPY --from=builder /app/dist /srv/http
EXPOSE 8043
CMD [ "-fallback", "404.html" ]