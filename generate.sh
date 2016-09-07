#!/usr/bin/env bash
swagger-codegen generate -i swagger.yaml -l typescript-angular2 -o ./front/src/app/api_client -c config.json
swagger-codegen generate -i swagger.yaml -l nodejs-server -o ./mock -c config.json