!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(e){if(t.disaibled)return;r=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));n.style.backgroundColor=t}),1e3),t.disaibled=!0})),e.addEventListener("click",(function(e){clearInterval(r),t.disaibled=!1}));var r=null}();
//# sourceMappingURL=01-color-switcher.fc35bdd0.js.map