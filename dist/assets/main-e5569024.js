(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const g="modulepreload",w=function(s){return"/candy-planet/"+s},p={},y=function(o,n,c){if(!n||n.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(n.map(e=>{if(e=w(e),e in p)return;p[e]=!0;const r=e.endsWith(".css"),h=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!r||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${h}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":g,r||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),r)return new Promise((l,a)=>{i.addEventListener("load",l),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},u=document.querySelector(".menu-open"),f=document.querySelector(".menu-close"),m=document.querySelector(".mobile-menu"),v=document.querySelectorAll(".mobile-nav-link"),E=document.querySelectorAll(".desktop-nav-link");function L(){m.style.display="block",u.style.display="none",f.style.display="block",document.body.style.overflow="hidden"}function d(){m.style.display="none",u.style.display="block",f.style.display="none",document.body.style.overflow=""}u.addEventListener("click",L);f.addEventListener("click",d);document.addEventListener("keydown",s=>{s.key==="Escape"&&m.style.display==="block"&&d()});E.forEach(s=>{s.addEventListener("click",o=>{o.preventDefault();const n=s.getAttribute("href"),c=n.startsWith("/candy-planet/#")?n.substring(14):null,t=n==="/candy-planet/"||n==="/candy-planet",e=window.location.pathname==="/candy-planet/";t?window.location.href="/candy-planet/":c&&(e||(window.location.href="/candy-planet/?scrollTo="+c),document.querySelector(c).scrollIntoView({behavior:"smooth"})),setTimeout(()=>{d()},100)})});v.forEach(s=>{s.addEventListener("click",o=>{o.preventDefault();const n=s.getAttribute("href"),c=n.startsWith("/candy-planet/#")?n.substring(14):null,t=n==="/candy-planet/"||n==="/candy-planet",e=window.location.pathname==="/candy-planet/";t?window.location.href="/candy-planet/":c&&(e||(window.location.href="/candy-planet/?scrollTo="+c),document.querySelector(c).scrollIntoView({behavior:"smooth"})),setTimeout(()=>{d()},100)})});window.addEventListener("load",()=>{const o=new URLSearchParams(window.location.search).get("scrollTo");if(o){const n=document.querySelector("#"+o);n&&(n.scrollIntoView({behavior:"smooth"}),window.history.replaceState({},document.title,window.location.pathname))}});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".faq-item");s.forEach(o=>{const n=o.querySelector(".faq-question"),c=o.querySelector(".faq-toggle-icon");n.addEventListener("click",()=>{o.classList.contains("open")||(s.forEach(e=>{e.classList.remove("open");const r=e.querySelector(".faq-toggle-icon");r.src="./img/faq/open@1x.png",r.srcset="./img/faq/open@2x.png 2x"}),o.classList.add("open"),c.src="./img/faq/close@1x.png",c.srcset="./img/faq/close@2x.png 2x")})})});document.getElementById("reviews-swiper-wrapper")&&y(()=>import("./reviews-swiper-97b06229.js"),["assets/reviews-swiper-97b06229.js","assets/vendor-4b5ab9a6.js"]);document.getElementById("gallery-swiper-wrapper")&&y(()=>import("./gallery-swiper-40b3f70f.js"),["assets/gallery-swiper-40b3f70f.js","assets/vendor-4b5ab9a6.js"]);
//# sourceMappingURL=main-e5569024.js.map
