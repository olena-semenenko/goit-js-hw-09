const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.querySelector("body");e.addEventListener("click",(function(t){if(e.disaibled)return;o=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;n.style.backgroundColor=e}),1e3),e.disaibled=!0})),t.addEventListener("click",(function(t){clearInterval(o),e.disaibled=!1}));let o=null;
//# sourceMappingURL=01-color-switcher.fd57147b.js.map
