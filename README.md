# BASE URL

[contact-app](https://desolate-forest-56369.herokuapp.com)

# Show All Users

- URL
  /api/v1/user

- Method
  GET

- URL Params
  None

- DATA Params
  None

- Success Response
  Code 200
  Content:

  ```
  {
     "status": "success",
     "count": 2,
     "data": {
        "users": [
           "_id": "61237a823ee23sa3c",
           "name": "John",
           "email": "jon@gmail.com",
           "country": "Nigeria"
        ]
     }
  }
  ```

- Error Response
  Code 400
  Content:

```
{
   "status": "fail",
   "message": "Could not fetch data"
}
```

# Create a User

- URL
  /api/v1/users

- Method
  POST

- URL Params
  None

- DATA Params

```
{
   "name": "John",
   "email": "jon@gmail.com",
   "country": "Nigeria"
}
```

- Success Response
  Code 201
  Content:

  ```
  {
     "status": "success",
     "data": {
        "users": [
           "_id": "61237a823ee23sa3c",
           "name": "John",
           "email": "jon@gmail.com",
           "country": "Nigeria"
        ]
     }
  }
  ```

- Error Response
  Code 400
  Content:

```
{
   "status": "fail",
   "message": "Please enter valid credentials"
}
```

# Show A User

- URL
  /api/v1/users/:userId

- Method
  GET

- URL Params
  userId=[string]

- DATA Params
  None

- Success Response
  Code 200
  Content:

  ```
  {
     "status": "success",

      "users": {
           "_id": "61237a823ee23sa3c",
           "name": "John",
           "email": "jon@gmail.com",
           "country": "Nigeria"
      }
  }
  ```

- Error Response
  Code 400
  Content:

```
{
   "status": "fail",
   "message": "User does not exist"
}
```

# Update A User

- URL
  /api/v1/users/:userId

- Method
  PATCH

- URL Params
  userId=[string]

- DATA Params

```
{
   "name": "John",
   "email": "jon@gmail.com",
   "country": "Nigeria"
}
```

- Success Response
  Code 200
  Content:

  ```
  {
     "status": "success",

      "users": {
           "_id": "61237a823ee23sa3c",
           "name": "John",
           "email": "jon@gmail.com",
           "country": "Nigeria"
      }
  }
  ```

- Error Response
  Code 400
  Content:

```
{
   "status": "fail",
   "message": "User does not exist"
}
```

# Delete A User

- URL
  /api/v1/users/:userId

- Method
  DELETE

- URL Params
  userId=[string]

- DATA Params
  None

- Success Response
  Code 204
  Content:
  None

- Error Response
  Code 400
  Content:

```
{
   "status": "fail",
   "message": "User does not exist"
}
```
