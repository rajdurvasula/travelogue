#!/bin/bash
if [ $# -ne 1 ]; then
  echo "Expects Argument: id"
  exit 0
fi
curl --silent -X GET http://localhost:8080/api/travelogue/$1 -H 'Accept: application/json' | python -m json.tool
