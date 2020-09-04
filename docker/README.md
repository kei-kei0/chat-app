# run mysql
```
# start
docker-compose up -d

# connect
mysql -u root -p -h localhost -P 3306 --protocol=tcp
# password: root

## stop and delete
docker-compose down --volumes
```
