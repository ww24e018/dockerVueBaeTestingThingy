FROM node:24-alpine
LABEL authors="fsc"

COPY vueCreatedDirWithScaffold/ app/

WORKDIR app/
RUN npm install

#EXPOSE 5173

ENTRYPOINT ["npm", "run", "dev"]