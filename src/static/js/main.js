(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg"); // 메세지 전송 시 뷰 페이지 변경

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "<span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text);
  messages.appendChild(li);
}; // 메세지 전송 이벤트


var handleSendMsg = function handleSendMsg(e) {
  e.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
}; // 메세지 전송


var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtZXNzYWdlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZW5kTXNnIiwiYXBwZW5kTXNnIiwidGV4dCIsIm5pY2tuYW1lIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVTZW5kTXNnIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJnZXRTb2NrZXQiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwibWVzc2FnZSIsImhhbmRsZU5ld01lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZXMiOlsiY2hhdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XHJcblxyXG5jb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNZXNzYWdlc1wiKTtcclxuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xyXG5cclxuLy8g66mU7IS47KeAIOyghOyGoSDsi5wg67ewIO2OmOydtOyngCDrs4Dqsr1cclxuY29uc3QgYXBwZW5kTXNnID0gKHRleHQsIG5pY2tuYW1lKSA9PiB7XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbGkuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiYXV0aG9yICR7bmlja25hbWUgPyBcIm91dFwiIDogXCJzZWxmXCJ9XCI+JHtcclxuICAgIG5pY2tuYW1lID8gbmlja25hbWUgOiBcIllvdVwiXHJcbiAgfTo8L3NwYW4+ICR7dGV4dH1gO1xyXG4gIG1lc3NhZ2VzLmFwcGVuZENoaWxkKGxpKTtcclxufTtcclxuXHJcbi8vIOuplOyEuOyngCDsoITshqEg7J2067Kk7Yq4XHJcbmNvbnN0IGhhbmRsZVNlbmRNc2cgPSAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBpbnB1dCA9IHNlbmRNc2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xyXG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7IG1lc3NhZ2U6IHZhbHVlIH0pO1xyXG4gIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICBhcHBlbmRNc2codmFsdWUpO1xyXG59O1xyXG5cclxuLy8g66mU7IS47KeAIOyghOyGoVxyXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3TWVzc2FnZSA9ICh7IG1lc3NhZ2UsIG5pY2tuYW1lIH0pID0+XHJcbiAgYXBwZW5kTXNnKG1lc3NhZ2UsIG5pY2tuYW1lKTtcclxuXHJcbmlmIChzZW5kTXNnKSB7XHJcbiAgc2VuZE1zZy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVNlbmRNc2cpO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBaEIsQyxDQUVBOztBQUNBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtFQUNwQyxJQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0VBQ0FELEVBQUUsQ0FBQ0UsU0FBSCxrQ0FBc0NILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFBekQsZ0JBQ0VBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEtBRHhCLHNCQUVZRCxJQUZaO0VBR0FMLFFBQVEsQ0FBQ1UsV0FBVCxDQUFxQkgsRUFBckI7QUFDRCxDQU5ELEMsQ0FRQTs7O0FBQ0EsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQU87RUFDM0JBLENBQUMsQ0FBQ0MsY0FBRjtFQUNBLElBQU1DLEtBQUssR0FBR1gsT0FBTyxDQUFDWSxhQUFSLENBQXNCLE9BQXRCLENBQWQ7RUFDQSxJQUFRQyxLQUFSLEdBQWtCRixLQUFsQixDQUFRRSxLQUFSO0VBQ0EsSUFBQUMsa0JBQUEsSUFBWUMsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNqQixPQUEvQixFQUF3QztJQUFFa0IsT0FBTyxFQUFFTDtFQUFYLENBQXhDO0VBQ0FGLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7RUFDQVosU0FBUyxDQUFDWSxLQUFELENBQVQ7QUFDRCxDQVBELEMsQ0FTQTs7O0FBQ08sSUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtFQUFBLElBQUdELE9BQUgsUUFBR0EsT0FBSDtFQUFBLElBQVlmLFFBQVosUUFBWUEsUUFBWjtFQUFBLE9BQzlCRixTQUFTLENBQUNpQixPQUFELEVBQVVmLFFBQVYsQ0FEcUI7QUFBQSxDQUF6Qjs7OztBQUdQLElBQUlILE9BQUosRUFBYTtFQUNYQSxPQUFPLENBQUNvQixnQkFBUixDQUF5QixRQUF6QixFQUFtQ1osYUFBbkM7QUFDRCJ9
},{"./sockets":6}],2:[function(require,module,exports){
"use strict";

require("./login");

require("./sockets");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiZmFrZV85M2FkYTIyNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2xvZ2luXCI7XHJcbmltcG9ydCBcIi4vc29ja2V0c1wiO1xyXG5pbXBvcnQgXCIuL2NoYXRcIjtcclxuaW1wb3J0IFwiLi9wYWludFwiO1xyXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0EifQ==
},{"./chat":1,"./login":3,"./paint":5,"./sockets":6}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME); // 로그인 이벤트 전송

