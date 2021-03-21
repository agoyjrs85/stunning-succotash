.PHONY: build
build:
	yarn build

.PHONY: clean
clean:
	yarn clean

.PHONY: publish
publish:
	yarn publish

.PHONY: compile_schema
compile_schema:
	yarn run ajv compile -s schemas/records.json

.PHONY: test
test:
	yarn test
