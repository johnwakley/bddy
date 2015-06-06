FROM node:0.12.3
MAINTAINER John Wakley <johnwakley@gmail.com> 
ENV REFRESHED_AT 2015-06-04

# Bundle app source
ADD . /opt/bddy/
WORKDIR /opt/bddy/

# Install app dependencies
RUN npm install
RUN npm install -g babel