var logIn = function logIn(nickname) {
  // eslint-disable-next-line no-undef
  var socket = io("/");
  socket.emit(window.events.setNickName, {
    nickname: nickname
  });
  (0, _sockets.initSocket)(socket);
}; // 로그인 시 작동


var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9naW5Gb3JtIiwiZ2V0RWxlbWVudEJ5SWQiLCJOSUNLTkFNRSIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJuaWNrbmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dJbiIsInNvY2tldCIsImlvIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsInNldE5pY2tOYW1lIiwiaW5pdFNvY2tldCIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInZhbHVlIiwic2V0SXRlbSIsImNsYXNzTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlcyI6WyJsb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XHJcblxyXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcclxuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XHJcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcclxuXHJcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xyXG5cclxuLy8g66Gc6re47J24IOydtOuypO2KuCDsoITshqFcclxuY29uc3QgbG9nSW4gPSAobmlja25hbWUpID0+IHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XHJcbiAgc29ja2V0LmVtaXQod2luZG93LmV2ZW50cy5zZXROaWNrTmFtZSwgeyBuaWNrbmFtZSB9KTtcclxuICBpbml0U29ja2V0KHNvY2tldCk7XHJcbn07XHJcblxyXG4vLyDroZzqt7jsnbgg7IucIOyekeuPmVxyXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xyXG4gIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShOSUNLTkFNRSwgdmFsdWUpO1xyXG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xyXG4gIGxvZ0luKHZhbHVlKTtcclxufTtcclxuXHJcbmlmIChuaWNrbmFtZSA9PT0gbnVsbCkge1xyXG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX09VVDtcclxufSBlbHNlIHtcclxuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICBsb2dJbihuaWNrbmFtZSk7XHJcbn1cclxuXHJcbmlmIChsb2dpbkZvcm0pIHtcclxuICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCO0FBRUEsSUFBTUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJMLFFBQXJCLENBQWpCLEMsQ0FFQTs7QUFDQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSCxRQUFELEVBQWM7RUFDMUI7RUFDQSxJQUFNSSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0VBQ0FELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7SUFBRVQsUUFBUSxFQUFSQTtFQUFGLENBQXZDO0VBQ0EsSUFBQVUsbUJBQUEsRUFBV04sTUFBWDtBQUNELENBTEQsQyxDQU9BOzs7QUFDQSxJQUFNTyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztFQUM5QkEsQ0FBQyxDQUFDQyxjQUFGO0VBQ0EsSUFBTUMsS0FBSyxHQUFHbkIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7RUFDQSxJQUFRcUIsS0FBUixHQUFrQkQsS0FBbEIsQ0FBUUMsS0FBUjtFQUNBRCxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0VBQ0FkLFlBQVksQ0FBQ2UsT0FBYixDQUFxQm5CLFFBQXJCLEVBQStCa0IsS0FBL0I7RUFDQXZCLElBQUksQ0FBQ3lCLFNBQUwsR0FBaUJsQixTQUFqQjtFQUNBSSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNELENBUkQ7O0FBVUEsSUFBSWYsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0VBQ3JCUixJQUFJLENBQUN5QixTQUFMLEdBQWlCbkIsVUFBakI7QUFDRCxDQUZELE1BRU87RUFDTE4sSUFBSSxDQUFDeUIsU0FBTCxHQUFpQmxCLFNBQWpCO0VBQ0FJLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0Q7O0FBRUQsSUFBSUwsU0FBSixFQUFlO0VBQ2JBLFNBQVMsQ0FBQ3VCLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDUCxnQkFBckM7QUFDRCJ9
},{"./sockets":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewUser = exports.handleDisconnected = void 0;
var body = document.querySelector("body"); // 유저 접속 및 퇴장 시 뷰 페이지 변경

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
}; // 유저 접속 시


