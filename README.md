meteor-ghost
=================

Meteor package for [ghost](https://github.com/TryGhost/Ghost).

#Usage

Install package from Meteor:
```
meteor add mrt:ghost

```
Run ghost in the server start-up:
```
ghost().then(function (ghostServer) {
  var config = ghostServer.config;
  // modify theme and config ...
  
  ghostServer.start();
});
```

Once you have the Meteor server up and running, you should be able to navigate to http://localhost:2368/ from a web browser to enjoy blogging.

#Demo
Here is the demo of using this package: [meteor-ghost-demo](https://github.com/danielqiu/meteor-ghost-demo)
