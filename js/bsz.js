!function(){var t=["site_pv","site_uv","page_pv","page_uv"],e=document.currentScript,a=e.hasAttribute("pjax"),n=e.getAttribute("data-api")||"https://bsz.dusays.com/api",i="busuanzi-identity",r=function(){var e=new XMLHttpRequest;e.open("POST",n,!0);var a=localStorage.getItem(i);null!=a&&e.setRequestHeader("Authorization","Bearer "+a),e.setRequestHeader("x-bsz-referer",window.location.href),e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){var a=JSON.parse(e.responseText);if(!0===a.success){t.map((function(t){var e=document.getElementById("busuanzi_value_".concat(t));e&&(e.innerHTML=a.data[t])}));var n=e.getResponseHeader("Set-Bsz-Identity");null!=n&&""!=n&&localStorage.setItem(i,n)}}},e.send()};if(r(),a){var s=window.history.pushState;window.history.pushState=function(){s.apply(this,arguments),r()},window.addEventListener("popstate",(function(t){r()}),!1)}}();