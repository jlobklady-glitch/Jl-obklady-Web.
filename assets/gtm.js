/* Google Tag Manager se načte až po souhlasu s měřením (Consent Mode v2). Bez souhlasu se na servery Googlu nic neposílá. */
(function(){
 var GTM_ID='GTM-MTH3NGDL',KEY='jl_consent',loaded=false;
 window.dataLayer=window.dataLayer||[];
 window.jlConsent=false;
 function gtag(){dataLayer.push(arguments)}
 var saved=null;try{saved=localStorage.getItem(KEY)}catch(e){}
 gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});
 gtag('set','ads_data_redaction',true);
 function load(){
  if(loaded)return;loaded=true;
  window.jlConsent=true;
  gtag('consent','update',{analytics_storage:'granted'});
  dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
  var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id='+GTM_ID;document.head.appendChild(s);
 }
 function wipe(){
  window.jlConsent=false;
  if(loaded)gtag('consent','update',{analytics_storage:'denied'});
  var h=location.hostname,p=h.split('.'),doms=[h,'.'+h];if(p.length>2)doms.push('.'+p.slice(-2).join('.'));
  var exp='=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  document.cookie.split(';').forEach(function(c){
   var n=c.split('=')[0].trim();
   if(n==='_ga'||n.indexOf('_ga_')===0){document.cookie=n+exp;doms.forEach(function(d){document.cookie=n+exp+'; domain='+d})}
  });
 }
 function decide(v){try{localStorage.setItem(KEY,v)}catch(e){}if(v==='granted')load();else wipe();var b=document.getElementById('cc');if(b)b.remove()}
 function banner(){
  if(document.getElementById('cc'))return;
  var d=document.createElement('div');d.id='cc';d.setAttribute('role','dialog');d.setAttribute('aria-label','Souhlas s měřením návštěvnosti');
  d.innerHTML='<p>Používáme anonymní měření návštěvnosti, abychom věděli, co na webu funguje. Zapnout ho můžete jen s vaším souhlasem. <a href="/cookies/">Více o cookies</a></p><div><button type="button" class="btn" data-v="denied">Nesouhlasím</button><button type="button" class="btn" data-v="granted">Souhlasím</button></div>';
  d.addEventListener('click',function(e){var v=e.target.getAttribute&&e.target.getAttribute('data-v');if(v)decide(v)});
  document.body.appendChild(d);
 }
 if(saved==='granted')load();
 document.addEventListener('DOMContentLoaded',function(){
  if(!saved)banner();
  var o=document.getElementById('ccOpen');if(o)o.addEventListener('click',function(e){e.preventDefault();banner()});
  var n=document.querySelector('footer nav');
  if(n){var a=document.createElement('a');a.href='#';a.textContent='Nastavení cookies';a.addEventListener('click',function(e){e.preventDefault();banner()});n.appendChild(a)}
 });
})();
