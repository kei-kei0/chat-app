# Build a Chat app with NodeJS, React and GraphQL

# start mysql
```
# up
docker-compose -f ./docker/docker-compose.yaml up -d

# down
docker-compose -f ./docker/docker-compose.yaml down --volumes

# enter into process on docker (password: root)
mysql -u root -p -h localhost -P 3306 --protocol=tcp
```

# migration
```
# up
sequelize db:migrate

# undo
sequelize db:migrate:undo
```
- document: https://sequelize.org/master/manual/migrations.html

# run server
```
# prerequisite: mysql(which has chat db.) is running locally.
npm run dev
```

# graphql query
```
# register user
mutation Register {
  register(username: "john", email: "john@email.com", password: "123456", confirmPassword: "123456") {
    username
    email
    createdAt
    token
  }
}

# login
query Login {
  login(username: "john", password: "123456") {
    username
    email
    createdAt
    token
  }
}

# getUsers
## set header (XXXXXXXXXXXXXX: passed token when logged in)
{
  "Authorization": "Bearer XXXXXXXXXXXXXX"
}

## run query
query getUsers {
  getUsers {
    username
  }
}
```
# start client app
```
cd client
npm start
```

## status
```
[DONE]
https://www.youtube.com/watch?v=Sz64p1Udwjk
https://www.youtube.com/watch?v=aieNcEqCLHg
```
