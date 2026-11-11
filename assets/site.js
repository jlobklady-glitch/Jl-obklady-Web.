(function(){
 var h=document.querySelector('header'),b=document.getElementById('burger'),m=document.getElementById('menu');
 if(h&&b&&m){
  function set(o){h.classList.toggle('open',o);b.setAttribute('aria-expanded',o?'true':'false')}
  b.addEventListener('click',function(e){e.stopPropagation();set(!h.classList.contains('open'))});
  m.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
  document.addEventListener('click',function(e){if(!h.contains(e.target))set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
 }
 var c=document.getElementById('call'),cb=document.getElementById('callBtn');
 if(c&&cb){
  function so(o){c.classList.toggle('open',o);cb.setAttribute('aria-expanded',o?'true':'false')}
  cb.addEventListener('click',function(e){e.stopPropagation();so(!c.classList.contains('open'))});
  document.addEventListener('click',function(e){if(!c.contains(e.target))so(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')so(false)});
 }
})();
(function(){
 var b=document.getElementById('cmpBox');if(!b)return;
 var o=document.getElementById('cmpOurs'),h=document.getElementById('cmpH'),r=document.getElementById('cmpR'),tl=document.getElementById('tagL'),tr=document.getElementById('tagR'),hint=document.getElementById('cmpHint');
 var drag=false,busy=true;
 function set(p){p=Math.max(0,Math.min(100,p));o.style.clipPath='inset(0 '+(100-p)+'% 0 0)';h.style.left=p+'%';r.value=p;tl.style.opacity=p>12?1:0;tr.style.opacity=p<88?1:0}
 function mv(x){var q=b.getBoundingClientRect();set((x-q.left)/q.width*100)}
 b.addEventListener('pointerdown',function(e){if(busy)return;drag=true;b.setPointerCapture(e.pointerId);mv(e.clientX)});
 b.addEventListener('pointermove',function(e){if(drag)mv(e.clientX)});
 ['pointerup','pointercancel'].forEach(function(n){b.addEventListener(n,function(){drag=false})});
 r.addEventListener('input',function(){set(+r.value)});
 var ease=function(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2};
 if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches){set(50);busy=false;return}
 set(0);hint.textContent='Sledujte rozdíl…';
 function run(){var t0=performance.now();
  (function tick(t){var s=(t-t0)/1000;
   if(s<.6)set(0);else if(s<3.6)set(100*ease((s-.6)/3));else if(s<4.4)set(100);else if(s<5.6)set(100-50*ease((s-4.4)/1.2));
   else{set(50);busy=false;hint.textContent='Posuňte jezdec prstem nebo myší.';return}
   requestAnimationFrame(tick)})(t0)}
 if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){if(e[0].isIntersecting){io.disconnect();run()}},{threshold:.6});io.observe(b)}else run();
})();

/* Měření: události posílá do GA4 (gtag), GTM (dataLayer) nebo Plausible, pokud jsou na stránce vloženy. Jinak nedělá nic. */
window.jlTrack=function(n,p){try{p=p||{};if(window.gtag)gtag('event',n,p);if(window.dataLayer&&!window.gtag)dataLayer.push(Object.assign({event:n},p));if(window.plausible)plausible(n,{props:p})}catch(e){}};
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a');if(!a)return;var h=a.getAttribute('href')||'';
 if(h.indexOf('tel:')===0)jlTrack('phone_click',{number:h.slice(4)});
 else if(h.indexOf('mailto:')===0)jlTrack('email_click');
 else if(h.indexOf('wa.me')>-1)jlTrack('whatsapp_click');
 else if(h.indexOf('/poptavka')===0)jlTrack('cta_poptavka',{page:location.pathname})},true);
