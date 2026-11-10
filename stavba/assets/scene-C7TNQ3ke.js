import{D as Oe,F as _s,S as dd,T as pd,p as md,a as Ki,s as gd,b as Xo,L as _d,H as vd,c as xd,d as Md,e as Oh,B as Bh,f as Sd}from"./index-heg691G3.js";const Vc="187",Rr={ROTATE:0,DOLLY:1,PAN:2},Ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yd=0,zh=1,Ed=2,po=1,bd=2,ho=3,Xs=0,Jn=1,kn=2,Cr=0,mo=1,Hh=2,Gh=3,kh=4,Td=5,Tr=100,wd=101,Ad=102,Rd=103,Cd=104,Pd=200,Ld=201,Dd=202,Id=203,nf=204,sf=205,Nd=206,Ud=207,Fd=208,Od=209,Bd=210,zd=211,Hd=212,Gd=213,kd=214,Jl=0,$l=1,Ql=2,xo=3,jl=4,tc=5,ec=6,nc=7,Wc=0,Vd=1,Wd=2,as=0,rf=1,of=2,af=3,Xc=4,lf=5,cf=6,hf=7,uf=300,Dr=301,Mo=302,gl=303,_l=304,Ca=1e3,rs=1001,ic=1002,On=1003,Xd=1004,qo=1005,ni=1006,vl=1007,bs=1008,ui=1009,ff=1010,df=1011,So=1012,qc=1013,zi=1014,Ai=1015,Hi=1016,Yc=1017,Zc=1018,Ir=1020,pf=35902,mf=35899,gf=1021,_f=1022,Fi=1023,ws=1026,Ts=1027,Kc=1028,Jc=1029,qs=1030,$c=1031,Qc=1033,ya=33776,Ea=33777,ba=33778,Ta=33779,sc=35840,rc=35841,oc=35842,ac=35843,lc=36196,cc=37492,hc=37496,uc=37488,fc=37489,Pa=37490,dc=37491,pc=37808,mc=37809,gc=37810,_c=37811,vc=37812,xc=37813,Mc=37814,Sc=37815,yc=37816,Ec=37817,bc=37818,Tc=37819,wc=37820,Ac=37821,Rc=36492,Cc=36494,Pc=36495,Lc=36283,Dc=36284,La=36285,Ic=36286,qd=3200,Da=0,Yd=1,Es="",ei="srgb",Ia="srgb-linear",Na="linear",je="srgb",xl=7680,Zd=519,Kd=512,Jd=513,$d=514,vf=515,Qd=516,jd=517,xf=518,Mf=519,tp=35044,Vh="300 es",Ri=2e3,yo=2001;function ep(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function np(){const i=Ua("canvas");return i.style.display="block",i}const Wh={};function Xh(...i){const t="THREE."+i.shift();console.log(t,...i)}function Sf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=Sf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ie(...i){i=Sf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Pr(...i){const t=i.join(" ");t in Wh||(Wh[t]=!0,oe(...i))}function ip(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const sp={[Jl]:Jl,[Ql]:ec,[jl]:jl,[xo]:tc,[$l]:$l,[ec]:Ql,[nc]:nc,[tc]:xo};class As{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wa=Math.PI/180,Fa=180/Math.PI;function Or(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function rp(i,t){return(i%t+t)%t}function Ml(i,t,e){return(1-e)*i+e*t}function op(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ap(i,t){if(t.constructor===Float32Array)return i;const e=jc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function lp(i,t){if(t.constructor===Float32Array)return i;const e=jc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const cp={DEG2RAD:wa},ch=class ch{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ch.prototype.isVector2=!0;let mt=ch;class Gi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3],f=r[o+0],u=r[o+1],_=r[o+2],S=r[o+3];if(p!==S||c!==f||l!==u||h!==_){let m=c*f+l*u+h*_+p*S;m<0&&(f=-f,u=-u,_=-_,S=-S,m=-m);let d=1-a;if(m<.9995){const y=Math.acos(m),A=Math.sin(y);d=Math.sin(d*y)/A,a=Math.sin(a*y)/A,c=c*d+f*a,l=l*d+u*a,h=h*d+_*a,p=p*d+S*a}else{c=c*d+f*a,l=l*d+u*a,h=h*d+_*a,p=p*d+S*a;const y=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=y,l*=y,h*=y,p*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[o],f=r[o+1],u=r[o+2],_=r[o+3];return t[e]=a*_+h*p+c*u-l*f,t[e+1]=c*_+h*f+l*p-a*u,t[e+2]=l*_+h*u+a*f-c*p,t[e+3]=h*_-a*p-c*f-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),p=a(r/2),f=c(n/2),u=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*p+l*u*_,this._y=l*u*p-f*h*_,this._z=l*h*_+f*u*p,this._w=l*h*p-f*u*_;break;case"YXZ":this._x=f*h*p+l*u*_,this._y=l*u*p-f*h*_,this._z=l*h*_-f*u*p,this._w=l*h*p+f*u*_;break;case"ZXY":this._x=f*h*p-l*u*_,this._y=l*u*p+f*h*_,this._z=l*h*_+f*u*p,this._w=l*h*p-f*u*_;break;case"ZYX":this._x=f*h*p-l*u*_,this._y=l*u*p+f*h*_,this._z=l*h*_-f*u*p,this._w=l*h*p+f*u*_;break;case"YZX":this._x=f*h*p+l*u*_,this._y=l*u*p+f*h*_,this._z=l*h*_-f*u*p,this._w=l*h*p-f*u*_;break;case"XZY":this._x=f*h*p-l*u*_,this._y=l*u*p-f*h*_,this._z=l*h*_+f*u*p,this._w=l*h*p+f*u*_;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],p=e[10],f=n+a+p;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(n>a&&n>p){const u=2*Math.sqrt(1+n-a-p);this._w=(h-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>p){const u=2*Math.sqrt(1+a-n-p);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+p-n-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hh=class hh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+c*l+o*p-a*h,this.y=n+c*h+a*l-r*p,this.z=s+c*p+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sl.copy(this).projectOnVector(t),this.sub(Sl)}reflect(t){return this.sub(Sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hh.prototype.isVector3=!0;let N=hh;const Sl=new N,qh=new Gi,uh=class uh{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],p=n[7],f=n[2],u=n[5],_=n[8],S=s[0],m=s[3],d=s[6],y=s[1],A=s[4],E=s[7],C=s[2],R=s[5],v=s[8];return r[0]=o*S+a*y+c*C,r[3]=o*m+a*A+c*R,r[6]=o*d+a*E+c*v,r[1]=l*S+h*y+p*C,r[4]=l*m+h*A+p*R,r[7]=l*d+h*E+p*v,r[2]=f*S+u*y+_*C,r[5]=f*m+u*A+_*R,r[8]=f*d+u*E+_*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],p=h*o-a*l,f=a*c-h*r,u=l*r-o*c,_=e*p+n*f+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=p*S,t[1]=(s*l-h*n)*S,t[2]=(a*n-s*o)*S,t[3]=f*S,t[4]=(h*e-s*c)*S,t[5]=(s*r-a*e)*S,t[6]=u*S,t[7]=(n*c-l*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yl.makeScale(t,e)),this}rotate(t){return Pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return Pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};uh.prototype.isMatrix3=!0;let de=uh;const yl=new de,Yh=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hp(){const i={enabled:!0,workingColorSpace:Ia,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===je&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===je&&(s.r=Lr(s.r),s.g=Lr(s.g),s.b=Lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Es?Na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ia]:{primaries:t,whitePoint:n,transfer:Na,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:t,whitePoint:n,transfer:je,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),i}const Le=hp();function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ur;class up{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ur===void 0&&(ur=Ua("canvas")),ur.width=t.width,ur.height=t.height;const s=ur.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ur}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ua("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ls(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ls(e[n]/255)*255):e[n]=ls(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fp=0;class th{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Or(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(El(s[o].image)):r.push(El(s[o]))}else r=El(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function El(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?up.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let dp=0;const bl=new N;class Vn extends As{constructor(t=Vn.DEFAULT_IMAGE,e=Vn.DEFAULT_MAPPING,n=rs,s=rs,r=ni,o=bs,a=Fi,c=ui,l=Vn.DEFAULT_ANISOTROPY,h=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Or(),this.name="",this.source=new th(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(bl).x}get height(){return this.source.getSize(bl).y}get depth(){return this.source.getSize(bl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ca:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case ic:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ca:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case ic:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=uf;Vn.DEFAULT_ANISOTROPY=1;const fh=class fh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],p=c[8],f=c[1],u=c[5],_=c[9],S=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+S)<.1&&Math.abs(_+m)<.1&&Math.abs(l+u+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(l+1)/2,E=(u+1)/2,C=(d+1)/2,R=(h+f)/4,v=(p+S)/4,b=(_+m)/4;return A>E&&A>C?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=R/n,r=v/n):E>C?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=R/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=v/r,s=b/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(p-S)*(p-S)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(p-S)/y,this.z=(f-h)/y,this.w=Math.acos((l+u+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fh.prototype.isVector4=!0;let pn=fh;class pp extends As{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pn(0,0,t,e),this.scissorTest=!1,this.viewport=new pn(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Vn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new th(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends pp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yf extends Vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mp extends Vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ha=class Ha{constructor(t,e,n,s,r,o,a,c,l,h,p,f,u,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,p,f,u,_,S,m)}set(t,e,n,s,r,o,a,c,l,h,p,f,u,_,S,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=p,d[14]=f,d[3]=u,d[7]=_,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ha().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/fr.setFromMatrixColumn(t,0).length(),r=1/fr.setFromMatrixColumn(t,1).length(),o=1/fr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const f=o*h,u=o*p,_=a*h,S=a*p;e[0]=c*h,e[4]=-c*p,e[8]=l,e[1]=u+_*l,e[5]=f-S*l,e[9]=-a*c,e[2]=S-f*l,e[6]=_+u*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,u=c*p,_=l*h,S=l*p;e[0]=f+S*a,e[4]=_*a-u,e[8]=o*l,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=u*a-_,e[6]=S+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,u=c*p,_=l*h,S=l*p;e[0]=f-S*a,e[4]=-o*p,e[8]=_+u*a,e[1]=u+_*a,e[5]=o*h,e[9]=S-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,u=o*p,_=a*h,S=a*p;e[0]=c*h,e[4]=_*l-u,e[8]=f*l+S,e[1]=c*p,e[5]=S*l+f,e[9]=u*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,u=o*l,_=a*c,S=a*l;e[0]=c*h,e[4]=S-f*p,e[8]=_*p+u,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=u*p+_,e[10]=f-S*p}else if(t.order==="XZY"){const f=o*c,u=o*l,_=a*c,S=a*l;e[0]=c*h,e[4]=-p,e[8]=l*h,e[1]=f*p+S,e[5]=o*h,e[9]=u*p-_,e[2]=_*p-u,e[6]=a*h,e[10]=S*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gp,t,_p)}lookAt(t,e,n){const s=this.elements;return ri.subVectors(t,e),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),vs.crossVectors(n,ri),vs.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),vs.crossVectors(n,ri)),vs.normalize(),Yo.crossVectors(ri,vs),s[0]=vs.x,s[4]=Yo.x,s[8]=ri.x,s[1]=vs.y,s[5]=Yo.y,s[9]=ri.y,s[2]=vs.z,s[6]=Yo.z,s[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],p=n[5],f=n[9],u=n[13],_=n[2],S=n[6],m=n[10],d=n[14],y=n[3],A=n[7],E=n[11],C=n[15],R=s[0],v=s[4],b=s[8],H=s[12],I=s[1],O=s[5],V=s[9],K=s[13],D=s[2],Y=s[6],Z=s[10],z=s[14],ut=s[3],J=s[7],j=s[11],lt=s[15];return r[0]=o*R+a*I+c*D+l*ut,r[4]=o*v+a*O+c*Y+l*J,r[8]=o*b+a*V+c*Z+l*j,r[12]=o*H+a*K+c*z+l*lt,r[1]=h*R+p*I+f*D+u*ut,r[5]=h*v+p*O+f*Y+u*J,r[9]=h*b+p*V+f*Z+u*j,r[13]=h*H+p*K+f*z+u*lt,r[2]=_*R+S*I+m*D+d*ut,r[6]=_*v+S*O+m*Y+d*J,r[10]=_*b+S*V+m*Z+d*j,r[14]=_*H+S*K+m*z+d*lt,r[3]=y*R+A*I+E*D+C*ut,r[7]=y*v+A*O+E*Y+C*J,r[11]=y*b+A*V+E*Z+C*j,r[15]=y*H+A*K+E*z+C*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],p=t[6],f=t[10],u=t[14],_=t[3],S=t[7],m=t[11],d=t[15],y=c*u-l*f,A=a*u-l*p,E=a*f-c*p,C=o*u-l*h,R=o*f-c*h,v=o*p-a*h;return e*(S*y-m*A+d*E)-n*(_*y-m*C+d*R)+s*(_*A-S*C+d*v)-r*(_*E-S*R+m*v)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],p=t[9],f=t[10],u=t[11],_=t[12],S=t[13],m=t[14],d=t[15],y=e*a-n*o,A=e*c-s*o,E=e*l-r*o,C=n*c-s*a,R=n*l-r*a,v=s*l-r*c,b=h*S-p*_,H=h*m-f*_,I=h*d-u*_,O=p*m-f*S,V=p*d-u*S,K=f*d-u*m,D=y*K-A*V+E*O+C*I-R*H+v*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/D;return t[0]=(a*K-c*V+l*O)*Y,t[1]=(s*V-n*K-r*O)*Y,t[2]=(S*v-m*R+d*C)*Y,t[3]=(f*R-p*v-u*C)*Y,t[4]=(c*I-o*K-l*H)*Y,t[5]=(e*K-s*I+r*H)*Y,t[6]=(m*E-_*v-d*A)*Y,t[7]=(h*v-f*E+u*A)*Y,t[8]=(o*V-a*I+l*b)*Y,t[9]=(n*I-e*V-r*b)*Y,t[10]=(_*R-S*E+d*y)*Y,t[11]=(p*E-h*R-u*y)*Y,t[12]=(a*H-o*O-c*b)*Y,t[13]=(e*O-n*H+s*b)*Y,t[14]=(S*A-_*C-m*y)*Y,t[15]=(h*C-p*A+f*y)*Y,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,p=a+a,f=r*l,u=r*h,_=r*p,S=o*h,m=o*p,d=a*p,y=c*l,A=c*h,E=c*p,C=n.x,R=n.y,v=n.z;return s[0]=(1-(S+d))*C,s[1]=(u+E)*C,s[2]=(_-A)*C,s[3]=0,s[4]=(u-E)*R,s[5]=(1-(f+d))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(_+A)*v,s[9]=(m-y)*v,s[10]=(1-(f+S))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=fr.set(s[0],s[1],s[2]).length();const a=fr.set(s[4],s[5],s[6]).length(),c=fr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yi.copy(this);const l=1/o,h=1/a,p=1/c;return yi.elements[0]*=l,yi.elements[1]*=l,yi.elements[2]*=l,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=p,yi.elements[9]*=p,yi.elements[10]*=p,e.setFromRotationMatrix(yi),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Ri,c=!1){const l=this.elements,h=2*r/(e-t),p=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let _,S;if(c)_=r/(o-r),S=o*r/(o-r);else if(a===Ri)_=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===yo)_=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=p,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ri,c=!1){const l=this.elements,h=2/(e-t),p=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s);let _,S;if(c)_=1/(o-r),S=o/(o-r);else if(a===Ri)_=-2/(o-r),S=-(o+r)/(o-r);else if(a===yo)_=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=p,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ha.prototype.isMatrix4=!0;let Be=Ha;const fr=new N,yi=new Be,gp=new N(0,0,0),_p=new N(1,1,1),vs=new N,Yo=new N,ri=new N,Kh=new Be,Jh=new Gi;class ki{constructor(t=0,e=0,n=0,s=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],p=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vp=0;const $h=new N,dr=new Gi,Ji=new Be,Zo=new N,jr=new N,xp=new N,Mp=new Gi,Qh=new N(1,0,0),jh=new N(0,1,0),tu=new N(0,0,1),eu={type:"added"},Sp={type:"removed"},pr={type:"childadded",child:null},Tl={type:"childremoved",child:null};class vn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const t=new N,e=new ki,n=new Gi,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new de}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(jh,t)}rotateZ(t){return this.rotateOnAxis(tu,t)}translateOnAxis(t,e){return $h.copy(t).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(jh,t)}translateZ(t){return this.translateOnAxis(tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zo.copy(t):Zo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(jr,Zo,this.up):Ji.lookAt(Zo,jr,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(Ji),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eu),pr.child=t,this.dispatchEvent(pr),pr.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),Tl.child=t,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eu),pr.child=t,this.dispatchEvent(pr),pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,xp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,Mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),p=o(t.shapes),f=o(t.skeletons),u=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}vn.DEFAULT_UP=new N(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Se extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yp={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),d=this._getHandJoint(l,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=h.position.distanceTo(p.position),u=.02,_=.005;l.inputState.pinching&&f>u+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=u-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Al(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ae{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Le.workingColorSpace){if(t=rp(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Al(o,r,t+1/3),this.g=Al(o,r,t),this.b=Al(o,r,t-1/3)}return Le.colorSpaceToWorking(this,s),this}setStyle(t,e=ei){function n(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ei){const n=Ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return Le.workingToColorSpace(Gn.copy(this),t),Math.round(be(Gn.r*255,0,255))*65536+Math.round(be(Gn.g*255,0,255))*256+Math.round(be(Gn.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.workingToColorSpace(Gn.copy(this),e);const n=Gn.r,s=Gn.g,r=Gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const p=o-a;switch(l=h<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.workingToColorSpace(Gn.copy(this),e),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=ei){Le.workingToColorSpace(Gn.copy(this),t);const e=Gn.r,n=Gn.g,s=Gn.b;return t!==ei?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xs),this.setHSL(xs.h+t,xs.s+e,xs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xs),t.getHSL(Ko);const n=Ml(xs.h,Ko.h,e),s=Ml(xs.s,Ko.s,e),r=Ml(xs.l,Ko.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new ae;ae.NAMES=Ef;class bf extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ei=new N,$i=new N,Rl=new N,Qi=new N,mr=new N,gr=new N,nu=new N,Cl=new N,Pl=new N,Ll=new N,Dl=new pn,Il=new pn,Nl=new pn;class wi{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ei.subVectors(t,e),s.cross(Ei);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ei.subVectors(s,e),$i.subVectors(n,e),Rl.subVectors(t,e);const o=Ei.dot(Ei),a=Ei.dot($i),c=Ei.dot(Rl),l=$i.dot($i),h=$i.dot(Rl),p=o*l-a*a;if(p===0)return r.set(0,0,0),null;const f=1/p,u=(l*c-a*h)*f,_=(o*h-a*c)*f;return r.set(1-u-_,_,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qi.x),c.addScaledVector(o,Qi.y),c.addScaledVector(a,Qi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Dl.setScalar(0),Il.setScalar(0),Nl.setScalar(0),Dl.fromBufferAttribute(t,e),Il.fromBufferAttribute(t,n),Nl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Dl,r.x),o.addScaledVector(Il,r.y),o.addScaledVector(Nl,r.z),o}static isFrontFacing(t,e,n,s){return Ei.subVectors(n,e),$i.subVectors(t,e),Ei.cross($i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Ei.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return wi.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;mr.subVectors(s,n),gr.subVectors(r,n),Cl.subVectors(t,n);const c=mr.dot(Cl),l=gr.dot(Cl);if(c<=0&&l<=0)return e.copy(n);Pl.subVectors(t,s);const h=mr.dot(Pl),p=gr.dot(Pl);if(h>=0&&p<=h)return e.copy(s);const f=c*p-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),e.copy(n).addScaledVector(mr,o);Ll.subVectors(t,r);const u=mr.dot(Ll),_=gr.dot(Ll);if(_>=0&&u<=_)return e.copy(r);const S=u*l-c*_;if(S<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(gr,a);const m=h*_-u*p;if(m<=0&&p-h>=0&&u-_>=0)return nu.subVectors(r,s),a=(p-h)/(p-h+(u-_)),e.copy(s).addScaledVector(nu,a);const d=1/(m+S+f);return o=S*d,a=f*d,e.copy(n).addScaledVector(mr,o).addScaledVector(gr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ks{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bi):bi.fromBufferAttribute(r,o),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(t.matrixWorld),this.union(Jo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(to),$o.subVectors(this.max,to),_r.subVectors(t.a,to),vr.subVectors(t.b,to),xr.subVectors(t.c,to),Ms.subVectors(vr,_r),Ss.subVectors(xr,vr),Fs.subVectors(_r,xr);let e=[0,-Ms.z,Ms.y,0,-Ss.z,Ss.y,0,-Fs.z,Fs.y,Ms.z,0,-Ms.x,Ss.z,0,-Ss.x,Fs.z,0,-Fs.x,-Ms.y,Ms.x,0,-Ss.y,Ss.x,0,-Fs.y,Fs.x,0];return!Ul(e,_r,vr,xr,$o)||(e=[1,0,0,0,1,0,0,0,1],!Ul(e,_r,vr,xr,$o))?!1:(Qo.crossVectors(Ms,Ss),e=[Qo.x,Qo.y,Qo.z],Ul(e,_r,vr,xr,$o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ji=[new N,new N,new N,new N,new N,new N,new N,new N],bi=new N,Jo=new Ks,_r=new N,vr=new N,xr=new N,Ms=new N,Ss=new N,Fs=new N,to=new N,$o=new N,Qo=new N,Os=new N;function Ul(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Os.fromArray(i,r);const a=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),c=t.dot(Os),l=e.dot(Os),h=n.dot(Os);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Mn=new N,jo=new mt;let Ep=0;class Bi extends As{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ep++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tp,this.updateRanges=[],this.gpuType=Ai,this.version=0,this._normalizationScale=t!==void 0?jc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)jo.fromBufferAttribute(this,e),jo.applyMatrix3(t),this.setXY(e,jo.x,jo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix3(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ap(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):lp(t,this.array)}}class Tf extends Bi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wf extends Bi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class rn extends Bi{constructor(t,e,n){super(new Float32Array(t),e,n)}}const bp=new Ks,eo=new N,Fl=new N;class Js{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;eo.subVectors(t,this.center);const e=eo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(eo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(eo.copy(t.center).add(Fl)),this.expandByPoint(eo.copy(t.center).sub(Fl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Tp=0;const pi=new Be,Ol=new vn,Mr=new N,oi=new Ks,no=new Ks,Cn=new N;class Tn extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ep(t)?wf:Tf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,e,n){return pi.makeTranslation(t,e,n),this.applyMatrix4(pi),this}scale(t,e,n){return pi.makeScale(t,e,n),this.applyMatrix4(pi),this}lookAt(t){return Ol.lookAt(t),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rn(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];no.setFromBufferAttribute(a),this.morphTargetsRelative?(Cn.addVectors(oi.min,no.min),oi.expandByPoint(Cn),Cn.addVectors(oi.max,no.max),oi.expandByPoint(Cn)):(oi.expandByPoint(no.min),oi.expandByPoint(no.max))}oi.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Cn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Cn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Cn.fromBufferAttribute(a,l),c&&(Mr.fromBufferAttribute(t,l),Cn.add(Mr)),s=Math.max(s,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Bi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[],l=new Uint8Array(n.count);for(let H=0;H<n.count;H++)a[H]=new N,c[H]=new N;const h=new N,p=new N,f=new N,u=new mt,_=new mt,S=new mt,m=new N,d=new N;function y(H,I,O){l[H]=l[I]=l[O]=1,h.fromBufferAttribute(n,H),p.fromBufferAttribute(n,I),f.fromBufferAttribute(n,O),u.fromBufferAttribute(r,H),_.fromBufferAttribute(r,I),S.fromBufferAttribute(r,O),p.sub(h),f.sub(h),_.sub(u),S.sub(u);const V=1/(_.x*S.y-S.x*_.y);isFinite(V)&&(m.copy(p).multiplyScalar(S.y).addScaledVector(f,-_.y).multiplyScalar(V),d.copy(f).multiplyScalar(_.x).addScaledVector(p,-S.x).multiplyScalar(V),a[H].add(m),a[I].add(m),a[O].add(m),c[H].add(d),c[I].add(d),c[O].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let H=0,I=A.length;H<I;++H){const O=A[H],V=O.start,K=O.count;for(let D=V,Y=V+K;D<Y;D+=3)y(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const E=new N,C=new N,R=new N,v=new N;function b(H){R.fromBufferAttribute(s,H),v.copy(R);const I=a[H];E.copy(I),E.sub(R.multiplyScalar(R.dot(I))).normalize(),C.crossVectors(v,I);const V=C.dot(c[H])<0?-1:1;o.setXYZW(H,E.x,E.y,E.z,V)}for(let H=0,I=n.count;H<I;++H)l[H]&&b(H);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Bi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,p=new N;if(t)for(let f=0,u=t.count;f<u;f+=3){const _=t.getX(f+0),S=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Cn.fromBufferAttribute(t,e),Cn.normalize(),t.setXYZ(e,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,p=a.normalized,f=new l.constructor(c.length*h);let u=0,_=0;for(let S=0,m=c.length;S<m;S++){a.isInterleavedBufferAttribute?u=c[S]*a.data.stride+a.offset:u=c[S]*h;for(let d=0;d<h;d++)f[_++]=l[u++]}return new Bi(f,h,p)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Tn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,p=l.length;h<p;h++){const f=l[h],u=t(f,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let p=0,f=l.length;p<f;p++){const u=l[p];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],p=r[l];for(let f=0,u=p.length;f<u;f++)h.push(p[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new N,wp=new N,Ap=new de;class ss{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Bl.subVectors(n,e).cross(wp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Bl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ap.getNormalMatrix(t),s=this.coplanarPoint(Bl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Rp=0;class cs extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=mo,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nf,this.blendDst=sf,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ss().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ts=new N,zl=new N,ta=new N,ea=new N;class Co{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ts)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ts.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ts.copy(this.origin).addScaledVector(this.direction,e),ts.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){zl.copy(t).add(e).multiplyScalar(.5),ta.copy(e).sub(t).normalize(),ea.copy(this.origin).sub(zl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ta),a=ea.dot(this.direction),c=-ea.dot(ta),l=ea.lengthSq(),h=Math.abs(1-o*o);let p,f,u,_;if(h>0)if(p=o*c-a,f=o*a-c,_=r*h,p>=0)if(f>=-_)if(f<=_){const S=1/h;p*=S,f*=S,u=p*(p+o*f+2*a)+f*(o*p+f+2*c)+l}else f=r,p=Math.max(0,-(o*f+a)),u=-p*p+f*(f+2*c)+l;else f=-r,p=Math.max(0,-(o*f+a)),u=-p*p+f*(f+2*c)+l;else f<=-_?(p=Math.max(0,-(-o*r+a)),f=p>0?-r:Math.min(Math.max(-r,-c),r),u=-p*p+f*(f+2*c)+l):f<=_?(p=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(p=Math.max(0,-(o*r+a)),f=p>0?r:Math.min(Math.max(-r,-c),r),u=-p*p+f*(f+2*c)+l);else f=o>0?-r:r,p=Math.max(0,-(o*f+a)),u=-p*p+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(zl).addScaledVector(ta,f),u}intersectSphere(t,e){if(t.radius<0)return null;ts.subVectors(t.center,this.origin);const n=ts.dot(this.direction),s=ts.dot(ts)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-f.z)*p,c=(t.max.z-f.z)*p):(a=(t.max.z-f.z)*p,c=(t.min.z-f.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ts)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,p=t.x-o.x,f=t.y-o.y,u=t.z-o.z,_=e.x-o.x,S=e.y-o.y,m=e.z-o.z,d=n.x-o.x,y=n.y-o.y,A=n.z-o.z,E=Math.abs(c),C=Math.abs(l),R=Math.abs(h);let v,b,H,I,O,V,K,D,Y,Z,z,ut;if(E>=C&&E>=R?(H=c,V=p,Y=_,ut=d,c>=0?(v=l,b=h,I=f,O=u,K=S,D=m,Z=y,z=A):(v=h,b=l,I=u,O=f,K=m,D=S,Z=A,z=y)):C>=R?(H=l,V=f,Y=S,ut=y,l>=0?(v=h,b=c,I=u,O=p,K=m,D=_,Z=A,z=d):(v=c,b=h,I=p,O=u,K=_,D=m,Z=d,z=A)):(H=h,V=u,Y=m,ut=A,h>=0?(v=c,b=l,I=p,O=f,K=_,D=S,Z=d,z=y):(v=l,b=c,I=f,O=p,K=S,D=_,Z=y,z=d)),H===0)return null;const J=v/H,j=b/H,lt=1/H,Ht=I-J*V,Jt=O-j*V,it=K-J*Y,Et=D-j*Y,Bt=Z-J*ut,Yt=z-j*ut,Mt=Bt*Et-Yt*it,$t=Ht*Yt-Jt*Bt,ze=it*Jt-Et*Ht;if(s){if(Mt<0||$t<0||ze<0)return null}else if((Mt<0||$t<0||ze<0)&&(Mt>0||$t>0||ze>0))return null;const jt=Mt+$t+ze;if(jt===0)return null;const ye=lt*(Mt*V+$t*Y+ze*ut);return(jt>0?ye<0:ye>0)?null:this.at(ye/jt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Aa extends cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const iu=new Be,Bs=new Co,na=new Js,su=new N,ia=new N,sa=new N,ra=new N,Hl=new N,oa=new N,ru=new N,aa=new N;class ft extends vn{constructor(t=new Tn,e=new Aa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],p=r[c];h!==0&&(Hl.fromBufferAttribute(p,t),o?oa.addScaledVector(Hl,h):oa.addScaledVector(Hl.sub(e),h))}e.add(oa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),Bs.copy(t.ray).recast(t.near),!(na.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(na,su)===null||Bs.origin.distanceToSquared(su)>(t.far-t.near)**2))&&(iu.copy(r).invert(),Bs.copy(t.ray).applyMatrix4(iu),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bs)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,S=f.length;_<S;_++){const m=f[_],d=o[m.materialIndex],y=Math.max(m.start,u.start),A=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let E=y,C=A;E<C;E+=3){const R=a.getX(E),v=a.getX(E+1),b=a.getX(E+2);s=la(this,d,t,n,l,h,p,R,v,b),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,u.start),S=Math.min(a.count,u.start+u.count);for(let m=_,d=S;m<d;m+=3){const y=a.getX(m),A=a.getX(m+1),E=a.getX(m+2);s=la(this,o,t,n,l,h,p,y,A,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,S=f.length;_<S;_++){const m=f[_],d=o[m.materialIndex],y=Math.max(m.start,u.start),A=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let E=y,C=A;E<C;E+=3){const R=E,v=E+1,b=E+2;s=la(this,d,t,n,l,h,p,R,v,b),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,u.start),S=Math.min(c.count,u.start+u.count);for(let m=_,d=S;m<d;m+=3){const y=m,A=m+1,E=m+2;s=la(this,o,t,n,l,h,p,y,A,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Cp(i,t,e,n,s,r,o,a){let c;if(t.side===Jn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Xs,a),c===null)return null;aa.copy(a),aa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(aa);return l<e.near||l>e.far?null:{distance:l,point:aa.clone(),object:i}}function la(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ia),i.getVertexPosition(c,sa),i.getVertexPosition(l,ra);const h=Cp(i,t,e,n,ia,sa,ra,ru);if(h){const p=new N;wi.getBarycoord(ru,ia,sa,ra,p),s&&(h.uv=wi.getInterpolatedAttribute(s,a,c,l,p,new mt)),r&&(h.uv1=wi.getInterpolatedAttribute(r,a,c,l,p,new mt)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,c,l,p,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new N,materialIndex:0};wi.getNormal(ia,sa,ra,f.normal),h.face=f,h.barycoord=p}return h}class Af extends Vn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=On,h=On,p,f){super(null,o,a,c,l,h,s,r,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ou extends Bi{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Sr=new Be,au=new Be,ca=[],lu=new Ks,Pp=new Be,io=new ft,so=new Js;class Lp extends ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ou(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ks),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Sr),lu.copy(t.boundingBox).applyMatrix4(Sr),this.boundingBox.union(lu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Js),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Sr),so.copy(t.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(so)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(n),t.ray.intersectsSphere(so)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Sr),au.multiplyMatrices(n,Sr),io.matrixWorld=au,io.raycast(t,ca);for(let o=0,a=ca.length;o<a;o++){const c=ca[o];c.instanceId=r,c.object=this,e.push(c)}ca.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ou(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Af(new Float32Array(s*this.count),s,this.count,Kc,Ai));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const zs=new Js,Dp=new mt(.5,.5),ha=new N;class Eo{constructor(t=new ss,e=new ss,n=new ss,s=new ss,r=new ss,o=new ss){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],p=r[5],f=r[6],u=r[7],_=r[8],S=r[9],m=r[10],d=r[11],y=r[12],A=r[13],E=r[14],C=r[15];if(s[0].setComponents(l-o,u-h,d-_,C-y).normalize(),s[1].setComponents(l+o,u+h,d+_,C+y).normalize(),s[2].setComponents(l+a,u+p,d+S,C+A).normalize(),s[3].setComponents(l-a,u-p,d-S,C-A).normalize(),n)s[4].setComponents(c,f,m,E).normalize(),s[5].setComponents(l-c,u-f,d-m,C-E).normalize();else if(s[4].setComponents(l-c,u-f,d-m,C-E).normalize(),e===Ri)s[5].setComponents(l+c,u+f,d+m,C+E).normalize();else if(e===yo)s[5].setComponents(c,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(t){zs.center.set(0,0,0);const e=Dp.distanceTo(t.center);return zs.radius=.7071067811865476+e,zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ha.x=s.normal.x>0?t.max.x:t.min.x,ha.y=s.normal.y>0?t.max.y:t.min.y,ha.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const cu=new Be;class nh{constructor(){this.coordinateSystem=Ri,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];cu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Eo),n[s].setFromProjectionMatrix(cu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Eo),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new nh().copy(this)}}class Nc extends cs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Oa=new N,Ba=new N,hu=new Be,ro=new Co,ua=new Js,Gl=new N,uu=new N;class Rf extends vn{constructor(t=new Tn,e=new Nc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Oa.fromBufferAttribute(e,s-1),Ba.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Oa.distanceTo(Ba);t.setAttribute("lineDistance",new rn(n,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;hu.copy(s).invert(),ro.copy(t.ray).applyMatrix4(hu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let S=u,m=_-1;S<m;S+=l){const d=h.getX(S),y=h.getX(S+1),A=fa(this,t,ro,c,d,y,S);A&&e.push(A)}if(this.isLineLoop){const S=h.getX(_-1),m=h.getX(u),d=fa(this,t,ro,c,S,m,_-1);d&&e.push(d)}}else{const u=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let S=u,m=_-1;S<m;S+=l){const d=fa(this,t,ro,c,S,S+1,S);d&&e.push(d)}if(this.isLineLoop){const S=fa(this,t,ro,c,_-1,u,_-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fa(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Oa.fromBufferAttribute(a,s),Ba.fromBufferAttribute(a,r),e.distanceSqToSegment(Oa,Ba,Gl,uu)>n)return;Gl.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Gl);if(!(l<t.near||l>t.far))return{distance:l,point:uu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const fu=new N,du=new N;class Ip extends Rf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)fu.fromBufferAttribute(e,s),du.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fu.distanceTo(du);t.setAttribute("lineDistance",new rn(n,1))}else oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Np extends Rf{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Uc extends cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const pu=new Be,Fc=new Co,da=new Js,pa=new N;class mu extends vn{constructor(t=new Tn,e=new Uc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,t.ray.intersectsSphere(da)===!1)return;pu.copy(s).invert(),Fc.copy(t.ray).applyMatrix4(pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,p=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),u=Math.min(l.count,o.start+o.count);for(let _=f,S=u;_<S;_++){const m=l.getX(_);pa.fromBufferAttribute(p,m),gu(pa,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),u=Math.min(p.count,o.start+o.count);for(let _=f,S=u;_<S;_++)pa.fromBufferAttribute(p,_),gu(pa,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gu(i,t,e,n,s,r,o){const a=Fc.distanceSqToPoint(i);if(a<e){const c=new N;Fc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Cf extends Vn{constructor(t=[],e=Dr,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Up extends Vn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nr extends Vn{constructor(t,e,n=zi,s,r,o,a=On,c=On,l,h=ws,p=1){if(h!==ws&&h!==Ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:p};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new th(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Pf extends Nr{constructor(t,e=zi,n=Dr,s,r,o=On,a=On,c,l=ws){const h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Lf extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class We extends Tn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],p=[];let f=0,u=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(p,2));function _(S,m,d,y,A,E,C,R,v,b,H){const I=E/v,O=C/b,V=E/2,K=C/2,D=R/2,Y=v+1,Z=b+1;let z=0,ut=0;const J=new N;for(let j=0;j<Z;j++){const lt=j*O-K;for(let Ht=0;Ht<Y;Ht++){const Jt=Ht*I-V;J[S]=Jt*y,J[m]=lt*A,J[d]=D,l.push(J.x,J.y,J.z),J[S]=0,J[m]=0,J[d]=R>0?1:-1,h.push(J.x,J.y,J.z),p.push(Ht/v),p.push(1-j/b),z+=1}}for(let j=0;j<b;j++)for(let lt=0;lt<v;lt++){const Ht=f+lt+Y*j,Jt=f+lt+Y*(j+1),it=f+(lt+1)+Y*(j+1),Et=f+(lt+1)+Y*j;c.push(Ht,Jt,Et),c.push(Jt,it,Et),ut+=6}a.addGroup(u,ut,H),u+=ut,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ih extends Tn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new N,h=new mt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,f=3;p<=e;p++,f+=3){const u=n+p/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new rn(o,3)),this.setAttribute("normal",new rn(a,3)),this.setAttribute("uv",new rn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ih(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qe extends Tn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],p=[],f=[],u=[];let _=0;const S=[],m=n/2;let d=0;y(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new rn(p,3)),this.setAttribute("normal",new rn(f,3)),this.setAttribute("uv",new rn(u,2));function y(){const E=new N,C=new N;let R=0;const v=(e-t)/n;for(let b=0;b<=r;b++){const H=[],I=b/r,O=I*(e-t)+t;for(let V=0;V<=s;V++){const K=V/s,D=K*c+a,Y=Math.sin(D),Z=Math.cos(D);C.x=O*Y,C.y=-I*n+m,C.z=O*Z,p.push(C.x,C.y,C.z),E.set(Y,v,Z).normalize(),f.push(E.x,E.y,E.z),u.push(K,1-I),H.push(_++)}S.push(H)}for(let b=0;b<s;b++)for(let H=0;H<r;H++){const I=S[H][b],O=S[H+1][b],V=S[H+1][b+1],K=S[H][b+1];(t>0||H!==0)&&(h.push(I,O,K),R+=3),(e>0||H!==r-1)&&(h.push(O,V,K),R+=3)}l.addGroup(d,R,0),d+=R}function A(E){const C=_,R=new mt,v=new N;let b=0;const H=E===!0?t:e,I=E===!0?1:-1;for(let V=1;V<=s;V++)p.push(0,m*I,0),f.push(0,I,0),u.push(.5,.5),_++;const O=_;for(let V=0;V<=s;V++){const D=V/s*c+a,Y=Math.cos(D),Z=Math.sin(D);v.x=H*Z,v.y=m*I,v.z=H*Y,p.push(v.x,v.y,v.z),f.push(0,I,0),R.x=Y*.5+.5,R.y=Z*.5*I+.5,u.push(R.x,R.y),_++}for(let V=0;V<s;V++){const K=C+V,D=O+V;E===!0?h.push(D,D+1,K):h.push(D+1,D,K),b+=3}l.addGroup(d,b,E===!0?1:2),d+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new mt:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new N,s=[],r=[],o=[],a=new N,c=new Be;for(let u=0;u<=t;u++){const _=u/t;s[u]=this.getTangentAt(_,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(be(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,_))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(be(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],u*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class sh extends Vi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new mt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=c-this.aX,u=l-this.aY;c=f*h-u*p+this.aX,l=f*p+u*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Fp extends sh{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function rh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,p){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,u=(a-o)/h-(c-o)/(h+p)+(c-a)/p;f*=h,u*=h,s(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const _u=new N,vu=new N,kl=new rh,Vl=new rh,Wl=new rh;class Op extends Vi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(vu.subVectors(s[0],s[1]).add(s[0]),l=vu);const p=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(_u.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_u),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(p),u),S=Math.pow(p.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),kl.initNonuniformCatmullRom(l.x,p.x,f.x,h.x,_,S,m),Vl.initNonuniformCatmullRom(l.y,p.y,f.y,h.y,_,S,m),Wl.initNonuniformCatmullRom(l.z,p.z,f.z,h.z,_,S,m)}else this.curveType==="catmullrom"&&(kl.initCatmullRom(l.x,p.x,f.x,h.x,this.tension),Vl.initCatmullRom(l.y,p.y,f.y,h.y,this.tension),Wl.initCatmullRom(l.z,p.z,f.z,h.z,this.tension));return n.set(kl.calc(c),Vl.calc(c),Wl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Bp(i,t){const e=1-i;return e*e*t}function zp(i,t){return 2*(1-i)*i*t}function Hp(i,t){return i*i*t}function go(i,t,e,n){return Bp(i,t)+zp(i,e)+Hp(i,n)}function Gp(i,t){const e=1-i;return e*e*e*t}function kp(i,t){const e=1-i;return 3*e*e*i*t}function Vp(i,t){return 3*(1-i)*i*i*t}function Wp(i,t){return i*i*i*t}function _o(i,t,e,n,s){return Gp(i,t)+kp(i,e)+Vp(i,n)+Wp(i,s)}class Df extends Vi{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_o(t,s.x,r.x,o.x,a.x),_o(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xp extends Vi{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_o(t,s.x,r.x,o.x,a.x),_o(t,s.y,r.y,o.y,a.y),_o(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class If extends Vi{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qp extends Vi{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nf extends Vi{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(go(t,s.x,r.x,o.x),go(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yp extends Vi{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(go(t,s.x,r.x,o.x),go(t,s.y,r.y,o.y),go(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uf extends Vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(xu(a,c.x,l.x,h.x,p.x),xu(a,c.y,l.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new mt().fromArray(s))}return this}}var Oc=Object.freeze({__proto__:null,ArcCurve:Fp,CatmullRomCurve3:Op,CubicBezierCurve:Df,CubicBezierCurve3:Xp,EllipseCurve:sh,LineCurve:If,LineCurve3:qp,QuadraticBezierCurve:Nf,QuadraticBezierCurve3:Yp,SplineCurve:Uf});class Zp extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Oc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class is extends Zp{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new If(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Nf(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Df(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Uf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new sh(t,e,n,s,r,o,a,c);if(this.curves.length>0){const p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class bn extends is{constructor(t){super(t),this.uuid=Or(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new is().fromJSON(s))}return this}}function Kp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ff(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=tm(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let h=a,p=c;for(let f=e;f<s;f+=e){const u=i[f],_=i[f+1];u<a&&(a=u),_<c&&(c=_),u>h&&(h=u),_>p&&(p=_)}l=Math.max(h-a,p-c),l=l!==0?32767/l:0}return bo(r,o,e,a,c,l,0),o}function Ff(i,t,e,n,s){let r;if(s===um(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Mu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Mu(o/n|0,i[o],i[o+1],r);return r&&Ur(r,r.next)&&(wo(r),r=r.next),r}function Ys(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ur(e,e.next)||mn(e.prev,e,e.next)===0)){if(wo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function bo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&rm(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?$p(i,n,s,r):Jp(i)){t.push(c.i,i.i,l.i),wo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Qp(Ys(i),t),bo(i,t,e,n,s,r,2)):o===2&&jp(i,t,e,n,s,r):bo(Ys(i),t,e,n,s,r,1);break}}}function Jp(i){const t=i.prev,e=i,n=i.next;if(mn(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),p=Math.min(a,c,l),f=Math.max(s,r,o),u=Math.max(a,c,l);let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=f&&_.y>=p&&_.y<=u&&uo(s,a,r,c,o,l,_.x,_.y)&&mn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function $p(i,t,e,n){const s=i.prev,r=i,o=i.next;if(mn(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,p=r.y,f=o.y,u=Math.min(a,c,l),_=Math.min(h,p,f),S=Math.max(a,c,l),m=Math.max(h,p,f),d=Bc(u,_,t,e,n),y=Bc(S,m,t,e,n);let A=i.prevZ,E=i.nextZ;for(;A&&A.z>=d&&E&&E.z<=y;){if(A.x>=u&&A.x<=S&&A.y>=_&&A.y<=m&&A!==s&&A!==o&&uo(a,h,c,p,l,f,A.x,A.y)&&mn(A.prev,A,A.next)>=0||(A=A.prevZ,E.x>=u&&E.x<=S&&E.y>=_&&E.y<=m&&E!==s&&E!==o&&uo(a,h,c,p,l,f,E.x,E.y)&&mn(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;A&&A.z>=d;){if(A.x>=u&&A.x<=S&&A.y>=_&&A.y<=m&&A!==s&&A!==o&&uo(a,h,c,p,l,f,A.x,A.y)&&mn(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;E&&E.z<=y;){if(E.x>=u&&E.x<=S&&E.y>=_&&E.y<=m&&E!==s&&E!==o&&uo(a,h,c,p,l,f,E.x,E.y)&&mn(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Qp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Ur(n,s)&&Bf(n,e,e.next,s)&&To(n,s)&&To(s,n)&&(t.push(n.i,e.i,s.i),wo(e),wo(e.next),e=i=s),e=e.next}while(e!==i);return Ys(e)}function jp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lm(o,a)){let c=zf(o,a);o=Ys(o,o.next),c=Ys(c,c.next),bo(o,t,e,n,s,r,0),bo(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function tm(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Ff(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(am(l))}s.sort(em);for(let r=0;r<s.length;r++)e=nm(s[r],e);return e}function em(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function nm(i,t){const e=im(i,t);if(!e)return t;const n=zf(e,i);return Ys(n,n.next),Ys(e,e.next)}function im(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Ur(i,e))return e;do{if(Ur(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Of(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const p=Math.abs(s-e.y)/(n-e.x);To(e,i)&&(p<h||p===h&&(e.x>o.x||e.x===o.x&&sm(o,e)))&&(o=e,h=p)}e=e.next}while(e!==a);return o}function sm(i,t){return mn(i.prev,i,t.prev)<0&&mn(t.next,i,i.next)<0}function rm(i,t,e,n){let s=i;do s.z===0&&(s.z=Bc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,om(s)}function om(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Bc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function am(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Of(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function uo(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Of(i,t,e,n,s,r,o,a)}function lm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!cm(i,t)&&(To(i,t)&&To(t,i)&&hm(i,t)&&(mn(i.prev,i,t.prev)||mn(i,t.prev,t))||Ur(i,t)&&mn(i.prev,i,i.next)>0&&mn(t.prev,t,t.next)>0)}function mn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ur(i,t){return i.x===t.x&&i.y===t.y}function Bf(i,t,e,n){const s=ga(mn(i,t,e)),r=ga(mn(i,t,n)),o=ga(mn(e,n,i)),a=ga(mn(e,n,t));return!!(s!==r&&o!==a||s===0&&ma(i,e,t)||r===0&&ma(i,n,t)||o===0&&ma(e,i,n)||a===0&&ma(e,t,n))}function ma(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ga(i){return i>0?1:i<0?-1:0}function cm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Bf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function To(i,t){return mn(i.prev,i,i.next)<0?mn(i,t,i.next)>=0&&mn(i,i.prev,t)>=0:mn(i,t,i.prev)<0||mn(i,i.next,t)<0}function hm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zf(i,t){const e=zc(i.i,i.x,i.y),n=zc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mu(i,t,e,n){const s=zc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function um(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class fm{static triangulate(t,e,n=2){return Kp(t,e,n)}}class os{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return os.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Su(t),yu(n,t);let o=t.length;e.forEach(Su);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,yu(n,e[c]);const a=fm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Su(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Vs extends Tn{constructor(t=new bn([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new rn(s,3)),this.setAttribute("uv",new rn(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:u-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:dm;let A,E=!1,C,R,v,b;if(d){A=d.getSpacedPoints(h),E=!0,f=!1;const at=d.isCatmullRomCurve3?d.closed:!1;C=d.computeFrenetFrames(h,at),R=new N,v=new N,b=new N}f||(m=0,u=0,_=0,S=0);const H=a.extractPoints(l);let I=H.shape;const O=H.holes;if(!os.isClockWise(I)){I=I.reverse();for(let at=0,bt=O.length;at<bt;at++){const St=O[at];os.isClockWise(St)&&(O[at]=St.reverse())}}function K(at){const St=10000000000000001e-36;let Ft=at[0];for(let Ct=1;Ct<=at.length;Ct++){const le=Ct%at.length,Gt=at[le],me=Gt.x-Ft.x,te=Gt.y-Ft.y,se=me*me+te*te,U=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(Ft.x),Math.abs(Ft.y)),fn=St*U*U;if(se<=fn){at.splice(le,1),Ct--;continue}Ft=Gt}}K(I),O.forEach(K);const D=O.length,Y=I;for(let at=0;at<D;at++){const bt=O[at];I=I.concat(bt)}function Z(at,bt,St){return bt||Ie("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(bt,St)}const z=I.length;function ut(at,bt,St){let Ft,Ct,le;const Gt=at.x-bt.x,me=at.y-bt.y,te=St.x-at.x,se=St.y-at.y,U=Gt*Gt+me*me,fn=Gt*se-me*te;if(Math.abs(fn)>Number.EPSILON){const ue=Math.sqrt(U),He=Math.sqrt(te*te+se*se),Tt=bt.x-me/ue,cn=bt.y+Gt/ue,Qt=St.x-se/He,ie=St.y+te/He,T=((Qt-Tt)*se-(ie-cn)*te)/(Gt*se-me*te);Ft=Tt+Gt*T-at.x,Ct=cn+me*T-at.y;const x=Ft*Ft+Ct*Ct;if(x<=2)return new mt(Ft,Ct);le=Math.sqrt(x/2)}else{let ue=!1;Gt>Number.EPSILON?te>Number.EPSILON&&(ue=!0):Gt<-Number.EPSILON?te<-Number.EPSILON&&(ue=!0):Math.sign(me)===Math.sign(se)&&(ue=!0),ue?(Ft=-me,Ct=Gt,le=Math.sqrt(U)):(Ft=Gt,Ct=me,le=Math.sqrt(U/2))}return new mt(Ft/le,Ct/le)}const J=[];for(let at=0,bt=Y.length,St=bt-1,Ft=at+1;at<bt;at++,St++,Ft++)St===bt&&(St=0),Ft===bt&&(Ft=0),J[at]=ut(Y[at],Y[St],Y[Ft]);const j=[];let lt,Ht=J.concat();for(let at=0,bt=D;at<bt;at++){const St=O[at];lt=[];for(let Ft=0,Ct=St.length,le=Ct-1,Gt=Ft+1;Ft<Ct;Ft++,le++,Gt++)le===Ct&&(le=0),Gt===Ct&&(Gt=0),lt[Ft]=ut(St[Ft],St[le],St[Gt]);j.push(lt),Ht=Ht.concat(lt)}let Jt;if(m===0)Jt=os.triangulateShape(Y,O);else{const at=[],bt=[];for(let St=0;St<m;St++){const Ft=St/m,Ct=u*Math.cos(Ft*Math.PI/2),le=_*Math.sin(Ft*Math.PI/2)+S;for(let Gt=0,me=Y.length;Gt<me;Gt++){const te=Z(Y[Gt],J[Gt],le);$t(te.x,te.y,-Ct),Ft===0&&at.push(te)}for(let Gt=0,me=D;Gt<me;Gt++){const te=O[Gt];lt=j[Gt];const se=[];for(let U=0,fn=te.length;U<fn;U++){const ue=Z(te[U],lt[U],le);$t(ue.x,ue.y,-Ct),Ft===0&&se.push(ue)}Ft===0&&bt.push(se)}}Jt=os.triangulateShape(at,bt)}const it=Jt.length,Et=_+S;for(let at=0;at<z;at++){const bt=f?Z(I[at],Ht[at],Et):I[at];E?(v.copy(C.normals[0]).multiplyScalar(bt.x),R.copy(C.binormals[0]).multiplyScalar(bt.y),b.copy(A[0]).add(v).add(R),$t(b.x,b.y,b.z)):$t(bt.x,bt.y,0)}for(let at=1;at<=h;at++)for(let bt=0;bt<z;bt++){const St=f?Z(I[bt],Ht[bt],Et):I[bt];E?(v.copy(C.normals[at]).multiplyScalar(St.x),R.copy(C.binormals[at]).multiplyScalar(St.y),b.copy(A[at]).add(v).add(R),$t(b.x,b.y,b.z)):$t(St.x,St.y,p/h*at)}for(let at=m-1;at>=0;at--){const bt=at/m,St=u*Math.cos(bt*Math.PI/2),Ft=_*Math.sin(bt*Math.PI/2)+S;for(let Ct=0,le=Y.length;Ct<le;Ct++){const Gt=Z(Y[Ct],J[Ct],Ft);$t(Gt.x,Gt.y,p+St)}for(let Ct=0,le=O.length;Ct<le;Ct++){const Gt=O[Ct];lt=j[Ct];for(let me=0,te=Gt.length;me<te;me++){const se=Z(Gt[me],lt[me],Ft);E?$t(se.x,se.y+A[h-1].y,A[h-1].x+St):$t(se.x,se.y,p+St)}}}Bt(),Yt();function Bt(){const at=s.length/3;if(f){let bt=0,St=z*bt;for(let Ft=0;Ft<it;Ft++){const Ct=Jt[Ft];ze(Ct[2]+St,Ct[1]+St,Ct[0]+St)}bt=h+m*2,St=z*bt;for(let Ft=0;Ft<it;Ft++){const Ct=Jt[Ft];ze(Ct[0]+St,Ct[1]+St,Ct[2]+St)}}else{for(let bt=0;bt<it;bt++){const St=Jt[bt];ze(St[2],St[1],St[0])}for(let bt=0;bt<it;bt++){const St=Jt[bt];ze(St[0]+z*h,St[1]+z*h,St[2]+z*h)}}n.addGroup(at,s.length/3-at,0)}function Yt(){const at=s.length/3;let bt=0;Mt(Y,bt),bt+=Y.length;for(let St=0,Ft=O.length;St<Ft;St++){const Ct=O[St];Mt(Ct,bt),bt+=Ct.length}n.addGroup(at,s.length/3-at,1)}function Mt(at,bt){let St=at.length;for(;--St>=0;){const Ft=St;let Ct=St-1;Ct<0&&(Ct=at.length-1);for(let le=0,Gt=h+m*2;le<Gt;le++){const me=z*le,te=z*(le+1),se=bt+Ft+me,U=bt+Ct+me,fn=bt+Ct+te,ue=bt+Ft+te;jt(se,U,fn,ue)}}}function $t(at,bt,St){c.push(at),c.push(bt),c.push(St)}function ze(at,bt,St){ye(at),ye(bt),ye(St);const Ft=s.length/3,Ct=y.generateTopUV(n,s,Ft-3,Ft-2,Ft-1);Te(Ct[0]),Te(Ct[1]),Te(Ct[2])}function jt(at,bt,St,Ft){ye(at),ye(bt),ye(Ft),ye(bt),ye(St),ye(Ft);const Ct=s.length/3,le=y.generateSideWallUV(n,s,Ct-6,Ct-3,Ct-2,Ct-1);Te(le[0]),Te(le[1]),Te(le[3]),Te(le[1]),Te(le[2]),Te(le[3])}function ye(at){s.push(c[at*3+0]),s.push(c[at*3+1]),s.push(c[at*3+2])}function Te(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return pm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Oc[s.type]().fromJSON(s)),new Vs(n,t.options)}}const dm={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new mt(r,o),new mt(a,c),new mt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],p=t[n*3+2],f=t[s*3],u=t[s*3+1],_=t[s*3+2],S=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new mt(o,1-c),new mt(l,1-p),new mt(f,1-_),new mt(S,1-d)]:[new mt(a,1-c),new mt(h,1-p),new mt(u,1-_),new mt(m,1-d)]}};function pm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Fn extends Tn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,p=t/a,f=e/c,u=[],_=[],S=[],m=[];for(let d=0;d<h;d++){const y=d*f-o;for(let A=0;A<l;A++){const E=A*p-r;_.push(E,-y,0),S.push(0,0,1),m.push(A/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){const A=y+l*d,E=y+l*(d+1),C=y+1+l*(d+1),R=y+1+l*d;u.push(A,E,R),u.push(E,C,R)}this.setIndex(u),this.setAttribute("position",new rn(_,3)),this.setAttribute("normal",new rn(S,3)),this.setAttribute("uv",new rn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ti extends Tn{constructor(t=new bn([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new rn(s,3)),this.setAttribute("normal",new rn(r,3)),this.setAttribute("uv",new rn(o,2));function l(h){const p=s.length/3,f=h.extractPoints(e);let u=f.shape;const _=f.holes;os.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,d=_.length;m<d;m++){const y=_[m];os.isClockWise(y)===!0&&(_[m]=y.reverse())}const S=os.triangulateShape(u,_);for(let m=0,d=_.length;m<d;m++){const y=_[m];u=u.concat(y)}for(let m=0,d=u.length;m<d;m++){const y=u[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,d=S.length;m<d;m++){const y=S[m],A=y[0]+p,E=y[1]+p,C=y[2]+p;n.push(A,E,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return mm(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Ti(n,t.curveSegments)}}function mm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class za extends Tn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],p=new N,f=new N,u=[],_=[],S=[],m=[];for(let d=0;d<=n;d++){const y=[],A=d/n,E=o+A*a,C=t*Math.cos(E),R=Math.sqrt(t*t-C*C);let v=0;d===0&&o===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const H=b/e,I=s+H*r;p.x=-R*Math.cos(I),p.y=C,p.z=R*Math.sin(I),_.push(p.x,p.y,p.z),f.copy(p).normalize(),S.push(f.x,f.y,f.z),m.push(H+v,1-A),y.push(l++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const A=h[d][y+1],E=h[d][y],C=h[d+1][y],R=h[d+1][y+1];(d!==0||o>0)&&u.push(A,E,R),(d!==n-1||c<Math.PI)&&u.push(E,C,R)}this.setIndex(u),this.setAttribute("position",new rn(_,3)),this.setAttribute("normal",new rn(S,3)),this.setAttribute("uv",new rn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gm extends cs{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ae(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function Fr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Eu(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Eu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Kn(i){const t={};for(let e=0;e<i.length;e++){const n=Fr(i[e]);for(const s in n)t[s]=n[s]}return t}function Eu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _m(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const vm={clone:Fr,merge:Kn};var xm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zs extends cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xm,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=_m(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ae().setHex(s.value);break;case"v2":this.uniforms[n].value=new mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new de().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Sm extends Zs{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ao extends cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ym extends Ao{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Pr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Pr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Em extends cs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Wc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bm extends cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tm extends cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ga extends vn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class wm extends Ga{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Xl=new Be,bu=new N,Tu=new N;class oh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(bu),Tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Xl,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===yo||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Xl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _a=new N,va=new Gi,Di=new N;class Gf extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_a,va,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,va,Di.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(_a,va,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,va,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ys=new N,wu=new mt,Au=new mt;class hi extends Gf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ys.x,ys.y).multiplyScalar(-t/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-t/ys.z)}getViewSize(t,e){return this.getViewBounds(t,wu,Au),e.subVectors(Au,wu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Am extends oh{constructor(){super(new hi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Fa*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Rm extends Ga{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Am}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Cm extends oh{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0}}class wr extends Ga{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class kf extends Gf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Pm extends oh{constructor(){super(new kf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ru extends Ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new Pm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const yr=-90,Er=1;class Hc extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hi(yr,Er,t,e);s.layers=this.layers,this.add(s);const r=new hi(yr,Er,t,e);r.layers=this.layers,this.add(r);const o=new hi(yr,Er,t,e);o.layers=this.layers,this.add(o);const a=new hi(yr,Er,t,e);a.layers=this.layers,this.add(a);const c=new hi(yr,Er,t,e);c.layers=this.layers,this.add(c);const l=new hi(yr,Er,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,f,u),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Lm extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Cu=new Be;class Dm{constructor(t,e,n=0,s=1/0){this.ray=new Co(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new eh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cu),this}intersectObject(t,e=!0,n=[]){return Gc(t,this,n,e),n.sort(Pu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Gc(t[s],this,n,e);return n.sort(Pu),n}}function Pu(i,t){return i.distance-t.distance}function Gc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Gc(r[o],t,e,!0)}}class Lu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Im extends As{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Du(i,t,e,n){const s=Nm(n);switch(e){case gf:return i*t;case Kc:return i*t/s.components*s.byteLength;case Jc:return i*t/s.components*s.byteLength;case qs:return i*t*2/s.components*s.byteLength;case $c:return i*t*2/s.components*s.byteLength;case _f:return i*t*3/s.components*s.byteLength;case Fi:return i*t*4/s.components*s.byteLength;case Qc:return i*t*4/s.components*s.byteLength;case ya:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ba:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rc:case ac:return Math.max(i,16)*Math.max(t,8)/4;case sc:case oc:return Math.max(i,8)*Math.max(t,8)/2;case lc:case cc:case uc:case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hc:case Pa:case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case xc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rc:case Cc:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lc:case Dc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case La:case Ic:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nm(i){switch(i){case ui:case ff:return{byteLength:1,components:1};case So:case df:case Hi:return{byteLength:2,components:1};case Yc:case Zc:return{byteLength:2,components:4};case zi:case qc:case Ai:return{byteLength:4,components:1};case pf:case mf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);function Vf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Um(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,p=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){const h=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,h);else{p.sort((u,_)=>u.start-_.start);let f=0;for(let u=1;u<p.length;u++){const _=p[f],S=p[u];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,p[f]=S)}p.length=f+1;for(let u=0,_=p.length;u<_;u++){const S=p[u];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Om=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,km=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Km=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,r0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,o0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u0="gl_FragColor = linearToOutputTexel( gl_FragColor );",f0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,v0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,A0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,X0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,n_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,o_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ee={alphahash_fragment:Fm,alphahash_pars_fragment:Om,alphamap_fragment:Bm,alphamap_pars_fragment:zm,alphatest_fragment:Hm,alphatest_pars_fragment:Gm,aomap_fragment:km,aomap_pars_fragment:Vm,batching_pars_vertex:Wm,batching_vertex:Xm,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:Zm,iridescence_fragment:Km,bumpmap_pars_fragment:Jm,clipping_planes_fragment:$m,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:jm,clipping_planes_vertex:t0,color_fragment:e0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:s0,common:r0,defaultnormal_vertex:o0,displacementmap_pars_vertex:a0,displacementmap_vertex:l0,emissivemap_fragment:c0,emissivemap_pars_fragment:h0,colorspace_fragment:u0,colorspace_pars_fragment:f0,envmap_fragment:d0,envmap_common_pars_fragment:p0,envmap_pars_fragment:m0,envmap_pars_vertex:g0,envmap_physical_pars_fragment:A0,envmap_vertex:_0,fog_vertex:v0,fog_pars_vertex:x0,fog_fragment:M0,fog_pars_fragment:S0,gradientmap_pars_fragment:y0,lightmap_pars_fragment:E0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:T0,lights_pars_begin:w0,lights_toon_fragment:R0,lights_toon_pars_fragment:C0,lights_phong_fragment:P0,lights_phong_pars_fragment:L0,lights_physical_fragment:D0,lights_physical_pars_fragment:I0,lights_fragment_begin:N0,lights_fragment_maps:U0,lights_fragment_end:F0,lightprobes_pars_fragment:O0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:G0,map_fragment:k0,map_pars_fragment:V0,map_particle_fragment:W0,map_particle_pars_fragment:X0,metalnessmap_fragment:q0,metalnessmap_pars_fragment:Y0,morphinstance_vertex:Z0,morphcolor_vertex:K0,morphnormal_vertex:J0,morphtarget_pars_vertex:$0,morphtarget_vertex:Q0,normal_fragment_begin:j0,normal_fragment_maps:tg,normal_pars_fragment:eg,normal_pars_vertex:ng,normal_vertex:ig,normalmap_pars_fragment:sg,clearcoat_normal_fragment_begin:rg,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:ag,iridescence_pars_fragment:lg,opaque_fragment:cg,packing:hg,premultiplied_alpha_fragment:ug,project_vertex:fg,dithering_fragment:dg,dithering_pars_fragment:pg,roughnessmap_fragment:mg,roughnessmap_pars_fragment:gg,shadowmap_pars_fragment:_g,shadowmap_pars_vertex:vg,shadowmap_vertex:xg,shadowmask_pars_fragment:Mg,skinbase_vertex:Sg,skinning_pars_vertex:yg,skinning_vertex:Eg,skinnormal_vertex:bg,specularmap_fragment:Tg,specularmap_pars_fragment:wg,tonemapping_fragment:Ag,tonemapping_pars_fragment:Rg,transmission_fragment:Cg,transmission_pars_fragment:Pg,uv_pars_fragment:Lg,uv_pars_vertex:Dg,uv_vertex:Ig,worldpos_vertex:Ng,background_vert:Ug,background_frag:Fg,backgroundCube_vert:Og,backgroundCube_frag:Bg,cube_vert:zg,cube_frag:Hg,depth_vert:Gg,depth_frag:kg,distance_vert:Vg,distance_frag:Wg,equirect_vert:Xg,equirect_frag:qg,linedashed_vert:Yg,linedashed_frag:Zg,meshbasic_vert:Kg,meshbasic_frag:Jg,meshlambert_vert:$g,meshlambert_frag:Qg,meshmatcap_vert:jg,meshmatcap_frag:t_,meshnormal_vert:e_,meshnormal_frag:n_,meshphong_vert:i_,meshphong_frag:s_,meshphysical_vert:r_,meshphysical_frag:o_,meshtoon_vert:a_,meshtoon_frag:l_,points_vert:c_,points_frag:h_,shadow_vert:u_,shadow_frag:f_,sprite_vert:d_,sprite_frag:p_},Nt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Ui={basic:{uniforms:Kn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Kn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Kn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Kn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Kn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ae(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Kn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Kn([Nt.points,Nt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Kn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Kn([Nt.common,Nt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Kn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Kn([Nt.sprite,Nt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distance:{uniforms:Kn([Nt.common,Nt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distance_vert,fragmentShader:Ee.distance_frag},shadow:{uniforms:Kn([Nt.lights,Nt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Ui.physical={uniforms:Kn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const xa={r:0,b:0,g:0},m_=new Be,Wf=new de;Wf.set(-1,0,0,0,1,0,0,0,1);function g_(i,t,e,n,s,r){const o=new ae(0);let a=s===!0?0:1,c,l,h=null,p=0,f=null;function u(y){let A=y.isScene===!0?y.background:null;if(A&&A.isTexture){const E=y.backgroundBlurriness>0;A=t.get(A,E)}return A}function _(y){let A=!1;const E=u(y);E===null?m(o,a):E&&E.isColor&&(m(E,1),A=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(y,A){const E=u(A);E&&E.isCubeTexture?(l===void 0&&(l=new ft(new We(1,1,1),new Zs({name:"BackgroundCubeMaterial",uniforms:Fr(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,R,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(m_.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Wf),l.material.toneMapped=Le.getTransfer(E.colorSpace)!==je,(h!==E||p!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,p=E.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ft(new Fn(2,2),new Zs({name:"BackgroundMaterial",uniforms:Fr(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Le.getTransfer(E.colorSpace)!==je,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||p!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,p=E.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,A){y.getRGB(xa,Hf(i)),e.buffers.color.setClear(xa.r,xa.g,xa.b,A,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,A=1){o.set(y),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:_,addToRenderList:S,dispose:d}}function __(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(O,V,K,D,Y){let Z=!1;const z=p(O,D,K,V);r!==z&&(r=z,l(r.object)),Z=u(O,D,K,Y),Z&&_(O,D,K,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,E(O,V,K,D),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function l(O){return i.bindVertexArray(O)}function h(O){return i.deleteVertexArray(O)}function p(O,V,K,D){const Y=D.wireframe===!0;let Z=n[V.id];Z===void 0&&(Z={},n[V.id]=Z);const z=O.isInstancedMesh===!0?O.id:0;let ut=Z[z];ut===void 0&&(ut={},Z[z]=ut);let J=ut[K.id];J===void 0&&(J={},ut[K.id]=J);let j=J[Y];return j===void 0&&(j=f(c()),J[Y]=j),j}function f(O){const V=[],K=[],D=[];for(let Y=0;Y<e;Y++)V[Y]=0,K[Y]=0,D[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:D,object:O,attributes:{},index:null}}function u(O,V,K,D){const Y=r.attributes,Z=V.attributes;let z=0;const ut=K.getAttributes();for(const J in ut)if(ut[J].location>=0){const lt=Y[J];let Ht=Z[J];if(Ht===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(Ht=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(Ht=O.instanceColor)),lt===void 0||lt.attribute!==Ht||Ht&&lt.data!==Ht.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function _(O,V,K,D){const Y={},Z=V.attributes;let z=0;const ut=K.getAttributes();for(const J in ut)if(ut[J].location>=0){let lt=Z[J];lt===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(lt=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(lt=O.instanceColor));const Ht={};Ht.attribute=lt,lt&&lt.data&&(Ht.data=lt.data),Y[J]=Ht,z++}r.attributes=Y,r.attributesNum=z,r.index=D}function S(){const O=r.newAttributes;for(let V=0,K=O.length;V<K;V++)O[V]=0}function m(O){d(O,0)}function d(O,V){const K=r.newAttributes,D=r.enabledAttributes,Y=r.attributeDivisors;K[O]=1,D[O]===0&&(i.enableVertexAttribArray(O),D[O]=1),Y[O]!==V&&(i.vertexAttribDivisor(O,V),Y[O]=V)}function y(){const O=r.newAttributes,V=r.enabledAttributes;for(let K=0,D=V.length;K<D;K++)V[K]!==O[K]&&(i.disableVertexAttribArray(K),V[K]=0)}function A(O,V,K,D,Y,Z,z){z===!0?i.vertexAttribIPointer(O,V,K,Y,Z):i.vertexAttribPointer(O,V,K,D,Y,Z)}function E(O,V,K,D){S();const Y=D.attributes,Z=K.getAttributes(),z=V.defaultAttributeValues;for(const ut in Z){const J=Z[ut];if(J.location>=0){let j=Y[ut];if(j===void 0&&(ut==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),ut==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),j!==void 0){const lt=j.normalized,Ht=j.itemSize,Jt=t.get(j);if(Jt===void 0)continue;const it=Jt.buffer,Et=Jt.type,Bt=Jt.bytesPerElement,Yt=Et===i.INT||Et===i.UNSIGNED_INT||j.gpuType===qc;if(j.isInterleavedBufferAttribute){const Mt=j.data,$t=Mt.isInterleavedBuffer===!0?Mt.stride:Mt.itemSize,ze=j.offset;if(Mt.isInstancedInterleavedBuffer||Mt.isInstancedBufferAttribute){for(let jt=0;jt<J.locationSize;jt++)d(J.location+jt,Mt.meshPerAttribute);O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let jt=0;jt<J.locationSize;jt++)m(J.location+jt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let jt=0;jt<J.locationSize;jt++)A(J.location+jt,Ht/J.locationSize,Et,lt,$t*Bt,(ze+Ht/J.locationSize*jt)*Bt,Yt)}else{if(j.isInstancedBufferAttribute){for(let Mt=0;Mt<J.locationSize;Mt++)d(J.location+Mt,j.meshPerAttribute);O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Mt=0;Mt<J.locationSize;Mt++)m(J.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Mt=0;Mt<J.locationSize;Mt++)A(J.location+Mt,Ht/J.locationSize,Et,lt,Ht*Bt,Ht/J.locationSize*Mt*Bt,Yt)}}else if(z!==void 0){const lt=z[ut];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(J.location,lt);break;case 3:i.vertexAttrib3fv(J.location,lt);break;case 4:i.vertexAttrib4fv(J.location,lt);break;default:i.vertexAttrib1fv(J.location,lt)}}}}y()}function C(){H();for(const O in n){const V=n[O];for(const K in V){const D=V[K];for(const Y in D){const Z=D[Y];for(const z in Z)h(Z[z].object),delete Z[z];delete D[Y]}}delete n[O]}}function R(O){if(n[O.id]===void 0)return;const V=n[O.id];for(const K in V){const D=V[K];for(const Y in D){const Z=D[Y];for(const z in Z)h(Z[z].object),delete Z[z];delete D[Y]}}delete n[O.id]}function v(O){for(const V in n){const K=n[V];for(const D in K){const Y=K[D];if(Y[O.id]===void 0)continue;const Z=Y[O.id];for(const z in Z)h(Z[z].object),delete Z[z];delete Y[O.id]}}}function b(O){for(const V in n){const K=n[V],D=O.isInstancedMesh===!0?O.id:0,Y=K[D];if(Y!==void 0){for(const Z in Y){const z=Y[Z];for(const ut in z)h(z[ut].object),delete z[ut];delete Y[Z]}delete K[D],Object.keys(K).length===0&&delete n[V]}}}function H(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:H,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:S,enableAttribute:m,disableUnusedAttributes:y}}function v_(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let u=0;u<h;u++)f+=l[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function x_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Fi&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){const b=v===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==ui&&v!==Ai&&!b&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(oe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:u,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:A,maxFragmentUniforms:E,maxSamples:C,samples:R}}function M_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ss,a=new de,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const u=p.length!==0||f||n!==0||s;return s=f,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){e=h(p,f,0)},this.setState=function(p,f,u){const _=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,A=y*4;let E=d.clippingState||null;c.value=E,E=h(_,f,A,u);for(let C=0;C!==A;++C)E[C]=e[C];d.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,f,u,_){const S=p!==null?p.length:0;let m=null;if(S!==0){if(m=c.value,_!==!0||m===null){const d=u+S*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,E=u;A!==S;++A,E+=4)o.copy(p[A]).applyMatrix4(y,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}class ah extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new We(5,5,5),r=new Zs({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:Cr});r.uniforms.tEquirect.value=e;const o=new ft(s,r),a=e.minFilter;return e.minFilter===bs&&(e.minFilter=ni),new Hc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Iu=256,S_=3,y_=20,Xf=256,qf=16,E_=3,b_=new N,T_=new ae;class Ro{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Hc(1,10,null),this._boxMesh=new ft(new We(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=b_}=r,c=this._renderer;this._setSize(o);const l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const p=c.autoClear,f=c.autoClearColor,u=c.autoClearDepth,_=c.autoClearStencil,S=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(t.background=c.getClearColor(T_));const m=new Hc(n,s,h);return m.position.copy(a),m.update(c,t),c.autoClear=p,c.autoClearColor=f,c.autoClearDepth=u,c.autoClearStencil=_,t.background=S,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Iu,op(t))}_fromTexture(t,e){t.mapping===Dr||t.mapping===Mo?this._setSize(t.image.length===0?Iu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Nu(t,!1,!1),n=Math.log2(t)-S_;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Nu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Dr||t.mapping===Mo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Uu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=w_(),this._integrationMaterial=A_());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/qf);for(let o=0;o<=n;o++){const a=Ro.lodToRoughness(o,n);if(o>n-E_)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const c=a>0?Math.log2(e)+.5*Math.log2(6/(Xf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=R_());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Nu(i,t,e){return new ah(i,{minFilter:bs,generateMipmaps:t,type:Hi,colorSpace:Ia,depthBuffer:e})}function Po(i,t,e){return new Zs({name:i,uniforms:t,vertexShader:Ee.cube_vert,fragmentShader:e,side:Jn,blending:Cr,depthTest:!1,depthWrite:!1})}function w_(){return Po("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Xf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function A_(){return Po("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function R_(){return Po("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${y_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Uu(){return Po("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Fu(){return Po("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function C_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===gl||u===_l)if(t.has(f)){const _=t.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const S=new ah(_.height);return S.fromEquirectangularTexture(i,f),t.set(f,S),f.addEventListener("dispose",l),a(S.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,_=u===gl||u===_l,S=u===Dr||u===Mo;if(_||S){let m=e.get(f);const d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Ro(i)),m=_?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const y=f.image;return _&&y&&y.height>0||S&&y&&c(y)?(n===null&&(n=new Ro(i)),m=_?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===gl?f.mapping=Dr:u===_l&&(f.mapping=Mo),f}function c(f){let u=0;const _=6;for(let S=0;S<_;S++)f[S]!==void 0&&u++;return u===_}function l(f){const u=f.target;u.removeEventListener("dispose",l);const _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function P_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Pr("WebGLRenderer: "+n+" extension not supported."),s}}}function L_(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){c(_.target)}function c(_){_.index!==null&&t.remove(_.index);for(const m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);const S=r.get(_);S&&(t.remove(S),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function l(_,S){return s[S.id]!==void 0||(S.addEventListener("dispose",a),s[S.id]=new WeakRef(S),o.register(S,S.id,S),e.memory.geometries++),S}function h(_){const S=_.attributes;for(const m in S)t.update(S[m],i.ARRAY_BUFFER)}function p(_){const S=_.index,m=_.attributes.position;let d=0;if(m===void 0)return;const y=S!==null?S.array.length:m.array.length/3-1,A=m.count>=65535?wf:Tf,E=new A(Math.ceil(y/3)*6,1),C=E.array;if(S!==null){const v=S.array;d=S.version;for(let b=0,H=0;b<y;b+=3){const I=v[b+0],O=v[b+1],V=v[b+2];C[H++]=I,C[H++]=O,C[H++]=O,C[H++]=V,C[H++]=V,C[H++]=I}}else{d=m.version;for(let v=0,b=0;v<y;v+=3){const H=v+0,I=v+1,O=v+2;C[b++]=H,C[b++]=I,C[b++]=I,C[b++]=O,C[b++]=O,C[b++]=H}}E.version=d;const R=r.get(_);R&&t.remove(R),r.set(_,E)}function f(_){const S=r.get(_);if(S){const m=_.index;m!==null&&S.version<m.version&&p(_)}else p(_);return r.get(_)}function u(){for(const _ in s){const S=s[_].deref();S!==void 0&&c(S)}}return{get:l,update:h,getWireframeAttribute:f,dispose:u}}function D_(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function l(p,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,p*o,u),e.update(f,n,u))}function h(p,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,u);let S=0;for(let m=0;m<u;m++)S+=f[m];e.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function I_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Ie("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function N_(i,t,e){const n=new WeakMap,s=new pn;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==p){let H=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",H)};f!==void 0&&f.texture.dispose();const u=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let A=0;u===!0&&(A=1),_===!0&&(A=2),S===!0&&(A=3);let E=a.attributes.position.count*A,C=1;E>t.maxTextureSize&&(C=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const R=new Float32Array(E*C*4*p),v=new yf(R,E,C,p);v.type=Ai,v.needsUpdate=!0;const b=A*4;for(let I=0;I<p;I++){const O=m[I],V=d[I],K=y[I],D=E*C*4*I;for(let Y=0;Y<O.count;Y++){const Z=Y*b;u===!0&&(s.fromBufferAttribute(O,Y),R[D+Z+0]=s.x,R[D+Z+1]=s.y,R[D+Z+2]=s.z,R[D+Z+3]=0),_===!0&&(s.fromBufferAttribute(V,Y),R[D+Z+4]=s.x,R[D+Z+5]=s.y,R[D+Z+6]=s.z,R[D+Z+7]=0),S===!0&&(s.fromBufferAttribute(K,Y),R[D+Z+8]=s.x,R[D+Z+9]=s.y,R[D+Z+10]=s.z,R[D+Z+11]=K.itemSize===4?s.w:1)}}f={count:p,texture:v,size:new mt(E,C)},n.set(a,f),a.addEventListener("dispose",H)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let S=0;S<l.length;S++)u+=l[S];const _=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function U_(i,t,e,n,s){let r=new WeakMap;function o(l){const h=s.render.frame,p=l.geometry,f=t.get(l,p);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const F_={[rf]:"LINEAR_TONE_MAPPING",[of]:"REINHARD_TONE_MAPPING",[af]:"CINEON_TONE_MAPPING",[Xc]:"ACES_FILMIC_TONE_MAPPING",[cf]:"AGX_TONE_MAPPING",[hf]:"NEUTRAL_TONE_MAPPING",[lf]:"CUSTOM_TONE_MAPPING"};function O_(i,t,e,n,s,r){const o=new Oi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null,l=null;const h=new Tn;h.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new rn([0,2,0,0,2,0],2));const p=new Sm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ft(h,p),u=new kf(-1,1,1,-1,0,1);let _=null,S=null,m=!1,d,y=null,A=[],E=!1;this.setSize=function(C,R){o.setSize(C,R),a!==null&&a.setSize(C,R),c!==null&&c.setSize(C,R);for(let v=0;v<A.length;v++){const b=A[v];b.setSize&&b.setSize(C,R)}},this.setEffects=function(C){A=C,E=A.length>0&&A[0].isRenderPass===!0;const R=o.width,v=o.height;A.length>0&&a===null&&(a=new Oi(R,v,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),c=new Oi(R,v,{type:Hi,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&A.some(H=>H.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&l===null&&(l=new Nr(R,v),r===!0&&(l.format=Ts,l.type=Ir)),o.dispose(),o.depthTexture=b?l:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let H=0;H<A.length;H++){const I=A[H];I.setSize&&I.setSize(R,v),b&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(C,R){if(m||C.toneMapping===as&&A.length===0)return!1;if(y=R,R!==null){const v=R.width,b=R.height;(o.width!==v||o.height!==b)&&this.setSize(v,b)}return E===!1&&C.setRenderTarget(o),d=C.toneMapping,C.toneMapping=as,!0},this.hasRenderPass=function(){return E},this.end=function(C,R){C.toneMapping=d,m=!0;let v=o,b=a;for(let H=0;H<A.length;H++){const I=A[H];I.enabled!==!1&&(I.render(C,b,v,R),I.needsSwap!==!1&&(v=b,b=b===a?c:a))}if(_!==C.outputColorSpace||S!==C.toneMapping){_=C.outputColorSpace,S=C.toneMapping,p.defines={},Le.getTransfer(_)===je&&(p.defines.SRGB_TRANSFER="");const H=F_[S];H&&(p.defines[H]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,C.setRenderTarget(y),C.render(f,u),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}const Yf=new Vn,Zf=new Nr(1,1),Kf=new Pf(1),Jf=new yf,$f=new mp,Qf=new Cf,Ou=[],Bu=[],zu=new Float32Array(16),Hu=new Float32Array(9),Gu=new Float32Array(4);function Br(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ou[s];if(r===void 0&&(r=new Float32Array(s),Ou[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function wn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function An(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ka(i,t){let e=Bu[t];e===void 0&&(e=new Int32Array(t),Bu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function B_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2fv(this.addr,t),An(e,t)}}function H_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(wn(e,t))return;i.uniform3fv(this.addr,t),An(e,t)}}function G_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4fv(this.addr,t),An(e,t)}}function k_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;Gu.set(n),i.uniformMatrix2fv(this.addr,!1,Gu),An(e,n)}}function V_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;Hu.set(n),i.uniformMatrix3fv(this.addr,!1,Hu),An(e,n)}}function W_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;zu.set(n),i.uniformMatrix4fv(this.addr,!1,zu),An(e,n)}}function X_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2iv(this.addr,t),An(e,t)}}function Y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(wn(e,t))return;i.uniform3iv(this.addr,t),An(e,t)}}function Z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4iv(this.addr,t),An(e,t)}}function K_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function J_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2uiv(this.addr,t),An(e,t)}}function $_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(wn(e,t))return;i.uniform3uiv(this.addr,t),An(e,t)}}function Q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4uiv(this.addr,t),An(e,t)}}function Va(i){return i.version===0&&(i.compareFunction=Mf,i.needsUpdate=!0),i}function j_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Va(Zf):r=Yf,e.setTexture2D(t||r,s)}function tv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$f,s)}function ev(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Va(Kf):r=Qf,e.setTextureCube(t||r,s)}function nv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jf,s)}function iv(i){switch(i){case 5126:return B_;case 35664:return z_;case 35665:return H_;case 35666:return G_;case 35674:return k_;case 35675:return V_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return q_;case 35668:case 35672:return Y_;case 35669:case 35673:return Z_;case 5125:return K_;case 36294:return J_;case 36295:return $_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return nv}}function sv(i,t){i.uniform1fv(this.addr,t)}function rv(i,t){const e=Br(t,this.size,2);i.uniform2fv(this.addr,e)}function ov(i,t){const e=Br(t,this.size,3);i.uniform3fv(this.addr,e)}function av(i,t){const e=Br(t,this.size,4);i.uniform4fv(this.addr,e)}function lv(i,t){const e=Br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cv(i,t){const e=Br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hv(i,t){const e=Br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function uv(i,t){i.uniform1iv(this.addr,t)}function fv(i,t){i.uniform2iv(this.addr,t)}function dv(i,t){i.uniform3iv(this.addr,t)}function pv(i,t){i.uniform4iv(this.addr,t)}function mv(i,t){i.uniform1uiv(this.addr,t)}function gv(i,t){i.uniform2uiv(this.addr,t)}function _v(i,t){i.uniform3uiv(this.addr,t)}function vv(i,t){i.uniform4uiv(this.addr,t)}function xv(i,t,e){const n=this.cache,s=t.length,r=ka(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Va(Zf):o=Yf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Mv(i,t,e){const n=this.cache,s=t.length,r=ka(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$f,r[o])}function Sv(i,t,e){const n=this.cache,s=t.length,r=ka(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Va(Kf):o=Qf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function yv(i,t,e){const n=this.cache,s=t.length,r=ka(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Jf,r[o])}function Ev(i){switch(i){case 5126:return sv;case 35664:return rv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return hv;case 5124:case 35670:return uv;case 35667:case 35671:return fv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return yv}}class bv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=iv(e.type)}}class Tv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ev(e.type)}}class wv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function ku(i,t){i.seq.push(t),i.map[t.id]=t}function Av(i,t,e){const n=i.name,s=n.length;for(ql.lastIndex=0;;){const r=ql.exec(n),o=ql.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ku(e,l===void 0?new bv(a,i,t):new Tv(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new wv(a),ku(e,p)),e=p}}}class Ra{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Av(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Vu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Rv=37297;let Cv=0;function Pv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Wu=new de;function Lv(i){Le._getMatrix(Wu,Le.workingColorSpace,i);const t=`mat3( ${Wu.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(i)){case Na:return[t,"LinearTransferOETF"];case je:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Pv(i.getShaderSource(t),a)}else return r}function Dv(i,t){const e=Lv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Iv={[rf]:"Linear",[of]:"Reinhard",[af]:"Cineon",[Xc]:"ACESFilmic",[cf]:"AgX",[hf]:"Neutral",[lf]:"Custom"};function Nv(i,t){const e=Iv[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ma=new N;function Uv(){Le.getLuminanceCoefficients(Ma);const i=Ma.x.toFixed(4),t=Ma.y.toFixed(4),e=Ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function Ov(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function fo(i){return i!==""}function qu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Yu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(i){return i.replace(zv,Hv)}function Hv(i,t){const e=Ee[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return kc(e)}const Gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(i){return i.replace(Gv,kv)}function kv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ku(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Vv={[po]:"SHADOWMAP_TYPE_PCF",[ho]:"SHADOWMAP_TYPE_VSM"};function Wv(i){return Vv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xv={[Mo]:"ENVMAP_MODE_REFRACTION"};function qv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Yv={[Wc]:"ENVMAP_BLENDING_MULTIPLY",[Vd]:"ENVMAP_BLENDING_MIX",[Wd]:"ENVMAP_BLENDING_ADD"};function Zv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Yv[i.combine]||"ENVMAP_BLENDING_NONE"}function Kv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Wv(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=qv(e),p=Zv(e),f=Fv(e),u=Ov(r),_=s.createProgram();let S,m,d=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(fo).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(fo).join(`
`),m.length>0&&(m+=`
`)):(S=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),m=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==as?"#define TONE_MAPPING":"",e.toneMapping!==as?Ee.tonemapping_pars_fragment:"",e.toneMapping!==as?Nv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,Dv("linearToOutputTexel",e.outputColorSpace),Uv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fo).join(`
`)),o=kc(o),o=qu(o,e),o=Yu(o,e),a=kc(a),a=qu(a,e),a=Yu(a,e),o=Zu(o),a=Zu(a),e.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",e.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=d+S+o,A=d+m+a,E=Vu(s,s.VERTEX_SHADER,y),C=Vu(s,s.FRAGMENT_SHADER,A);s.attachShader(_,E),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(I){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(E)||"",K=s.getShaderInfoLog(C)||"",D=O.trim(),Y=V.trim(),Z=K.trim();let z=!0,ut=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,C);else{const J=Xu(s,E,"vertex"),j=Xu(s,C,"fragment");Ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+J+`
`+j)}else D!==""?oe("WebGLProgram: Program Info Log:",D):(Y===""||Z==="")&&(ut=!1);ut&&(I.diagnostics={runnable:z,programLog:D,vertexShader:{log:Y,prefix:S},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(E),s.deleteShader(C),v=new Ra(s,_),b=Bv(s,_)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(_,Rv)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=C,this}let Jv=0;class $v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Qv(t),e.set(t,n)),n}}class Qv{constructor(t){this.id=Jv++,this.code=t,this.usedTimes=0}}function jv(i){return i===qs||i===Pa||i===La}function tx(i,t,e,n,s,r){const o=new eh,a=new $v,c=new Set,l=[],h=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,b,H,I,O,V){const K=I.fog,D=O.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,z=t.get(v.envMap||Y,Z),ut=f[v.type];let J=n.precision;v.precision!==null&&(J=n.getMaxPrecision(v.precision),J!==v.precision&&oe("WebGLProgram.getParameters:",v.precision,"not supported, using",J,"instead."));const j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,lt=j!==void 0?j.length:0;let Ht=0;D.morphAttributes.position!==void 0&&(Ht=1),D.morphAttributes.normal!==void 0&&(Ht=2),D.morphAttributes.color!==void 0&&(Ht=3);let Jt,it,Et,Bt;if(ut){const It=Ui[ut];Jt=It.vertexShader,it=It.fragmentShader}else{Jt=v.vertexShader,it=v.fragmentShader;const It=a.getVertexShaderStage(v),De=a.getFragmentShaderStage(v);a.update(v,It,De),Et=It.id,Bt=De.id}const Yt=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),$t=O.isInstancedMesh===!0,ze=O.isBatchedMesh===!0,jt=!!v.map,ye=!!v.matcap,Te=!!z,at=Te&&z.isPMREMTexture===!0,bt=!!v.aoMap,St=!!v.lightMap,Ft=!!v.bumpMap&&v.wireframe===!1,Ct=!!v.normalMap,le=!!v.displacementMap,Gt=!!v.emissiveMap,me=!!v.metalnessMap,te=!!v.roughnessMap,se=v.anisotropy>0,U=v.clearcoat>0,fn=v.diffuseRoughness>0,ue=v.dispersion>0,He=v.retroreflectivity>0,Tt=v.iridescence>0,cn=v.sheen>0,Qt=v.transmission>0,ie=se&&!!v.anisotropyMap,T=U&&!!v.clearcoatMap,x=U&&!!v.clearcoatNormalMap,X=U&&!!v.clearcoatRoughnessMap,$=fn&&!!v.diffuseRoughnessMap,k=Tt&&!!v.iridescenceMap,gt=Tt&&!!v.iridescenceThicknessMap,xt=cn&&!!v.sheenColorMap,nt=cn&&!!v.sheenRoughnessMap,rt=!!v.specularMap,yt=!!v.specularColorMap,P=!!v.specularIntensityMap,st=Qt&&!!v.transmissionMap,tt=Qt&&!!v.thicknessMap,pt=!!v.gradientMap,ct=!!v.alphaMap,_t=v.alphaTest>0,Xt=!!v.alphaHash,pe=!!v.extensions;let dt=as;v.toneMapped&&(Yt===null||Yt.isXRRenderTarget===!0)&&(dt=i.toneMapping);const zt=at?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Zt={shaderID:ut,shaderType:v.type,shaderName:v.name,vertexShader:Jt,fragmentShader:it,defines:v.defines,customVertexShaderID:Et,customFragmentShaderID:Bt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:J,batching:ze,batchingColor:ze&&O._colorsTexture!==null,instancing:$t,instancingColor:$t&&O.instanceColor!==null,instancingMorph:$t&&O.morphTexture!==null,outputColorSpace:Yt===null?i.outputColorSpace:Yt.isXRRenderTarget===!0?Yt.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:jt,matcap:ye,envMap:Te,envMapMode:Te&&z.mapping,envMapPMREM:at,envMapMaxLod:at?zt.length-1:null,envMapSize:at?zt[0].width:null,aoMap:bt,lightMap:St,bumpMap:Ft,normalMap:Ct,displacementMap:le,emissiveMap:Gt,normalMapObjectSpace:Ct&&v.normalMapType===Yd,normalMapTangentSpace:Ct&&v.normalMapType===Da,packedNormalMap:Ct&&v.normalMapType===Da&&jv(v.normalMap.format),metalnessMap:me,roughnessMap:te,anisotropy:se,anisotropyMap:ie,clearcoat:U,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:X,diffuseRoughness:fn,diffuseRoughnessMap:$,dispersion:ue,retroreflection:He,iridescence:Tt,iridescenceMap:k,iridescenceThicknessMap:gt,sheen:cn,sheenColorMap:xt,sheenRoughnessMap:nt,specularMap:rt,specularColorMap:yt,specularIntensityMap:P,transmission:Qt,transmissionMap:st,thicknessMap:tt,gradientMap:pt,opaque:v.transparent===!1&&v.blending===mo&&v.alphaToCoverage===!1,alphaMap:ct,alphaTest:_t,alphaHash:Xt,combine:v.combine,mapUv:jt&&u(v.map.channel),aoMapUv:bt&&u(v.aoMap.channel),lightMapUv:St&&u(v.lightMap.channel),bumpMapUv:Ft&&u(v.bumpMap.channel),normalMapUv:Ct&&u(v.normalMap.channel),displacementMapUv:le&&u(v.displacementMap.channel),emissiveMapUv:Gt&&u(v.emissiveMap.channel),metalnessMapUv:me&&u(v.metalnessMap.channel),roughnessMapUv:te&&u(v.roughnessMap.channel),anisotropyMapUv:ie&&u(v.anisotropyMap.channel),clearcoatMapUv:T&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:x&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:$&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:k&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:nt&&u(v.sheenRoughnessMap.channel),specularMapUv:rt&&u(v.specularMap.channel),specularColorMapUv:yt&&u(v.specularColorMap.channel),specularIntensityMapUv:P&&u(v.specularIntensityMap.channel),transmissionMapUv:st&&u(v.transmissionMap.channel),thicknessMapUv:tt&&u(v.thicknessMap.channel),alphaMapUv:ct&&u(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ct||se),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!D.attributes.uv&&(jt||ct),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&Ct===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Mt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Ht,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:V.filter(It=>It.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:jt&&v.map.isVideoTexture===!0&&Le.getTransfer(v.map.colorSpace)===je,decodeVideoTextureEmissive:Gt&&v.emissiveMap.isVideoTexture===!0&&Le.getTransfer(v.emissiveMap.colorSpace)===je,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===kn,flipSided:v.side===Jn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:pe&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&v.extensions.multiDraw===!0||ze)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function S(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const H in v.defines)b.push(H),b.push(v.defines[H]);return v.isRawShaderMaterial===!1&&(m(b,v),d(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function d(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function y(v){const b=f[v.type];let H;if(b){const I=Ui[b];H=vm.clone(I.uniforms)}else H=v.uniforms;return H}function A(v,b){let H=h.get(b);return H!==void 0?++H.usedTimes:(H=new Kv(i,b,v,s),l.push(H),h.set(b,H)),H}function E(v){if(--v.usedTimes===0){const b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function C(v){a.remove(v)}function R(){a.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:y,acquireProgram:A,releaseProgram:E,releaseShaderCache:C,programs:l,dispose:R}}function ex(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function nx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ju(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $u(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,_,S,m,d){let y=i[t];return y===void 0?(y={id:f.id,object:f,geometry:u,material:_,materialVariant:o(f),groupOrder:S,renderOrder:f.renderOrder,z:m,group:d},i[t]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=_,y.materialVariant=o(f),y.groupOrder=S,y.renderOrder=f.renderOrder,y.z=m,y.group=d),t++,y}function c(f,u,_,S,m,d,y){y.reversedDepth===!0&&(m=-m);const A=a(f,u,_,S,m,d);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):e.push(A)}function l(f,u,_,S,m,d){const y=a(f,u,_,S,m,d);_.transmission>0?n.unshift(y):_.transparent===!0?s.unshift(y):e.unshift(y)}function h(f,u){e.length>1&&e.sort(f||nx),n.length>1&&n.sort(u||Ju),s.length>1&&s.sort(u||Ju)}function p(){for(let f=t,u=i.length;f<u;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:h}}function ix(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new $u,i.set(n,[o])):s>=r.length?(o=new $u,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function sx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new ae};break;case"SpotLight":e={position:new N,direction:new N,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function rx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ox=0;function ax(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lx(i){const t=new sx,e=rx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new Be,o=new Be;function a(l){let h=0,p=0,f=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let u=0,_=0,S=0,m=0,d=0,y=0,A=0,E=0,C=0,R=0,v=0,b=0,H=0,I=0;l.sort(ax);for(let V=0,K=l.length;V<K;V++){const D=l[V],Y=D.color,Z=D.intensity,z=D.distance;let ut=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===qs?ut=D.shadow.map.texture:ut=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=Y.r*Z,p+=Y.g*Z,f+=Y.b*Z;else if(D.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(D.sh.coefficients[J],Z);I++}else if(D.isSunLight){const J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,lt=e.get(D);lt.shadowIntensity=j.intensity,lt.shadowBias=j.bias,lt.shadowNormalBias=j.normalBias,lt.shadowRadius=j.radius,lt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[_]=lt,n.sunShadowMap[_]=ut;const Ht=j.getViewportCount();for(let Jt=0;Jt<Ht;Jt++)n.sunShadowMatrix[S+Jt]=j.getMatrix(Jt),n.sunShadowCascade[S+Jt]=j._cascadeData[Jt];S+=Ht,_++}n.sun[u]=J,u++}else if(D.isDirectionalLight){const J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,lt=e.get(D);lt.shadowIntensity=j.intensity,lt.shadowBias=j.bias,lt.shadowNormalBias=j.normalBias,lt.shadowRadius=j.radius,lt.shadowMapSize=j.mapSize,n.directionalShadow[m]=lt,n.directionalShadowMap[m]=ut,n.directionalShadowMatrix[m]=D.shadow.matrix,C++}n.directional[m]=J,m++}else if(D.isSpotLight){const J=t.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(Y).multiplyScalar(Z),J.distance=z,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,n.spot[y]=J;const j=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,j.updateMatrices(D),D.castShadow&&H++),n.spotLightMatrix[y]=j.matrix,D.castShadow){const lt=e.get(D);lt.shadowIntensity=j.intensity,lt.shadowBias=j.bias,lt.shadowNormalBias=j.normalBias,lt.shadowRadius=j.radius,lt.shadowMapSize=j.mapSize,n.spotShadow[y]=lt,n.spotShadowMap[y]=ut,v++}y++}else if(D.isRectAreaLight){const J=t.get(D);J.color.copy(Y).multiplyScalar(Z),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=J,A++}else if(D.isPointLight){const J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){const j=D.shadow,lt=e.get(D);lt.shadowIntensity=j.intensity,lt.shadowBias=j.bias,lt.shadowNormalBias=j.normalBias,lt.shadowRadius=j.radius,lt.shadowMapSize=j.mapSize,lt.shadowCameraNear=j.camera.near,lt.shadowCameraFar=j.camera.far,n.pointShadow[d]=lt,n.pointShadowMap[d]=ut,n.pointShadowMatrix[d]=D.shadow.matrix,R++}n.point[d]=J,d++}else if(D.isHemisphereLight){const J=t.get(D);J.skyColor.copy(D.color).multiplyScalar(Z),J.groundColor.copy(D.groundColor).multiplyScalar(Z),n.hemi[E]=J,E++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;const O=n.hash;(O.sunLength!==u||O.directionalLength!==m||O.pointLength!==d||O.spotLength!==y||O.rectAreaLength!==A||O.hemiLength!==E||O.numSunShadows!==_||O.numDirectionalShadows!==C||O.numPointShadows!==R||O.numSpotShadows!==v||O.numSpotMaps!==b||O.numLightProbes!==I)&&(n.sun.length=u,n.directional.length=m,n.spot.length=y,n.rectArea.length=A,n.point.length=d,n.hemi.length=E,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-H,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=H,n.numLightProbes=I,O.sunLength=u,O.directionalLength=m,O.pointLength=d,O.spotLength=y,O.rectAreaLength=A,O.hemiLength=E,O.numSunShadows=_,O.numDirectionalShadows=C,O.numPointShadows=R,O.numSpotShadows=v,O.numSpotMaps=b,O.numLightProbes=I,n.version=ox++)}function c(l,h){let p=0,f=0,u=0,_=0,S=0,m=0;const d=h.matrixWorldInverse;for(let y=0,A=l.length;y<A;y++){const E=l[y];if(E.isSunLight){const C=n.sun[p];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(d),p++}else if(E.isDirectionalLight){const C=n.directional[f];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),f++}else if(E.isSpotLight){const C=n.spot[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),_++}else if(E.isRectAreaLight){const C=n.rectArea[S];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(d),o.identity(),r.copy(E.matrixWorld),r.premultiply(d),o.extractRotation(r),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),S++}else if(E.isPointLight){const C=n.point[u];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(d),u++}else if(E.isHemisphereLight){const C=n.hemi[m];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:a,setupView:c,state:n}}function Qu(i){const t=new lx(i),e=[],n=[],s=[];function r(p){h.camera=p,e.length=0,n.length=0,s.length=0}function o(p){p.isLightProbeGrid?s.push(p):e.push(p)}function a(p){n.push(p)}function c(){t.setup(e),s.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function l(p){t.setupView(e,p)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function cx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Qu(i),t.set(s,[a])):r>=o.length?(a=new Qu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,fx=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],dx=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],ju=new Be,oo=new N,Yl=new N;function px(i,t,e){let n=new Eo;const s=new mt,r=new mt,o=new pn,a=new bm,c=new Tm,l={},h=e.maxTextureSize,p={[Xs]:Jn,[Jn]:Xs,[kn]:kn},f=new Zs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:hx,fragmentShader:ux}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const _=new Tn;_.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ft(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let d=this.type;this.render=function(R,v,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===bd&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=po);const H=i.getRenderTarget(),I=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Cr),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const K=d!==this.type;K&&v.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(Y=>Y.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,Y=R.length;D<Y;D++){const Z=R[D],z=Z.shadow;if(z===void 0){oe("WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ut=z.getFrameExtents();s.multiply(ut),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,z.mapSize.y=r.y));const J=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=J,z.map===null||K===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ho){if(Z.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Oi(s.x,s.y,{format:qs,type:Hi,minFilter:ni,magFilter:ni,generateMipmaps:!1}),z.map.texture.name=Z.name+".shadowMap",z.map.depthTexture=new Nr(s.x,s.y,Ai),z.map.depthTexture.name=Z.name+".shadowMapDepth",z.map.depthTexture.format=ws,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=On,z.map.depthTexture.magFilter=On}else Z.isPointLight?(z.map=new ah(s.x),z.map.depthTexture=new Pf(s.x,zi)):(z.map=new Oi(s.x,s.y),z.map.depthTexture=new Nr(s.x,s.y,zi)),z.map.depthTexture.name=Z.name+".shadowMap",z.map.depthTexture.format=ws,this.type===po?(z.map.depthTexture.compareFunction=J?xf:vf,z.map.depthTexture.minFilter=ni,z.map.depthTexture.magFilter=ni):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=On,z.map.depthTexture.magFilter=On);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const j=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();Z.isPointLight!==!0&&z.updateMatrices(Z,b);const lt=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:b.layers;for(let Ht=0;Ht<j;Ht++){const Jt=z.getCamera(Ht);if(Z.isPointLight){const it=z.camera,Et=z.matrix,Bt=Z.distance||it.far;Bt!==it.far&&(it.far=Bt,it.updateProjectionMatrix()),oo.setFromMatrixPosition(Z.matrixWorld),it.position.copy(oo),Yl.copy(it.position),Yl.add(fx[Ht]),it.up.copy(dx[Ht]),it.lookAt(Yl),it.updateMatrixWorld(),Et.makeTranslation(-oo.x,-oo.y,-oo.z),ju.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),z._frustum.setFromProjectionMatrix(ju,it.coordinateSystem,it.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Ht),i.clear();else{Ht===0&&(i.setRenderTarget(z.map),i.clear());const it=z.getViewport(Ht);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),V.viewport(o)}n=z.getFrustum(Ht),E(v,b,Jt,Z,lt,this.type)}z.isPointLightShadow!==!0&&this.type===ho&&y(z,b),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(H,I,O)};function y(R,v){const b=t.update(S);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null?R.mapPass=new Oi(s.x,s.y,{format:qs,type:Hi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(v,null,b,f,S,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(v,null,b,u,S,null)}function A(R,v,b,H){let I=null;const O=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)I=O;else if(I=b.isPointLight===!0?c:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const V=I.uuid,K=v.uuid;let D=l[V];D===void 0&&(D={},l[V]=D);let Y=D[K];Y===void 0&&(Y=I.clone(),D[K]=Y,v.addEventListener("dispose",C)),I=Y}if(I.visible=v.visible,I.wireframe=v.wireframe,H===ho?I.side=v.shadowSide!==null?v.shadowSide:v.side:I.side=v.shadowSide!==null?v.shadowSide:p[v.side],I.alphaMap=v.alphaMap,I.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,I.map=v.map,I.clipShadows=v.clipShadows,I.clippingPlanes=v.clippingPlanes,I.clipIntersection=v.clipIntersection,I.displacementMap=v.displacementMap,I.displacementScale=v.displacementScale,I.displacementBias=v.displacementBias,I.wireframeLinewidth=v.wireframeLinewidth,I.linewidth=v.linewidth,b.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const V=i.properties.get(I);V.light=b}return I}function E(R,v,b,H,I,O){if(R.visible===!1)return;if(R.layers.test(I)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&O===ho)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);const D=t.update(R),Y=R.material;if(Array.isArray(Y)){const Z=D.groups;for(let z=0,ut=Z.length;z<ut;z++){const J=Z[z],j=Y[J.materialIndex];if(j&&j.visible){const lt=A(R,j,H,O);R.onBeforeShadow(i,R,v,b,D,lt,J),i.renderBufferDirect(b,null,D,lt,R,J),R.onAfterShadow(i,R,v,b,D,lt,J)}}}else if(Y.visible){const Z=A(R,Y,H,O);R.onBeforeShadow(i,R,v,b,D,Z,null),i.renderBufferDirect(b,null,D,Z,R,null),R.onAfterShadow(i,R,v,b,D,Z,null)}}const K=R.children;for(let D=0,Y=K.length;D<Y;D++)E(K[D],v,b,H,I,O)}function C(R){R.target.removeEventListener("dispose",C);for(const b in l){const H=l[b],I=R.target.uuid;I in H&&(H[I].dispose(),delete H[I])}}}function mx(i,t){function e(){let P=!1;const st=new pn;let tt=null;const pt=new pn(0,0,0,0);return{setMask:function(ct){tt!==ct&&!P&&(i.colorMask(ct,ct,ct,ct),tt=ct)},setLocked:function(ct){P=ct},setClear:function(ct,_t,Xt,pe,dt){dt===!0&&(ct*=pe,_t*=pe,Xt*=pe),st.set(ct,_t,Xt,pe),pt.equals(st)===!1&&(i.clearColor(ct,_t,Xt,pe),pt.copy(st))},reset:function(){P=!1,tt=null,pt.set(-1,0,0,0)}}}function n(){let P=!1,st=!1,tt=null,pt=null,ct=null;return{setReversed:function(_t){if(st!==_t){const Xt=t.get("EXT_clip_control");_t?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),st=_t;const pe=ct;ct=null,this.setClear(pe)}},getReversed:function(){return st},setTest:function(_t){_t?Mt(i.DEPTH_TEST):$t(i.DEPTH_TEST)},setMask:function(_t){tt!==_t&&!P&&(i.depthMask(_t),tt=_t)},setFunc:function(_t){if(st&&(_t=sp[_t]),pt!==_t){switch(_t){case Jl:i.depthFunc(i.NEVER);break;case $l:i.depthFunc(i.ALWAYS);break;case Ql:i.depthFunc(i.LESS);break;case xo:i.depthFunc(i.LEQUAL);break;case jl:i.depthFunc(i.EQUAL);break;case tc:i.depthFunc(i.GEQUAL);break;case ec:i.depthFunc(i.GREATER);break;case nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=_t}},setLocked:function(_t){P=_t},setClear:function(_t){ct!==_t&&(ct=_t,st&&(_t=1-_t),i.clearDepth(_t))},reset:function(){P=!1,tt=null,pt=null,ct=null,st=!1}}}function s(){let P=!1,st=null,tt=null,pt=null,ct=null,_t=null,Xt=null,pe=null,dt=null;return{setTest:function(zt){P||(zt?Mt(i.STENCIL_TEST):$t(i.STENCIL_TEST))},setMask:function(zt){st!==zt&&!P&&(i.stencilMask(zt),st=zt)},setFunc:function(zt,Zt,It){(tt!==zt||pt!==Zt||ct!==It)&&(i.stencilFunc(zt,Zt,It),tt=zt,pt=Zt,ct=It)},setOp:function(zt,Zt,It){(_t!==zt||Xt!==Zt||pe!==It)&&(i.stencilOp(zt,Zt,It),_t=zt,Xt=Zt,pe=It)},setLocked:function(zt){P=zt},setClear:function(zt){dt!==zt&&(i.clearStencil(zt),dt=zt)},reset:function(){P=!1,st=null,tt=null,pt=null,ct=null,_t=null,Xt=null,pe=null,dt=null}}}const r=new e,o=new n,a=new s;let c={};const l=new WeakMap;let h={},p={},f={},u=new WeakMap,_=[],S=null,m=!1,d=null,y=null,A=null,E=null,C=null,R=null,v=null,b=new ae(0,0,0),H=0,I=!1,O=null,V=null,K=null,D=null,Y=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ut=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(J)[1]),z=ut>=1):J.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),z=ut>=2);let j=null,lt={};const Ht=i.getParameter(i.SCISSOR_BOX),Jt=i.getParameter(i.VIEWPORT),it=new pn().fromArray(Ht),Et=new pn().fromArray(Jt);function Bt(P,st,tt,pt){const ct=new Uint8Array(4),_t=i.createTexture();i.bindTexture(P,_t),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<tt;Xt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(st+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return _t}const Yt={};Yt[i.TEXTURE_2D]=Bt(i.TEXTURE_2D,i.TEXTURE_2D,1),Yt[i.TEXTURE_CUBE_MAP]=Bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Yt[i.TEXTURE_2D_ARRAY]=Bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Yt[i.TEXTURE_3D]=Bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Mt(i.DEPTH_TEST),o.setFunc(xo),Ft(!1),Ct(zh),Mt(i.CULL_FACE),bt(Cr);function Mt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function $t(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function ze(P,st){return f[P]!==st?(i.bindFramebuffer(P,st),f[P]=st,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=st),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=st),!0):!1}function jt(P,st){let tt=_,pt=!1;if(P){tt=u.get(st),tt===void 0&&(tt=[],u.set(st,tt));const ct=P.textures;if(tt.length!==ct.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Xt=ct.length;_t<Xt;_t++)tt[_t]=i.COLOR_ATTACHMENT0+_t;tt.length=ct.length,pt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,pt=!0);pt&&i.drawBuffers(tt)}function ye(P){return S!==P?(i.useProgram(P),S=P,!0):!1}const Te={[Tr]:i.FUNC_ADD,[wd]:i.FUNC_SUBTRACT,[Ad]:i.FUNC_REVERSE_SUBTRACT};Te[Rd]=i.MIN,Te[Cd]=i.MAX;const at={[Pd]:i.ZERO,[Ld]:i.ONE,[Dd]:i.SRC_COLOR,[nf]:i.SRC_ALPHA,[Bd]:i.SRC_ALPHA_SATURATE,[Fd]:i.DST_COLOR,[Nd]:i.DST_ALPHA,[Id]:i.ONE_MINUS_SRC_COLOR,[sf]:i.ONE_MINUS_SRC_ALPHA,[Od]:i.ONE_MINUS_DST_COLOR,[Ud]:i.ONE_MINUS_DST_ALPHA,[zd]:i.CONSTANT_COLOR,[Hd]:i.ONE_MINUS_CONSTANT_COLOR,[Gd]:i.CONSTANT_ALPHA,[kd]:i.ONE_MINUS_CONSTANT_ALPHA};function bt(P,st,tt,pt,ct,_t,Xt,pe,dt,zt){if(P===Cr){m===!0&&($t(i.BLEND),m=!1);return}if(m===!1&&(Mt(i.BLEND),m=!0),P!==Td){if(P!==d||zt!==I){if((y!==Tr||C!==Tr)&&(i.blendEquation(i.FUNC_ADD),y=Tr,C=Tr),zt)switch(P){case mo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hh:i.blendFunc(i.ONE,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ie("WebGLState: Invalid blending: ",P);break}else switch(P){case mo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gh:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kh:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",P);break}A=null,E=null,R=null,v=null,b.set(0,0,0),H=0,d=P,I=zt}return}ct=ct||st,_t=_t||tt,Xt=Xt||pt,(st!==y||ct!==C)&&(i.blendEquationSeparate(Te[st],Te[ct]),y=st,C=ct),(tt!==A||pt!==E||_t!==R||Xt!==v)&&(i.blendFuncSeparate(at[tt],at[pt],at[_t],at[Xt]),A=tt,E=pt,R=_t,v=Xt),(pe.equals(b)===!1||dt!==H)&&(i.blendColor(pe.r,pe.g,pe.b,dt),b.copy(pe),H=dt),d=P,I=!1}function St(P,st){P.side===kn?$t(i.CULL_FACE):Mt(i.CULL_FACE);let tt=P.side===Jn;st&&(tt=!tt),Ft(tt),P.blending===mo&&P.transparent===!1?bt(Cr):bt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);const pt=P.stencilWrite;a.setTest(pt),pt&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Gt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):$t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(P){O!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),O=P)}function Ct(P){P!==yd?(Mt(i.CULL_FACE),P!==V&&(P===zh?i.cullFace(i.BACK):P===Ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$t(i.CULL_FACE),V=P}function le(P){P!==K&&(z&&i.lineWidth(P),K=P)}function Gt(P,st,tt){P?(Mt(i.POLYGON_OFFSET_FILL),(D!==st||Y!==tt)&&(D=st,Y=tt,o.getReversed()&&(st=-st,tt=-tt),i.polygonOffset(st,tt))):$t(i.POLYGON_OFFSET_FILL)}function me(P){P?Mt(i.SCISSOR_TEST):$t(i.SCISSOR_TEST)}function te(P){P===void 0&&(P=i.TEXTURE0+Z-1),j!==P&&(i.activeTexture(P),j=P)}function se(P,st,tt){tt===void 0&&(j===null?tt=i.TEXTURE0+Z-1:tt=j);let pt=lt[tt];pt===void 0&&(pt={type:void 0,texture:void 0},lt[tt]=pt),(pt.type!==P||pt.texture!==st)&&(j!==tt&&(i.activeTexture(tt),j=tt),i.bindTexture(P,st||Yt[P]),pt.type=P,pt.texture=st)}function U(){const P=lt[j];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function fn(){try{i.compressedTexImage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function ue(){try{i.compressedTexImage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function He(){try{i.texSubImage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function Tt(){try{i.texSubImage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function cn(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function Qt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function ie(){try{i.texStorage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function T(){try{i.texStorage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function x(){try{i.texImage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function X(){try{i.texImage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function $(P){return p[P]!==void 0?p[P]:i.getParameter(P)}function k(P,st){p[P]!==st&&(i.pixelStorei(P,st),p[P]=st)}function gt(P){it.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),it.copy(P))}function xt(P){Et.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Et.copy(P))}function nt(P,st){let tt=l.get(st);tt===void 0&&(tt=new WeakMap,l.set(st,tt));let pt=tt.get(P);pt===void 0&&(pt=i.getUniformBlockIndex(st,P.name),i.uniformBlockBinding(st,pt,pt),tt.set(P,pt))}function rt(P,st,tt){const ct=l.get(st).get(P);c[ct]!==tt&&(i.bindBufferBase(i.UNIFORM_BUFFER,ct,tt),c[ct]=tt)}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},j=null,lt={},f={},c={},u=new WeakMap,_=[],S=null,m=!1,d=null,y=null,A=null,E=null,C=null,R=null,v=null,b=new ae(0,0,0),H=0,I=!1,O=null,V=null,K=null,D=null,Y=null,it.set(0,0,i.canvas.width,i.canvas.height),Et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Mt,disable:$t,bindFramebuffer:ze,drawBuffers:jt,useProgram:ye,setBlending:bt,setMaterial:St,setFlipSided:Ft,setCullFace:Ct,setLineWidth:le,setPolygonOffset:Gt,setScissorTest:me,activeTexture:te,bindTexture:se,unbindTexture:U,compressedTexImage2D:fn,compressedTexImage3D:ue,texImage2D:x,texImage3D:X,pixelStorei:k,getParameter:$,updateUBOMapping:nt,uniformBlockBinding:rt,texStorage2D:ie,texStorage3D:T,texSubImage2D:He,texSubImage3D:Tt,compressedTexSubImage2D:cn,compressedTexSubImage3D:Qt,scissor:gt,viewport:xt,reset:yt}}function gx(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new mt,h=new WeakMap,p=new Set;let f;const u=new WeakMap,_=new Set,S=new FinalizationRegistry(T=>_.delete(T));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,x){return m?new OffscreenCanvas(T,x):Ua("canvas")}function y(T,x,X){let $=1;const k=ie(T);if((k.width>X||k.height>X)&&($=X/Math.max(k.width,k.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const gt=Math.floor($*k.width),xt=Math.floor($*k.height);f===void 0&&(f=d(gt,xt));const nt=x?d(gt,xt):f;return nt.width=gt,nt.height=xt,nt.getContext("2d").drawImage(T,0,0,gt,xt),oe("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+gt+"x"+xt+")."),nt}else return"data"in T&&oe("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),T;return T}function A(T){return T.generateMipmaps}function E(T){i.generateMipmap(T)}function C(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(T,x,X,$,k,gt=!1){if(T!==null){if(i[T]!==void 0)return i[T];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let xt;$&&(xt=t.get("EXT_texture_norm16"),xt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=x;if(x===i.RED&&(X===i.FLOAT&&(nt=i.R32F),X===i.HALF_FLOAT&&(nt=i.R16F),X===i.UNSIGNED_BYTE&&(nt=i.R8),X===i.UNSIGNED_SHORT&&xt&&(nt=xt.R16_EXT),X===i.SHORT&&xt&&(nt=xt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(nt=i.R8UI),X===i.UNSIGNED_SHORT&&(nt=i.R16UI),X===i.UNSIGNED_INT&&(nt=i.R32UI),X===i.BYTE&&(nt=i.R8I),X===i.SHORT&&(nt=i.R16I),X===i.INT&&(nt=i.R32I)),x===i.RG&&(X===i.FLOAT&&(nt=i.RG32F),X===i.HALF_FLOAT&&(nt=i.RG16F),X===i.UNSIGNED_BYTE&&(nt=i.RG8),X===i.UNSIGNED_SHORT&&xt&&(nt=xt.RG16_EXT),X===i.SHORT&&xt&&(nt=xt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(nt=i.RG8UI),X===i.UNSIGNED_SHORT&&(nt=i.RG16UI),X===i.UNSIGNED_INT&&(nt=i.RG32UI),X===i.BYTE&&(nt=i.RG8I),X===i.SHORT&&(nt=i.RG16I),X===i.INT&&(nt=i.RG32I)),x===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),X===i.UNSIGNED_INT&&(nt=i.RGB32UI),X===i.BYTE&&(nt=i.RGB8I),X===i.SHORT&&(nt=i.RGB16I),X===i.INT&&(nt=i.RGB32I)),x===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),X===i.UNSIGNED_INT&&(nt=i.RGBA32UI),X===i.BYTE&&(nt=i.RGBA8I),X===i.SHORT&&(nt=i.RGBA16I),X===i.INT&&(nt=i.RGBA32I)),x===i.RGB&&(X===i.UNSIGNED_SHORT&&xt&&(nt=xt.RGB16_EXT),X===i.SHORT&&xt&&(nt=xt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),x===i.RGBA){const rt=gt?Na:Le.getTransfer(k);X===i.FLOAT&&(nt=i.RGBA32F),X===i.HALF_FLOAT&&(nt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(nt=rt===je?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&xt&&(nt=xt.RGBA16_EXT),X===i.SHORT&&xt&&(nt=xt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(T,x){let X;return T?x===null||x===zi||x===Ir?X=i.DEPTH24_STENCIL8:x===Ai?X=i.DEPTH32F_STENCIL8:x===So&&(X=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zi||x===Ir?X=i.DEPTH_COMPONENT24:x===Ai?X=i.DEPTH_COMPONENT32F:x===So&&(X=i.DEPTH_COMPONENT16),X}function b(T,x){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==On&&T.minFilter!==ni?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function H(T){const x=new WeakRef(T);n.get(T).__ref=x,_.add(x),S.register(T,x,x)}function I(T){const x=n.get(T).__ref;x!==void 0&&(_.delete(x),S.unregister(x))}function O(T){K(T.target)}function V(T){D(T.target)}function K(T){T.removeEventListener("dispose",O),I(T),Z(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&p.delete(T)}function D(T){T.removeEventListener("dispose",V),I(T),ut(T)}function Y(){for(const T of _){const x=T.deref();x!==void 0&&(x.isRenderTarget===!0?D(x):K(x))}_.clear(),p.clear()}function Z(T){const x=n.get(T);if(x.__webglInit===void 0)return;const X=T.source,$=u.get(X);if($){const k=$[x.__cacheKey];k.usedTimes--,k.usedTimes===0&&z(T),Object.keys($).length===0&&u.delete(X)}n.remove(T)}function z(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const X=T.source,$=u.get(X);delete $[x.__cacheKey],o.memory.textures--}function ut(T){const x=n.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();const X=T.depthTexture;if(X&&X.renderTarget===T&&K(X),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let gt=0;gt<x.__webglFramebuffer[k].length;gt++)i.deleteFramebuffer(x.__webglFramebuffer[k][gt]);else i.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)i.deleteFramebuffer(x.__webglFramebuffer[k]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const $=T.textures;for(let k=0,gt=$.length;k<gt;k++){const xt=n.get($[k]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove($[k])}n.remove(T)}let J=0;function j(){J=0}function lt(){return J}function Ht(T){J=T}function Jt(){const T=J;return T>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,T}function it(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Et(T,x){const X=n.get(T);if(T.isVideoTexture&&cn(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&X.__version!==T.version){const $=T.image;if($===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{St(X,T,x);return}}else T.isExternalTexture&&(X.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+x)}function Bt(T,x){const X=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){St(X,T,x);return}else T.isExternalTexture&&(X.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+x)}function Yt(T,x){const X=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){St(X,T,x);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+x)}function Mt(T,x){const X=n.get(T);if(T.version>0&&X.__version!==T.version){Ft(X,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+x)}const $t={[Ca]:i.REPEAT,[rs]:i.CLAMP_TO_EDGE,[ic]:i.MIRRORED_REPEAT},ze={[On]:i.NEAREST,[Xd]:i.NEAREST_MIPMAP_NEAREST,[qo]:i.NEAREST_MIPMAP_LINEAR,[ni]:i.LINEAR,[vl]:i.LINEAR_MIPMAP_NEAREST,[bs]:i.LINEAR_MIPMAP_LINEAR},jt={[Kd]:i.NEVER,[Mf]:i.ALWAYS,[Jd]:i.LESS,[vf]:i.LEQUAL,[$d]:i.EQUAL,[xf]:i.GEQUAL,[Qd]:i.GREATER,[jd]:i.NOTEQUAL};function ye(T,x){if(x.type===Ai&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ni||x.magFilter===vl||x.magFilter===qo||x.magFilter===bs||x.minFilter===ni||x.minFilter===vl||x.minFilter===qo||x.minFilter===bs)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,$t[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,$t[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,$t[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ze[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ze[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,jt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===On||x.minFilter!==qo&&x.minFilter!==bs||x.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Te(T,x){let X=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",O),H(x));const $=x.source;let k=u.get($);k===void 0&&(k={},u.set($,k));const gt=it(x);if(gt!==T.__cacheKey){k[gt]===void 0&&(k[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),k[gt].usedTimes++;const xt=k[T.__cacheKey];xt!==void 0&&(k[T.__cacheKey].usedTimes--,xt.usedTimes===0&&z(x)),T.__cacheKey=gt,T.__webglTexture=k[gt].texture}return X}function at(T,x,X){return Math.floor(Math.floor(T/X)/x)}function bt(T,x,X,$){const gt=T.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,X,$,x.data);else{gt.sort((P,st)=>P.start-st.start);let xt=0;for(let P=1;P<gt.length;P++){const st=gt[xt],tt=gt[P],pt=st.start+st.count,ct=at(tt.start,x.width,4),_t=at(st.start,x.width,4);tt.start<=pt+1&&ct===_t&&at(tt.start+tt.count-1,x.width,4)===ct?st.count=Math.max(st.count,tt.start+tt.count-st.start):(++xt,gt[xt]=tt)}gt.length=xt+1;const nt=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let P=0,st=gt.length;P<st;P++){const tt=gt[P],pt=Math.floor(tt.start/4),ct=Math.ceil(tt.count/4),_t=pt%x.width,Xt=Math.floor(pt/x.width),pe=ct,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,Xt),e.texSubImage2D(i.TEXTURE_2D,0,_t,Xt,pe,dt,X,$,x.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function St(T,x,X){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const k=Te(T,x),gt=x.source;e.bindTexture($,T.__webglTexture,i.TEXTURE0+X);const xt=n.get(gt);if(gt.version!==xt.__version||k===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const dt=Le.getPrimaries(Le.workingColorSpace),zt=x.colorSpace===Es?null:Le.getPrimaries(x.colorSpace),Zt=x.colorSpace===Es||dt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let rt=y(x.image,!1,s.maxTextureSize);rt=Qt(x,rt);const yt=r.convert(x.format,x.colorSpace),P=r.convert(x.type);let st=R(x.internalFormat,yt,P,x.normalized,x.colorSpace,x.isVideoTexture);ye($,x);let tt;const pt=x.mipmaps,ct=x.isVideoTexture!==!0,_t=xt.__version===void 0||k===!0,Xt=gt.dataReady,pe=b(x,rt);if(x.isDepthTexture)st=v(x.format===Ts,x.type),_t&&(ct?e.texStorage2D(i.TEXTURE_2D,1,st,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,st,rt.width,rt.height,0,yt,P,null));else if(x.isDataTexture)if(pt.length>0){ct&&_t&&e.texStorage2D(i.TEXTURE_2D,pe,st,pt[0].width,pt[0].height);for(let dt=0,zt=pt.length;dt<zt;dt++)tt=pt[dt],ct?Xt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,tt.width,tt.height,yt,P,tt.data):e.texImage2D(i.TEXTURE_2D,dt,st,tt.width,tt.height,0,yt,P,tt.data);x.generateMipmaps=!1}else ct?(_t&&e.texStorage2D(i.TEXTURE_2D,pe,st,rt.width,rt.height),Xt&&bt(x,rt,yt,P)):e.texImage2D(i.TEXTURE_2D,0,st,rt.width,rt.height,0,yt,P,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ct&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pe,st,pt[0].width,pt[0].height,rt.depth);for(let dt=0,zt=pt.length;dt<zt;dt++)if(tt=pt[dt],x.format!==Fi)if(yt!==null)if(ct){if(Xt)if(x.layerUpdates.size>0){const Zt=Du(tt.width,tt.height,x.format,x.type);for(const It of x.layerUpdates){const De=tt.data.subarray(It*Zt/tt.data.BYTES_PER_ELEMENT,(It+1)*Zt/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,It,tt.width,tt.height,1,yt,De)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,tt.width,tt.height,rt.depth,yt,tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,st,tt.width,tt.height,rt.depth,0,tt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?Xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,tt.width,tt.height,rt.depth,yt,P,tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,st,tt.width,tt.height,rt.depth,0,yt,P,tt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ct&&_t&&e.texStorage2D(i.TEXTURE_2D,pe,st,pt[0].width,pt[0].height);for(let dt=0,zt=pt.length;dt<zt;dt++)tt=pt[dt],x.format!==Fi?yt!==null?ct?Xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,tt.width,tt.height,yt,tt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,st,tt.width,tt.height,0,tt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?Xt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,tt.width,tt.height,yt,P,tt.data):e.texImage2D(i.TEXTURE_2D,dt,st,tt.width,tt.height,0,yt,P,tt.data)}else if(x.isDataArrayTexture)if(ct){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pe,st,rt.width,rt.height,rt.depth),Xt)if(x.layerUpdates.size>0){const dt=Du(rt.width,rt.height,x.format,x.type);for(const zt of x.layerUpdates){const Zt=rt.data.subarray(zt*dt/rt.data.BYTES_PER_ELEMENT,(zt+1)*dt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,zt,rt.width,rt.height,1,yt,P,Zt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,yt,P,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,st,rt.width,rt.height,rt.depth,0,yt,P,rt.data);else if(x.isData3DTexture)ct?(_t&&e.texStorage3D(i.TEXTURE_3D,pe,st,rt.width,rt.height,rt.depth),Xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,yt,P,rt.data)):e.texImage3D(i.TEXTURE_3D,0,st,rt.width,rt.height,rt.depth,0,yt,P,rt.data);else if(x.isFramebufferTexture){if(_t)if(ct)e.texStorage2D(i.TEXTURE_2D,pe,st,rt.width,rt.height);else{let dt=rt.width,zt=rt.height;for(let Zt=0;Zt<pe;Zt++)e.texImage2D(i.TEXTURE_2D,Zt,st,dt,zt,0,yt,P,null),dt>>=1,zt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),rt.parentNode!==dt){dt.appendChild(rt),p.add(x),dt.onpaint=zt=>{const Zt=zt.changedElements;for(const It of p)Zt.includes(It.image)&&(It.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{const Zt=i.RGBA,It=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Zt,It,De,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ct&&_t){const dt=ie(pt[0]);e.texStorage2D(i.TEXTURE_2D,pe,st,dt.width,dt.height)}for(let dt=0,zt=pt.length;dt<zt;dt++)tt=pt[dt],ct?Xt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,yt,P,tt):e.texImage2D(i.TEXTURE_2D,dt,st,yt,P,tt);x.generateMipmaps=!1}else if(ct){if(_t){const dt=ie(rt);e.texStorage2D(i.TEXTURE_2D,pe,st,dt.width,dt.height)}Xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,P,rt)}else e.texImage2D(i.TEXTURE_2D,0,st,yt,P,rt);A(x)&&x.mipmapsAutoUpdate===!0&&E($),xt.__version=gt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ft(T,x,X){if(x.image.length!==6)return;const $=Te(T,x),k=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+X);const gt=n.get(k);if(k.version!==gt.__version||$===!0){e.activeTexture(i.TEXTURE0+X);const xt=Le.getPrimaries(Le.workingColorSpace),nt=x.colorSpace===Es?null:Le.getPrimaries(x.colorSpace),rt=x.colorSpace===Es||xt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const yt=x.isCompressedTexture||x.image[0].isCompressedTexture,P=x.image[0]&&x.image[0].isDataTexture,st=[];for(let It=0;It<6;It++)!yt&&!P?st[It]=y(x.image[It],!0,s.maxCubemapSize):st[It]=P?x.image[It].image:x.image[It],st[It]=Qt(x,st[It]);const tt=st[0],pt=r.convert(x.format,x.colorSpace),ct=r.convert(x.type);let _t=R(x.internalFormat,pt,ct,x.normalized,x.colorSpace);const Xt=x.isVideoTexture!==!0,pe=gt.__version===void 0||$===!0,dt=k.dataReady;let zt=b(x,tt);ye(i.TEXTURE_CUBE_MAP,x);let Zt;if(x.isDepthTexture){if(_t=v(x.format===Ts,x.type),pe)if(Xt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,_t,tt.width,tt.height);else for(let It=0;It<6;It++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,_t,tt.width,tt.height,0,pt,ct,null)}else if(yt){Xt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,_t,tt.width,tt.height);for(let It=0;It<6;It++){Zt=st[It].mipmaps;for(let De=0;De<Zt.length;De++){const xn=Zt[De];x.format!==Fi?pt!==null?Xt?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,De,0,0,xn.width,xn.height,pt,xn.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,De,_t,xn.width,xn.height,0,xn.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,De,0,0,xn.width,xn.height,pt,ct,xn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,De,_t,xn.width,xn.height,0,pt,ct,xn.data)}}}else{if(Zt=x.mipmaps,Xt&&pe){Zt.length>0&&zt++;const It=ie(st[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,_t,It.width,It.height)}for(let It=0;It<6;It++)if(P){Xt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,st[It].width,st[It].height,pt,ct,st[It].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,_t,st[It].width,st[It].height,0,pt,ct,st[It].data);for(let De=0;De<Zt.length;De++){const vi=Zt[De].image[It].image;Xt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,De+1,0,0,vi.width,vi.height,pt,ct,vi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,De+1,_t,vi.width,vi.height,0,pt,ct,vi.data)}}else{Xt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,pt,ct,st[It]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,_t,pt,ct,st[It]);for(let De=0;De<Zt.length;De++){const xn=Zt[De];Xt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,De+1,0,0,pt,ct,xn.image[It]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,De+1,_t,pt,ct,xn.image[It])}}}A(x)&&x.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),gt.__version=k.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ct(T,x,X,$,k,gt){const xt=r.convert(X.format,X.colorSpace),nt=r.convert(X.type),rt=R(X.internalFormat,xt,nt,X.normalized,X.colorSpace),yt=n.get(x),P=n.get(X);if(P.__renderTarget=x,!yt.__hasExternalTextures){const st=Math.max(1,x.width>>gt),tt=Math.max(1,x.height>>gt);k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?e.texImage3D(k,gt,rt,st,tt,x.depth,0,xt,nt,null):e.texImage2D(k,gt,rt,st,tt,0,xt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Tt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,k,P.__webglTexture,0,He(x)):(k===i.TEXTURE_2D||k>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,k,P.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function le(T,x,X){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const $=x.depthTexture,k=$&&$.isDepthTexture?$.type:null,gt=v(x.stencilBuffer,k),xt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Tt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(x),gt,x.width,x.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(x),gt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,gt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,T)}else{const $=x.textures;for(let k=0;k<$.length;k++){const gt=$[k],xt=r.convert(gt.format,gt.colorSpace),nt=r.convert(gt.type),rt=R(gt.internalFormat,xt,nt,gt.normalized,gt.colorSpace);Tt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(x),rt,x.width,x.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(x),rt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,rt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Gt(T,x,X){const $=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const k=n.get(x.depthTexture);k.__renderTarget=x;const gt=$?x.depthTexture.image[0]:x.depthTexture.image;(!k.__webglTexture||gt.width!==x.width||gt.height!==x.height)&&(gt.width=x.width,gt.height=x.height,x.depthTexture.needsUpdate=!0),$?Mt(x.depthTexture,0):Et(x.depthTexture,0);const xt=k.__webglTexture,nt=He(x),rt=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,yt=x.depthTexture.format===Ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===ws)Tt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,rt,xt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,yt,rt,xt,0);else if(x.depthTexture.format===Ts)Tt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,rt,xt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,yt,rt,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(T){const x=n.get(T),X=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const k=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",k)};$.addEventListener("dispose",k),x.__depthDisposeCallback=k}x.__boundDepthTexture=$}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(X)for(let $=0;$<6;$++)Gt(x.__webglFramebuffer[$],T,$);else T.texture.mipmaps.length>0?Gt(x.__webglFramebuffer[0],T,0):Gt(x.__webglFramebuffer,T,0);else if(X){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),le(x.__webglDepthbuffer[$],T,!1);else{const k=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,gt)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),le(x.__webglDepthbuffer,T,!1);else{const k=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,gt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(T,x,X){const $=n.get(T);x!==void 0&&Ct($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&me(T)}function se(T){const x=T.texture,X=n.get(T),$=n.get(x);T.addEventListener("dispose",V),H(T);const k=T.textures,gt=T.isWebGLCubeRenderTarget===!0,xt=k.length>1;if(xt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,o.memory.textures++),gt){X.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(x.mipmaps.length>0){X.__webglFramebuffer[nt]=[];for(let rt=0;rt<x.mipmaps.length;rt++)X.__webglFramebuffer[nt][rt]=i.createFramebuffer()}else X.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(x.mipmaps.length>0){X.__webglFramebuffer=[];for(let nt=0;nt<x.mipmaps.length;nt++)X.__webglFramebuffer[nt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(xt)for(let nt=0,rt=k.length;nt<rt;nt++){const yt=n.get(k[nt]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Tt(T)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let nt=0;nt<k.length;nt++){const rt=k[nt];X.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[nt]);const yt=r.convert(rt.format,rt.colorSpace),P=r.convert(rt.type),st=R(rt.internalFormat,yt,P,rt.normalized,rt.colorSpace,T.isXRRenderTarget===!0),tt=He(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,st,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,X.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),le(X.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ye(i.TEXTURE_CUBE_MAP,x);for(let nt=0;nt<6;nt++)if(x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)Ct(X.__webglFramebuffer[nt][rt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,rt);else Ct(X.__webglFramebuffer[nt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);A(x)?E(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(xt){for(let nt=0,rt=k.length;nt<rt;nt++){const yt=k[nt],P=n.get(yt);let st=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(st=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,P.__webglTexture),ye(st,yt),Ct(X.__webglFramebuffer,T,yt,i.COLOR_ATTACHMENT0+nt,st,0),A(yt)&&E(st)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(nt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,$.__webglTexture),ye(nt,x),x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)Ct(X.__webglFramebuffer[rt],T,x,i.COLOR_ATTACHMENT0,nt,rt);else Ct(X.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,nt,0);A(x)?E(nt):x.mipmaps.length>0&&i.texParameteri(nt,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&me(T)}function U(T){const x=T.textures;for(let X=0,$=x.length;X<$;X++){const k=x[X];if(A(k)&&k.mipmapsAutoUpdate===!0){const gt=C(T),xt=n.get(k).__webglTexture;e.bindTexture(gt,xt),E(gt),e.unbindTexture()}}}const fn=[];function ue(T){if(T.samples>0){if(Tt(T)===!1){const x=T.textures,X=T.width,$=T.height;let k=i.COLOR_BUFFER_BIT;const gt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(T),nt=x.length>1;if(nt)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(k|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(k|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);const P=n.get(x[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,X,$,0,0,X,$,k,i.NEAREST),c===!0&&(fn.length=0,fn.push(i.COLOR_ATTACHMENT0+yt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&fn.push(gt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);const P=n.get(x[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function He(T){return Math.min(s.maxSamples,T.samples)}function Tt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function cn(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Qt(T,x){const X=T.colorSpace,$=T.format,k=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||X!==Ia&&X!==Es&&(Le.getTransfer(X)===je?($!==Fi||k!==ui)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",X)),x}function ie(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=Jt,this.resetTextureUnits=j,this.getTextureUnits=lt,this.setTextureUnits=Ht,this.setTexture2D=Et,this.setTexture2DArray=Bt,this.setTexture3D=Yt,this.setTextureCube=Mt,this.rebindTextures=te,this.setupRenderTarget=se,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Tt,this.dispose=Y}function _x(i,t){function e(n,s=Es){let r;const o=Le.getTransfer(s);if(n===ui)return i.UNSIGNED_BYTE;if(n===Yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ff)return i.BYTE;if(n===df)return i.SHORT;if(n===So)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Ai)return i.FLOAT;if(n===Hi)return i.HALF_FLOAT;if(n===gf)return i.ALPHA;if(n===_f)return i.RGB;if(n===Fi)return i.RGBA;if(n===ws)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===Kc)return i.RED;if(n===Jc)return i.RED_INTEGER;if(n===qs)return i.RG;if(n===$c)return i.RG_INTEGER;if(n===Qc)return i.RGBA_INTEGER;if(n===ya||n===Ea||n===ba||n===Ta)if(o===je)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sc||n===rc||n===oc||n===ac)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lc||n===cc||n===hc||n===uc||n===fc||n===Pa||n===dc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lc||n===cc)return o===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hc)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===uc)return r.COMPRESSED_R11_EAC;if(n===fc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Pa)return r.COMPRESSED_RG11_EAC;if(n===dc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pc||n===mc||n===gc||n===_c||n===vc||n===xc||n===Mc||n===Sc||n===yc||n===Ec||n===bc||n===Tc||n===wc||n===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pc)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xc)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mc)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sc)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bc)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tc)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rc||n===Cc||n===Pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rc)return o===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lc||n===Dc||n===La||n===Ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===La)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Mx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Lf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Zs({vertexShader:vx,fragmentShader:xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sx extends As{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,p=null,f=null,u=null,_=null;const S=typeof XRWebGLBinding<"u",m=new Mx,d={},y=e.getContextAttributes();let A=null,E=null;const C=[],R=[],v=new mt;let b=null,H=null;const I=new hi;I.viewport=new pn;const O=new hi;O.viewport=new pn;const V=[I,O],K=new Lm;let D=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let Et=C[it];return Et===void 0&&(Et=new wl,C[it]=Et),Et.getTargetRaySpace()},this.getControllerGrip=function(it){let Et=C[it];return Et===void 0&&(Et=new wl,C[it]=Et),Et.getGripSpace()},this.getHand=function(it){let Et=C[it];return Et===void 0&&(Et=new wl,C[it]=Et),Et.getHandSpace()};function Z(it){const Et=R.indexOf(it.inputSource);if(Et===-1)return;const Bt=C[Et];Bt!==void 0&&(Bt.update(it.inputSource,it.frame,l||o),Bt.dispatchEvent({type:it.type,data:it.inputSource}))}function z(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ut);for(let it=0;it<C.length;it++){const Et=R[it];Et!==null&&(R[it]=null,C[it].disconnect(Et))}D=null,Y=null,m.reset();for(const it in d)delete d[it];if(t.setRenderTarget(A),u=null,f=null,p=null,s=null,E=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(v.width,v.height,!1),H!==null){const it=H.camera;it.fov=H.fov,it.zoom=H.zoom,it.updateProjectionMatrix(),H=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(it){l=it},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(v),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Bt=null,Yt=null,Mt=null;y.depth&&(Mt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Bt=y.stencil?Ts:ws,Yt=y.stencil?Ir:zi);const $t={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer($t),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Oi(f.textureWidth,f.textureHeight,{format:Fi,type:ui,depthTexture:new Nr(f.textureWidth,f.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Bt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Bt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Bt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new Oi(u.framebufferWidth,u.framebufferHeight,{format:Fi,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ut(it){for(let Et=0;Et<it.removed.length;Et++){const Bt=it.removed[Et],Yt=R.indexOf(Bt);Yt>=0&&(R[Yt]=null,C[Yt].disconnect(Bt))}for(let Et=0;Et<it.added.length;Et++){const Bt=it.added[Et];let Yt=R.indexOf(Bt);if(Yt===-1){for(let $t=0;$t<C.length;$t++)if($t>=R.length){R.push(Bt),Yt=$t;break}else if(R[$t]===null){R[$t]=Bt,Yt=$t;break}if(Yt===-1)break}const Mt=C[Yt];Mt&&Mt.connect(Bt)}}function J(it,Et){Et===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(Et.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let Et=it.near,Bt=it.far;m.texture!==null&&(m.depthNear>0&&(Et=m.depthNear),m.depthFar>0&&(Bt=m.depthFar)),K.near=O.near=I.near=Et,K.far=O.far=I.far=Bt,(D!==K.near||Y!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),D=K.near,Y=K.far),K.layers.mask=it.layers.mask|6,I.layers.mask=K.layers.mask&-5,O.layers.mask=K.layers.mask&-3;const Yt=it.parent,Mt=K.cameras;J(K,Yt);for(let $t=0;$t<Mt.length;$t++)J(Mt[$t],Yt);K.projectionMatrix.copy(I.projectionMatrix),K.projectionMatrixInverse.copy(I.projectionMatrixInverse),H===null&&it.isPerspectiveCamera&&(H={camera:it,fov:it.fov,zoom:it.zoom}),j(it,K,Yt)};function j(it,Et,Bt){Bt===null?it.matrix.copy(Et.matrixWorld):(it.matrix.copy(Bt.matrixWorld),it.matrix.invert(),it.matrix.multiply(Et.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(Et.projectionMatrix),it.projectionMatrixInverse.copy(Et.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Fa*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(it){c=it,f!==null&&(f.fixedFoveation=it),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=it)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(K)},this.getCameraTexture=function(it){return d[it]};let lt=null;function Ht(it,Et){if(h=Et.getViewerPose(l||o),_=Et,h!==null){const Bt=h.views;u!==null&&(t.setRenderTargetFramebuffer(E,u.framebuffer),t.setRenderTarget(E));let Yt=!1;Bt.length!==K.cameras.length&&(K.cameras.length=0,Yt=!0);for(let jt=0;jt<Bt.length;jt++){const ye=Bt[jt];let Te=null;if(u!==null)Te=u.getViewport(ye);else{const bt=p.getViewSubImage(f,ye);Te=bt.viewport,jt===0&&(t.setRenderTargetTextures(E,bt.colorTexture,bt.depthStencilTexture),t.setRenderTarget(E))}let at=V[jt];at===void 0&&(at=new hi,at.layers.enable(jt),at.viewport=new pn,V[jt]=at),at.matrix.fromArray(ye.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ye.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Te.x,Te.y,Te.width,Te.height),jt===0&&(K.matrix.copy(at.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Yt===!0&&K.cameras.push(at)}const Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();const jt=p.getDepthInformation(Bt[0]);jt&&jt.isValid&&jt.texture&&m.init(jt,s.renderState)}if(Mt&&Mt.includes("camera-access")&&S){t.state.unbindTexture(),p=n.getBinding();for(let jt=0;jt<Bt.length;jt++){const ye=Bt[jt].camera;if(ye){let Te=d[ye];Te||(Te=new Lf,d[ye]=Te);const at=p.getCameraImage(ye);Te.sourceTexture=at}}}}for(let Bt=0;Bt<C.length;Bt++){const Yt=R[Bt],Mt=C[Bt];Yt!==null&&Mt!==void 0&&Mt.update(Yt,Et,l||o)}lt&&lt(it,Et),Et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Et}),_=null}const Jt=new Vf;Jt.setAnimationLoop(Ht),this.setAnimationLoop=function(it){lt=it},this.dispose=function(){}}}const yx=new Be,jf=new de;jf.set(-1,0,0,0,1,0,0,0,1);function Ex(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Hf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,A,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&u(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),S(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,y,A):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Jn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Jn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d),A=y.envMap,E=y.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(yx.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(jf),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=A*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function u(m,d,y){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,e(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bx(i,t,e,n){let s={},r={};function o(y,A){const E=A.program;n.uniformBlockBinding(y,E,s[y.id])}function a(y,A){let E=s[y.id];E===void 0&&(_(y),E=c(y),s[y.id]=E,y.addEventListener("dispose",m));const C=A.program;n.updateUBOMapping(y,C);const R=t.render.frame;r[y.id]!==R&&(l(y),r[y.id]=R)}function c(y){const A=i.createBuffer(),E=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,E,C),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(y){const A=s[y.id],E=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let R=0,v=E.length;R<v;R++){const b=E[R];if(Array.isArray(b))for(let H=0,I=b.length;H<I;H++)h(b[H],R,H,C);else h(b,R,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,A,E,C){if(f(y,A,E,C)===!0){const R=y.__offset,v=y.value;if(Array.isArray(v)){let b=0;for(let H=0;H<v.length;H++){const I=v[H],O=S(I,!0);p(I,y.__data,b),b+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,y.__data)}}function p(y,A,E){typeof y=="number"||typeof y=="boolean"?A[E]=y:y.isMatrix3?(A[E]=y.elements[0],A[E+1]=y.elements[1],A[E+2]=y.elements[2],A[E+3]=0,A[E+4]=y.elements[3],A[E+5]=y.elements[4],A[E+6]=y.elements[5],A[E+7]=0,A[E+8]=y.elements[6],A[E+9]=y.elements[7],A[E+10]=y.elements[8],A[E+11]=0):ArrayBuffer.isView(y)?A.set(y.subarray(0,A.length-E),E):y.toArray(A,E)}function f(y,A,E,C){const R=y.value,v=A+"_"+E;if(Array.isArray(R)){C[v]===void 0&&(C[v]=[]);const b=C[v];let H=!1;for(let I=0;I<R.length;I++)u(R[I],b,I)===!0&&(H=!0);return H}return u(R,C,v)}function u(y,A,E){if(A[E]===void 0)return typeof y=="number"||typeof y=="boolean"?A[E]=y:ArrayBuffer.isView(y)?A[E]=y.slice():A[E]=y.clone(),!0;{const C=A[E];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return A[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function _(y){const A=y.uniforms;let E=0;const C=16;for(let v=0,b=A.length;v<b;v++){const H=Array.isArray(A[v])?A[v]:[A[v]];for(let I=0,O=H.length;I<O;I++){const V=H[I],K=Array.isArray(V.value)?V.value:[V.value],D=Array.isArray(A[v])||Array.isArray(V.value);let Y=E;for(let z=0,ut=K.length;z<ut;z++){const J=K[z],j=S(J,D),lt=E%C,Ht=lt%j.boundary,Jt=lt+Ht;E+=Ht,Jt!==0&&C-Jt<j.storage&&(E+=C-Jt),z===0&&(Y=E),E+=j.storage}const Z=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new Z((E-Y)/Float32Array.BYTES_PER_ELEMENT),V.__offset=Y}}const R=E%C;return R>0&&(E+=C-R),y.__size=E,y.__cache={},this}function S(y,A){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=16,E.storage=48):y.isMatrix4?(E.boundary=16,E.storage=64):y.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",y),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function m(y){const A=y.target;A.removeEventListener("dispose",m),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(const y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:d}}const Tx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function wx(){return Ii===null&&(Ii=new Af(Tx,16,16,qs,Hi),Ii.name="DFG_LUT",Ii.minFilter=ni,Ii.magFilter=ni,Ii.wrapS=rs,Ii.wrapT=rs,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class Ax{constructor(t={}){const{canvas:e=np(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:u=ui}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const S=u,m=new Set([Qc,$c,Jc]),d=new Set([ui,zi,So,Ir,Yc,Zc]),y=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let C=null,R=null;const v=[],b=[];let H=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=as,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let O=!1,V=null,K=null,D=null,Y=null;this._outputColorSpace=ei;let Z=0,z=0,ut=null,J=-1,j=null;const lt=new pn,Ht=new pn;let Jt=null;const it=new ae(0);let Et=0,Bt=e.width,Yt=e.height,Mt=1,$t=null,ze=null;const jt=new pn(0,0,Bt,Yt),ye=new pn(0,0,Bt,Yt);let Te=!1;const at=new Eo,bt=new nh;let St=!1,Ft=!1;const Ct=new Be,le=new N,Gt=new pn,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function se(){return ut===null?Mt:1}let U=n;function fn(M,L){return e.getContext(M,L)}let ue,He,Tt,cn,Qt,ie,T,x,X,$,k,gt,xt,nt,rt,yt,P,st,tt,pt,ct,_t,Xt;try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vc}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",It,!1),U===null){const L="webgl2";if(U=fn(L,M),U===null)throw fn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pe()}catch(M){throw e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Ie("WebGLRenderer: "+M.message),M}function pe(){ue=new P_(U),ue.init(),ct=new _x(U,ue),He=new x_(U,ue,t,ct),Tt=new mx(U,ue),He.reversedDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),K=U.createFramebuffer(),D=U.createFramebuffer(),Y=U.createFramebuffer(),cn=new I_(U),Qt=new ex,ie=new gx(U,ue,Tt,Qt,He,ct,cn),T=new C_(I),x=new Um(U),_t=new __(U,x),X=new L_(U,x,cn,_t),$=new U_(U,X,x,_t,cn),st=new N_(U,He,ie),rt=new M_(Qt),k=new tx(I,T,ue,He,_t,rt),gt=new Ex(I,Qt),xt=new ix,nt=new cx(ue),P=new g_(I,T,Tt,$,_,c),yt=new px(I,$,He),Xt=new bx(U,cn,He,Tt),tt=new v_(U,ue,cn),pt=new D_(U,ue,cn),cn.programs=k.programs,I.capabilities=He,I.extensions=ue,I.properties=Qt,I.renderLists=xt,I.shadowMap=yt,I.state=Tt,I.info=cn}S!==ui&&(H=new O_(S,e.width,e.height,a,s,r));const dt=new Sx(I,U);this.xr=dt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(M){M!==void 0&&(Mt=M,this.setSize(Bt,Yt,!1))},this.getSize=function(M){return M.set(Bt,Yt)},this.setSize=function(M,L,W=!0){if(dt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Bt=M,Yt=L,e.width=Math.floor(M*Mt),e.height=Math.floor(L*Mt),W===!0&&(e.style.width=M+"px",e.style.height=L+"px"),H!==null&&H.setSize(e.width,e.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(Bt*Mt,Yt*Mt).floor()},this.setDrawingBufferSize=function(M,L,W){Bt=M,Yt=L,Mt=W,e.width=Math.floor(M*W),e.height=Math.floor(L*W),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(S===ui){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(lt)},this.getViewport=function(M){return M.copy(jt)},this.setViewport=function(M,L,W,G){M.isVector4?jt.set(M.x,M.y,M.z,M.w):jt.set(M,L,W,G),Tt.viewport(lt.copy(jt).multiplyScalar(se()).round())},this.getScissor=function(M){return M.copy(ye)},this.setScissor=function(M,L,W,G){M.isVector4?ye.set(M.x,M.y,M.z,M.w):ye.set(M,L,W,G),Tt.scissor(Ht.copy(ye).multiplyScalar(se()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(M){Tt.setScissorTest(Te=M)},this.setOpaqueSort=function(M){$t=M},this.setTransparentSort=function(M){ze=M},this.getClearColor=function(M){return M.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,W=!0){let G=0;if(M){let q=!1;if(ut!==null){const Rt=ut.texture.format;q=m.has(Rt)}if(q){const Rt=ut.texture.type,Ot=d.has(Rt),wt=P.getClearColor(),Dt=P.getClearAlpha(),qt=wt.r,ee=wt.g,ge=wt.b;Ot?(y[0]=qt,y[1]=ee,y[2]=ge,y[3]=Dt,U.clearBufferuiv(U.COLOR,0,y)):(A[0]=qt,A[1]=ee,A[2]=ge,A[3]=Dt,U.clearBufferiv(U.COLOR,0,A))}else G|=U.COLOR_BUFFER_BIT}L&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),V=M},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",It,!1),P.dispose(),xt.dispose(),nt.dispose(),ie.dispose(),Qt.dispose(),T.dispose(),$.dispose(),X.dispose(),_t.dispose(),Xt.dispose(),k.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Rs),dt.removeEventListener("sessionend",Ci),Wn.stop()};function zt(M){M.preventDefault(),Xh("WebGLRenderer: Context Lost."),O=!0}function Zt(){Xh("WebGLRenderer: Context Restored."),O=!1;const M=cn.autoReset,L=yt.enabled,W=yt.autoUpdate,G=yt.needsUpdate,q=yt.type;pe(),cn.autoReset=M,yt.enabled=L,yt.autoUpdate=W,yt.needsUpdate=G,yt.type=q}function It(M){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function De(M){const L=M.target;L.removeEventListener("dispose",De),xn(L)}function xn(M){vi(M),Qt.remove(M)}function vi(M){const L=Qt.get(M).programs;L!==void 0&&(L.forEach(function(W){k.releaseProgram(W)}),M.isShaderMaterial&&k.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,W,G,q,Rt){L===null&&(L=me);const Ot=q.isMesh&&q.matrixWorld.determinantAffine()<0,wt=Wi(M,L,W,G,q);Tt.setMaterial(G,Ot);let Dt=W.index,qt=1;if(G.wireframe===!0){if(Dt=X.getWireframeAttribute(W),Dt===void 0)return;qt=2}const ee=W.drawRange,ge=W.attributes.position;let kt=ee.start*qt,we=(ee.start+ee.count)*qt;Rt!==null&&(kt=Math.max(kt,Rt.start*qt),we=Math.min(we,(Rt.start+Rt.count)*qt)),Dt!==null?(kt=Math.max(kt,0),we=Math.min(we,Dt.count)):ge!=null&&(kt=Math.max(kt,0),we=Math.min(we,ge.count));const on=we-kt;if(on<0||on===1/0)return;_t.setup(q,G,wt,W,Dt);let Ze,qe=tt;if(Dt!==null&&(Ze=x.get(Dt),qe=pt,qe.setIndex(Ze)),q.isMesh)G.wireframe===!0?(Tt.setLineWidth(G.wireframeLinewidth*se()),qe.setMode(U.LINES)):qe.setMode(U.TRIANGLES);else if(q.isLine){let Ln=G.linewidth;Ln===void 0&&(Ln=1),Tt.setLineWidth(Ln*se()),q.isLineSegments?qe.setMode(U.LINES):q.isLineLoop?qe.setMode(U.LINE_LOOP):qe.setMode(U.LINE_STRIP)}else q.isPoints?qe.setMode(U.POINTS):q.isSprite&&qe.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))qe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ln=q._multiDrawStarts,Vt=q._multiDrawCounts,Dn=q._multiDrawCount,Pe=Dt?x.get(Dt).bytesPerElement:1,en=Qt.get(G).currentProgram.getUniforms();for(let hn=0;hn<Dn;hn++)en.setValue(U,"_gl_DrawID",hn),qe.render(Ln[hn]/Pe,Vt[hn])}else if(q.isInstancedMesh)qe.renderInstances(kt,on,q.count);else if(W.isInstancedBufferGeometry){const Ln=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Vt=Math.min(W.instanceCount,Ln);qe.renderInstances(kt,on,Vt)}else qe.render(kt,on)};function tn(M,L,W,G){V!==null&&M.isNodeMaterial&&V.setObject(G,M),St===!0&&rt.setState(M,W,!1),M.transparent===!0&&M.side===kn&&M.forceSinglePass===!1?(M.side=Jn,M.needsUpdate=!0,Xn(M,L,G),M.side=Xs,M.needsUpdate=!0,Xn(M,L,G),M.side=kn):Xn(M,L,G)}this.compile=function(M,L,W=null){W===null&&(W=M),V!==null&&V.renderStart(M,L,W),R=nt.get(W),R.init(L),b.push(R),W.traverseVisible(function(q){q.isLight&&q.layers.test(L.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),M!==W&&M.traverseVisible(function(q){q.isLight&&q.layers.test(L.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),R.setupLights(),V!==null&&V.updateLights(R.state.lightsArray),Ft=this.localClippingEnabled,St=rt.init(this.clippingPlanes,Ft),St===!0&&rt.setGlobalState(this.clippingPlanes,L),V!==null&&yt.render(R.state.shadowsArray,W,L);const G=new Set;return M.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Rt=q.material;if(Rt)if(Array.isArray(Rt))for(let Ot=0;Ot<Rt.length;Ot++){const wt=Rt[Ot];tn(wt,W,L,q),G.add(wt)}else tn(Rt,W,L,q),G.add(Rt)}),R=b.pop(),V!==null&&V.renderEnd(),G},this.compileAsync=function(M,L,W=null){const G=this.compile(M,L,W);return new Promise(q=>{function Rt(){if(G.forEach(function(Ot){const Dt=Qt.get(Ot).currentProgram;(Dt===void 0||Dt.isReady())&&G.delete(Ot)}),G.size===0){q(M);return}setTimeout(Rt,10)}ue.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let $s=null;function Io(M){$s&&$s(M)}function Rs(){Wn.stop()}function Ci(){Wn.start()}const Wn=new Vf;Wn.setAnimationLoop(Io),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(M){$s=M,dt.setAnimationLoop(M),M===null?Wn.stop():Wn.start()},dt.addEventListener("sessionstart",Rs),dt.addEventListener("sessionend",Ci),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;V!==null&&V.renderStart(M,L);const W=dt.enabled===!0&&dt.isPresenting===!0,G=H!==null&&(ut===null||W)&&H.begin(I,ut);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(L),L=dt.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,L,ut),R=nt.get(M,b.length),R.init(L),R.state.textureUnits=ie.getTextureUnits(),b.push(R),Ct.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?bt.setFromArrayCamera(L):at.setFromProjectionMatrix(Ct,Ri,L.reversedDepth),Ft=this.localClippingEnabled,St=rt.init(this.clippingPlanes,Ft),C=xt.get(M,v.length),C.init(),v.push(C),this.info.render.frame++,dt.enabled===!0&&dt.isPresenting===!0){const Ot=I.xr.getDepthSensingMesh();Ot!==null&&Qs(Ot,L,-1/0,I.sortObjects)}Qs(M,L,0,I.sortObjects),C.finish(),V!==null&&V.updateLights(R.state.lightsArray),I.sortObjects===!0&&C.sort($t,ze),te=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,te&&P.addToRenderList(C,M),this.info.autoReset===!0&&this.info.reset(),St===!0&&rt.beginShadows();const q=R.state.shadowsArray;if(yt.render(q,M,L),St===!0&&rt.endShadows(),(G&&H.hasRenderPass())===!1){const Ot=C.opaque,wt=C.transmissive;if(R.setupLights(),L.isArrayCamera){const Dt=L.cameras;if(wt.length>0)for(let qt=0,ee=Dt.length;qt<ee;qt++){const ge=Dt[qt];zr(Ot,wt,M,ge)}te&&P.render(M);for(let qt=0,ee=Dt.length;qt<ee;qt++){const ge=Dt[qt];js(C,M,ge,ge.viewport)}}else wt.length>0&&zr(Ot,wt,M,L),te&&P.render(M),js(C,M,L)}ut!==null&&z===0&&(ie.updateMultisampleRenderTarget(ut),ie.updateRenderTargetMipmap(ut)),G&&H.end(I),M.isScene===!0&&M.onAfterRender(I,M,L),_t.resetDefaultState(),J=-1,j=null,b.pop(),b.length>0?(R=b[b.length-1],ie.setTextureUnits(R.state.textureUnits),St===!0&&rt.setGlobalState(I.clippingPlanes,R.state.camera)):R=null,v.pop(),v.length>0?C=v[v.length-1]:C=null,V!==null&&V.renderEnd()};function Qs(M,L,W,G){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)R.pushLight(M),M.castShadow&&R.pushShadow(M);else if(M.isSprite){const Ot=L.isArrayCamera?bt:at;if(!M.frustumCulled||M.intersectsFrustum(Ot)){G&&Gt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ct);const wt=$.update(M),Dt=M.material;Dt.visible&&C.push(M,wt,Dt,W,Gt.z,null,L)}}else if(M.isMesh||M.isLine||M.isPoints){const Ot=L.isArrayCamera?bt:at;if(!M.frustumCulled||M.intersectsFrustum(Ot)){const wt=$.update(M),Dt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Gt.copy(M.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Gt.copy(wt.boundingSphere.center)),Gt.applyMatrix4(M.matrixWorld).applyMatrix4(Ct)),Array.isArray(Dt)){const qt=wt.groups;for(let ee=0,ge=qt.length;ee<ge;ee++){const kt=qt[ee],we=Dt[kt.materialIndex];we&&we.visible&&C.push(M,wt,we,W,Gt.z,kt,L)}}else Dt.visible&&C.push(M,wt,Dt,W,Gt.z,null,L)}}}const Rt=M.children;for(let Ot=0,wt=Rt.length;Ot<wt;Ot++)Qs(Rt[Ot],L,W,G)}function js(M,L,W,G){const{opaque:q,transmissive:Rt,transparent:Ot}=M;R.setupLightsView(W),St===!0&&rt.setGlobalState(I.clippingPlanes,W),G&&Tt.viewport(lt.copy(G)),q.length>0&&Cs(q,L,W),Rt.length>0&&Cs(Rt,L,W),Ot.length>0&&Cs(Ot,L,W),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function zr(M,L,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[G.id]===void 0){const kt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[G.id]=new Oi(1,1,{generateMipmaps:!0,type:kt?Hi:ui,minFilter:bs,samples:Math.max(4,He.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const Rt=R.state.transmissionRenderTarget[G.id],Ot=G.viewport||lt;Rt.setSize(Ot.z*I.transmissionResolutionScale,Ot.w*I.transmissionResolutionScale);const wt=I.getRenderTarget(),Dt=I.getActiveCubeFace(),qt=I.getActiveMipmapLevel();I.setRenderTarget(Rt),I.getClearColor(it),Et=I.getClearAlpha(),Et<1&&I.setClearColor(16777215,.5),I.clear(),te&&P.render(W);const ee=I.toneMapping;I.toneMapping=as;const ge=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),R.setupLightsView(G),St===!0&&rt.setGlobalState(I.clippingPlanes,G),Cs(M,W,G),ie.updateMultisampleRenderTarget(Rt),ie.updateRenderTargetMipmap(Rt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let we=0,on=L.length;we<on;we++){const Ze=L[we],{object:qe,geometry:Ln,material:Vt,group:Dn}=Ze;if(Vt.side===kn&&qe.layers.test(G.layers)){const Pe=Vt.side;Vt.side=Jn,Vt.needsUpdate=!0,No(qe,W,G,Ln,Vt,Dn),Vt.side=Pe,Vt.needsUpdate=!0,kt=!0}}kt===!0&&(ie.updateMultisampleRenderTarget(Rt),ie.updateRenderTargetMipmap(Rt))}I.setRenderTarget(wt,Dt,qt),I.setClearColor(it,Et),ge!==void 0&&(G.viewport=ge),I.toneMapping=ee}function Cs(M,L,W){const G=L.isScene===!0?L.overrideMaterial:null;for(let q=0,Rt=M.length;q<Rt;q++){const Ot=M[q],{object:wt,geometry:Dt,group:qt}=Ot;let ee=Ot.material;ee.allowOverride===!0&&G!==null&&(ee=G),wt.layers.test(W.layers)&&No(wt,L,W,Dt,ee,qt)}}function No(M,L,W,G,q,Rt){V!==null&&q.isNodeMaterial&&V.setObject(M,q),M.onBeforeRender(I,L,W,G,q,Rt),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(I,L,W,G,M,Rt),q.transparent===!0&&q.side===kn&&q.forceSinglePass===!1?(q.side=Jn,q.needsUpdate=!0,I.renderBufferDirect(W,L,G,q,M,Rt),q.side=Xs,q.needsUpdate=!0,I.renderBufferDirect(W,L,G,q,M,Rt),q.side=kn):I.renderBufferDirect(W,L,G,q,M,Rt),M.onAfterRender(I,L,W,G,q,Rt)}function fi(M){let L=0;for(const W of M)W.texture!==null&&L++;return L}function Xn(M,L,W){L.isScene!==!0&&(L=me);const G=Qt.get(M),q=R.state.lights,Rt=R.state.shadowsArray,Ot=q.state.version,wt=k.getParameters(M,q.state,Rt,L,W,R.state.lightProbeGridArray),Dt=k.getProgramCacheKey(wt);let qt=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,G.fog=L.fog;const ee=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=T.get(M.envMap||G.environment,ee),G.envMapRotation=G.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,qt===void 0&&(M.addEventListener("dispose",De),qt=new Map,G.programs=qt,G.programVariants=new Map);let ge=qt.get(Dt);if(ge!==void 0){if(G.currentProgram===ge&&G.lightsStateVersion===Ot)return Gr(M,wt),ge}else wt.uniforms=k.getUniforms(M),V!==null&&M.isNodeMaterial&&V.build(M,W,wt),M.onBeforeCompile(wt,I),ge=k.acquireProgram(wt,Dt),qt.set(Dt,ge),G.uniforms=wt.uniforms;const kt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(kt.clippingPlanes=rt.uniform),Gr(M,wt),G.needsLights=kr(M),G.lightsStateVersion=Ot,G.needsLights&&(kt.ambientLightColor.value=q.state.ambient,kt.lightProbe.value=q.state.probe,kt.sunLights.value=q.state.sun,kt.sunLightShadows.value=q.state.sunShadow,kt.directionalLights.value=q.state.directional,kt.directionalLightShadows.value=q.state.directionalShadow,kt.spotLights.value=q.state.spot,kt.spotLightShadows.value=q.state.spotShadow,kt.rectAreaLights.value=q.state.rectArea,kt.ltc_1.value=q.state.rectAreaLTC1,kt.ltc_2.value=q.state.rectAreaLTC2,kt.pointLights.value=q.state.point,kt.pointLightShadows.value=q.state.pointShadow,kt.hemisphereLights.value=q.state.hemi,kt.sunShadowMatrix.value=q.state.sunShadowMatrix,kt.sunShadowCascade.value=q.state.sunShadowCascade,kt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,kt.spotLightMatrix.value=q.state.spotLightMatrix,kt.spotLightMap.value=q.state.spotLightMap,kt.pointShadowMatrix.value=q.state.pointShadowMatrix),G.numLightProbeGrids=fi(R.state.lightProbeGridArray),G.currentProgram=ge,G.uniformsList=null,ge}function Ps(M,L,W,G,q){const Rt=Qt.get(M),Ot=Rt.currentProgram.id+","+G+","+q;let wt=Rt.programVariants.get(Ot);return wt===void 0?(wt=Xn(M,L,W),Rt.programVariants.set(Ot,wt)):(Rt.currentProgram=wt,Rt.uniformsList=null,Rt.outputColorSpace=G,Rt.toneMapping=q),wt}function Hr(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Ra.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Gr(M,L){const W=Qt.get(M);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function Wi(M,L,W,G,q){L.isScene!==!0&&(L=me),ie.resetTextureUnits();const Rt=L.fog,Ot=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?L.environment:null,wt=ut===null?I.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Le.workingColorSpace,Dt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,qt=T.get(G.envMap||Ot,Dt),ee=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ge=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),kt=!!W.morphAttributes.position,we=!!W.morphAttributes.normal,on=!!W.morphAttributes.color;let Ze=as;G.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ze=I.toneMapping);const qe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ln=qe!==void 0?qe.length:0,Vt=Qt.get(G),Dn=R.state.lights;if(St===!0&&(Ft===!0||M!==j)){const Ke=M===j&&G.id===J;rt.setState(G,M,Ke)}let Pe=!1,en=!1;G.version===Vt.__version?Vt.needsLights&&Vt.lightsStateVersion!==Dn.state.version||q.isBatchedMesh&&Vt.batching===!1||!q.isBatchedMesh&&Vt.batching===!0||q.isBatchedMesh&&Vt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Vt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Vt.instancing===!1||!q.isInstancedMesh&&Vt.instancing===!0||q.isSkinnedMesh&&Vt.skinning===!1||!q.isSkinnedMesh&&Vt.skinning===!0||q.isInstancedMesh&&Vt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Vt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Vt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Vt.instancingMorph===!1&&q.morphTexture!==null||Vt.envMap!==qt||G.fog===!0&&Vt.fog!==Rt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==rt.numPlanes||Vt.numIntersection!==rt.numIntersection)||Vt.vertexAlphas!==ee||Vt.vertexTangents!==ge||Vt.morphTargets!==kt||Vt.morphNormals!==we||Vt.morphColors!==on||Vt.morphTargetsCount!==Ln||Vt.numLightProbeGrids!==fi(R.state.lightProbeGridArray)?Pe=!0:(Vt.outputColorSpace!==wt||Vt.toneMapping!==Ze)&&(en=!0):(Pe=!0,Vt.__version=G.version);let hn=Vt.currentProgram;(Pe===!0||en===!0)&&(hn=en===!0?Ps(G,L,q,wt,Ze):Xn(G,L,q),V&&G.isNodeMaterial&&V.onUpdateProgram(G,hn,Vt));let Xi=!1,In=!1,ii=!1;const Re=hn.getUniforms(),an=Vt.uniforms;if(Tt.useProgram(hn.program)&&(Xi=!0,In=!0,ii=!0),G.id!==J&&(J=G.id,In=!0),Xi||j!==M){Tt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Re.setValue(U,"projectionMatrix",M.projectionMatrix),Re.setValue(U,"viewMatrix",M.matrixWorldInverse);const gn=Re.map.cameraPosition;gn!==void 0&&gn.setValue(U,le.setFromMatrixPosition(M.matrixWorld)),He.logarithmicDepthBuffer&&Re.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Re.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,In=!0,ii=!0)}if(Vt.needsLights&&(Dn.state.sunShadowMap.length>0&&Re.setValue(U,"sunShadowMap",Dn.state.sunShadowMap,ie),Dn.state.directionalShadowMap.length>0&&Re.setValue(U,"directionalShadowMap",Dn.state.directionalShadowMap,ie),Dn.state.spotShadowMap.length>0&&Re.setValue(U,"spotShadowMap",Dn.state.spotShadowMap,ie),Dn.state.pointShadowMap.length>0&&Re.setValue(U,"pointShadowMap",Dn.state.pointShadowMap,ie)),q.isSkinnedMesh){Re.setOptional(U,q,"bindMatrix"),Re.setOptional(U,q,"bindMatrixInverse");const Ke=q.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Re.setValue(U,"boneTexture",Ke.boneTexture,ie))}q.isBatchedMesh&&(Re.setOptional(U,q,"batchingTexture"),Re.setValue(U,"batchingTexture",q._matricesTexture,ie),Re.setOptional(U,q,"batchingIdTexture"),Re.setValue(U,"batchingIdTexture",q._indirectTexture,ie),Re.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&Re.setValue(U,"batchingColorTexture",q._colorsTexture,ie));const Bn=W.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&st.update(q,W,hn),(In||Vt.receiveShadow!==q.receiveShadow)&&(Vt.receiveShadow=q.receiveShadow,Re.setValue(U,"receiveShadow",q.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&L.environment!==null&&(an.envMapIntensity.value=L.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=wx()),In){if(Re.setValue(U,"toneMappingExposure",I.toneMappingExposure),Vt.needsLights&&Ls(an,ii),Rt&&G.fog===!0&&gt.refreshFogUniforms(an,Rt),gt.refreshMaterialUniforms(an,G,Mt,Yt,R.state.transmissionRenderTarget[M.id]),Vt.needsLights&&Vt.numLightProbeGrids>0){const Ke=E;let gn=0;for(const $n of R.state.lightProbeGridArray)$n.texture!==null&&(Ke.textures[gn]=$n.texture,Ke.min[gn]=$n.boundingBox.min,Ke.max[gn]=$n.boundingBox.max,Ke.resolution[gn]=$n.resolution,gn++);for(const $n in Ke)Ke[$n].length=gn;an.probesSH.value=Ke.textures,an.probesMin.value=Ke.min,an.probesMax.value=Ke.max,an.probesResolution.value=Ke.resolution}Ra.upload(U,Hr(Vt),an,ie)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ra.upload(U,Hr(Vt),an,ie),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Re.setValue(U,"center",q.center),Re.setValue(U,"modelViewMatrix",q.modelViewMatrix),Re.setValue(U,"normalMatrix",q.normalMatrix),Re.setValue(U,"modelMatrix",q.matrixWorld),G.uniformsGroups!==void 0){const Ke=G.uniformsGroups;for(let gn=0,$n=Ke.length;gn<$n;gn++){const un=Ke[gn];Xt.update(un,hn),Xt.bind(un,hn)}}return hn}function Ls(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function kr(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(M,L,W){const G=Qt.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Qt.get(M.texture).__webglTexture=L,Qt.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){const W=Qt.get(M);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,W=0){ut=M,Z=L,z=W;let G=null,q=!1,Rt=!1;if(M){const wt=Qt.get(M);if(wt.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(U.FRAMEBUFFER,wt.__webglFramebuffer),lt.copy(M.viewport),Ht.copy(M.scissor),Jt=M.scissorTest,Tt.viewport(lt),Tt.scissor(Ht),Tt.setScissorTest(Jt),J=-1;return}else if(wt.__webglFramebuffer===void 0)ie.setupRenderTarget(M);else if(wt.__hasExternalTextures)ie.rebindTextures(M,Qt.get(M.texture).__webglTexture,Qt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ee=M.depthTexture;if(wt.__boundDepthTexture!==ee){if(ee!==null&&Qt.has(ee)&&(M.width!==ee.image.width||M.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(M)}}const Dt=M.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Rt=!0);const qt=Qt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(qt[L])?G=qt[L][W]:G=qt[L],q=!0):M.samples>0&&ie.useMultisampledRTT(M)===!1?G=Qt.get(M).__webglMultisampledFramebuffer:Array.isArray(qt)?G=qt[W]:G=qt,lt.copy(M.viewport),Ht.copy(M.scissor),Jt=M.scissorTest}else lt.copy(jt).multiplyScalar(Mt).floor(),Ht.copy(ye).multiplyScalar(Mt).floor(),Jt=Te;if(W!==0&&(G=K),Tt.bindFramebuffer(U.FRAMEBUFFER,G)&&Tt.drawBuffers(M,G),Tt.viewport(lt),Tt.scissor(Ht),Tt.setScissorTest(Jt),q){const wt=Qt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,wt.__webglTexture,W)}else if(Rt){const wt=L;for(let Dt=0;Dt<M.textures.length;Dt++){const qt=Qt.get(M.textures[Dt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Dt,qt.__webglTexture,W,wt)}}else if(M!==null&&W!==0){const wt=Qt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wt.__webglTexture,W)}J=-1};function tr(M){const L=Qt.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=He.textureFormatReadable(M.format),L.__typeReadable=He.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,W,G,q,Rt,Ot,wt=0){if(!(M&&M.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Qt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ot!==void 0&&(Dt=Dt[Ot],Array.isArray(Dt)&&(Dt=Dt[0])),Dt){Tt.bindFramebuffer(U.FRAMEBUFFER,Dt);try{const qt=M.textures[wt],ee=qt.format,ge=qt.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+wt);const kt=tr(qt);if(kt.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-G&&W>=0&&W<=M.height-q&&U.readPixels(L,W,G,q,ct.convert(ee),ct.convert(ge),Rt)}finally{const qt=ut!==null?Qt.get(ut).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(M,L,W,G,q,Rt,Ot,wt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Qt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ot!==void 0&&(Dt=Dt[Ot],Array.isArray(Dt)&&(Dt=Dt[0])),Dt)if(L>=0&&L<=M.width-G&&W>=0&&W<=M.height-q){Tt.bindFramebuffer(U.FRAMEBUFFER,Dt);const qt=M.textures[wt],ee=qt.format,ge=qt.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+wt);const kt=tr(qt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,we),U.bufferData(U.PIXEL_PACK_BUFFER,Rt.byteLength,U.STREAM_READ),U.readPixels(L,W,G,q,ct.convert(ee),ct.convert(ge),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const on=ut!==null?Qt.get(ut).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,on);const Ze=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ip(U,Ze,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,we),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Rt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(we),U.deleteSync(Ze),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,W=0){const G=Math.pow(2,-W),q=Math.floor(M.image.width*G),Rt=Math.floor(M.image.height*G),Ot=L!==null?L.x:0,wt=L!==null?L.y:0;ie.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,Ot,wt,q,Rt),Tt.unbindTexture()},this.copyTextureToTexture=function(M,L,W=null,G=null,q=0,Rt=0){let Ot,wt,Dt,qt,ee,ge,kt,we,on;const Ze=M.isCompressedTexture?M.mipmaps[Rt]:M.image;if(W!==null)Ot=W.max.x-W.min.x,wt=W.max.y-W.min.y,Dt=W.isBox3?W.max.z-W.min.z:1,qt=W.min.x,ee=W.min.y,ge=W.isBox3?W.min.z:0;else{const Re=Math.pow(2,-q);Ot=Math.floor(Ze.width*Re),wt=Math.floor(Ze.height*Re),M.isDataArrayTexture?Dt=Ze.depth:M.isData3DTexture?Dt=Math.floor(Ze.depth*Re):Dt=1,qt=0,ee=0,ge=0}G!==null?(kt=G.x,we=G.y,on=G.z):(kt=0,we=0,on=0);const qe=ct.convert(L.format),Ln=ct.convert(L.type);let Vt;L.isData3DTexture?(ie.setTexture3D(L,0),Vt=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(ie.setTexture2DArray(L,0),Vt=U.TEXTURE_2D_ARRAY):(ie.setTexture2D(L,0),Vt=U.TEXTURE_2D),Tt.activeTexture(U.TEXTURE0),Tt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),Tt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),Tt.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const Dn=Tt.getParameter(U.UNPACK_ROW_LENGTH),Pe=Tt.getParameter(U.UNPACK_IMAGE_HEIGHT),en=Tt.getParameter(U.UNPACK_SKIP_PIXELS),hn=Tt.getParameter(U.UNPACK_SKIP_ROWS),Xi=Tt.getParameter(U.UNPACK_SKIP_IMAGES);Tt.pixelStorei(U.UNPACK_ROW_LENGTH,Ze.width),Tt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ze.height),Tt.pixelStorei(U.UNPACK_SKIP_PIXELS,qt),Tt.pixelStorei(U.UNPACK_SKIP_ROWS,ee),Tt.pixelStorei(U.UNPACK_SKIP_IMAGES,ge);const In=M.isDataArrayTexture||M.isData3DTexture,ii=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){const Re=Qt.get(M),an=Qt.get(L),Bn=Qt.get(Re.__renderTarget),Ke=Qt.get(an.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,Bn.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let gn=0;gn<Dt;gn++)In&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qt.get(M).__webglTexture,q,ge+gn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qt.get(L).__webglTexture,Rt,on+gn)),U.blitFramebuffer(qt,ee,qt+Ot,ee+wt,kt,we,kt+Ot,we+wt,U.DEPTH_BUFFER_BIT,U.NEAREST);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(q!==0||M.isRenderTargetTexture||Qt.has(M)){const Re=Qt.get(M),an=Qt.get(L);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,D),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Y);for(let Bn=0;Bn<Dt;Bn++)In?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.__webglTexture,q,ge+Bn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Re.__webglTexture,q),ii?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,an.__webglTexture,Rt,on+Bn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,an.__webglTexture,Rt),q!==0?U.blitFramebuffer(qt,ee,qt+Ot,ee+wt,kt,we,kt+Ot,we+wt,U.COLOR_BUFFER_BIT,U.NEAREST):ii?U.copyTexSubImage3D(Vt,Rt,kt,we,on+Bn,qt,ee,Ot,wt):U.copyTexSubImage2D(Vt,Rt,kt,we,qt,ee,Ot,wt);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ii?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Vt,Rt,kt,we,on,Ot,wt,Dt,qe,Ln,Ze.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(Vt,Rt,kt,we,on,Ot,wt,Dt,qe,Ze.data):U.texSubImage3D(Vt,Rt,kt,we,on,Ot,wt,Dt,qe,Ln,Ze):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Rt,kt,we,Ot,wt,qe,Ln,Ze.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Rt,kt,we,Ze.width,Ze.height,qe,Ze.data):U.texSubImage2D(U.TEXTURE_2D,Rt,kt,we,Ot,wt,qe,Ln,Ze);Tt.pixelStorei(U.UNPACK_ROW_LENGTH,Dn),Tt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Pe),Tt.pixelStorei(U.UNPACK_SKIP_PIXELS,en),Tt.pixelStorei(U.UNPACK_SKIP_ROWS,hn),Tt.pixelStorei(U.UNPACK_SKIP_IMAGES,Xi),Rt===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&U.generateMipmap(Vt),Tt.unbindTexture()},this.initRenderTarget=function(M){Qt.get(M).__webglFramebuffer===void 0&&ie.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ie.setTextureCube(M,0):M.isData3DTexture?ie.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ie.setTexture2DArray(M,0):ie.setTexture2D(M,0),Tt.unbindTexture()},this.resetState=function(){Z=0,z=0,ut=null,Tt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}}class Rx extends bf{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new We;t.deleteAttribute("uv");const e=new Ao({side:Jn}),n=new Ao,s=new wr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ft(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Lp(t,n,6),a=new vn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new ft(t,br(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new ft(t,br(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new ft(t,br(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const p=new ft(t,br(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const f=new ft(t,br(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const u=new ft(t,br(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function br(i){return new Em({color:0,emissive:16777215,emissiveIntensity:i})}const tf={type:"change"},lh={type:"start"},td={type:"end"},Sa=new Co,ef=new ss,Cx=Math.cos(70*cp.DEG2RAD),En=new N,jn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zl=1e-6;class Px extends Im{constructor(t,e=null){super(t,e),this.state=Xe.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rr.ROTATE,MIDDLE:Rr.DOLLY,RIGHT:Rr.PAN},this.touches={ONE:Ar.ROTATE,TWO:Ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Gi,this._lastTargetPosition=new N,this._quat=new Gi().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lu,this._sphericalDelta=new Lu,this._scale=1,this._panOffset=new N,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new N,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Dx.bind(this),this._onPointerDown=Lx.bind(this),this._onPointerUp=Ix.bind(this),this._onContextMenu=Hx.bind(this),this._onMouseWheel=Fx.bind(this),this._onKeyDown=Ox.bind(this),this._onTouchStart=Bx.bind(this),this._onTouchMove=zx.bind(this),this._onMouseDown=Nx.bind(this),this._onMouseMove=Ux.bind(this),this._interceptControlDown=Gx.bind(this),this._interceptControlUp=kx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Xe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tf),this.update(),this.state=Xe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;En.copy(e).sub(this.target),En.applyQuaternion(this._quat),this._spherical.setFromVector3(En),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=jn:n>Math.PI&&(n-=jn),s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(En.setFromSpherical(this._spherical),En.applyQuaternion(this._quatInverse),e.copy(this.target).add(En),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=En.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=En.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Sa.origin.copy(this.object.position),Sa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sa.direction))<Cx?this.object.lookAt(this.target):(ef.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sa.intersectPlane(ef,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zl||this._lastTargetPosition.distanceToSquared(this.target)>Zl?(this.dispatchEvent(tf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?jn/60*this.autoRotateSpeed*t:jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){En.setFromMatrixColumn(e,0),En.multiplyScalar(-t),this._panOffset.add(En)}_panUp(t,e){this.screenSpacePanning===!0?En.setFromMatrixColumn(e,1):(En.setFromMatrixColumn(e,0),En.crossVectors(this.object.up,En)),En.multiplyScalar(t),this._panOffset.add(En)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;En.copy(s).sub(this.target);let r=En.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/e.clientHeight),this._rotateUp(jn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/e.clientHeight),this._rotateUp(jn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Lx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Dx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ix(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(td),this.state=Xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Nx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Rr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Xe.DOLLY;break;case Rr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Xe.ROTATE}break;case Rr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(lh)}function Ux(i){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Fx(i){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(i.preventDefault(),this.dispatchEvent(lh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(td))}function Ox(i){this.enabled!==!1&&this._handleKeyDown(i)}function Bx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ar.ROTATE:if(this.enableRotate===!1){this.state=Xe.NONE;break}this._handleTouchStartRotate(i),this.state=Xe.TOUCH_ROTATE;break;case Ar.PAN:if(this.enablePan===!1){this.state=Xe.NONE;break}this._handleTouchStartPan(i),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Xe.TOUCH_DOLLY_PAN;break;case Ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(lh)}function zx(i){switch(this._trackPointer(i),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Xe.NONE}}function Hx(i){this.enabled!==!1&&i.preventDefault()}function Gx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ao=new N;function mi(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;ao.copy(t),ao[n]=0,ao.normalize();const l=.5*o/(o+a),h=1-ao.angleTo(i)/c;return Math.sign(ao[e])===1?h*l:a/(o+a)+l+l*(1-h)}class vo extends We{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new N,l=new N,h=new N(t,e,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,_=p.length/6,S=new N,m=.5/o;for(let d=0,y=0;d<p.length;d+=3,y+=2)switch(c.fromArray(p,d),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),p[d+0]=h.x*Math.sign(c.x)+l.x*r,p[d+1]=h.y*Math.sign(c.y)+l.y*r,p[d+2]=h.z*Math.sign(c.z)+l.z*r,f[d+0]=l.x,f[d+1]=l.y,f[d+2]=l.z,Math.floor(d/_)){case 0:S.set(1,0,0),u[y+0]=mi(S,l,"z","y",r,n),u[y+1]=1-mi(S,l,"y","z",r,e);break;case 1:S.set(-1,0,0),u[y+0]=1-mi(S,l,"z","y",r,n),u[y+1]=1-mi(S,l,"y","z",r,e);break;case 2:S.set(0,1,0),u[y+0]=1-mi(S,l,"x","z",r,t),u[y+1]=mi(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),u[y+0]=1-mi(S,l,"x","z",r,t),u[y+1]=1-mi(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),u[y+0]=1-mi(S,l,"x","y",r,t),u[y+1]=1-mi(S,l,"y","x",r,e);break;case 5:S.set(0,0,-1),u[y+0]=mi(S,l,"x","y",r,t),u[y+1]=1-mi(S,l,"y","x",r,e);break}}static fromJSON(t){return new vo(t.width,t.height,t.depth,t.segments,t.radius)}}const ci={width:1.2,height:.6,joint:.0036};function Hs(i,t){return(i%t+t)%t-t}function Vx(i,t){const e=[];for(let n=t[0];n<i.u1;n+=ci.width)for(let s=t[1];s<i.v1;s+=ci.height){const r={u0:Math.max(n,i.u0),u1:Math.min(n+ci.width,i.u1),v0:Math.max(s,i.v0),v1:Math.min(s+ci.height,i.v1)};r.u1>r.u0+1e-4&&r.v1>r.v0+1e-4&&e.push(r)}return e}function Kl(i,t,e){return e&&(i||t)?1:0}function Wx(i,t){return{shower:i&&t?1:0,wc:i&&t?1:0}}const Wa=i=>i<0?0:i>1?1:i,Ve=(i,t,e)=>Wa((i-t)/(e-t)),Yn=i=>1-Math.pow(1-Wa(i),3),ai=i=>(i=Wa(i),i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2),es=(i,t,e,n=.06)=>Ve(i,t,t+n)*(1-Ve(i,e-n,e));function Ws(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Xx(i,t){if(t.u0>=i.u1||t.u1<=i.u0||t.v0>=i.v1||t.v1<=i.v0)return[i];const e=[];t.v0>i.v0&&e.push({u0:i.u0,v0:i.v0,u1:i.u1,v1:t.v0}),t.v1<i.v1&&e.push({u0:i.u0,v0:t.v1,u1:i.u1,v1:i.v1});const n=Math.max(i.v0,t.v0),s=Math.min(i.v1,t.v1);return t.u0>i.u0&&e.push({u0:i.u0,v0:n,u1:t.u0,v1:s}),t.u1<i.u1&&e.push({u0:t.u1,v0:n,u1:i.u1,v1:s}),e}function ns(i,t=[]){let e=i;for(const n of t)e=e.flatMap(s=>Xx(s,n));return e.filter(n=>n.u1-n.u0>.012&&n.v1-n.v0>.012)}function Lo(i){const t=document.createElement("canvas");return t.width=t.height=i,[t,t.getContext("2d")]}function Do(i,t=!0){const e=new Up(i);return t&&(e.colorSpace=ei),e.wrapS=e.wrapT=Ca,e.anisotropy=8,e}function qx(){const[t,e]=Lo(1024),n=Ws(11);e.fillStyle="#efece6",e.fillRect(0,0,1024,1024);const s=o=>{for(const a of[-1024,0,1024])for(const c of[-1024,0,1024])o(a,c)};for(let o=0;o<90;o++){const a=n()*1024,c=n()*1024,l=90+n()*300,h=n()<.55,p=.05+n()*.12,f=h?"206,198,186":"252,251,248";s((u,_)=>{const S=e.createRadialGradient(a+u,c+_,0,a+u,c+_,l);S.addColorStop(0,`rgba(${f},${h?p:p*1.5})`),S.addColorStop(1,`rgba(${f},0)`),e.fillStyle=S,e.fillRect(a+u-l,c+_-l,l*2,l*2)})}const r=(o,a,c,l,h)=>{let p=n()*1024,f=n()*1024,u=-.7+(n()-.5)*.5,_=0;const S=[[p,f]];for(let d=0;d<c;d++)_=_*.6+(n()-.5)*h,u+=_*.22+(-.7-u)*.03,p+=Math.cos(u)*l,f+=Math.sin(u)*l,S.push([p,f]);const m=[[o*12,.02],[o*5,.045],[o*2,.1],[o*.7,.3]];for(const[d,y]of m)s((A,E)=>{e.beginPath(),e.moveTo(S[0][0]+A,S[0][1]+E);for(let C=1;C<S.length-1;C++){const R=S[C],v=S[C+1];e.quadraticCurveTo(R[0]+A,R[1]+E,(R[0]+v[0])/2+A,(R[1]+v[1])/2+E)}e.strokeStyle=`rgba(${a},${y})`,e.lineWidth=d,e.lineJoin="round",e.lineCap="round",e.stroke()})};for(let o=0;o<3;o++)r(2.4,"128,120,110",95,14,.5);for(let o=0;o<6;o++)r(.8,"158,150,138",55,12,.7);for(let o=0;o<3;o++)r(.9,"178,148,102",60,12,.6);return Do(t)}function Yx(i,t,e){const[s,r]=Lo(512),o=Ws(e);r.fillStyle=i,r.fillRect(0,0,512,512);for(let a=0;a<40;a++){const c=o()*512,l=o()*512,h=30+o()*120,p=r.createRadialGradient(c,l,0,c,l,h),f=o()<.5?"0,0,0":"255,255,255";p.addColorStop(0,`rgba(${f},${.03+o()*.04})`),p.addColorStop(1,`rgba(${f},0)`),r.fillStyle=p,r.fillRect(c-h,l-h,h*2,h*2)}for(let a=0;a<t;a++){const c=o()<.5?0:255;r.fillStyle=`rgba(${c},${c},${c},${.05+o()*.12})`;const l=o()*2.2+.4;r.fillRect(o()*512,o()*512,l,l)}return Do(s)}function Zx(){const[i,t]=Lo(32);for(let e=0;e<32;e++){const n=.5+.5*Math.cos(e/32*Math.PI*2),s=Math.round(150+n*90);t.fillStyle=`rgb(${s},${s-2},${s-6})`,t.fillRect(0,e,32,1)}return Do(i,!1)}function Kx(){const[t,e]=Lo(256),n=Ws(21);e.fillStyle="#ffffff",e.fillRect(0,0,256,256);for(let s=0;s<900;s++){const r=n()*256,o=n()*256,a=n()*Math.PI,c=4+n()*10;e.strokeStyle=`rgba(90,90,90,${.08+n()*.12})`,e.lineWidth=.6,e.beginPath(),e.moveTo(r,o),e.lineTo(r+Math.cos(a)*c,o+Math.sin(a)*c),e.stroke()}for(let s=0;s<40;s++)e.fillStyle=`rgba(0,0,0,${.02+n()*.03})`,e.fillRect(0,n()*256,256,2+n()*5);return Do(t)}function Jx(){const[t,e]=Lo(256),n=Ws(31);e.fillStyle="#ffffff",e.fillRect(0,0,256,256);for(let s=0;s<2600;s++){const r=200+Math.floor(n()*55);e.fillStyle=`rgba(${r-30},${r-20},${r},${.25+n()*.3})`,e.fillRect(n()*256,n()*256,1+n()*2,1+n()*2)}return e.fillStyle="rgba(60,90,120,0.22)",e.fillRect(0,0,10,256),e.fillRect(246,0,10,256),Do(t)}class $x{group=new Se;def;constructor(t){this.def=t;const e=new N(...t.u),n=new N(...t.v),s=new N().crossVectors(e,n);this.group.quaternion.setFromRotationMatrix(new Be().makeBasis(e,n,s)),this.group.position.set(...t.o)}world(t,e,n,s=new N){return this.group.localToWorld(s.set(t,e,n))}}function Gs(i,t,e,n,s,r,o=!1){o?(i.moveTo(t+r,e),i.quadraticCurveTo(t,e,t,e+r),i.lineTo(t,e+s-r),i.quadraticCurveTo(t,e+s,t+r,e+s),i.lineTo(t+n-r,e+s),i.quadraticCurveTo(t+n,e+s,t+n,e+s-r),i.lineTo(t+n,e+r),i.quadraticCurveTo(t+n,e,t+n-r,e),i.lineTo(t+r,e)):(i.moveTo(t+r,e),i.lineTo(t+n-r,e),i.quadraticCurveTo(t+n,e,t+n,e+r),i.lineTo(t+n,e+s-r),i.quadraticCurveTo(t+n,e+s,t+n-r,e+s),i.lineTo(t+r,e+s),i.quadraticCurveTo(t,e+s,t,e+s-r),i.lineTo(t,e+r),i.quadraticCurveTo(t,e,t+r,e))}const ti=dd,sn=3.2,ve=Oe.roomDepth,xe=2.6,re=.01,Me=.006,Pn=ci.joint,Ni=2.6,Zn=1.4,ks=1.2,dn=1.5,gi=.8,li=.56,Fe=.24,_n=1.75,_i=_n-Me-re,lo=Oe.wcZ,Kt={z0:1.95,z1:2.7,y0:1.25,y1:1.65,x0:.1},ke={z0:1.95,z1:2.7,y0:1.8,y1:2.4,x0:.06},co=1.02,Qx={standard:{x0:.4,x1:1,y0:1,y1:1.6,shelves:[1.3]},large:{x0:.15,x1:1.25,y0:.85,y1:1.75,shelves:[1.15,1.45]},full:{x0:.85,x1:1.25,y0:0,y1:xe,shelves:[.9,1.3,1.7]}};function tM(i,t,e,n){const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=Qx[n.niche],o={u0:r.x0,v0:r.y0,u1:r.x1,v1:r.y1},a=[(r.x0+r.x1)/2,Math.min(r.y1,r.y0+.75),-.04],c=new Ax({canvas:t,antialias:!0,powerPreference:"high-performance"});c.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),c.toneMapping=Xc,c.toneMappingExposure=.86,c.outputColorSpace=ei,c.shadowMap.enabled=!0,c.shadowMap.type=po;const l=new bf,h=new ae("#17181a"),p=new ae("#0c0c0e"),f=h.clone();l.background=f;const u=new Ro(c),_=u.fromScene(new Rx,.04).texture;l.environment=_,l.environmentIntensity=.45;const S=new hi(40,1,.03,60),m=new wm(16774890,2763566,.25);l.add(m);const d=new Ru(16774114,1.75);d.position.set(5.6,6.5,6.2),d.target.position.set(1.4,0,1.2),d.castShadow=!0,d.shadow.mapSize.set(2048,2048),d.shadow.camera.left=-4,d.shadow.camera.right=4,d.shadow.camera.top=4,d.shadow.camera.bottom=-4,d.shadow.camera.near=1,d.shadow.camera.far=20,d.shadow.bias=-5e-4,d.shadow.normalBias=.02,d.shadow.radius=4,l.add(d,d.target);const y=new Ru(14674175,.45);y.position.set(-2,3,6),l.add(y);const A=(g,w,F,B,Q)=>{const et=new Rm(16765594,0,5,Q,.65,1.4);return et.position.set(g,xe-.02,w),et.target.position.set(F,0,B),l.add(et,et.target),et},E=A(.7,.6,.7,.55,.75),C=A(2.35,.45,2.35,.45,.85),R=A(.75,2.3,.4,2.3,.8),v=new wr(16763274,0,1.1,1.6);v.position.set(a[0],a[1],-.02);const b=new wr(16763274,0,1,1.6);b.position.set(.2,1.5,lo);const H=new wr(16753746,0,2.6,1.5);H.position.set(2.95,.75,.9);const I=new wr(16777215,0,3.5,1.5);l.add(v,b,H,I);const O=qx(),V=Yx("#8f8b84",9e3,3);V.repeat.set(3,3);const K=Zx(),D=Kx();D.repeat.set(4,4);const Y=Jx(),Z=[O,V,K,D,Y,_,u],z=g=>{const w=new Ao(g);return Z.push(w),w},ut=g=>{const w=new ym(g);return Z.push(w),w},J=g=>{const w=new Aa(g);return Z.push(w),w},j=ut({map:O,roughness:.14,clearcoat:.55,clearcoatRoughness:.08}),lt=z({color:"#c4c0b7",map:K,bumpMap:K,bumpScale:2,roughness:.95}),Ht=z({map:K,bumpMap:K,bumpScale:3,roughness:.95}),Jt=z({color:"#bdb6aa",roughness:.92}),it=z({map:V,color:"#b9b4ac",roughness:.96}),Et=z({map:V,color:"#9e9a92",roughness:.97}),Bt=z({color:"#26272b",roughness:.9}),Yt=z({map:V,color:"#f1ede6",roughness:.95}),Mt=z({map:V,color:"#c4cabf",roughness:.9}),$t=z({map:V,color:"#c9c4bb",roughness:.99,transparent:!0,opacity:.9,depthWrite:!1}),ze=z({color:"#8d8981",roughness:.32,transparent:!0,opacity:.82,depthWrite:!1}),jt=z({map:V,color:"#c9bda8",roughness:.97}),ye=z({color:"#9cc3d0",roughness:.55}),Te=z({color:"#4f8297",roughness:.5}),at=z({map:D,color:"#b3b7b5",roughness:.9}),bt=z({map:D,color:"#8f9593",roughness:.88}),St=z({color:"#f2f3f1",roughness:.8}),Ft=z({map:Y,color:"#e6ecef",roughness:.95,side:kn}),Ct=z({map:Y,color:"#d5dee3",roughness:.95,side:kn}),le=z({color:"#e4e6e4",roughness:.85}),Gt=z({color:"#d0d4d7",metalness:1,roughness:.26,envMapIntensity:1.8}),me=z({color:"#c9ccce",metalness:1,roughness:.18,envMapIntensity:2.2}),te=z({color:"#d4ad66",metalness:.7,roughness:.3,envMapIntensity:1.8}),se=z({color:"#2a2b2f",roughness:.6}),U=ut({color:"#f8f7f4",roughness:.12,clearcoat:1,clearcoatRoughness:.05}),fn=ut({color:"#dceef0",roughness:.02,metalness:.05,transparent:!0,opacity:0,side:kn,depthWrite:!1}),ue=ut({color:"#9fd0d6",roughness:.04,transparent:!0,opacity:0,depthWrite:!1,side:kn}),He=z({color:"#e2ddd4",roughness:.35}),Tt=J({color:"#2a2b2f",toneMapped:!1}),cn=J({color:"#2a2b2f",toneMapped:!1}),Qt=J({color:"#ffcf7a",toneMapped:!1,transparent:!0,opacity:.95}),ie=J({color:"#ff3b30",toneMapped:!1,transparent:!0,opacity:0}),T=J({color:"#b99350",transparent:!0,opacity:0,side:kn,depthWrite:!1}),x=new Nc({color:"#b99350",transparent:!0,opacity:.85}),X=new Nc({color:"#e9c27a",transparent:!0,opacity:0});Z.push(x,X);const $=(g,w=!0)=>(g.castShadow=w,g.receiveShadow=!0,g),k=(g,w,F,B,Q,et,vt,ht=l)=>{const Pt=$(new ft(new We(B-g,Q-w,et-F),vt));return Pt.position.set((g+B)/2,(w+Q)/2,(F+et)/2),ht.add(Pt),Pt},gt=(g,w,F,B,Q)=>{const et=g.getAttribute("position"),vt=g.getAttribute("uv");for(let ht=0;ht<et.count;ht++)vt.setXY(ht,(w+et.getX(ht)+B)/Ni,(F+et.getY(ht)+Q)/Ni)},xt=[it,it,Bt,it,it,it];k(-.18,-.24,-.18,sn,-.06,ve,[Et,Et,Et,Et,Bt,Et]),k(Zn,-.06,0,sn,0,ve,Et),k(0,-.06,ks,Zn,0,ve,Et),k(-.18,-.24,-.18,r.x0,xe,0,xt),k(r.x1,-.24,-.18,sn,xe,0,xt),k(r.x0,-.24,-.18,r.x1,r.y0,0,xt),xe-r.y1>.001&&k(r.x0,r.y1,-.18,r.x1,xe,0,xt),k(r.x0,r.y0,-.18,r.x1,r.y1,-.12,xt);for(const g of ns([{u0:0,v0:-.06,u1:sn,v1:xe}],[o])){const w=new ft(new Fn(g.u1-g.u0,g.v1-g.v0),it);w.position.set((g.u0+g.u1)/2,(g.v0+g.v1)/2,3e-4),w.receiveShadow=!0,l.add(w)}k(-.18,-.24,0,0,xe,ve,xt);const nt=new Se;l.add(nt),k(dn,0,0,sn,.1,gi,Yt,nt);for(const g of ns([{u0:dn,u1:sn,v0:.1,v1:li}],[{u0:dn-Me-re+.6,u1:dn-Me-re+.6+Oe.hatchWidth,v0:.1,v1:.1+Oe.hatchHeight}]))k(g.u0,g.v0,gi-.06,g.u1,g.v1,gi,Yt,nt);k(dn,.1,0,dn+.06,li,gi-.06,Yt,nt),k(dn+.06,.1,0,sn,li,.05,Yt,nt),k(sn-.07,.1,.05,sn,li,gi-.06,Yt,nt);const rt=[{u0:Oe.accessoriesZ-.09,u1:Oe.accessoriesZ+.09,v0:Oe.brushBottom,v1:Oe.paperTop}];k(0,0,_n,.08,Kt.y0,ve,Mt);for(const g of ns([{u0:_n,u1:ve,v0:0,v1:Kt.y0}],rt))k(.08,g.v0,g.u0,Fe,g.v1,g.u1,Mt);k(0,Kt.y0,_n,Kt.x0,Kt.y1,ve,Mt),k(Kt.x0,Kt.y0,_n,Fe,Kt.y1,Kt.z0,Mt),k(Kt.x0,Kt.y0,Kt.z1,Fe,Kt.y1,ve,Mt),k(0,Kt.y1,_n,Fe,ke.y0,ve,Mt),k(0,ke.y0,_n,ke.x0,ke.y1,ve,Mt),k(ke.x0,ke.y0,_n,Fe,ke.y1,ke.z0,Mt),k(ke.x0,ke.y0,ke.z1,Fe,ke.y1,ve,Mt),k(0,ke.y1,_n,Fe,xe,ve,Mt);const yt=z({color:"#f3f0ea",roughness:.6});k(ke.x0,ke.y0,ke.z0,ke.x0+.006,ke.y1,ke.z1,yt),k(ke.x0,ke.y0+.29,ke.z0,Fe-.02,ke.y0+.302,ke.z1,yt);const P=new Se;P.visible=!1,l.add(P);{const g=$(new ft(new Qe(.025,.025,.14,18),se));g.position.set(.14,ke.y0+.07,2.15);const w=$(new ft(new Qe(.02,.02,.1,18),te));w.position.set(.15,ke.y0+.352,2.45);const F=$(new ft(new vo(.1,.18,.14,2,.01),z({color:"#d9d0c3",roughness:1})));F.position.set(.13,ke.y0+.09,2.5),P.add(g,w,F)}{const g=[],w=(B,Q)=>g.push(...B,...Q);w([-.18,xe,-.18],[sn,xe,-.18]),w([0,xe,0],[sn,xe,0]),w([sn,xe,-.18],[sn,xe,0]),w([-.18,xe,-.18],[-.18,xe,ve]),w([0,xe,0],[0,xe,_n]),w([-.18,xe,ve],[Fe,xe,ve]),w([Fe,xe,_n],[Fe,xe,ve]),w([0,xe,_n],[Fe,xe,_n]),w([-.18,-.24,ve],[sn,-.24,ve]),w([sn,-.24,-.18],[sn,-.24,ve]),w([-.18,-.24,ve],[-.18,xe,ve]),w([sn,-.24,-.18],[sn,xe,-.18]);const F=new Tn;F.setAttribute("position",new rn(g,3)),l.add(new Ip(F,x))}{const g=new ft(new Fn(40,40),new gm({opacity:.45}));Z.push(g.material),g.rotation.x=-Math.PI/2,g.position.y=-.241,g.receiveShadow=!0,l.add(g)}const st=ve-_i,tt={u0:.6,v0:.6,u1:st,v1:1.2},pt={u0:ve-Oe.accessoriesZ-.09,u1:ve-Oe.accessoriesZ+.09,v0:Oe.brushBottom,v1:Oe.brushTop},ct={...pt,v0:Oe.paperBottom,v1:Oe.paperTop},_t=Oe.ventTile+Oe.ventGap*2,Xt={u0:_i-Oe.ventZ-_t/2,u1:_i-Oe.ventZ+_t/2,v0:2.4-_t/2,v1:2.4+_t/2},pe={u0:.6,u1:.6+Oe.hatchWidth,v0:.1,v1:.1+Oe.hatchHeight},dt={u0:ve-Kt.z1,v0:Kt.y0,u1:ve-Kt.z0,v1:Kt.y1},zt={u0:ve-ke.z1,v0:ke.y0,u1:ve-ke.z0,v1:ke.y1},Zt=r.x1-r.x0,It=(g,w)=>({u0:g.u0+w,v0:g.v0+w,u1:g.u1-w,v1:g.v1-w}),De=r.y1-r.y0,xn=[{id:"floor",o:[0,0,ve],u:[1,0,0],v:[0,0,-1],w:sn,h:ve,tw:1.2,th:.6,off:[0,Hs(ve-.5,.6)],tex:[.37,.21],holes:[{u0:.06,v0:ve-.13,u1:Zn-.06,v1:ve},{u0:dn-Me-re,v0:ve-gi-Me-re,u1:sn,v1:ve},{u0:0,v0:0,u1:Fe+Me+re,v1:ve-_i}]},{id:"back",o:[0,0,0],u:[1,0,0],v:[0,1,0],w:sn,h:xe,tex:[0,0],holes:[It(o,Me),{u0:dn-Me-re,v0:0,u1:sn,v1:li+.025}]},{id:"left",o:[0,0,_i],u:[0,0,-1],v:[0,1,0],w:_i,h:xe,off:[Hs(_i-.5,1.2),0],tex:[1.31,.47],holes:[Xt]},{id:"nicheBack",o:[r.x0,r.y0,-.12],u:[1,0,0],v:[0,1,0],w:Zt,h:De,tex:[r.x0,r.y0]},{id:"nicheBottom",o:[r.x0,r.y0,Me+re],u:[1,0,0],v:[0,0,-1],w:Zt,h:.12+Me+re,tex:[r.x0,r.y0-.12]},{id:"nicheTop",o:[r.x0,r.y1,-.12],u:[1,0,0],v:[0,0,1],w:Zt,h:.12+Me+re,tex:[r.x0,r.y1]},{id:"nicheL",o:[r.x0,r.y0,Me+re],u:[0,0,-1],v:[0,1,0],w:.12+Me+re,h:De,tex:[r.x0-.12,r.y0]},{id:"nicheR",o:[r.x1,r.y0,-.12],u:[0,0,1],v:[0,1,0],w:.12+Me+re,h:De,tex:[r.x1,r.y0]},{id:"preFront",o:[Fe,0,ve],u:[0,0,-1],v:[0,1,0],w:st,h:xe,off:[-.6,0],tex:[.9,.35],holes:[It(dt,Me),zt,pt,ct],skip:[tt]},{id:"preSide",o:[Fe,0,_n],u:[-1,0,0],v:[0,1,0],w:Fe,h:xe,tex:[.9+st,.35]},{id:"wnBack",o:[Kt.x0,Kt.y0,Kt.z1],u:[0,0,-1],v:[0,1,0],w:Kt.z1-Kt.z0,h:Kt.y1-Kt.y0,tex:[1.1,1.6]},{id:"wnBottom",o:[Fe+Me+re,Kt.y0,Kt.z1],u:[0,0,-1],v:[-1,0,0],w:Kt.z1-Kt.z0,h:Fe-Kt.x0+Me+re,tex:[1.1,1.46]},{id:"wnTop",o:[Kt.x0,Kt.y1,Kt.z1],u:[0,0,-1],v:[1,0,0],w:Kt.z1-Kt.z0,h:Fe-Kt.x0+Me+re,tex:[1.1,2]},{id:"wnL",o:[Fe+Me+re,Kt.y0,Kt.z1],u:[-1,0,0],v:[0,1,0],w:Fe-Kt.x0+Me+re,h:Kt.y1-Kt.y0,tex:[.96,1.6]},{id:"wnR",o:[Kt.x0,Kt.y0,Kt.z0],u:[1,0,0],v:[0,1,0],w:Fe-Kt.x0+Me+re,h:Kt.y1-Kt.y0,tex:[1.85,1.6]},{id:"tubFront",o:[dn-Me-re,0,gi],u:[1,0,0],v:[0,1,0],w:sn-dn+Me+re,h:li,off:[Hs(-1.484,1.2),0],tex:[.2,1.4],holes:[pe]},{id:"tubSide",o:[dn,0,0],u:[0,0,1],v:[0,1,0],w:gi,h:li,tex:[2.1,.3]}];for(const g of xn)g.tw=ci.width,g.th=ci.height,(g.id==="preSide"||g.id==="tubSide")&&(g.off=[0,0]),g.id.startsWith("niche")&&(g.off=[Hs(-g.o[0],ci.width),Hs(-g.o[1],ci.height)]),g.id.startsWith("wn")&&(g.off=[Hs(g.o[2]-.5,ci.width),Hs(-g.o[1],ci.height)]);const vi={},tn=g=>{const w=vi[g];if(!w)throw new Error(`Unknown surface ${g}`);return w};for(const g of xn){const w=new $x(g);vi[g.id]=w,l.add(w.group)}l.updateMatrixWorld(!0);const $s=(g,w)=>g.u0<w.u1-1e-4&&g.u1>w.u0+1e-4&&g.v0<w.v1-1e-4&&g.v1>w.v0+1e-4,Io=g=>{const w=g.tw??ci.width,F=g.th??ci.height,[B,Q]=g.off??[0,0],et=[];for(let ht=B;ht<g.w-.001;ht+=w)for(let Pt=Q;Pt<g.h-.001;Pt+=F)et.push({u0:Math.max(0,ht),v0:Math.max(0,Pt),u1:Math.min(g.w,ht+w),v1:Math.min(g.h,Pt+F)});return et.filter(ht=>!(g.skip??[]).some(Pt=>$s(Pt,ht)))},Rs=[],Ci=(g,w,F,B=!1)=>{const Q=w.u1-w.u0,et=w.v1-w.v0,vt=(w.u0+w.u1)/2,ht=(w.v0+w.v1)/2,[Pt,Wt]=g.def.tex;let Lt;const _e=(g.def.holes??[]).filter(ne=>$s(w,ne)),Ae=!F&&!B&&_e.length>0,Ue=Ae?ns([{u0:w.u0+Pn/2,u1:w.u1-Pn/2,v0:w.v0+Pn/2,v1:w.v1-Pn/2}],_e):[];if(Ae){const ne=new Se;for(const nn of Ue){const Ce=(nn.u0+nn.u1)/2,ce=(nn.v0+nn.v1)/2,Ye=new We(nn.u1-nn.u0,nn.v1-nn.v0,re);gt(Ye,Ce,ce,Pt,Wt);const Rn=$(new ft(Ye,[j,j,j,j,j,lt]));Rn.position.set(Ce-vt,ce-ht,0),ne.add(Rn)}Lt=ne}else if(F)Lt=F;else{const ne=new We(Q-Pn,et-Pn,re);gt(ne,vt,ht,Pt,Wt),Lt=$(new ft(ne,[j,j,j,j,j,lt]))}Lt.position.set(vt,ht,Me+re/2),Lt.visible=!1,g.group.add(Lt);const yn=new Fn(Q,et);yn.translate(Q/2,0,0);const Ge=yn.getAttribute("uv"),Je=yn.getAttribute("position");for(let ne=0;ne<Je.count;ne++)Ge.setXY(ne,Je.getX(ne)*6,Je.getY(ne)*42);const fe=new ft(yn,Ht);if(Ae){const nn=ns([w],_e).map(Ce=>{const ce=new bn;return ce.moveTo(Ce.u0-w.u0,Ce.v0-ht),ce.lineTo(Ce.u1-w.u0,Ce.v0-ht),ce.lineTo(Ce.u1-w.u0,Ce.v1-ht),ce.lineTo(Ce.u0-w.u0,Ce.v1-ht),ce.closePath(),ce});fe.geometry.dispose(),fe.geometry=new Ti(nn)}fe.receiveShadow=!0,fe.position.set(w.u0,ht,.0056),fe.visible=!1,g.group.add(fe);const ln=new ft(new Fn(Q+Pn*.4,et+Pn*.4),Jt);if(ln.receiveShadow=!0,ln.position.set(vt,ht,Me+re*.82),ln.visible=!1,g.group.add(ln),Ae){const ne=new bn,Ce=ns([{u0:w.u0-Pn*.2,u1:w.u1+Pn*.2,v0:w.v0-Pn*.2,v1:w.v1+Pn*.2}],_e).map(ce=>{const Ye=ne.clone();return Ye.moveTo(ce.u0-vt,ce.v0-ht),Ye.lineTo(ce.u1-vt,ce.v0-ht),Ye.lineTo(ce.u1-vt,ce.v1-ht),Ye.lineTo(ce.u0-vt,ce.v1-ht),Ye.closePath(),Ye});ln.geometry.dispose(),ln.geometry=new Ti(Ce)}const $e={mesh:Lt,patch:fe,grout:ln,surf:g,rect:w,t0:0,dur:.1,lead:.07,g0:0,world:g.world(vt,ht,0)};return Rs.push($e),$e},Wn={},Qs=new Se;{const g=tn("preFront"),w=tt,F=w.u1-w.u0-Pn,B=w.v1-w.v0-Pn,Q=(w.u0+w.u1)/2,et=(w.v0+w.v1)/2,[vt,ht]=g.def.tex,Pt=ve-lo-Q,Wt=co-et,Lt=.0022,_e=(fe,ln,$e,ne,nn)=>{Gs(fe,ln-ne/2,$e-nn/2,ne,nn,.004)},Ae=(fe,ln,$e,ne)=>fe.absarc(ln,$e,ne,0,Math.PI*2,!1),Ue=(fe,ln,$e)=>{const ne=new Vs(fe,{depth:ln,bevelEnabled:!1,curveSegments:40});return ne.translate(0,0,$e),gt(ne,Q,et,vt,ht),ne},yn=z({color:"#1c1d20",roughness:.5}),Ge=(fe,ln)=>{const $e=new Se,ne=new bn;ne.moveTo(-F/2,-B/2),ne.lineTo(F/2,-B/2),ne.lineTo(F/2,B/2),ne.lineTo(-F/2,B/2),ne.closePath(),fe(ne);const nn=new is;_e(nn,(ct.u0+ct.u1)/2-Q,(ct.v0+ct.v1)/2-et,ct.u1-ct.u0,ct.v1-ct.v0),ne.holes.push(nn),$e.add($(new ft(Ue(ne,re,-re/2),[j,j])));const Ce=new ft(new Fn(.3,.24),yn);Ce.position.set(Pt,Wt,-re/2+8e-4),$e.add(Ce);const ce=ln.map(Ye=>{const Rn=$(new ft(Ue(Ye,re-.0012,-re/2+.0012),[j,j]));return $e.add(Rn),Rn});return Qs.add($e),{group:$e,press:ce[ce.length-1]}},Je=(fe,ln)=>{const $e=Pt-.044,ne=Pt+.087,nn=Wt-.028,Ce=(ce,Ye)=>{const Rn=new bn;return Gs(Rn,ce-Ye/2,nn-fe/2,Ye,fe,ln),Rn};return Ge(ce=>{const Ye=new is;Gs(Ye,Pt-.133-Lt,nn-fe/2-Lt,.266+Lt*2,fe+Lt*2,ln+Lt),ce.holes.push(Ye)},[Ce($e,.174),Ce(ne,.084)])};Wn.narrow=Je(.042,.004),Wn.wide=Je(.125,.004);{const ne=.21800000000000003,nn=Pt-ne/2+.062,Ce=Pt+ne/2-.04,ce=Wt-.021;Wn.round=Ge(Ye=>{const Rn=new is;Ae(Rn,nn,Wt,.062+Lt);const ps=new is;Ae(ps,Ce,ce,.04+Lt),Ye.holes.push(Rn,ps)},(()=>{const Ye=new bn;Ae(Ye,nn,Wt,.062);const Rn=new bn;return Ae(Rn,Ce,ce,.04),[Ye,Rn]})())}{const $e=[Pt-.012,Wt+.012],ne=[$e[0]+.11,$e[1]-.024],nn=(Ce,ce,Ye,Rn)=>{const ps=ne[0]-$e[0],Us=ne[1]-$e[1],Qr=Math.hypot(ps,Us),Li=Math.atan2(Us,ps),Vo=(ce*ce-Ye*Ye+Qr*Qr)/(2*Qr),di=Math.acos(Math.max(-1,Math.min(1,Vo/ce))),ms=[$e[0]+ce*Math.cos(Li+di),$e[1]+ce*Math.sin(Li+di)],gs=[$e[0]+ce*Math.cos(Li-di),$e[1]+ce*Math.sin(Li-di)],cl=Math.atan2(ms[1]-ne[1],ms[0]-ne[0]),hl=Math.atan2(gs[1]-ne[1],gs[0]-ne[0]);Ce.moveTo(ms[0],ms[1]),Ce.absarc($e[0],$e[1],ce,Li+di,Li-di+Math.PI*2,!1),Ce.absarc(ne[0],ne[1],Ye,hl,cl,!Rn),Ce.closePath()};Wn.nested=Ge(Ce=>{const ce=new is;nn(ce,.08+Lt,.053+Lt,!0),Ce.holes.push(ce)},(()=>{const Ce=new bn;nn(Ce,.08,.053+Lt*2,!1);const ce=new bn;return Ae(ce,ne[0],ne[1],.053),[Ce,ce]})())}}const js=Io(tn("floor").def).map(g=>Ci(tn("floor"),g)),zr={u:1.9,v:.6},Cs=g=>Math.hypot((g.rect.u0+g.rect.u1)/2-zr.u,(g.rect.v0+g.rect.v1)/2-zr.v);js.sort((g,w)=>Cs(g)-Cs(w)),js.forEach((g,w)=>{w===0?(g.t0=4.2,g.dur=.3,g.lead=.16):(g.t0=4.5+(w-1)/Math.max(1,js.length-1)*.36,g.dur=.09,g.lead=.06)});const No=["back","left","nicheBack","nicheBottom","nicheTop","nicheL","nicheR","tubSide","tubFront","preSide","preFront","wnBack","wnBottom","wnTop","wnL","wnR"],fi=[];let Xn=null;const Ps=[];for(const g of No){const w=tn(g),F=Io(w.def).sort((B,Q)=>B.v0-Q.v0||B.u0-Q.u0).map(B=>Ci(w,B));if(fi.push(...F),g==="preFront"){const B=Ci(w,tt,Qs);{const Lt=tt,_e=(Lt.v0+Lt.v1)/2,Ae=ns([Lt],[ct]).map(Ge=>{const Je=new bn;return Je.moveTo(Ge.u0-Lt.u0,Ge.v0-_e),Je.lineTo(Ge.u1-Lt.u0,Ge.v0-_e),Je.lineTo(Ge.u1-Lt.u0,Ge.v1-_e),Je.lineTo(Ge.u0-Lt.u0,Ge.v1-_e),Je.closePath(),Je});B.patch.geometry.dispose(),B.patch.geometry=new Ti(Ae);const Ue=(Lt.u0+Lt.u1)/2,yn=ns([Lt],[ct]).map(Ge=>{const Je=new bn;return Je.moveTo(Ge.u0-Ue,Ge.v0-_e),Je.lineTo(Ge.u1-Ue,Ge.v0-_e),Je.lineTo(Ge.u1-Ue,Ge.v1-_e),Je.lineTo(Ge.u0-Ue,Ge.v1-_e),Je.closePath(),Je});B.grout.geometry.dispose(),B.grout.geometry=new Ti(yn)}fi.push(B);const Q=new Se,et=(zt.u0+zt.u1)/2,vt=(zt.v0+zt.v1)/2,[ht,Pt]=w.def.tex,Wt=new ft(new We(zt.u1-zt.u0-Pn,zt.v1-zt.v0-Pn,re*.6),Jt);Wt.position.z=-re*.4,Q.add(Wt);for(const Lt of Vx(zt,w.def.off??[0,0])){const _e=(Lt.u0+Lt.u1)/2,Ae=(Lt.v0+Lt.v1)/2,Ue=new We(Lt.u1-Lt.u0-Pn,Lt.v1-Lt.v0-Pn,re);gt(Ue,_e,Ae,ht,Pt);const yn=$(new ft(Ue,j));yn.position.set(_e-et,Ae-vt,0),Q.add(yn)}Xn=Ci(w,zt,Q,!0),fi.push(Xn);for(const Lt of[pt,ct]){const _e=Ci(w,Lt,void 0,!0);fi.push(_e),Ps.push({tile:_e,detail:ti+1,angle:0,tilt:Lt===pt})}}if(g==="left"){const B=Ci(w,{u0:Xt.u0+Oe.ventGap,u1:Xt.u1-Oe.ventGap,v0:Xt.v0+Oe.ventGap,v1:Xt.v1-Oe.ventGap},void 0,!0);fi.push(B)}if(g==="tubFront"){const B=Ci(w,pe,void 0,!0);fi.push(B),Ps.push({tile:B,detail:ti+3,angle:0})}}fi.forEach((g,w)=>{g.t0=5.04+w/Math.max(1,fi.length-1)*.74,g.dur=.11,g.lead=.06});for(const[g,w]of[["preFront",[pt,ct]],["left",[Xt]],["tubFront",[pe]]]){const F=tn(g);for(const B of w){const Q=new ft(new Fn(B.u1-B.u0,B.v1-B.v0),se);Q.position.set((B.u0+B.u1)/2,(B.v0+B.v1)/2,g==="preFront"?-.155:Me+re-.001),F.group.add(Q)}}const Hr=[],Gr=(g,w,F,B)=>{const Q=[[-g/2,-w/2],[g/2,-w/2],[g/2,w/2],[-g/2,w/2]],et=[[-g/2+F,-w/2+F],[g/2-F,-w/2+F],[g/2-F,w/2-F],[-g/2+F,w/2-F]],vt=B?.011:-.011,ht=B?4e-4:-4e-4,Pt=[...Q.map(([Ae,Ue])=>new N(Ae,vt,Ue)),...et.map(([Ae,Ue])=>new N(Ae,ht,Ue))],Wt=new Tn().setFromPoints(Pt);Wt.setIndex([0,2,1,0,3,2,4,5,6,4,6,7,0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7]),Wt.computeVertexNormals();const Lt=Pt.flatMap(Ae=>[(r.x0+Zt/2+Ae.x)/Ni,(r.y0+Ae.z)/Ni]);Wt.setAttribute("uv",new rn(Lt,2));const _e=j.clone();return _e.side=kn,Z.push(_e),$(new ft(Wt,_e))};for(const g of r.shelves){const w=new Se;w.add(Gr(Zt-.034,.12,.0106,!0),Gr(Zt-.034,.12,.0106,!1));const F=new Fn(Zt-.034,.0204);gt(F,r.x0+Zt/2,g,0,0);const B=$(new ft(F,j));B.position.z=.0601,w.add(B),k(-(Zt-.034)/2,-4e-4,.059,(Zt-.034)/2,4e-4,.0602,He,w),w.position.set(r.x0+Zt/2,g,-.12+.016+.06),w.visible=!1,l.add(w),Hr.push(w)}{const g=Rs.map(B=>B.world.x*.6-B.world.y*.5+B.world.z*.4),w=Math.min(...g),F=Math.max(...g);Rs.forEach((B,Q)=>B.g0=7.08+(g[Q]-w)/(F-w)*.72)}const Wi=new Se;{const g=Fe+Me+re,w=_i;k(g-.0015,0,w-.0015,g+.0015,xe,w+.011,me,Wi),k(g-.011,0,w-.0015,g+.0015,xe,w+.0015,me,Wi);const F=$(new ft(new Qe(.0035,.0035,xe,12),me));F.position.set(g,xe/2,w),Wi.add(F)}Wi.visible=!1,l.add(Wi);const Ls=new Se;{const g=Fe+Me+re,w=_i,F=new Fn(re+Me+.002,xe),B=F.getAttribute("position"),Q=F.getAttribute("uv"),[et,vt]=tn("preSide").def.tex,ht=g-(re+Me+.002)/2;for(let Lt=0;Lt<B.count;Lt++)Q.setXY(Lt,(Fe-(ht-B.getX(Lt))+et)/Ni,(xe/2+B.getY(Lt)+vt)/Ni);const Pt=new ft(F,j);Pt.rotation.y=Math.PI,Pt.position.set(ht,xe/2,w-4e-4),Pt.receiveShadow=!0,Ls.add(Pt);const Wt=new ft(new We(.0011,xe,.0011),He);Wt.position.set(g-3e-4,xe/2,w-3e-4),Wt.rotation.y=Math.PI/4,Ls.add(Wt)}Ls.visible=!1,l.add(Ls);const kr=new Se,tr=new Se;l.add(kr,tr);const M=(g,w)=>{const F=It(w,Me);for(const[B,Q,et]of[[kr,.0035,me],[tr,9e-4,He]]){const vt=new Se;vt.position.copy(g.group.position),vt.quaternion.copy(g.group.quaternion),B.add(vt);const ht=Me+re+4e-4,Pt=ht-Q;k(F.u0-Q/2,F.v0-Q/2,Pt,F.u1+Q/2,F.v0+Q/2,ht,et,vt),k(F.u0-Q/2,F.v1-Q/2,Pt,F.u1+Q/2,F.v1+Q/2,ht,et,vt),k(F.u0-Q/2,F.v0,Pt,F.u0+Q/2,F.v1,ht,et,vt),k(F.u1-Q/2,F.v0,Pt,F.u1+Q/2,F.v1,ht,et,vt)}};M(tn("back"),o),M(tn("preFront"),dt);const L={sand:[],primer:[],wp1:[],wp1Floor:[],wpA:[],wpAFloor:[],wpB:[],wpBand:[]},W=(g,w,F,B,Q,et,vt,ht)=>{const Pt=tn(w);ns(F,B).forEach(Wt=>{const Lt=Wt.u1-Wt.u0,_e=Wt.v1-Wt.v0,Ae=new Fn(Lt,_e);Ae.translate(0,_e/2,0);const Ue=new ft(Ae,vt);Ue.receiveShadow=!0,Ue.position.set((Wt.u0+Wt.u1)/2,Wt.v0,ht),Ue.visible=!1,Pt.group.add(Ue),g.push({mesh:Ue,surf:Pt,rect:Wt,t0:Q,t1:et})})},G=g=>[{u0:0,v0:0,u1:tn(g).def.w,v1:tn(g).def.h}],q=["nicheBack","nicheBottom","nicheTop","nicheL","nicheR"],Rt=tn("floor").def.holes??[],Ot=[{u0:.1,v0:ve-.11,u1:Zn-.1,v1:ve},{u0:0,v0:0,u1:Fe,v1:ve-_n}];W(L.sand,"floor",G("floor"),Rt,.38,.6,$t,4e-4),W(L.primer,"back",G("back"),[o],.62,.76,ze,8e-4),W(L.primer,"left",G("left"),[],.72,.84,ze,8e-4);for(const g of q)W(L.primer,g,G(g),[],.74,.8,ze,8e-4);for(const g of["preFront","preSide","tubFront","tubSide"])W(L.primer,g,G(g),g==="preFront"?[dt,zt,pt,ct]:[],.8,.88,ze,8e-4);W(L.primer,"floor",G("floor"),Ot,.84,.95,ze,8e-4);const wt=.0016,Dt=.0038,qt=(g,w,F,B)=>{const Q=et=>w+et;W(g,"back",[{u0:0,v0:0,u1:dn,v1:2.3}],[o],Q(0),Q(.22),F,B),W(g,"back",[{u0:dn,v0:0,u1:sn,v1:1.1}],[],Q(.18),Q(.28),F,B),W(g,"left",[{u0:_i-ks-.2,v0:0,u1:_i,v1:2.3}],[],Q(.08),Q(.3),F,B),W(g,"left",[{u0:0,v0:0,u1:_i-ks-.2,v1:.25}],[],Q(.24),Q(.32),F,B);for(const et of q)W(g,et,G(et),[],Q(.14),Q(.24),F,B);W(g,"tubSide",G("tubSide"),[],Q(.28),Q(.38),F,B),W(g,"tubFront",[{u0:0,v0:0,u1:tn("tubFront").def.w,v1:.25}],[],Q(.3),Q(.4),F,B),W(g,"preSide",[{u0:0,v0:0,u1:Fe,v1:.25}],[],Q(.32),Q(.4),F,B),W(g,"preFront",[{u0:0,v0:0,u1:st,v1:.25}],[pt,ct],Q(.32),Q(.42),F,B)};W(L.wp1Floor,"floor",G("floor"),Ot,2.04,2.22,at,wt),qt(L.wp1,2.06,ye,wt),W(L.wpAFloor,"floor",G("floor"),Ot,3.04,3.3,bt,Dt),qt(L.wpA,3.22,Te,Dt);{const g=[{id:"floor",holes:Ot},{id:"back",holes:[o]},{id:"left",holes:[]},{id:"preFront",holes:[dt,zt,pt,ct]}];let w=0;const F=g.reduce((Q,et)=>Q+Math.ceil((tn(et.id).def.w-.1)/.9),0)+4,B=.5/F;for(const Q of g){const et=tn(Q.id).def;let vt=0;for(let ht=0;ht<et.w-.1;ht+=.9,vt++,w++){const Pt=3.04+w*B;if(W(L.wpB,Q.id,[{u0:ht,v0:0,u1:Math.min(et.w,ht+1),v1:et.h}],Q.holes,Pt,Pt+B*1.6,vt%2?Ct:Ft,Dt+vt%2*5e-4),ht+1<et.w-.02){const Wt=3.56+w/F*.3;W(L.wpBand,Q.id,[{u0:ht+.89,v0:0,u1:ht+1.01,v1:et.h}],Q.holes,Wt,Wt+.08,St,Dt+.0012)}}}for(const Q of[...q,"tubSide","tubFront","preSide"]){const et=3.04+w*B;W(L.wpB,Q,G(Q),[],et,et+B*2,Ft,Dt)}}const ee=new Se;k(.1,-.05,.035,Zn-.1,0,.105,Gt,ee),k(.12,-.049,.045,Zn-.12,-.002,.095,se,ee);{const g=$(new ft(new Qe(.025,.025,.14,20),Gt));g.position.set(1.05,-.11,.07),ee.add(g)}ee.visible=!1,l.add(ee);const ge=new Se;k(.1,.002,.035,Zn-.1,.014,.105,Gt,ge);{const g=new We(Zn-.34,.004,.058),w=g.getAttribute("position"),F=g.getAttribute("uv");for(let Q=0;Q<w.count;Q++)F.setXY(Q,(.7+w.getX(Q))/Ni,(.07+w.getZ(Q))/Ni);const B=$(new ft(g,j));B.position.set(Zn/2,.015,.07),ge.add(B)}ge.visible=!1,l.add(ge);const kt=(()=>{const g=new We(Zn,.06,ks);g.translate(0,.03,0);const w=g.getAttribute("position");for(let B=0;B<w.count;B++)w.getY(B)>.05&&w.setY(B,.06-.012*((ks/2-w.getZ(B))/ks));g.computeVertexNormals();const F=$(new ft(g,jt),!1);return F.position.set(Zn/2,-.06,ks/2),F.visible=!1,l.add(F),F})(),we=[];{const g=new bn;g.moveTo(-.07,.03),g.lineTo(0,-.03),g.lineTo(.07,.03),g.lineTo(.07,.055),g.lineTo(0,-.005),g.lineTo(-.07,.055),g.closePath();const w=new Ti(g);w.rotateX(Math.PI/2);for(let F=0;F<9;F++){const B=new ft(w,T);B.userData={x:.3+F%3*.4,phase:Math.floor(F/3)/3},B.visible=!1,B.renderOrder=2,l.add(B),we.push(B)}}const on=[],Ze=[],qe=(g,w,F,B,Q,et,vt=.0024,ht=on)=>{const Pt=new N(...g),Lt=new N(...w).clone().sub(Pt),_e=Lt.length();Lt.normalize();for(const[Ae,Ue]of[[F,B],[B,F]]){const yn=new N(...Ae),Ge=new N(...Ue),Je=new We(_e,.06,.0018);Je.translate(_e/2,.03,0);const fe=new ft(Je,ht===on?le:St);fe.receiveShadow=!0,fe.quaternion.setFromRotationMatrix(new Be().makeBasis(Lt,Ge,yn)),fe.position.copy(Pt).addScaledVector(yn,vt),fe.visible=!1,l.add(fe),ht.push({obj:fe,t0:Q,t1:et,axis:"x"})}};[[[0,0,0],[0,2.1,0],[0,0,1],[1,0,0]],[[0,0,0],[dn,0,0],[0,0,1],[0,1,0]],[[0,0,0],[0,0,_n],[1,0,0],[0,1,0]],[[dn,0,0],[dn,0,gi],[-1,0,0],[0,1,0]],[[dn,0,gi],[sn,0,gi],[0,0,1],[0,1,0]],[[dn,li+.025,.02],[sn,li+.025,.02],[0,0,1],[0,1,0]],[[0,0,_n],[Fe,0,_n],[0,0,-1],[0,1,0]],[[0,0,_n],[0,.2,_n],[1,0,0],[0,0,-1]],[[Fe,0,_n],[Fe,0,ve],[1,0,0],[0,1,0]],[[r.x0,r.y0,-.12],[r.x1,r.y0,-.12],[0,0,1],[0,1,0]],[[r.x0,r.y1,-.12],[r.x1,r.y1,-.12],[0,0,1],[0,-1,0]],[[r.x0,r.y0,-.12],[r.x0,r.y1,-.12],[0,0,1],[1,0,0]],[[r.x1,r.y0,-.12],[r.x1,r.y1,-.12],[0,0,1],[-1,0,0]]].forEach((g,w)=>{const F=2.42+w*.026;qe(g[0],g[1],g[2],g[3],F,F+.1);const B=3.62+w*.022;qe(g[0],g[1],g[2],g[3],B,B+.08,Dt+.0024,Ze)});{const g=Zn/2-.02,w=new bn;w.moveTo(-g,-.08),w.lineTo(g,-.08),w.lineTo(g,.08),w.lineTo(-g,.08),w.closePath();const F=new is;F.moveTo(-g+.07,-.035),F.lineTo(g-.07,-.035),F.lineTo(g-.07,.035),F.lineTo(-g+.07,.035),F.closePath(),w.holes.push(F);const B=new ft(new Ti(w),le);B.rotation.x=-Math.PI/2,B.position.set(Zn/2,.0025,.07),B.visible=!1,l.add(B),on.push({obj:B,t0:2.74,t1:2.86,axis:"all"})}const Vt=(()=>{const g=new bn;g.moveTo(-.07,-.07),g.lineTo(.07,-.07),g.lineTo(.07,.07),g.lineTo(-.07,.07),g.closePath();const w=new is;return w.absarc(0,0,.016,0,Math.PI*2,!0),g.holes.push(w),new Ti(g,20)})(),Dn=[{p:[0,1.05,.52],n:[1,0,0]},{p:[0,1.05,.68],n:[1,0,0]},{p:[.7,2.25,0],n:[0,0,1]},{p:[2.35,.82,0],n:[0,0,1]}],Pe=new Se;l.add(Pe),Dn.forEach((g,w)=>{const F=new ft(Vt,le),B=new N(...g.n);F.quaternion.setFromUnitVectors(new N(0,0,1),B),F.position.set(...g.p).addScaledVector(B,.0026),F.visible=!1,l.add(F),on.push({obj:F,t0:2.78+w*.035,t1:2.88+w*.035,axis:"all"});const Q=$(new ft(new Qe(.012,.012,.07,16),Gt));Q.quaternion.setFromUnitVectors(new N(0,1,0),B),Q.position.set(...g.p).addScaledVector(B,.035);const et=$(new ft(new Qe(.016,.016,.02,16),z({color:w===1?"#3b6fb0":"#b5442f",roughness:.5})));et.quaternion.copy(Q.quaternion),et.position.set(...g.p).addScaledVector(B,.075),Pe.add(Q,et)});const en={x0:1.6,x1:3.08,z0:.12,z1:.7,r:.2},hn=new Se,Xi=g=>{const w=new bn;return g?Gs(w,en.x0,-.7,en.x1-en.x0,en.z1-en.z0,en.r):Gs(w,en.x0,en.z0,en.x1-en.x0,en.z1-en.z0,en.r),w};{const g=new bn;Gs(g,dn-Me-re,.017,sn-dn+Me+re,gi+Me+re+.004-.017,.004),g.holes.push(Xi(!1));const w=new Vs(g,{depth:.025,bevelEnabled:!1,curveSegments:20}),F=$(new ft(w,U));F.rotation.x=Math.PI/2,F.position.y=li+.025,hn.add(F);const B=new bn;Gs(B,en.x0-.02,en.z0-.02,en.x1-en.x0+.04,en.z1-en.z0+.04,en.r+.02),B.holes.push(Xi(!1));const Q=new Vs(B,{depth:li-.145,bevelEnabled:!1,curveSegments:20}),et=new ft(Q,U);et.castShadow=!0,et.receiveShadow=!1,et.rotation.x=Math.PI/2,et.position.y=li,hn.add(et);const vt=new ft(new Ti(Xi(!0),20),U);vt.rotation.x=-Math.PI/2,vt.position.y=.15,vt.receiveShadow=!0,hn.add(vt)}hn.visible=!1,l.add(hn);const In=new ft(new Ti(Xi(!0),20),ue);In.rotation.x=-Math.PI/2,In.renderOrder=3,In.visible=!1,l.add(In);const ii=new ft(new Qe(.006,.009,1,10),ue);ii.visible=!1,l.add(ii);const Re=[],an=(g,w,F,B)=>{g.visible=!1,l.add(g),Re.push({obj:g,t0:w,t1:F,from:B,base:g.position.clone()})};Hr.forEach((g,w)=>{l.remove(g),an(g,5.62+w*.05,5.76+w*.05,[0,0,.3])});const Bn=new Se;{const g=new ft(new We(.008,1.98,.93),fn);g.position.set(1.45,1.006,.485),Bn.add(g),k(1.44,.016,.016,1.46,2,.034,te,Bn),k(.016,1.975,.925,1.45,1.99,.94,te,Bn)}an(Bn,14.04,14.22,[0,.6,0]);const Ke=new Se;k(.68,2.24,.016,.72,2.26,.5,te,Ke),k(.55,2.225,.35,.85,2.24,.65,te,Ke);{const g=$(new ft(new Qe(.075,.075,.012,40),te));g.rotation.z=Math.PI/2,g.position.set(.022,1.05,.6),Ke.add(g),k(.028,1.04,.585,.12,1.06,.615,te,Ke)}an(Ke,14.1,14.26,[.12,.25,.12]);const gn=new Se;{const g=$(new ft(new Qe(.045,.045,.012,32),te));g.rotation.x=Math.PI/2,g.position.set(2.35,.82,.022),gn.add(g),k(2.335,.805,.016,2.365,.83,.2,te,gn)}an(gn,14.14,14.28,[0,0,.2]);const $n=new Se;{const g=(B,Q)=>{const et=new bn;return et.moveTo(-B,0),et.lineTo(B,0),et.lineTo(B,Q-B*1.1),et.absellipse(0,Q-B*1.1,B,B*1.1,0,Math.PI,!1),et.lineTo(-B,0),et},w=$(new ft(new Vs(g(.14,.46),{depth:.22,bevelEnabled:!0,bevelThickness:.05,bevelSize:.04,bevelSegments:6,curveSegments:24}),U));w.rotation.x=Math.PI/2,w.position.set(0,.37,.04);const F=$(new ft(new Vs(g(.15,.48),{depth:.012,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:3,curveSegments:24}),U));F.rotation.x=Math.PI/2,F.position.set(0,.45,.03),$n.add(w,F),$n.rotation.y=Math.PI/2,$n.position.set(Fe+Me+re,0,lo)}an($n,10.02,10.18,[-.35,0,0]);const un=new Se,xi=(g,w,F,B,Q,et,vt)=>{const ht=k(g,w,F,B,Q,et,j,vt),Pt=ht.geometry.getAttribute("position"),Wt=ht.geometry.getAttribute("uv");for(let Lt=0;Lt<Pt.count;Lt++)Wt.setXY(Lt,(ht.position.z+Pt.getZ(Lt))/Ni,(ht.position.x+Pt.getX(Lt)+ht.position.y+Pt.getY(Lt))/Ni);return ht},Sn=2.85,Nn=3.85;xi(.256,.72,Sn,.79,.86,Sn+.026,un),xi(.256,.72,Nn-.026,.79,.86,Nn,un),xi(.764,.72,Sn+.026,.79,.86,Nn-.026,un),xi(.256,.72,Sn+.026,.282,.86,Nn-.026,un);const ed=xi(.34,.738,Sn+.026,.764,.754,Nn-.026,un);ed.rotation.z=.02,k(.282,.7,Sn+.03,.34,.705,Nn-.03,se,un);const dh=new ft(new Qe(.022,.022,.006,32),te);dh.position.set(.311,.708,3.35);const ph=new ft(new Qe(.015,.015,.008,32),new Aa({color:"#050505"}));ph.position.set(.311,.709,3.35),un.add(dh,ph);const Vr=new Se;xi(.284,.733,Sn+.03,.336,.749,Nn-.03,Vr),un.add(Vr),k(.256,1.06,3.33,.5,1.082,3.356,te,un),k(.479,1.02,3.33,.501,1.082,3.356,te,un),xi(.29,.86,3.62,.368,1.02,3.698,un);const mh=new ft(new Qe(.017,.017,.045,20),se);mh.position.set(.329,1.042,3.659),un.add(mh),k(.325,1.06,3.648,.4,1.073,3.67,se,un);const Xa=ue.clone();Z.push(Xa);const Ds=new ft(new Fn(.764-.35,Nn-Sn-.06),Xa);Ds.rotation.x=-Math.PI/2,Ds.rotation.z=.02,Ds.renderOrder=3,Ds.visible=!1,un.add(Ds);const qa=ue.clone();Z.push(qa);const er=new ft(new Qe(.005,.008,1,10),qa);er.visible=!1,un.add(er),xi(.256,.16,Sn,.79,.7,Sn+.026,un),xi(.256,.16,Nn-.026,.79,.7,Nn,un),xi(.256,.676,Sn+.026,.79,.7,Nn-.026,un),k(.26,.16,Sn+.026,.27,.676,Nn-.026,se,un);const Ya=new Aa({color:"#2a2b2f"}),Wr=new Ao({color:"#d9d4ca",roughness:.8});Z.push(Ya,Wr);const gh=[];for(const[g,w]of[[.16,.414],[.42,.674]]){const F=new Se;xi(.766,g+.002,Sn+.028,.79,w-.002,Nn-.028,F),k(.33,g+.02,Sn+.04,.766,g+.03,Nn-.04,Wr,F),k(.33,g+.03,Sn+.04,.34,w-.04,Nn-.04,Wr,F),k(.33,g+.03,Sn+.04,.766,w-.04,Sn+.05,Wr,F),k(.33,g+.03,Nn-.05,.766,w-.04,Nn-.04,Wr,F),k(.35,w-.045,Sn+.06,.745,w-.04,Sn+.066,Ya,F),un.add(F),gh.push(F)}const Za=new wr("#ffe1b0",0,1.2,2);Za.position.set(.7,.5,3.35),un.add(Za);let Xr=0,Ka=0;an(un,10.08,10.3,[-.3,.2,0]);const Uo=new Se,Ja=new ft(new Qe(.041,.041,.145,28),U);Ja.rotation.x=Math.PI/2,Ja.position.set(.15,.884,Oe.accessoriesZ),Uo.add(Ja);const $a=new ft(new Fn(.14,.125),U);$a.rotation.y=Math.PI/2,$a.position.set(.195,.82,Oe.accessoriesZ),Uo.add($a),an(Uo,12.05,12.22,[0,0,0]);const Is=new ft(new Fn(.11,.065),U);{const g=tn("preFront");g.group.updateMatrixWorld(!0);const w=(pt.u0+pt.u1)/2;g.world(w,Oe.paperBottom-.0325,Me+re+.0015,Is.position),Is.quaternion.copy(g.group.getWorldQuaternion(new Gi));const F=new ft(new Fn(.118,.004),se);g.world(w,Oe.paperBottom,Me+re+8e-4,F.position),F.quaternion.copy(Is.quaternion),Is.userData.slot=F,l.add(Is,F)}const qr=new Se;k(.12,.18,Oe.accessoriesZ-.052,.19,.29,Oe.accessoriesZ+.052,se,qr),k(.145,.29,Oe.accessoriesZ-.008,.156,.58,Oe.accessoriesZ+.003,Gt,qr),l.add(qr),qr.visible=!1;const Fo=r.shelves[0]+.01,nr=new Se;{const g=z({color:"#3a3b3f",roughness:.35}),w=$(new ft(new Qe(.028,.028,.16,24),g));w.position.set(r.x0+.1,Fo+.08,-.06);const F=$(new ft(new Qe(.024,.024,.12,24),U));F.position.set(r.x0+.17,Fo+.06,-.07);const B=$(new ft(new Qe(.011,.011,.03,12),te));B.position.set(r.x0+.1,Fo+.175,-.06),nr.add(w,F,B);const Q=z({color:"#d9d0c3",roughness:1});for(let Pt=0;Pt<3;Pt++){const Wt=$(new ft(new Qe(.04,.04,.12,20),Q));Wt.rotation.x=Math.PI/2,Wt.rotation.z=Math.PI/2,Wt.position.set(.17,Kt.y0+.016+.04+(Pt===2?.075:0),Kt.z0+.1+(Pt===2?.04:Pt*.085)),nr.add(Wt)}const et=$(new ft(new Qe(.05,.04,.11,24),se));et.position.set(.17,Kt.y0+.016+.055,Kt.z1-.12),nr.add(et);const vt=z({color:"#55684f",roughness:.7,side:kn}),ht=Ws(5);for(let Pt=0;Pt<8;Pt++){const Wt=new ft(new za(.045,12,8),vt);Wt.scale.set(.35,1.5,.12);const Lt=Pt/8*Math.PI*2;Wt.position.set(.17+Math.cos(Lt)*.03,Kt.y0+.19+ht()*.03,Kt.z1-.12+Math.sin(Lt)*.03),Wt.rotation.set(Math.sin(Lt)*.5,Lt,Math.cos(Lt)*.5),Wt.castShadow=!0,nr.add(Wt)}}an(nr,14.28,14.46,[0,.25,0]);const Oo=new Se;l.add(Oo);{const g=(F,B,Q,et)=>{const vt=new ft(new We(B-F,.006,.01),et);vt.position.set((F+B)/2,Q,-.02),Oo.add(vt)};g(r.x0+.03,r.x1-.03,r.y1-.024,Tt);for(const F of r.shelves)g(r.x0+.03,r.x1-.03,F-.016,Tt);const w=new ft(new We(.01,.006,Kt.z1-Kt.z0-.06),cn);w.position.set(Fe-.012,Kt.y1-.024,lo+.025),Oo.add(w)}const Yr=new Se,_h=[];{const g=z({color:"#f3ecdf",roughness:.7}),w=new za(.008,10,8);w.scale(1,2.2,1);const F=(Q,et,vt,ht,Pt)=>{const Wt=$(new ft(new Qe(Pt,Pt,ht,20),g));Wt.position.set(Q,et+ht/2,vt);const Lt=new ft(w,Qt);Lt.position.set(Q,et+ht+.016,vt),Lt.userData={seed:Math.random()*10,y:et+ht+.016},_h.push(Lt),Yr.add(Wt,Lt)},B=li+.025;F(3.14,B,.24,.07,.022),F(3.14,B,.4,.11,.024),F(3.14,B,.56,.05,.022),F(2.9,.016,1.02,.18,.04),F(3.04,.016,1.1,.12,.035),F(.17,Kt.y0+.016,Kt.z1-.26,.05,.022)}Yr.visible=!1,l.add(Yr),(()=>{const g=tn("preFront"),w=ve-lo,F=[g.world(w-.14,co-.12,.0175),g.world(w+.14,co-.12,.0175),g.world(w+.14,co+.12,.0175),g.world(w-.14,co+.12,.0175)],B=new Np(new Tn().setFromPoints(F),X);return l.add(B),B})();const Qa=360,ir=new Float32Array(Qa*3),ja=Ws(9);for(let g=0;g<Qa;g++)ir[g*3]=.57+ja()*.26,ir[g*3+1]=.02+ja()*2.2,ir[g*3+2]=.37+ja()*.26;const tl=new Tn;tl.setAttribute("position",new Bi(ir,3));const el=new Uc({color:"#e3eff2",size:.013,transparent:!0,opacity:0,depthWrite:!1});Z.push(el);const Zr=new mu(tl,el);Zr.visible=!1,l.add(Zr);const hs=new ft(new ih(.22,32),ue.clone());Z.push(hs.material),hs.rotation.x=-Math.PI/2,hs.position.set(.7,.0175,.5),hs.visible=!1,l.add(hs);const Ne={roller:new Se,lath:new Se,trowel:new Se,float:new Se,sponge:new Se,straight:new Se,grinder:new Se},Kr=new Se;{const g=$(new ft(new Qe(.032,.032,.24,24),z({color:"#6f8796",roughness:1})));g.rotation.z=Math.PI/2,g.position.z=.034;const w=$(new ft(new We(.012,.012,.18),se));w.position.set(.13,-.06,.1),w.rotation.x=.6;const F=$(new ft(new Qe(.014,.014,.3,12),te));F.position.set(.13,-.2,.2),F.rotation.x=.5,Ne.roller.add(g,w,F);const B=$(new ft(new We(Zn+.2,.1,.02),Gt));B.rotation.x=-.25,Ne.lath.add(B);const Q=$(new ft(new We(.28,.12,.003),Gt));Q.position.z=.006;const et=$(new ft(new We(.15,.03,.03),se));et.position.z=.05;const vt=$(new ft(new We(.012,.012,.04),se));vt.position.z=.025,Ne.trowel.add(Q,et,vt);const ht=$(new ft(new We(.24,.1,.02),z({color:"#2f3033",roughness:.8})));ht.position.z=.012;const Pt=$(new ft(new We(.14,.03,.03),te));Pt.position.z=.05,Ne.float.add(ht,Pt);const Wt=$(new ft(new vo(.17,.11,.05,3,.015),z({color:"#d8b46a",roughness:1})));Wt.position.z=.028,Ne.sponge.add(Wt);const Lt=$(new ft(new We(2,.025,.09),me));Lt.position.z=.045;const _e=$(new ft(new We(.12,.03,.03),J({color:"#c7e86a"})));_e.position.set(0,0,.07),Ne.straight.add(Lt,_e);const Ae=$(new ft(new Qe(.13,.14,.08,32),z({color:"#c2463a",roughness:.5})));Ae.rotation.x=Math.PI/2,Ae.position.z=.06;const Ue=new ft(new Qe(.12,.12,.012,24),se);Ue.rotation.x=Math.PI/2;const yn=z({color:"#8c8f93",metalness:.8,roughness:.4});for(let fe=0;fe<4;fe++){const ln=new ft(new We(.22,.02,.004),yn);ln.rotation.z=fe*Math.PI/4,ln.position.z=-.006,Kr.add(ln)}Kr.add(Ue),Kr.position.z=.012;const Ge=$(new ft(new Qe(.014,.014,.75,12),se));Ge.position.set(0,-.3,.32),Ge.rotation.x=-.9;const Je=$(new ft(new Qe(.016,.016,.36,12),te));Je.rotation.z=Math.PI/2,Je.position.set(0,-.6,.55),Ne.grinder.add(Ae,Kr,Ge,Je),Object.values(Ne).forEach(fe=>{fe.visible=!1,l.add(fe)})}const sr=(g,w,F,B,Q,et=0,vt=0)=>{w.world(F,B,Q,g.position),g.quaternion.copy(w.group.quaternion),(et||vt)&&g.quaternion.multiply(new Gi().setFromEuler(new ki(et,0,vt))),g.visible=!0},rr=new Se;{for(let B=0;B<3;B++){const Q=B/3*Math.PI*2,et=$(new ft(new Qe(.008,.008,1,8),se));et.position.set(Math.cos(Q)*.12,.48,Math.sin(Q)*.12),et.rotation.set(Math.sin(Q)*.24,0,-Math.cos(Q)*.24),rr.add(et)}const g=$(new ft(new vo(.11,.12,.11,2,.015),z({color:"#e0a52a",roughness:.5})));g.position.y=1.03,rr.add(g),rr.position.set(1.9,0,1.75);const w=[[0,.9985,.0012,sn,1.0015,.0013],[.0012,.9985,0,.0013,1.0015,_n]];for(const[B,Q,et,vt,ht,Pt]of w){const Wt=new ft(new We(Math.max(1e-4,vt-B),ht-Q,Math.max(1e-4,Pt-et)),ie);Wt.position.set((B+vt)/2,(Q+ht)/2,(et+Pt)/2),l.add(Wt)}const F=new ft(new We(.003,xe,1e-4),ie);F.position.set(1.9,xe/2,.0013),l.add(F)}rr.visible=!1,l.add(rr);const nl=90,Pi=new Float32Array(nl*3),or=new Float32Array(nl*3),il=new Tn;il.setAttribute("position",new Bi(Pi,3));const sl=new Uc({color:"#d8d2c6",size:.02,transparent:!0,opacity:0,depthWrite:!1});Z.push(sl);const Bo=new mu(il,sl);Bo.visible=!1,l.add(Bo);const nd=Ws(17),vh={cement:{color:"#b9b2a6",rough:.92},epoxy:{color:"#dedad3",rough:.3}},xh=g=>{Jt.color.set(vh[g].color),Jt.roughness=vh[g].rough};xh("cement");const At={waterproof:"A",corner:null,button:null,nicheLit:!0,roomLit:!0,bathHovered:!1,moodTarget:0,mood:0,showerTarget:0,shower:0,tubTarget:0,basin:0,tub:0,candles:0,door:0,focus:null},id=new ae("#d6d1c7"),sd=new ae("#ffffff"),rl=new ae("#2a2b2f"),ol=new ae("#ffe1b0"),us=[{p:[4.8,3.1,5.2],t:[1.4,.55,1.2]},{p:[2.6,1.7,2.8],t:[.7,0,.45]},{p:[2.7,1.95,2.9],t:[.45,.9,.45]},{p:[4.7,2.9,5.1],t:[1.4,.95,1.1]},{p:[3.4,1.4,4.2],t:[1.7,.05,2]},{p:[4.5,2.05,5.1],t:[1.3,1.15,1]},{p:[1.25,1.35,1.05],t:[.25,1.15,1.78]},{p:[3.5,1.6,3.4],t:[1.3,1,.6]},{p:[3.4,1.7,3.3],t:[.8,1.05,1.1]},{p:[1,1.12,2.06],t:[.25,1.02,2.3]},{p:[..._s[0].camera],t:[..._s[0].target]},{p:[2.4,2.25,2.4],t:[.12,2.15,2.32]},{p:[..._s[1].camera],t:[..._s[1].target]},{p:[..._s[2].camera],t:[..._s[2].target]},{p:[4.9,2.25,5.3],t:[1.35,.95,1.25]}],qi=us.map(g=>({p:[...g.p],t:[...g.t]}));qi[0]={p:[3.6,1.9,2.9],t:[1.5,1.1,.3]},qi[3]={p:[2.8,1.7,2.6],t:[.6,1.1,.6]},qi[5]={p:[1.6,1.6,2.6],t:[.25,1.75,2.3]},qi[7]={p:[2.8,1.4,2.4],t:[1.9,.9,.1]},qi[8]={p:[2.9,1.4,2.2],t:[2.3,.6,.3]};for(const g of _s)qi.push({p:[...g.camera],t:[...g.target]});qi[ti+4]={p:[r.x0+Zt/2+.35,r.y1+.15,1.2],t:[r.x0+Zt/2,r.y0+De/2,0]},qi[ti+5]={p:[r.x0+Zt/2+.25,(r.shelves[0]??r.y0)+.18,.85],t:[r.x0+Zt/2,r.shelves[0]??r.y0,-.02]};const zo=new N,Mh=new N,Yi=new N,Zi=new N,Ho=new N(...us[0].p),Go=new N(...us[0].t);let Jr=1;const Qn={x:0,y:0,sx:0,sy:0},Sh=new N(0,1,0),yh=(g,w,F)=>{if(F&&At.focus!==null){const _e=qi[At.focus];Zi.set(..._e.t),Yi.set(..._e.p);const Ae=zo.copy(Yi).sub(Zi);Ae.applyAxisAngle(Sh,Math.sin(w*.15)*.03+Qn.sx*.05),Ae.y+=Qn.sy*.12,Ae.multiplyScalar(Math.min(Jr,1.35)),Yi.copy(Zi).add(Ae);return}const B=Math.min(ti-1,Math.floor(g)),Q=g-B,et=B===Ki.handover?us[Ki.handover]:us[Math.max(0,B-1)],vt=us[B],ht=B===0?1:ai(Ve(Q,0,B===9?.14:.32));if(Zi.set(...et.t).lerp(Mh.set(...vt.t),ht),Yi.set(...et.p).lerp(zo.set(...vt.p),ht),B===9){const _e=ai(Ve(Q,.86,1));Zi.lerp(Mh.set(...us[Ki.handover].t),_e),Yi.lerp(zo.set(...us[Ki.handover].p),_e)}const Pt=zo.copy(Yi).sub(Zi);let Wt=Math.sin(w*.12)*.025;B===ti-1&&(Wt+=-.22+.5*ai(Ve(Q,.25,1))),B===6&&(Wt+=-.12+.24*ai(Q)),Pt.applyAxisAngle(Sh,Wt+Qn.sx*.06),Pt.y+=Qn.sy*.25;const Lt=B===6||B===9||B>=Ki.basin&&B<=Ki.vent;Pt.multiplyScalar(Lt?Math.min(Jr,1.3):Jr),Yi.copy(Zi).add(Pt)},fs=(g,w,F,B=!0)=>{let Q=null;for(const et of g){const vt=B?Ve(w,et.t0,et.t1):0;et.mesh.visible=vt>0,et.mesh.scale.y=Math.max(.001,ai(vt)),vt>0&&vt<1&&(Q={w:et,p:vt})}if(F&&Q){const{w:et,p:vt}=Q,ht=et.rect,Pt=ht.u0+(ht.u1-ht.u0)*(.5+.38*Math.sin(vt*Math.PI*7)),Wt=ht.v0+(ht.v1-ht.v0)*ai(vt);return sr(F,et.surf,Pt,Wt,.004),!0}return!1},rd=g=>g<6.04?null:g<7&&At.corner===null?g<6.5?"trim":"jolly":At.corner??"jolly",od=g=>xd(g,At.button),ad=(g,w,F,B)=>{const Q=es(g,.04,.38,.04);rr.visible=Q>0,ie.opacity=Q*(.75+.25*Math.sin(F*20));const et=Ve(g,.06,.34);if(et>0&&et<1)if(et<.5){const ot=et/.5;sr(Ne.straight,tn("floor"),1.7+Math.sin(ot*Math.PI)*.2,.5+ot*1.6,0,0,(ot-.5)*.9)}else{const ot=(et-.5)/.5;sr(Ne.straight,tn("back"),.3+ot*2.4,1.15,0,0,Math.PI/2)}else Ne.straight.visible=!1;fs(L.sand,g,Ne.grinder)||(Ne.grinder.visible=!1),Kr.rotation.z=F*40;const ht=es(g,.38,.6,.03);if(Bo.visible=ht>0&&Ne.grinder.visible,sl.opacity=ht*.7,Bo.visible){for(let ot=0;ot<nl;ot++){let Ut=or[ot*3+1];if(Ut-=w*(.6+ot%5*.15),Ut<=0){const he=nd()*Math.PI*2;Pi[ot*3]=Ne.grinder.position.x+Math.cos(he)*.15,Pi[ot*3+1]=.02,Pi[ot*3+2]=Ne.grinder.position.z+Math.sin(he)*.15,or[ot*3]=Math.cos(he)*.25,or[ot*3+2]=Math.sin(he)*.25,Ut=1}or[ot*3+1]=Ut,Pi[ot*3]=Pi[ot*3]+or[ot*3]*w,Pi[ot*3+1]=Pi[ot*3+1]+w*.12,Pi[ot*3+2]=Pi[ot*3+2]+or[ot*3+2]*w}il.getAttribute("position").needsUpdate=!0}const Pt=fs(L.primer,g,Ne.roller),Wt=Ve(g,Oh.from,Oh.to);hn.visible=Wt>0,hn.position.y=(1-Yn(Wt))*.9;const Lt=Ve(g,Xo.from,Xo.to);nt.visible=Lt>0,nt.scale.y=Math.max(.001,Yn(Lt)),tn("tubFront").group.visible=g>=Xo.to,tn("tubSide").group.visible=g>=Xo.to;const _e=Ve(g,1.04,1.28);ee.visible=_e>0,ee.position.y=(1-Yn(_e))*.9;const Ae=Ve(g,1.28,1.6);kt.visible=Ae>0,kt.scale.y=Math.max(.01,Yn(Ae));const Ue=Ve(g,1.52,1.86);Ne.lath.visible=Ue>0&&Ue<1,Ne.lath.position.set(Zn/2,.03,1.15-ai(Ue)*1),Ne.lath.rotation.y=Math.sin(Ue*Math.PI*6)*.04;const yn=es(g,1.58,2,.08);T.opacity=yn*.95,we.forEach(ot=>{ot.visible=yn>0;const Ut=(F*.35+ot.userData.phase)%1;ot.position.set(ot.userData.x,.006-.012*(1-Ut)*0,1.05-Ut*.82),ot.scale.setScalar(.9+.2*Math.sin(Ut*Math.PI))});for(const ot of on){const Ut=Ve(g,ot.t0,ot.t1);ot.obj.visible=Ut>0;const he=Math.max(.001,Yn(Ut));ot.axis==="x"?ot.obj.scale.set(he,1,1):ot.obj.scale.setScalar(he)}const Ge=fs(L.wp1,g,Ne.roller),Je=fs(L.wp1Floor,g,Ne.float),fe=At.waterproof==="A",ln=fs(L.wpA,g,fe?Ne.roller:null,fe),ne=fs(L.wpAFloor,g,fe?Ne.float:null,fe)||Je;fs(L.wpB,g,null,!fe);const nn=fs(L.wpBand,g,fe?null:Ne.roller,!fe);for(const ot of Ze){const Ut=fe?0:Ve(g,ot.t0,ot.t1);ot.obj.visible=Ut>0,ot.obj.scale.set(Math.max(.001,Yn(Ut)),1,1)}!Pt&&!ln&&!Ge&&!nn&&(Ne.roller.visible=!1);let Ce=null;for(const ot of Rs){const Ut=Ve(g,ot.t0-ot.lead,ot.t0+ot.dur*.15);ot.patch.visible=Ut>0,ot.patch.scale.x=Math.max(.001,Yn(Ut)),Ut>0&&Ut<1&&(Ce={t:ot,p:Ut});const he=Ve(g,ot.t0,ot.t0+ot.dur);if(ot.mesh.visible=he>0,he>0){const zn=ai(Ve(he,.3,.8)),hr=1-Yn(Ve(he,.55,1));ot.mesh.rotation.set((1-zn)*.18,(1-zn)*Math.PI,0),ot.mesh.position.z=Me+re/2+hr*.42}const qn=Ve(g,ot.g0,ot.g0+.09);ot.grout.visible=qn>0,ot.grout.scale.setScalar(Math.max(.001,Yn(qn)))}if(Ce&&g>=4&&g<6){const{t:ot,p:Ut}=Ce,he=ot.rect,qn=(he.v0+he.v1)/2+Math.sin(Ut*Math.PI*4)*(he.v1-he.v0)*.2;sr(Ne.trowel,ot.surf,he.u0+(he.u1-he.u0)*Ut,qn,.012,.55,.2)}else Ne.trowel.visible=!1;const ce=Ve(g,4.9,4.98);ge.visible=ce>0,ge.position.y=(1-Yn(ce))*.3;const Ye=Md(g,At.focus,B,ti+1),Rn=Ye.cabinetOpen?1:0;if(P.visible=g>=Ki.cabinet,At.door+=(Rn-At.door)*Math.min(1,w*4),Xn&&g>5.9){const ot=Xn.rect,Ut=ot.u1-ot.u0,he=ai(At.door)*1.25;Xn.mesh.rotation.set(0,he,0),Xn.mesh.position.x=ot.u1-Ut/2*Math.cos(he),Xn.mesh.position.z=Me+re/2+Ut/2*Math.sin(he),Xn.patch.visible=!1,Xn.grout.visible=!1}for(const ot of Ps){const{tile:Ut,detail:he}=ot;if(g<5.9)continue;const qn=he===ti+1&&Ye.accessoriesOpen||B&&At.focus===he?1.1:0;if(ot.angle+=(qn-ot.angle)*Math.min(1,w*4),ot.tilt){const zn=ot.angle*.75,hr=(Ut.rect.v1-Ut.rect.v0)/2;Ut.mesh.rotation.set(zn,0,0),Ut.mesh.position.y=Ut.rect.v0+hr*Math.cos(zn),Ut.mesh.position.z=Me+re/2+hr*Math.sin(zn)}else{Ut.mesh.rotation.y=ot.angle;const zn=(Ut.rect.u1-Ut.rect.u0)/2;Ut.mesh.position.x=Ut.rect.u1-zn*Math.cos(Ut.mesh.rotation.y),Ut.mesh.position.z=Me+re/2+zn*Math.sin(Ut.mesh.rotation.y)}Ut.patch.visible=!1,Ut.grout.visible=!1}const ps=Ps.some(ot=>ot.detail===ti+1&&ot.angle>.15);qr.visible=ps;const Us=rd(g),Qr=Ve(g,6.04,6.16);Wi.visible=Us==="trim",Wi.scale.y=Math.max(.001,g<6.5?Yn(Qr):1),Ls.visible=Us==="jolly",kr.visible=Us==="trim",tr.visible=Us==="jolly";const Li=od(g);Object.keys(Wn).forEach(ot=>Wn[ot].group.visible=ot===Li);let Vo=es(g,10.72,10.84,.05);if(g>=9&&g<10){const ot=Sd.indexOf(Li),Ut=At.button?9:Bh[ot],he=At.button?9.86:Math.min(9.86,Bh[ot+1]);Vo=es(g,Ut+(he-Ut)*.55,Ut+(he-Ut)*.75,.03)}Wn[Li].press.position.z=-Vo*.004,X.opacity=es(g,9.04,9.95,.08)*(.55+.45*Math.sin(F*3));const di=Ve(g,7.06,7.86);if(di>0&&di<1){const ot=di<.55,Ut=ot?di/.55:(di-.55)/.45,he=tn(ot?"back":"left"),qn=ot?.2+Ut*2.8:.3+Ut*1.3,zn=(ot&&qn>dn?.9:.3)+Math.abs(Math.sin(Ut*Math.PI*5))*1.4;sr(Ne.float,he,qn,zn,.017,0,.7)}else ne||(Ne.float.visible=!1);const ms=Ve(g,7.1,7.55)*(1-Ve(g,8.1,8.75));j.roughness=.14+.62*ms,j.clearcoat=.55*(1-ms),j.color.copy(sd).lerp(id,ms);const gs=Ve(g,8.06,8.78);if(gs>0&&gs<1){const ot=gs<.6,Ut=ot?gs/.6:(gs-.6)/.4,he=tn(ot?"back":"left"),qn=(ot?.2+Ut*2.8:.3+Ut*1.3)+Math.cos(F*9)*.06,zn=(ot&&qn>dn?1.4:1)+Math.sin(Ut*Math.PI*4)*.5+Math.sin(F*9)*.05;sr(Ne.sponge,he,qn,zn,.016)}else Ne.sponge.visible=!1;const cl=Ve(g,8.45,9);I.intensity=es(g,8.45,9,.1)*6,I.position.set(-.2+cl*3.4,1.5,.7);for(const ot of Re){const Ut=Ve(g,ot.t0,ot.t1);ot.obj.visible=Ut>0;const he=Yn(Ut);ot.obj.position.set(ot.base.x+ot.from[0]*(1-he),ot.base.y+ot.from[1]*(1-he),ot.base.z+ot.from[2]*(1-he))}Uo.visible=ps;{const ot=g-Ki.basin,Ut=ot>=.1&&ot<.4||B&&(At.focus===Ki.basin||At.focus===ti)?1:0;Xr+=(Ut-Xr)*Math.min(1,w*3),gh.forEach((hr,fd)=>{hr.position.x=Xr*(fd===0?.34:.26)}),Za.intensity=Xr*1.6,Ya.color.copy(rl).lerp(ol,Xr);const he=B&&At.focus===ti+6;Ka=he?Math.min(1,Ka+w/2):0;const qn=he?ai(Ka):Math.min(ai(Ve(ot,.3,.62)),1-ai(Ve(ot,.84,.97)));Vr.position.y=qn*.24;const zn=he?0:Math.max(0,qn-.35);Vr.position.x=zn*.42,Vr.rotation.z=-zn*.6}const hl=Ps.some(ot=>ot.tilt&&ot.angle>.05);Is.visible=g>=12.2&&!hl,Is.userData.slot.visible=g>=6,nr.visible=Ye.decorationsVisible,Oo.visible=g>=5.9,fn.opacity=.2*Yn(Ve(g,14.04,14.22)),Pe.visible=g<14.1;const Si=At.mood,ul=Math.max(ai(Ve(g,10,10.2)),Si)*(!B||At.roomLit?1:0);E.intensity=ul*(9+Si*3),C.intensity=ul*(7+Si*5),R.intensity=ul*(3+Si*2);const fl=Wx(At.nicheLit,g>=5.9),Uh=fl.shower;v.intensity=Uh*(1.6+Si*1.8),Tt.color.copy(rl).lerp(ol,Uh),b.intensity=fl.wc*(1.4+Si*1.6),cn.color.copy(rl).lerp(ol,fl.wc);const Wo=B&&!At.roomLit?.12:1;d.intensity=1.75*(1-.86*Si)*Wo,y.intensity=.45*(1-.9*Si)*Wo,m.intensity=.25*(1-.6*Si)*Math.max(Wo,.4),l.environmentIntensity=.45*(1-.72*Si)*Math.max(Wo,.3),f.copy(h).lerp(p,Si);const ud=B&&(At.moodTarget>0||At.tubTarget>0)?1:0;At.candles+=(ud-At.candles)*Math.min(1,w*3),Yr.visible=At.candles>.02,Yr.scale.setScalar(1),_h.forEach(ot=>{const Ut=ot.userData.seed,he=.85+.15*Math.sin(F*13+Ut)+.08*Math.sin(F*31+Ut*2);ot.scale.set(At.candles*he,At.candles*(.8+.4*he),At.candles*he)}),H.intensity=At.candles*(1.4+.35*Math.sin(F*11)+.2*Math.sin(F*23));const Fh=B&&Kl(At.tubTarget>0,At.bathHovered,B)>0?1:0,dl=Math.max(es(g,14.5,14.8,.04),B?Math.max(At.shower,Fh):0);if(Zr.visible=dl>.01,el.opacity=dl*.75,hs.visible=Zr.visible,hs.material.opacity=dl*.35,hs.scale.setScalar(.8+.08*Math.sin(F*6)),Zr.visible){for(let ot=0;ot<Qa;ot++){let Ut=ir[ot*3+1]-w*(2.6+ot%7*.12);Ut<.02&&(Ut+=2.2),ir[ot*3+1]=Ut}tl.getAttribute("position").needsUpdate=!0}const pl=B?At.tub:0;In.visible=pl>.005,In.position.y=.16+Yn(pl)*.32+Math.sin(F*1.7)*.0012,ue.opacity=Math.min(.6,pl*4);const ml=Kl(At.tubTarget>0,At.bathHovered,B)>0&&At.tub<.995;if(i.dataset.bathFilling=String(ml),i.dataset.bathHovered=String(At.bathHovered),i.dataset.waterLevel=At.tub.toFixed(3),i.dataset.roomLit=String(At.roomLit),i.dataset.nichesLit=String(At.nicheLit),ii.visible=ml,ml){const Ut=In.visible?In.position.y:.16;ii.scale.y=.8-Ut,ii.position.set(2.35,(.8+Ut)/2,.19)}At.basin+=(Fh-At.basin)*Math.min(1,w*1.2),er.visible=At.basin>.02,qa.opacity=Math.min(.6,At.basin*2),er.visible&&(er.scale.y=1.018-.79,er.position.set(.487,(1.018+.79)/2,3.343)),Ds.visible=At.basin>.02,Ds.position.y=.742+Yn(Math.min(1,At.basin))*.042,Xa.opacity=Math.min(.55,At.basin*2.2)};let Eh=new Map,bh=new Map;const ld={niche:[r.x0+Zt/2,Fo+.01,-.02]},cd={},Mi=new N,Th=(g,w,F,B,Q,et=!1)=>{if(Mi.set(...w).project(S),et&&Mi.z<=1){const Pt=1-24/B;Mi.x=Math.max(-Pt,Math.min(Pt,Mi.x)),Mi.y=Math.max(-.9,Math.min(.9,Mi.y))}if(F<=.001||Mi.z>1||Math.abs(Mi.x)>1.05||Math.abs(Mi.y)>1.05){g.style.opacity!=="0"&&(g.style.opacity="0"),g.style.pointerEvents!=="none"&&(g.style.pointerEvents="none");return}const vt=(Mi.x*.5+.5)*B,ht=(-Mi.y*.5+.5)*Q;g.style.opacity=String(F),g.style.transform=`translate3d(${vt.toFixed(1)}px, ${ht.toFixed(1)}px, 0)`};let ko=0;const hd=(g,w,F,B,Q)=>{for(const et of _d){const vt=Eh.get(et.id);if(!vt)continue;let ht=es(g,et.from,et.to,.06);et.id==="trim"&&At.corner!==null&&(ht=g>=6&&g<7&&At.corner==="trim"?1:0),et.id==="jolly"&&At.corner!==null&&(ht=g>=6&&g<7&&At.corner==="jolly"?1:0),et.id.startsWith("btn-")&&At.button!==null&&(ht=g>=9&&g<10&&et.id===`btn-${At.button}`?1:0),et.variant&&et.variant!==At.waterproof&&(ht=0),et.id.startsWith("wp")&&w&&(ht=0),Th(vt,ld[et.id]??et.pos,ht,B,Q)}ko+=((w&&!lr?1:0)-ko)*Math.min(1,F*4);for(const et of[...vd,..._s.map((vt,ht)=>({stage:ti+ht,pos:[...vt.pos]}))]){const vt=bh.get(et.stage);if(!vt)continue;const ht=At.focus!==null&&At.focus!==et.stage?ko*.35:ko;Th(vt,cd[et.stage]??et.pos,ht,B,Q,!0),vt.style.pointerEvents=ht>.3?"auto":"none"}};let ds=1,Ns=1;const wh=()=>{ds=Math.max(1,i.clientWidth),Ns=Math.max(1,i.clientHeight),c.setSize(ds,Ns,!1);const g=ds/Ns;S.aspect=g,S.fov=g<.8?50:40,Jr=g>=1.45?1:Math.pow(1.45/g,g<.8?.8:.7);const w=g<.8?Ns*.13:0,F=ds>=1024&&g>1.1?-ds*.07:0;w||F?S.setViewOffset(ds,Ns,F,w,ds,Ns):S.clearViewOffset(),S.updateProjectionMatrix()},Ah=new ResizeObserver(wh);Ah.observe(i),wh();let si=0,ar=!s,lr=!1,Un=null;const cr=g=>{ar!==g&&(ar=g,e.onPlayingChange(g))},Rh=()=>{Un&&(Un.dispose(),Un=null,Ho.copy(S.position))},Ch=new Dm,Ph=new mt,Lh=g=>{if(g.pointerType!=="mouse")return;const w=i.getBoundingClientRect();if(Qn.x=(g.clientX-w.left)/w.width*2-1,Qn.y=(g.clientY-w.top)/w.height*2-1,si>=1&&g.target===t){Ph.set(Qn.x,-Qn.y),Ch.setFromCamera(Ph,S);const F=Ch.intersectObjects([hn,...fi.filter(B=>B.surf.def.id.startsWith("tub")).map(B=>B.mesh)],!0);At.bathHovered=F.length>0}else At.bathHovered=!1},Dh=()=>{At.bathHovered=!1};i.addEventListener("pointermove",Lh),i.addEventListener("pointerleave",Dh);let al=performance.now();const ll={t:0},Ih=g=>{const w=Math.max(0,Math.min(.1,(g-al)/1e3));al=g,ll.t+=w,ar&&!lr&&(si=Math.min(1,si+w/pd),si>=1&&cr(!1));const F=si>=1,B=Math.max(0,Math.min(md(si),ti-1e-4)),Q=Math.min(1,w*1.6);At.mood+=((F?At.moodTarget:0)-At.mood)*Q,At.shower+=(At.showerTarget-At.shower)*Math.min(1,w*3);const et=Kl(At.tubTarget>0,At.bathHovered,F);if(At.tub=et>At.tub?Math.min(et,At.tub+w*.12):Math.max(et,At.tub-w*.25),ad(B,w,ll.t,F),Qn.sx+=(Qn.x-Qn.sx)*Math.min(1,w*3),Qn.sy+=(Qn.y-Qn.sy)*Math.min(1,w*3),lr&&Un)Un.update();else{yh(B,ll.t,F);const vt=1-Math.exp(-w*(At.focus!==null?2.4:3.2));Ho.lerp(Yi,vt),Go.lerp(Zi,vt),S.position.copy(Ho),S.lookAt(Go)}c.render(l,S),hd(B,F,w,ds,Ns),e.onFrame(si)},Nh=new IntersectionObserver(g=>{g.some(F=>F.isIntersecting)?(al=performance.now(),c.setAnimationLoop(Ih)):c.setAnimationLoop(null)});Nh.observe(i),c.setAnimationLoop(Ih),yh(0,0,!1),Ho.copy(Yi),Go.copy(Zi),e.onPlayingChange(ar),requestAnimationFrame(()=>{i.dataset.sceneReady="true",e.onReady()});const $r={play(){lr&&$r.setFreeView(!1),si>=1&&(si=0,At.focus=null),cr(!0)},pause(){cr(!1)},toggle(){ar?$r.pause():$r.play()},seek(g){si=Wa(g),si<1&&(At.focus=null),cr(!1)},seekStage(g){const w=Math.max(0,Math.min(ti-1,g));At.focus=null,si=gd(w+.001),cr(!0)},getProgress:()=>si,isPlaying:()=>ar,setGrout:xh,setWaterproof(g){At.waterproof=g},setCorner(g){At.corner=g},setButton(g){At.button=g},setNicheLight(g){At.nicheLit=g},setMood(g){At.moodTarget=g?1:0},setRoomLight(g){At.roomLit=g},setShower(g){At.showerTarget=g?1:0},setTub(g){At.tubTarget=g?1:0},focus(g){lr&&$r.setFreeView(!1),At.focus=g},setFreeView(g){lr=g,g?(cr(!1),Un=new Px(S,t),Un.target.copy(Go),Un.enableDamping=!0,Un.dampingFactor=.08,Un.enablePan=!1,Un.minDistance=.8,Un.maxDistance=9*Jr,Un.minPolarAngle=.2,Un.maxPolarAngle=1.48,Un.minAzimuthAngle=.02,Un.maxAzimuthAngle=1.55,Un.update()):Rh()},setLabelElements(g){Eh=g},setHotspotElements(g){bh=g},dispose(){c.setAnimationLoop(null),Nh.disconnect(),Ah.disconnect(),i.removeEventListener("pointermove",Lh),i.removeEventListener("pointerleave",Dh),Rh(),l.traverse(g=>{const w=g;w.geometry&&w.geometry.dispose()}),Z.forEach(g=>g.dispose()),c.dispose()}};return $r}export{tM as createBathroomScene};
