# travelogue
A simple nodejs application with MariaDB/MySQL backend database. This service exposes REST API

## Setup
- Create directory: */home/ec2-user/projects*
- Clone OR Move Git Repo to */home/ec2-user/projects* directory
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
- Script to update Node app's db connection parameters
```
./update_db_params.sh db_host db_user db_password
```
- As *root* user 
  - Copy *travelogue.service.tmplt* to */etc/systemd/system/*
  - Reload daemon and start service
```
cp /home/ec2-user/projects/travelogue/travelogue.service.tmplt /etc/systemd/system/travelogue.service
systemctl daemon-reload
systemctl start travelogue
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
