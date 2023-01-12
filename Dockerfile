FROM node:16 as base

RUN mkdir /app
WORKDIR /app

COPY package*.json /app/
COPY ./ /app/

FROM base as development
RUN npm ci
CMD npm run dev --host

FROM base as build
RUN npm ci
RUN npm run build

FROM nginx as production
COPY --from=build /app/dist/  /app

COPY ./nginx.conf /etc/nginx/nginx.conf

# EXPOSE 3000
# 