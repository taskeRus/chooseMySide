var require = meteorInstall({"imports":{"ui":{"body.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// imports/ui/body.html                                                                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.exports = require("./template.body.js");                                                        // 1
                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.body.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// imports/ui/template.body.js                                                                         //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
                                                                                                       // 1
Template.body.addContent((function() {                                                                 // 2
  var view = this;                                                                                     // 3
  return HTML.DIV({                                                                                    // 4
    class: "container"                                                                                 // 5
  }, HTML.Raw('\n        <header>\n            <h1>Todo List</h1>\n\n            <form class="new-task">\n                <input type="text" name="text" placeholder="Type to add new tasks">\n            </form>\n        </header>\n \n        '), HTML.UL("\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("tasks"));                                                       // 7
  }, function() {                                                                                      // 8
    return [ "\n                ", Spacebars.include(view.lookupTemplate("task")), "\n            " ];
  }), "\n        "), "\n    ");                                                                        // 10
}));                                                                                                   // 11
Meteor.startup(Template.body.renderToDocument);                                                        // 12
                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"task.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// imports/ui/task.html                                                                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.exports = require("./template.task.js");                                                        // 1
                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.task.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// imports/ui/template.task.js                                                                         //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
                                                                                                       // 1
Template.__checkName("task");                                                                          // 2
Template["task"] = new Template("Template.task", (function() {                                         // 3
  var view = this;                                                                                     // 4
  return HTML.LI({                                                                                     // 5
    class: function() {                                                                                // 6
      return Blaze.If(function() {                                                                     // 7
        return Spacebars.call(view.lookup("checked"));                                                 // 8
      }, function() {                                                                                  // 9
        return "checked";                                                                              // 10
      });                                                                                              // 11
    }                                                                                                  // 12
  }, HTML.Raw('\n        <button class="delete">&times;</button>\n\n        '), HTML.INPUT({           // 13
    type: "checkbox",                                                                                  // 14
    checked: function() {                                                                              // 15
      return Spacebars.mustache(view.lookup("checked"));                                               // 16
    },                                                                                                 // 17
    class: "toggle-checked"                                                                            // 18
  }), "\n\n        ", HTML.SPAN({                                                                      // 19
    class: "text"                                                                                      // 20
  }, Blaze.View("lookup:text", function() {                                                            // 21
    return Spacebars.mustache(view.lookup("text"));                                                    // 22
  })), "\n    ");                                                                                      // 23
}));                                                                                                   // 24
                                                                                                       // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"body.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// imports/ui/body.js                                                                                  //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var Template = void 0;                                                                                 // 1
module.watch(require("meteor/templating"), {                                                           // 1
    Template: function (v) {                                                                           // 1
        Template = v;                                                                                  // 1
    }                                                                                                  // 1
}, 0);                                                                                                 // 1
var Tasks = void 0;                                                                                    // 1
module.watch(require("../api/tasks.js"), {                                                             // 1
    Tasks: function (v) {                                                                              // 1
        Tasks = v;                                                                                     // 1
    }                                                                                                  // 1
}, 1);                                                                                                 // 1
module.watch(require("./body.html"));                                                                  // 1
module.watch(require("./task.js"));                                                                    // 1
Template.body.helpers({                                                                                // 7
    tasks: function () {                                                                               // 8
        return Tasks.find({}, {                                                                        // 9
            sort: {                                                                                    // 9
                createdAt: -1                                                                          // 9
            }                                                                                          // 9
        });                                                                                            // 9
    }                                                                                                  // 10
});                                                                                                    // 7
Template.body.events({                                                                                 // 13
    'submit .new-task': function (event) {                                                             // 14
        event.preventDefault();                                                                        // 15
        var target = event.target;                                                                     // 17
        var text = target.text.value;                                                                  // 18
        Tasks.insert({                                                                                 // 20
            text: text,                                                                                // 21
            createdAt: new Date()                                                                      // 22
        });                                                                                            // 20
        target.text.value = '';                                                                        // 25
    }                                                                                                  // 26
});                                                                                                    // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"task.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// imports/ui/task.js                                                                                  //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var Template = void 0;                                                                                 // 1
module.watch(require("meteor/templating"), {                                                           // 1
    Template: function (v) {                                                                           // 1
        Template = v;                                                                                  // 1
    }                                                                                                  // 1
}, 0);                                                                                                 // 1
var Tasks = void 0;                                                                                    // 1
module.watch(require("../api/tasks.js"), {                                                             // 1
    Tasks: function (v) {                                                                              // 1
        Tasks = v;                                                                                     // 1
    }                                                                                                  // 1
}, 1);                                                                                                 // 1
module.watch(require("./task.html"));                                                                  // 1
Template.task.events({                                                                                 // 6
    'click .toggle-checked': function () {                                                             // 7
        Tasks.update(this._id, {                                                                       // 8
            $set: {                                                                                    // 9
                checked: !this.checked                                                                 // 9
            }                                                                                          // 9
        });                                                                                            // 8
    },                                                                                                 // 11
    'click .delete': function () {                                                                     // 12
        Tasks.remove(this._id);                                                                        // 13
    }                                                                                                  // 14
});                                                                                                    // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"api":{"tasks.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// imports/api/tasks.js                                                                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({                                                                                        // 1
  Tasks: function () {                                                                                 // 1
    return Tasks;                                                                                      // 1
  }                                                                                                    // 1
});                                                                                                    // 1
var Mongo = void 0;                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                // 1
  Mongo: function (v) {                                                                                // 1
    Mongo = v;                                                                                         // 1
  }                                                                                                    // 1
}, 0);                                                                                                 // 1
var Tasks = new Mongo.Collection('tasks');                                                             // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/main.js                                                                                      //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.watch(require("./../imports/ui/body.js"));                                                      // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
require("./client/main.js");