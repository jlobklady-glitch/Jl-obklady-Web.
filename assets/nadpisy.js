/* Nadpisy sekcí na úvodní stránce: při rolování se zvednou na místo, pod nimi se vykreslí spára; vybrané nadpisy mají vlastní efekt. */
(function(){
 if(!('IntersectionObserver' in window)||(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches))return;
 var hs=[].slice.call(document.querySelectorAll('main section h2'));
 var io=new IntersectionObserver(function(es){
  es.forEach(function(e){
   if(!e.isIntersecting)return;
   var h=e.target;h.classList.add('in');io.unobserve(h);
   if(h._bt)h._bt.classList.add('in');
  });
 },{threshold:.4,rootMargin:'0px 0px -8% 0px'});
 hs.forEach(function(h){
  var t=h.textContent,seen=h.getBoundingClientRect().top<innerHeight*.9;
  h.classList.add('rv');
  if(/pod obkladem/.test(t)){
   h.classList.add('rw');
   var words=t.trim().split(/\s+/),out='',i=0;
   for(var k=0;k<words.length;k++){
    var w='<span class="w" style="--i:'+(i++)+'">'+words[k]+'</span>';
    if(words[k]==='pod'&&/^obkladem/.test(words[k+1]||'')){w='<span class="em">'+w+' <span class="w" style="--i:'+(i++)+'">'+words[++k]+'</span></span>'}
    out+=(out?' ':'')+w;
   }
   h.innerHTML=out;
  }else if(/3D/.test(t)){h.classList.add('rv-z')}
  else if(/jinde/.test(t)){h.innerHTML=h.innerHTML.replace('jinde','<span class="hl">jinde</span>')}
  else if(/vydrží/.test(t)){var c=h.closest('.cta-band'),b=c&&c.querySelector('.btn');if(b){b.classList.add('bt');h._bt=b;if(seen)b.classList.add('st')}}
  if(seen)h.classList.add('st');
  io.observe(h);
 });
})();
