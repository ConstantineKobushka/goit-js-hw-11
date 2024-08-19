import{S as f,i as u}from"./assets/vendor-f33cd494.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const m="https://pixabay.com/api/?",p=t=>{const o=new URLSearchParams({key:"39461522-3585b4ffe1c253549e3ec0e9b",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},g=t=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img class="gallery-img"
      src="${t.webformatURL}"
      alt="${t.tags}"
      loading="lazy" />
    </a>
    <ul class="gallery-info">
      <li class="gallery-info-item">
        <p class="gallery-info-title">Likes</p>
        <p class="gallery-info-text">${t.likes}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Views</p>
        <p class="gallery-info-text">${t.views}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Comments</p>
        <p class="gallery-info-text">${t.comments}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Downloads</p>
        <p class="gallery-info-text">${t.downloads}</p>
      </li>
    </ul>
  </li>
  `,d="/goit-js-hw-11/assets/error-massage-03aea49c.svg",i=document.querySelector(".form"),n=document.querySelector(".gallery-list"),c=document.querySelector(".loader-box");i.addEventListener("submit",h);const y=new f(".gallery-list a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",overlayOpacity:1});function h(t){t.preventDefault();const o=i.elements.search.value.trim();o.trim()!==""&&(c.classList.add("loader-box-active"),p(o).then(r=>{if(c.classList.add("loader-box-active"),r.hits.length===0){u.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"24px",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:d,maxWidth:"385px",timeout:5e3}),n.innerHTML="",i.reset(),i.elements.search.focus();return}const l=r.hits.map(e=>g(e)).join("");n.innerHTML=l,y.refresh(),i.reset(),i.elements.search.focus()}).catch(r=>{console.log(r)}).finally(()=>{c.classList.remove("loader-box-active")}))}
//# sourceMappingURL=commonHelpers.js.map
