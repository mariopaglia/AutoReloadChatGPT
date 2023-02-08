// ==UserScript==
// @name         Force entry into ChatGPT
// @description  Force entry into ChatGPT if its capacity is at its limit
// @version      0.7
// @author       Mario Paglia
// @updateURL    https://github.com/mariopaglia/enterforce-chatgpt/raw/main/script.user.js
// @downloadURL  https://github.com/mariopaglia/enterforce-chatgpt/raw/main/script.user.js
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
