import{D as We,F as Ms,S as Id,T as Nd,p as Ud,a as ii,s as Fd,b as ia,L as Od,H as Bd,c as zd,d as Hd,e as iu,B as su,f as Gd}from"./index-CDko4xCT.js";const rh="187",Cr={ROTATE:0,DOLLY:1,PAN:2},Rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kd=0,ru=1,Vd=2,So=1,Wd=2,_o=3,Ys=0,Jn=1,zn=2,Pr=0,yo=1,ou=2,au=3,lu=4,Xd=5,wr=100,qd=101,Yd=102,Zd=103,Kd=104,Jd=200,$d=201,Qd=202,jd=203,Ef=204,bf=205,tp=206,ep=207,np=208,ip=209,sp=210,rp=211,op=212,ap=213,lp=214,pc=0,mc=1,gc=2,Ao=3,_c=4,vc=5,xc=6,Mc=7,oh=0,cp=1,hp=2,as=0,Tf=1,wf=2,Af=3,ah=4,Rf=5,Cf=6,Pf=7,Lf=300,Ir=301,Ro=302,Nl=303,Ul=304,Ga=1e3,rs=1001,Sc=1002,Hn=1003,up=1004,sa=1005,ei=1006,Fl=1007,As=1008,hi=1009,Df=1010,If=1011,Co=1012,lh=1013,Gi=1014,Ri=1015,ki=1016,ch=1017,hh=1018,Nr=1020,Nf=35902,Uf=35899,Ff=1021,Of=1022,Bi=1023,Cs=1026,Rs=1027,uh=1028,fh=1029,Zs=1030,dh=1031,ph=1033,Na=33776,Ua=33777,Fa=33778,Oa=33779,yc=35840,Ec=35841,bc=35842,Tc=35843,wc=36196,Ac=37492,Rc=37496,Cc=37488,Pc=37489,ka=37490,Lc=37491,Dc=37808,Ic=37809,Nc=37810,Uc=37811,Fc=37812,Oc=37813,Bc=37814,zc=37815,Hc=37816,Gc=37817,kc=37818,Vc=37819,Wc=37820,Xc=37821,qc=36492,Yc=36494,Zc=36495,Kc=36283,Jc=36284,Va=36285,$c=36286,fp=3200,Wa=0,dp=1,ws="",ti="srgb",Xa="srgb-linear",qa="linear",nn="srgb",Ol=7680,pp=519,mp=512,gp=513,_p=514,Bf=515,vp=516,xp=517,zf=518,Hf=519,Mp=35044,cu="300 es",Ci=2e3,Po=2001;function Sp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ya(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yp(){const i=Ya("canvas");return i.style.display="block",i}const hu={};function uu(...i){const t="THREE."+i.shift();console.log(t,...i)}function Gf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ae(...i){i=Gf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ge(...i){i=Gf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Lr(...i){const t=i.join(" ");t in hu||(hu[t]=!0,ae(...i))}function Ep(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const bp={[pc]:pc,[gc]:xc,[_c]:_c,[Ao]:vc,[mc]:mc,[xc]:gc,[Mc]:Mc,[vc]:Ao};class Ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ba=Math.PI/180,Za=180/Math.PI;function Br(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[e&63|128]+Gn[e>>8&255]+"-"+Gn[e>>16&255]+Gn[e>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function Tp(i,t){return(i%t+t)%t}function Bl(i,t,e){return(1-e)*i+e*t}function wp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ap(i,t){if(t.constructor===Float32Array)return i;const e=mh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Rp(i,t){if(t.constructor===Float32Array)return i;const e=mh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Cp={DEG2RAD:Ba},Th=class Th{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Th.prototype.isVector2=!0;let mt=Th;class Vi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3],d=r[o+0],u=r[o+1],_=r[o+2],M=r[o+3];if(p!==M||c!==d||l!==u||h!==_){let g=c*d+l*u+h*_+p*M;g<0&&(d=-d,u=-u,_=-_,M=-M,g=-g);let f=1-a;if(g<.9995){const y=Math.acos(g),A=Math.sin(y);f=Math.sin(f*y)/A,a=Math.sin(a*y)/A,c=c*f+d*a,l=l*f+u*a,h=h*f+_*a,p=p*f+M*a}else{c=c*f+d*a,l=l*f+u*a,h=h*f+_*a,p=p*f+M*a;const y=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=y,l*=y,h*=y,p*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[o],d=r[o+1],u=r[o+2],_=r[o+3];return t[e]=a*_+h*p+c*u-l*d,t[e+1]=c*_+h*d+l*p-a*u,t[e+2]=l*_+h*u+a*d-c*p,t[e+3]=h*_-a*p-c*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),p=a(r/2),d=c(n/2),u=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*p+l*u*_,this._y=l*u*p-d*h*_,this._z=l*h*_+d*u*p,this._w=l*h*p-d*u*_;break;case"YXZ":this._x=d*h*p+l*u*_,this._y=l*u*p-d*h*_,this._z=l*h*_-d*u*p,this._w=l*h*p+d*u*_;break;case"ZXY":this._x=d*h*p-l*u*_,this._y=l*u*p+d*h*_,this._z=l*h*_+d*u*p,this._w=l*h*p-d*u*_;break;case"ZYX":this._x=d*h*p-l*u*_,this._y=l*u*p+d*h*_,this._z=l*h*_-d*u*p,this._w=l*h*p+d*u*_;break;case"YZX":this._x=d*h*p+l*u*_,this._y=l*u*p+d*h*_,this._z=l*h*_-d*u*p,this._w=l*h*p-d*u*_;break;case"XZY":this._x=d*h*p-l*u*_,this._y=l*u*p-d*h*_,this._z=l*h*_+d*u*p,this._w=l*h*p+d*u*_;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],p=e[10],d=n+a+p;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(n>a&&n>p){const u=2*Math.sqrt(1+n-a-p);this._w=(h-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>p){const u=2*Math.sqrt(1+a-n-p);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+p-n-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const wh=class wh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+c*l+o*p-a*h,this.y=n+c*h+a*l-r*p,this.z=s+c*p+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zl.copy(this).projectOnVector(t),this.sub(zl)}reflect(t){return this.sub(zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wh.prototype.isVector3=!0;let I=wh;const zl=new I,fu=new Vi,Ah=class Ah{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],p=n[7],d=n[2],u=n[5],_=n[8],M=s[0],g=s[3],f=s[6],y=s[1],A=s[4],E=s[7],C=s[2],R=s[5],v=s[8];return r[0]=o*M+a*y+c*C,r[3]=o*g+a*A+c*R,r[6]=o*f+a*E+c*v,r[1]=l*M+h*y+p*C,r[4]=l*g+h*A+p*R,r[7]=l*f+h*E+p*v,r[2]=d*M+u*y+_*C,r[5]=d*g+u*A+_*R,r[8]=d*f+u*E+_*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],p=h*o-a*l,d=a*c-h*r,u=l*r-o*c,_=e*p+n*d+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=p*M,t[1]=(s*l-h*n)*M,t[2]=(a*n-s*o)*M,t[3]=d*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=u*M,t[7]=(n*c-l*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hl.makeScale(t,e)),this}rotate(t){return Lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hl.makeRotation(-t)),this}translate(t,e){return Lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ah.prototype.isMatrix3=!0;let xe=Ah;const Hl=new xe,du=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pp(){const i={enabled:!0,workingColorSpace:Xa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nn&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nn&&(s.r=Dr(s.r),s.g=Dr(s.g),s.b=Dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ws?qa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xa]:{primaries:t,whitePoint:n,transfer:qa,toXYZ:du,fromXYZ:pu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:t,whitePoint:n,transfer:nn,toXYZ:du,fromXYZ:pu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),i}const Ie=Pp();function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fr;class Lp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{fr===void 0&&(fr=Ya("canvas")),fr.width=t.width,fr.height=t.height;const s=fr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=fr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ya("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ls(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ls(e[n]/255)*255):e[n]=ls(e[n]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dp=0;class gh{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Br(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gl(s[o].image)):r.push(Gl(s[o]))}else r=Gl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let Ip=0;const kl=new I;class Xn extends Ps{constructor(t=Xn.DEFAULT_IMAGE,e=Xn.DEFAULT_MAPPING,n=rs,s=rs,r=ei,o=As,a=Bi,c=hi,l=Xn.DEFAULT_ANISOTROPY,h=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Br(),this.name="",this.source=new gh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(kl).x}get height(){return this.source.getSize(kl).y}get depth(){return this.source.getSize(kl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ga:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case Sc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ga:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case Sc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Lf;Xn.DEFAULT_ANISOTROPY=1;const Rh=class Rh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],p=c[8],d=c[1],u=c[5],_=c[9],M=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+M)<.1&&Math.abs(_+g)<.1&&Math.abs(l+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(l+1)/2,E=(u+1)/2,C=(f+1)/2,R=(h+d)/4,v=(p+M)/4,b=(_+g)/4;return A>E&&A>C?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=R/n,r=v/n):E>C?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=R/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=v/r,s=b/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-_)*(g-_)+(p-M)*(p-M)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(p-M)/y,this.z=(d-h)/y,this.w=Math.acos((l+u+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this.w=Ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this.w=Ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rh.prototype.isVector4=!0;let dn=Rh;class Np extends Ps{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new dn(0,0,t,e),this.scissorTest=!1,this.viewport=new dn(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Xn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new gh(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Np{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kf extends Xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Up extends Xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Qa=class Qa{constructor(t,e,n,s,r,o,a,c,l,h,p,d,u,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,p,d,u,_,M,g)}set(t,e,n,s,r,o,a,c,l,h,p,d,u,_,M,g){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=p,f[14]=d,f[3]=u,f[7]=_,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qa().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/dr.setFromMatrixColumn(t,0).length(),r=1/dr.setFromMatrixColumn(t,1).length(),o=1/dr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const d=o*h,u=o*p,_=a*h,M=a*p;e[0]=c*h,e[4]=-c*p,e[8]=l,e[1]=u+_*l,e[5]=d-M*l,e[9]=-a*c,e[2]=M-d*l,e[6]=_+u*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,u=c*p,_=l*h,M=l*p;e[0]=d+M*a,e[4]=_*a-u,e[8]=o*l,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=u*a-_,e[6]=M+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,u=c*p,_=l*h,M=l*p;e[0]=d-M*a,e[4]=-o*p,e[8]=_+u*a,e[1]=u+_*a,e[5]=o*h,e[9]=M-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,u=o*p,_=a*h,M=a*p;e[0]=c*h,e[4]=_*l-u,e[8]=d*l+M,e[1]=c*p,e[5]=M*l+d,e[9]=u*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,u=o*l,_=a*c,M=a*l;e[0]=c*h,e[4]=M-d*p,e[8]=_*p+u,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=u*p+_,e[10]=d-M*p}else if(t.order==="XZY"){const d=o*c,u=o*l,_=a*c,M=a*l;e[0]=c*h,e[4]=-p,e[8]=l*h,e[1]=d*p+M,e[5]=o*h,e[9]=u*p-_,e[2]=_*p-u,e[6]=a*h,e[10]=M*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fp,t,Op)}lookAt(t,e,n){const s=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),Ss.crossVectors(n,si),Ss.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ss.crossVectors(n,si)),Ss.normalize(),ra.crossVectors(si,Ss),s[0]=Ss.x,s[4]=ra.x,s[8]=si.x,s[1]=Ss.y,s[5]=ra.y,s[9]=si.y,s[2]=Ss.z,s[6]=ra.z,s[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],p=n[5],d=n[9],u=n[13],_=n[2],M=n[6],g=n[10],f=n[14],y=n[3],A=n[7],E=n[11],C=n[15],R=s[0],v=s[4],b=s[8],V=s[12],D=s[1],B=s[5],W=s[9],J=s[13],L=s[2],q=s[6],Z=s[10],z=s[14],ft=s[3],$=s[7],tt=s[11],lt=s[15];return r[0]=o*R+a*D+c*L+l*ft,r[4]=o*v+a*B+c*q+l*$,r[8]=o*b+a*W+c*Z+l*tt,r[12]=o*V+a*J+c*z+l*lt,r[1]=h*R+p*D+d*L+u*ft,r[5]=h*v+p*B+d*q+u*$,r[9]=h*b+p*W+d*Z+u*tt,r[13]=h*V+p*J+d*z+u*lt,r[2]=_*R+M*D+g*L+f*ft,r[6]=_*v+M*B+g*q+f*$,r[10]=_*b+M*W+g*Z+f*tt,r[14]=_*V+M*J+g*z+f*lt,r[3]=y*R+A*D+E*L+C*ft,r[7]=y*v+A*B+E*q+C*$,r[11]=y*b+A*W+E*Z+C*tt,r[15]=y*V+A*J+E*z+C*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],p=t[6],d=t[10],u=t[14],_=t[3],M=t[7],g=t[11],f=t[15],y=c*u-l*d,A=a*u-l*p,E=a*d-c*p,C=o*u-l*h,R=o*d-c*h,v=o*p-a*h;return e*(M*y-g*A+f*E)-n*(_*y-g*C+f*R)+s*(_*A-M*C+f*v)-r*(_*E-M*R+g*v)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],p=t[9],d=t[10],u=t[11],_=t[12],M=t[13],g=t[14],f=t[15],y=e*a-n*o,A=e*c-s*o,E=e*l-r*o,C=n*c-s*a,R=n*l-r*a,v=s*l-r*c,b=h*M-p*_,V=h*g-d*_,D=h*f-u*_,B=p*g-d*M,W=p*f-u*M,J=d*f-u*g,L=y*J-A*W+E*B+C*D-R*V+v*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/L;return t[0]=(a*J-c*W+l*B)*q,t[1]=(s*W-n*J-r*B)*q,t[2]=(M*v-g*R+f*C)*q,t[3]=(d*R-p*v-u*C)*q,t[4]=(c*D-o*J-l*V)*q,t[5]=(e*J-s*D+r*V)*q,t[6]=(g*E-_*v-f*A)*q,t[7]=(h*v-d*E+u*A)*q,t[8]=(o*W-a*D+l*b)*q,t[9]=(n*D-e*W-r*b)*q,t[10]=(_*R-M*E+f*y)*q,t[11]=(p*E-h*R-u*y)*q,t[12]=(a*V-o*B-c*b)*q,t[13]=(e*B-n*V+s*b)*q,t[14]=(M*A-_*C-g*y)*q,t[15]=(h*C-p*A+d*y)*q,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,p=a+a,d=r*l,u=r*h,_=r*p,M=o*h,g=o*p,f=a*p,y=c*l,A=c*h,E=c*p,C=n.x,R=n.y,v=n.z;return s[0]=(1-(M+f))*C,s[1]=(u+E)*C,s[2]=(_-A)*C,s[3]=0,s[4]=(u-E)*R,s[5]=(1-(d+f))*R,s[6]=(g+y)*R,s[7]=0,s[8]=(_+A)*v,s[9]=(g-y)*v,s[10]=(1-(d+M))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=dr.set(s[0],s[1],s[2]).length();const a=dr.set(s[4],s[5],s[6]).length(),c=dr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),bi.copy(this);const l=1/o,h=1/a,p=1/c;return bi.elements[0]*=l,bi.elements[1]*=l,bi.elements[2]*=l,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=p,bi.elements[9]*=p,bi.elements[10]*=p,e.setFromRotationMatrix(bi),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Ci,c=!1){const l=this.elements,h=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let _,M;if(c)_=r/(o-r),M=o*r/(o-r);else if(a===Ci)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Po)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ci,c=!1){const l=this.elements,h=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),u=-(n+s)/(n-s);let _,M;if(c)_=1/(o-r),M=o/(o-r);else if(a===Ci)_=-2/(o-r),M=-(o+r)/(o-r);else if(a===Po)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Qa.prototype.isMatrix4=!0;let Xe=Qa;const dr=new I,bi=new Xe,Fp=new I(0,0,0),Op=new I(1,1,1),Ss=new I,ra=new I,si=new I,mu=new Xe,gu=new Vi;class Wi{constructor(t=0,e=0,n=0,s=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],p=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gu.setFromEuler(this),this.setFromQuaternion(gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bp=0;const _u=new I,pr=new Vi,$i=new Xe,oa=new I,ro=new I,zp=new I,Hp=new Vi,vu=new I(1,0,0),xu=new I(0,1,0),Mu=new I(0,0,1),Su={type:"added"},Gp={type:"removed"},mr={type:"childadded",child:null},Vl={type:"childremoved",child:null};class vn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const t=new I,e=new Wi,n=new Vi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new xe}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(vu,t)}rotateY(t){return this.rotateOnAxis(xu,t)}rotateZ(t){return this.rotateOnAxis(Mu,t)}translateOnAxis(t,e){return _u.copy(t).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vu,t)}translateY(t){return this.translateOnAxis(xu,t)}translateZ(t){return this.translateOnAxis(Mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oa.copy(t):oa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(ro,oa,this.up):$i.lookAt(oa,ro,this.up),this.quaternion.setFromRotationMatrix($i),s&&($i.extractRotation(s.matrixWorld),pr.setFromRotationMatrix($i),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Su),mr.child=t,this.dispatchEvent(mr),mr.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gp),Vl.child=t,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Su),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,t,zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,Hp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),p=o(t.shapes),d=o(t.skeletons),u=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}vn.DEFAULT_UP=new I(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fe extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kp={type:"move"};class Wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const M of t.hand.values()){const g=e.getJointPose(M,n),f=this._getHandJoint(l,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,_=.005;l.inputState.pinching&&d>u+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Xl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ie.workingColorSpace){if(t=Tp(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xl(o,r,t+1/3),this.g=Xl(o,r,t),this.b=Xl(o,r,t-1/3)}return Ie.colorSpaceToWorking(this,s),this}setStyle(t,e=ti){function n(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ti){const n=Vf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return Ie.workingToColorSpace(kn.copy(this),t),Math.round(Ae(kn.r*255,0,255))*65536+Math.round(Ae(kn.g*255,0,255))*256+Math.round(Ae(kn.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.workingToColorSpace(kn.copy(this),e);const n=kn.r,s=kn.g,r=kn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const p=o-a;switch(l=h<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ie.workingColorSpace){return Ie.workingToColorSpace(kn.copy(this),e),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=ti){Ie.workingToColorSpace(kn.copy(this),t);const e=kn.r,n=kn.g,s=kn.b;return t!==ti?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ys),this.setHSL(ys.h+t,ys.s+e,ys.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ys),t.getHSL(aa);const n=Bl(ys.h,aa.h,e),s=Bl(ys.s,aa.s,e),r=Bl(ys.l,aa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new ce;ce.NAMES=Vf;class Wf extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ti=new I,Qi=new I,ql=new I,ji=new I,gr=new I,_r=new I,yu=new I,Yl=new I,Zl=new I,Kl=new I,Jl=new dn,$l=new dn,Ql=new dn;class Ai{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ti.subVectors(t,e),s.cross(Ti);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ti.subVectors(s,e),Qi.subVectors(n,e),ql.subVectors(t,e);const o=Ti.dot(Ti),a=Ti.dot(Qi),c=Ti.dot(ql),l=Qi.dot(Qi),h=Qi.dot(ql),p=o*l-a*a;if(p===0)return r.set(0,0,0),null;const d=1/p,u=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-u-_,_,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ji.x),c.addScaledVector(o,ji.y),c.addScaledVector(a,ji.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Jl.setScalar(0),$l.setScalar(0),Ql.setScalar(0),Jl.fromBufferAttribute(t,e),$l.fromBufferAttribute(t,n),Ql.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Jl,r.x),o.addScaledVector($l,r.y),o.addScaledVector(Ql,r.z),o}static isFrontFacing(t,e,n,s){return Ti.subVectors(n,e),Qi.subVectors(t,e),Ti.cross(Qi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Ti.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ai.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ai.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;gr.subVectors(s,n),_r.subVectors(r,n),Yl.subVectors(t,n);const c=gr.dot(Yl),l=_r.dot(Yl);if(c<=0&&l<=0)return e.copy(n);Zl.subVectors(t,s);const h=gr.dot(Zl),p=_r.dot(Zl);if(h>=0&&p<=h)return e.copy(s);const d=c*p-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),e.copy(n).addScaledVector(gr,o);Kl.subVectors(t,r);const u=gr.dot(Kl),_=_r.dot(Kl);if(_>=0&&u<=_)return e.copy(r);const M=u*l-c*_;if(M<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(_r,a);const g=h*_-u*p;if(g<=0&&p-h>=0&&u-_>=0)return yu.subVectors(r,s),a=(p-h)/(p-h+(u-_)),e.copy(s).addScaledVector(yu,a);const f=1/(g+M+d);return o=M*f,a=d*f,e.copy(n).addScaledVector(gr,o).addScaledVector(_r,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class $s{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wi):wi.fromBufferAttribute(r,o),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),la.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(t.matrixWorld),this.union(la)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oo),ca.subVectors(this.max,oo),vr.subVectors(t.a,oo),xr.subVectors(t.b,oo),Mr.subVectors(t.c,oo),Es.subVectors(xr,vr),bs.subVectors(Mr,xr),Bs.subVectors(vr,Mr);let e=[0,-Es.z,Es.y,0,-bs.z,bs.y,0,-Bs.z,Bs.y,Es.z,0,-Es.x,bs.z,0,-bs.x,Bs.z,0,-Bs.x,-Es.y,Es.x,0,-bs.y,bs.x,0,-Bs.y,Bs.x,0];return!jl(e,vr,xr,Mr,ca)||(e=[1,0,0,0,1,0,0,0,1],!jl(e,vr,xr,Mr,ca))?!1:(ha.crossVectors(Es,bs),e=[ha.x,ha.y,ha.z],jl(e,vr,xr,Mr,ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ts),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ts=[new I,new I,new I,new I,new I,new I,new I,new I],wi=new I,la=new $s,vr=new I,xr=new I,Mr=new I,Es=new I,bs=new I,Bs=new I,oo=new I,ca=new I,ha=new I,zs=new I;function jl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zs.fromArray(i,r);const a=s.x*Math.abs(zs.x)+s.y*Math.abs(zs.y)+s.z*Math.abs(zs.z),c=t.dot(zs),l=e.dot(zs),h=n.dot(zs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Sn=new I,ua=new mt;let Vp=0;class Hi extends Ps{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mp,this.updateRanges=[],this.gpuType=Ri,this.version=0,this._normalizationScale=t!==void 0?mh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ua.fromBufferAttribute(this,e),ua.applyMatrix3(t),this.setXY(e,ua.x,ua.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix3(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ap(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Rp(t,this.array)}}class Xf extends Hi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qf extends Hi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class tn extends Hi{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Wp=new $s,ao=new I,tc=new I;class Qs{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ao.subVectors(t,this.center);const e=ao.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ao,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ao.copy(t.center).add(tc)),this.expandByPoint(ao.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Xp=0;const _i=new Xe,ec=new vn,Sr=new I,ri=new $s,lo=new $s,Nn=new I;class En extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sp(t)?qf:Xf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new xe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,e,n){return _i.makeTranslation(t,e,n),this.applyMatrix4(_i),this}scale(t,e,n){return _i.makeScale(t,e,n),this.applyMatrix4(_i),this}lookAt(t){return ec.lookAt(t),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tn(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Nn.addVectors(ri.min,lo.min),ri.expandByPoint(Nn),Nn.addVectors(ri.max,lo.max),ri.expandByPoint(Nn)):(ri.expandByPoint(lo.min),ri.expandByPoint(lo.max))}ri.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Nn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Nn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Nn.fromBufferAttribute(a,l),c&&(Sr.fromBufferAttribute(t,l),Nn.add(Sr)),s=Math.max(s,n.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Hi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[],l=new Uint8Array(n.count);for(let V=0;V<n.count;V++)a[V]=new I,c[V]=new I;const h=new I,p=new I,d=new I,u=new mt,_=new mt,M=new mt,g=new I,f=new I;function y(V,D,B){l[V]=l[D]=l[B]=1,h.fromBufferAttribute(n,V),p.fromBufferAttribute(n,D),d.fromBufferAttribute(n,B),u.fromBufferAttribute(r,V),_.fromBufferAttribute(r,D),M.fromBufferAttribute(r,B),p.sub(h),d.sub(h),_.sub(u),M.sub(u);const W=1/(_.x*M.y-M.x*_.y);isFinite(W)&&(g.copy(p).multiplyScalar(M.y).addScaledVector(d,-_.y).multiplyScalar(W),f.copy(d).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(W),a[V].add(g),a[D].add(g),a[B].add(g),c[V].add(f),c[D].add(f),c[B].add(f))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let V=0,D=A.length;V<D;++V){const B=A[V],W=B.start,J=B.count;for(let L=W,q=W+J;L<q;L+=3)y(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const E=new I,C=new I,R=new I,v=new I;function b(V){R.fromBufferAttribute(s,V),v.copy(R);const D=a[V];E.copy(D),E.sub(R.multiplyScalar(R.dot(D))).normalize(),C.crossVectors(v,D);const W=C.dot(c[V])<0?-1:1;o.setXYZW(V,E.x,E.y,E.z,W)}for(let V=0,D=n.count;V<D;++V)l[V]&&b(V);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Hi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,p=new I;if(t)for(let d=0,u=t.count;d<u;d+=3){const _=t.getX(d+0),M=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,g),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Nn.fromBufferAttribute(t,e),Nn.normalize(),t.setXYZ(e,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,p=a.normalized,d=new l.constructor(c.length*h);let u=0,_=0;for(let M=0,g=c.length;M<g;M++){a.isInterleavedBufferAttribute?u=c[M]*a.data.stride+a.offset:u=c[M]*h;for(let f=0;f<h;f++)d[_++]=l[u++]}return new Hi(d,h,p)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new En,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,p=l.length;h<p;h++){const d=l[h],u=t(d,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let p=0,d=l.length;p<d;p++){const u=l[p];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],p=r[l];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new I,qp=new I,Yp=new xe;class ss{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=nc.subVectors(n,e).cross(qp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(nc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yp.getNormalMatrix(t),s=this.coplanarPoint(nc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Zp=0;class cs extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=yo,this.side=Ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ef,this.blendDst=bf,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ol,this.stencilZFail=Ol,this.stencilZPass=Ol,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ss().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const es=new I,ic=new I,fa=new I,da=new I;class Oo{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,es)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=es.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(es.copy(this.origin).addScaledVector(this.direction,e),es.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ic.copy(t).add(e).multiplyScalar(.5),fa.copy(e).sub(t).normalize(),da.copy(this.origin).sub(ic);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fa),a=da.dot(this.direction),c=-da.dot(fa),l=da.lengthSq(),h=Math.abs(1-o*o);let p,d,u,_;if(h>0)if(p=o*c-a,d=o*a-c,_=r*h,p>=0)if(d>=-_)if(d<=_){const M=1/h;p*=M,d*=M,u=p*(p+o*d+2*a)+d*(o*p+d+2*c)+l}else d=r,p=Math.max(0,-(o*d+a)),u=-p*p+d*(d+2*c)+l;else d=-r,p=Math.max(0,-(o*d+a)),u=-p*p+d*(d+2*c)+l;else d<=-_?(p=Math.max(0,-(-o*r+a)),d=p>0?-r:Math.min(Math.max(-r,-c),r),u=-p*p+d*(d+2*c)+l):d<=_?(p=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(p=Math.max(0,-(o*r+a)),d=p>0?r:Math.min(Math.max(-r,-c),r),u=-p*p+d*(d+2*c)+l);else d=o>0?-r:r,p=Math.max(0,-(o*d+a)),u=-p*p+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ic).addScaledVector(fa,d),u}intersectSphere(t,e){if(t.radius<0)return null;es.subVectors(t.center,this.origin);const n=es.dot(this.direction),s=es.dot(es)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-d.z)*p,c=(t.max.z-d.z)*p):(a=(t.max.z-d.z)*p,c=(t.min.z-d.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,es)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,p=t.x-o.x,d=t.y-o.y,u=t.z-o.z,_=e.x-o.x,M=e.y-o.y,g=e.z-o.z,f=n.x-o.x,y=n.y-o.y,A=n.z-o.z,E=Math.abs(c),C=Math.abs(l),R=Math.abs(h);let v,b,V,D,B,W,J,L,q,Z,z,ft;if(E>=C&&E>=R?(V=c,W=p,q=_,ft=f,c>=0?(v=l,b=h,D=d,B=u,J=M,L=g,Z=y,z=A):(v=h,b=l,D=u,B=d,J=g,L=M,Z=A,z=y)):C>=R?(V=l,W=d,q=M,ft=y,l>=0?(v=h,b=c,D=u,B=p,J=g,L=_,Z=A,z=f):(v=c,b=h,D=p,B=u,J=_,L=g,Z=f,z=A)):(V=h,W=u,q=g,ft=A,h>=0?(v=c,b=l,D=p,B=d,J=_,L=M,Z=f,z=y):(v=l,b=c,D=d,B=p,J=M,L=_,Z=y,z=f)),V===0)return null;const $=v/V,tt=b/V,lt=1/V,Gt=D-$*W,Yt=B-tt*W,st=J-$*q,wt=L-tt*q,zt=Z-$*ft,qt=z-tt*ft,yt=zt*wt-qt*st,$t=Gt*qt-Yt*zt,qe=st*Yt-wt*Gt;if(s){if(yt<0||$t<0||qe<0)return null}else if((yt<0||$t<0||qe<0)&&(yt>0||$t>0||qe>0))return null;const te=yt+$t+qe;if(te===0)return null;const be=lt*(yt*W+$t*q+qe*ft);return(te>0?be<0:be>0)?null:this.at(be/te,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vo extends cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Eu=new Xe,Hs=new Oo,pa=new Qs,bu=new I,ma=new I,ga=new I,_a=new I,sc=new I,va=new I,Tu=new I,xa=new I;class ut extends vn{constructor(t=new En,e=new vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){va.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],p=r[c];h!==0&&(sc.fromBufferAttribute(p,t),o?va.addScaledVector(sc,h):va.addScaledVector(sc.sub(e),h))}e.add(va)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),Hs.copy(t.ray).recast(t.near),!(pa.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(pa,bu)===null||Hs.origin.distanceToSquared(bu)>(t.far-t.near)**2))&&(Eu.copy(r).invert(),Hs.copy(t.ray).applyMatrix4(Eu),!(n.boundingBox!==null&&Hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hs)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){const g=d[_],f=o[g.materialIndex],y=Math.max(g.start,u.start),A=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let E=y,C=A;E<C;E+=3){const R=a.getX(E),v=a.getX(E+1),b=a.getX(E+2);s=Ma(this,f,t,n,l,h,p,R,v,b),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const _=Math.max(0,u.start),M=Math.min(a.count,u.start+u.count);for(let g=_,f=M;g<f;g+=3){const y=a.getX(g),A=a.getX(g+1),E=a.getX(g+2);s=Ma(this,o,t,n,l,h,p,y,A,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){const g=d[_],f=o[g.materialIndex],y=Math.max(g.start,u.start),A=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let E=y,C=A;E<C;E+=3){const R=E,v=E+1,b=E+2;s=Ma(this,f,t,n,l,h,p,R,v,b),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const _=Math.max(0,u.start),M=Math.min(c.count,u.start+u.count);for(let g=_,f=M;g<f;g+=3){const y=g,A=g+1,E=g+2;s=Ma(this,o,t,n,l,h,p,y,A,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Kp(i,t,e,n,s,r,o,a){let c;if(t.side===Jn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ys,a),c===null)return null;xa.copy(a),xa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(xa);return l<e.near||l>e.far?null:{distance:l,point:xa.clone(),object:i}}function Ma(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ma),i.getVertexPosition(c,ga),i.getVertexPosition(l,_a);const h=Kp(i,t,e,n,ma,ga,_a,Tu);if(h){const p=new I;Ai.getBarycoord(Tu,ma,ga,_a,p),s&&(h.uv=Ai.getInterpolatedAttribute(s,a,c,l,p,new mt)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,a,c,l,p,new mt)),o&&(h.normal=Ai.getInterpolatedAttribute(o,a,c,l,p,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};Ai.getNormal(ma,ga,_a,d.normal),h.face=d,h.barycoord=p}return h}class Yf extends Xn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Hn,h=Hn,p,d){super(null,o,a,c,l,h,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wu extends Hi{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const yr=new Xe,Au=new Xe,Sa=[],Ru=new $s,Jp=new Xe,co=new ut,ho=new Qs;class $p extends ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Jp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $s),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yr),Ru.copy(t.boundingBox).applyMatrix4(yr),this.boundingBox.union(Ru)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yr),ho.copy(t.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(ho)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(n),t.ray.intersectsSphere(ho)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yr),Au.multiplyMatrices(n,yr),co.matrixWorld=Au,co.raycast(t,Sa);for(let o=0,a=Sa.length;o<a;o++){const c=Sa[o];c.instanceId=r,c.object=this,e.push(c)}Sa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new wu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yf(new Float32Array(s*this.count),s,this.count,uh,Ri));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gs=new Qs,Qp=new mt(.5,.5),ya=new I;class Lo{constructor(t=new ss,e=new ss,n=new ss,s=new ss,r=new ss,o=new ss){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ci,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],p=r[5],d=r[6],u=r[7],_=r[8],M=r[9],g=r[10],f=r[11],y=r[12],A=r[13],E=r[14],C=r[15];if(s[0].setComponents(l-o,u-h,f-_,C-y).normalize(),s[1].setComponents(l+o,u+h,f+_,C+y).normalize(),s[2].setComponents(l+a,u+p,f+M,C+A).normalize(),s[3].setComponents(l-a,u-p,f-M,C-A).normalize(),n)s[4].setComponents(c,d,g,E).normalize(),s[5].setComponents(l-c,u-d,f-g,C-E).normalize();else if(s[4].setComponents(l-c,u-d,f-g,C-E).normalize(),e===Ci)s[5].setComponents(l+c,u+d,f+g,C+E).normalize();else if(e===Po)s[5].setComponents(c,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(t){Gs.center.set(0,0,0);const e=Qp.distanceTo(t.center);return Gs.radius=.7071067811865476+e,Gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ya.x=s.normal.x>0?t.max.x:t.min.x,ya.y=s.normal.y>0?t.max.y:t.min.y,ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Cu=new Xe;class vh{constructor(){this.coordinateSystem=Ci,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Cu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Lo),n[s].setFromProjectionMatrix(Cu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Lo),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new vh().copy(this)}}class za extends cs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ka=new I,Ja=new I,Pu=new Xe,uo=new Oo,Ea=new Qs,rc=new I,Lu=new I;class Zf extends vn{constructor(t=new En,e=new za){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ka.fromBufferAttribute(e,s-1),Ja.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ka.distanceTo(Ja);t.setAttribute("lineDistance",new tn(n,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,t.ray.intersectsSphere(Ea)===!1)return;Pu.copy(s).invert(),uo.copy(t.ray).applyMatrix4(Pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let M=u,g=_-1;M<g;M+=l){const f=h.getX(M),y=h.getX(M+1),A=ba(this,t,uo,c,f,y,M);A&&e.push(A)}if(this.isLineLoop){const M=h.getX(_-1),g=h.getX(u),f=ba(this,t,uo,c,M,g,_-1);f&&e.push(f)}}else{const u=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let M=u,g=_-1;M<g;M+=l){const f=ba(this,t,uo,c,M,M+1,M);f&&e.push(f)}if(this.isLineLoop){const M=ba(this,t,uo,c,_-1,u,_-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ba(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Ka.fromBufferAttribute(a,s),Ja.fromBufferAttribute(a,r),e.distanceSqToSegment(Ka,Ja,rc,Lu)>n)return;rc.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(rc);if(!(l<t.near||l>t.far))return{distance:l,point:Lu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Du=new I,Iu=new I;class Nu extends Zf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Du.fromBufferAttribute(e,s),Iu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Du.distanceTo(Iu);t.setAttribute("lineDistance",new tn(n,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jp extends Zf{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Kf extends cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Uu=new Xe,Qc=new Oo,Ta=new Qs,wa=new I;class tm extends vn{constructor(t=new En,e=new Kf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,t.ray.intersectsSphere(Ta)===!1)return;Uu.copy(s).invert(),Qc.copy(t.ray).applyMatrix4(Uu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,p=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),u=Math.min(l.count,o.start+o.count);for(let _=d,M=u;_<M;_++){const g=l.getX(_);wa.fromBufferAttribute(p,g),Fu(wa,g,c,s,t,e,this)}}else{const d=Math.max(0,o.start),u=Math.min(p.count,o.start+o.count);for(let _=d,M=u;_<M;_++)wa.fromBufferAttribute(p,_),Fu(wa,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fu(i,t,e,n,s,r,o){const a=Qc.distanceSqToPoint(i);if(a<e){const c=new I;Qc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Jf extends Xn{constructor(t=[],e=Ir,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class em extends Xn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ur extends Xn{constructor(t,e,n=Gi,s,r,o,a=Hn,c=Hn,l,h=Cs,p=1){if(h!==Cs&&h!==Rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:p};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class $f extends Ur{constructor(t,e=Gi,n=Ir,s,r,o=Hn,a=Hn,c,l=Cs){const h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Qf extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class He extends En{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],p=[];let d=0,u=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(h,3)),this.setAttribute("uv",new tn(p,2));function _(M,g,f,y,A,E,C,R,v,b,V){const D=E/v,B=C/b,W=E/2,J=C/2,L=R/2,q=v+1,Z=b+1;let z=0,ft=0;const $=new I;for(let tt=0;tt<Z;tt++){const lt=tt*B-J;for(let Gt=0;Gt<q;Gt++){const Yt=Gt*D-W;$[M]=Yt*y,$[g]=lt*A,$[f]=L,l.push($.x,$.y,$.z),$[M]=0,$[g]=0,$[f]=R>0?1:-1,h.push($.x,$.y,$.z),p.push(Gt/v),p.push(1-tt/b),z+=1}}for(let tt=0;tt<b;tt++)for(let lt=0;lt<v;lt++){const Gt=d+lt+q*tt,Yt=d+lt+q*(tt+1),st=d+(lt+1)+q*(tt+1),wt=d+(lt+1)+q*tt;c.push(Gt,Yt,wt),c.push(Yt,st,wt),ft+=6}a.addGroup(u,ft,V),u+=ft,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Eo extends En{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,h=new mt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){const u=n+p/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new tn(o,3)),this.setAttribute("normal",new tn(a,3)),this.setAttribute("uv",new tn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class je extends En{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],p=[],d=[],u=[];let _=0;const M=[],g=n/2;let f=0;y(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new tn(p,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(u,2));function y(){const E=new I,C=new I;let R=0;const v=(e-t)/n;for(let b=0;b<=r;b++){const V=[],D=b/r,B=D*(e-t)+t;for(let W=0;W<=s;W++){const J=W/s,L=J*c+a,q=Math.sin(L),Z=Math.cos(L);C.x=B*q,C.y=-D*n+g,C.z=B*Z,p.push(C.x,C.y,C.z),E.set(q,v,Z).normalize(),d.push(E.x,E.y,E.z),u.push(J,1-D),V.push(_++)}M.push(V)}for(let b=0;b<s;b++)for(let V=0;V<r;V++){const D=M[V][b],B=M[V+1][b],W=M[V+1][b+1],J=M[V][b+1];(t>0||V!==0)&&(h.push(D,B,J),R+=3),(e>0||V!==r-1)&&(h.push(B,W,J),R+=3)}l.addGroup(f,R,0),f+=R}function A(E){const C=_,R=new mt,v=new I;let b=0;const V=E===!0?t:e,D=E===!0?1:-1;for(let W=1;W<=s;W++)p.push(0,g*D,0),d.push(0,D,0),u.push(.5,.5),_++;const B=_;for(let W=0;W<=s;W++){const L=W/s*c+a,q=Math.cos(L),Z=Math.sin(L);v.x=V*Z,v.y=g*D,v.z=V*q,p.push(v.x,v.y,v.z),d.push(0,D,0),R.x=q*.5+.5,R.y=Z*.5*D+.5,u.push(R.x,R.y),_++}for(let W=0;W<s;W++){const J=C+W,L=B+W;E===!0?h.push(L,L+1,J):h.push(L+1,L,J),b+=3}l.addGroup(f,b,E===!0?1:2),f+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ae("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,u=(o-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new mt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],o=[],a=new I,c=new Xe;for(let u=0;u<=t;u++){const _=u/t;s[u]=this.getTangentAt(_,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ae(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,_))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Ae(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],u*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class xh extends Xi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new mt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*p+this.aX,l=d*p+u*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class nm extends xh{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Mh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,p){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,u=(a-o)/h-(c-o)/(h+p)+(c-a)/p;d*=h,u*=h,s(o,a,d,u)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ou=new I,Bu=new I,oc=new Mh,ac=new Mh,lc=new Mh;class im extends Xi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Bu.subVectors(s[0],s[1]).add(s[0]),l=Bu);const p=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ou.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ou),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(p),u),M=Math.pow(p.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);M<1e-4&&(M=1),_<1e-4&&(_=M),g<1e-4&&(g=M),oc.initNonuniformCatmullRom(l.x,p.x,d.x,h.x,_,M,g),ac.initNonuniformCatmullRom(l.y,p.y,d.y,h.y,_,M,g),lc.initNonuniformCatmullRom(l.z,p.z,d.z,h.z,_,M,g)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(l.x,p.x,d.x,h.x,this.tension),ac.initCatmullRom(l.y,p.y,d.y,h.y,this.tension),lc.initCatmullRom(l.z,p.z,d.z,h.z,this.tension));return n.set(oc.calc(c),ac.calc(c),lc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function zu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function sm(i,t){const e=1-i;return e*e*t}function rm(i,t){return 2*(1-i)*i*t}function om(i,t){return i*i*t}function bo(i,t,e,n){return sm(i,t)+rm(i,e)+om(i,n)}function am(i,t){const e=1-i;return e*e*e*t}function lm(i,t){const e=1-i;return 3*e*e*i*t}function cm(i,t){return 3*(1-i)*i*i*t}function hm(i,t){return i*i*i*t}function To(i,t,e,n,s){return am(i,t)+lm(i,e)+cm(i,n)+hm(i,s)}class jf extends Xi{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(To(t,s.x,r.x,o.x,a.x),To(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class um extends Xi{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(To(t,s.x,r.x,o.x,a.x),To(t,s.y,r.y,o.y,a.y),To(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class td extends Xi{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fm extends Xi{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ed extends Xi{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(bo(t,s.x,r.x,o.x),bo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dm extends Xi{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(bo(t,s.x,r.x,o.x),bo(t,s.y,r.y,o.y),bo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nd extends Xi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(zu(a,c.x,l.x,h.x,p.x),zu(a,c.y,l.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new mt().fromArray(s))}return this}}var jc=Object.freeze({__proto__:null,ArcCurve:nm,CatmullRomCurve3:im,CubicBezierCurve:jf,CubicBezierCurve3:um,EllipseCurve:xh,LineCurve:td,LineCurve3:fm,QuadraticBezierCurve:ed,QuadraticBezierCurve3:dm,SplineCurve:nd});class pm extends Xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new jc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class Fi extends pm{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new td(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new ed(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new jf(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new nd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new xh(t,e,n,s,r,o,a,c);if(this.curves.length>0){const p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yn extends Fi{constructor(t){super(t),this.uuid=Br(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Fi().fromJSON(s))}return this}}function mm(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=id(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Mm(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let h=a,p=c;for(let d=e;d<s;d+=e){const u=i[d],_=i[d+1];u<a&&(a=u),_<c&&(c=_),u>h&&(h=u),_>p&&(p=_)}l=Math.max(h-a,p-c),l=l!==0?32767/l:0}return Do(r,o,e,a,c,l,0),o}function id(i,t,e,n,s){let r;if(s===Lm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Hu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Hu(o/n|0,i[o],i[o+1],r);return r&&Fr(r,r.next)&&(No(r),r=r.next),r}function Ks(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Fr(e,e.next)||pn(e.prev,e,e.next)===0)){if(No(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Do(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Tm(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?_m(i,n,s,r):gm(i)){t.push(c.i,i.i,l.i),No(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=vm(Ks(i),t),Do(i,t,e,n,s,r,2)):o===2&&xm(i,t,e,n,s,r):Do(Ks(i),t,e,n,s,r,1);break}}}function gm(i){const t=i.prev,e=i,n=i.next;if(pn(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),p=Math.min(a,c,l),d=Math.max(s,r,o),u=Math.max(a,c,l);let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=p&&_.y<=u&&xo(s,a,r,c,o,l,_.x,_.y)&&pn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function _m(i,t,e,n){const s=i.prev,r=i,o=i.next;if(pn(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,p=r.y,d=o.y,u=Math.min(a,c,l),_=Math.min(h,p,d),M=Math.max(a,c,l),g=Math.max(h,p,d),f=th(u,_,t,e,n),y=th(M,g,t,e,n);let A=i.prevZ,E=i.nextZ;for(;A&&A.z>=f&&E&&E.z<=y;){if(A.x>=u&&A.x<=M&&A.y>=_&&A.y<=g&&A!==s&&A!==o&&xo(a,h,c,p,l,d,A.x,A.y)&&pn(A.prev,A,A.next)>=0||(A=A.prevZ,E.x>=u&&E.x<=M&&E.y>=_&&E.y<=g&&E!==s&&E!==o&&xo(a,h,c,p,l,d,E.x,E.y)&&pn(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;A&&A.z>=f;){if(A.x>=u&&A.x<=M&&A.y>=_&&A.y<=g&&A!==s&&A!==o&&xo(a,h,c,p,l,d,A.x,A.y)&&pn(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;E&&E.z<=y;){if(E.x>=u&&E.x<=M&&E.y>=_&&E.y<=g&&E!==s&&E!==o&&xo(a,h,c,p,l,d,E.x,E.y)&&pn(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function vm(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Fr(n,s)&&rd(n,e,e.next,s)&&Io(n,s)&&Io(s,n)&&(t.push(n.i,e.i,s.i),No(e),No(e.next),e=i=s),e=e.next}while(e!==i);return Ks(e)}function xm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Rm(o,a)){let c=od(o,a);o=Ks(o,o.next),c=Ks(c,c.next),Do(o,t,e,n,s,r,0),Do(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Mm(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=id(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Am(l))}s.sort(Sm);for(let r=0;r<s.length;r++)e=ym(s[r],e);return e}function Sm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function ym(i,t){const e=Em(i,t);if(!e)return t;const n=od(e,i);return Ks(n,n.next),Ks(e,e.next)}function Em(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Fr(i,e))return e;do{if(Fr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&sd(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const p=Math.abs(s-e.y)/(n-e.x);Io(e,i)&&(p<h||p===h&&(e.x>o.x||e.x===o.x&&bm(o,e)))&&(o=e,h=p)}e=e.next}while(e!==a);return o}function bm(i,t){return pn(i.prev,i,t.prev)<0&&pn(t.next,i,i.next)<0}function Tm(i,t,e,n){let s=i;do s.z===0&&(s.z=th(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wm(s)}function wm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function th(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Am(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function sd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function xo(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&sd(i,t,e,n,s,r,o,a)}function Rm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Cm(i,t)&&(Io(i,t)&&Io(t,i)&&Pm(i,t)&&(pn(i.prev,i,t.prev)||pn(i,t.prev,t))||Fr(i,t)&&pn(i.prev,i,i.next)>0&&pn(t.prev,t,t.next)>0)}function pn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Fr(i,t){return i.x===t.x&&i.y===t.y}function rd(i,t,e,n){const s=Ra(pn(i,t,e)),r=Ra(pn(i,t,n)),o=Ra(pn(e,n,i)),a=Ra(pn(e,n,t));return!!(s!==r&&o!==a||s===0&&Aa(i,e,t)||r===0&&Aa(i,n,t)||o===0&&Aa(e,i,n)||a===0&&Aa(e,t,n))}function Aa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ra(i){return i>0?1:i<0?-1:0}function Cm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Io(i,t){return pn(i.prev,i,i.next)<0?pn(i,t,i.next)>=0&&pn(i,i.prev,t)>=0:pn(i,t,i.prev)<0||pn(i,i.next,t)<0}function Pm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function od(i,t){const e=eh(i.i,i.x,i.y),n=eh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Hu(i,t,e,n){const s=eh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function No(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function eh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Dm{static triangulate(t,e,n=2){return mm(t,e,n)}}class os{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return os.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Gu(t),ku(n,t);let o=t.length;e.forEach(Gu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,ku(n,e[c]);const a=Dm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Gu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ku(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Xs extends En{constructor(t=new yn([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new tn(s,3)),this.setAttribute("uv",new tn(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:u-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Im;let A,E=!1,C,R,v,b;if(f){A=f.getSpacedPoints(h),E=!0,d=!1;const at=f.isCatmullRomCurve3?f.closed:!1;C=f.computeFrenetFrames(h,at),R=new I,v=new I,b=new I}d||(g=0,u=0,_=0,M=0);const V=a.extractPoints(l);let D=V.shape;const B=V.holes;if(!os.isClockWise(D)){D=D.reverse();for(let at=0,At=B.length;at<At;at++){const Et=B[at];os.isClockWise(Et)&&(B[at]=Et.reverse())}}function J(at){const Et=10000000000000001e-36;let Ft=at[0];for(let Dt=1;Dt<=at.length;Dt++){const he=Dt%at.length,Vt=at[he],Me=Vt.x-Ft.x,ee=Vt.y-Ft.y,jt=Me*Me+ee*ee,U=Math.max(Math.abs(Vt.x),Math.abs(Vt.y),Math.abs(Ft.x),Math.abs(Ft.y)),un=Et*U*U;if(jt<=un){at.splice(he,1),Dt--;continue}Ft=Vt}}J(D),B.forEach(J);const L=B.length,q=D;for(let at=0;at<L;at++){const At=B[at];D=D.concat(At)}function Z(at,At,Et){return At||Ge("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(At,Et)}const z=D.length;function ft(at,At,Et){let Ft,Dt,he;const Vt=at.x-At.x,Me=at.y-At.y,ee=Et.x-at.x,jt=Et.y-at.y,U=Vt*Vt+Me*Me,un=Vt*jt-Me*ee;if(Math.abs(un)>Number.EPSILON){const _e=Math.sqrt(U),Ye=Math.sqrt(ee*ee+jt*jt),Rt=At.x-Me/_e,ln=At.y+Vt/_e,Qt=Et.x-jt/Ye,ne=Et.y+ee/Ye,w=((Qt-Rt)*jt-(ne-ln)*ee)/(Vt*jt-Me*ee);Ft=Rt+Vt*w-at.x,Dt=ln+Me*w-at.y;const x=Ft*Ft+Dt*Dt;if(x<=2)return new mt(Ft,Dt);he=Math.sqrt(x/2)}else{let _e=!1;Vt>Number.EPSILON?ee>Number.EPSILON&&(_e=!0):Vt<-Number.EPSILON?ee<-Number.EPSILON&&(_e=!0):Math.sign(Me)===Math.sign(jt)&&(_e=!0),_e?(Ft=-Me,Dt=Vt,he=Math.sqrt(U)):(Ft=Vt,Dt=Me,he=Math.sqrt(U/2))}return new mt(Ft/he,Dt/he)}const $=[];for(let at=0,At=q.length,Et=At-1,Ft=at+1;at<At;at++,Et++,Ft++)Et===At&&(Et=0),Ft===At&&(Ft=0),$[at]=ft(q[at],q[Et],q[Ft]);const tt=[];let lt,Gt=$.concat();for(let at=0,At=L;at<At;at++){const Et=B[at];lt=[];for(let Ft=0,Dt=Et.length,he=Dt-1,Vt=Ft+1;Ft<Dt;Ft++,he++,Vt++)he===Dt&&(he=0),Vt===Dt&&(Vt=0),lt[Ft]=ft(Et[Ft],Et[he],Et[Vt]);tt.push(lt),Gt=Gt.concat(lt)}let Yt;if(g===0)Yt=os.triangulateShape(q,B);else{const at=[],At=[];for(let Et=0;Et<g;Et++){const Ft=Et/g,Dt=u*Math.cos(Ft*Math.PI/2),he=_*Math.sin(Ft*Math.PI/2)+M;for(let Vt=0,Me=q.length;Vt<Me;Vt++){const ee=Z(q[Vt],$[Vt],he);$t(ee.x,ee.y,-Dt),Ft===0&&at.push(ee)}for(let Vt=0,Me=L;Vt<Me;Vt++){const ee=B[Vt];lt=tt[Vt];const jt=[];for(let U=0,un=ee.length;U<un;U++){const _e=Z(ee[U],lt[U],he);$t(_e.x,_e.y,-Dt),Ft===0&&jt.push(_e)}Ft===0&&At.push(jt)}}Yt=os.triangulateShape(at,At)}const st=Yt.length,wt=_+M;for(let at=0;at<z;at++){const At=d?Z(D[at],Gt[at],wt):D[at];E?(v.copy(C.normals[0]).multiplyScalar(At.x),R.copy(C.binormals[0]).multiplyScalar(At.y),b.copy(A[0]).add(v).add(R),$t(b.x,b.y,b.z)):$t(At.x,At.y,0)}for(let at=1;at<=h;at++)for(let At=0;At<z;At++){const Et=d?Z(D[At],Gt[At],wt):D[At];E?(v.copy(C.normals[at]).multiplyScalar(Et.x),R.copy(C.binormals[at]).multiplyScalar(Et.y),b.copy(A[at]).add(v).add(R),$t(b.x,b.y,b.z)):$t(Et.x,Et.y,p/h*at)}for(let at=g-1;at>=0;at--){const At=at/g,Et=u*Math.cos(At*Math.PI/2),Ft=_*Math.sin(At*Math.PI/2)+M;for(let Dt=0,he=q.length;Dt<he;Dt++){const Vt=Z(q[Dt],$[Dt],Ft);$t(Vt.x,Vt.y,p+Et)}for(let Dt=0,he=B.length;Dt<he;Dt++){const Vt=B[Dt];lt=tt[Dt];for(let Me=0,ee=Vt.length;Me<ee;Me++){const jt=Z(Vt[Me],lt[Me],Ft);E?$t(jt.x,jt.y+A[h-1].y,A[h-1].x+Et):$t(jt.x,jt.y,p+Et)}}}zt(),qt();function zt(){const at=s.length/3;if(d){let At=0,Et=z*At;for(let Ft=0;Ft<st;Ft++){const Dt=Yt[Ft];qe(Dt[2]+Et,Dt[1]+Et,Dt[0]+Et)}At=h+g*2,Et=z*At;for(let Ft=0;Ft<st;Ft++){const Dt=Yt[Ft];qe(Dt[0]+Et,Dt[1]+Et,Dt[2]+Et)}}else{for(let At=0;At<st;At++){const Et=Yt[At];qe(Et[2],Et[1],Et[0])}for(let At=0;At<st;At++){const Et=Yt[At];qe(Et[0]+z*h,Et[1]+z*h,Et[2]+z*h)}}n.addGroup(at,s.length/3-at,0)}function qt(){const at=s.length/3;let At=0;yt(q,At),At+=q.length;for(let Et=0,Ft=B.length;Et<Ft;Et++){const Dt=B[Et];yt(Dt,At),At+=Dt.length}n.addGroup(at,s.length/3-at,1)}function yt(at,At){let Et=at.length;for(;--Et>=0;){const Ft=Et;let Dt=Et-1;Dt<0&&(Dt=at.length-1);for(let he=0,Vt=h+g*2;he<Vt;he++){const Me=z*he,ee=z*(he+1),jt=At+Ft+Me,U=At+Dt+Me,un=At+Dt+ee,_e=At+Ft+ee;te(jt,U,un,_e)}}}function $t(at,At,Et){c.push(at),c.push(At),c.push(Et)}function qe(at,At,Et){be(at),be(At),be(Et);const Ft=s.length/3,Dt=y.generateTopUV(n,s,Ft-3,Ft-2,Ft-1);Re(Dt[0]),Re(Dt[1]),Re(Dt[2])}function te(at,At,Et,Ft){be(at),be(At),be(Ft),be(At),be(Et),be(Ft);const Dt=s.length/3,he=y.generateSideWallUV(n,s,Dt-6,Dt-3,Dt-2,Dt-1);Re(he[0]),Re(he[1]),Re(he[3]),Re(he[1]),Re(he[2]),Re(he[3])}function be(at){s.push(c[at*3+0]),s.push(c[at*3+1]),s.push(c[at*3+2])}function Re(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Nm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new jc[s.type]().fromJSON(s)),new Xs(n,t.options)}}const Im={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new mt(r,o),new mt(a,c),new mt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],p=t[n*3+2],d=t[s*3],u=t[s*3+1],_=t[s*3+2],M=t[r*3],g=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new mt(o,1-c),new mt(l,1-p),new mt(d,1-_),new mt(M,1-f)]:[new mt(a,1-c),new mt(h,1-p),new mt(u,1-_),new mt(g,1-f)]}};function Nm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Bn extends En{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,p=t/a,d=e/c,u=[],_=[],M=[],g=[];for(let f=0;f<h;f++){const y=f*d-o;for(let A=0;A<l;A++){const E=A*p-r;_.push(E,-y,0),M.push(0,0,1),g.push(A/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){const A=y+l*f,E=y+l*(f+1),C=y+1+l*(f+1),R=y+1+l*f;u.push(A,E,R),u.push(E,C,R)}this.setIndex(u),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(M,3)),this.setAttribute("uv",new tn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Sh extends En{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let p=t;const d=(e-t)/s,u=new I,_=new mt;for(let M=0;M<=s;M++){for(let g=0;g<=n;g++){const f=r+g/n*o;u.x=p*Math.cos(f),u.y=p*Math.sin(f),c.push(u.x,u.y,u.z),l.push(0,0,1),_.x=(u.x/e+1)/2,_.y=(u.y/e+1)/2,h.push(_.x,_.y)}p+=d}for(let M=0;M<s;M++){const g=M*(n+1);for(let f=0;f<n;f++){const y=f+g,A=y,E=y+n+1,C=y+n+2,R=y+1;a.push(A,E,R),a.push(E,C,R)}}this.setIndex(a),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(l,3)),this.setAttribute("uv",new tn(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Mi extends En{constructor(t=new yn([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new tn(s,3)),this.setAttribute("normal",new tn(r,3)),this.setAttribute("uv",new tn(o,2));function l(h){const p=s.length/3,d=h.extractPoints(e);let u=d.shape;const _=d.holes;os.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,f=_.length;g<f;g++){const y=_[g];os.isClockWise(y)===!0&&(_[g]=y.reverse())}const M=os.triangulateShape(u,_);for(let g=0,f=_.length;g<f;g++){const y=_[g];u=u.concat(y)}for(let g=0,f=u.length;g<f;g++){const y=u[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,f=M.length;g<f;g++){const y=M[g],A=y[0]+p,E=y[1]+p,C=y[2]+p;n.push(A,E,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Um(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Mi(n,t.curveSegments)}}function Um(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class $a extends En{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],p=new I,d=new I,u=[],_=[],M=[],g=[];for(let f=0;f<=n;f++){const y=[],A=f/n,E=o+A*a,C=t*Math.cos(E),R=Math.sqrt(t*t-C*C);let v=0;f===0&&o===0?v=.5/e:f===n&&c===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const V=b/e,D=s+V*r;p.x=-R*Math.cos(D),p.y=C,p.z=R*Math.sin(D),_.push(p.x,p.y,p.z),d.copy(p).normalize(),M.push(d.x,d.y,d.z),g.push(V+v,1-A),y.push(l++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const A=h[f][y+1],E=h[f][y],C=h[f+1][y],R=h[f+1][y+1];(f!==0||o>0)&&u.push(A,E,R),(f!==n-1||c<Math.PI)&&u.push(E,C,R)}this.setIndex(u),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(M,3)),this.setAttribute("uv",new tn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $a(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fm extends cs{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ce(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function Or(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Vu(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Vu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Kn(i){const t={};for(let e=0;e<i.length;e++){const n=Or(i[e]);for(const s in n)t[s]=n[s]}return t}function Vu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Om(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ad(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const Bm={clone:Or,merge:Kn};var zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Js extends cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=Hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=Om(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ce().setHex(s.value);break;case"v2":this.uniforms[n].value=new mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Gm extends Js{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Uo extends cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class km extends Uo{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Lr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Lr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Vm extends cs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=oh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wm extends cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xm extends cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ja extends vn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class qm extends ja{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const cc=new Xe,Wu=new I,Xu=new I;class yh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wu),Xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(cc,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Po||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(cc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ca=new I,Pa=new Vi,Ii=new I;class ld extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ca,Pa,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Pa,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ca,Pa,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Pa,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ts=new I,qu=new mt,Yu=new mt;class ci extends ld{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z)}getViewSize(t,e){return this.getViewBounds(t,qu,Yu),e.subVectors(Yu,qu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ba*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ym extends yh{constructor(){super(new ci(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Za*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Zm extends ja{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ym}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Km extends yh{constructor(){super(new ci(90,1,.5,500)),this.isPointLightShadow=!0}}class Ar extends ja{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Km}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class cd extends ld{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Jm extends yh{constructor(){super(new cd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zu extends ja{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new Jm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Er=-90,br=1;class nh extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ci(Er,br,t,e);s.layers=this.layers,this.add(s);const r=new ci(Er,br,t,e);r.layers=this.layers,this.add(r);const o=new ci(Er,br,t,e);o.layers=this.layers,this.add(o);const a=new ci(Er,br,t,e);a.layers=this.layers,this.add(a);const c=new ci(Er,br,t,e);c.layers=this.layers,this.add(c);const l=new ci(Er,br,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,d,u),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class $m extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Ku=new Xe;class Qm{constructor(t,e,n=0,s=1/0){this.ray=new Oo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new _h,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ge("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ku.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ku),this}intersectObject(t,e=!0,n=[]){return ih(t,this,n,e),n.sort(Ju),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ih(t[s],this,n,e);return n.sort(Ju),n}}function Ju(i,t){return i.distance-t.distance}function ih(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ih(r[o],t,e,!0)}}class $u{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ae(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jm extends Ps{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Qu(i,t,e,n){const s=t0(n);switch(e){case Ff:return i*t;case uh:return i*t/s.components*s.byteLength;case fh:return i*t/s.components*s.byteLength;case Zs:return i*t*2/s.components*s.byteLength;case dh:return i*t*2/s.components*s.byteLength;case Of:return i*t*3/s.components*s.byteLength;case Bi:return i*t*4/s.components*s.byteLength;case ph:return i*t*4/s.components*s.byteLength;case Na:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fa:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ec:case Tc:return Math.max(i,16)*Math.max(t,8)/4;case yc:case bc:return Math.max(i,8)*Math.max(t,8)/2;case wc:case Ac:case Cc:case Pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rc:case ka:case Lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case kc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qc:case Yc:case Zc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kc:case Jc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Va:case $c:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function t0(i){switch(i){case hi:case Df:return{byteLength:1,components:1};case Co:case If:case ki:return{byteLength:2,components:1};case ch:case hh:return{byteLength:2,components:4};case Gi:case lh:case Ri:return{byteLength:4,components:1};case Nf:case Uf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);function hd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function e0(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,p=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){const h=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,h);else{p.sort((u,_)=>u.start-_.start);let d=0;for(let u=1;u<p.length;u++){const _=p[d],M=p[u];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,p[d]=M)}p.length=d+1;for(let u=0,_=p.length;u<_;u++){const M=p[u];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
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
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
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
#endif`,u0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m0=`#ifdef USE_IRIDESCENCE
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
#endif`,g0=`#ifdef USE_BUMPMAP
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,T0=`#define PI 3.141592653589793
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
} // validated`,w0=`vec3 transformedNormal = objectNormal;
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
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",D0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
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
}`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
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
#endif`,j0=`uniform sampler2D dfgLUT;
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
}`,tg=`
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ig=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ug=`#if defined( USE_POINTS_UV )
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
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mg=`#if defined( USE_MORPHCOLORS )
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
#endif`,gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`#ifdef USE_MORPHTARGETS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
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
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,Xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n_=`uniform sampler2D t2D;
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`uniform float backgroundBlurriness;
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`#include <common>
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
}`,l_=`#if DEPTH_PACKING == 3200
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
}`,c_=`#define DISTANCE
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
}`,h_=`#define DISTANCE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`uniform float scale;
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#include <common>
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
}`,g_=`uniform vec3 diffuse;
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
}`,__=`#define LAMBERT
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
}`,v_=`#define LAMBERT
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
}`,x_=`#define MATCAP
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
}`,M_=`#define MATCAP
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
}`,S_=`#define NORMAL
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
}`,y_=`#define NORMAL
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
}`,E_=`#define PHONG
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
}`,b_=`#define PHONG
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
}`,T_=`#define STANDARD
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
}`,w_=`#define STANDARD
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
}`,A_=`#define TOON
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
}`,R_=`#define TOON
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
}`,C_=`uniform float size;
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
}`,P_=`uniform vec3 diffuse;
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
}`,L_=`#include <common>
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
}`,D_=`uniform vec3 color;
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
}`,I_=`uniform float rotation;
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
}`,N_=`uniform vec3 diffuse;
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
}`,we={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:s0,alphamap_pars_fragment:r0,alphatest_fragment:o0,alphatest_pars_fragment:a0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:h0,batching_vertex:u0,begin_vertex:f0,beginnormal_vertex:d0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:M0,color_fragment:S0,color_pars_fragment:y0,color_pars_vertex:E0,color_vertex:b0,common:T0,defaultnormal_vertex:w0,displacementmap_pars_vertex:A0,displacementmap_vertex:R0,emissivemap_fragment:C0,emissivemap_pars_fragment:P0,colorspace_fragment:L0,colorspace_pars_fragment:D0,envmap_fragment:I0,envmap_common_pars_fragment:N0,envmap_pars_fragment:U0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:Y0,envmap_vertex:O0,fog_vertex:B0,fog_pars_vertex:z0,fog_fragment:H0,fog_pars_fragment:G0,gradientmap_pars_fragment:k0,lightmap_pars_fragment:V0,lights_lambert_fragment:W0,lights_lambert_pars_fragment:X0,lights_pars_begin:q0,lights_toon_fragment:Z0,lights_toon_pars_fragment:K0,lights_phong_fragment:J0,lights_phong_pars_fragment:$0,lights_physical_fragment:Q0,lights_physical_pars_fragment:j0,lights_fragment_begin:tg,lights_fragment_maps:eg,lights_fragment_end:ng,lightprobes_pars_fragment:ig,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:rg,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:ag,map_fragment:lg,map_pars_fragment:cg,map_particle_fragment:hg,map_particle_pars_fragment:ug,metalnessmap_fragment:fg,metalnessmap_pars_fragment:dg,morphinstance_vertex:pg,morphcolor_vertex:mg,morphnormal_vertex:gg,morphtarget_pars_vertex:_g,morphtarget_vertex:vg,normal_fragment_begin:xg,normal_fragment_maps:Mg,normal_pars_fragment:Sg,normal_pars_vertex:yg,normal_vertex:Eg,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Ag,iridescence_pars_fragment:Rg,opaque_fragment:Cg,packing:Pg,premultiplied_alpha_fragment:Lg,project_vertex:Dg,dithering_fragment:Ig,dithering_pars_fragment:Ng,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Og,shadowmap_pars_vertex:Bg,shadowmap_vertex:zg,shadowmask_pars_fragment:Hg,skinbase_vertex:Gg,skinning_pars_vertex:kg,skinning_vertex:Vg,skinnormal_vertex:Wg,specularmap_fragment:Xg,specularmap_pars_fragment:qg,tonemapping_fragment:Yg,tonemapping_pars_fragment:Zg,transmission_fragment:Kg,transmission_pars_fragment:Jg,uv_pars_fragment:$g,uv_pars_vertex:Qg,uv_vertex:jg,worldpos_vertex:t_,background_vert:e_,background_frag:n_,backgroundCube_vert:i_,backgroundCube_frag:s_,cube_vert:r_,cube_frag:o_,depth_vert:a_,depth_frag:l_,distance_vert:c_,distance_frag:h_,equirect_vert:u_,equirect_frag:f_,linedashed_vert:d_,linedashed_frag:p_,meshbasic_vert:m_,meshbasic_frag:g_,meshlambert_vert:__,meshlambert_frag:v_,meshmatcap_vert:x_,meshmatcap_frag:M_,meshnormal_vert:S_,meshnormal_frag:y_,meshphong_vert:E_,meshphong_frag:b_,meshphysical_vert:T_,meshphysical_frag:w_,meshtoon_vert:A_,meshtoon_frag:R_,points_vert:C_,points_frag:P_,shadow_vert:L_,shadow_frag:D_,sprite_vert:I_,sprite_frag:N_},Nt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Oi={basic:{uniforms:Kn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:Kn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:Kn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:Kn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:Kn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:Kn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:Kn([Nt.points,Nt.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:Kn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:Kn([Nt.common,Nt.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:Kn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:Kn([Nt.sprite,Nt.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distance:{uniforms:Kn([Nt.common,Nt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distance_vert,fragmentShader:we.distance_frag},shadow:{uniforms:Kn([Nt.lights,Nt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Oi.physical={uniforms:Kn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const La={r:0,b:0,g:0},U_=new Xe,ud=new xe;ud.set(-1,0,0,0,1,0,0,0,1);function F_(i,t,e,n,s,r){const o=new ce(0);let a=s===!0?0:1,c,l,h=null,p=0,d=null;function u(y){let A=y.isScene===!0?y.background:null;if(A&&A.isTexture){const E=y.backgroundBlurriness>0;A=t.get(A,E)}return A}function _(y){let A=!1;const E=u(y);E===null?g(o,a):E&&E.isColor&&(g(E,1),A=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,A){const E=u(A);E&&E.isCubeTexture?(l===void 0&&(l=new ut(new He(1,1,1),new Js({name:"BackgroundCubeMaterial",uniforms:Or(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,R,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(U_.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ud),l.material.toneMapped=Ie.getTransfer(E.colorSpace)!==nn,(h!==E||p!==E.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,p=E.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ut(new Bn(2,2),new Js({name:"BackgroundMaterial",uniforms:Or(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Ie.getTransfer(E.colorSpace)!==nn,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||p!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,p=E.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,A){y.getRGB(La,ad(i)),e.buffers.color.setClear(La.r,La.g,La.b,A,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,A=1){o.set(y),a=A,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:_,addToRenderList:M,dispose:f}}function O_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(B,W,J,L,q){let Z=!1;const z=p(B,L,J,W);r!==z&&(r=z,l(r.object)),Z=u(B,L,J,q),Z&&_(B,L,J,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,E(B,W,J,L),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(B){return i.bindVertexArray(B)}function h(B){return i.deleteVertexArray(B)}function p(B,W,J,L){const q=L.wireframe===!0;let Z=n[W.id];Z===void 0&&(Z={},n[W.id]=Z);const z=B.isInstancedMesh===!0?B.id:0;let ft=Z[z];ft===void 0&&(ft={},Z[z]=ft);let $=ft[J.id];$===void 0&&($={},ft[J.id]=$);let tt=$[q];return tt===void 0&&(tt=d(c()),$[q]=tt),tt}function d(B){const W=[],J=[],L=[];for(let q=0;q<e;q++)W[q]=0,J[q]=0,L[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:J,attributeDivisors:L,object:B,attributes:{},index:null}}function u(B,W,J,L){const q=r.attributes,Z=W.attributes;let z=0;const ft=J.getAttributes();for(const $ in ft)if(ft[$].location>=0){const lt=q[$];let Gt=Z[$];if(Gt===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(Gt=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(Gt=B.instanceColor)),lt===void 0||lt.attribute!==Gt||Gt&&lt.data!==Gt.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function _(B,W,J,L){const q={},Z=W.attributes;let z=0;const ft=J.getAttributes();for(const $ in ft)if(ft[$].location>=0){let lt=Z[$];lt===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(lt=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(lt=B.instanceColor));const Gt={};Gt.attribute=lt,lt&&lt.data&&(Gt.data=lt.data),q[$]=Gt,z++}r.attributes=q,r.attributesNum=z,r.index=L}function M(){const B=r.newAttributes;for(let W=0,J=B.length;W<J;W++)B[W]=0}function g(B){f(B,0)}function f(B,W){const J=r.newAttributes,L=r.enabledAttributes,q=r.attributeDivisors;J[B]=1,L[B]===0&&(i.enableVertexAttribArray(B),L[B]=1),q[B]!==W&&(i.vertexAttribDivisor(B,W),q[B]=W)}function y(){const B=r.newAttributes,W=r.enabledAttributes;for(let J=0,L=W.length;J<L;J++)W[J]!==B[J]&&(i.disableVertexAttribArray(J),W[J]=0)}function A(B,W,J,L,q,Z,z){z===!0?i.vertexAttribIPointer(B,W,J,q,Z):i.vertexAttribPointer(B,W,J,L,q,Z)}function E(B,W,J,L){M();const q=L.attributes,Z=J.getAttributes(),z=W.defaultAttributeValues;for(const ft in Z){const $=Z[ft];if($.location>=0){let tt=q[ft];if(tt===void 0&&(ft==="instanceMatrix"&&B.instanceMatrix&&(tt=B.instanceMatrix),ft==="instanceColor"&&B.instanceColor&&(tt=B.instanceColor)),tt!==void 0){const lt=tt.normalized,Gt=tt.itemSize,Yt=t.get(tt);if(Yt===void 0)continue;const st=Yt.buffer,wt=Yt.type,zt=Yt.bytesPerElement,qt=wt===i.INT||wt===i.UNSIGNED_INT||tt.gpuType===lh;if(tt.isInterleavedBufferAttribute){const yt=tt.data,$t=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,qe=tt.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let te=0;te<$.locationSize;te++)f($.location+te,yt.meshPerAttribute);B.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let te=0;te<$.locationSize;te++)g($.location+te);i.bindBuffer(i.ARRAY_BUFFER,st);for(let te=0;te<$.locationSize;te++)A($.location+te,Gt/$.locationSize,wt,lt,$t*zt,(qe+Gt/$.locationSize*te)*zt,qt)}else{if(tt.isInstancedBufferAttribute){for(let yt=0;yt<$.locationSize;yt++)f($.location+yt,tt.meshPerAttribute);B.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let yt=0;yt<$.locationSize;yt++)g($.location+yt);i.bindBuffer(i.ARRAY_BUFFER,st);for(let yt=0;yt<$.locationSize;yt++)A($.location+yt,Gt/$.locationSize,wt,lt,Gt*zt,Gt/$.locationSize*yt*zt,qt)}}else if(z!==void 0){const lt=z[ft];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv($.location,lt);break;case 3:i.vertexAttrib3fv($.location,lt);break;case 4:i.vertexAttrib4fv($.location,lt);break;default:i.vertexAttrib1fv($.location,lt)}}}}y()}function C(){V();for(const B in n){const W=n[B];for(const J in W){const L=W[J];for(const q in L){const Z=L[q];for(const z in Z)h(Z[z].object),delete Z[z];delete L[q]}}delete n[B]}}function R(B){if(n[B.id]===void 0)return;const W=n[B.id];for(const J in W){const L=W[J];for(const q in L){const Z=L[q];for(const z in Z)h(Z[z].object),delete Z[z];delete L[q]}}delete n[B.id]}function v(B){for(const W in n){const J=n[W];for(const L in J){const q=J[L];if(q[B.id]===void 0)continue;const Z=q[B.id];for(const z in Z)h(Z[z].object),delete Z[z];delete q[B.id]}}}function b(B){for(const W in n){const J=n[W],L=B.isInstancedMesh===!0?B.id:0,q=J[L];if(q!==void 0){for(const Z in q){const z=q[Z];for(const ft in z)h(z[ft].object),delete z[ft];delete q[Z]}delete J[L],Object.keys(J).length===0&&delete n[W]}}}function V(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:V,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:M,enableAttribute:g,disableUnusedAttributes:y}}function B_(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function z_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Bi&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){const b=v===ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==hi&&v!==Ri&&!b&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(ae("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&ae("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:u,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:y,maxVaryings:A,maxFragmentUniforms:E,maxSamples:C,samples:R}}function H_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ss,a=new xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const u=p.length!==0||d||n!==0||s;return s=d,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=h(p,d,0)},this.setState=function(p,d,u){const _=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,f=i.get(p);if(!s||_===null||_.length===0||r&&!g)r?h(null):l();else{const y=r?0:n,A=y*4;let E=f.clippingState||null;c.value=E,E=h(_,d,A,u);for(let C=0;C!==A;++C)E[C]=e[C];f.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,d,u,_){const M=p!==null?p.length:0;let g=null;if(M!==0){if(g=c.value,_!==!0||g===null){const f=u+M*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<f)&&(g=new Float32Array(f));for(let A=0,E=u;A!==M;++A,E+=4)o.copy(p[A]).applyMatrix4(y,a),o.normal.toArray(g,E),g[E+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}class Eh extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Jf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new He(5,5,5),r=new Js({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:Pr});r.uniforms.tEquirect.value=e;const o=new ut(s,r),a=e.minFilter;return e.minFilter===As&&(e.minFilter=ei),new nh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ju=256,G_=3,k_=20,fd=256,dd=16,V_=3,W_=new I,X_=new ce;class Fo{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new nh(1,10,null),this._boxMesh=new ut(new He(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=W_}=r,c=this._renderer;this._setSize(o);const l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const p=c.autoClear,d=c.autoClearColor,u=c.autoClearDepth,_=c.autoClearStencil,M=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(t.background=c.getClearColor(X_));const g=new nh(n,s,h);return g.position.copy(a),g.update(c,t),c.autoClear=p,c.autoClearColor=d,c.autoClearDepth=u,c.autoClearStencil=_,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ju,wp(t))}_fromTexture(t,e){t.mapping===Ir||t.mapping===Ro?this._setSize(t.image.length===0?ju:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=tf(t,!1,!1),n=Math.log2(t)-G_;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=tf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ir||t.mapping===Ro?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ef()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=q_(),this._integrationMaterial=Y_());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/dd);for(let o=0;o<=n;o++){const a=Fo.lodToRoughness(o,n);if(o>n-V_)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const c=a>0?Math.log2(e)+.5*Math.log2(6/(fd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Z_());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function tf(i,t,e){return new Eh(i,{minFilter:As,generateMipmaps:t,type:ki,colorSpace:Xa,depthBuffer:e})}function Bo(i,t,e){return new Js({name:i,uniforms:t,vertexShader:we.cube_vert,fragmentShader:e,side:Jn,blending:Pr,depthTest:!1,depthWrite:!1})}function q_(){return Bo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${fd}u

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
	`)}function Y_(){return Bo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:dd}},`

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
	`)}function Z_(){return Bo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${k_}
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
	`)}function ef(){return Bo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function nf(){return Bo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function K_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){const u=d.mapping;if(u===Nl||u===Ul)if(t.has(d)){const _=t.get(d).texture;return a(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const M=new Eh(_.height);return M.fromEquirectangularTexture(i,d),t.set(d,M),d.addEventListener("dispose",l),a(M.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const u=d.mapping,_=u===Nl||u===Ul,M=u===Ir||u===Ro;if(_||M){let g=e.get(d);const f=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Fo(i)),g=_?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return _&&y&&y.height>0||M&&y&&c(y)?(n===null&&(n=new Fo(i)),g=_?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function a(d,u){return u===Nl?d.mapping=Ir:u===Ul&&(d.mapping=Ro),d}function c(d){let u=0;const _=6;for(let M=0;M<_;M++)d[M]!==void 0&&u++;return u===_}function l(d){const u=d.target;u.removeEventListener("dispose",l);const _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function h(d){const u=d.target;u.removeEventListener("dispose",h);const _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function J_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Lr("WebGLRenderer: "+n+" extension not supported."),s}}}function $_(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){c(_.target)}function c(_){_.index!==null&&t.remove(_.index);for(const g in _.attributes)t.remove(_.attributes[g]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);const M=r.get(_);M&&(t.remove(M),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function l(_,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),e.memory.geometries++),M}function h(_){const M=_.attributes;for(const g in M)t.update(M[g],i.ARRAY_BUFFER)}function p(_){const M=_.index,g=_.attributes.position;let f=0;if(g===void 0)return;const y=M!==null?M.array.length:g.array.length/3-1,A=g.count>=65535?qf:Xf,E=new A(Math.ceil(y/3)*6,1),C=E.array;if(M!==null){const v=M.array;f=M.version;for(let b=0,V=0;b<y;b+=3){const D=v[b+0],B=v[b+1],W=v[b+2];C[V++]=D,C[V++]=B,C[V++]=B,C[V++]=W,C[V++]=W,C[V++]=D}}else{f=g.version;for(let v=0,b=0;v<y;v+=3){const V=v+0,D=v+1,B=v+2;C[b++]=V,C[b++]=D,C[b++]=D,C[b++]=B,C[b++]=B,C[b++]=V}}E.version=f;const R=r.get(_);R&&t.remove(R),r.set(_,E)}function d(_){const M=r.get(_);if(M){const g=_.index;g!==null&&M.version<g.version&&p(_)}else p(_);return r.get(_)}function u(){for(const _ in s){const M=s[_].deref();M!==void 0&&c(M)}}return{get:l,update:h,getWireframeAttribute:d,dispose:u}}function Q_(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,d){i.drawElements(n,d,r,p*o),e.update(d,n,1)}function l(p,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,p*o,u),e.update(d,n,u))}function h(p,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,u);let M=0;for(let g=0;g<u;g++)M+=d[g];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function j_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Ge("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function tv(i,t,e){const n=new WeakMap,s=new dn;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==p){let V=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",V)};d!==void 0&&d.texture.dispose();const u=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let A=0;u===!0&&(A=1),_===!0&&(A=2),M===!0&&(A=3);let E=a.attributes.position.count*A,C=1;E>t.maxTextureSize&&(C=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const R=new Float32Array(E*C*4*p),v=new kf(R,E,C,p);v.type=Ri,v.needsUpdate=!0;const b=A*4;for(let D=0;D<p;D++){const B=g[D],W=f[D],J=y[D],L=E*C*4*D;for(let q=0;q<B.count;q++){const Z=q*b;u===!0&&(s.fromBufferAttribute(B,q),R[L+Z+0]=s.x,R[L+Z+1]=s.y,R[L+Z+2]=s.z,R[L+Z+3]=0),_===!0&&(s.fromBufferAttribute(W,q),R[L+Z+4]=s.x,R[L+Z+5]=s.y,R[L+Z+6]=s.z,R[L+Z+7]=0),M===!0&&(s.fromBufferAttribute(J,q),R[L+Z+8]=s.x,R[L+Z+9]=s.y,R[L+Z+10]=s.z,R[L+Z+11]=J.itemSize===4?s.w:1)}}d={count:p,texture:v,size:new mt(E,C)},n.set(a,d),a.addEventListener("dispose",V)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let M=0;M<l.length;M++)u+=l[M];const _=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ev(i,t,e,n,s){let r=new WeakMap;function o(l){const h=s.render.frame,p=l.geometry,d=t.get(l,p);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const nv={[Tf]:"LINEAR_TONE_MAPPING",[wf]:"REINHARD_TONE_MAPPING",[Af]:"CINEON_TONE_MAPPING",[ah]:"ACES_FILMIC_TONE_MAPPING",[Cf]:"AGX_TONE_MAPPING",[Pf]:"NEUTRAL_TONE_MAPPING",[Rf]:"CUSTOM_TONE_MAPPING"};function iv(i,t,e,n,s,r){const o=new zi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null,l=null;const h=new En;h.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new tn([0,2,0,0,2,0],2));const p=new Gm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ut(h,p),u=new cd(-1,1,1,-1,0,1);let _=null,M=null,g=!1,f,y=null,A=[],E=!1;this.setSize=function(C,R){o.setSize(C,R),a!==null&&a.setSize(C,R),c!==null&&c.setSize(C,R);for(let v=0;v<A.length;v++){const b=A[v];b.setSize&&b.setSize(C,R)}},this.setEffects=function(C){A=C,E=A.length>0&&A[0].isRenderPass===!0;const R=o.width,v=o.height;A.length>0&&a===null&&(a=new zi(R,v,{type:ki,depthBuffer:!1,stencilBuffer:!1}),c=new zi(R,v,{type:ki,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&A.some(V=>V.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&l===null&&(l=new Ur(R,v),r===!0&&(l.format=Rs,l.type=Nr)),o.dispose(),o.depthTexture=b?l:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let V=0;V<A.length;V++){const D=A[V];D.setSize&&D.setSize(R,v),b&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(l)}},this.begin=function(C,R){if(g||C.toneMapping===as&&A.length===0)return!1;if(y=R,R!==null){const v=R.width,b=R.height;(o.width!==v||o.height!==b)&&this.setSize(v,b)}return E===!1&&C.setRenderTarget(o),f=C.toneMapping,C.toneMapping=as,!0},this.hasRenderPass=function(){return E},this.end=function(C,R){C.toneMapping=f,g=!0;let v=o,b=a;for(let V=0;V<A.length;V++){const D=A[V];D.enabled!==!1&&(D.render(C,b,v,R),D.needsSwap!==!1&&(v=b,b=b===a?c:a))}if(_!==C.outputColorSpace||M!==C.toneMapping){_=C.outputColorSpace,M=C.toneMapping,p.defines={},Ie.getTransfer(_)===nn&&(p.defines.SRGB_TRANSFER="");const V=nv[M];V&&(p.defines[V]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,C.setRenderTarget(y),C.render(d,u),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}const pd=new Xn,md=new Ur(1,1),gd=new $f(1),_d=new kf,vd=new Up,xd=new Jf,sf=[],rf=[],of=new Float32Array(16),af=new Float32Array(9),lf=new Float32Array(4);function zr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=sf[s];if(r===void 0&&(r=new Float32Array(s),sf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Cn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function tl(i,t){let e=rf[t];e===void 0&&(e=new Int32Array(t),rf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;i.uniform2fv(this.addr,t),Cn(e,t)}}function ov(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Rn(e,t))return;i.uniform3fv(this.addr,t),Cn(e,t)}}function av(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;i.uniform4fv(this.addr,t),Cn(e,t)}}function lv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Cn(e,t)}else{if(Rn(e,n))return;lf.set(n),i.uniformMatrix2fv(this.addr,!1,lf),Cn(e,n)}}function cv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Cn(e,t)}else{if(Rn(e,n))return;af.set(n),i.uniformMatrix3fv(this.addr,!1,af),Cn(e,n)}}function hv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Cn(e,t)}else{if(Rn(e,n))return;of.set(n),i.uniformMatrix4fv(this.addr,!1,of),Cn(e,n)}}function uv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;i.uniform2iv(this.addr,t),Cn(e,t)}}function dv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Rn(e,t))return;i.uniform3iv(this.addr,t),Cn(e,t)}}function pv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;i.uniform4iv(this.addr,t),Cn(e,t)}}function mv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;i.uniform2uiv(this.addr,t),Cn(e,t)}}function _v(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Rn(e,t))return;i.uniform3uiv(this.addr,t),Cn(e,t)}}function vv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;i.uniform4uiv(this.addr,t),Cn(e,t)}}function el(i){return i.version===0&&(i.compareFunction=Hf,i.needsUpdate=!0),i}function xv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=el(md):r=pd,e.setTexture2D(t||r,s)}function Mv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vd,s)}function Sv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=el(gd):r=xd,e.setTextureCube(t||r,s)}function yv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_d,s)}function Ev(i){switch(i){case 5126:return sv;case 35664:return rv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return hv;case 5124:case 35670:return uv;case 35667:case 35671:return fv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return yv}}function bv(i,t){i.uniform1fv(this.addr,t)}function Tv(i,t){const e=zr(t,this.size,2);i.uniform2fv(this.addr,e)}function wv(i,t){const e=zr(t,this.size,3);i.uniform3fv(this.addr,e)}function Av(i,t){const e=zr(t,this.size,4);i.uniform4fv(this.addr,e)}function Rv(i,t){const e=zr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cv(i,t){const e=zr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pv(i,t){const e=zr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lv(i,t){i.uniform1iv(this.addr,t)}function Dv(i,t){i.uniform2iv(this.addr,t)}function Iv(i,t){i.uniform3iv(this.addr,t)}function Nv(i,t){i.uniform4iv(this.addr,t)}function Uv(i,t){i.uniform1uiv(this.addr,t)}function Fv(i,t){i.uniform2uiv(this.addr,t)}function Ov(i,t){i.uniform3uiv(this.addr,t)}function Bv(i,t){i.uniform4uiv(this.addr,t)}function zv(i,t,e){const n=this.cache,s=t.length,r=tl(e,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=el(md):o=pd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Hv(i,t,e){const n=this.cache,s=t.length,r=tl(e,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vd,r[o])}function Gv(i,t,e){const n=this.cache,s=t.length,r=tl(e,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=el(gd):o=xd;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function kv(i,t,e){const n=this.cache,s=t.length,r=tl(e,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||_d,r[o])}function Vv(i){switch(i){case 5126:return bv;case 35664:return Tv;case 35665:return wv;case 35666:return Av;case 35674:return Rv;case 35675:return Cv;case 35676:return Pv;case 5124:case 35670:return Lv;case 35667:case 35671:return Dv;case 35668:case 35672:return Iv;case 35669:case 35673:return Nv;case 5125:return Uv;case 36294:return Fv;case 36295:return Ov;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return kv}}class Wv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ev(e.type)}}class Xv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vv(e.type)}}class qv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const hc=/(\w+)(\])?(\[|\.)?/g;function cf(i,t){i.seq.push(t),i.map[t.id]=t}function Yv(i,t,e){const n=i.name,s=n.length;for(hc.lastIndex=0;;){const r=hc.exec(n),o=hc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){cf(e,l===void 0?new Wv(a,i,t):new Xv(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new qv(a),cf(e,p)),e=p}}}class Ha{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Yv(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function hf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Zv=37297;let Kv=0;function Jv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const uf=new xe;function $v(i){Ie._getMatrix(uf,Ie.workingColorSpace,i);const t=`mat3( ${uf.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(i)){case qa:return[t,"LinearTransferOETF"];case nn:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ff(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Jv(i.getShaderSource(t),a)}else return r}function Qv(i,t){const e=$v(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const jv={[Tf]:"Linear",[wf]:"Reinhard",[Af]:"Cineon",[ah]:"ACESFilmic",[Cf]:"AgX",[Pf]:"Neutral",[Rf]:"Custom"};function tx(i,t){const e=jv[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Da=new I;function ex(){Ie.getLuminanceCoefficients(Da);const i=Da.x.toFixed(4),t=Da.y.toFixed(4),e=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function ix(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Mo(i){return i!==""}function df(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function pf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(i){return i.replace(rx,ox)}function ox(i,t){const e=we[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return sh(e)}const ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(i){return i.replace(ax,lx)}function lx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const cx={[So]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function hx(i){return cx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ux={[Ro]:"ENVMAP_MODE_REFRACTION"};function fx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ux[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dx={[oh]:"ENVMAP_BLENDING_MULTIPLY",[cp]:"ENVMAP_BLENDING_MIX",[hp]:"ENVMAP_BLENDING_ADD"};function px(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dx[i.combine]||"ENVMAP_BLENDING_NONE"}function mx(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=hx(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=fx(e),p=px(e),d=nx(e),u=ix(r),_=s.createProgram();let M,g,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Mo).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Mo).join(`
`),g.length>0&&(g+=`
`)):(M=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),g=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==as?"#define TONE_MAPPING":"",e.toneMapping!==as?we.tonemapping_pars_fragment:"",e.toneMapping!==as?tx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,Qv("linearToOutputTexel",e.outputColorSpace),ex(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mo).join(`
`)),o=sh(o),o=df(o,e),o=pf(o,e),a=sh(a),a=df(a,e),a=pf(a,e),o=mf(o),a=mf(a),e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,M=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",e.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=f+M+o,A=f+g+a,E=hf(s,s.VERTEX_SHADER,y),C=hf(s,s.FRAGMENT_SHADER,A);s.attachShader(_,E),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(D){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_)||"",W=s.getShaderInfoLog(E)||"",J=s.getShaderInfoLog(C)||"",L=B.trim(),q=W.trim(),Z=J.trim();let z=!0,ft=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,C);else{const $=ff(s,E,"vertex"),tt=ff(s,C,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+$+`
`+tt)}else L!==""?ae("WebGLProgram: Program Info Log:",L):(q===""||Z==="")&&(ft=!1);ft&&(D.diagnostics={runnable:z,programLog:L,vertexShader:{log:q,prefix:M},fragmentShader:{log:Z,prefix:g}})}s.deleteShader(E),s.deleteShader(C),v=new Ha(s,_),b=sx(s,_)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(_,Zv)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=C,this}let gx=0;class _x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vx(t),e.set(t,n)),n}}class vx{constructor(t){this.id=gx++,this.code=t,this.usedTimes=0}}function xx(i){return i===Zs||i===ka||i===Va}function Mx(i,t,e,n,s,r){const o=new _h,a=new _x,c=new Set,l=[],h=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,b,V,D,B,W){const J=D.fog,L=B.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,z=t.get(v.envMap||q,Z),ft=d[v.type];let $=n.precision;v.precision!==null&&($=n.getMaxPrecision(v.precision),$!==v.precision&&ae("WebGLProgram.getParameters:",v.precision,"not supported, using",$,"instead."));const tt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,lt=tt!==void 0?tt.length:0;let Gt=0;L.morphAttributes.position!==void 0&&(Gt=1),L.morphAttributes.normal!==void 0&&(Gt=2),L.morphAttributes.color!==void 0&&(Gt=3);let Yt,st,wt,zt;if(ft){const Mt=Oi[ft];Yt=Mt.vertexShader,st=Mt.fragmentShader}else{Yt=v.vertexShader,st=v.fragmentShader;const Mt=a.getVertexShaderStage(v),pe=a.getFragmentShaderStage(v);a.update(v,Mt,pe),wt=Mt.id,zt=pe.id}const qt=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),$t=B.isInstancedMesh===!0,qe=B.isBatchedMesh===!0,te=!!v.map,be=!!v.matcap,Re=!!z,at=Re&&z.isPMREMTexture===!0,At=!!v.aoMap,Et=!!v.lightMap,Ft=!!v.bumpMap&&v.wireframe===!1,Dt=!!v.normalMap,he=!!v.displacementMap,Vt=!!v.emissiveMap,Me=!!v.metalnessMap,ee=!!v.roughnessMap,jt=v.anisotropy>0,U=v.clearcoat>0,un=v.diffuseRoughness>0,_e=v.dispersion>0,Ye=v.retroreflectivity>0,Rt=v.iridescence>0,ln=v.sheen>0,Qt=v.transmission>0,ne=jt&&!!v.anisotropyMap,w=U&&!!v.clearcoatMap,x=U&&!!v.clearcoatNormalMap,X=U&&!!v.clearcoatRoughnessMap,Q=un&&!!v.diffuseRoughnessMap,k=Rt&&!!v.iridescenceMap,xt=Rt&&!!v.iridescenceThicknessMap,St=ln&&!!v.sheenColorMap,it=ln&&!!v.sheenRoughnessMap,ot=!!v.specularMap,Tt=!!v.specularColorMap,P=!!v.specularIntensityMap,rt=Qt&&!!v.transmissionMap,et=Qt&&!!v.thicknessMap,gt=!!v.gradientMap,ht=!!v.alphaMap,_t=v.alphaTest>0,Wt=!!v.alphaHash,ve=!!v.extensions;let dt=as;v.toneMapped&&(qt===null||qt.isXRRenderTarget===!0)&&(dt=i.toneMapping);const Zt=at?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,de={shaderID:ft,shaderType:v.type,shaderName:v.name,vertexShader:Yt,fragmentShader:st,defines:v.defines,customVertexShaderID:wt,customFragmentShaderID:zt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:$,batching:qe,batchingColor:qe&&B._colorsTexture!==null,instancing:$t,instancingColor:$t&&B.instanceColor!==null,instancingMorph:$t&&B.morphTexture!==null,outputColorSpace:qt===null?i.outputColorSpace:qt.isXRRenderTarget===!0?qt.texture.colorSpace:Ie.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:te,matcap:be,envMap:Re,envMapMode:Re&&z.mapping,envMapPMREM:at,envMapMaxLod:at?Zt.length-1:null,envMapSize:at?Zt[0].width:null,aoMap:At,lightMap:Et,bumpMap:Ft,normalMap:Dt,displacementMap:he,emissiveMap:Vt,normalMapObjectSpace:Dt&&v.normalMapType===dp,normalMapTangentSpace:Dt&&v.normalMapType===Wa,packedNormalMap:Dt&&v.normalMapType===Wa&&xx(v.normalMap.format),metalnessMap:Me,roughnessMap:ee,anisotropy:jt,anisotropyMap:ne,clearcoat:U,clearcoatMap:w,clearcoatNormalMap:x,clearcoatRoughnessMap:X,diffuseRoughness:un,diffuseRoughnessMap:Q,dispersion:_e,retroreflection:Ye,iridescence:Rt,iridescenceMap:k,iridescenceThicknessMap:xt,sheen:ln,sheenColorMap:St,sheenRoughnessMap:it,specularMap:ot,specularColorMap:Tt,specularIntensityMap:P,transmission:Qt,transmissionMap:rt,thicknessMap:et,gradientMap:gt,opaque:v.transparent===!1&&v.blending===yo&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:_t,alphaHash:Wt,combine:v.combine,mapUv:te&&u(v.map.channel),aoMapUv:At&&u(v.aoMap.channel),lightMapUv:Et&&u(v.lightMap.channel),bumpMapUv:Ft&&u(v.bumpMap.channel),normalMapUv:Dt&&u(v.normalMap.channel),displacementMapUv:he&&u(v.displacementMap.channel),emissiveMapUv:Vt&&u(v.emissiveMap.channel),metalnessMapUv:Me&&u(v.metalnessMap.channel),roughnessMapUv:ee&&u(v.roughnessMap.channel),anisotropyMapUv:ne&&u(v.anisotropyMap.channel),clearcoatMapUv:w&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:x&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Q&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:k&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:St&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:it&&u(v.sheenRoughnessMap.channel),specularMapUv:ot&&u(v.specularMap.channel),specularColorMapUv:Tt&&u(v.specularColorMap.channel),specularIntensityMapUv:P&&u(v.specularIntensityMap.channel),transmissionMapUv:rt&&u(v.transmissionMap.channel),thicknessMapUv:et&&u(v.thicknessMap.channel),alphaMapUv:ht&&u(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Dt||jt),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!L.attributes.uv&&(te||ht),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&Dt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:yt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Gt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:W.filter(Mt=>Mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:te&&v.map.isVideoTexture===!0&&Ie.getTransfer(v.map.colorSpace)===nn,decodeVideoTextureEmissive:Vt&&v.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(v.emissiveMap.colorSpace)===nn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===zn,flipSided:v.side===Jn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ve&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&v.extensions.multiDraw===!0||qe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function M(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)b.push(V),b.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(g(b,v),f(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function g(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function f(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function y(v){const b=d[v.type];let V;if(b){const D=Oi[b];V=Bm.clone(D.uniforms)}else V=v.uniforms;return V}function A(v,b){let V=h.get(b);return V!==void 0?++V.usedTimes:(V=new mx(i,b,v,s),l.push(V),h.set(b,V)),V}function E(v){if(--v.usedTimes===0){const b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function C(v){a.remove(v)}function R(){a.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:y,acquireProgram:A,releaseProgram:E,releaseShaderCache:C,programs:l,dispose:R}}function Sx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function yx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function _f(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,_,M,g,f){let y=i[t];return y===void 0?(y={id:d.id,object:d,geometry:u,material:_,materialVariant:o(d),groupOrder:M,renderOrder:d.renderOrder,z:g,group:f},i[t]=y):(y.id=d.id,y.object=d,y.geometry=u,y.material=_,y.materialVariant=o(d),y.groupOrder=M,y.renderOrder=d.renderOrder,y.z=g,y.group=f),t++,y}function c(d,u,_,M,g,f,y){y.reversedDepth===!0&&(g=-g);const A=a(d,u,_,M,g,f);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):e.push(A)}function l(d,u,_,M,g,f){const y=a(d,u,_,M,g,f);_.transmission>0?n.unshift(y):_.transparent===!0?s.unshift(y):e.unshift(y)}function h(d,u){e.length>1&&e.sort(d||yx),n.length>1&&n.sort(u||_f),s.length>1&&s.sort(u||_f)}function p(){for(let d=t,u=i.length;d<u;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:h}}function Ex(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new vf,i.set(n,[o])):s>=r.length?(o=new vf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function bx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new ce};break;case"SpotLight":e={position:new I,direction:new I,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Tx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let wx=0;function Ax(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Rx(i){const t=new bx,e=Tx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new Xe,o=new Xe;function a(l){let h=0,p=0,d=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let u=0,_=0,M=0,g=0,f=0,y=0,A=0,E=0,C=0,R=0,v=0,b=0,V=0,D=0;l.sort(Ax);for(let W=0,J=l.length;W<J;W++){const L=l[W],q=L.color,Z=L.intensity,z=L.distance;let ft=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Zs?ft=L.shadow.map.texture:ft=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=q.r*Z,p+=q.g*Z,d+=q.b*Z;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],Z);D++}else if(L.isSunLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const tt=L.shadow,lt=e.get(L);lt.shadowIntensity=tt.intensity,lt.shadowBias=tt.bias,lt.shadowNormalBias=tt.normalBias,lt.shadowRadius=tt.radius,lt.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[_]=lt,n.sunShadowMap[_]=ft;const Gt=tt.getViewportCount();for(let Yt=0;Yt<Gt;Yt++)n.sunShadowMatrix[M+Yt]=tt.getMatrix(Yt),n.sunShadowCascade[M+Yt]=tt._cascadeData[Yt];M+=Gt,_++}n.sun[u]=$,u++}else if(L.isDirectionalLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const tt=L.shadow,lt=e.get(L);lt.shadowIntensity=tt.intensity,lt.shadowBias=tt.bias,lt.shadowNormalBias=tt.normalBias,lt.shadowRadius=tt.radius,lt.shadowMapSize=tt.mapSize,n.directionalShadow[g]=lt,n.directionalShadowMap[g]=ft,n.directionalShadowMatrix[g]=L.shadow.matrix,C++}n.directional[g]=$,g++}else if(L.isSpotLight){const $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(q).multiplyScalar(Z),$.distance=z,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[y]=$;const tt=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,tt.updateMatrices(L),L.castShadow&&V++),n.spotLightMatrix[y]=tt.matrix,L.castShadow){const lt=e.get(L);lt.shadowIntensity=tt.intensity,lt.shadowBias=tt.bias,lt.shadowNormalBias=tt.normalBias,lt.shadowRadius=tt.radius,lt.shadowMapSize=tt.mapSize,n.spotShadow[y]=lt,n.spotShadowMap[y]=ft,v++}y++}else if(L.isRectAreaLight){const $=t.get(L);$.color.copy(q).multiplyScalar(Z),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=$,A++}else if(L.isPointLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const tt=L.shadow,lt=e.get(L);lt.shadowIntensity=tt.intensity,lt.shadowBias=tt.bias,lt.shadowNormalBias=tt.normalBias,lt.shadowRadius=tt.radius,lt.shadowMapSize=tt.mapSize,lt.shadowCameraNear=tt.camera.near,lt.shadowCameraFar=tt.camera.far,n.pointShadow[f]=lt,n.pointShadowMap[f]=ft,n.pointShadowMatrix[f]=L.shadow.matrix,R++}n.point[f]=$,f++}else if(L.isHemisphereLight){const $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(Z),$.groundColor.copy(L.groundColor).multiplyScalar(Z),n.hemi[E]=$,E++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;const B=n.hash;(B.sunLength!==u||B.directionalLength!==g||B.pointLength!==f||B.spotLength!==y||B.rectAreaLength!==A||B.hemiLength!==E||B.numSunShadows!==_||B.numDirectionalShadows!==C||B.numPointShadows!==R||B.numSpotShadows!==v||B.numSpotMaps!==b||B.numLightProbes!==D)&&(n.sun.length=u,n.directional.length=g,n.spot.length=y,n.rectArea.length=A,n.point.length=f,n.hemi.length=E,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-V,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=V,n.numLightProbes=D,B.sunLength=u,B.directionalLength=g,B.pointLength=f,B.spotLength=y,B.rectAreaLength=A,B.hemiLength=E,B.numSunShadows=_,B.numDirectionalShadows=C,B.numPointShadows=R,B.numSpotShadows=v,B.numSpotMaps=b,B.numLightProbes=D,n.version=wx++)}function c(l,h){let p=0,d=0,u=0,_=0,M=0,g=0;const f=h.matrixWorldInverse;for(let y=0,A=l.length;y<A;y++){const E=l[y];if(E.isSunLight){const C=n.sun[p];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(f),p++}else if(E.isDirectionalLight){const C=n.directional[d];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),d++}else if(E.isSpotLight){const C=n.spot[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),_++}else if(E.isRectAreaLight){const C=n.rectArea[M];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(f),o.identity(),r.copy(E.matrixWorld),r.premultiply(f),o.extractRotation(r),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),M++}else if(E.isPointLight){const C=n.point[u];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(f),u++}else if(E.isHemisphereLight){const C=n.hemi[g];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(f),g++}}}return{setup:a,setupView:c,state:n}}function xf(i){const t=new Rx(i),e=[],n=[],s=[];function r(p){h.camera=p,e.length=0,n.length=0,s.length=0}function o(p){p.isLightProbeGrid?s.push(p):e.push(p)}function a(p){n.push(p)}function c(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function l(p){t.setupView(e,p)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Cx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new xf(i),t.set(s,[a])):r>=o.length?(a=new xf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lx=`uniform sampler2D shadow_pass;
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
}`,Dx=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Ix=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Mf=new Xe,fo=new I,uc=new I;function Nx(i,t,e){let n=new Lo;const s=new mt,r=new mt,o=new dn,a=new Wm,c=new Xm,l={},h=e.maxTextureSize,p={[Ys]:Jn,[Jn]:Ys,[zn]:zn},d=new Js({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Px,fragmentShader:Lx}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const _=new En;_.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ut(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=So;let f=this.type;this.render=function(R,v,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;this.type===Wd&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=So);const V=i.getRenderTarget(),D=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Pr),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const J=f!==this.type;J&&v.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(q=>q.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,q=R.length;L<q;L++){const Z=R[L],z=Z.shadow;if(z===void 0){ae("WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ft=z.getFrameExtents();s.multiply(ft),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,z.mapSize.y=r.y));const $=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=$,z.map===null||J===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===_o){if(Z.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new zi(s.x,s.y,{format:Zs,type:ki,minFilter:ei,magFilter:ei,generateMipmaps:!1}),z.map.texture.name=Z.name+".shadowMap",z.map.depthTexture=new Ur(s.x,s.y,Ri),z.map.depthTexture.name=Z.name+".shadowMapDepth",z.map.depthTexture.format=Cs,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Hn,z.map.depthTexture.magFilter=Hn}else Z.isPointLight?(z.map=new Eh(s.x),z.map.depthTexture=new $f(s.x,Gi)):(z.map=new zi(s.x,s.y),z.map.depthTexture=new Ur(s.x,s.y,Gi)),z.map.depthTexture.name=Z.name+".shadowMap",z.map.depthTexture.format=Cs,this.type===So?(z.map.depthTexture.compareFunction=$?zf:Bf,z.map.depthTexture.minFilter=ei,z.map.depthTexture.magFilter=ei):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Hn,z.map.depthTexture.magFilter=Hn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const tt=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();Z.isPointLight!==!0&&z.updateMatrices(Z,b);const lt=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:b.layers;for(let Gt=0;Gt<tt;Gt++){const Yt=z.getCamera(Gt);if(Z.isPointLight){const st=z.camera,wt=z.matrix,zt=Z.distance||st.far;zt!==st.far&&(st.far=zt,st.updateProjectionMatrix()),fo.setFromMatrixPosition(Z.matrixWorld),st.position.copy(fo),uc.copy(st.position),uc.add(Dx[Gt]),st.up.copy(Ix[Gt]),st.lookAt(uc),st.updateMatrixWorld(),wt.makeTranslation(-fo.x,-fo.y,-fo.z),Mf.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Mf,st.coordinateSystem,st.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Gt),i.clear();else{Gt===0&&(i.setRenderTarget(z.map),i.clear());const st=z.getViewport(Gt);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),W.viewport(o)}n=z.getFrustum(Gt),E(v,b,Yt,Z,lt,this.type)}z.isPointLightShadow!==!0&&this.type===_o&&y(z,b),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(V,D,B)};function y(R,v){const b=t.update(M);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null?R.mapPass=new zi(s.x,s.y,{format:Zs,type:ki}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(v,null,b,d,M,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(v,null,b,u,M,null)}function A(R,v,b,V){let D=null;const B=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)D=B;else if(D=b.isPointLight===!0?c:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const W=D.uuid,J=v.uuid;let L=l[W];L===void 0&&(L={},l[W]=L);let q=L[J];q===void 0&&(q=D.clone(),L[J]=q,v.addEventListener("dispose",C)),D=q}if(D.visible=v.visible,D.wireframe=v.wireframe,V===_o?D.side=v.shadowSide!==null?v.shadowSide:v.side:D.side=v.shadowSide!==null?v.shadowSide:p[v.side],D.alphaMap=v.alphaMap,D.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,D.map=v.map,D.clipShadows=v.clipShadows,D.clippingPlanes=v.clippingPlanes,D.clipIntersection=v.clipIntersection,D.displacementMap=v.displacementMap,D.displacementScale=v.displacementScale,D.displacementBias=v.displacementBias,D.wireframeLinewidth=v.wireframeLinewidth,D.linewidth=v.linewidth,b.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const W=i.properties.get(D);W.light=b}return D}function E(R,v,b,V,D,B){if(R.visible===!1)return;if(R.layers.test(D)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&B===_o)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);const L=t.update(R),q=R.material;if(Array.isArray(q)){const Z=L.groups;for(let z=0,ft=Z.length;z<ft;z++){const $=Z[z],tt=q[$.materialIndex];if(tt&&tt.visible){const lt=A(R,tt,V,B);R.onBeforeShadow(i,R,v,b,L,lt,$),i.renderBufferDirect(b,null,L,lt,R,$),R.onAfterShadow(i,R,v,b,L,lt,$)}}}else if(q.visible){const Z=A(R,q,V,B);R.onBeforeShadow(i,R,v,b,L,Z,null),i.renderBufferDirect(b,null,L,Z,R,null),R.onAfterShadow(i,R,v,b,L,Z,null)}}const J=R.children;for(let L=0,q=J.length;L<q;L++)E(J[L],v,b,V,D,B)}function C(R){R.target.removeEventListener("dispose",C);for(const b in l){const V=l[b],D=R.target.uuid;D in V&&(V[D].dispose(),delete V[D])}}}function Ux(i,t){function e(){let P=!1;const rt=new dn;let et=null;const gt=new dn(0,0,0,0);return{setMask:function(ht){et!==ht&&!P&&(i.colorMask(ht,ht,ht,ht),et=ht)},setLocked:function(ht){P=ht},setClear:function(ht,_t,Wt,ve,dt){dt===!0&&(ht*=ve,_t*=ve,Wt*=ve),rt.set(ht,_t,Wt,ve),gt.equals(rt)===!1&&(i.clearColor(ht,_t,Wt,ve),gt.copy(rt))},reset:function(){P=!1,et=null,gt.set(-1,0,0,0)}}}function n(){let P=!1,rt=!1,et=null,gt=null,ht=null;return{setReversed:function(_t){if(rt!==_t){const Wt=t.get("EXT_clip_control");_t?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),rt=_t;const ve=ht;ht=null,this.setClear(ve)}},getReversed:function(){return rt},setTest:function(_t){_t?yt(i.DEPTH_TEST):$t(i.DEPTH_TEST)},setMask:function(_t){et!==_t&&!P&&(i.depthMask(_t),et=_t)},setFunc:function(_t){if(rt&&(_t=bp[_t]),gt!==_t){switch(_t){case pc:i.depthFunc(i.NEVER);break;case mc:i.depthFunc(i.ALWAYS);break;case gc:i.depthFunc(i.LESS);break;case Ao:i.depthFunc(i.LEQUAL);break;case _c:i.depthFunc(i.EQUAL);break;case vc:i.depthFunc(i.GEQUAL);break;case xc:i.depthFunc(i.GREATER);break;case Mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=_t}},setLocked:function(_t){P=_t},setClear:function(_t){ht!==_t&&(ht=_t,rt&&(_t=1-_t),i.clearDepth(_t))},reset:function(){P=!1,et=null,gt=null,ht=null,rt=!1}}}function s(){let P=!1,rt=null,et=null,gt=null,ht=null,_t=null,Wt=null,ve=null,dt=null;return{setTest:function(Zt){P||(Zt?yt(i.STENCIL_TEST):$t(i.STENCIL_TEST))},setMask:function(Zt){rt!==Zt&&!P&&(i.stencilMask(Zt),rt=Zt)},setFunc:function(Zt,de,Mt){(et!==Zt||gt!==de||ht!==Mt)&&(i.stencilFunc(Zt,de,Mt),et=Zt,gt=de,ht=Mt)},setOp:function(Zt,de,Mt){(_t!==Zt||Wt!==de||ve!==Mt)&&(i.stencilOp(Zt,de,Mt),_t=Zt,Wt=de,ve=Mt)},setLocked:function(Zt){P=Zt},setClear:function(Zt){dt!==Zt&&(i.clearStencil(Zt),dt=Zt)},reset:function(){P=!1,rt=null,et=null,gt=null,ht=null,_t=null,Wt=null,ve=null,dt=null}}}const r=new e,o=new n,a=new s;let c={};const l=new WeakMap;let h={},p={},d={},u=new WeakMap,_=[],M=null,g=!1,f=null,y=null,A=null,E=null,C=null,R=null,v=null,b=new ce(0,0,0),V=0,D=!1,B=null,W=null,J=null,L=null,q=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ft=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec($)[1]),z=ft>=1):$.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=ft>=2);let tt=null,lt={};const Gt=i.getParameter(i.SCISSOR_BOX),Yt=i.getParameter(i.VIEWPORT),st=new dn().fromArray(Gt),wt=new dn().fromArray(Yt);function zt(P,rt,et,gt){const ht=new Uint8Array(4),_t=i.createTexture();i.bindTexture(P,_t),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<et;Wt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(rt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return _t}const qt={};qt[i.TEXTURE_2D]=zt(i.TEXTURE_2D,i.TEXTURE_2D,1),qt[i.TEXTURE_CUBE_MAP]=zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),qt[i.TEXTURE_2D_ARRAY]=zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),qt[i.TEXTURE_3D]=zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),yt(i.DEPTH_TEST),o.setFunc(Ao),Ft(!1),Dt(ru),yt(i.CULL_FACE),At(Pr);function yt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function $t(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function qe(P,rt){return d[P]!==rt?(i.bindFramebuffer(P,rt),d[P]=rt,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=rt),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function te(P,rt){let et=_,gt=!1;if(P){et=u.get(rt),et===void 0&&(et=[],u.set(rt,et));const ht=P.textures;if(et.length!==ht.length||et[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Wt=ht.length;_t<Wt;_t++)et[_t]=i.COLOR_ATTACHMENT0+_t;et.length=ht.length,gt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,gt=!0);gt&&i.drawBuffers(et)}function be(P){return M!==P?(i.useProgram(P),M=P,!0):!1}const Re={[wr]:i.FUNC_ADD,[qd]:i.FUNC_SUBTRACT,[Yd]:i.FUNC_REVERSE_SUBTRACT};Re[Zd]=i.MIN,Re[Kd]=i.MAX;const at={[Jd]:i.ZERO,[$d]:i.ONE,[Qd]:i.SRC_COLOR,[Ef]:i.SRC_ALPHA,[sp]:i.SRC_ALPHA_SATURATE,[np]:i.DST_COLOR,[tp]:i.DST_ALPHA,[jd]:i.ONE_MINUS_SRC_COLOR,[bf]:i.ONE_MINUS_SRC_ALPHA,[ip]:i.ONE_MINUS_DST_COLOR,[ep]:i.ONE_MINUS_DST_ALPHA,[rp]:i.CONSTANT_COLOR,[op]:i.ONE_MINUS_CONSTANT_COLOR,[ap]:i.CONSTANT_ALPHA,[lp]:i.ONE_MINUS_CONSTANT_ALPHA};function At(P,rt,et,gt,ht,_t,Wt,ve,dt,Zt){if(P===Pr){g===!0&&($t(i.BLEND),g=!1);return}if(g===!1&&(yt(i.BLEND),g=!0),P!==Xd){if(P!==f||Zt!==D){if((y!==wr||C!==wr)&&(i.blendEquation(i.FUNC_ADD),y=wr,C=wr),Zt)switch(P){case yo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ou:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",P);break}else switch(P){case yo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ou:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case au:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lu:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",P);break}A=null,E=null,R=null,v=null,b.set(0,0,0),V=0,f=P,D=Zt}return}ht=ht||rt,_t=_t||et,Wt=Wt||gt,(rt!==y||ht!==C)&&(i.blendEquationSeparate(Re[rt],Re[ht]),y=rt,C=ht),(et!==A||gt!==E||_t!==R||Wt!==v)&&(i.blendFuncSeparate(at[et],at[gt],at[_t],at[Wt]),A=et,E=gt,R=_t,v=Wt),(ve.equals(b)===!1||dt!==V)&&(i.blendColor(ve.r,ve.g,ve.b,dt),b.copy(ve),V=dt),f=P,D=!1}function Et(P,rt){P.side===zn?$t(i.CULL_FACE):yt(i.CULL_FACE);let et=P.side===Jn;rt&&(et=!et),Ft(et),P.blending===yo&&P.transparent===!1?At(Pr):At(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);const gt=P.stencilWrite;a.setTest(gt),gt&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Vt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):$t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(P){B!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),B=P)}function Dt(P){P!==kd?(yt(i.CULL_FACE),P!==W&&(P===ru?i.cullFace(i.BACK):P===Vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$t(i.CULL_FACE),W=P}function he(P){P!==J&&(z&&i.lineWidth(P),J=P)}function Vt(P,rt,et){P?(yt(i.POLYGON_OFFSET_FILL),(L!==rt||q!==et)&&(L=rt,q=et,o.getReversed()&&(rt=-rt,et=-et),i.polygonOffset(rt,et))):$t(i.POLYGON_OFFSET_FILL)}function Me(P){P?yt(i.SCISSOR_TEST):$t(i.SCISSOR_TEST)}function ee(P){P===void 0&&(P=i.TEXTURE0+Z-1),tt!==P&&(i.activeTexture(P),tt=P)}function jt(P,rt,et){et===void 0&&(tt===null?et=i.TEXTURE0+Z-1:et=tt);let gt=lt[et];gt===void 0&&(gt={type:void 0,texture:void 0},lt[et]=gt),(gt.type!==P||gt.texture!==rt)&&(tt!==et&&(i.activeTexture(et),tt=et),i.bindTexture(P,rt||qt[P]),gt.type=P,gt.texture=rt)}function U(){const P=lt[tt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function un(){try{i.compressedTexImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function _e(){try{i.compressedTexImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function Ye(){try{i.texSubImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function Rt(){try{i.texSubImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function ln(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function Qt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function ne(){try{i.texStorage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function w(){try{i.texStorage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function x(){try{i.texImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function X(){try{i.texImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function Q(P){return p[P]!==void 0?p[P]:i.getParameter(P)}function k(P,rt){p[P]!==rt&&(i.pixelStorei(P,rt),p[P]=rt)}function xt(P){st.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),st.copy(P))}function St(P){wt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),wt.copy(P))}function it(P,rt){let et=l.get(rt);et===void 0&&(et=new WeakMap,l.set(rt,et));let gt=et.get(P);gt===void 0&&(gt=i.getUniformBlockIndex(rt,P.name),i.uniformBlockBinding(rt,gt,gt),et.set(P,gt))}function ot(P,rt,et){const ht=l.get(rt).get(P);c[ht]!==et&&(i.bindBufferBase(i.UNIFORM_BUFFER,ht,et),c[ht]=et)}function Tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},tt=null,lt={},d={},c={},u=new WeakMap,_=[],M=null,g=!1,f=null,y=null,A=null,E=null,C=null,R=null,v=null,b=new ce(0,0,0),V=0,D=!1,B=null,W=null,J=null,L=null,q=null,st.set(0,0,i.canvas.width,i.canvas.height),wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:yt,disable:$t,bindFramebuffer:qe,drawBuffers:te,useProgram:be,setBlending:At,setMaterial:Et,setFlipSided:Ft,setCullFace:Dt,setLineWidth:he,setPolygonOffset:Vt,setScissorTest:Me,activeTexture:ee,bindTexture:jt,unbindTexture:U,compressedTexImage2D:un,compressedTexImage3D:_e,texImage2D:x,texImage3D:X,pixelStorei:k,getParameter:Q,updateUBOMapping:it,uniformBlockBinding:ot,texStorage2D:ne,texStorage3D:w,texSubImage2D:Ye,texSubImage3D:Rt,compressedTexSubImage2D:ln,compressedTexSubImage3D:Qt,scissor:xt,viewport:St,reset:Tt}}function Fx(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new mt,h=new WeakMap,p=new Set;let d;const u=new WeakMap,_=new Set,M=new FinalizationRegistry(w=>_.delete(w));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,x){return g?new OffscreenCanvas(w,x):Ya("canvas")}function y(w,x,X){let Q=1;const k=ne(w);if((k.width>X||k.height>X)&&(Q=X/Math.max(k.width,k.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const xt=Math.floor(Q*k.width),St=Math.floor(Q*k.height);d===void 0&&(d=f(xt,St));const it=x?f(xt,St):d;return it.width=xt,it.height=St,it.getContext("2d").drawImage(w,0,0,xt,St),ae("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+xt+"x"+St+")."),it}else return"data"in w&&ae("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),w;return w}function A(w){return w.generateMipmaps}function E(w){i.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(w,x,X,Q,k,xt=!1){if(w!==null){if(i[w]!==void 0)return i[w];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let St;Q&&(St=t.get("EXT_texture_norm16"),St||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=x;if(x===i.RED&&(X===i.FLOAT&&(it=i.R32F),X===i.HALF_FLOAT&&(it=i.R16F),X===i.UNSIGNED_BYTE&&(it=i.R8),X===i.UNSIGNED_SHORT&&St&&(it=St.R16_EXT),X===i.SHORT&&St&&(it=St.R16_SNORM_EXT)),x===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.R8UI),X===i.UNSIGNED_SHORT&&(it=i.R16UI),X===i.UNSIGNED_INT&&(it=i.R32UI),X===i.BYTE&&(it=i.R8I),X===i.SHORT&&(it=i.R16I),X===i.INT&&(it=i.R32I)),x===i.RG&&(X===i.FLOAT&&(it=i.RG32F),X===i.HALF_FLOAT&&(it=i.RG16F),X===i.UNSIGNED_BYTE&&(it=i.RG8),X===i.UNSIGNED_SHORT&&St&&(it=St.RG16_EXT),X===i.SHORT&&St&&(it=St.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RG8UI),X===i.UNSIGNED_SHORT&&(it=i.RG16UI),X===i.UNSIGNED_INT&&(it=i.RG32UI),X===i.BYTE&&(it=i.RG8I),X===i.SHORT&&(it=i.RG16I),X===i.INT&&(it=i.RG32I)),x===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RGB8UI),X===i.UNSIGNED_SHORT&&(it=i.RGB16UI),X===i.UNSIGNED_INT&&(it=i.RGB32UI),X===i.BYTE&&(it=i.RGB8I),X===i.SHORT&&(it=i.RGB16I),X===i.INT&&(it=i.RGB32I)),x===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),X===i.UNSIGNED_INT&&(it=i.RGBA32UI),X===i.BYTE&&(it=i.RGBA8I),X===i.SHORT&&(it=i.RGBA16I),X===i.INT&&(it=i.RGBA32I)),x===i.RGB&&(X===i.UNSIGNED_SHORT&&St&&(it=St.RGB16_EXT),X===i.SHORT&&St&&(it=St.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),x===i.RGBA){const ot=xt?qa:Ie.getTransfer(k);X===i.FLOAT&&(it=i.RGBA32F),X===i.HALF_FLOAT&&(it=i.RGBA16F),X===i.UNSIGNED_BYTE&&(it=ot===nn?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&St&&(it=St.RGBA16_EXT),X===i.SHORT&&St&&(it=St.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function v(w,x){let X;return w?x===null||x===Gi||x===Nr?X=i.DEPTH24_STENCIL8:x===Ri?X=i.DEPTH32F_STENCIL8:x===Co&&(X=i.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gi||x===Nr?X=i.DEPTH_COMPONENT24:x===Ri?X=i.DEPTH_COMPONENT32F:x===Co&&(X=i.DEPTH_COMPONENT16),X}function b(w,x){return A(w)===!0||w.isFramebufferTexture&&w.minFilter!==Hn&&w.minFilter!==ei?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function V(w){const x=new WeakRef(w);n.get(w).__ref=x,_.add(x),M.register(w,x,x)}function D(w){const x=n.get(w).__ref;x!==void 0&&(_.delete(x),M.unregister(x))}function B(w){J(w.target)}function W(w){L(w.target)}function J(w){w.removeEventListener("dispose",B),D(w),Z(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&p.delete(w)}function L(w){w.removeEventListener("dispose",W),D(w),ft(w)}function q(){for(const w of _){const x=w.deref();x!==void 0&&(x.isRenderTarget===!0?L(x):J(x))}_.clear(),p.clear()}function Z(w){const x=n.get(w);if(x.__webglInit===void 0)return;const X=w.source,Q=u.get(X);if(Q){const k=Q[x.__cacheKey];k.usedTimes--,k.usedTimes===0&&z(w),Object.keys(Q).length===0&&u.delete(X)}n.remove(w)}function z(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const X=w.source,Q=u.get(X);delete Q[x.__cacheKey],o.memory.textures--}function ft(w){const x=n.get(w);x.__depthDisposeCallback&&x.__depthDisposeCallback();const X=w.depthTexture;if(X&&X.renderTarget===w&&J(X),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let xt=0;xt<x.__webglFramebuffer[k].length;xt++)i.deleteFramebuffer(x.__webglFramebuffer[k][xt]);else i.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)i.deleteFramebuffer(x.__webglFramebuffer[k]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const Q=w.textures;for(let k=0,xt=Q.length;k<xt;k++){const St=n.get(Q[k]);St.__webglTexture&&(i.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(Q[k])}n.remove(w)}let $=0;function tt(){$=0}function lt(){return $}function Gt(w){$=w}function Yt(){const w=$;return w>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,w}function st(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.mipmapsAutoUpdate),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function wt(w,x){const X=n.get(w);if(w.isVideoTexture&&ln(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&X.__version!==w.version){const Q=w.image;if(Q===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(X,w,x);return}}else w.isExternalTexture&&(X.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+x)}function zt(w,x){const X=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){Et(X,w,x);return}else w.isExternalTexture&&(X.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+x)}function qt(w,x){const X=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){Et(X,w,x);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+x)}function yt(w,x){const X=n.get(w);if(w.version>0&&X.__version!==w.version){Ft(X,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+x)}const $t={[Ga]:i.REPEAT,[rs]:i.CLAMP_TO_EDGE,[Sc]:i.MIRRORED_REPEAT},qe={[Hn]:i.NEAREST,[up]:i.NEAREST_MIPMAP_NEAREST,[sa]:i.NEAREST_MIPMAP_LINEAR,[ei]:i.LINEAR,[Fl]:i.LINEAR_MIPMAP_NEAREST,[As]:i.LINEAR_MIPMAP_LINEAR},te={[mp]:i.NEVER,[Hf]:i.ALWAYS,[gp]:i.LESS,[Bf]:i.LEQUAL,[_p]:i.EQUAL,[zf]:i.GEQUAL,[vp]:i.GREATER,[xp]:i.NOTEQUAL};function be(w,x){if(x.type===Ri&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ei||x.magFilter===Fl||x.magFilter===sa||x.magFilter===As||x.minFilter===ei||x.minFilter===Fl||x.minFilter===sa||x.minFilter===As)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,$t[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,$t[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,$t[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,qe[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,qe[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,te[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Hn||x.minFilter!==sa&&x.minFilter!==As||x.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Re(w,x){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",B),V(x));const Q=x.source;let k=u.get(Q);k===void 0&&(k={},u.set(Q,k));const xt=st(x);if(xt!==w.__cacheKey){k[xt]===void 0&&(k[xt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),k[xt].usedTimes++;const St=k[w.__cacheKey];St!==void 0&&(k[w.__cacheKey].usedTimes--,St.usedTimes===0&&z(x)),w.__cacheKey=xt,w.__webglTexture=k[xt].texture}return X}function at(w,x,X){return Math.floor(Math.floor(w/X)/x)}function At(w,x,X,Q){const xt=w.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,X,Q,x.data);else{xt.sort((P,rt)=>P.start-rt.start);let St=0;for(let P=1;P<xt.length;P++){const rt=xt[St],et=xt[P],gt=rt.start+rt.count,ht=at(et.start,x.width,4),_t=at(rt.start,x.width,4);et.start<=gt+1&&ht===_t&&at(et.start+et.count-1,x.width,4)===ht?rt.count=Math.max(rt.count,et.start+et.count-rt.start):(++St,xt[St]=et)}xt.length=St+1;const it=e.getParameter(i.UNPACK_ROW_LENGTH),ot=e.getParameter(i.UNPACK_SKIP_PIXELS),Tt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let P=0,rt=xt.length;P<rt;P++){const et=xt[P],gt=Math.floor(et.start/4),ht=Math.ceil(et.count/4),_t=gt%x.width,Wt=Math.floor(gt/x.width),ve=ht,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,Wt),e.texSubImage2D(i.TEXTURE_2D,0,_t,Wt,ve,dt,X,Q,x.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function Et(w,x,X){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);const k=Re(w,x),xt=x.source;e.bindTexture(Q,w.__webglTexture,i.TEXTURE0+X);const St=n.get(xt);if(xt.version!==St.__version||k===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const dt=Ie.getPrimaries(Ie.workingColorSpace),Zt=x.colorSpace===ws?null:Ie.getPrimaries(x.colorSpace),de=x.colorSpace===ws||dt===Zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ot=y(x.image,!1,s.maxTextureSize);ot=Qt(x,ot);const Tt=r.convert(x.format,x.colorSpace),P=r.convert(x.type);let rt=R(x.internalFormat,Tt,P,x.normalized,x.colorSpace,x.isVideoTexture);be(Q,x);let et;const gt=x.mipmaps,ht=x.isVideoTexture!==!0,_t=St.__version===void 0||k===!0,Wt=xt.dataReady,ve=b(x,ot);if(x.isDepthTexture)rt=v(x.format===Rs,x.type),_t&&(ht?e.texStorage2D(i.TEXTURE_2D,1,rt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,rt,ot.width,ot.height,0,Tt,P,null));else if(x.isDataTexture)if(gt.length>0){ht&&_t&&e.texStorage2D(i.TEXTURE_2D,ve,rt,gt[0].width,gt[0].height);for(let dt=0,Zt=gt.length;dt<Zt;dt++)et=gt[dt],ht?Wt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,et.width,et.height,Tt,P,et.data):e.texImage2D(i.TEXTURE_2D,dt,rt,et.width,et.height,0,Tt,P,et.data);x.generateMipmaps=!1}else ht?(_t&&e.texStorage2D(i.TEXTURE_2D,ve,rt,ot.width,ot.height),Wt&&At(x,ot,Tt,P)):e.texImage2D(i.TEXTURE_2D,0,rt,ot.width,ot.height,0,Tt,P,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ht&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ve,rt,gt[0].width,gt[0].height,ot.depth);for(let dt=0,Zt=gt.length;dt<Zt;dt++)if(et=gt[dt],x.format!==Bi)if(Tt!==null)if(ht){if(Wt)if(x.layerUpdates.size>0){const de=Qu(et.width,et.height,x.format,x.type);for(const Mt of x.layerUpdates){const pe=et.data.subarray(Mt*de/et.data.BYTES_PER_ELEMENT,(Mt+1)*de/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,Mt,et.width,et.height,1,Tt,pe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,et.width,et.height,ot.depth,Tt,et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,rt,et.width,et.height,ot.depth,0,et.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?Wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,et.width,et.height,ot.depth,Tt,P,et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,rt,et.width,et.height,ot.depth,0,Tt,P,et.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ht&&_t&&e.texStorage2D(i.TEXTURE_2D,ve,rt,gt[0].width,gt[0].height);for(let dt=0,Zt=gt.length;dt<Zt;dt++)et=gt[dt],x.format!==Bi?Tt!==null?ht?Wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,et.width,et.height,Tt,et.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,rt,et.width,et.height,0,et.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?Wt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,et.width,et.height,Tt,P,et.data):e.texImage2D(i.TEXTURE_2D,dt,rt,et.width,et.height,0,Tt,P,et.data)}else if(x.isDataArrayTexture)if(ht){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ve,rt,ot.width,ot.height,ot.depth),Wt)if(x.layerUpdates.size>0){const dt=Qu(ot.width,ot.height,x.format,x.type);for(const Zt of x.layerUpdates){const de=ot.data.subarray(Zt*dt/ot.data.BYTES_PER_ELEMENT,(Zt+1)*dt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Zt,ot.width,ot.height,1,Tt,P,de)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Tt,P,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,ot.width,ot.height,ot.depth,0,Tt,P,ot.data);else if(x.isData3DTexture)ht?(_t&&e.texStorage3D(i.TEXTURE_3D,ve,rt,ot.width,ot.height,ot.depth),Wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Tt,P,ot.data)):e.texImage3D(i.TEXTURE_3D,0,rt,ot.width,ot.height,ot.depth,0,Tt,P,ot.data);else if(x.isFramebufferTexture){if(_t)if(ht)e.texStorage2D(i.TEXTURE_2D,ve,rt,ot.width,ot.height);else{let dt=ot.width,Zt=ot.height;for(let de=0;de<ve;de++)e.texImage2D(i.TEXTURE_2D,de,rt,dt,Zt,0,Tt,P,null),dt>>=1,Zt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),ot.parentNode!==dt){dt.appendChild(ot),p.add(x),dt.onpaint=Zt=>{const de=Zt.changedElements;for(const Mt of p)de.includes(Mt.image)&&(Mt.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ot);else{const de=i.RGBA,Mt=i.RGBA,pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,de,Mt,pe,ot)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(gt.length>0){if(ht&&_t){const dt=ne(gt[0]);e.texStorage2D(i.TEXTURE_2D,ve,rt,dt.width,dt.height)}for(let dt=0,Zt=gt.length;dt<Zt;dt++)et=gt[dt],ht?Wt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Tt,P,et):e.texImage2D(i.TEXTURE_2D,dt,rt,Tt,P,et);x.generateMipmaps=!1}else if(ht){if(_t){const dt=ne(ot);e.texStorage2D(i.TEXTURE_2D,ve,rt,dt.width,dt.height)}Wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,P,ot)}else e.texImage2D(i.TEXTURE_2D,0,rt,Tt,P,ot);A(x)&&x.mipmapsAutoUpdate===!0&&E(Q),St.__version=xt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Ft(w,x,X){if(x.image.length!==6)return;const Q=Re(w,x),k=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+X);const xt=n.get(k);if(k.version!==xt.__version||Q===!0){e.activeTexture(i.TEXTURE0+X);const St=Ie.getPrimaries(Ie.workingColorSpace),it=x.colorSpace===ws?null:Ie.getPrimaries(x.colorSpace),ot=x.colorSpace===ws||St===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const Tt=x.isCompressedTexture||x.image[0].isCompressedTexture,P=x.image[0]&&x.image[0].isDataTexture,rt=[];for(let Mt=0;Mt<6;Mt++)!Tt&&!P?rt[Mt]=y(x.image[Mt],!0,s.maxCubemapSize):rt[Mt]=P?x.image[Mt].image:x.image[Mt],rt[Mt]=Qt(x,rt[Mt]);const et=rt[0],gt=r.convert(x.format,x.colorSpace),ht=r.convert(x.type);let _t=R(x.internalFormat,gt,ht,x.normalized,x.colorSpace);const Wt=x.isVideoTexture!==!0,ve=xt.__version===void 0||Q===!0,dt=k.dataReady;let Zt=b(x,et);be(i.TEXTURE_CUBE_MAP,x);let de;if(x.isDepthTexture){if(_t=v(x.format===Rs,x.type),ve)if(Wt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,_t,et.width,et.height);else for(let Mt=0;Mt<6;Mt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,_t,et.width,et.height,0,gt,ht,null)}else if(Tt){Wt&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,_t,et.width,et.height);for(let Mt=0;Mt<6;Mt++){de=rt[Mt].mipmaps;for(let pe=0;pe<de.length;pe++){const mn=de[pe];x.format!==Bi?gt!==null?Wt?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,pe,0,0,mn.width,mn.height,gt,mn.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,pe,_t,mn.width,mn.height,0,mn.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,pe,0,0,mn.width,mn.height,gt,ht,mn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,pe,_t,mn.width,mn.height,0,gt,ht,mn.data)}}}else{if(de=x.mipmaps,Wt&&ve){de.length>0&&Zt++;const Mt=ne(rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,_t,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(P){Wt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,rt[Mt].width,rt[Mt].height,gt,ht,rt[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,_t,rt[Mt].width,rt[Mt].height,0,gt,ht,rt[Mt].data);for(let pe=0;pe<de.length;pe++){const ni=de[pe].image[Mt].image;Wt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,pe+1,0,0,ni.width,ni.height,gt,ht,ni.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,pe+1,_t,ni.width,ni.height,0,gt,ht,ni.data)}}else{Wt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,gt,ht,rt[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,_t,gt,ht,rt[Mt]);for(let pe=0;pe<de.length;pe++){const mn=de[pe];Wt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,pe+1,0,0,gt,ht,mn.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,pe+1,_t,gt,ht,mn.image[Mt])}}}A(x)&&x.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),xt.__version=k.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Dt(w,x,X,Q,k,xt){const St=r.convert(X.format,X.colorSpace),it=r.convert(X.type),ot=R(X.internalFormat,St,it,X.normalized,X.colorSpace),Tt=n.get(x),P=n.get(X);if(P.__renderTarget=x,!Tt.__hasExternalTextures){const rt=Math.max(1,x.width>>xt),et=Math.max(1,x.height>>xt);k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?e.texImage3D(k,xt,ot,rt,et,x.depth,0,St,it,null):e.texImage2D(k,xt,ot,rt,et,0,St,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Rt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,k,P.__webglTexture,0,Ye(x)):(k===i.TEXTURE_2D||k>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,k,P.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(w,x,X){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const Q=x.depthTexture,k=Q&&Q.isDepthTexture?Q.type:null,xt=v(x.stencilBuffer,k),St=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Rt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye(x),xt,x.width,x.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye(x),xt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,w)}else{const Q=x.textures;for(let k=0;k<Q.length;k++){const xt=Q[k],St=r.convert(xt.format,xt.colorSpace),it=r.convert(xt.type),ot=R(xt.internalFormat,St,it,xt.normalized,xt.colorSpace);Rt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye(x),ot,x.width,x.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye(x),ot,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ot,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(w,x,X){const Q=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const k=n.get(x.depthTexture);k.__renderTarget=x;const xt=Q?x.depthTexture.image[0]:x.depthTexture.image;(!k.__webglTexture||xt.width!==x.width||xt.height!==x.height)&&(xt.width=x.width,xt.height=x.height,x.depthTexture.needsUpdate=!0),Q?yt(x.depthTexture,0):wt(x.depthTexture,0);const St=k.__webglTexture,it=Ye(x),ot=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,Tt=x.depthTexture.format===Rs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Cs)Rt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,ot,St,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,Tt,ot,St,0);else if(x.depthTexture.format===Rs)Rt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,ot,St,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,Tt,ot,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Me(w){const x=n.get(w),X=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){const k=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",k)};Q.addEventListener("dispose",k),x.__depthDisposeCallback=k}x.__boundDepthTexture=Q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(X)for(let Q=0;Q<6;Q++)Vt(x.__webglFramebuffer[Q],w,Q);else w.texture.mipmaps.length>0?Vt(x.__webglFramebuffer[0],w,0):Vt(x.__webglFramebuffer,w,0);else if(X){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=i.createRenderbuffer(),he(x.__webglDepthbuffer[Q],w,!1);else{const k=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=x.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,xt)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),he(x.__webglDepthbuffer,w,!1);else{const k=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,xt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(w,x,X){const Q=n.get(w);x!==void 0&&Dt(Q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Me(w)}function jt(w){const x=w.texture,X=n.get(w),Q=n.get(x);w.addEventListener("dispose",W),V(w);const k=w.textures,xt=w.isWebGLCubeRenderTarget===!0,St=k.length>1;if(St||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,o.memory.textures++),xt){X.__webglFramebuffer=[];for(let it=0;it<6;it++)if(x.mipmaps.length>0){X.__webglFramebuffer[it]=[];for(let ot=0;ot<x.mipmaps.length;ot++)X.__webglFramebuffer[it][ot]=i.createFramebuffer()}else X.__webglFramebuffer[it]=i.createFramebuffer()}else{if(x.mipmaps.length>0){X.__webglFramebuffer=[];for(let it=0;it<x.mipmaps.length;it++)X.__webglFramebuffer[it]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(St)for(let it=0,ot=k.length;it<ot;it++){const Tt=n.get(k[it]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Rt(w)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let it=0;it<k.length;it++){const ot=k[it];X.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[it]);const Tt=r.convert(ot.format,ot.colorSpace),P=r.convert(ot.type),rt=R(ot.internalFormat,Tt,P,ot.normalized,ot.colorSpace,w.isXRRenderTarget===!0),et=Ye(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,rt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,X.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),he(X.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),be(i.TEXTURE_CUBE_MAP,x);for(let it=0;it<6;it++)if(x.mipmaps.length>0)for(let ot=0;ot<x.mipmaps.length;ot++)Dt(X.__webglFramebuffer[it][ot],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot);else Dt(X.__webglFramebuffer[it],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);A(x)?E(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(St){for(let it=0,ot=k.length;it<ot;it++){const Tt=k[it],P=n.get(Tt);let rt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(rt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,P.__webglTexture),be(rt,Tt),Dt(X.__webglFramebuffer,w,Tt,i.COLOR_ATTACHMENT0+it,rt,0),A(Tt)&&E(rt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(it=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,Q.__webglTexture),be(it,x),x.mipmaps.length>0)for(let ot=0;ot<x.mipmaps.length;ot++)Dt(X.__webglFramebuffer[ot],w,x,i.COLOR_ATTACHMENT0,it,ot);else Dt(X.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,it,0);A(x)?E(it):x.mipmaps.length>0&&i.texParameteri(it,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&Me(w)}function U(w){const x=w.textures;for(let X=0,Q=x.length;X<Q;X++){const k=x[X];if(A(k)&&k.mipmapsAutoUpdate===!0){const xt=C(w),St=n.get(k).__webglTexture;e.bindTexture(xt,St),E(xt),e.unbindTexture()}}}const un=[];function _e(w){if(w.samples>0){if(Rt(w)===!1){const x=w.textures,X=w.width,Q=w.height;let k=i.COLOR_BUFFER_BIT;const xt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(w),it=x.length>1;if(it)for(let Tt=0;Tt<x.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Tt=0;Tt<x.length;Tt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(k|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(k|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[Tt]);const P=n.get(x[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,X,Q,0,0,X,Q,k,i.NEAREST),c===!0&&(un.length=0,un.push(i.COLOR_ATTACHMENT0+Tt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&un.push(xt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,un))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let Tt=0;Tt<x.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,St.__webglColorRenderbuffer[Tt]);const P=n.get(x[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ye(w){return Math.min(s.maxSamples,w.samples)}function Rt(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ln(w){const x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Qt(w,x){const X=w.colorSpace,Q=w.format,k=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||X!==Xa&&X!==ws&&(Ie.getTransfer(X)===nn?(Q!==Bi||k!==hi)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",X)),x}function ne(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Yt,this.resetTextureUnits=tt,this.getTextureUnits=lt,this.setTextureUnits=Gt,this.setTexture2D=wt,this.setTexture2DArray=zt,this.setTexture3D=qt,this.setTextureCube=yt,this.rebindTextures=ee,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Rt,this.dispose=q}function Ox(i,t){function e(n,s=ws){let r;const o=Ie.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===ch)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Df)return i.BYTE;if(n===If)return i.SHORT;if(n===Co)return i.UNSIGNED_SHORT;if(n===lh)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Ri)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===Ff)return i.ALPHA;if(n===Of)return i.RGB;if(n===Bi)return i.RGBA;if(n===Cs)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===uh)return i.RED;if(n===fh)return i.RED_INTEGER;if(n===Zs)return i.RG;if(n===dh)return i.RG_INTEGER;if(n===ph)return i.RGBA_INTEGER;if(n===Na||n===Ua||n===Fa||n===Oa)if(o===nn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yc||n===Ec||n===bc||n===Tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===ka||n===Lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wc||n===Ac)return o===nn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cc)return r.COMPRESSED_R11_EAC;if(n===Pc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ka)return r.COMPRESSED_RG11_EAC;if(n===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dc||n===Ic||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===zc||n===Hc||n===Gc||n===kc||n===Vc||n===Wc||n===Xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ic)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qc||n===Yc||n===Zc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qc)return o===nn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===Jc||n===Va||n===$c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zx=`
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

}`;class Hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Qf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Js({vertexShader:Bx,fragmentShader:zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gx extends Ps{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,p=null,d=null,u=null,_=null;const M=typeof XRWebGLBinding<"u",g=new Hx,f={},y=e.getContextAttributes();let A=null,E=null;const C=[],R=[],v=new mt;let b=null,V=null;const D=new ci;D.viewport=new dn;const B=new ci;B.viewport=new dn;const W=[D,B],J=new $m;let L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let wt=C[st];return wt===void 0&&(wt=new Wl,C[st]=wt),wt.getTargetRaySpace()},this.getControllerGrip=function(st){let wt=C[st];return wt===void 0&&(wt=new Wl,C[st]=wt),wt.getGripSpace()},this.getHand=function(st){let wt=C[st];return wt===void 0&&(wt=new Wl,C[st]=wt),wt.getHandSpace()};function Z(st){const wt=R.indexOf(st.inputSource);if(wt===-1)return;const zt=C[wt];zt!==void 0&&(zt.update(st.inputSource,st.frame,l||o),zt.dispatchEvent({type:st.type,data:st.inputSource}))}function z(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ft);for(let st=0;st<C.length;st++){const wt=R[st];wt!==null&&(R[st]=null,C[st].disconnect(wt))}L=null,q=null,g.reset();for(const st in f)delete f[st];if(t.setRenderTarget(A),u=null,d=null,p=null,s=null,E=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(v.width,v.height,!1),V!==null){const st=V.camera;st.fov=V.fov,st.zoom=V.zoom,st.updateProjectionMatrix(),V=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,n.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(st){l=st},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ft),y.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(v),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let zt=null,qt=null,yt=null;y.depth&&(yt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,zt=y.stencil?Rs:Cs,qt=y.stencil?Nr:Gi);const $t={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer($t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new zi(d.textureWidth,d.textureHeight,{format:Bi,type:hi,depthTexture:new Ur(d.textureWidth,d.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,zt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const zt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,zt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new zi(u.framebufferWidth,u.framebufferHeight,{format:Bi,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ft(st){for(let wt=0;wt<st.removed.length;wt++){const zt=st.removed[wt],qt=R.indexOf(zt);qt>=0&&(R[qt]=null,C[qt].disconnect(zt))}for(let wt=0;wt<st.added.length;wt++){const zt=st.added[wt];let qt=R.indexOf(zt);if(qt===-1){for(let $t=0;$t<C.length;$t++)if($t>=R.length){R.push(zt),qt=$t;break}else if(R[$t]===null){R[$t]=zt,qt=$t;break}if(qt===-1)break}const yt=C[qt];yt&&yt.connect(zt)}}function $(st,wt){wt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(wt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let wt=st.near,zt=st.far;g.texture!==null&&(g.depthNear>0&&(wt=g.depthNear),g.depthFar>0&&(zt=g.depthFar)),J.near=B.near=D.near=wt,J.far=B.far=D.far=zt,(L!==J.near||q!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),L=J.near,q=J.far),J.layers.mask=st.layers.mask|6,D.layers.mask=J.layers.mask&-5,B.layers.mask=J.layers.mask&-3;const qt=st.parent,yt=J.cameras;$(J,qt);for(let $t=0;$t<yt.length;$t++)$(yt[$t],qt);J.projectionMatrix.copy(D.projectionMatrix),J.projectionMatrixInverse.copy(D.projectionMatrixInverse),V===null&&st.isPerspectiveCamera&&(V={camera:st,fov:st.fov,zoom:st.zoom}),tt(st,J,qt)};function tt(st,wt,zt){zt===null?st.matrix.copy(wt.matrixWorld):(st.matrix.copy(zt.matrixWorld),st.matrix.invert(),st.matrix.multiply(wt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(wt.projectionMatrix),st.projectionMatrixInverse.copy(wt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Za*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(st){c=st,d!==null&&(d.fixedFoveation=st),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=st)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(J)},this.getCameraTexture=function(st){return f[st]};let lt=null;function Gt(st,wt){if(h=wt.getViewerPose(l||o),_=wt,h!==null){const zt=h.views;u!==null&&(t.setRenderTargetFramebuffer(E,u.framebuffer),t.setRenderTarget(E));let qt=!1;zt.length!==J.cameras.length&&(J.cameras.length=0,qt=!0);for(let te=0;te<zt.length;te++){const be=zt[te];let Re=null;if(u!==null)Re=u.getViewport(be);else{const At=p.getViewSubImage(d,be);Re=At.viewport,te===0&&(t.setRenderTargetTextures(E,At.colorTexture,At.depthStencilTexture),t.setRenderTarget(E))}let at=W[te];at===void 0&&(at=new ci,at.layers.enable(te),at.viewport=new dn,W[te]=at),at.matrix.fromArray(be.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(be.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Re.x,Re.y,Re.width,Re.height),te===0&&(J.matrix.copy(at.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),qt===!0&&J.cameras.push(at)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();const te=p.getDepthInformation(zt[0]);te&&te.isValid&&te.texture&&g.init(te,s.renderState)}if(yt&&yt.includes("camera-access")&&M){t.state.unbindTexture(),p=n.getBinding();for(let te=0;te<zt.length;te++){const be=zt[te].camera;if(be){let Re=f[be];Re||(Re=new Qf,f[be]=Re);const at=p.getCameraImage(be);Re.sourceTexture=at}}}}for(let zt=0;zt<C.length;zt++){const qt=R[zt],yt=C[zt];qt!==null&&yt!==void 0&&yt.update(qt,wt,l||o)}lt&&lt(st,wt),wt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:wt}),_=null}const Yt=new hd;Yt.setAnimationLoop(Gt),this.setAnimationLoop=function(st){lt=st},this.dispose=function(){}}}const kx=new Xe,Md=new xe;Md.set(-1,0,0,0,1,0,0,0,1);function Vx(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,ad(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,y,A,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),p(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&u(g,f,E)):f.isMeshMatcapMaterial?(r(g,f),_(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),M(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,y,A):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Jn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Jn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const y=t.get(f),A=y.envMap,E=y.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Md),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,y,A){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*y,g.scale.value=A*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function u(g,f,y){g.ior.value=f.ior,f.diffuseRoughness>0&&(g.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=f.diffuseRoughnessMap,e(f.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Jn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){const y=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wx(i,t,e,n){let s={},r={};function o(y,A){const E=A.program;n.uniformBlockBinding(y,E,s[y.id])}function a(y,A){let E=s[y.id];E===void 0&&(_(y),E=c(y),s[y.id]=E,y.addEventListener("dispose",g));const C=A.program;n.updateUBOMapping(y,C);const R=t.render.frame;r[y.id]!==R&&(l(y),r[y.id]=R)}function c(y){const A=i.createBuffer(),E=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,E,C),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(y){const A=s[y.id],E=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let R=0,v=E.length;R<v;R++){const b=E[R];if(Array.isArray(b))for(let V=0,D=b.length;V<D;V++)h(b[V],R,V,C);else h(b,R,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,A,E,C){if(d(y,A,E,C)===!0){const R=y.__offset,v=y.value;if(Array.isArray(v)){let b=0;for(let V=0;V<v.length;V++){const D=v[V],B=M(D,!0);p(D,y.__data,b),b+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,y.__data)}}function p(y,A,E){typeof y=="number"||typeof y=="boolean"?A[E]=y:y.isMatrix3?(A[E]=y.elements[0],A[E+1]=y.elements[1],A[E+2]=y.elements[2],A[E+3]=0,A[E+4]=y.elements[3],A[E+5]=y.elements[4],A[E+6]=y.elements[5],A[E+7]=0,A[E+8]=y.elements[6],A[E+9]=y.elements[7],A[E+10]=y.elements[8],A[E+11]=0):ArrayBuffer.isView(y)?A.set(y.subarray(0,A.length-E),E):y.toArray(A,E)}function d(y,A,E,C){const R=y.value,v=A+"_"+E;if(Array.isArray(R)){C[v]===void 0&&(C[v]=[]);const b=C[v];let V=!1;for(let D=0;D<R.length;D++)u(R[D],b,D)===!0&&(V=!0);return V}return u(R,C,v)}function u(y,A,E){if(A[E]===void 0)return typeof y=="number"||typeof y=="boolean"?A[E]=y:ArrayBuffer.isView(y)?A[E]=y.slice():A[E]=y.clone(),!0;{const C=A[E];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return A[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function _(y){const A=y.uniforms;let E=0;const C=16;for(let v=0,b=A.length;v<b;v++){const V=Array.isArray(A[v])?A[v]:[A[v]];for(let D=0,B=V.length;D<B;D++){const W=V[D],J=Array.isArray(W.value)?W.value:[W.value],L=Array.isArray(A[v])||Array.isArray(W.value);let q=E;for(let z=0,ft=J.length;z<ft;z++){const $=J[z],tt=M($,L),lt=E%C,Gt=lt%tt.boundary,Yt=lt+Gt;E+=Gt,Yt!==0&&C-Yt<tt.storage&&(E+=C-Yt),z===0&&(q=E),E+=tt.storage}const Z=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new Z((E-q)/Float32Array.BYTES_PER_ELEMENT),W.__offset=q}}const R=E%C;return R>0&&(E+=C-R),y.__size=E,y.__cache={},this}function M(y,A){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=16,E.storage=48):y.isMatrix4?(E.boundary=16,E.storage=64):y.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",y),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function g(y){const A=y.target;A.removeEventListener("dispose",g),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:f}}const Xx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function qx(){return Ni===null&&(Ni=new Yf(Xx,16,16,Zs,ki),Ni.name="DFG_LUT",Ni.minFilter=ei,Ni.magFilter=ei,Ni.wrapS=rs,Ni.wrapT=rs,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class Yx{constructor(t={}){const{canvas:e=yp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:u=hi}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const M=u,g=new Set([ph,dh,fh]),f=new Set([hi,Gi,Co,Nr,ch,hh]),y=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let C=null,R=null;const v=[],b=[];let V=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=as,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let B=!1,W=null,J=null,L=null,q=null;this._outputColorSpace=ti;let Z=0,z=0,ft=null,$=-1,tt=null;const lt=new dn,Gt=new dn;let Yt=null;const st=new ce(0);let wt=0,zt=e.width,qt=e.height,yt=1,$t=null,qe=null;const te=new dn(0,0,zt,qt),be=new dn(0,0,zt,qt);let Re=!1;const at=new Lo,At=new vh;let Et=!1,Ft=!1;const Dt=new Xe,he=new I,Vt=new dn,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function jt(){return ft===null?yt:1}let U=n;function un(S,O){return e.getContext(S,O)}let _e,Ye,Rt,ln,Qt,ne,w,x,X,Q,k,xt,St,it,ot,Tt,P,rt,et,gt,ht,_t,Wt;try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rh}`),e.addEventListener("webglcontextlost",Zt,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),U===null){const O="webgl2";if(U=un(O,S),U===null)throw un(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ve()}catch(S){throw e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Ge("WebGLRenderer: "+S.message),S}function ve(){_e=new J_(U),_e.init(),ht=new Ox(U,_e),Ye=new z_(U,_e,t,ht),Rt=new Ux(U,_e),Ye.reversedDepthBuffer&&d&&Rt.buffers.depth.setReversed(!0),J=U.createFramebuffer(),L=U.createFramebuffer(),q=U.createFramebuffer(),ln=new j_(U),Qt=new Sx,ne=new Fx(U,_e,Rt,Qt,Ye,ht,ln),w=new K_(D),x=new e0(U),_t=new O_(U,x),X=new $_(U,x,ln,_t),Q=new ev(U,X,x,_t,ln),rt=new tv(U,Ye,ne),ot=new H_(Qt),k=new Mx(D,w,_e,Ye,_t,ot),xt=new Vx(D,Qt),St=new Ex,it=new Cx(_e),P=new F_(D,w,Rt,Q,_,c),Tt=new Nx(D,Q,Ye),Wt=new Wx(U,ln,Ye,Rt),et=new B_(U,_e,ln),gt=new Q_(U,_e,ln),ln.programs=k.programs,D.capabilities=Ye,D.extensions=_e,D.properties=Qt,D.renderLists=St,D.shadowMap=Tt,D.state=Rt,D.info=ln}M!==hi&&(V=new iv(M,e.width,e.height,a,s,r));const dt=new Gx(D,U);this.xr=dt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=_e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=_e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(S){S!==void 0&&(yt=S,this.setSize(zt,qt,!1))},this.getSize=function(S){return S.set(zt,qt)},this.setSize=function(S,O,K=!0){if(dt.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}zt=S,qt=O,e.width=Math.floor(S*yt),e.height=Math.floor(O*yt),K===!0&&(e.style.width=S+"px",e.style.height=O+"px"),V!==null&&V.setSize(e.width,e.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(zt*yt,qt*yt).floor()},this.setDrawingBufferSize=function(S,O,K){zt=S,qt=O,yt=K,e.width=Math.floor(S*K),e.height=Math.floor(O*K),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(M===hi){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(lt)},this.getViewport=function(S){return S.copy(te)},this.setViewport=function(S,O,K,H){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,O,K,H),Rt.viewport(lt.copy(te).multiplyScalar(jt()).round())},this.getScissor=function(S){return S.copy(be)},this.setScissor=function(S,O,K,H){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,O,K,H),Rt.scissor(Gt.copy(be).multiplyScalar(jt()).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(S){Rt.setScissorTest(Re=S)},this.setOpaqueSort=function(S){$t=S},this.setTransparentSort=function(S){qe=S},this.getClearColor=function(S){return S.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,K=!0){let H=0;if(S){let G=!1;if(ft!==null){const vt=ft.texture.format;G=g.has(vt)}if(G){const vt=ft.texture.type,Ht=f.has(vt),Pt=P.getClearColor(),It=P.getClearAlpha(),Xt=Pt.r,ie=Pt.g,Ce=Pt.b;Ht?(y[0]=Xt,y[1]=ie,y[2]=Ce,y[3]=It,U.clearBufferuiv(U.COLOR,0,y)):(A[0]=Xt,A[1]=ie,A[2]=Ce,A[3]=It,U.clearBufferiv(U.COLOR,0,A))}else H|=U.COLOR_BUFFER_BIT}O&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),W=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),P.dispose(),St.dispose(),it.dispose(),ne.dispose(),Qt.dispose(),w.dispose(),Q.dispose(),X.dispose(),_t.dispose(),Wt.dispose(),k.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Gr),dt.removeEventListener("sessionend",kr),ui.stop()};function Zt(S){S.preventDefault(),uu("WebGLRenderer: Context Lost."),B=!0}function de(){uu("WebGLRenderer: Context Restored."),B=!1;const S=ln.autoReset,O=Tt.enabled,K=Tt.autoUpdate,H=Tt.needsUpdate,G=Tt.type;ve(),ln.autoReset=S,Tt.enabled=O,Tt.autoUpdate=K,Tt.needsUpdate=H,Tt.type=G}function Mt(S){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pe(S){const O=S.target;O.removeEventListener("dispose",pe),mn(O)}function mn(S){ni(S),Qt.remove(S)}function ni(S){const O=Qt.get(S).programs;O!==void 0&&(O.forEach(function(K){k.releaseProgram(K)}),S.isShaderMaterial&&k.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,K,H,G,vt){O===null&&(O=Me);const Ht=G.isMesh&&G.matrixWorld.determinantAffine()<0,Pt=Go(S,O,K,H,G);Rt.setMaterial(H,Ht);let It=K.index,Xt=1;if(H.wireframe===!0){if(It=X.getWireframeAttribute(K),It===void 0)return;Xt=2}const ie=K.drawRange,Ce=K.attributes.position;let Ot=ie.start*Xt,Te=(ie.start+ie.count)*Xt;vt!==null&&(Ot=Math.max(Ot,vt.start*Xt),Te=Math.min(Te,(vt.start+vt.count)*Xt)),It!==null?(Ot=Math.max(Ot,0),Te=Math.min(Te,It.count)):Ce!=null&&(Ot=Math.max(Ot,0),Te=Math.min(Te,Ce.count));const rn=Te-Ot;if(rn<0||rn===1/0)return;_t.setup(G,H,Pt,K,It);let ke,Je=et;if(It!==null&&(ke=x.get(It),Je=gt,Je.setIndex(ke)),G.isMesh)H.wireframe===!0?(Rt.setLineWidth(H.wireframeLinewidth*jt()),Je.setMode(U.LINES)):Je.setMode(U.TRIANGLES);else if(G.isLine){let bn=H.linewidth;bn===void 0&&(bn=1),Rt.setLineWidth(bn*jt()),G.isLineSegments?Je.setMode(U.LINES):G.isLineLoop?Je.setMode(U.LINE_LOOP):Je.setMode(U.LINE_STRIP)}else G.isPoints?Je.setMode(U.POINTS):G.isSprite&&Je.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))Je.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const bn=G._multiDrawStarts,Bt=G._multiDrawCounts,Pn=G._multiDrawCount,Ne=It?x.get(It).bytesPerElement:1,fs=Qt.get(H).currentProgram.getUniforms();for(let Ln=0;Ln<Pn;Ln++)fs.setValue(U,"_gl_DrawID",Ln),Je.render(bn[Ln]/Ne,Bt[Ln])}else if(G.isInstancedMesh)Je.renderInstances(Ot,rn,G.count);else if(K.isInstancedBufferGeometry){const bn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Bt=Math.min(K.instanceCount,bn);Je.renderInstances(Ot,rn,Bt)}else Je.render(Ot,rn)};function Hr(S,O,K,H){W!==null&&S.isNodeMaterial&&W.setObject(H,S),Et===!0&&ot.setState(S,K,!1),S.transparent===!0&&S.side===zn&&S.forceSinglePass===!1?(S.side=Jn,S.needsUpdate=!0,Ls(S,O,H),S.side=Ys,S.needsUpdate=!0,Ls(S,O,H),S.side=zn):Ls(S,O,H)}this.compile=function(S,O,K=null){K===null&&(K=S),W!==null&&W.renderStart(S,O,K),R=it.get(K),R.init(O),b.push(R),K.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(R.pushLight(G),G.castShadow&&R.pushShadow(G))}),S!==K&&S.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(R.pushLight(G),G.castShadow&&R.pushShadow(G))}),R.setupLights(),W!==null&&W.updateLights(R.state.lightsArray),Ft=this.localClippingEnabled,Et=ot.init(this.clippingPlanes,Ft),Et===!0&&ot.setGlobalState(this.clippingPlanes,O),W!==null&&Tt.render(R.state.shadowsArray,K,O);const H=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const vt=G.material;if(vt)if(Array.isArray(vt))for(let Ht=0;Ht<vt.length;Ht++){const Pt=vt[Ht];Hr(Pt,K,O,G),H.add(Pt)}else Hr(vt,K,O,G),H.add(vt)}),R=b.pop(),W!==null&&W.renderEnd(),H},this.compileAsync=function(S,O,K=null){const H=this.compile(S,O,K);return new Promise(G=>{function vt(){if(H.forEach(function(Ht){const It=Qt.get(Ht).currentProgram;(It===void 0||It.isReady())&&H.delete(Ht)}),H.size===0){G(S);return}setTimeout(vt,10)}_e.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let js=null;function sn(S){js&&js(S)}function Gr(){ui.stop()}function kr(){ui.start()}const ui=new hd;ui.setAnimationLoop(sn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(S){js=S,dt.setAnimationLoop(S),S===null?ui.stop():ui.start()},dt.addEventListener("sessionstart",Gr),dt.addEventListener("sessionend",kr),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;W!==null&&W.renderStart(S,O);const K=dt.enabled===!0&&dt.isPresenting===!0,H=V!==null&&(ft===null||K)&&V.begin(D,ft);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(O),O=dt.getCamera()),S.isScene===!0&&S.onBeforeRender(D,S,O,ft),R=it.get(S,b.length),R.init(O),R.state.textureUnits=ne.getTextureUnits(),b.push(R),Dt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?At.setFromArrayCamera(O):at.setFromProjectionMatrix(Dt,Ci,O.reversedDepth),Ft=this.localClippingEnabled,Et=ot.init(this.clippingPlanes,Ft),C=St.get(S,v.length),C.init(),v.push(C),this.info.render.frame++,dt.enabled===!0&&dt.isPresenting===!0){const Ht=D.xr.getDepthSensingMesh();Ht!==null&&fi(Ht,O,-1/0,D.sortObjects)}fi(S,O,0,D.sortObjects),C.finish(),W!==null&&W.updateLights(R.state.lightsArray),D.sortObjects===!0&&C.sort($t,qe),ee=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,ee&&P.addToRenderList(C,S),this.info.autoReset===!0&&this.info.reset(),Et===!0&&ot.beginShadows();const G=R.state.shadowsArray;if(Tt.render(G,S,O),Et===!0&&ot.endShadows(),(H&&V.hasRenderPass())===!1){const Ht=C.opaque,Pt=C.transmissive;if(R.setupLights(),O.isArrayCamera){const It=O.cameras;if(Pt.length>0)for(let Xt=0,ie=It.length;Xt<ie;Xt++){const Ce=It[Xt];Vr(Ht,Pt,S,Ce)}ee&&P.render(S);for(let Xt=0,ie=It.length;Xt<ie;Xt++){const Ce=It[Xt];Pi(C,S,Ce,Ce.viewport)}}else Pt.length>0&&Vr(Ht,Pt,S,O),ee&&P.render(S),Pi(C,S,O)}ft!==null&&z===0&&(ne.updateMultisampleRenderTarget(ft),ne.updateRenderTargetMipmap(ft)),H&&V.end(D),S.isScene===!0&&S.onAfterRender(D,S,O),_t.resetDefaultState(),$=-1,tt=null,b.pop(),b.length>0?(R=b[b.length-1],ne.setTextureUnits(R.state.textureUnits),Et===!0&&ot.setGlobalState(D.clippingPlanes,R.state.camera)):R=null,v.pop(),v.length>0?C=v[v.length-1]:C=null,W!==null&&W.renderEnd()};function fi(S,O,K,H){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)R.pushLight(S),S.castShadow&&R.pushShadow(S);else if(S.isSprite){const Ht=O.isArrayCamera?At:at;if(!S.frustumCulled||S.intersectsFrustum(Ht)){H&&Vt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Dt);const Pt=Q.update(S),It=S.material;It.visible&&C.push(S,Pt,It,K,Vt.z,null,O)}}else if(S.isMesh||S.isLine||S.isPoints){const Ht=O.isArrayCamera?At:at;if(!S.frustumCulled||S.intersectsFrustum(Ht)){const Pt=Q.update(S),It=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Vt.copy(S.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Vt.copy(Pt.boundingSphere.center)),Vt.applyMatrix4(S.matrixWorld).applyMatrix4(Dt)),Array.isArray(It)){const Xt=Pt.groups;for(let ie=0,Ce=Xt.length;ie<Ce;ie++){const Ot=Xt[ie],Te=It[Ot.materialIndex];Te&&Te.visible&&C.push(S,Pt,Te,K,Vt.z,Ot,O)}}else It.visible&&C.push(S,Pt,It,K,Vt.z,null,O)}}}const vt=S.children;for(let Ht=0,Pt=vt.length;Ht<Pt;Ht++)fi(vt[Ht],O,K,H)}function Pi(S,O,K,H){const{opaque:G,transmissive:vt,transparent:Ht}=S;R.setupLightsView(K),Et===!0&&ot.setGlobalState(D.clippingPlanes,K),H&&Rt.viewport(lt.copy(H)),G.length>0&&hs(G,O,K),vt.length>0&&hs(vt,O,K),Ht.length>0&&hs(Ht,O,K),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Vr(S,O,K,H){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[H.id]===void 0){const Ot=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[H.id]=new zi(1,1,{generateMipmaps:!0,type:Ot?ki:hi,minFilter:As,samples:Math.max(4,Ye.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ie.workingColorSpace})}const vt=R.state.transmissionRenderTarget[H.id],Ht=H.viewport||lt;vt.setSize(Ht.z*D.transmissionResolutionScale,Ht.w*D.transmissionResolutionScale);const Pt=D.getRenderTarget(),It=D.getActiveCubeFace(),Xt=D.getActiveMipmapLevel();D.setRenderTarget(vt),D.getClearColor(st),wt=D.getClearAlpha(),wt<1&&D.setClearColor(16777215,.5),D.clear(),ee&&P.render(K);const ie=D.toneMapping;D.toneMapping=as;const Ce=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),R.setupLightsView(H),Et===!0&&ot.setGlobalState(D.clippingPlanes,H),hs(S,K,H),ne.updateMultisampleRenderTarget(vt),ne.updateRenderTargetMipmap(vt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Te=0,rn=O.length;Te<rn;Te++){const ke=O[Te],{object:Je,geometry:bn,material:Bt,group:Pn}=ke;if(Bt.side===zn&&Je.layers.test(H.layers)){const Ne=Bt.side;Bt.side=Jn,Bt.needsUpdate=!0,Wr(Je,K,H,bn,Bt,Pn),Bt.side=Ne,Bt.needsUpdate=!0,Ot=!0}}Ot===!0&&(ne.updateMultisampleRenderTarget(vt),ne.updateRenderTargetMipmap(vt))}D.setRenderTarget(Pt,It,Xt),D.setClearColor(st,wt),Ce!==void 0&&(H.viewport=Ce),D.toneMapping=ie}function hs(S,O,K){const H=O.isScene===!0?O.overrideMaterial:null;for(let G=0,vt=S.length;G<vt;G++){const Ht=S[G],{object:Pt,geometry:It,group:Xt}=Ht;let ie=Ht.material;ie.allowOverride===!0&&H!==null&&(ie=H),Pt.layers.test(K.layers)&&Wr(Pt,O,K,It,ie,Xt)}}function Wr(S,O,K,H,G,vt){W!==null&&G.isNodeMaterial&&W.setObject(S,G),S.onBeforeRender(D,O,K,H,G,vt),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(D,O,K,H,S,vt),G.transparent===!0&&G.side===zn&&G.forceSinglePass===!1?(G.side=Jn,G.needsUpdate=!0,D.renderBufferDirect(K,O,H,G,S,vt),G.side=Ys,G.needsUpdate=!0,D.renderBufferDirect(K,O,H,G,S,vt),G.side=zn):D.renderBufferDirect(K,O,H,G,S,vt),S.onAfterRender(D,O,K,H,G,vt)}function Xr(S){let O=0;for(const K of S)K.texture!==null&&O++;return O}function Ls(S,O,K){O.isScene!==!0&&(O=Me);const H=Qt.get(S),G=R.state.lights,vt=R.state.shadowsArray,Ht=G.state.version,Pt=k.getParameters(S,G.state,vt,O,K,R.state.lightProbeGridArray),It=k.getProgramCacheKey(Pt);let Xt=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const ie=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=w.get(S.envMap||H.environment,ie),H.envMapRotation=H.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Xt===void 0&&(S.addEventListener("dispose",pe),Xt=new Map,H.programs=Xt,H.programVariants=new Map);let Ce=Xt.get(It);if(Ce!==void 0){if(H.currentProgram===Ce&&H.lightsStateVersion===Ht)return qi(S,Pt),Ce}else Pt.uniforms=k.getUniforms(S),W!==null&&S.isNodeMaterial&&W.build(S,K,Pt),S.onBeforeCompile(Pt,D),Ce=k.acquireProgram(Pt,It),Xt.set(It,Ce),H.uniforms=Pt.uniforms;const Ot=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ot.clippingPlanes=ot.uniform),qi(S,Pt),H.needsLights=Yi(S),H.lightsStateVersion=Ht,H.needsLights&&(Ot.ambientLightColor.value=G.state.ambient,Ot.lightProbe.value=G.state.probe,Ot.sunLights.value=G.state.sun,Ot.sunLightShadows.value=G.state.sunShadow,Ot.directionalLights.value=G.state.directional,Ot.directionalLightShadows.value=G.state.directionalShadow,Ot.spotLights.value=G.state.spot,Ot.spotLightShadows.value=G.state.spotShadow,Ot.rectAreaLights.value=G.state.rectArea,Ot.ltc_1.value=G.state.rectAreaLTC1,Ot.ltc_2.value=G.state.rectAreaLTC2,Ot.pointLights.value=G.state.point,Ot.pointLightShadows.value=G.state.pointShadow,Ot.hemisphereLights.value=G.state.hemi,Ot.sunShadowMatrix.value=G.state.sunShadowMatrix,Ot.sunShadowCascade.value=G.state.sunShadowCascade,Ot.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ot.spotLightMatrix.value=G.state.spotLightMatrix,Ot.spotLightMap.value=G.state.spotLightMap,Ot.pointShadowMatrix.value=G.state.pointShadowMatrix),H.numLightProbeGrids=Xr(R.state.lightProbeGridArray),H.currentProgram=Ce,H.uniformsList=null,Ce}function di(S,O,K,H,G){const vt=Qt.get(S),Ht=vt.currentProgram.id+","+H+","+G;let Pt=vt.programVariants.get(Ht);return Pt===void 0?(Pt=Ls(S,O,K),vt.programVariants.set(Ht,Pt)):(vt.currentProgram=Pt,vt.uniformsList=null,vt.outputColorSpace=H,vt.toneMapping=G),Pt}function pi(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=Ha.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function qi(S,O){const K=Qt.get(S);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Go(S,O,K,H,G){O.isScene!==!0&&(O=Me),ne.resetTextureUnits();const vt=O.fog,Ht=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,Pt=ft===null?D.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Ie.workingColorSpace,It=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Xt=w.get(H.envMap||Ht,It),ie=H.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ce=!!K.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ot=!!K.morphAttributes.position,Te=!!K.morphAttributes.normal,rn=!!K.morphAttributes.color;let ke=as;H.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ke=D.toneMapping);const Je=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,bn=Je!==void 0?Je.length:0,Bt=Qt.get(H),Pn=R.state.lights;if(Et===!0&&(Ft===!0||S!==tt)){const en=S===tt&&H.id===$;ot.setState(H,S,en)}let Ne=!1,fs=!1;H.version===Bt.__version?Bt.needsLights&&Bt.lightsStateVersion!==Pn.state.version||G.isBatchedMesh&&Bt.batching===!1||!G.isBatchedMesh&&Bt.batching===!0||G.isBatchedMesh&&Bt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Bt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Bt.instancing===!1||!G.isInstancedMesh&&Bt.instancing===!0||G.isSkinnedMesh&&Bt.skinning===!1||!G.isSkinnedMesh&&Bt.skinning===!0||G.isInstancedMesh&&Bt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Bt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Bt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Bt.instancingMorph===!1&&G.morphTexture!==null||Bt.envMap!==Xt||H.fog===!0&&Bt.fog!==vt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ot.numPlanes||Bt.numIntersection!==ot.numIntersection)||Bt.vertexAlphas!==ie||Bt.vertexTangents!==Ce||Bt.morphTargets!==Ot||Bt.morphNormals!==Te||Bt.morphColors!==rn||Bt.morphTargetsCount!==bn||Bt.numLightProbeGrids!==Xr(R.state.lightProbeGridArray)?Ne=!0:(Bt.outputColorSpace!==Pt||Bt.toneMapping!==ke)&&(fs=!0):(Ne=!0,Bt.__version=H.version);let Ln=Bt.currentProgram;(Ne===!0||fs===!0)&&(Ln=fs===!0?di(H,O,G,Pt,ke):Ls(H,O,G),W&&H.isNodeMaterial&&W.onUpdateProgram(H,Ln,Bt));let tr=!1,mi=!1,on=!1;const ye=Ln.getUniforms(),gn=Bt.uniforms;if(Rt.useProgram(Ln.program)&&(tr=!0,mi=!0,on=!0),H.id!==$&&($=H.id,mi=!0),tr||tt!==S){Rt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ye.setValue(U,"projectionMatrix",S.projectionMatrix),ye.setValue(U,"viewMatrix",S.matrixWorldInverse);const xn=ye.map.cameraPosition;xn!==void 0&&xn.setValue(U,he.setFromMatrixPosition(S.matrixWorld)),Ye.logarithmicDepthBuffer&&ye.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ye.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),tt!==S&&(tt=S,mi=!0,on=!0)}if(Bt.needsLights&&(Pn.state.sunShadowMap.length>0&&ye.setValue(U,"sunShadowMap",Pn.state.sunShadowMap,ne),Pn.state.directionalShadowMap.length>0&&ye.setValue(U,"directionalShadowMap",Pn.state.directionalShadowMap,ne),Pn.state.spotShadowMap.length>0&&ye.setValue(U,"spotShadowMap",Pn.state.spotShadowMap,ne),Pn.state.pointShadowMap.length>0&&ye.setValue(U,"pointShadowMap",Pn.state.pointShadowMap,ne)),G.isSkinnedMesh){ye.setOptional(U,G,"bindMatrix"),ye.setOptional(U,G,"bindMatrixInverse");const en=G.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ye.setValue(U,"boneTexture",en.boneTexture,ne))}G.isBatchedMesh&&(ye.setOptional(U,G,"batchingTexture"),ye.setValue(U,"batchingTexture",G._matricesTexture,ne),ye.setOptional(U,G,"batchingIdTexture"),ye.setValue(U,"batchingIdTexture",G._indirectTexture,ne),ye.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&ye.setValue(U,"batchingColorTexture",G._colorsTexture,ne));const Mn=K.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&rt.update(G,K,Ln),(mi||Bt.receiveShadow!==G.receiveShadow)&&(Bt.receiveShadow=G.receiveShadow,ye.setValue(U,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(gn.envMapIntensity.value=O.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=qx()),mi){if(ye.setValue(U,"toneMappingExposure",D.toneMappingExposure),Bt.needsLights&&ko(gn,on),vt&&H.fog===!0&&xt.refreshFogUniforms(gn,vt),xt.refreshMaterialUniforms(gn,H,yt,qt,R.state.transmissionRenderTarget[S.id]),Bt.needsLights&&Bt.numLightProbeGrids>0){const en=E;let xn=0;for(const Dn of R.state.lightProbeGridArray)Dn.texture!==null&&(en.textures[xn]=Dn.texture,en.min[xn]=Dn.boundingBox.min,en.max[xn]=Dn.boundingBox.max,en.resolution[xn]=Dn.resolution,xn++);for(const Dn in en)en[Dn].length=xn;gn.probesSH.value=en.textures,gn.probesMin.value=en.min,gn.probesMax.value=en.max,gn.probesResolution.value=en.resolution}Ha.upload(U,pi(Bt),gn,ne)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ha.upload(U,pi(Bt),gn,ne),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ye.setValue(U,"center",G.center),ye.setValue(U,"modelViewMatrix",G.modelViewMatrix),ye.setValue(U,"normalMatrix",G.normalMatrix),ye.setValue(U,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const en=H.uniformsGroups;for(let xn=0,Dn=en.length;xn<Dn;xn++){const Ds=en[xn];Wt.update(Ds,Ln),Wt.bind(Ds,Ln)}}return Ln}function ko(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.sunLights.needsUpdate=O,S.sunLightShadows.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Yi(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(S,O,K){const H=Qt.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Qt.get(S.texture).__webglTexture=O,Qt.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:K,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){const K=Qt.get(S);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,K=0){ft=S,Z=O,z=K;let H=null,G=!1,vt=!1;if(S){const Pt=Qt.get(S);if(Pt.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(U.FRAMEBUFFER,Pt.__webglFramebuffer),lt.copy(S.viewport),Gt.copy(S.scissor),Yt=S.scissorTest,Rt.viewport(lt),Rt.scissor(Gt),Rt.setScissorTest(Yt),$=-1;return}else if(Pt.__webglFramebuffer===void 0)ne.setupRenderTarget(S);else if(Pt.__hasExternalTextures)ne.rebindTextures(S,Qt.get(S.texture).__webglTexture,Qt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ie=S.depthTexture;if(Pt.__boundDepthTexture!==ie){if(ie!==null&&Qt.has(ie)&&(S.width!==ie.image.width||S.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(S)}}const It=S.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(vt=!0);const Xt=Qt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Xt[O])?H=Xt[O][K]:H=Xt[O],G=!0):S.samples>0&&ne.useMultisampledRTT(S)===!1?H=Qt.get(S).__webglMultisampledFramebuffer:Array.isArray(Xt)?H=Xt[K]:H=Xt,lt.copy(S.viewport),Gt.copy(S.scissor),Yt=S.scissorTest}else lt.copy(te).multiplyScalar(yt).floor(),Gt.copy(be).multiplyScalar(yt).floor(),Yt=Re;if(K!==0&&(H=J),Rt.bindFramebuffer(U.FRAMEBUFFER,H)&&Rt.drawBuffers(S,H),Rt.viewport(lt),Rt.scissor(Gt),Rt.setScissorTest(Yt),G){const Pt=Qt.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pt.__webglTexture,K)}else if(vt){const Pt=O;for(let It=0;It<S.textures.length;It++){const Xt=Qt.get(S.textures[It]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+It,Xt.__webglTexture,K,Pt)}}else if(S!==null&&K!==0){const Pt=Qt.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,K)}$=-1};function us(S){const O=Qt.get(S);return(O.__readFormat!==S.format||O.__readType!==S.type)&&(O.__readFormat=S.format,O.__readType=S.type,O.__formatReadable=Ye.textureFormatReadable(S.format),O.__typeReadable=Ye.textureTypeReadable(S.type)),O}this.readRenderTargetPixels=function(S,O,K,H,G,vt,Ht,Pt=0){if(!(S&&S.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Qt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ht!==void 0&&(It=It[Ht],Array.isArray(It)&&(It=It[0])),It){Rt.bindFramebuffer(U.FRAMEBUFFER,It);try{const Xt=S.textures[Pt],ie=Xt.format,Ce=Xt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pt);const Ot=us(Xt);if(Ot.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-H&&K>=0&&K<=S.height-G&&U.readPixels(O,K,H,G,ht.convert(ie),ht.convert(Ce),vt)}finally{const Xt=ft!==null?Qt.get(ft).__webglFramebuffer:null;Rt.bindFramebuffer(U.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(S,O,K,H,G,vt,Ht,Pt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Qt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ht!==void 0&&(It=It[Ht],Array.isArray(It)&&(It=It[0])),It)if(O>=0&&O<=S.width-H&&K>=0&&K<=S.height-G){Rt.bindFramebuffer(U.FRAMEBUFFER,It);const Xt=S.textures[Pt],ie=Xt.format,Ce=Xt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pt);const Ot=us(Xt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.bufferData(U.PIXEL_PACK_BUFFER,vt.byteLength,U.STREAM_READ),U.readPixels(O,K,H,G,ht.convert(ie),ht.convert(Ce),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const rn=ft!==null?Qt.get(ft).__webglFramebuffer:null;Rt.bindFramebuffer(U.FRAMEBUFFER,rn);const ke=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ep(U,ke,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,vt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Te),U.deleteSync(ke),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,K=0){const H=Math.pow(2,-K),G=Math.floor(S.image.width*H),vt=Math.floor(S.image.height*H),Ht=O!==null?O.x:0,Pt=O!==null?O.y:0;ne.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Ht,Pt,G,vt),Rt.unbindTexture()},this.copyTextureToTexture=function(S,O,K=null,H=null,G=0,vt=0){let Ht,Pt,It,Xt,ie,Ce,Ot,Te,rn;const ke=S.isCompressedTexture?S.mipmaps[vt]:S.image;if(K!==null)Ht=K.max.x-K.min.x,Pt=K.max.y-K.min.y,It=K.isBox3?K.max.z-K.min.z:1,Xt=K.min.x,ie=K.min.y,Ce=K.isBox3?K.min.z:0;else{const ye=Math.pow(2,-G);Ht=Math.floor(ke.width*ye),Pt=Math.floor(ke.height*ye),S.isDataArrayTexture?It=ke.depth:S.isData3DTexture?It=Math.floor(ke.depth*ye):It=1,Xt=0,ie=0,Ce=0}H!==null?(Ot=H.x,Te=H.y,rn=H.z):(Ot=0,Te=0,rn=0);const Je=ht.convert(O.format),bn=ht.convert(O.type);let Bt;O.isData3DTexture?(ne.setTexture3D(O,0),Bt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ne.setTexture2DArray(O,0),Bt=U.TEXTURE_2D_ARRAY):(ne.setTexture2D(O,0),Bt=U.TEXTURE_2D),Rt.activeTexture(U.TEXTURE0),Rt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),Rt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Rt.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Pn=Rt.getParameter(U.UNPACK_ROW_LENGTH),Ne=Rt.getParameter(U.UNPACK_IMAGE_HEIGHT),fs=Rt.getParameter(U.UNPACK_SKIP_PIXELS),Ln=Rt.getParameter(U.UNPACK_SKIP_ROWS),tr=Rt.getParameter(U.UNPACK_SKIP_IMAGES);Rt.pixelStorei(U.UNPACK_ROW_LENGTH,ke.width),Rt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ke.height),Rt.pixelStorei(U.UNPACK_SKIP_PIXELS,Xt),Rt.pixelStorei(U.UNPACK_SKIP_ROWS,ie),Rt.pixelStorei(U.UNPACK_SKIP_IMAGES,Ce);const mi=S.isDataArrayTexture||S.isData3DTexture,on=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const ye=Qt.get(S),gn=Qt.get(O),Mn=Qt.get(ye.__renderTarget),en=Qt.get(gn.__renderTarget);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,en.__webglFramebuffer);for(let xn=0;xn<It;xn++)mi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qt.get(S).__webglTexture,G,Ce+xn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qt.get(O).__webglTexture,vt,rn+xn)),U.blitFramebuffer(Xt,ie,Xt+Ht,ie+Pt,Ot,Te,Ot+Ht,Te+Pt,U.DEPTH_BUFFER_BIT,U.NEAREST);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||Qt.has(S)){const ye=Qt.get(S),gn=Qt.get(O);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,L),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,q);for(let Mn=0;Mn<It;Mn++)mi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ye.__webglTexture,G,Ce+Mn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ye.__webglTexture,G),on?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,gn.__webglTexture,vt,rn+Mn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gn.__webglTexture,vt),G!==0?U.blitFramebuffer(Xt,ie,Xt+Ht,ie+Pt,Ot,Te,Ot+Ht,Te+Pt,U.COLOR_BUFFER_BIT,U.NEAREST):on?U.copyTexSubImage3D(Bt,vt,Ot,Te,rn+Mn,Xt,ie,Ht,Pt):U.copyTexSubImage2D(Bt,vt,Ot,Te,Xt,ie,Ht,Pt);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else on?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Bt,vt,Ot,Te,rn,Ht,Pt,It,Je,bn,ke.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Bt,vt,Ot,Te,rn,Ht,Pt,It,Je,ke.data):U.texSubImage3D(Bt,vt,Ot,Te,rn,Ht,Pt,It,Je,bn,ke):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,vt,Ot,Te,Ht,Pt,Je,bn,ke.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,vt,Ot,Te,ke.width,ke.height,Je,ke.data):U.texSubImage2D(U.TEXTURE_2D,vt,Ot,Te,Ht,Pt,Je,bn,ke);Rt.pixelStorei(U.UNPACK_ROW_LENGTH,Pn),Rt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ne),Rt.pixelStorei(U.UNPACK_SKIP_PIXELS,fs),Rt.pixelStorei(U.UNPACK_SKIP_ROWS,Ln),Rt.pixelStorei(U.UNPACK_SKIP_IMAGES,tr),vt===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&U.generateMipmap(Bt),Rt.unbindTexture()},this.initRenderTarget=function(S){Qt.get(S).__webglFramebuffer===void 0&&ne.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ne.setTextureCube(S,0):S.isData3DTexture?ne.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ne.setTexture2DArray(S,0):ne.setTexture2D(S,0),Rt.unbindTexture()},this.resetState=function(){Z=0,z=0,ft=null,Rt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}}class Zx extends Wf{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new He;t.deleteAttribute("uv");const e=new Uo({side:Jn}),n=new Uo,s=new Ar(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ut(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new $p(t,n,6),a=new vn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new ut(t,Tr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new ut(t,Tr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new ut(t,Tr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const p=new ut(t,Tr(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const d=new ut(t,Tr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const u=new ut(t,Tr(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Tr(i){return new Vm({color:0,emissive:16777215,emissiveIntensity:i})}const Sf={type:"change"},bh={type:"start"},Sd={type:"end"},Ia=new Oo,yf=new ss,Kx=Math.cos(70*Cp.DEG2RAD),wn=new I,jn=2*Math.PI,Ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fc=1e-6;class Jx extends jm{constructor(t,e=null){super(t,e),this.state=Ke.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cr.ROTATE,MIDDLE:Cr.DOLLY,RIGHT:Cr.PAN},this.touches={ONE:Rr.ROTATE,TWO:Rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Vi,this._lastTargetPosition=new I,this._quat=new Vi().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $u,this._sphericalDelta=new $u,this._scale=1,this._panOffset=new I,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new I,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qx.bind(this),this._onPointerDown=$x.bind(this),this._onPointerUp=jx.bind(this),this._onContextMenu=oM.bind(this),this._onMouseWheel=nM.bind(this),this._onKeyDown=iM.bind(this),this._onTouchStart=sM.bind(this),this._onTouchMove=rM.bind(this),this._onMouseDown=tM.bind(this),this._onMouseMove=eM.bind(this),this._interceptControlDown=aM.bind(this),this._interceptControlUp=lM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ke.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sf),this.update(),this.state=Ke.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;wn.copy(e).sub(this.target),wn.applyQuaternion(this._quat),this._spherical.setFromVector3(wn),this.autoRotate&&this.state===Ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=jn:n>Math.PI&&(n-=jn),s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(wn.setFromSpherical(this._spherical),wn.applyQuaternion(this._quatInverse),e.copy(this.target).add(wn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=wn.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=wn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ia.origin.copy(this.object.position),Ia.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ia.direction))<Kx?this.object.lookAt(this.target):(yf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ia.intersectPlane(yf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fc||this._lastTargetPosition.distanceToSquared(this.target)>fc?(this.dispatchEvent(Sf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?jn/60*this.autoRotateSpeed*t:jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){wn.setFromMatrixColumn(e,0),wn.multiplyScalar(-t),this._panOffset.add(wn)}_panUp(t,e){this.screenSpacePanning===!0?wn.setFromMatrixColumn(e,1):(wn.setFromMatrixColumn(e,0),wn.crossVectors(this.object.up,wn)),wn.multiplyScalar(t),this._panOffset.add(wn)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;wn.copy(s).sub(this.target);let r=wn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/e.clientHeight),this._rotateUp(jn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/e.clientHeight),this._rotateUp(jn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $x(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Qx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function jx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sd),this.state=Ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function tM(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Cr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ke.DOLLY;break;case Cr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ke.ROTATE}break;case Cr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ke.PAN}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(bh)}function eM(i){switch(this.state){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function nM(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ke.NONE||(i.preventDefault(),this.dispatchEvent(bh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Sd))}function iM(i){this.enabled!==!1&&this._handleKeyDown(i)}function sM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Rr.ROTATE:if(this.enableRotate===!1){this.state=Ke.NONE;break}this._handleTouchStartRotate(i),this.state=Ke.TOUCH_ROTATE;break;case Rr.PAN:if(this.enablePan===!1){this.state=Ke.NONE;break}this._handleTouchStartPan(i),this.state=Ke.TOUCH_PAN;break;default:this.state=Ke.NONE}break;case 2:switch(this.touches.TWO){case Rr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ke.TOUCH_DOLLY_PAN;break;case Rr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ke.TOUCH_DOLLY_ROTATE;break;default:this.state=Ke.NONE}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(bh)}function rM(i){switch(this._trackPointer(i),this.state){case Ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ke.NONE}}function oM(i){this.enabled!==!1&&i.preventDefault()}function aM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const po=new I;function vi(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;po.copy(t),po[n]=0,po.normalize();const l=.5*o/(o+a),h=1-po.angleTo(i)/c;return Math.sign(po[e])===1?h*l:a/(o+a)+l+l*(1-h)}class wo extends He{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new I,l=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,_=p.length/6,M=new I,g=.5/o;for(let f=0,y=0;f<p.length;f+=3,y+=2)switch(c.fromArray(p,f),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),p[f+0]=h.x*Math.sign(c.x)+l.x*r,p[f+1]=h.y*Math.sign(c.y)+l.y*r,p[f+2]=h.z*Math.sign(c.z)+l.z*r,d[f+0]=l.x,d[f+1]=l.y,d[f+2]=l.z,Math.floor(f/_)){case 0:M.set(1,0,0),u[y+0]=vi(M,l,"z","y",r,n),u[y+1]=1-vi(M,l,"y","z",r,e);break;case 1:M.set(-1,0,0),u[y+0]=1-vi(M,l,"z","y",r,n),u[y+1]=1-vi(M,l,"y","z",r,e);break;case 2:M.set(0,1,0),u[y+0]=1-vi(M,l,"x","z",r,t),u[y+1]=vi(M,l,"z","x",r,n);break;case 3:M.set(0,-1,0),u[y+0]=1-vi(M,l,"x","z",r,t),u[y+1]=1-vi(M,l,"z","x",r,n);break;case 4:M.set(0,0,1),u[y+0]=1-vi(M,l,"x","y",r,t),u[y+1]=1-vi(M,l,"y","x",r,e);break;case 5:M.set(0,0,-1),u[y+0]=vi(M,l,"x","y",r,t),u[y+1]=1-vi(M,l,"y","x",r,e);break}}static fromJSON(t){return new wo(t.width,t.height,t.depth,t.segments,t.radius)}}const li={width:1.2,height:.6,joint:.0036};function ks(i,t){return(i%t+t)%t-t}function cM(i,t){const e=[];for(let n=t[0];n<i.u1;n+=li.width)for(let s=t[1];s<i.v1;s+=li.height){const r={u0:Math.max(n,i.u0),u1:Math.min(n+li.width,i.u1),v0:Math.max(s,i.v0),v1:Math.min(s+li.height,i.v1)};r.u1>r.u0+1e-4&&r.v1>r.v0+1e-4&&e.push(r)}return e}function dc(i,t,e){return e&&(i||t)?1:0}function hM(i,t){return{shower:i&&t?1:0,wc:i&&t?1:0}}const nl=i=>i<0?0:i>1?1:i,Oe=(i,t,e)=>nl((i-t)/(e-t)),Zn=i=>1-Math.pow(1-nl(i),3),Vn=i=>(i=nl(i),i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2),ns=(i,t,e,n=.06)=>Oe(i,t,t+n)*(1-Oe(i,e-n,e));function qs(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function uM(i,t){if(t.u0>=i.u1||t.u1<=i.u0||t.v0>=i.v1||t.v1<=i.v0)return[i];const e=[];t.v0>i.v0&&e.push({u0:i.u0,v0:i.v0,u1:i.u1,v1:t.v0}),t.v1<i.v1&&e.push({u0:i.u0,v0:t.v1,u1:i.u1,v1:i.v1});const n=Math.max(i.v0,t.v0),s=Math.min(i.v1,t.v1);return t.u0>i.u0&&e.push({u0:i.u0,v0:n,u1:t.u0,v1:s}),t.u1<i.u1&&e.push({u0:t.u1,v0:n,u1:i.u1,v1:s}),e}function is(i,t=[]){let e=i;for(const n of t)e=e.flatMap(s=>uM(s,n));return e.filter(n=>n.u1-n.u0>.012&&n.v1-n.v0>.012)}function zo(i){const t=document.createElement("canvas");return t.width=t.height=i,[t,t.getContext("2d")]}function Ho(i,t=!0){const e=new em(i);return t&&(e.colorSpace=ti),e.wrapS=e.wrapT=Ga,e.anisotropy=8,e}function fM(){const[t,e]=zo(1024),n=qs(11);e.fillStyle="#efece6",e.fillRect(0,0,1024,1024);const s=o=>{for(const a of[-1024,0,1024])for(const c of[-1024,0,1024])o(a,c)};for(let o=0;o<90;o++){const a=n()*1024,c=n()*1024,l=90+n()*300,h=n()<.55,p=.05+n()*.12,d=h?"206,198,186":"252,251,248";s((u,_)=>{const M=e.createRadialGradient(a+u,c+_,0,a+u,c+_,l);M.addColorStop(0,`rgba(${d},${h?p:p*1.5})`),M.addColorStop(1,`rgba(${d},0)`),e.fillStyle=M,e.fillRect(a+u-l,c+_-l,l*2,l*2)})}const r=(o,a,c,l,h)=>{let p=n()*1024,d=n()*1024,u=-.7+(n()-.5)*.5,_=0;const M=[[p,d]];for(let f=0;f<c;f++)_=_*.6+(n()-.5)*h,u+=_*.22+(-.7-u)*.03,p+=Math.cos(u)*l,d+=Math.sin(u)*l,M.push([p,d]);const g=[[o*12,.02],[o*5,.045],[o*2,.1],[o*.7,.3]];for(const[f,y]of g)s((A,E)=>{e.beginPath(),e.moveTo(M[0][0]+A,M[0][1]+E);for(let C=1;C<M.length-1;C++){const R=M[C],v=M[C+1];e.quadraticCurveTo(R[0]+A,R[1]+E,(R[0]+v[0])/2+A,(R[1]+v[1])/2+E)}e.strokeStyle=`rgba(${a},${y})`,e.lineWidth=f,e.lineJoin="round",e.lineCap="round",e.stroke()})};for(let o=0;o<3;o++)r(2.4,"128,120,110",95,14,.5);for(let o=0;o<6;o++)r(.8,"158,150,138",55,12,.7);for(let o=0;o<3;o++)r(.9,"178,148,102",60,12,.6);return Ho(t)}function dM(i,t,e){const[s,r]=zo(512),o=qs(e);r.fillStyle=i,r.fillRect(0,0,512,512);for(let a=0;a<40;a++){const c=o()*512,l=o()*512,h=30+o()*120,p=r.createRadialGradient(c,l,0,c,l,h),d=o()<.5?"0,0,0":"255,255,255";p.addColorStop(0,`rgba(${d},${.03+o()*.04})`),p.addColorStop(1,`rgba(${d},0)`),r.fillStyle=p,r.fillRect(c-h,l-h,h*2,h*2)}for(let a=0;a<t;a++){const c=o()<.5?0:255;r.fillStyle=`rgba(${c},${c},${c},${.05+o()*.12})`;const l=o()*2.2+.4;r.fillRect(o()*512,o()*512,l,l)}return Ho(s)}function pM(){const[i,t]=zo(32);for(let e=0;e<32;e++){const n=.5+.5*Math.cos(e/32*Math.PI*2),s=Math.round(150+n*90);t.fillStyle=`rgb(${s},${s-2},${s-6})`,t.fillRect(0,e,32,1)}return Ho(i,!1)}function mM(){const[t,e]=zo(256),n=qs(21);e.fillStyle="#ffffff",e.fillRect(0,0,256,256);for(let s=0;s<900;s++){const r=n()*256,o=n()*256,a=n()*Math.PI,c=4+n()*10;e.strokeStyle=`rgba(90,90,90,${.08+n()*.12})`,e.lineWidth=.6,e.beginPath(),e.moveTo(r,o),e.lineTo(r+Math.cos(a)*c,o+Math.sin(a)*c),e.stroke()}for(let s=0;s<40;s++)e.fillStyle=`rgba(0,0,0,${.02+n()*.03})`,e.fillRect(0,n()*256,256,2+n()*5);return Ho(t)}function gM(){const[t,e]=zo(256),n=qs(31);e.fillStyle="#ffffff",e.fillRect(0,0,256,256);for(let s=0;s<2600;s++){const r=200+Math.floor(n()*55);e.fillStyle=`rgba(${r-30},${r-20},${r},${.25+n()*.3})`,e.fillRect(n()*256,n()*256,1+n()*2,1+n()*2)}return e.fillStyle="rgba(60,90,120,0.22)",e.fillRect(0,0,10,256),e.fillRect(246,0,10,256),Ho(t)}class _M{group=new fe;def;constructor(t){this.def=t;const e=new I(...t.u),n=new I(...t.v),s=new I().crossVectors(e,n);this.group.quaternion.setFromRotationMatrix(new Xe().makeBasis(e,n,s)),this.group.position.set(...t.o)}world(t,e,n,s=new I){return this.group.localToWorld(s.set(t,e,n))}}function Vs(i,t,e,n,s,r,o=!1){o?(i.moveTo(t+r,e),i.quadraticCurveTo(t,e,t,e+r),i.lineTo(t,e+s-r),i.quadraticCurveTo(t,e+s,t+r,e+s),i.lineTo(t+n-r,e+s),i.quadraticCurveTo(t+n,e+s,t+n,e+s-r),i.lineTo(t+n,e+r),i.quadraticCurveTo(t+n,e,t+n-r,e),i.lineTo(t+r,e)):(i.moveTo(t+r,e),i.lineTo(t+n-r,e),i.quadraticCurveTo(t+n,e,t+n,e+r),i.lineTo(t+n,e+s-r),i.quadraticCurveTo(t+n,e+s,t+n-r,e+s),i.lineTo(t+r,e+s),i.quadraticCurveTo(t,e+s,t,e+s-r),i.lineTo(t,e+r),i.quadraticCurveTo(t,e,t+r,e))}const Wn=Id,an=3.2,ge=We.roomDepth,Ee=2.6,se=.01,Se=.006,An=li.joint,Ui=2.6,On=1.4,Ws=1.2,fn=1.5,xi=.8,oi=.56,ze=.24,_n=1.75,ai=_n-Se-se,mo=We.wcZ,Kt={z0:1.95,z1:2.7,y0:1.25,y1:1.65,x0:.1},Ze={z0:1.95,z1:2.7,y0:1.8,y1:2.4,x0:.06},go=1.02,vM={standard:{x0:.4,x1:1,y0:1,y1:1.6,shelves:[1.3]},large:{x0:.15,x1:1.25,y0:.85,y1:1.75,shelves:[1.15,1.45]},full:{x0:.85,x1:1.25,y0:0,y1:Ee,shelves:[.9,1.3,1.7]}};function MM(i,t,e,n){const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=vM[n.niche],o={u0:r.x0,v0:r.y0,u1:r.x1,v1:r.y1},a=[(r.x0+r.x1)/2,Math.min(r.y1,r.y0+.75),-.04],c=new Yx({canvas:t,antialias:!0,powerPreference:"high-performance"});c.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),c.toneMapping=ah,c.toneMappingExposure=.86,c.outputColorSpace=ti,c.shadowMap.enabled=!0,c.shadowMap.type=So;const l=new Wf,h=new ce("#17181a"),p=new ce("#0c0c0e"),d=h.clone();l.background=d;const u=new Fo(c),_=u.fromScene(new Zx,.04).texture;l.environment=_,l.environmentIntensity=.45;const M=new ci(40,1,.03,60),g=new qm(16774890,2763566,.25);l.add(g);const f=new Zu(16774114,1.75);f.position.set(5.6,6.5,6.2),f.target.position.set(1.4,0,1.2),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),f.shadow.camera.left=-4,f.shadow.camera.right=4,f.shadow.camera.top=4,f.shadow.camera.bottom=-4,f.shadow.camera.near=1,f.shadow.camera.far=20,f.shadow.bias=-5e-4,f.shadow.normalBias=.02,f.shadow.radius=4,l.add(f,f.target);const y=new Zu(14674175,.45);y.position.set(-2,3,6),l.add(y);const A=(m,T,F,N,Y)=>{const j=new Zm(16765594,0,5,Y,.65,1.4);return j.position.set(m,Ee-.02,T),j.target.position.set(F,0,N),l.add(j,j.target),j},E=A(.7,.6,.7,.55,.75),C=A(2.35,.45,2.35,.45,.85),R=A(.75,2.3,.4,2.3,.8),v=new Ar(16763274,0,1.1,1.6);v.position.set(a[0],a[1],-.02);const b=new Ar(16763274,0,1,1.6);b.position.set(.2,1.5,mo);const V=new Ar(16753746,0,2.6,1.5);V.position.set(2.95,.75,.9);const D=new Ar(16777215,0,3.5,1.5);l.add(v,b,V,D);const B=fM(),W=dM("#8f8b84",9e3,3);W.repeat.set(3,3);const J=pM(),L=mM();L.repeat.set(4,4);const q=gM(),Z=[B,W,J,L,q,_,u],z=m=>{const T=new Uo(m);return Z.push(T),T},ft=m=>{const T=new km(m);return Z.push(T),T},$=m=>{const T=new vo(m);return Z.push(T),T},tt=ft({map:B,roughness:.14,clearcoat:.55,clearcoatRoughness:.08}),lt=z({color:"#c4c0b7",map:J,bumpMap:J,bumpScale:2,roughness:.95}),Gt=z({map:J,bumpMap:J,bumpScale:3,roughness:.95}),Yt=z({color:"#bdb6aa",roughness:.92}),st=z({map:W,color:"#b9b4ac",roughness:.96}),wt=z({map:W,color:"#9e9a92",roughness:.97}),zt=z({color:"#26272b",roughness:.9}),qt=z({map:W,color:"#f1ede6",roughness:.95}),yt=z({map:W,color:"#c4cabf",roughness:.9}),$t=z({map:W,color:"#c9c4bb",roughness:.99,transparent:!0,opacity:.9,depthWrite:!1}),qe=z({color:"#8d8981",roughness:.32,transparent:!0,opacity:.82,depthWrite:!1}),te=z({map:W,color:"#c9bda8",roughness:.97}),be=z({color:"#9cc3d0",roughness:.55}),Re=z({color:"#4f8297",roughness:.5}),at=z({map:L,color:"#b3b7b5",roughness:.9}),At=z({map:L,color:"#8f9593",roughness:.88}),Et=z({color:"#f2f3f1",roughness:.8}),Ft=z({map:q,color:"#e6ecef",roughness:.95,side:zn}),Dt=z({map:q,color:"#d5dee3",roughness:.95,side:zn}),he=z({color:"#e4e6e4",roughness:.85}),Vt=z({color:"#d0d4d7",metalness:1,roughness:.26,envMapIntensity:1.8}),Me=z({color:"#c9ccce",metalness:1,roughness:.18,envMapIntensity:2.2}),ee=z({color:"#d4ad66",metalness:.7,roughness:.3,envMapIntensity:1.8}),jt=z({color:"#2a2b2f",roughness:.6}),U=ft({color:"#f8f7f4",roughness:.12,clearcoat:1,clearcoatRoughness:.05}),un=ft({color:"#dceef0",roughness:.02,metalness:.05,transparent:!0,opacity:0,side:zn,depthWrite:!1}),_e=ft({color:"#9fd0d6",roughness:.04,transparent:!0,opacity:0,depthWrite:!1,side:zn}),Ye=z({color:"#e2ddd4",roughness:.35}),Rt=$({color:"#2a2b2f",toneMapped:!1}),ln=$({color:"#2a2b2f",toneMapped:!1}),Qt=$({color:"#ffcf7a",toneMapped:!1,transparent:!0,opacity:.95}),ne=$({color:"#ff3b30",toneMapped:!1,transparent:!0,opacity:0}),w=$({color:"#b99350",transparent:!0,opacity:0,side:zn,depthWrite:!1}),x=new za({color:"#b99350",transparent:!0,opacity:.85}),X=new za({color:"#e9c27a",transparent:!0,opacity:0});Z.push(x,X);const Q=(m,T=!0)=>(m.castShadow=T,m.receiveShadow=!0,m),k=(m,T,F,N,Y,j,pt,ct=l)=>{const Lt=Q(new ut(new He(N-m,Y-T,j-F),pt));return Lt.position.set((m+N)/2,(T+Y)/2,(F+j)/2),ct.add(Lt),Lt},xt=(m,T,F,N,Y)=>{const j=m.getAttribute("position"),pt=m.getAttribute("uv");for(let ct=0;ct<j.count;ct++)pt.setXY(ct,(T+j.getX(ct)+N)/Ui,(F+j.getY(ct)+Y)/Ui)},St=[st,st,zt,st,st,st];k(-.18,-.24,-.18,an,-.06,ge,[wt,wt,wt,wt,zt,wt]),k(On,-.06,0,an,0,ge,wt),k(0,-.06,Ws,On,0,ge,wt),k(-.18,-.24,-.18,r.x0,Ee,0,St),k(r.x1,-.24,-.18,an,Ee,0,St),k(r.x0,-.24,-.18,r.x1,r.y0,0,St),Ee-r.y1>.001&&k(r.x0,r.y1,-.18,r.x1,Ee,0,St),k(r.x0,r.y0,-.18,r.x1,r.y1,-.12,St);for(const m of is([{u0:0,v0:-.06,u1:an,v1:Ee}],[o])){const T=new ut(new Bn(m.u1-m.u0,m.v1-m.v0),st);T.position.set((m.u0+m.u1)/2,(m.v0+m.v1)/2,3e-4),T.receiveShadow=!0,l.add(T)}k(-.18,-.24,0,0,Ee,ge,St);const it=new fe;l.add(it),k(fn,0,0,an,.1,xi,qt,it);for(const m of is([{u0:fn,u1:an,v0:.1,v1:oi}],[{u0:fn-Se-se+.6,u1:fn-Se-se+.6+We.hatchWidth,v0:.1,v1:.1+We.hatchHeight}]))k(m.u0,m.v0,xi-.06,m.u1,m.v1,xi,qt,it);k(fn,.1,0,fn+.06,oi,xi-.06,qt,it),k(fn+.06,.1,0,an,oi,.05,qt,it),k(an-.07,.1,.05,an,oi,xi-.06,qt,it);const ot=[{u0:We.accessoriesZ-.09,u1:We.accessoriesZ+.09,v0:We.brushBottom,v1:We.paperTop}];k(0,0,_n,.08,Kt.y0,ge,yt);for(const m of is([{u0:_n,u1:ge,v0:0,v1:Kt.y0}],ot))k(.08,m.v0,m.u0,ze,m.v1,m.u1,yt);k(0,Kt.y0,_n,Kt.x0,Kt.y1,ge,yt),k(Kt.x0,Kt.y0,_n,ze,Kt.y1,Kt.z0,yt),k(Kt.x0,Kt.y0,Kt.z1,ze,Kt.y1,ge,yt),k(0,Kt.y1,_n,ze,Ze.y0,ge,yt),k(0,Ze.y0,_n,Ze.x0,Ze.y1,ge,yt),k(Ze.x0,Ze.y0,_n,ze,Ze.y1,Ze.z0,yt),k(Ze.x0,Ze.y0,Ze.z1,ze,Ze.y1,ge,yt),k(0,Ze.y1,_n,ze,Ee,ge,yt);const Tt=z({color:"#f3f0ea",roughness:.6});k(Ze.x0,Ze.y0,Ze.z0,Ze.x0+.006,Ze.y1,Ze.z1,Tt),k(Ze.x0,Ze.y0+.29,Ze.z0,ze-.02,Ze.y0+.302,Ze.z1,Tt);const P=new fe;P.visible=!1,l.add(P);{const m=Q(new ut(new je(.025,.025,.14,18),jt));m.position.set(.14,Ze.y0+.07,2.15);const T=Q(new ut(new je(.02,.02,.1,18),ee));T.position.set(.15,Ze.y0+.352,2.45);const F=Q(new ut(new wo(.1,.18,.14,2,.01),z({color:"#d9d0c3",roughness:1})));F.position.set(.13,Ze.y0+.09,2.5),P.add(m,T,F)}{const m=[],T=(N,Y)=>m.push(...N,...Y);T([-.18,Ee,-.18],[an,Ee,-.18]),T([0,Ee,0],[an,Ee,0]),T([an,Ee,-.18],[an,Ee,0]),T([-.18,Ee,-.18],[-.18,Ee,ge]),T([0,Ee,0],[0,Ee,_n]),T([-.18,Ee,ge],[ze,Ee,ge]),T([ze,Ee,_n],[ze,Ee,ge]),T([0,Ee,_n],[ze,Ee,_n]),T([-.18,-.24,ge],[an,-.24,ge]),T([an,-.24,-.18],[an,-.24,ge]),T([-.18,-.24,ge],[-.18,Ee,ge]),T([an,-.24,-.18],[an,Ee,-.18]);const F=new En;F.setAttribute("position",new tn(m,3)),l.add(new Nu(F,x))}{const m=new ut(new Bn(40,40),new Fm({opacity:.45}));Z.push(m.material),m.rotation.x=-Math.PI/2,m.position.y=-.241,m.receiveShadow=!0,l.add(m)}const rt=ge-ai,et={u0:.6,v0:.6,u1:rt,v1:1.2},gt={u0:ge-We.accessoriesZ-.09,u1:ge-We.accessoriesZ+.09,v0:We.brushBottom,v1:We.brushTop},ht={...gt,v0:We.paperBottom,v1:We.paperTop},_t={z0:2.98,z1:3.22,y0:1.02,y1:1.18},Wt={u0:ge-_t.z1,u1:ge-_t.z0,v0:_t.y0,v1:_t.y1},ve=We.ventTile+We.ventGap*2,dt={u0:ai-We.ventZ-ve/2,u1:ai-We.ventZ+ve/2,v0:2.4-ve/2,v1:2.4+ve/2},Zt={u0:.6,u1:.6+We.hatchWidth,v0:.1,v1:.1+We.hatchHeight},de={u0:ge-Kt.z1,v0:Kt.y0,u1:ge-Kt.z0,v1:Kt.y1},Mt={u0:ge-Ze.z1,v0:Ze.y0,u1:ge-Ze.z0,v1:Ze.y1},pe=r.x1-r.x0,mn=(m,T)=>({u0:m.u0+T,v0:m.v0+T,u1:m.u1-T,v1:m.v1-T}),ni=r.y1-r.y0,Hr=[{id:"floor",o:[0,0,ge],u:[1,0,0],v:[0,0,-1],w:an,h:ge,tw:1.2,th:.6,off:[0,ks(ge-.5,.6)],tex:[.37,.21],holes:[{u0:.1,v0:ge-.105,u1:On-.1,v1:ge-.035},{u0:fn-Se-se,v0:ge-xi-Se-se,u1:an,v1:ge},{u0:0,v0:0,u1:ze+Se+se,v1:ge-ai}]},{id:"back",o:[0,0,0],u:[1,0,0],v:[0,1,0],w:an,h:Ee,tex:[0,0],holes:[mn(o,Se),{u0:fn-Se-se,v0:0,u1:an,v1:oi+.025}]},{id:"left",o:[0,0,ai],u:[0,0,-1],v:[0,1,0],w:ai,h:Ee,off:[ks(ai-.5,1.2),0],tex:[1.31,.47],holes:[dt]},{id:"nicheBack",o:[r.x0,r.y0,-.12],u:[1,0,0],v:[0,1,0],w:pe,h:ni,tex:[r.x0,r.y0]},{id:"nicheBottom",o:[r.x0,r.y0,Se+se],u:[1,0,0],v:[0,0,-1],w:pe,h:.12+Se+se,tex:[r.x0,r.y0-.12]},{id:"nicheTop",o:[r.x0,r.y1,-.12],u:[1,0,0],v:[0,0,1],w:pe,h:.12+Se+se,tex:[r.x0,r.y1]},{id:"nicheL",o:[r.x0,r.y0,Se+se],u:[0,0,-1],v:[0,1,0],w:.12+Se+se,h:ni,tex:[r.x0-.12,r.y0]},{id:"nicheR",o:[r.x1,r.y0,-.12],u:[0,0,1],v:[0,1,0],w:.12+Se+se,h:ni,tex:[r.x1,r.y0]},{id:"preFront",o:[ze,0,ge],u:[0,0,-1],v:[0,1,0],w:rt,h:Ee,off:[-.6,0],tex:[.9,.35],holes:[mn(de,Se),Mt,gt,ht,Wt],skip:[et]},{id:"preSide",o:[ze,0,_n],u:[-1,0,0],v:[0,1,0],w:ze,h:Ee,tex:[.9+rt,.35]},{id:"wnBack",o:[Kt.x0,Kt.y0,Kt.z1],u:[0,0,-1],v:[0,1,0],w:Kt.z1-Kt.z0,h:Kt.y1-Kt.y0,tex:[1.1,1.6]},{id:"wnBottom",o:[ze+Se+se,Kt.y0,Kt.z1],u:[0,0,-1],v:[-1,0,0],w:Kt.z1-Kt.z0,h:ze-Kt.x0+Se+se,tex:[1.1,1.46]},{id:"wnTop",o:[Kt.x0,Kt.y1,Kt.z1],u:[0,0,-1],v:[1,0,0],w:Kt.z1-Kt.z0,h:ze-Kt.x0+Se+se,tex:[1.1,2]},{id:"wnL",o:[ze+Se+se,Kt.y0,Kt.z1],u:[-1,0,0],v:[0,1,0],w:ze-Kt.x0+Se+se,h:Kt.y1-Kt.y0,tex:[.96,1.6]},{id:"wnR",o:[Kt.x0,Kt.y0,Kt.z0],u:[1,0,0],v:[0,1,0],w:ze-Kt.x0+Se+se,h:Kt.y1-Kt.y0,tex:[1.85,1.6]},{id:"tubFront",o:[fn-Se-se,0,xi],u:[1,0,0],v:[0,1,0],w:an-fn+Se+se,h:oi,off:[ks(-1.484,1.2),0],tex:[.2,1.4],holes:[Zt]},{id:"tubSide",o:[fn,0,0],u:[0,0,1],v:[0,1,0],w:xi,h:oi,tex:[2.1,.3]}];for(const m of Hr)m.tw=li.width,m.th=li.height,(m.id==="preSide"||m.id==="tubSide")&&(m.off=[0,0]),m.id.startsWith("niche")&&(m.off=[ks(-m.o[0],li.width),ks(-m.o[1],li.height)]),m.id.startsWith("wn")&&(m.off=[ks(m.o[2]-.5,li.width),ks(-m.o[1],li.height)]);const js={},sn=m=>{const T=js[m];if(!T)throw new Error(`Unknown surface ${m}`);return T};for(const m of Hr){const T=new _M(m);js[m.id]=T,l.add(T.group)}l.updateMatrixWorld(!0);const Gr=(m,T)=>m.u0<T.u1-1e-4&&m.u1>T.u0+1e-4&&m.v0<T.v1-1e-4&&m.v1>T.v0+1e-4,kr=m=>{const T=m.tw??li.width,F=m.th??li.height,[N,Y]=m.off??[0,0],j=[];for(let ct=N;ct<m.w-.001;ct+=T)for(let Lt=Y;Lt<m.h-.001;Lt+=F)j.push({u0:Math.max(0,ct),v0:Math.max(0,Lt),u1:Math.min(m.w,ct+T),v1:Math.min(m.h,Lt+F)});return j.filter(ct=>!(m.skip??[]).some(Lt=>Gr(Lt,ct)))},ui=[],fi=(m,T,F,N=!1)=>{const Y=T.u1-T.u0,j=T.v1-T.v0,pt=(T.u0+T.u1)/2,ct=(T.v0+T.v1)/2,[Lt,kt]=m.def.tex;let bt;const re=(m.def.holes??[]).filter(Jt=>Gr(T,Jt)),le=!F&&!N&&re.length>0,Pe=le?is([{u0:T.u0+An/2,u1:T.u1-An/2,v0:T.v0+An/2,v1:T.v1-An/2}],re):[];if(le){const Jt=new fe;for(const Be of Pe){const Le=(Be.u0+Be.u1)/2,me=(Be.v0+Be.v1)/2,Qe=new He(Be.u1-Be.u0,Be.v1-Be.v0,se);xt(Qe,Le,me,Lt,kt);const In=Q(new ut(Qe,[tt,tt,tt,tt,tt,lt]));In.position.set(Le-pt,me-ct,0),Jt.add(In)}bt=Jt}else if(F)bt=F;else{const Jt=new He(Y-An,j-An,se);xt(Jt,pt,ct,Lt,kt),bt=Q(new ut(Jt,[tt,tt,tt,tt,tt,lt]))}bt.position.set(pt,ct,Se+se/2),bt.visible=!1,m.group.add(bt);const hn=new Bn(Y,j);hn.translate(Y/2,0,0);const De=hn.getAttribute("uv"),Ue=hn.getAttribute("position");for(let Jt=0;Jt<Ue.count;Jt++)De.setXY(Jt,Ue.getX(Jt)*6,Ue.getY(Jt)*42);const oe=new ut(hn,Gt);if(le){const Be=is([T],re).map(Le=>{const me=new yn;return me.moveTo(Le.u0-T.u0,Le.v0-ct),me.lineTo(Le.u1-T.u0,Le.v0-ct),me.lineTo(Le.u1-T.u0,Le.v1-ct),me.lineTo(Le.u0-T.u0,Le.v1-ct),me.closePath(),me});oe.geometry.dispose(),oe.geometry=new Mi(Be)}oe.receiveShadow=!0,oe.position.set(T.u0,ct,.0056),oe.visible=!1,m.group.add(oe);const $e=new ut(new Bn(Y+An*.4,j+An*.4),Yt);if($e.receiveShadow=!0,$e.position.set(pt,ct,Se+se*.82),$e.visible=!1,m.group.add($e),le){const Jt=new yn,Le=is([{u0:T.u0-An*.2,u1:T.u1+An*.2,v0:T.v0-An*.2,v1:T.v1+An*.2}],re).map(me=>{const Qe=Jt.clone();return Qe.moveTo(me.u0-pt,me.v0-ct),Qe.lineTo(me.u1-pt,me.v0-ct),Qe.lineTo(me.u1-pt,me.v1-ct),Qe.lineTo(me.u0-pt,me.v1-ct),Qe.closePath(),Qe});$e.geometry.dispose(),$e.geometry=new Mi(Le)}const Fe={mesh:bt,patch:oe,grout:$e,surf:m,rect:T,t0:0,dur:.1,lead:.07,g0:0,world:m.world(pt,ct,0)};return ui.push(Fe),Fe},Pi={},Vr=new fe;{const m=sn("preFront"),T=et,F=T.u1-T.u0-An,N=T.v1-T.v0-An,Y=(T.u0+T.u1)/2,j=(T.v0+T.v1)/2,[pt,ct]=m.def.tex,Lt=ge-mo-Y,kt=go-j,bt=.0022,re=(oe,$e,Fe,Jt,Be)=>{Vs(oe,$e-Jt/2,Fe-Be/2,Jt,Be,.004)},le=(oe,$e,Fe,Jt)=>oe.absarc($e,Fe,Jt,0,Math.PI*2,!1),Pe=(oe,$e,Fe)=>{const Jt=new Xs(oe,{depth:$e,bevelEnabled:!1,curveSegments:40});return Jt.translate(0,0,Fe),xt(Jt,Y,j,pt,ct),Jt},hn=z({color:"#1c1d20",roughness:.5}),De=(oe,$e)=>{const Fe=new fe,Jt=new yn;Jt.moveTo(-F/2,-N/2),Jt.lineTo(F/2,-N/2),Jt.lineTo(F/2,N/2),Jt.lineTo(-F/2,N/2),Jt.closePath(),oe(Jt);const Be=new Fi;re(Be,(ht.u0+ht.u1)/2-Y,(ht.v0+ht.v1)/2-j,ht.u1-ht.u0,ht.v1-ht.v0),Jt.holes.push(Be),Fe.add(Q(new ut(Pe(Jt,se,-se/2),[tt,tt])));const Le=new ut(new Bn(.3,.24),hn);Le.position.set(Lt,kt,-se/2+8e-4),Fe.add(Le);const me=$e.map(Qe=>{const In=Q(new ut(Pe(Qe,se-.0012,-se/2+.0012),[tt,tt]));return Fe.add(In),In});return Vr.add(Fe),{group:Fe,press:me[me.length-1]}},Ue=(oe,$e)=>{const Fe=Lt-.044,Jt=Lt+.087,Be=kt-.028,Le=(me,Qe)=>{const In=new yn;return Vs(In,me-Qe/2,Be-oe/2,Qe,oe,$e),In};return De(me=>{const Qe=new Fi;Vs(Qe,Lt-.133-bt,Be-oe/2-bt,.266+bt*2,oe+bt*2,$e+bt),me.holes.push(Qe)},[Le(Fe,.174),Le(Jt,.084)])};Pi.narrow=Ue(.042,.004),Pi.wide=Ue(.125,.004);{const Jt=.21800000000000003,Be=Lt-Jt/2+.062,Le=Lt+Jt/2-.04,me=kt-.021;Pi.round=De(Qe=>{const In=new Fi;le(In,Be,kt,.062+bt);const _s=new Fi;le(_s,Le,me,.04+bt),Qe.holes.push(In,_s)},(()=>{const Qe=new yn;le(Qe,Be,kt,.062);const In=new yn;return le(In,Le,me,.04),[Qe,In]})())}{const Fe=[Lt-.012,kt+.012],Jt=[Fe[0]+.11,Fe[1]-.024],Be=(Le,me,Qe,In)=>{const _s=Jt[0]-Fe[0],Os=Jt[1]-Fe[1],so=Math.hypot(_s,Os),Di=Math.atan2(Os,_s),ea=(me*me-Qe*Qe+so*so)/(2*so),gi=Math.acos(Math.max(-1,Math.min(1,ea/me))),vs=[Fe[0]+me*Math.cos(Di+gi),Fe[1]+me*Math.sin(Di+gi)],xs=[Fe[0]+me*Math.cos(Di-gi),Fe[1]+me*Math.sin(Di-gi)],Al=Math.atan2(vs[1]-Jt[1],vs[0]-Jt[0]),Rl=Math.atan2(xs[1]-Jt[1],xs[0]-Jt[0]);Le.moveTo(vs[0],vs[1]),Le.absarc(Fe[0],Fe[1],me,Di+gi,Di-gi+Math.PI*2,!1),Le.absarc(Jt[0],Jt[1],Qe,Rl,Al,!In),Le.closePath()};Pi.nested=De(Le=>{const me=new Fi;Be(me,.08+bt,.053+bt,!0),Le.holes.push(me)},(()=>{const Le=new yn;Be(Le,.08,.053+bt*2,!1);const me=new yn;return le(me,Jt[0],Jt[1],.053),[Le,me]})())}}const hs=kr(sn("floor").def).map(m=>fi(sn("floor"),m)),Wr={u:1.9,v:.6},Xr=m=>Math.hypot((m.rect.u0+m.rect.u1)/2-Wr.u,(m.rect.v0+m.rect.v1)/2-Wr.v);hs.sort((m,T)=>Xr(m)-Xr(T)),hs.forEach((m,T)=>{T===0?(m.t0=4.2,m.dur=.3,m.lead=.16):(m.t0=4.5+(T-1)/Math.max(1,hs.length-1)*.36,m.dur=.09,m.lead=.06)});const Ls=["back","left","nicheBack","nicheBottom","nicheTop","nicheL","nicheR","tubSide","tubFront","preSide","preFront","wnBack","wnBottom","wnTop","wnL","wnR"],di=[];let pi=null;const qi=[];for(const m of Ls){const T=sn(m),F=kr(T.def).sort((N,Y)=>N.v0-Y.v0||N.u0-Y.u0).map(N=>fi(T,N));if(di.push(...F),m==="preFront"){const N=fi(T,et,Vr);{const bt=et,re=(bt.v0+bt.v1)/2,le=is([bt],[ht]).map(De=>{const Ue=new yn;return Ue.moveTo(De.u0-bt.u0,De.v0-re),Ue.lineTo(De.u1-bt.u0,De.v0-re),Ue.lineTo(De.u1-bt.u0,De.v1-re),Ue.lineTo(De.u0-bt.u0,De.v1-re),Ue.closePath(),Ue});N.patch.geometry.dispose(),N.patch.geometry=new Mi(le);const Pe=(bt.u0+bt.u1)/2,hn=is([bt],[ht]).map(De=>{const Ue=new yn;return Ue.moveTo(De.u0-Pe,De.v0-re),Ue.lineTo(De.u1-Pe,De.v0-re),Ue.lineTo(De.u1-Pe,De.v1-re),Ue.lineTo(De.u0-Pe,De.v1-re),Ue.closePath(),Ue});N.grout.geometry.dispose(),N.grout.geometry=new Mi(hn)}di.push(N);const Y=new fe,j=(Mt.u0+Mt.u1)/2,pt=(Mt.v0+Mt.v1)/2,[ct,Lt]=T.def.tex,kt=new ut(new He(Mt.u1-Mt.u0-An,Mt.v1-Mt.v0-An,se*.6),Yt);kt.position.z=-se*.4,Y.add(kt);for(const bt of cM(Mt,T.def.off??[0,0])){const re=(bt.u0+bt.u1)/2,le=(bt.v0+bt.v1)/2,Pe=new He(bt.u1-bt.u0-An,bt.v1-bt.v0-An,se);xt(Pe,re,le,ct,Lt);const hn=Q(new ut(Pe,tt));hn.position.set(re-j,le-pt,0),Y.add(hn)}pi=fi(T,Mt,Y,!0),di.push(pi);for(const bt of[gt,ht]){const re=fi(T,bt,void 0,!0);di.push(re),qi.push({tile:re,detail:Wn+1,angle:0,tilt:bt===gt})}{const bt=fi(T,Wt,void 0,!0);di.push(bt),qi.push({tile:bt,detail:Wn+7,angle:0,tilt:!0});const re=new yn;re.absellipse(0,0,.065,.017,0,Math.PI*2,!1,0);const le=new Fi;le.absellipse(0,0,.064,.016,0,Math.PI*2,!0,0),re.holes.push(le);const Pe=new ut(new Mi(re,48),new vo({color:"#3a3631"}));Pe.position.set(0,0,se/2+4e-4),bt.mesh.add(Pe)}}if(m==="left"){const N=fi(T,{u0:dt.u0+We.ventGap,u1:dt.u1-We.ventGap,v0:dt.v0+We.ventGap,v1:dt.v1-We.ventGap},void 0,!0);di.push(N)}if(m==="tubFront"){const N=fi(T,Zt,void 0,!0);di.push(N),qi.push({tile:N,detail:Wn+3,angle:0})}}di.forEach((m,T)=>{m.t0=5.04+T/Math.max(1,di.length-1)*.74,m.dur=.11,m.lead=.06});for(const[m,T]of[["preFront",[gt,ht,Wt]],["left",[dt]],["tubFront",[Zt]]]){const F=sn(m);for(const N of T){const Y=new ut(new Bn(N.u1-N.u0,N.v1-N.v0),jt);Y.position.set((N.u0+N.u1)/2,(N.v0+N.v1)/2,m==="preFront"?-.155:Se+se-.001),F.group.add(Y)}}const Go=[],ko=(m,T,F,N)=>{const Y=[[-m/2,-T/2],[m/2,-T/2],[m/2,T/2],[-m/2,T/2]],j=[[-m/2+F,-T/2+F],[m/2-F,-T/2+F],[m/2-F,T/2-F],[-m/2+F,T/2-F]],pt=N?.011:-.011,ct=N?4e-4:-4e-4,Lt=[...Y.map(([le,Pe])=>new I(le,pt,Pe)),...j.map(([le,Pe])=>new I(le,ct,Pe))],kt=new En().setFromPoints(Lt);kt.setIndex([0,2,1,0,3,2,4,5,6,4,6,7,0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7]),kt.computeVertexNormals();const bt=Lt.flatMap(le=>[(r.x0+pe/2+le.x)/Ui,(r.y0+le.z)/Ui]);kt.setAttribute("uv",new tn(bt,2));const re=tt.clone();return re.side=zn,Z.push(re),Q(new ut(kt,re))};for(const m of r.shelves){const T=new fe;T.add(ko(pe-.034,.12,.0106,!0),ko(pe-.034,.12,.0106,!1));const F=new Bn(pe-.034,.0204);xt(F,r.x0+pe/2,m,0,0);const N=Q(new ut(F,tt));N.position.z=.0601,T.add(N),k(-(pe-.034)/2,-4e-4,.059,(pe-.034)/2,4e-4,.0602,Ye,T),T.position.set(r.x0+pe/2,m,-.12+.016+.06),T.visible=!1,l.add(T),Go.push(T)}{const m=ui.map(N=>N.world.x*.6-N.world.y*.5+N.world.z*.4),T=Math.min(...m),F=Math.max(...m);ui.forEach((N,Y)=>N.g0=7.08+(m[Y]-T)/(F-T)*.72)}const Yi=new fe;{const m=ze+Se+se,T=ai;k(m-.0015,0,T-.0015,m+.0015,Ee,T+.011,Me,Yi),k(m-.011,0,T-.0015,m+.0015,Ee,T+.0015,Me,Yi);const F=Q(new ut(new je(.0035,.0035,Ee,12),Me));F.position.set(m,Ee/2,T),Yi.add(F)}Yi.visible=!1,l.add(Yi);const us=new fe;{const m=ze+Se+se,T=ai,F=new Bn(se+Se+.002,Ee),N=F.getAttribute("position"),Y=F.getAttribute("uv"),[j,pt]=sn("preSide").def.tex,ct=m-(se+Se+.002)/2;for(let bt=0;bt<N.count;bt++)Y.setXY(bt,(ze-(ct-N.getX(bt))+j)/Ui,(Ee/2+N.getY(bt)+pt)/Ui);const Lt=new ut(F,tt);Lt.rotation.y=Math.PI,Lt.position.set(ct,Ee/2,T-4e-4),Lt.receiveShadow=!0,us.add(Lt);const kt=new ut(new He(.0011,Ee,.0011),Ye);kt.position.set(m-3e-4,Ee/2,T-3e-4),kt.rotation.y=Math.PI/4,us.add(kt)}us.visible=!1,l.add(us);const S=new fe,O=new fe;l.add(S,O);const K=(m,T)=>{const F=mn(T,Se);for(const[N,Y,j]of[[S,.0035,Me],[O,9e-4,Ye]]){const pt=new fe;pt.position.copy(m.group.position),pt.quaternion.copy(m.group.quaternion),N.add(pt);const ct=Se+se+4e-4,Lt=ct-Y;k(F.u0-Y/2,F.v0-Y/2,Lt,F.u1+Y/2,F.v0+Y/2,ct,j,pt),k(F.u0-Y/2,F.v1-Y/2,Lt,F.u1+Y/2,F.v1+Y/2,ct,j,pt),k(F.u0-Y/2,F.v0,Lt,F.u0+Y/2,F.v1,ct,j,pt),k(F.u1-Y/2,F.v0,Lt,F.u1+Y/2,F.v1,ct,j,pt)}};K(sn("back"),o),K(sn("preFront"),de);const H={sand:[],primer:[],wp1:[],wp1Floor:[],wpA:[],wpAFloor:[],wpB:[],wpBand:[]},G=(m,T,F,N,Y,j,pt,ct)=>{const Lt=sn(T);is(F,N).forEach(kt=>{const bt=kt.u1-kt.u0,re=kt.v1-kt.v0,le=new Bn(bt,re);le.translate(0,re/2,0);const Pe=new ut(le,pt);Pe.receiveShadow=!0,Pe.position.set((kt.u0+kt.u1)/2,kt.v0,ct),Pe.visible=!1,Lt.group.add(Pe),m.push({mesh:Pe,surf:Lt,rect:kt,t0:Y,t1:j})})},vt=m=>[{u0:0,v0:0,u1:sn(m).def.w,v1:sn(m).def.h}],Ht=["nicheBack","nicheBottom","nicheTop","nicheL","nicheR"],Pt=sn("floor").def.holes??[],It=[{u0:.1,v0:ge-.11,u1:On-.1,v1:ge},{u0:0,v0:0,u1:ze,v1:ge-_n}];G(H.sand,"floor",vt("floor"),Pt,.38,.6,$t,4e-4),G(H.primer,"back",vt("back"),[o],.62,.76,qe,8e-4),G(H.primer,"left",vt("left"),[],.72,.84,qe,8e-4);for(const m of Ht)G(H.primer,m,vt(m),[],.74,.8,qe,8e-4);for(const m of["preFront","preSide","tubFront","tubSide"])G(H.primer,m,vt(m),m==="preFront"?[de,Mt,gt,ht,Wt]:[],.8,.88,qe,8e-4);G(H.primer,"floor",vt("floor"),It,.84,.95,qe,8e-4);const Xt=.0016,ie=.0038,Ce=(m,T,F,N)=>{const Y=j=>T+j;G(m,"back",[{u0:0,v0:0,u1:fn,v1:2.3}],[o],Y(0),Y(.22),F,N),G(m,"back",[{u0:fn,v0:0,u1:an,v1:1.1}],[],Y(.18),Y(.28),F,N),G(m,"left",[{u0:ai-Ws-.2,v0:0,u1:ai,v1:2.3}],[],Y(.08),Y(.3),F,N),G(m,"left",[{u0:0,v0:0,u1:ai-Ws-.2,v1:.25}],[],Y(.24),Y(.32),F,N);for(const j of Ht)G(m,j,vt(j),[],Y(.14),Y(.24),F,N);G(m,"tubSide",vt("tubSide"),[],Y(.28),Y(.38),F,N),G(m,"tubFront",[{u0:0,v0:0,u1:sn("tubFront").def.w,v1:.25}],[],Y(.3),Y(.4),F,N),G(m,"preSide",[{u0:0,v0:0,u1:ze,v1:.25}],[],Y(.32),Y(.4),F,N),G(m,"preFront",[{u0:0,v0:0,u1:rt,v1:.25}],[gt,ht],Y(.32),Y(.42),F,N)};G(H.wp1Floor,"floor",vt("floor"),It,2.04,2.22,at,Xt),Ce(H.wp1,2.06,be,Xt),G(H.wpAFloor,"floor",vt("floor"),It,3.04,3.3,At,ie),Ce(H.wpA,3.22,Re,ie);{const m=[{id:"floor",holes:It},{id:"back",holes:[o]},{id:"left",holes:[]},{id:"preFront",holes:[de,Mt,gt,ht,Wt]}];let T=0;const F=m.reduce((Y,j)=>Y+Math.ceil((sn(j.id).def.w-.1)/.9),0)+4,N=.5/F;for(const Y of m){const j=sn(Y.id).def;let pt=0;for(let ct=0;ct<j.w-.1;ct+=.9,pt++,T++){const Lt=3.04+T*N;if(G(H.wpB,Y.id,[{u0:ct,v0:0,u1:Math.min(j.w,ct+1),v1:j.h}],Y.holes,Lt,Lt+N*1.6,pt%2?Dt:Ft,ie+pt%2*5e-4),ct+1<j.w-.02){const kt=3.56+T/F*.3;G(H.wpBand,Y.id,[{u0:ct+.89,v0:0,u1:ct+1.01,v1:j.h}],Y.holes,kt,kt+.08,Et,ie+.0012)}}}for(const Y of[...Ht,"tubSide","tubFront","preSide"]){const j=3.04+T*N;G(H.wpB,Y,vt(Y),[],j,j+N*2,Ft,ie)}}const Ot=new fe;k(.1,-.05,.035,On-.1,0,.105,Vt,Ot),k(.12,-.049,.045,On-.12,-.002,.095,jt,Ot);{const m=Q(new ut(new je(.025,.025,.14,20),Vt));m.position.set(1.05,-.11,.07),Ot.add(m)}Ot.visible=!1,l.add(Ot);let Te=null;const rn=new fe;k(.1,.002,.035,On-.1,.014,.105,jt,rn);{const m=new He(On-.2-.004,.004,.066),T=m.getAttribute("position"),F=m.getAttribute("uv");for(let Y=0;Y<T.count;Y++)F.setXY(Y,(.7+T.getX(Y))/Ui,(.07+T.getZ(Y))/Ui);const N=Q(new ut(m,tt));N.position.set(On/2,.015,.07),Te=N,rn.add(N)}const ke=new fe;{const m=On-.34;k(.17,.011,.041,On-.17,.017,.099,Vt,ke);const T=Math.floor(m/.025);for(let F=0;F<T;F++){const N=.18250000000000002+F*(m/T);k(N-.004,.0165,.048,N+.004,.0175,.092,jt,ke)}}ke.visible=!1,rn.add(ke),rn.visible=!1,l.add(rn);const Je=(()=>{const m=new He(On,.06,Ws);m.translate(0,.03,0);const T=m.getAttribute("position");for(let N=0;N<T.count;N++)T.getY(N)>.05&&T.setY(N,.06-.012*((Ws/2-T.getZ(N))/Ws));m.computeVertexNormals();const F=Q(new ut(m,te),!1);return F.position.set(On/2,-.06,Ws/2),F.visible=!1,l.add(F),F})(),bn=[];{const m=new yn;m.moveTo(-.07,.03),m.lineTo(0,-.03),m.lineTo(.07,.03),m.lineTo(.07,.055),m.lineTo(0,-.005),m.lineTo(-.07,.055),m.closePath();const T=new Mi(m);T.rotateX(Math.PI/2);for(let F=0;F<9;F++){const N=new ut(T,w);N.userData={x:.3+F%3*.4,phase:Math.floor(F/3)/3},N.visible=!1,N.renderOrder=2,l.add(N),bn.push(N)}}const Bt=[],Pn=[],Ne=(m,T,F,N,Y,j,pt=.0024,ct=Bt)=>{const Lt=new I(...m),bt=new I(...T).clone().sub(Lt),re=bt.length();bt.normalize();for(const[le,Pe]of[[F,N],[N,F]]){const hn=new I(...le),De=new I(...Pe),Ue=new He(re,.06,.0018);Ue.translate(re/2,.03,0);const oe=new ut(Ue,ct===Bt?he:Et);oe.receiveShadow=!0,oe.quaternion.setFromRotationMatrix(new Xe().makeBasis(bt,De,hn)),oe.position.copy(Lt).addScaledVector(hn,pt),oe.visible=!1,l.add(oe),ct.push({obj:oe,t0:Y,t1:j,axis:"x"})}};[[[0,0,0],[0,2.1,0],[0,0,1],[1,0,0]],[[0,0,0],[fn,0,0],[0,0,1],[0,1,0]],[[0,0,0],[0,0,_n],[1,0,0],[0,1,0]],[[fn,0,0],[fn,0,xi],[-1,0,0],[0,1,0]],[[fn,0,xi],[an,0,xi],[0,0,1],[0,1,0]],[[fn,oi+.025,.02],[an,oi+.025,.02],[0,0,1],[0,1,0]],[[0,0,_n],[ze,0,_n],[0,0,-1],[0,1,0]],[[0,0,_n],[0,.2,_n],[1,0,0],[0,0,-1]],[[ze,0,_n],[ze,0,ge],[1,0,0],[0,1,0]],[[r.x0,r.y0,-.12],[r.x1,r.y0,-.12],[0,0,1],[0,1,0]],[[r.x0,r.y1,-.12],[r.x1,r.y1,-.12],[0,0,1],[0,-1,0]],[[r.x0,r.y0,-.12],[r.x0,r.y1,-.12],[0,0,1],[1,0,0]],[[r.x1,r.y0,-.12],[r.x1,r.y1,-.12],[0,0,1],[-1,0,0]]].forEach((m,T)=>{const F=2.42+T*.026;Ne(m[0],m[1],m[2],m[3],F,F+.1);const N=3.62+T*.022;Ne(m[0],m[1],m[2],m[3],N,N+.08,ie+.0024,Pn)});{const m=On/2-.02,T=new yn;T.moveTo(-m,-.08),T.lineTo(m,-.08),T.lineTo(m,.08),T.lineTo(-m,.08),T.closePath();const F=new Fi;F.moveTo(-m+.07,-.035),F.lineTo(m-.07,-.035),F.lineTo(m-.07,.035),F.lineTo(-m+.07,.035),F.closePath(),T.holes.push(F);const N=new ut(new Mi(T),he);N.rotation.x=-Math.PI/2,N.position.set(On/2,.0025,.07),N.visible=!1,l.add(N),Bt.push({obj:N,t0:2.74,t1:2.86,axis:"all"})}const Ln=(()=>{const m=new yn;m.moveTo(-.07,-.07),m.lineTo(.07,-.07),m.lineTo(.07,.07),m.lineTo(-.07,.07),m.closePath();const T=new Fi;return T.absarc(0,0,.016,0,Math.PI*2,!0),m.holes.push(T),new Mi(m,20)})(),tr=[{p:[0,1.05,.52],n:[1,0,0]},{p:[0,1.05,.68],n:[1,0,0]},{p:[.7,2.25,0],n:[0,0,1]},{p:[2.35,.82,0],n:[0,0,1]}],mi=new fe;l.add(mi),tr.forEach((m,T)=>{const F=new ut(Ln,he),N=new I(...m.n);F.quaternion.setFromUnitVectors(new I(0,0,1),N),F.position.set(...m.p).addScaledVector(N,.0026),F.visible=!1,l.add(F),Bt.push({obj:F,t0:2.78+T*.035,t1:2.88+T*.035,axis:"all"});const Y=Q(new ut(new je(.012,.012,.07,16),Vt));Y.quaternion.setFromUnitVectors(new I(0,1,0),N),Y.position.set(...m.p).addScaledVector(N,.035);const j=Q(new ut(new je(.016,.016,.02,16),z({color:T===1?"#3b6fb0":"#b5442f",roughness:.5})));j.quaternion.copy(Y.quaternion),j.position.set(...m.p).addScaledVector(N,.075),mi.add(Y,j)});const on={x0:1.6,x1:3.08,z0:.12,z1:.7,r:.2},ye=new fe,gn=m=>{const T=new yn;return m?Vs(T,on.x0,-.7,on.x1-on.x0,on.z1-on.z0,on.r):Vs(T,on.x0,on.z0,on.x1-on.x0,on.z1-on.z0,on.r),T};{const m=new yn;Vs(m,fn-Se-se,.017,an-fn+Se+se,xi+Se+se+.004-.017,.004),m.holes.push(gn(!1));const T=new Xs(m,{depth:.025,bevelEnabled:!1,curveSegments:20}),F=Q(new ut(T,U));F.rotation.x=Math.PI/2,F.position.y=oi+.025,ye.add(F);const N=new yn;Vs(N,on.x0-.02,on.z0-.02,on.x1-on.x0+.04,on.z1-on.z0+.04,on.r+.02),N.holes.push(gn(!1));const Y=new Xs(N,{depth:oi-.145,bevelEnabled:!1,curveSegments:20}),j=new ut(Y,U);j.castShadow=!0,j.receiveShadow=!1,j.rotation.x=Math.PI/2,j.position.y=oi,ye.add(j);const pt=new ut(new Mi(gn(!0),20),U);pt.rotation.x=-Math.PI/2,pt.position.y=.15,pt.receiveShadow=!0,ye.add(pt)}ye.visible=!1,l.add(ye);const Mn=new ut(new Mi(gn(!0),20),_e);Mn.rotation.x=-Math.PI/2,Mn.renderOrder=3,Mn.visible=!1,l.add(Mn);const en=new ut(new je(.006,.009,1,10),_e);en.visible=!1,l.add(en);const xn=[],Dn=(m,T,F,N)=>{m.visible=!1,l.add(m),xn.push({obj:m,t0:T,t1:F,from:N,base:m.position.clone()})};Go.forEach((m,T)=>{l.remove(m),Dn(m,5.62+T*.05,5.76+T*.05,[0,0,.3])});const Ds=new fe;{const m=new ut(new He(.008,1.98,.93),un);m.position.set(1.45,1.006,.485),Ds.add(m),k(1.44,.016,.016,1.46,2,.034,ee,Ds),k(.016,1.975,.925,1.45,1.99,.94,ee,Ds)}Dn(Ds,15.04,15.22,[0,.6,0]);const qr=new fe;k(.68,2.24,.016,.72,2.26,.5,ee,qr),k(.55,2.225,.35,.85,2.24,.65,ee,qr);{const m=Q(new ut(new je(.075,.075,.012,40),ee));m.rotation.z=Math.PI/2,m.position.set(.022,1.05,.6),qr.add(m),k(.028,1.04,.585,.12,1.06,.615,ee,qr)}Dn(qr,15.1,15.26,[.12,.25,.12]);const il=new fe;{const m=Q(new ut(new je(.045,.045,.012,32),ee));m.rotation.x=Math.PI/2,m.position.set(2.35,.82,.022),il.add(m),k(2.335,.805,.016,2.365,.83,.2,ee,il)}Dn(il,15.14,15.28,[0,0,.2]);const Vo=new fe;{const m=(N,Y)=>{const j=new yn;return j.moveTo(-N,0),j.lineTo(N,0),j.lineTo(N,Y-N*1.1),j.absellipse(0,Y-N*1.1,N,N*1.1,0,Math.PI,!1),j.lineTo(-N,0),j},T=Q(new ut(new Xs(m(.14,.46),{depth:.22,bevelEnabled:!0,bevelThickness:.05,bevelSize:.04,bevelSegments:6,curveSegments:24}),U));T.rotation.x=Math.PI/2,T.position.set(0,.37,.04);const F=Q(new ut(new Xs(m(.15,.48),{depth:.012,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:3,curveSegments:24}),U));F.rotation.x=Math.PI/2,F.position.set(0,.45,.03),Vo.add(T,F),Vo.rotation.y=Math.PI/2,Vo.position.set(ze+Se+se,0,mo)}Dn(Vo,10.02,10.18,[-.35,0,0]);const cn=new fe,Si=(m,T,F,N,Y,j,pt)=>{const ct=k(m,T,F,N,Y,j,tt,pt),Lt=ct.geometry.getAttribute("position"),kt=ct.geometry.getAttribute("uv");for(let bt=0;bt<Lt.count;bt++)kt.setXY(bt,(ct.position.z+Lt.getZ(bt))/Ui,(ct.position.x+Lt.getX(bt)+ct.position.y+Lt.getY(bt))/Ui);return ct},Tn=2.85,Un=3.85;Si(.256,.72,Tn,.79,.86,Tn+.026,cn),Si(.256,.72,Un-.026,.79,.86,Un,cn),Si(.764,.72,Tn+.026,.79,.86,Un-.026,cn),Si(.256,.72,Tn+.026,.282,.86,Un-.026,cn);const yd=Si(.34,.738,Tn+.026,.764,.754,Un-.026,cn);yd.rotation.z=.02,k(.282,.7,Tn+.03,.34,.705,Un-.03,jt,cn);const Ch=new ut(new je(.022,.022,.006,32),ee);Ch.position.set(.311,.708,3.35);const Ph=new ut(new je(.015,.015,.008,32),new vo({color:"#050505"}));Ph.position.set(.311,.709,3.35),cn.add(Ch,Ph);const Yr=new fe;Si(.284,.733,Tn+.03,.336,.749,Un-.03,Yr),cn.add(Yr),k(.256,1.06,3.33,.5,1.082,3.356,ee,cn),k(.479,1.02,3.33,.501,1.082,3.356,ee,cn),Si(.29,.86,3.62,.368,1.02,3.698,cn);const Lh=new ut(new je(.017,.017,.045,20),jt);Lh.position.set(.329,1.042,3.659),cn.add(Lh),k(.325,1.06,3.648,.4,1.073,3.67,jt,cn);const sl=_e.clone();Z.push(sl);const Is=new ut(new Bn(.764-.35,Un-Tn-.06),sl);Is.rotation.x=-Math.PI/2,Is.rotation.z=.02,Is.renderOrder=3,Is.visible=!1,cn.add(Is);const rl=_e.clone();Z.push(rl);const er=new ut(new je(.005,.008,1,10),rl);er.visible=!1,cn.add(er),Si(.256,.16,Tn,.79,.7,Tn+.026,cn),Si(.256,.16,Un-.026,.79,.7,Un,cn),Si(.256,.676,Tn+.026,.79,.7,Un-.026,cn),k(.26,.16,Tn+.026,.27,.676,Un-.026,jt,cn);const ol=new vo({color:"#2a2b2f"}),Zr=new Uo({color:"#d9d4ca",roughness:.8});Z.push(ol,Zr);const Dh=[];for(const[m,T]of[[.16,.414],[.42,.674]]){const F=new fe;Si(.766,m+.002,Tn+.028,.79,T-.002,Un-.028,F),k(.33,m+.02,Tn+.04,.766,m+.03,Un-.04,Zr,F),k(.33,m+.03,Tn+.04,.34,T-.04,Un-.04,Zr,F),k(.33,m+.03,Tn+.04,.766,T-.04,Tn+.05,Zr,F),k(.33,m+.03,Un-.05,.766,T-.04,Un-.04,Zr,F),k(.35,T-.045,Tn+.06,.745,T-.04,Tn+.066,ol,F),cn.add(F),Dh.push(F)}const al=new Ar("#ffe1b0",0,1.2,2);al.position.set(.7,.5,3.35),cn.add(al);let Kr=0,ll=0;Dn(cn,10.08,10.3,[-.3,.2,0]);const Ih=z({color:"#dfe7ea",metalness:.75,roughness:.1,envMapIntensity:3});Z.push(Ih),k(.256,1.34,2.95,.262,2.02,3.75,jt,cn),k(.262,1.35,2.96,.268,2.01,3.74,Ih,cn);const cl=_t.z0,hl=_t.z1,ul=_t.y0,Nh=_t.y1,Jr=new fe;k(.07,ul+.015,cl+.01,.25,Nh-.015,hl-.01,U,Jr),k(.249,ul+.05,cl+.05,.251,Nh-.05,hl-.05,jt,Jr);const fl=new ut(new He(.05,.004,.09),U);fl.position.set(.28,ul+.085,(cl+hl)/2),fl.rotation.z=.5,Jr.add(fl),cn.add(Jr);let dl=0;const Wo=new fe,pl=new ut(new je(.041,.041,.145,28),U);pl.rotation.x=Math.PI/2,pl.position.set(.15,.884,We.accessoriesZ),Wo.add(pl);const ml=new ut(new Bn(.14,.125),U);ml.rotation.y=Math.PI/2,ml.position.set(.195,.82,We.accessoriesZ),Wo.add(ml),Dn(Wo,12.05,12.22,[0,0,0]);const Ns=new ut(new Bn(.11,.065),U);{const m=sn("preFront");m.group.updateMatrixWorld(!0);const T=(gt.u0+gt.u1)/2;m.world(T,We.paperBottom-.0325,Se+se+.0015,Ns.position),Ns.quaternion.copy(m.group.getWorldQuaternion(new Vi));const F=new ut(new Bn(.118,.004),jt);m.world(T,We.paperBottom,Se+se+8e-4,F.position),F.quaternion.copy(Ns.quaternion),Ns.userData.slot=F,l.add(Ns,F)}const $r=new fe;k(.12,.18,We.accessoriesZ-.052,.19,.29,We.accessoriesZ+.052,jt,$r),k(.145,.29,We.accessoriesZ-.008,.156,.58,We.accessoriesZ+.003,Vt,$r),l.add($r),$r.visible=!1;const Xo=r.shelves[0]+.01,nr=new fe;{const m=z({color:"#3a3b3f",roughness:.35}),T=Q(new ut(new je(.028,.028,.16,24),m));T.position.set(r.x0+.1,Xo+.08,-.06);const F=Q(new ut(new je(.024,.024,.12,24),U));F.position.set(r.x0+.17,Xo+.06,-.07);const N=Q(new ut(new je(.011,.011,.03,12),ee));N.position.set(r.x0+.1,Xo+.175,-.06),nr.add(T,F,N);const Y=z({color:"#d9d0c3",roughness:1});for(let Lt=0;Lt<3;Lt++){const kt=Q(new ut(new je(.04,.04,.12,20),Y));kt.rotation.x=Math.PI/2,kt.rotation.z=Math.PI/2,kt.position.set(.17,Kt.y0+.016+.04+(Lt===2?.075:0),Kt.z0+.1+(Lt===2?.04:Lt*.085)),nr.add(kt)}const j=Q(new ut(new je(.05,.04,.11,24),jt));j.position.set(.17,Kt.y0+.016+.055,Kt.z1-.12),nr.add(j);const pt=z({color:"#55684f",roughness:.7,side:zn}),ct=qs(5);for(let Lt=0;Lt<8;Lt++){const kt=new ut(new $a(.045,12,8),pt);kt.scale.set(.35,1.5,.12);const bt=Lt/8*Math.PI*2;kt.position.set(.17+Math.cos(bt)*.03,Kt.y0+.19+ct()*.03,Kt.z1-.12+Math.sin(bt)*.03),kt.rotation.set(Math.sin(bt)*.5,bt,Math.cos(bt)*.5),kt.castShadow=!0,nr.add(kt)}}Dn(nr,15.28,15.46,[0,.25,0]);const Qr=[],jr=new fe;{const F=z({color:"#b5a693",roughness:1,side:zn}),N=(Y,j,pt,ct,Lt=.62,kt=.3)=>{const[bt,re]=sn(Y).def.tex,le=(Y==="left"?0:ze)+Se+se,Pe=Y==="left"?ai:ge,hn=new fe;hn.userData.hook=Qr.length;const De=new ut(new Sh(.015,.015+An,48),Yt);De.rotation.y=Math.PI/2,De.position.set(le+3e-4,pt,j);const Ue=Q(new ut(new Eo(.015,48),tt),!1);xt(Ue.geometry,Pe-j,pt,bt,re),Ue.rotation.y=Math.PI/2,Ue.position.set(.0018,0,0);const oe=Q(new ut(new je(.015-5e-4,.015-5e-4,.048+.002,48,1,!0),tt));oe.rotation.z=Math.PI/2,oe.position.set(-.048/2+.001,0,0);const $e=new ut(new Eo(.015,48),jt);$e.rotation.y=Math.PI/2,$e.position.set(le+2e-4,pt,j);const Fe=new fe;Fe.add(Ue,oe),Fe.position.set(le,pt,j);let Jt=null;if(ct){const Be=Q(new ut(new He(.03,Lt,kt),F));Be.position.set(le+.03,pt-Lt/2-.02,j),Be.rotation.z=.04,Be.visible=!1,Jt=Be}hn.add(De,$e,Fe),Jt&&hn.add(Jt),jr.add(hn),Qr.push({root:hn,shaft:Fe,towel:Jt,face:le,open:0,want:!0})};N("left",1.08,1.62,!0),N("left",1.4,1.62,!1),N("preFront",2.78,1.45,!0,.45,.12),Qr[1].want=!1}jr.visible=!1,l.add(jr);const qo=new fe;l.add(qo);{const m=(F,N,Y,j)=>{const pt=new ut(new He(N-F,.006,.01),j);pt.position.set((F+N)/2,Y,-.02),qo.add(pt)};m(r.x0+.03,r.x1-.03,r.y1-.024,Rt);for(const F of r.shelves)m(r.x0+.03,r.x1-.03,F-.016,Rt);const T=new ut(new He(.01,.006,Kt.z1-Kt.z0-.06),ln);T.position.set(ze-.012,Kt.y1-.024,mo+.025),qo.add(T)}const to=new fe,Uh=[];{const m=z({color:"#f3ecdf",roughness:.7}),T=new $a(.008,10,8);T.scale(1,2.2,1);const F=(Y,j,pt,ct,Lt)=>{const kt=Q(new ut(new je(Lt,Lt,ct,20),m));kt.position.set(Y,j+ct/2,pt);const bt=new ut(T,Qt);bt.position.set(Y,j+ct+.016,pt),bt.userData={seed:Math.random()*10,y:j+ct+.016},Uh.push(bt),to.add(kt,bt)},N=oi+.025;F(3.14,N,.24,.07,.022),F(3.14,N,.4,.11,.024),F(3.14,N,.56,.05,.022),F(2.9,.016,1.02,.18,.04),F(3.04,.016,1.1,.12,.035),F(.17,Kt.y0+.016,Kt.z1-.26,.05,.022)}to.visible=!1,l.add(to),(()=>{const m=sn("preFront"),T=ge-mo,F=[m.world(T-.14,go-.12,.0175),m.world(T+.14,go-.12,.0175),m.world(T+.14,go+.12,.0175),m.world(T-.14,go+.12,.0175)],N=new jp(new En().setFromPoints(F),X);return l.add(N),N})();const Us=520,ir={x:.7,y:2.2,z:.5},Fh=new Float32Array(Us*6),gl=qs(9),_l=new Float32Array(Us),Oh=new Float32Array(Us),Yo=new Float32Array(Us);for(let m=0;m<Us;m++)_l[m]=gl()*Math.PI*2,Oh[m]=Math.sqrt(gl()),Yo[m]=.02+gl()*(ir.y-.02);const Bh=m=>{const T=Yo[m],F=(.07+(ir.y-T)*.07)*Oh[m],N=ir.x+Math.cos(_l[m])*F,Y=ir.z+Math.sin(_l[m])*F;Fh.set([N,T,Y,N,Math.min(ir.y,T+.07),Y],m*6)};for(let m=0;m<Us;m++)Bh(m);const vl=new En;vl.setAttribute("position",new Hi(Fh,3));const xl=new za({color:"#6f98a8",transparent:!0,opacity:0,depthWrite:!1});Z.push(xl);const sr=new Nu(vl,xl);sr.frustumCulled=!1,sr.visible=!1,l.add(sr);const ds=new ut(new Eo(.22,32),_e.clone());Z.push(ds.material),ds.rotation.x=-Math.PI/2,ds.position.set(.7,.0175,.5),ds.visible=!1,l.add(ds);const Ve={roller:new fe,lath:new fe,trowel:new fe,float:new fe,sponge:new fe,straight:new fe,grinder:new fe},eo=new fe;{const m=Q(new ut(new je(.032,.032,.24,24),z({color:"#6f8796",roughness:1})));m.rotation.z=Math.PI/2,m.position.z=.034;const T=Q(new ut(new He(.012,.012,.18),jt));T.position.set(.13,-.06,.1),T.rotation.x=.6;const F=Q(new ut(new je(.014,.014,.3,12),ee));F.position.set(.13,-.2,.2),F.rotation.x=.5,Ve.roller.add(m,T,F);const N=Q(new ut(new He(On+.2,.1,.02),Vt));N.rotation.x=-.25,Ve.lath.add(N);const Y=Q(new ut(new He(.28,.12,.003),Vt));Y.position.z=.006;const j=Q(new ut(new He(.15,.03,.03),jt));j.position.z=.05;const pt=Q(new ut(new He(.012,.012,.04),jt));pt.position.z=.025,Ve.trowel.add(Y,j,pt);const ct=Q(new ut(new He(.24,.1,.02),z({color:"#2f3033",roughness:.8})));ct.position.z=.012;const Lt=Q(new ut(new He(.14,.03,.03),ee));Lt.position.z=.05,Ve.float.add(ct,Lt);const kt=Q(new ut(new wo(.17,.11,.05,3,.015),z({color:"#d8b46a",roughness:1})));kt.position.z=.028,Ve.sponge.add(kt);const bt=Q(new ut(new He(2,.025,.09),Me));bt.position.z=.045;const re=Q(new ut(new He(.12,.03,.03),$({color:"#c7e86a"})));re.position.set(0,0,.07),Ve.straight.add(bt,re);const le=Q(new ut(new je(.13,.14,.08,32),z({color:"#c2463a",roughness:.5})));le.rotation.x=Math.PI/2,le.position.z=.06;const Pe=new ut(new je(.12,.12,.012,24),jt);Pe.rotation.x=Math.PI/2;const hn=z({color:"#8c8f93",metalness:.8,roughness:.4});for(let oe=0;oe<4;oe++){const $e=new ut(new He(.22,.02,.004),hn);$e.rotation.z=oe*Math.PI/4,$e.position.z=-.006,eo.add($e)}eo.add(Pe),eo.position.z=.012;const De=Q(new ut(new je(.014,.014,.75,12),jt));De.position.set(0,-.3,.32),De.rotation.x=-.9;const Ue=Q(new ut(new je(.016,.016,.36,12),ee));Ue.rotation.z=Math.PI/2,Ue.position.set(0,-.6,.55),Ve.grinder.add(le,eo,De,Ue),Object.values(Ve).forEach(oe=>{oe.visible=!1,l.add(oe)})}const rr=(m,T,F,N,Y,j=0,pt=0)=>{T.world(F,N,Y,m.position),m.quaternion.copy(T.group.quaternion),(j||pt)&&m.quaternion.multiply(new Vi().setFromEuler(new Wi(j,0,pt))),m.visible=!0},or=new fe;{for(let N=0;N<3;N++){const Y=N/3*Math.PI*2,j=Q(new ut(new je(.008,.008,1,8),jt));j.position.set(Math.cos(Y)*.12,.48,Math.sin(Y)*.12),j.rotation.set(Math.sin(Y)*.24,0,-Math.cos(Y)*.24),or.add(j)}const m=Q(new ut(new wo(.11,.12,.11,2,.015),z({color:"#e0a52a",roughness:.5})));m.position.y=1.03,or.add(m),or.position.set(1.9,0,1.75);const T=[[0,.9985,.0012,an,1.0015,.0013],[.0012,.9985,0,.0013,1.0015,_n]];for(const[N,Y,j,pt,ct,Lt]of T){const kt=new ut(new He(Math.max(1e-4,pt-N),ct-Y,Math.max(1e-4,Lt-j)),ne);kt.position.set((N+pt)/2,(Y+ct)/2,(j+Lt)/2),l.add(kt)}const F=new ut(new He(.003,Ee,1e-4),ne);F.position.set(1.9,Ee/2,.0013),l.add(F)}or.visible=!1,l.add(or);const Ml=90,Li=new Float32Array(Ml*3),ar=new Float32Array(Ml*3),Sl=new En;Sl.setAttribute("position",new Hi(Li,3));const yl=new Kf({color:"#d8d2c6",size:.02,transparent:!0,opacity:0,depthWrite:!1});Z.push(yl);const Zo=new tm(Sl,yl);Zo.visible=!1,l.add(Zo);const Ed=qs(17),zh={cement:{color:"#b9b2a6",rough:.92},epoxy:{color:"#dedad3",rough:.3}},Hh=m=>{Yt.color.set(zh[m].color),Yt.roughness=zh[m].rough};Hh("cement");const Ct={waterproof:"A",corner:null,button:null,nicheLit:!0,roomLit:!0,bathHovered:!1,moodTarget:0,mood:0,showerTarget:0,shower:0,tubTarget:0,basin:0,tub:0,candles:0,door:0,focus:null},bd=new ce("#d6d1c7"),Td=new ce("#ffffff"),El=new ce("#2a2b2f"),bl=new ce("#ffe1b0"),ps=[{p:[4.8,3.1,5.2],t:[1.4,.55,1.2]},{p:[2.6,1.7,2.8],t:[.7,0,.45]},{p:[2.7,1.95,2.9],t:[.45,.9,.45]},{p:[4.7,2.9,5.1],t:[1.4,.95,1.1]},{p:[3.4,1.4,4.2],t:[1.7,.05,2]},{p:[4.5,2.05,5.1],t:[1.3,1.15,1]},{p:[1.25,1.35,1.05],t:[.25,1.15,1.78]},{p:[3.5,1.6,3.4],t:[1.3,1,.6]},{p:[3.4,1.7,3.3],t:[.8,1.05,1.1]},{p:[1,1.12,2.06],t:[.25,1.02,2.3]},{p:[...Ms[0].camera],t:[...Ms[0].target]},{p:[2.4,2.25,2.4],t:[.12,2.15,2.32]},{p:[...Ms[1].camera],t:[...Ms[1].target]},{p:[...Ms[2].camera],t:[...Ms[2].target]},{p:[1.75,1.65,2],t:[.02,1.45,1.2]},{p:[4.9,2.25,5.3],t:[1.35,.95,1.25]}],Zi=ps.map(m=>({p:[...m.p],t:[...m.t]}));Zi[0]={p:[3.6,1.9,2.9],t:[1.5,1.1,.3]},Zi[3]={p:[2.8,1.7,2.6],t:[.6,1.1,.6]},Zi[5]={p:[1.6,1.6,2.6],t:[.25,1.75,2.3]},Zi[7]={p:[2.8,1.4,2.4],t:[1.9,.9,.1]},Zi[8]={p:[2.9,1.4,2.2],t:[2.3,.6,.3]};for(const m of Ms)Zi.push({p:[...m.camera],t:[...m.target]});Zi[Wn+4]={p:[r.x0+pe/2+.35,r.y1+.15,1.2],t:[r.x0+pe/2,r.y0+ni/2,0]},Zi[Wn+5]={p:[r.x0+pe/2+.25,(r.shelves[0]??r.y0)+.18,.85],t:[r.x0+pe/2,r.shelves[0]??r.y0,-.02]};const Ko=new I,Gh=new I,Ki=new I,Ji=new I,Jo=new I(...ps[0].p),$o=new I(...ps[0].t);let no=1;const $n={x:0,y:0,sx:0,sy:0},kh=new I(0,1,0),Vh=(m,T,F)=>{if(F&&Ct.focus!==null){const re=Zi[Ct.focus];Ji.set(...re.t),Ki.set(...re.p);const le=Ko.copy(Ki).sub(Ji);le.applyAxisAngle(kh,Math.sin(T*.15)*.03+$n.sx*.05),le.y+=$n.sy*.12,le.multiplyScalar(Math.min(no,1.35)),Ki.copy(Ji).add(le);return}const N=Math.min(Wn-1,Math.floor(m)),Y=m-N,j=N===ii.handover?ps[ii.handover]:ps[Math.max(0,N-1)],pt=ps[N],ct=N===0?1:Vn(Oe(Y,0,N===9?.14:.32));if(Ji.set(...j.t).lerp(Gh.set(...pt.t),ct),Ki.set(...j.p).lerp(Ko.set(...pt.p),ct),N===9){const re=Vn(Oe(Y,.86,1));Ji.lerp(Gh.set(...ps[ii.handover].t),re),Ki.lerp(Ko.set(...ps[ii.handover].p),re)}const Lt=Ko.copy(Ki).sub(Ji);let kt=Math.sin(T*.12)*.025;N===Wn-1&&(kt+=-.22+.5*Vn(Oe(Y,.25,1))),N===6&&(kt+=-.12+.24*Vn(Y)),Lt.applyAxisAngle(kh,kt+$n.sx*.06),Lt.y+=$n.sy*.25;const bt=N===6||N===9||N>=ii.basin&&N<=ii.hooks;Lt.multiplyScalar(bt?Math.min(no,1.3):no),Ki.copy(Ji).add(Lt)},ms=(m,T,F,N=!0)=>{let Y=null;for(const j of m){const pt=N?Oe(T,j.t0,j.t1):0;j.mesh.visible=pt>0,j.mesh.scale.y=Math.max(.001,Vn(pt)),pt>0&&pt<1&&(Y={w:j,p:pt})}if(F&&Y){const{w:j,p:pt}=Y,ct=j.rect,Lt=ct.u0+(ct.u1-ct.u0)*(.5+.38*Math.sin(pt*Math.PI*7)),kt=ct.v0+(ct.v1-ct.v0)*Vn(pt);return rr(F,j.surf,Lt,kt,.004),!0}return!1},wd=m=>m<6.04?null:m<7&&Ct.corner===null?m<6.5?"trim":"jolly":Ct.corner??"jolly",Ad=m=>zd(m,Ct.button),Rd=(m,T,F,N)=>{const Y=ns(m,.04,.38,.04);or.visible=Y>0,ne.opacity=Y*(.75+.25*Math.sin(F*20));const j=Oe(m,.06,.34);if(j>0&&j<1)if(j<.5){const nt=j/.5;rr(Ve.straight,sn("floor"),1.7+Math.sin(nt*Math.PI)*.2,.5+nt*1.6,0,0,(nt-.5)*.9)}else{const nt=(j-.5)/.5;rr(Ve.straight,sn("back"),.3+nt*2.4,1.15,0,0,Math.PI/2)}else Ve.straight.visible=!1;ms(H.sand,m,Ve.grinder)||(Ve.grinder.visible=!1),eo.rotation.z=F*40;const ct=ns(m,.38,.6,.03);if(Zo.visible=ct>0&&Ve.grinder.visible,yl.opacity=ct*.7,Zo.visible){for(let nt=0;nt<Ml;nt++){let Ut=ar[nt*3+1];if(Ut-=T*(.6+nt%5*.15),Ut<=0){const ue=Ed()*Math.PI*2;Li[nt*3]=Ve.grinder.position.x+Math.cos(ue)*.15,Li[nt*3+1]=.02,Li[nt*3+2]=Ve.grinder.position.z+Math.sin(ue)*.15,ar[nt*3]=Math.cos(ue)*.25,ar[nt*3+2]=Math.sin(ue)*.25,Ut=1}ar[nt*3+1]=Ut,Li[nt*3]=Li[nt*3]+ar[nt*3]*T,Li[nt*3+1]=Li[nt*3+1]+T*.12,Li[nt*3+2]=Li[nt*3+2]+ar[nt*3+2]*T}Sl.getAttribute("position").needsUpdate=!0}const Lt=ms(H.primer,m,Ve.roller),kt=Oe(m,iu.from,iu.to);ye.visible=kt>0,ye.position.y=(1-Zn(kt))*.9;const bt=Oe(m,ia.from,ia.to);it.visible=bt>0,it.scale.y=Math.max(.001,Zn(bt)),sn("tubFront").group.visible=m>=ia.to,sn("tubSide").group.visible=m>=ia.to;const re=Oe(m,1.04,1.28);Ot.visible=re>0,Ot.position.y=(1-Zn(re))*.9;const le=Oe(m,1.28,1.6);Je.visible=le>0,Je.scale.y=Math.max(.01,Zn(le));const Pe=Oe(m,1.52,1.86);Ve.lath.visible=Pe>0&&Pe<1,Ve.lath.position.set(On/2,.03,1.15-Vn(Pe)*1),Ve.lath.rotation.y=Math.sin(Pe*Math.PI*6)*.04;const hn=ns(m,1.58,2,.08);w.opacity=hn*.95,bn.forEach(nt=>{nt.visible=hn>0;const Ut=(F*.35+nt.userData.phase)%1;nt.position.set(nt.userData.x,.006-.012*(1-Ut)*0,1.05-Ut*.82),nt.scale.setScalar(.9+.2*Math.sin(Ut*Math.PI))});for(const nt of Bt){const Ut=Oe(m,nt.t0,nt.t1);nt.obj.visible=Ut>0&&m<ii.floor;const ue=Math.max(.001,Zn(Ut));nt.axis==="x"?nt.obj.scale.set(ue,1,1):nt.obj.scale.setScalar(ue)}const De=ms(H.wp1,m,Ve.roller),Ue=ms(H.wp1Floor,m,Ve.float),oe=Ct.waterproof==="A",$e=ms(H.wpA,m,oe?Ve.roller:null,oe),Jt=ms(H.wpAFloor,m,oe?Ve.float:null,oe)||Ue;ms(H.wpB,m,null,!oe);const Be=ms(H.wpBand,m,oe?null:Ve.roller,!oe);for(const nt of Pn){const Ut=oe?0:Oe(m,nt.t0,nt.t1);nt.obj.visible=Ut>0&&m<ii.floor+.4,nt.obj.scale.set(Math.max(.001,Zn(Ut)),1,1)}!Lt&&!$e&&!De&&!Be&&(Ve.roller.visible=!1);let Le=null;for(const nt of ui){const Ut=Oe(m,nt.t0-nt.lead,nt.t0+nt.dur*.15);nt.patch.visible=Ut>0,nt.patch.scale.x=Math.max(.001,Zn(Ut)),Ut>0&&Ut<1&&(Le={t:nt,p:Ut});const ue=Oe(m,nt.t0,nt.t0+nt.dur);if(nt.mesh.visible=ue>0,ue>0){const Yn=Vn(Oe(ue,.3,.8)),ur=1-Zn(Oe(ue,.55,1));nt.mesh.rotation.set((1-Yn)*.18,(1-Yn)*Math.PI,0),nt.mesh.position.z=Se+se/2+ur*.42}const qn=Oe(m,nt.g0,nt.g0+.09);nt.grout.visible=qn>0,nt.grout.scale.setScalar(Math.max(.001,Zn(qn)))}if(Le&&m>=4&&m<6){const{t:nt,p:Ut}=Le,ue=nt.rect,qn=(ue.v0+ue.v1)/2+Math.sin(Ut*Math.PI*4)*(ue.v1-ue.v0)*.2;rr(Ve.trowel,nt.surf,ue.u0+(ue.u1-ue.u0)*Ut,qn,.012,.55,.2)}else Ve.trowel.visible=!1;const me=Oe(m,4.9,4.98);rn.visible=me>0,rn.position.y=(1-Zn(me))*.3;const Qe=Hd(m,Ct.focus,N,Wn+1),In=Qe.cabinetOpen?1:0;if(P.visible=m>=ii.cabinet,Ct.door+=(In-Ct.door)*Math.min(1,T*4),pi&&m>5.9){const nt=pi.rect,Ut=nt.u1-nt.u0,ue=Vn(Ct.door)*1.25;pi.mesh.rotation.set(0,ue,0),pi.mesh.position.x=nt.u1-Ut/2*Math.cos(ue),pi.mesh.position.z=Se+se/2+Ut/2*Math.sin(ue),pi.patch.visible=!1,pi.grout.visible=!1}for(const nt of qi){const{tile:Ut,detail:ue}=nt;if(m<5.9)continue;const qn=ue===Wn+1&&Qe.accessoriesOpen||N&&Ct.focus===ue?1.1:0;if(nt.angle+=(qn-nt.angle)*Math.min(1,T*4),nt.tilt){const Yn=nt.angle*.75,ur=(Ut.rect.v1-Ut.rect.v0)/2;Ut.mesh.rotation.set(Yn,0,0),Ut.mesh.position.y=Ut.rect.v0+ur*Math.cos(Yn),Ut.mesh.position.z=Se+se/2+ur*Math.sin(Yn)}else{Ut.mesh.rotation.y=nt.angle;const Yn=(Ut.rect.u1-Ut.rect.u0)/2;Ut.mesh.position.x=Ut.rect.u1-Yn*Math.cos(Ut.mesh.rotation.y),Ut.mesh.position.z=Se+se/2+Yn*Math.sin(Ut.mesh.rotation.y)}Ut.patch.visible=!1,Ut.grout.visible=!1}const _s=qi.some(nt=>nt.detail===Wn+1&&nt.angle>.15);$r.visible=_s;const Os=wd(m),so=Oe(m,6.04,6.16);Yi.visible=Os==="trim",Yi.scale.y=Math.max(.001,m<6.5?Zn(so):1),us.visible=Os==="jolly",S.visible=Os==="trim",O.visible=Os==="jolly";const Di=Ad(m);Object.keys(Pi).forEach(nt=>Pi[nt].group.visible=nt===Di);let ea=ns(m,10.72,10.84,.05);if(m>=9&&m<10){const nt=Gd.indexOf(Di),Ut=Ct.button?9:su[nt],ue=Ct.button?9.86:Math.min(9.86,su[nt+1]);ea=ns(m,Ut+(ue-Ut)*.55,Ut+(ue-Ut)*.75,.03)}Pi[Di].press.position.z=-ea*.004,X.opacity=ns(m,9.04,9.95,.08)*(.55+.45*Math.sin(F*3));const gi=Oe(m,7.06,7.86);if(gi>0&&gi<1){const nt=gi<.55,Ut=nt?gi/.55:(gi-.55)/.45,ue=sn(nt?"back":"left"),qn=nt?.2+Ut*2.8:.3+Ut*1.3,Yn=(nt&&qn>fn?.9:.3)+Math.abs(Math.sin(Ut*Math.PI*5))*1.4;rr(Ve.float,ue,qn,Yn,.017,0,.7)}else Jt||(Ve.float.visible=!1);const vs=Oe(m,7.1,7.55)*(1-Oe(m,8.1,8.75));tt.roughness=.14+.62*vs,tt.clearcoat=.55*(1-vs),tt.color.copy(Td).lerp(bd,vs);const xs=Oe(m,8.06,8.78);if(xs>0&&xs<1){const nt=xs<.6,Ut=nt?xs/.6:(xs-.6)/.4,ue=sn(nt?"back":"left"),qn=(nt?.2+Ut*2.8:.3+Ut*1.3)+Math.cos(F*9)*.06,Yn=(nt&&qn>fn?1.4:1)+Math.sin(Ut*Math.PI*4)*.5+Math.sin(F*9)*.05;rr(Ve.sponge,ue,qn,Yn,.016)}else Ve.sponge.visible=!1;const Al=Oe(m,8.45,9);D.intensity=ns(m,8.45,9,.1)*6,D.position.set(-.2+Al*3.4,1.5,.7);for(const nt of xn){const Ut=Oe(m,nt.t0,nt.t1);nt.obj.visible=Ut>0;const ue=Zn(Ut);nt.obj.position.set(nt.base.x+nt.from[0]*(1-ue),nt.base.y+nt.from[1]*(1-ue),nt.base.z+nt.from[2]*(1-ue))}Wo.visible=_s;{const nt=m-ii.basin,Ut=nt>=.1&&nt<.4||N&&(Ct.focus===ii.basin||Ct.focus===Wn)?1:0;Kr+=(Ut-Kr)*Math.min(1,T*3),Dh.forEach((Yn,ur)=>{Yn.position.x=Kr*(ur===0?.34:.26)}),al.intensity=Kr*1.6,ol.color.copy(El).lerp(bl,Kr);const ue=N&&Ct.focus===Wn+6;ll=ue?Math.min(1,ll+T/2):0;const qn=ue?Vn(ll):Math.min(Vn(Oe(nt,.3,.62)),1-Vn(Oe(nt,.84,.97)));Yr.position.y=Vn(Oe(qn,0,.35))*.085,Yr.position.x=Vn(Oe(qn,.35,1))*.3,Yr.rotation.z=0}{const nt=N&&Ct.focus===Wn+7?1:0;dl+=(nt-dl)*Math.min(1,T*2.5),Jr.position.x=Vn(Oe(dl,.4,1))*.22}const Rl=qi.some(nt=>nt.tilt&&nt.angle>.05);Ns.visible=m>=12.2&&!Rl,Ns.userData.slot.visible=m>=6,nr.visible=Qe.decorationsVisible,jr.visible=m>=ii.hooks;for(const nt of Qr){const Ut=nt.want&&m>=ii.hooks+.3?1:0;nt.open+=(Ut-nt.open)*Math.min(1,T*6);const ue=nt.open+Math.sin(nt.open*Math.PI)*.15;nt.shaft.position.x=nt.face+ue*.048,nt.towel&&(nt.towel.visible=nt.open>.9)}qo.visible=m>=5.9,un.opacity=.2*Zn(Oe(m,15.04,15.22)),mi.visible=m<15.1;const Ei=Ct.mood,Cl=Math.max(Vn(Oe(m,10,10.2)),Ei)*(!N||Ct.roomLit?1:0);E.intensity=Cl*(9+Ei*3),C.intensity=Cl*(7+Ei*5),R.intensity=Cl*(3+Ei*2);const Pl=hM(Ct.nicheLit,m>=5.9),eu=Pl.shower;v.intensity=eu*(1.6+Ei*1.8),Rt.color.copy(El).lerp(bl,eu),b.intensity=Pl.wc*(1.4+Ei*1.6),ln.color.copy(El).lerp(bl,Pl.wc);const na=N&&!Ct.roomLit?.12:1;f.intensity=1.75*(1-.86*Ei)*na,y.intensity=.45*(1-.9*Ei)*na,g.intensity=.25*(1-.6*Ei)*Math.max(na,.4),l.environmentIntensity=.45*(1-.72*Ei)*Math.max(na,.3),d.copy(h).lerp(p,Ei);const Dd=N&&(Ct.moodTarget>0||Ct.tubTarget>0)?1:0;Ct.candles+=(Dd-Ct.candles)*Math.min(1,T*3),to.visible=Ct.candles>.02,to.scale.setScalar(1),Uh.forEach(nt=>{const Ut=nt.userData.seed,ue=.85+.15*Math.sin(F*13+Ut)+.08*Math.sin(F*31+Ut*2);nt.scale.set(Ct.candles*ue,Ct.candles*(.8+.4*ue),Ct.candles*ue)}),V.intensity=Ct.candles*(1.4+.35*Math.sin(F*11)+.2*Math.sin(F*23));const nu=N&&dc(Ct.tubTarget>0,Ct.bathHovered,N)>0?1:0,Ll=Math.max(ns(m,15.5,15.8,.04),N?Math.max(Ct.shower,nu):0);if(sr.visible=Ll>.01,xl.opacity=Ll*.85,ds.visible=sr.visible,ds.material.opacity=Ll*.35,ds.scale.setScalar(.8+.08*Math.sin(F*6)),sr.visible){for(let nt=0;nt<Us;nt++){let Ut=Yo[nt]-T*(2.6+nt%7*.12);Ut<.02&&(Ut+=ir.y-.02),Yo[nt]=Ut,Bh(nt)}vl.getAttribute("position").needsUpdate=!0}const Dl=N?Ct.tub:0;Mn.visible=Dl>.005,Mn.position.y=.16+Zn(Dl)*.32+Math.sin(F*1.7)*.0012,_e.opacity=Math.min(.6,Dl*4);const Il=dc(Ct.tubTarget>0,Ct.bathHovered,N)>0&&Ct.tub<.995;if(i.dataset.bathFilling=String(Il),i.dataset.bathHovered=String(Ct.bathHovered),i.dataset.waterLevel=Ct.tub.toFixed(3),i.dataset.roomLit=String(Ct.roomLit),i.dataset.nichesLit=String(Ct.nicheLit),en.visible=Il,Il){const Ut=Mn.visible?Mn.position.y:.16;en.scale.y=.8-Ut,en.position.set(2.35,(.8+Ut)/2,.19)}Ct.basin+=(nu-Ct.basin)*Math.min(1,T*1.2),er.visible=Ct.basin>.02,rl.opacity=Math.min(.6,Ct.basin*2),er.visible&&(er.scale.y=1.018-.79,er.position.set(.487,(1.018+.79)/2,3.343)),Is.visible=Ct.basin>.02,Is.position.y=.742+Zn(Math.min(1,Ct.basin))*.042,sl.opacity=Math.min(.55,Ct.basin*2.2)};let Wh=new Map,Xh=new Map;const Cd={niche:[r.x0+pe/2,Xo+.01,-.02]},Pd={},yi=new I,qh=(m,T,F,N,Y,j=!1)=>{if(yi.set(...T).project(M),j&&yi.z<=1){const Lt=1-24/N;yi.x=Math.max(-Lt,Math.min(Lt,yi.x)),yi.y=Math.max(-.9,Math.min(.9,yi.y))}if(F<=.001||yi.z>1||Math.abs(yi.x)>1.05||Math.abs(yi.y)>1.05){m.style.opacity!=="0"&&(m.style.opacity="0"),m.style.pointerEvents!=="none"&&(m.style.pointerEvents="none");return}const pt=(yi.x*.5+.5)*N,ct=(-yi.y*.5+.5)*Y;m.style.opacity=String(F),m.style.transform=`translate3d(${pt.toFixed(1)}px, ${ct.toFixed(1)}px, 0)`};let Qo=0;const Ld=(m,T,F,N,Y)=>{for(const j of Od){const pt=Wh.get(j.id);if(!pt)continue;let ct=ns(m,j.from,j.to,.06);j.id==="trim"&&Ct.corner!==null&&(ct=m>=6&&m<7&&Ct.corner==="trim"?1:0),j.id==="jolly"&&Ct.corner!==null&&(ct=m>=6&&m<7&&Ct.corner==="jolly"?1:0),j.id.startsWith("btn-")&&Ct.button!==null&&(ct=m>=9&&m<10&&j.id===`btn-${Ct.button}`?1:0),j.variant&&j.variant!==Ct.waterproof&&(ct=0),j.id.startsWith("wp")&&T&&(ct=0),qh(pt,Cd[j.id]??j.pos,ct,N,Y)}Qo+=((T&&!cr?1:0)-Qo)*Math.min(1,F*4);for(const j of[...Bd,...Ms.map((pt,ct)=>({stage:Wn+ct,pos:[...pt.pos]}))]){const pt=Xh.get(j.stage);if(!pt)continue;const ct=Ct.focus!==null&&Ct.focus!==j.stage?Qo*.35:Qo;qh(pt,Pd[j.stage]??j.pos,ct,N,Y,!0),pt.style.pointerEvents=ct>.3?"auto":"none"}};let gs=1,Fs=1;const Yh=()=>{gs=Math.max(1,i.clientWidth),Fs=Math.max(1,i.clientHeight),c.setSize(gs,Fs,!1);const m=gs/Fs;M.aspect=m,M.fov=m<.8?50:40,no=(m>=1.45?1:Math.pow(1.45/m,m<.8?.8:.7))*(m>=.8?1.15:1);const T=m<.8?Fs*.13:0,F=gs>=1024&&m>1.1?-gs*.07:0;T||F?M.setViewOffset(gs,Fs,F,T,gs,Fs):M.clearViewOffset(),M.updateProjectionMatrix()},Zh=new ResizeObserver(Yh);Zh.observe(i),Yh();let Qn=0,lr=!s,cr=!1,Fn=null;const hr=m=>{lr!==m&&(lr=m,e.onPlayingChange(m))},Kh=()=>{Fn&&(Fn.dispose(),Fn=null,Jo.copy(M.position))},jo=new Qm,ta=new mt,Jh=m=>{if(m.pointerType!=="mouse")return;const T=i.getBoundingClientRect();if($n.x=(m.clientX-T.left)/T.width*2-1,$n.y=(m.clientY-T.top)/T.height*2-1,Qn>=1&&m.target===t){ta.set($n.x,-$n.y),jo.setFromCamera(ta,M);const F=jo.intersectObjects([ye,...di.filter(N=>N.surf.def.id.startsWith("tub")).map(N=>N.mesh)],!0);Ct.bathHovered=F.length>0}else Ct.bathHovered=!1},$h=()=>{Ct.bathHovered=!1},Qh=m=>{if(Qn<1||m.target!==t)return;const T=i.getBoundingClientRect();ta.set((m.clientX-T.left)/T.width*2-1,-((m.clientY-T.top)/T.height*2-1)),jo.setFromCamera(ta,M);const F=jo.intersectObjects(jr.children,!0)[0];let N=F?F.object:null;for(;N&&N.userData.hook===void 0;)N=N.parent;const Y=N?Qr[N.userData.hook]:void 0;Y&&(Y.want=!Y.want)};i.addEventListener("pointerup",Qh),i.addEventListener("pointermove",Jh),i.addEventListener("pointerleave",$h);let Tl=performance.now();const wl={t:0},jh=m=>{const T=Math.max(0,Math.min(.1,(m-Tl)/1e3));Tl=m,wl.t+=T,lr&&!cr&&(Qn=Math.min(1,Qn+T/Nd),Qn>=1&&hr(!1));const F=Qn>=1,N=Math.max(0,Math.min(Ud(Qn),Wn-1e-4)),Y=Math.min(1,T*1.6);Ct.mood+=((F?Ct.moodTarget:0)-Ct.mood)*Y,Ct.shower+=(Ct.showerTarget-Ct.shower)*Math.min(1,T*3);const j=dc(Ct.tubTarget>0,Ct.bathHovered,F);if(Ct.tub=j>Ct.tub?Math.min(j,Ct.tub+T*.12):Math.max(j,Ct.tub-T*.25),Rd(N,T,wl.t,F),$n.sx+=($n.x-$n.sx)*Math.min(1,T*3),$n.sy+=($n.y-$n.sy)*Math.min(1,T*3),cr&&Fn)Fn.update();else{Vh(N,wl.t,F);const pt=1-Math.exp(-T*(Ct.focus!==null?2.4:3.2));Jo.lerp(Ki,pt),$o.lerp(Ji,pt),M.position.copy(Jo),M.lookAt($o)}c.render(l,M),Ld(N,F,T,gs,Fs),e.onFrame(Qn)},tu=new IntersectionObserver(m=>{m.some(F=>F.isIntersecting)?(Tl=performance.now(),c.setAnimationLoop(jh)):c.setAnimationLoop(null)});tu.observe(i),c.setAnimationLoop(jh),Vh(0,0,!1),Jo.copy(Ki),$o.copy(Ji),e.onPlayingChange(lr),requestAnimationFrame(()=>{i.dataset.sceneReady="true",e.onReady()});const io={play(){cr&&io.setFreeView(!1),Qn>=1&&(Qn=0,Ct.focus=null),hr(!0)},pause(){hr(!1)},toggle(){lr?io.pause():io.play()},seek(m){Qn=nl(m),Qn<1&&(Ct.focus=null),hr(!1)},seekStage(m){const T=Math.max(0,Math.min(Wn-1,m));Ct.focus=null,Qn=Fd(T+.001),hr(!0)},getProgress:()=>Qn,isPlaying:()=>lr,setGrout:Hh,setWaterproof(m){Ct.waterproof=m},setDrainCover(m){ke.visible=m==="grate",Te&&(Te.visible=m==="tile")},setCorner(m){Ct.corner=m},setButton(m){Ct.button=m},setNicheLight(m){Ct.nicheLit=m},setMood(m){Ct.moodTarget=m?1:0},setRoomLight(m){Ct.roomLit=m},setShower(m){Ct.showerTarget=m?1:0},setTub(m){Ct.tubTarget=m?1:0},focus(m){cr&&io.setFreeView(!1),Ct.focus=m},setFreeView(m){cr=m,m?(hr(!1),Fn=new Jx(M,t),Fn.target.copy($o),Fn.enableDamping=!0,Fn.dampingFactor=.08,Fn.enablePan=!1,Fn.minDistance=.8,Fn.maxDistance=9*no,Fn.minPolarAngle=.2,Fn.maxPolarAngle=1.48,Fn.minAzimuthAngle=.02,Fn.maxAzimuthAngle=1.55,Fn.update()):Kh()},setLabelElements(m){Wh=m},setHotspotElements(m){Xh=m},dispose(){c.setAnimationLoop(null),tu.disconnect(),Zh.disconnect(),i.removeEventListener("pointermove",Jh),i.removeEventListener("pointerup",Qh),i.removeEventListener("pointerleave",$h),Kh(),l.traverse(m=>{const T=m;T.geometry&&T.geometry.dispose()}),Z.forEach(m=>m.dispose()),c.dispose()}};return io}export{MM as createBathroomScene};
