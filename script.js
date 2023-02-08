// ==UserScript==
// @name         Force enter ChatGPT if it is "capacity right now"
// @namespace    https://github.com/mariopaglia
// @version      0.1
// @description  try to take over the world!
// @author       Mario Paglia
// @updateURL    https://gist.githubusercontent.com/mariopaglia/ae5ac5ef156b2eaffd289f0245a674bd/raw/d8ef11c527a54802e273e67d00a116b18747c1c0/forcechatgpt.js
// @downloadURL  https://gist.githubusercontent.com/mariopaglia/ae5ac5ef156b2eaffd289f0245a674bd/raw/d8ef11c527a54802e273e67d00a116b18747c1c0/forcechatgpt.js
// @match        https://chat.openai.com/auth/login
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chat.openai.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  window.addEventListener(
    "load",
    function () {
      document.querySelectorAll("div").forEach((element) => {
        if (element.innerHTML === "ChatGPT is at capacity right now") {
          location.reload();
        }
      });
    },
    false
  );
})();
