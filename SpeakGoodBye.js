
(function (window) {
  var byeSpeaker = {};
  byeSpeaker.speakWord = "GoodBye";

  byeSpeaker.speak = function (name) {
    console.log( byeSpeaker.speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);