var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  return fireNotification("".concat(nickname, " just joined!"), "rgb(0, 122, 255)");
}; // 유저 퇴장 시


exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  return fireNotification("".concat(nickname, " just left!"), "rgb(255, 59, 48)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmlyZU5vdGlmaWNhdGlvbiIsInRleHQiLCJjb2xvciIsIm5vdGlmaWNhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwiaGFuZGxlTmV3VXNlciIsIm5pY2tuYW1lIiwiaGFuZGxlRGlzY29ubmVjdGVkIl0sInNvdXJjZXMiOlsibm90aWZpY2F0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG4vLyDsnKDsoIAg7KCR7IaNIOuwjyDth7TsnqUg7IucIOu3sCDtjpjsnbTsp4Ag67OA6rK9XHJcbmNvbnN0IGZpcmVOb3RpZmljYXRpb24gPSAodGV4dCwgY29sb3IpID0+IHtcclxuICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5vdGlmaWNhdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gXCJub3RpZmljYXRpb25cIjtcclxuICBib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XHJcbn07XHJcblxyXG4vLyDsnKDsoIAg7KCR7IaNIOyLnFxyXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3VXNlciA9ICh7IG5pY2tuYW1lIH0pID0+XHJcbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBqb2luZWQhYCwgXCJyZ2IoMCwgMTIyLCAyNTUpXCIpO1xyXG5cclxuLy8g7Jyg7KCAIO2HtOyepSDsi5xcclxuZXhwb3J0IGNvbnN0IGhhbmRsZURpc2Nvbm5lY3RlZCA9ICh7IG5pY2tuYW1lIH0pID0+XHJcbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBsZWZ0IWAsIFwicmdiKDI1NSwgNTksIDQ4KVwiKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiLEMsQ0FFQTs7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtFQUN4QyxJQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtFQUNBRCxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0VBQ0FFLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0VBQ0FDLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtFQUNBWCxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0QsQ0FORCxDLENBUUE7OztBQUNPLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7RUFBQSxJQUFHQyxRQUFILFFBQUdBLFFBQUg7RUFBQSxPQUMzQlgsZ0JBQWdCLFdBQUlXLFFBQUosb0JBQTZCLGtCQUE3QixDQURXO0FBQUEsQ0FBdEIsQyxDQUdQOzs7OztBQUNPLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7RUFBQSxJQUFHRCxRQUFILFNBQUdBLFFBQUg7RUFBQSxPQUNoQ1gsZ0JBQWdCLFdBQUlXLFFBQUosa0JBQTJCLGtCQUEzQixDQURnQjtBQUFBLENBQTNCIn0=
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStrokedPath = exports.handleFilled = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var mode = document.getElementById("jsMode");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;
var filling = false;

var stopPainting = function stopPainting() {
  painting = false;
};

var startPainting = function startPainting() {
  painting = true;
};

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var currentColor = ctx.strokeStyle;

  if (color !== null) {
    ctx.strokeStyle = color;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

var onMouseMove = function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!painting) {
    beginPath(x, y);
    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } else if (!filling) {
    strokePath(x, y);
    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle
    });
  }
};

var handleColorClick = function handleColorClick(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};

var handleModeClick = function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
};

var fill = function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;

  if (color !== null) {
    ctx.fillStyle = color;
  }

  console.log(ctx.fillStyle);
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentColor;
};

