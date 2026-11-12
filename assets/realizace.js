(function(){
 var lb=document.getElementById('lb');if(!lb)return;
 var img=lb.querySelector('img'),cap=lb.querySelector('.cap'),list=[],i=0,last=null;
 function show(n){i=(n+list.length)%list.length;img.src=list[i].dataset.full;img.alt=list[i].dataset.alt;cap.textContent=list[i].dataset.alt+' ('+(i+1)+'/'+list.length+')'}
 function open(b){list=[].slice.call(b.parentNode.querySelectorAll('button'));last=b;lb.classList.add('on');document.body.style.overflow='hidden';show(list.indexOf(b));lb.querySelector('.x').focus();window.jlTrack&&jlTrack('gallery_open')}
 function close(){lb.classList.remove('on');document.body.style.overflow='';img.removeAttribute('src');last&&last.focus()}
 document.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('.gal button');if(b){open(b);return}
  if(!lb.classList.contains('on'))return;
  if(e.target.closest('.x')||e.target===lb)close();
  else if(e.target.closest('.p'))show(i-1);else if(e.target.closest('.n'))show(i+1)});
 document.addEventListener('keydown',function(e){if(!lb.classList.contains('on'))return;
  if(e.key==='Escape')close();else if(e.key==='ArrowLeft')show(i-1);else if(e.key==='ArrowRight')show(i+1)});
 var sx=0;lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
 lb.addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)show(i+(d<0?1:-1))});
 [].forEach.call(document.querySelectorAll('.ba'),function(b){var r=b.querySelector('input'),t=b.querySelector('.top'),bar=b.querySelector('.bar');
  function u(){var v=r.value;t.style.clipPath='inset(0 '+(100-v)+'% 0 0)';bar.style.left=v+'%'}
  r.addEventListener('input',u);u()});
})();
