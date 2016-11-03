1. install node from [here](https://nodejs.org/)
2. run `npm install` from the root folder of the project. To install dependencies.
3. run it with `node app.js`


Requests should set:
``` 
Content-Type: application/json 
```
### curl examples
``` 
curl -H "Content-Type: application/json" localhost:3000/
curl -H "Content-Type: application/json" -X POST -d "{\"make\":\"BMW\",\"model\":2003}" http://localhost:3000/cars
curl -H "Content-Type: application/json" localhost:3000/cars
curl -H "Content-Type: application/json" localhost:3000/cars/1
curl -H "Content-Type: application/json" localhost:3000/users/123xxg
curl -H "Content-Type: application/json" localhost:3000/person
curl -H "Content-Type: application/json" -X POST -d "{\"address\":\"El Street\",\"year\":1988}" http://localhost:3000/house
``` 