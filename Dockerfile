FROM openjdk:11
VOLUME /tmp
RUN mkdir /work
COPY . /work
WORKDIR /work
RUN /work/gradlew build
RUN mv /work/build/libs/*.war /work/app.war
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/work/app.war"]
