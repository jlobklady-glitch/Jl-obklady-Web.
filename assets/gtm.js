/* Google Tag Manager + souhlas s měřením (Consent Mode v2). Do GTM_ID se vkládá ID kontejneru. */
(function(){
 var GTM_ID='GTM-MTH3NGDL',KEY='jl_consent';
 window.dataLayer=window.dataLayer||[];
 function gtag(){dataLayer.push(arguments)}
 var saved=null;try{saved=localStorage.getItem(KEY)}catch(e){}
 gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:saved==='granted'?'granted':'denied',wait_for_update:500});
 gtag('set','ads_data_redaction',true);
 dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
 var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id='+GTM_ID;document.head.appendChild(s);
 function decide(v){try{localStorage.setItem(KEY,v)}catch(e){}gtag('consent','update',{analytics_storage:v==='granted'?'granted':'denied'});var b=document.getElementById('cc');if(b)b.remove()}
 function banner(){
  if(document.getElementById('cc'))return;
  var d=document.createElement('div');d.id='cc';d.setAttribute('role','dialog');d.setAttribute('aria-label','Souhlas s měřením návštěvnosti');
  d.innerHTML='<p>Používáme anonymní měření návštěvnosti, abychom věděli, co na webu funguje. Zapnout ho můžete jen s vaším souhlasem. <a href="/cookies/">Více o cookies</a></p><div><button type="button" class="btn" data-v="granted">Souhlasím</button><button type="button" class="btn ghost" data-v="denied">Nesouhlasím</button></div>';
  d.addEventListener('click',function(e){var v=e.target.getAttribute&&e.target.getAttribute('data-v');if(v)decide(v)});
  document.body.appendChild(d);
 }
 document.addEventListener('DOMContentLoaded',function(){
  if(!saved)banner();
  var o=document.getElementById('ccOpen');if(o)o.addEventListener('click',function(e){e.preventDefault();banner()});
  var n=document.querySelector('footer nav');
  if(n){var a=document.createElement('a');a.href='#';a.textContent='Nastavení cookies';a.addEventListener('click',function(e){e.preventDefault();banner()});n.appendChild(a)}
 });
})();
