# travelogue
A simple nodejs application with MariaDB/MySQL backend database. This service exposes REST API

## Setup
- Install node modules
```
npm install
```

- Provision MySQL / MariaDB
- Create db user
> Example  below:
```
create user 'nodeuser1'@'localhost' identified by 'passw0rd';
create user 'nodeuser1'@'%' identified by 'passw0rd';
```
- Create database schema
  - Replace **db_host** and **db_user** based on your MySQL setup
```
 mysql -h db_host -u db_user -p < db_schema.sql
```
- Grant user permissions to *traveldb* database
```
grant all privileges on traveldb.* to 'nodeuser1'@'%';
```

## Test
- Launch node server
```
node server.js
```

- Create Travel Entry (execute script)
```
create_record.sh
```

- Get All Travel Entries
```
get_all.sh
```

- Get Travel Entry by Id
```
get_by_id.sh
```

- Get Travel Entries by Country
```
get_by_country.sh
```
