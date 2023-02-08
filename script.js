// ==UserScript==
// @name         Force enter ChatGPT if it is "capacity right now"
// @namespace    https://github.com/mariopaglia
// @version      0.2
// @description  try to take over the world!
// @author       Mario Paglia
// @updateURL    https://github.com/mariopaglia/enterforce-chatgpt/raw/main/script.js
// @downloadURL  https://github.com/mariopaglia/enterforce-chatgpt/raw/main/script.js
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
