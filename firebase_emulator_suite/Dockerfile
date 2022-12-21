FROM azul/zulu-openjdk:19-latest

ENV WORKDIR=/gcp_emulator_suite_docker/src
WORKDIR ${WORKDIR}


RUN mkdir ${WORKDIR}/saved-data

#retrieve from https://hub.docker.com/_/ubuntu
#and referenced from https://gitlab.com/fixl/docker-firebase-emulator-suite/-/blob/master/Dockerfile
RUN apt-get update && apt-get dist-upgrade -y \
    && apt-get install -y \
        make \
        bash \
        jq \
        curl \
        wget 


#Setup NodeJS and NPM
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install nodejs 

#Install Firebase-tools
RUN npm install -g firebase-tools 

#Setup firebase emulators
RUN firebase setup:emulators:database \
    && firebase setup:emulators:firestore \
    && firebase setup:emulators:pubsub \
    && firebase setup:emulators:storage \
    && firebase setup:emulators:ui 


RUN apt-get install -y locales && rm -rf /var/lib/apt/lists/* 

ENV FIREBASE_PROJECT_ID=
ENV FIREBASE_TOKEN=


#Enable logging port
EXPOSE 4500

EXPOSE 9150

COPY ./firebase.json ${WORKDIR}/
COPY ./entrypoint.sh ${WORKDIR}/
COPY ./storage.rules ${WORKDIR}/

#VOLUME ["/gcp_emulator_suite_docker/src"]


RUN chmod 755 ${WORKDIR}/entrypoint.sh ${WORKDIR}/storage.rules



ENTRYPOINT ["/gcp_emulator_suite_docker/src/entrypoint.sh"]



# Run emulators by default
#specify --only to skip the generation of firestore.json which can only be obtained via 'firebase init' command
#the emulators to specify after "--only" should not have spaces on each comma for example "auth,firestore,database,hosting,functions,pubsub"

CMD [ "emulators:start", "--only", "auth,hosting,firestore,functions,pubsub", "--import", "/gcp_emulator_suite_docker/src/saved-data", "--export-on-exit"]