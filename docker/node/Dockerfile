FROM alpine:3.13
ENV NODE_VERSION 14.15.4-r0
ENV USER dev

# Install packages
RUN apk update 
RUN apk add "nodejs=$NODE_VERSION" "npm=$NODE_VERSION" yarn bash

# Configure
RUN addgroup -g 1000 "${USER}"
RUN adduser -u 1000 -G "${USER}" -s /bin/sh -D "${USER}" 
USER "${USER}"
WORKDIR /home/"${USER}"/app
