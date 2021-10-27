**https://www.youtube.com/watch?v=TzdEpgONurw**

npm i http-server
npm i nodemon
npm i http-server
npm i -D webpack
npm i -D webpack-cli
npm i -D html-webpack-plugin html-loader
npm i -D webpack-dev-server
npm install -D babel-loader @babel/core @babel/preset-env

//for loading images:
npm i -D file-loader 

Start http server:
joachim@acer:~/conovum/webpacktut/src$ nodemon ../node_modules/http-server/bin/http-server
joachim@acer:~/conovum/webpacktut/dist$ nodemon ../node_modules/http-server/bin/http-server

````
  "scripts": {
    "build": "webpack",

    //Start hot reload server, also reloads webpage!!! NICE NICE NICE
    "start:dev": "webpack-dev-server"
  },
````

npm run build

then 

npm run start:dev

npm i -D node-sass style-loader css-loader sass-loader mini-css-extract-plugin

npm install url-loader