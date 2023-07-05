FROM ubuntu:latest
LABEL authors="h.tatsuhiro"

ENTRYPOINT ["top", "-b"]