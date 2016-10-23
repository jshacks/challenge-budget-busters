FROM mhart/alpine-node:6
MAINTAINER Adrian Oprea<adrian@codesi.nz>

# Set environment
ENV NODE_ENV production

WORKDIR /opt/app

EXPOSE 8080
VOLUME ["/opt/app"]

CMD ["npm", "start"]