FROM ubuntu:latest

ENV NODE_VERSION 14.15.4
ENV NVM_VERSION 0.37.2
ENV TZ=America/Sao_Paulo
ENV USER dev

# Configure
RUN echo 'root:root' | chpasswd
RUN useradd -m ${USER} --uid=1000 -G sudo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR /home/"${USER}"/app

# Add repository and Install packages
USER root
RUN apt-get update && apt-get upgrade -y
RUN apt-get install apt-transport-https gnupg wget curl git -y
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update
RUN apt-get install yarn -y
RUN apt-get autoremove -y && apt-get clean

# NVM
USER "${USER}"
RUN curl -o- "https://raw.githubusercontent.com/nvm-sh/nvm/v$NVM_VERSION/install.sh" | bash
RUN bash -c ". ~/.nvm/nvm.sh && \
              nvm install $NODE_VERSION && \
              nvm use $NODE_VERSION"

# Install node packages
USER root
ENV NPM "/home/${USER}/.nvm/versions/node/v$NODE_VERSION/bin/npm"
RUN bash -c "$NPM i -g @nestjs/cli"
RUN bash -c "$NPM i -g create-react-app"
RUN bash -c "$NPM i -g typescript"

USER "${USER}"
