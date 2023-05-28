- INSTALL DOCKER 


- IN VS CODE CREATE A NEW FILE CALLED AS "Dockerfile" 

- Dockerfile Code: 

FROM node:alpine 
WORKDIR /usr/src/app
COPY . /docker1 
CMD node/docker1/firstimage.js

OR 

FROM node:alpine
COPY . /2B
CMD node /2B/file1.js

- JS File Code: 
Any random code

-IN TERMINAL: 

docker --version
node filename.js

docker images

docker build -t randomname .
docker run randomname