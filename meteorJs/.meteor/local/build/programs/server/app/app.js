var require = meteorInstall({"imports":{"api":{"tasks.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/api/tasks.js                                              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({                                                      // 1
  Tasks: function () {                                               // 1
    return Tasks;                                                    // 1
  }                                                                  // 1
});                                                                  // 1
var Mongo = void 0;                                                  // 1
module.watch(require("meteor/mongo"), {                              // 1
  Mongo: function (v) {                                              // 1
    Mongo = v;                                                       // 1
  }                                                                  // 1
}, 0);                                                               // 1
var Tasks = new Mongo.Collection('tasks');                           // 3
///////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Meteor = void 0;                                                 // 1
module.watch(require("meteor/meteor"), {                             // 1
  Meteor: function (v) {                                             // 1
    Meteor = v;                                                      // 1
  }                                                                  // 1
}, 0);                                                               // 1
module.watch(require("../imports/api/tasks.js"));                    // 1
Meteor.startup(function () {// code to run on server at startup      // 4
});                                                                  // 6
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./server/main.js");
//# sourceMappingURL=app.js.map
