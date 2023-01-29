# Makefile

SHARELATEX_BASE_TAG := sharelatex/sharelatex-base
OVERLEAVES_BASE_TAG := overleaves/sharelatex-base
SHARELATEX_TAG := sharelatex/sharelatex
OVERLEAVES_TAG := overleaves/sharelatex
SHARELATEX_BASE_CACHE := $(shell echo $(SHARELATEX_BASE_TAG) | sed -E 's/(.+):.+/\1:latest/')

build-base:
	docker pull $(SHARELATEX_BASE_CACHE)
	docker build -f Dockerfile-base --pull --cache-from $(SHARELATEX_BASE_CACHE) -t $(OVERLEAVES_BASE_TAG) .


build-community:
	docker build --build-arg SHARELATEX_BASE_TAG=$(OVERLEAVES_BASE_TAG) -f Dockerfile -t $(OVERLEAVES_TAG) .


PHONY: build-base build-community
