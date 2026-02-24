import{S as p,a as g,i as y}from"./assets/vendor-DlULlCeh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=a(t);fetch(t.href,l)}})();const m=new p(".gallery-list a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",overlayOpacity:1}),u=({webformatURL:e,largeImageURL:r,tags:a,likes:s,views:t,comments:l,downloads:o})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${r}">
      <img class="gallery-img"
      src="${e}"
      alt="${a}"
      loading="lazy" />
    </a>
    <ul class="gallery-info">
      <li class="gallery-info-item">
        <p class="gallery-info-title">Likes</p>
        <p class="gallery-info-text">${s}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Views</p>
        <p class="gallery-info-text">${t}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Comments</p>
        <p class="gallery-info-text">${l}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Downloads</p>
        <p class="gallery-info-text">${o}</p>
      </li>
    </ul>
  </li>
  `,d=(e,r)=>{const a=e.map(u).join("");r.innerHTML=a,m.refresh()},h=e=>{e.innerHTML=""},L=e=>{e.classList.add("active")},b=e=>{e.classList.remove("active")},v=g.create({baseURL:"https://pixabay.com/api",params:{key:"39461522-3585b4ffe1c253549e3ec0e9b",image_type:"photo",orientation:"horizontal",safesearch:!0}}),x=e=>v.get("/",{params:{q:e}}),w="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23fafafb'%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53zM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5z'/%3e%3cpath%20fill='%23fafafb'%20d='M6.969%206.969a.75.75%200%200%201%201.062%200L12%2010.939l3.969-3.97a.75.75%200%201%201%201.062%201.062L13.061%2012l3.97%203.969a.752.752%200%200%201-1.062%201.062L12%2013.061l-3.969%203.97a.752.752%200%200%201-1.282-.531.75.75%200%200%201%20.22-.531L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062'/%3e%3c/svg%3e",i=document.querySelector(".gallery-form"),n=document.querySelector(".gallery-list"),c=document.querySelector(".gallery-loader");i.addEventListener("submit",E);function E(e){e.preventDefault();const r=e.target.elements.search.value.trim();if(r===""){f("The input field cannot be empty. Please enter a search keyword.");return}h(n),L(c),x(r).then(({data:a})=>{if(a.hits.length===0){f("Sorry, there are no images matching your search query. Please, try again!");return}d(a.hits,n)}).catch(a=>{console.log(a.message)}).finally(()=>{b(c),i.reset(),i.elements.search.focus()})}function f(e){y.error({title:"Error",titleColor:"#ffffff",message:e,messageColor:"#ffffff",maxWidth:"385px",iconUrl:w,position:"topRight",closeOnEscape:!0,backgroundColor:"#ef4040",progressBarColor:"#b51b1b",timeout:3e3})}
//# sourceMappingURL=index.js.map
