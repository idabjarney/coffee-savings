(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const g=document.querySelector(".age-input"),q=document.querySelector(".cups-per-week-input"),P=document.querySelector(".coffee-price-input"),C=document.querySelector("form"),w=document.querySelector(".try-again-btn"),p=document.querySelector(".results-wrapper"),y=document.querySelector(".calculator-form"),l=document.querySelector(".tabs-wrapper"),v=document.querySelector(".input-container"),L=document.querySelector(".calculation-info-tab"),b=document.querySelector(".button-wrapper"),A=Array.from(document.querySelectorAll(".tab")),N=.0284,x=.024,m=67;let u,d,a;C.addEventListener("submit",o=>{o.preventDefault();const[t,n,s]=Array.from(document.querySelectorAll(".user-input-value"));d=Number(g.value),u=Number(q.value),a=Number(P.value);const e=u*a,r=u*52*a;t.textContent=e,n.textContent=a,s.textContent=r.toLocaleString(),b.classList.remove("hidden"),y.classList.add("hidden"),p.classList.remove("hidden"),L.classList.remove("hidden"),l.classList.remove("hidden"),l.classList.remove("hidden"),v.classList.add("border")});w.addEventListener("click",o=>{o.preventDefault(),y.classList.remove("hidden"),p.classList.add("hidden"),L.classList.add("hidden"),l.classList.add("hidden"),v.classList.remove("border"),b.classList.add("hidden"),h(document.querySelector(".tab-info"))});for(let o of A)o.addEventListener("click",t=>h(t.target));function h(o){var r,c;const t=document.querySelector(".active");t&&(t.classList.remove("active"),t.classList.add("hidden"));const n=(r=o.dataset)==null?void 0:r.showtab,s=document.querySelector(`.${n}`);s&&(s.classList.remove("hidden"),s.classList.add("active"));const e=document.querySelector(".selected-tab");if(e&&(e.classList.remove("selected-tab"),o.classList.add("selected-tab")),n==="x-year-results"){const i=(c=o.dataset)==null?void 0:c.years,S=O(i==="retirement"?f(d,m):+i);document.querySelector(".x-year").textContent=(i==="retirement"?f(d,m):+i).toString(),document.querySelector(".x-year-savings-result").textContent=S.toLocaleString()}}function O(o){let t=0,n=a;for(let s=0;s<o;s++){const e=u*52*n;t+=e,t+=t*N,n+=n*x}return Math.round(t)}function f(o,t){return t-o}
