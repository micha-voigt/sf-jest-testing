#!/bin/sh

sf org create scratch --definition-file config/project-scratch-def.json --alias sf-jest-testing-playground --set-default --duration-days 30
sf project deploy start -d force-app --ignore-conflicts
sf project deploy start -d force-dev --ignore-conflicts