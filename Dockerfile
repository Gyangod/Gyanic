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
RUN npm install ionic
RUN npm install cordova
WORKDIR /app
COPY . .
RUN npm install
# COPY . .
RUN ionic cordova build browser --prod

# Final image
FROM nginx:latest as prod
COPY --from=stage /app/www /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx" , "-g" , "daemon:off;"]
