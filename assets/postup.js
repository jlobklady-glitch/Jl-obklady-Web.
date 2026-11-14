/* Postup stavby: kroky se při zobrazení postupně přiblíží zepředu (po řádcích zleva doprava) a zůstanou statické. */
(function(){
 var ol=document.querySelector('.steps3d');
 if(!ol||!('IntersectionObserver' in window)||(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches))return;
 var lis=[].slice.call(ol.children);
 ol.classList.add('fly');
 var cols=function(){var c=getComputedStyle(ol).gridTemplateColumns;return c&&c!=='none'?c.split(' ').length:1};
 var io=new IntersectionObserver(function(es){
  var n=cols();
  es.forEach(function(e){
   if(!e.isIntersecting)return;
   var i=lis.indexOf(e.target);
   e.target.style.transitionDelay=((i%n)*120)+'ms';
   e.target.classList.add('in');io.unobserve(e.target);(function(t){setTimeout(function(){t.classList.add('done')},(i%n)*120+1000)})(e.target);
  });
 },{threshold:.12});
 lis.forEach(function(li){io.observe(li)});
})();