var handleCanvasClick = function handleCanvasClick() {
  if (filling) {
    fill();
    (0, _sockets.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
};

var handleCM = function handleCM(event) {
  event.preventDefault();
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(function (color) {
  return color.addEventListener("click", handleColorClick);
});

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color;
  return strokePath(x, y, color);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNvbG9ycyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtb2RlIiwiSU5JVElBTF9DT0xPUiIsIkNBTlZBU19TSVpFIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwicGFpbnRpbmciLCJmaWxsaW5nIiwic3RvcFBhaW50aW5nIiwic3RhcnRQYWludGluZyIsImJlZ2luUGF0aCIsIngiLCJ5IiwibW92ZVRvIiwic3Ryb2tlUGF0aCIsImNvbG9yIiwiY3VycmVudENvbG9yIiwibGluZVRvIiwic3Ryb2tlIiwib25Nb3VzZU1vdmUiLCJldmVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZ2V0U29ja2V0IiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsImhhbmRsZUNvbG9yQ2xpY2siLCJ0YXJnZXQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhhbmRsZU1vZGVDbGljayIsImlubmVyVGV4dCIsImZpbGwiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2FudmFzQ2xpY2siLCJoYW5kbGVDTSIsInByZXZlbnREZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJoYW5kbGVCZWdhblBhdGgiLCJoYW5kbGVTdHJva2VkUGF0aCIsImhhbmRsZUZpbGxlZCJdLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDYW52YXNcIik7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbmNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqc0NvbG9yXCIpO1xyXG5jb25zdCBtb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01vZGVcIik7XHJcblxyXG5jb25zdCBJTklUSUFMX0NPTE9SID0gXCIjMmMyYzJjXCI7XHJcbmNvbnN0IENBTlZBU19TSVpFID0gNzAwO1xyXG5cclxuY2FudmFzLndpZHRoID0gQ0FOVkFTX1NJWkU7XHJcbmNhbnZhcy5oZWlnaHQgPSBDQU5WQVNfU0laRTtcclxuXHJcbmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbmN0eC5maWxsUmVjdCgwLCAwLCBDQU5WQVNfU0laRSwgQ0FOVkFTX1NJWkUpO1xyXG5jdHguc3Ryb2tlU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xyXG5jdHguZmlsbFN0eWxlID0gSU5JVElBTF9DT0xPUjtcclxuY3R4LmxpbmVXaWR0aCA9IDIuNTtcclxuXHJcbmxldCBwYWludGluZyA9IGZhbHNlO1xyXG5sZXQgZmlsbGluZyA9IGZhbHNlO1xyXG5cclxuY29uc3Qgc3RvcFBhaW50aW5nID0gKCkgPT4ge1xyXG4gIHBhaW50aW5nID0gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBzdGFydFBhaW50aW5nID0gKCkgPT4ge1xyXG4gIHBhaW50aW5nID0gdHJ1ZTtcclxufTtcclxuXHJcbmNvbnN0IGJlZ2luUGF0aCA9ICh4LCB5KSA9PiB7XHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIGN0eC5tb3ZlVG8oeCwgeSk7XHJcbn07XHJcblxyXG5jb25zdCBzdHJva2VQYXRoID0gKHgsIHksIGNvbG9yID0gbnVsbCkgPT4ge1xyXG4gIGxldCBjdXJyZW50Q29sb3IgPSBjdHguc3Ryb2tlU3R5bGU7XHJcbiAgaWYgKGNvbG9yICE9PSBudWxsKSB7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICB9XHJcbiAgY3R4LmxpbmVUbyh4LCB5KTtcclxuICBjdHguc3Ryb2tlKCk7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gY3VycmVudENvbG9yO1xyXG59O1xyXG5cclxuY29uc3Qgb25Nb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcclxuICBjb25zdCB4ID0gZXZlbnQub2Zmc2V0WDtcclxuICBjb25zdCB5ID0gZXZlbnQub2Zmc2V0WTtcclxuICBpZiAoIXBhaW50aW5nKSB7XHJcbiAgICBiZWdpblBhdGgoeCwgeSk7XHJcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuYmVnaW5QYXRoLCB7IHgsIHkgfSk7XHJcbiAgfSBlbHNlIGlmICghZmlsbGluZykge1xyXG4gICAgc3Ryb2tlUGF0aCh4LCB5KTtcclxuICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zdHJva2VQYXRoLCB7XHJcbiAgICAgIHgsXHJcbiAgICAgIHksXHJcbiAgICAgIGNvbG9yOiBjdHguc3Ryb2tlU3R5bGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVDb2xvckNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgY29sb3IgPSBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZU1vZGVDbGljayA9ICgpID0+IHtcclxuICBpZiAoZmlsbGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgZmlsbGluZyA9IGZhbHNlO1xyXG4gICAgbW9kZS5pbm5lclRleHQgPSBcIkZpbGxcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgZmlsbGluZyA9IHRydWU7XHJcbiAgICBtb2RlLmlubmVyVGV4dCA9IFwiUGFpbnRcIjtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBmaWxsID0gKGNvbG9yID0gbnVsbCkgPT4ge1xyXG4gIGxldCBjdXJyZW50Q29sb3IgPSBjdHguZmlsbFN0eWxlO1xyXG4gIGlmIChjb2xvciAhPT0gbnVsbCkge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhjdHguZmlsbFN0eWxlKTtcclxuICBjdHguZmlsbFJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcclxuICBjdHguZmlsbFN0eWxlID0gY3VycmVudENvbG9yO1xyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlQ2FudmFzQ2xpY2sgPSAoKSA9PiB7XHJcbiAgaWYgKGZpbGxpbmcpIHtcclxuICAgIGZpbGwoKTtcclxuICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5maWxsLCB7IGNvbG9yOiBjdHguZmlsbFN0eWxlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZUNNID0gKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufTtcclxuXHJcbmlmIChjYW52YXMpIHtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYWludGluZyk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQYWludGluZyk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBoYW5kbGVDTSk7XHJcbn1cclxuXHJcbkFycmF5LmZyb20oY29sb3JzKS5mb3JFYWNoKChjb2xvcikgPT5cclxuICBjb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ29sb3JDbGljaylcclxuKTtcclxuXHJcbmlmIChtb2RlKSB7XHJcbiAgbW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTW9kZUNsaWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUJlZ2FuUGF0aCA9ICh7IHgsIHkgfSkgPT4gYmVnaW5QYXRoKHgsIHkpO1xyXG5leHBvcnQgY29uc3QgaGFuZGxlU3Ryb2tlZFBhdGggPSAoeyB4LCB5LCBjb2xvciB9KSA9PiBzdHJva2VQYXRoKHgsIHksIGNvbG9yKTtcclxuZXhwb3J0IGNvbnN0IGhhbmRsZUZpbGxlZCA9ICh7IGNvbG9yIH0pID0+IGZpbGwoY29sb3IpO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFmO0FBQ0EsSUFBTUMsSUFBSSxHQUFHTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUVBLElBQU1NLGFBQWEsR0FBRyxTQUF0QjtBQUNBLElBQU1DLFdBQVcsR0FBRyxHQUFwQjtBQUVBVCxNQUFNLENBQUNVLEtBQVAsR0FBZUQsV0FBZjtBQUNBVCxNQUFNLENBQUNXLE1BQVAsR0FBZ0JGLFdBQWhCO0FBRUFOLEdBQUcsQ0FBQ1MsU0FBSixHQUFnQixPQUFoQjtBQUNBVCxHQUFHLENBQUNVLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CSixXQUFuQixFQUFnQ0EsV0FBaEM7QUFDQU4sR0FBRyxDQUFDVyxXQUFKLEdBQWtCTixhQUFsQjtBQUNBTCxHQUFHLENBQUNTLFNBQUosR0FBZ0JKLGFBQWhCO0FBQ0FMLEdBQUcsQ0FBQ1ksU0FBSixHQUFnQixHQUFoQjtBQUVBLElBQUlDLFFBQVEsR0FBRyxLQUFmO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLEtBQWQ7O0FBRUEsSUFB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
},{"./sockets":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSocket = exports.getSocket = void 0;

var _chat = require("./chat");

var _notifications = require("./notifications");

var _paint = require("./paint");

var socket = null;

var getSocket = function getSocket() {
  return socket;
}; // server event 대기


exports.getSocket = getSocket;

var initSocket = function initSocket(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMessage);
  socket.on(events.beganPath, _paint.handleBeganPath);
  socket.on(events.strokedPath, _paint.handleStrokedPath);
  socket.on(events.filled, _paint.handleFilled);
};

exports.initSocket = initSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzb2NrZXQiLCJnZXRTb2NrZXQiLCJpbml0U29ja2V0IiwiYVNvY2tldCIsIndpbmRvdyIsImV2ZW50cyIsIm9uIiwibmV3VXNlciIsImhhbmRsZU5ld1VzZXIiLCJkaXNjb25uZWN0ZWQiLCJoYW5kbGVEaXNjb25uZWN0ZWQiLCJuZXdNc2ciLCJoYW5kbGVOZXdNZXNzYWdlIiwiYmVnYW5QYXRoIiwiaGFuZGxlQmVnYW5QYXRoIiwic3Ryb2tlZFBhdGgiLCJoYW5kbGVTdHJva2VkUGF0aCIsImZpbGxlZCIsImhhbmRsZUZpbGxlZCJdLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTmV3TWVzc2FnZSB9IGZyb20gXCIuL2NoYXRcIjtcclxuaW1wb3J0IHsgaGFuZGxlRGlzY29ubmVjdGVkLCBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVCZWdhblBhdGgsIGhhbmRsZUZpbGxlZCwgaGFuZGxlU3Ryb2tlZFBhdGggfSBmcm9tIFwiLi9wYWludFwiO1xyXG5cclxubGV0IHNvY2tldCA9IG51bGw7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xyXG5cclxuLy8gc2VydmVyIGV2ZW50IOuMgOq4sFxyXG5leHBvcnQgY29uc3QgaW5pdFNvY2tldCA9IChhU29ja2V0KSA9PiB7XHJcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcclxuICBzb2NrZXQgPSBhU29ja2V0O1xyXG4gIHNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XHJcbiAgc29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3RlZCk7XHJcbiAgc29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01lc3NhZ2UpO1xyXG4gIHNvY2tldC5vbihldmVudHMuYmVnYW5QYXRoLCBoYW5kbGVCZWdhblBhdGgpO1xyXG4gIHNvY2tldC5vbihldmVudHMuc3Ryb2tlZFBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoKTtcclxuICBzb2NrZXQub24oZXZlbnRzLmZpbGxlZCwgaGFuZGxlRmlsbGVkKTtcclxufTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBSUEsTUFBTSxHQUFHLElBQWI7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7RUFBQSxPQUFNRCxNQUFOO0FBQUEsQ0FBbEIsQyxDQUVQOzs7OztBQUNPLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQsRUFBYTtFQUNyQyxjQUFtQkMsTUFBbkI7RUFBQSxJQUFRQyxNQUFSLFdBQVFBLE1BQVI7RUFDQUwsTUFBTSxHQUFHRyxPQUFUO0VBQ0FILE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNFLE9BQWpCLEVBQTBCQyw0QkFBMUI7RUFDQVIsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0ksWUFBakIsRUFBK0JDLGlDQUEvQjtFQUNBVixNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDTSxNQUFqQixFQUF5QkMsc0JBQXpCO0VBQ0FaLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNRLFNBQWpCLEVBQTRCQyxzQkFBNUI7RUFDQWQsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1UsV0FBakIsRUFBOEJDLHdCQUE5QjtFQUNBaEIsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1ksTUFBakIsRUFBeUJDLG1CQUF6QjtBQUNELENBVE0ifQ==
},{"./chat":1,"./notifications":4,"./paint":5}]},{},[2])