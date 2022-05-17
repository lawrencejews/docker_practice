# Docker Containers
### Commands to Use
- Start a container: `docker start name or id of container`
- Stop a container: `docker stop name or id of container`
- List containes: `docker ps -a`
- Closes all containers: `docker rm -f $(docker ps -aq)`
- Remove a container: `docker rm -f name-of-container` 
- Mount container to local environment in read-only mode: `docker run --name amigos -v $(pwd):/usr/share/nginx/html:ro -d -p 8080:80 nginx`
- Mount container to local environment: `docker run --name amigos -v $(pwd):/usr/share/nginx/html -d -p 8080:80 nginx`
- Interaction mode with docker in BASH: `docker exec -it name-of-container bash` then navigate to your html `cd /usr/share/nginx/html`
- Share a copy of a container: `docker run --name new-container --volumes-from old-container -d -p 8081:80 nginx`
- Custom DockerFile help to create your image in the location of the Dockerfile: `docker build --tag dockerweb:latest .` then use the image `docker run --name dockerweb -p 8080:80 -d dockerweb:latest`