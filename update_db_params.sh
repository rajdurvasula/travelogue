#!/bin/bash
if [ $# -ne 3 ]; then
  echo "Mandatory Arguments: 1. db_host, 2. db_user, 3. db_password"
  exit 0
fi
cp db.config.js.tmplt db.config.js
sed -i "s~db_host~$1~g" db.config.js
sed -i "s~db_user~$2~g" db.config.js
sed -i "s~db_password~$3~g" db.config.js
cp -f db.config.js config/
