!function(){var t={body:document.body,startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),btnDisabled:document.querySelector("disabled")};function e(e){var n="#".concat(Math.floor(16777215*Math.random()).toString(16));t.body.style.backgroundColor=n}t.startBtn.addEventListener("click",(function(){intervalChange=setInterval(e,1e3),t.stopBtn.removeAttribute("disabled"),t.startBtn.toggleAttribute("disabled")})),t.stopBtn.addEventListener("click",(function(){clearInterval(intervalChange),t.startBtn.removeAttribute("disabled"),t.stopBtn.toggleAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.8d683425.js.map