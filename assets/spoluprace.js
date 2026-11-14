/* Jak probíhá spolupráce: po zobrazení přiletí kroky 1 až 5 jeden po druhém zprava a zůstanou na místě. */
(function(){
 var ol=document.querySelector('#postup .steps');
 if(!ol||!('IntersectionObserver' in window)||(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches))return;
 var lis=[].slice.call(ol.children);
 ol.classList.add('fly');
 var io=new IntersectionObserver(function(es){
  if(!es[0].isIntersecting)return;
  io.disconnect();
  lis.forEach(function(li,i){setTimeout(function(){li.classList.add('in')},i*220)});
 },{threshold:.25});
 io.observe(ol);
})();
