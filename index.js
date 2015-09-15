var events = require("sdk/system/events");
var { Ci } = require("chrome");
var ss = require("sdk/simple-storage");
var menuitem = require("menuitem");

if(!ss.storage.httpString) { ss.storage.httpString = 'Att-Developer-Header'; }
if(!ss.storage.httpValString) { ss.storage.httpValString = 'Att-Developer-Header'; }

function listener(event) {
  var channel = event.subject.QueryInterface(Ci.nsIHttpChannel);
  channel.setRequestHeader(ss.storage.httpString, ss.storage.httpValString, false);
}

var menuitem = menuitem.Menuitem({
  id: "clickme",
  menuid: "menu_ToolsPopup",
  label: "Enable development header",
  onCommand: function() {
    console.log("clicked");
  },
  insertbefore: "menu_pageInfo"
});

events.on("http-on-modify-request", listener);