!function(){function t(t){var a=t.isRunning;n.start.disabled=a,n.stop.disabled=!a}var n={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")},a=null;n.start.addEventListener("click",(function(){t({isRunning:!0}),a||(a=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3))})),n.stop.addEventListener("click",(function(){t({isRunning:!1}),clearInterval(a),a=null}))}();
//# sourceMappingURL=01-color-switcher.79490260.js.map
