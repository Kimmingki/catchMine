(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./notifications");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiZmFrZV8xMjIzOTNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xyXG5pbXBvcnQgXCIuL2xvZ2luXCI7XHJcbmltcG9ydCBcIi4vbm90aWZpY2F0aW9uc1wiO1xyXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EifQ==
},{"./login":2,"./notifications":3,"./sockets":4}],2:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  // eslint-disable-next-line no-undef
  var socket = io("/");
  socket.emit(window.events.setNickName, {
    nickname: nickname
  });
  (0, _sockets.initSocket)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9naW5Gb3JtIiwiZ2V0RWxlbWVudEJ5SWQiLCJOSUNLTkFNRSIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJuaWNrbmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dJbiIsInNvY2tldCIsImlvIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsInNldE5pY2tOYW1lIiwiaW5pdFNvY2tldCIsImNsYXNzTmFtZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInZhbHVlIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlcyI6WyJsb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XHJcblxyXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcclxuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XHJcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcclxuXHJcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xyXG5cclxuY29uc3QgbG9nSW4gPSAobmlja25hbWUpID0+IHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XHJcbiAgc29ja2V0LmVtaXQod2luZG93LmV2ZW50cy5zZXROaWNrTmFtZSwgeyBuaWNrbmFtZSB9KTtcclxuICBpbml0U29ja2V0KHNvY2tldCk7XHJcbn07XHJcblxyXG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcclxuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XHJcbn0gZWxzZSB7XHJcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbiAgbG9nSW4obmlja25hbWUpO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xyXG4gIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShOSUNLTkFNRSwgdmFsdWUpO1xyXG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xyXG4gIGxvZ0luKHZhbHVlKTtcclxufTtcclxuXHJcbmlmIChsb2dpbkZvcm0pIHtcclxuICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCO0FBRUEsSUFBTUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJMLFFBQXJCLENBQWpCOztBQUVBLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNILFFBQUQsRUFBYztFQUMxQjtFQUNBLElBQU1JLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7RUFDQUQsTUFBTSxDQUFDRSxJQUFQLENBQVlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxXQUExQixFQUF1QztJQUFFVCxRQUFRLEVBQVJBO0VBQUYsQ0FBdkM7RUFDQSxJQUFBVSxtQkFBQSxFQUFXTixNQUFYO0FBQ0QsQ0FMRDs7QUFPQSxJQUFJSixRQUFRLEtBQUssSUFBakIsRUFBdUI7RUFDckJSLElBQUksQ0FBQ21CLFNBQUwsR0FBaUJiLFVBQWpCO0FBQ0QsQ0FGRCxNQUVPO0VBQ0xOLElBQUksQ0FBQ21CLFNBQUwsR0FBaUJaLFNBQWpCO0VBQ0FJLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0Q7O0FBRUQsSUFBTVksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87RUFDOUJBLENBQUMsQ0FBQ0MsY0FBRjtFQUNBLElBQU1DLEtBQUssR0FBR3BCLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0VBQ0EsSUFBUXNCLEtBQVIsR0FBa0JELEtBQWxCLENBQVFDLEtBQVI7RUFDQUQsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtFQUNBZixZQUFZLENBQUNnQixPQUFiLENBQXFCcEIsUUFBckIsRUFBK0JtQixLQUEvQjtFQUNBeEIsSUFBSSxDQUFDbUIsU0FBTCxHQUFpQlosU0FBakI7RUFDQUksS0FBSyxDQUFDYSxLQUFELENBQUw7QUFDRCxDQVJEOztBQVVBLElBQUlyQixTQUFKLEVBQWU7RUFDYkEsU0FBUyxDQUFDdUIsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNEIn0=
},{"./sockets":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewUser = exports.handleDisconnected = void 0;
var notifications = document.getElementById("jsNotifications");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  notifications.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  return fireNotification("".concat(nickname, " just joined!"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  return fireNotification("".concat(nickname, " just left!"), "rgb(255, 59, 48)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJub3RpZmljYXRpb25zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm90aWZpY2F0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNOb3RpZmljYXRpb25zXCIpO1xyXG5cclxuY29uc3QgZmlyZU5vdGlmaWNhdGlvbiA9ICh0ZXh0LCBjb2xvcikgPT4ge1xyXG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xyXG4gIG5vdGlmaWNhdGlvbnMuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHsgbmlja25hbWUgfSkgPT5cclxuICBmaXJlTm90aWZpY2F0aW9uKGAke25pY2tuYW1lfSBqdXN0IGpvaW5lZCFgLCBcInJnYigwLCAxMjIsIDI1NSlcIik7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkID0gKHsgbmlja25hbWUgfSkgPT5cclxuICBmaXJlTm90aWZpY2F0aW9uKGAke25pY2tuYW1lfSBqdXN0IGxlZnQhYCwgXCJyZ2IoMjU1LCA1OSwgNDgpXCIpO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUF0Qjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtFQUN4QyxJQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtFQUNBRCxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0VBQ0FFLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0VBQ0FDLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtFQUNBWCxhQUFhLENBQUNZLFdBQWQsQ0FBMEJOLFlBQTFCO0FBQ0QsQ0FORDs7QUFRTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0VBQUEsSUFBR0MsUUFBSCxRQUFHQSxRQUFIO0VBQUEsT0FDM0JYLGdCQUFnQixXQUFJVyxRQUFKLG9CQUE2QixrQkFBN0IsQ0FEVztBQUFBLENBQXRCOzs7O0FBR0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtFQUFBLElBQUdELFFBQUgsU0FBR0EsUUFBSDtFQUFBLE9BQ2hDWCxnQkFBZ0IsV0FBSVcsUUFBSixrQkFBMkIsa0JBQTNCLENBRGdCO0FBQUEsQ0FBM0IifQ==
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSocket = exports.initSocket = exports.getSocket = void 0;

var _notifications = require("./notifications");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
};

exports.updateSocket = updateSocket;

var initSocket = function initSocket(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket);
  aSocket.on(events.newUser, _notifications.handleNewUser);
  aSocket.on(events.disconnected, _notifications.handleDisconnected);
};

exports.initSocket = initSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzb2NrZXQiLCJnZXRTb2NrZXQiLCJ1cGRhdGVTb2NrZXQiLCJhU29ja2V0IiwiaW5pdFNvY2tldCIsIndpbmRvdyIsImV2ZW50cyIsIm9uIiwibmV3VXNlciIsImhhbmRsZU5ld1VzZXIiLCJkaXNjb25uZWN0ZWQiLCJoYW5kbGVEaXNjb25uZWN0ZWQiXSwic291cmNlcyI6WyJzb2NrZXRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZURpc2Nvbm5lY3RlZCwgaGFuZGxlTmV3VXNlciB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcclxuXHJcbmxldCBzb2NrZXQgPSBudWxsO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTb2NrZXQgPSAoYVNvY2tldCkgPT4gKHNvY2tldCA9IGFTb2NrZXQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXQgPSAoYVNvY2tldCkgPT4ge1xyXG4gIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XHJcbiAgdXBkYXRlU29ja2V0KGFTb2NrZXQpO1xyXG4gIGFTb2NrZXQub24oZXZlbnRzLm5ld1VzZXIsIGhhbmRsZU5ld1VzZXIpO1xyXG4gIGFTb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3RlZCwgaGFuZGxlRGlzY29ubmVjdGVkKTtcclxufTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBSUEsTUFBTSxHQUFHLElBQWI7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7RUFBQSxPQUFNRCxNQUFOO0FBQUEsQ0FBbEI7Ozs7QUFFQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxPQUFEO0VBQUEsT0FBY0gsTUFBTSxHQUFHRyxPQUF2QjtBQUFBLENBQXJCOzs7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0QsT0FBRCxFQUFhO0VBQ3JDLGNBQW1CRSxNQUFuQjtFQUFBLElBQVFDLE1BQVIsV0FBUUEsTUFBUjtFQUNBSixZQUFZLENBQUNDLE9BQUQsQ0FBWjtFQUNBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDRSxPQUFsQixFQUEyQkMsNEJBQTNCO0VBQ0FOLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNJLFlBQWxCLEVBQWdDQyxpQ0FBaEM7QUFDRCxDQUxNIn0=
},{"./notifications":3}]},{},[1])