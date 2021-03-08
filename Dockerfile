FROM mhart/alpine-node
COPY server.js .
COPY package*.json ./
RUN npm install
EXPOSE 3333
CMD npm run serve