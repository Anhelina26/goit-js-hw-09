!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=r);var o=r("h6c0i"),i=document.querySelector(".form");function a(e,t){return new Promise((function(n,r){var o=Math.random()>.3;setTimeout((function(){o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}i.lastElementChild.classList.add("btn"),i.addEventListener("submit",(function(e){e.preventDefault();for(var t=function(e){return{delay:Number(e.currentTarget.elements.delay.value),step:Number(e.currentTarget.elements.step.value),amount:Number(e.currentTarget.elements.amount.value)}}(e),n=t.delay,r=t.step,i=t.amount,u=1;u<=i;u+=1)a(u,n).then((function(e){var t=e.position,n=e.delay;o.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;o.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),n+=r,e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.29f87dba.js.map