(function(){
 var h=document.querySelector('header'),b=document.getElementById('burger'),m=document.getElementById('menu');
 if(h&&b&&m){
  function set(o){h.classList.toggle('open',o);b.setAttribute('aria-expanded',o?'true':'false')}
  b.addEventListener('click',function(e){e.stopPropagation();set(!h.classList.contains('open'))});
  m.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
  document.addEventListener('click',function(e){if(!h.contains(e.target))set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
 }
 var c=document.getElementById('barCall'),cb=document.getElementById('callBtn');
 if(c&&cb){
  function so(o){c.classList.toggle('open',o);cb.setAttribute('aria-expanded',o?'true':'false')}
  cb.addEventListener('click',function(e){e.stopPropagation();so(!c.classList.contains('open'))});
  document.addEventListener('click',function(e){if(!c.contains(e.target))so(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')so(false)});
 }
})();
