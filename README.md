# node-app

Simple Node JS application which can be used for quick testing.



#### Build Docker Image:
```
docker build -t node-app .
```

#### Run Docker Image:
```
docker run -p 9999:9999 --name node-application node-app
```

This application will have 4 endpoints:

* http://localhost:9999 (Immediate Success Response)
* http://localhost:9999/fast (Immediate Success Response)
* http://localhost:9999/slow (Success Response With 5sec Delay)
* http://localhost:9999/exception (500 Response)
