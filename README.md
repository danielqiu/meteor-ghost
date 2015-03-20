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
  ghostServer.start();
});
```

Once you have the Meteor server up and running, you should be able to navigate to http://localhost:2368/ from a web browser to enjoy blogging.
