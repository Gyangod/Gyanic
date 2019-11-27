FROM node:latest as stage
LABEL Anindya Chakraborty <anindya100c@gmail.com>

# -----------------------------------------------------------------------------
# Environment variables
# -----------------------------------------------------------------------------
ENV GIT_EMAIL="anindya100c@gmail.com" \
    GIT_NAME="Anindya Chakraborty"

RUN git config --global user.email "${GIT_EMAIL}"
RUN git config --global user.name "${GIT_NAME}"

#--# Client App
RUN sudo apt-get install tree
RUN tree
WORKDIR /app
RUN npm install
RUN npm install ionic
# RUN npm install cordova
# COPY . .
RUN ionic cordova build browser --prod

# Final image
FROM nginx:latest as prod
COPY --from=stage /www /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx" , "-g" , "daemon:off;"]
