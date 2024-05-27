(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=l(n);fetch(n.href,o)}})();const Pe=(e,t)=>e===t,A=Symbol("solid-proxy"),E={equals:Pe};let Y=le;const q=1,j=2,J={owned:null,cleanups:null,context:null,owner:null};var m=null;let F=null,$e=null,p=null,h=null,y=null,N=0;function Se(e,t){const l=p,i=m,n=e.length===0,o=t===void 0?i:t,r=n?J:{owned:null,cleanups:null,context:o?o.context:null,owner:o},s=n?e:()=>e(()=>M(()=>D(r)));m=r,p=null;try{return C(s,!0)}finally{p=l,m=i}}function Z(e,t){t=t?Object.assign({},E,t):E;const l={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=n=>(typeof n=="function"&&(n=n(l.value)),te(l,n));return[ee.bind(l),i]}function P(e,t,l){const i=K(e,t,!1,q);S(i)}function Ce(e,t,l){Y=je;const i=K(e,t,!1,q);i.user=!0,y?y.push(i):S(i)}function L(e,t,l){l=l?Object.assign({},E,l):E;const i=K(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=l.equals||void 0,S(i),ee.bind(i)}function M(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function ke(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function ee(){if(this.sources&&this.state)if(this.state===q)S(this);else{const e=h;h=null,C(()=>O(this),!1),h=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function te(e,t,l){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&C(()=>{for(let n=0;n<e.observers.length;n+=1){const o=e.observers[n],r=F&&F.running;r&&F.disposed.has(o),(r?!o.tState:!o.state)&&(o.pure?h.push(o):y.push(o),o.observers&&ie(o)),r||(o.state=q)}if(h.length>1e6)throw h=[],new Error},!1)),t}function S(e){if(!e.fn)return;D(e);const t=N;Ae(e,e.value,t)}function Ae(e,t,l){let i;const n=m,o=p;p=m=e;try{i=e.fn(t)}catch(r){return e.pure&&(e.state=q,e.owned&&e.owned.forEach(D),e.owned=null),e.updatedAt=l+1,oe(r)}finally{p=o,m=n}(!e.updatedAt||e.updatedAt<=l)&&(e.updatedAt!=null&&"observers"in e?te(e,i):e.value=i,e.updatedAt=l)}function K(e,t,l,i=q,n){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:m?m.context:null,pure:l};return m===null||m!==J&&(m.owned?m.owned.push(o):m.owned=[o]),o}function z(e){if(e.state===0)return;if(e.state===j)return O(e);if(e.suspense&&M(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<N);)e.state&&t.push(e);for(let l=t.length-1;l>=0;l--)if(e=t[l],e.state===q)S(e);else if(e.state===j){const i=h;h=null,C(()=>O(e,t[0]),!1),h=i}}function C(e,t){if(h)return e();let l=!1;t||(h=[]),y?l=!0:y=[],N++;try{const i=e();return Ee(l),i}catch(i){l||(y=null),h=null,oe(i)}}function Ee(e){if(h&&(le(h),h=null),e)return;const t=y;y=null,t.length&&C(()=>Y(t),!1)}function le(e){for(let t=0;t<e.length;t++)z(e[t])}function je(e){let t,l=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[l++]=i:z(i)}for(t=0;t<l;t++)z(e[t])}function O(e,t){e.state=0;for(let l=0;l<e.sources.length;l+=1){const i=e.sources[l];if(i.sources){const n=i.state;n===q?i!==t&&(!i.updatedAt||i.updatedAt<N)&&z(i):n===j&&O(i,t)}}}function ie(e){for(let t=0;t<e.observers.length;t+=1){const l=e.observers[t];l.state||(l.state=j,l.pure?h.push(l):y.push(l),l.observers&&ie(l))}}function D(e){let t;if(e.sources)for(;e.sources.length;){const l=e.sources.pop(),i=e.sourceSlots.pop(),n=l.observers;if(n&&n.length){const o=n.pop(),r=l.observerSlots.pop();i<n.length&&(o.sourceSlots[r]=i,n[i]=o,l.observerSlots[i]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)D(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Le(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function oe(e,t=m){throw Le(e)}let ze=!1;function g(e,t){return M(()=>e(t||{}))}function k(){return!0}const U={get(e,t,l){return t===A?l:e.get(t)},has(e,t){return t===A?!0:e.has(t)},set:k,deleteProperty:k,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:k,deleteProperty:k}},ownKeys(e){return e.keys()}};function I(e){return(e=typeof e=="function"?e():e)?e:{}}function Oe(){for(let e=0,t=this.length;e<t;++e){const l=this[e]();if(l!==void 0)return l}}function R(...e){let t=!1;for(let r=0;r<e.length;r++){const s=e[r];t=t||!!s&&A in s,e[r]=typeof s=="function"?(t=!0,L(s)):s}if(t)return new Proxy({get(r){for(let s=e.length-1;s>=0;s--){const a=I(e[s])[r];if(a!==void 0)return a}},has(r){for(let s=e.length-1;s>=0;s--)if(r in I(e[s]))return!0;return!1},keys(){const r=[];for(let s=0;s<e.length;s++)r.push(...Object.keys(I(e[s])));return[...new Set(r)]}},U);const l={},i=Object.create(null);for(let r=e.length-1;r>=0;r--){const s=e[r];if(!s)continue;const a=Object.getOwnPropertyNames(s);for(let c=a.length-1;c>=0;c--){const u=a[c];if(u==="__proto__"||u==="constructor")continue;const d=Object.getOwnPropertyDescriptor(s,u);if(!i[u])i[u]=d.get?{enumerable:!0,configurable:!0,get:Oe.bind(l[u]=[d.get.bind(s)])}:d.value!==void 0?d:void 0;else{const f=l[u];f&&(d.get?f.push(d.get.bind(s)):d.value!==void 0&&f.push(()=>d.value))}}}const n={},o=Object.keys(i);for(let r=o.length-1;r>=0;r--){const s=o[r],a=i[s];a&&a.get?Object.defineProperty(n,s,a):n[s]=a?a.value:void 0}return n}function Te(e,...t){if(A in e){const n=new Set(t.length>1?t.flat():t[0]),o=t.map(r=>new Proxy({get(s){return r.includes(s)?e[s]:void 0},has(s){return r.includes(s)&&s in e},keys(){return r.filter(s=>s in e)}},U));return o.push(new Proxy({get(r){return n.has(r)?void 0:e[r]},has(r){return n.has(r)?!1:r in e},keys(){return Object.keys(e).filter(r=>!n.has(r))}},U)),o}const l={},i=t.map(()=>({}));for(const n of Object.getOwnPropertyNames(e)){const o=Object.getOwnPropertyDescriptor(e,n),r=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let s=!1,a=0;for(const c of t)c.includes(n)&&(s=!0,r?i[a][n]=o.value:Object.defineProperty(i[a],n,o)),++a;s||(r?l[n]=o.value:Object.defineProperty(l,n,o))}return[...i,l]}const Ne=new Set(["innerHTML","textContent","innerText","children"]),Me=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),De=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Be={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Fe(e,t,l){let i=l.length,n=t.length,o=i,r=0,s=0,a=t[n-1].nextSibling,c=null;for(;r<n||s<o;){if(t[r]===l[s]){r++,s++;continue}for(;t[n-1]===l[o-1];)n--,o--;if(n===r){const u=o<i?s?l[s-1].nextSibling:l[o-s]:a;for(;s<o;)e.insertBefore(l[s++],u)}else if(o===s)for(;r<n;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===l[o-1]&&l[s]===t[n-1]){const u=t[--n].nextSibling;e.insertBefore(l[s++],t[r++].nextSibling),e.insertBefore(l[--o],u),t[n]=l[o]}else{if(!c){c=new Map;let d=s;for(;d<o;)c.set(l[d],d++)}const u=c.get(t[r]);if(u!=null)if(s<u&&u<o){let d=r,f=1,b;for(;++d<n&&d<o&&!((b=c.get(t[d]))==null||b!==u+f);)f++;if(f>u-s){const x=t[r];for(;s<u;)e.insertBefore(l[s++],x)}else e.replaceChild(l[s++],t[r++])}else r++;else t[r++].remove()}}}const G="_$DX_DELEGATE";function Ie(e,t,l,i={}){let n;return Se(o=>{n=o,t===document?e():_(t,e(),t.firstChild?null:void 0,l)},i.owner),()=>{n(),t.textContent=""}}function v(e,t,l){let i;const n=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},o=()=>(i||(i=n())).cloneNode(!0);return o.cloneNode=o,o}function ne(e,t=window.document){const l=t[G]||(t[G]=new Set);for(let i=0,n=e.length;i<n;i++){const o=e[i];l.has(o)||(l.add(o),t.addEventListener(o,Ye))}}function H(e,t,l){l==null?e.removeAttribute(t):e.setAttribute(t,l)}function Ue(e,t,l,i){i==null?e.removeAttributeNS(t,l):e.setAttributeNS(t,l,i)}function He(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ve(e,t,l,i){if(i)Array.isArray(l)?(e[`$$${t}`]=l[0],e[`$$${t}Data`]=l[1]):e[`$$${t}`]=l;else if(Array.isArray(l)){const n=l[0];e.addEventListener(t,l[0]=o=>n.call(e,l[1],o))}else e.addEventListener(t,l)}function Ke(e,t,l={}){const i=Object.keys(t||{}),n=Object.keys(l);let o,r;for(o=0,r=n.length;o<r;o++){const s=n[o];!s||s==="undefined"||t[s]||(W(e,s,!1),delete l[s])}for(o=0,r=i.length;o<r;o++){const s=i[o],a=!!t[s];!s||s==="undefined"||l[s]===a||!a||(W(e,s,!0),l[s]=a)}return l}function Re(e,t,l){if(!t)return l?H(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof l=="string"&&(i.cssText=l=void 0),l||(l={}),t||(t={});let n,o;for(o in l)t[o]==null&&i.removeProperty(o),delete l[o];for(o in t)n=t[o],n!==l[o]&&(i.setProperty(o,n),l[o]=n);return l}function Ge(e,t={},l,i){const n={};return P(()=>typeof t.ref=="function"?We(t.ref,e):t.ref=e),P(()=>Xe(e,t,l,!0,n,!0)),n}function We(e,t,l){return M(()=>e(t,l))}function _(e,t,l,i){if(l!==void 0&&!i&&(i=[]),typeof t!="function")return T(e,t,i,l);P(n=>T(e,t(),n,l),i)}function Xe(e,t,l,i,n={},o=!1){t||(t={});for(const r in n)if(!(r in t)){if(r==="children")continue;n[r]=X(e,r,null,n[r],l,o)}for(const r in t){if(r==="children")continue;const s=t[r];n[r]=X(e,r,s,n[r],l,o)}}function Qe(e){return e.toLowerCase().replace(/-([a-z])/g,(t,l)=>l.toUpperCase())}function W(e,t,l){const i=t.trim().split(/\s+/);for(let n=0,o=i.length;n<o;n++)e.classList.toggle(i[n],l)}function X(e,t,l,i,n,o){let r,s,a,c;if(t==="style")return Re(e,l,i);if(t==="classList")return Ke(e,l,i);if(l===i)return i;if(t==="ref")o||l(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);i&&e.removeEventListener(u,i),l&&e.addEventListener(u,l)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);i&&e.removeEventListener(u,i,!0),l&&e.addEventListener(u,l,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),d=De.has(u);if(!d&&i){const f=Array.isArray(i)?i[0]:i;e.removeEventListener(u,f)}(d||l)&&(Ve(e,u,l,d),d&&ne([u]))}else if(t.slice(0,5)==="attr:")H(e,t.slice(5),l);else if((c=t.slice(0,5)==="prop:")||(a=Ne.has(t))||!n||(r=e.nodeName.includes("-")))c&&(t=t.slice(5),s=!0),t==="class"||t==="className"?He(e,l):r&&!s&&!a?e[Qe(t)]=l:e[t]=l;else{const u=t.indexOf(":")>-1&&Be[t.split(":")[0]];u?Ue(e,u,t,l):H(e,Me[t]||t,l)}return l}function Ye(e){const t=`$$${e.type}`;let l=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==l&&Object.defineProperty(e,"target",{configurable:!0,value:l}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return l||document}});l;){const i=l[t];if(i&&!l.disabled){const n=l[`${t}Data`];if(n!==void 0?i.call(l,n,e):i.call(l,e),e.cancelBubble)return}l=l._$host||l.parentNode||l.host}}function T(e,t,l,i,n){for(;typeof l=="function";)l=l();if(t===l)return l;const o=typeof t,r=i!==void 0;if(e=r&&l[0]&&l[0].parentNode||e,o==="string"||o==="number")if(o==="number"&&(t=t.toString()),r){let s=l[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),l=w(e,l,i,s)}else l!==""&&typeof l=="string"?l=e.firstChild.data=t:l=e.textContent=t;else if(t==null||o==="boolean")l=w(e,l,i);else{if(o==="function")return P(()=>{let s=t();for(;typeof s=="function";)s=s();l=T(e,s,l,i)}),()=>l;if(Array.isArray(t)){const s=[],a=l&&Array.isArray(l);if(V(s,t,l,n))return P(()=>l=T(e,s,l,i,!0)),()=>l;if(s.length===0){if(l=w(e,l,i),r)return l}else a?l.length===0?Q(e,s,i):Fe(e,l,s):(l&&w(e),Q(e,s));l=s}else if(t.nodeType){if(Array.isArray(l)){if(r)return l=w(e,l,i,t);w(e,l,null,t)}else l==null||l===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);l=t}}return l}function V(e,t,l,i){let n=!1;for(let o=0,r=t.length;o<r;o++){let s=t[o],a=l&&l[e.length],c;if(!(s==null||s===!0||s===!1))if((c=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))n=V(e,s,a)||n;else if(c==="function")if(i){for(;typeof s=="function";)s=s();n=V(e,Array.isArray(s)?s:[s],Array.isArray(a)?a:[a])||n}else e.push(s),n=!0;else{const u=String(s);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return n}function Q(e,t,l=null){for(let i=0,n=t.length;i<n;i++)e.insertBefore(t[i],l)}function w(e,t,l,i){if(l===void 0)return e.textContent="";const n=i||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const s=t[r];if(n!==s){const a=s.parentNode===e;!o&&!r?a?e.replaceChild(n,s):e.insertBefore(n,l):a&&s.remove()}else o=!0}}else e.insertBefore(n,l);return[n]}const Je=!1;var Ze=v('<a id=singleroom_book data-formid=120 href=javascript:; class="singleroom_book button">Demander une réservation'),et=v('<div id=singleroom_book_form120 class=singleroom_book_form><div class=mphb_sc_booking_form-wrapper><form method=get class=mphb-booking-form id=booking-form-120><p class=mphb-required-fields-tip><small>Required fields are followed by <abbr title=required>*</abbr></small></p><input type=hidden id=mphb-checkout-nonce name=mphb-checkout-nonce value=738b75c68a><input type=hidden name=_wp_http_referer value=/hoteller/apartment/accommodation/superior-room/> <input type=hidden name=mphb_room_type_id value=120><p class=mphb-check-in-date-wrapper><label for=mphb_check_in_date-6061a2113478d> Arrivée le<abbr title="Formatted as dd/mm/yyyy">*</abbr> </label><br><input id=mphb_check_in_date-6061a2113478d type=text class=mphb-datepick value=""required autocomplete=off placeholder="dd/mm/yyyy ex: 13/04/2024"><input id=mphb_check_in_date-6061a2113478d-hidden type=hidden name=mphb_check_in_date value=""></p><p class=mphb-check-out-date-wrapper><label for=mphb_check_out_date-6061a2113478d> Départ le <abbr title="Formatted as dd/mm/yyyy">*</abbr> </label><br><input id=mphb_check_out_date-6061a2113478d type=text class=mphb-datepick value=""required autocomplete=off placeholder="dd/mm/yyyy ex: 16/04/2024"><input id=mphb_check_out_date-6061a2113478d-hidden type=hidden name=mphb_check_out_date value=""></p><p class=mphb-reserve-btn-wrapper><input class="mphb-reserve-btn button"disabled type=submit value="Voir le prix"><span class="mphb-preloader mphb-hide"></span></p><div class="mphb-errors-wrapper mphb-hide">');const tt=()=>[Ze(),et()];var lt=v("<svg stroke-width=0>");function B(e,t){const l=R(e.a,t),[i,n]=Te(l,["src"]),[o,r]=Z(""),s=L(()=>t.title?`${e.c}<title>${t.title}</title>`:e.c);return Ce(()=>r(s())),ke(()=>{r("")}),(()=>{var a=lt();return Ge(a,R({get stroke(){return e.a?.stroke},get color(){return t.color||"currentColor"},get fill(){return t.color||"currentColor"},get style(){return{...t.style,overflow:"visible"}}},n,{get height(){return t.size||"1em"},get width(){return t.size||"1em"},xmlns:"http://www.w3.org/2000/svg",get innerHTML(){return o()}}),!0),_(a,()=>Je),a})()}function it(e){return B({a:{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-wash-temperature-4",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},c:'<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3.486 8.965c.168 .02 .34 .033 .514 .035c.79 .009 1.539 -.178 2 -.5c.461 -.32 1.21 -.507 2 -.5c.79 -.007 1.539 .18 2 .5c.461 .322 1.21 .509 2 .5c.79 .009 1.539 -.178 2 -.5c.461 -.32 1.21 -.507 2 -.5c.79 -.007 1.539 .18 2 .5c.461 .322 1.21 .509 2 .5c.17 0 .339 -.014 .503 -.034"/><path d="M3 6l1.721 10.329a2 2 0 0 0 1.973 1.671h10.612a2 2 0 0 0 1.973 -1.671l1.721 -10.329"/><path d="M10 15h.01"/><path d="M14 15h.01"/><path d="M14 12h.01"/><path d="M10 12h.01"/>'},e)}function $(e){return B({a:{viewBox:"0 0 384 512"},c:'<path d="M192 32c17.7 0 32 14.3 32 32v135.5l111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11l-111.6-67V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V312.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11l111.6 67V64c0-17.7 14.3-32 32-32z"/>'},e)}function ot(e){return B({a:{viewBox:"0 0 640 512"},c:'<path d="M.3 166.9 0 68c0-10.3 9.5-17.9 19.5-15.7l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6-41.5-145.2C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2-41.2 15.6-86.2 18.1-128.8 7l-298.3-77.6c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14-9.3-22.5zM32 448h576c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm96-80a32 32 0 1 1 64 0 32 32 0 1 1-64 0zm128-16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>'},e)}function nt(e){return B({a:{viewBox:"0 0 640 512"},c:'<path d="M381 114.9 186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240l-58.2-25.9c-8.7-3.9-18.8-3.7-27.3.6l-32.2 16.1c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2h137.7c5 0 9.9-1.2 14.3-3.4l272.9-136.4c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48h-57.4c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/>'},e)}var st=v("<div class=elementor-widget-container><p>Du lundi au vendredi 190 euros la nuit</p><p>Samedi et dimanche 210 euros la nuit</p><p> Deux nuits minimum</p><p> En juillet et août location uniquement à la semaine"),rt=v("<div class=elementor-widget-container><p>Location du samedi au samedi en juillet et août</p><p>1 225 euros la semaine</p><p> Selon disponibilités les autres mois</p><p> ( 175 euros la nuit / garage privé inclus)"),at=v("<div class=elementor-widget-container><div><span>Tous nos tarifs incluent le ménage après séjour et le linge de maison</span></div><div><span>Les arrivées sont prévues entre 15:00 et 19:30</span></div><div><span>Les départs ont lieu à 11:00 au plus tard"),ut=v('<div class="elementor-column-wrap elementor-element-populated"><div class=elementor-widget-wrap><div class="elementor-element elementor-element-bacdfa4 elementor-widget elementor-widget-heading"data-id=bacdfa4 data-element_type=widget data-settings="{&quot;hoteller_ext_is_scrollme&quot;:&quot;false&quot;,&quot;hoteller_ext_is_smoove&quot;:&quot;false&quot;,&quot;hoteller_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;hoteller_ext_is_infinite&quot;:&quot;false&quot;,&quot;hoteller_ext_is_fadeout_animation&quot;:&quot;false&quot;}"data-widget_type=heading.default><div class=elementor-widget-container><a class="elementor-heading-title elementor-size-default">TARIF A LA NUIT (<!>)</a><a class="elementor-heading-title elementor-size-default">TARIF A LA SEMAINE (<!>)');const ct=()=>(()=>{var e=st(),t=e.firstChild,l=t.nextSibling,i=l.nextSibling,n=i.firstChild,o=i.nextSibling,r=o.firstChild;return e.style.setProperty("color","white"),e.style.setProperty("display","flex"),e.style.setProperty("flex","1"),e.style.setProperty("flex-direction","column"),i.style.setProperty("color","#E99525"),i.style.setProperty("display","flex"),i.style.setProperty("flex","1"),i.style.setProperty("flex-direction","row"),i.style.setProperty("align-items","center"),i.style.setProperty("gap","16px"),_(i,g($,{color:"#E99525"}),n),o.style.setProperty("color","#E99525"),o.style.setProperty("display","flex"),o.style.setProperty("flex","1"),o.style.setProperty("flex-direction","row"),o.style.setProperty("align-items","center"),o.style.setProperty("gap","16px"),_(o,g($,{color:"#E99525"}),r),e})(),dt=()=>(()=>{var e=rt(),t=e.firstChild,l=t.nextSibling,i=l.nextSibling,n=i.firstChild,o=i.nextSibling,r=o.firstChild;return e.style.setProperty("color","white"),e.style.setProperty("display","flex"),e.style.setProperty("flex","1"),e.style.setProperty("flex-direction","column"),i.style.setProperty("color","#E99525"),i.style.setProperty("display","flex"),i.style.setProperty("flex","1"),i.style.setProperty("flex-direction","row"),i.style.setProperty("align-items","center"),i.style.setProperty("gap","16px"),_(i,g($,{color:"#E99525"}),n),o.style.setProperty("color","#E99525"),o.style.setProperty("display","flex"),o.style.setProperty("flex","1"),o.style.setProperty("flex-direction","row"),o.style.setProperty("align-items","center"),o.style.setProperty("gap","16px"),_(o,g($,{color:"#E99525"}),r),e})(),ft=()=>(()=>{var e=at(),t=e.firstChild,l=t.firstChild,i=t.nextSibling,n=i.firstChild,o=i.nextSibling,r=o.firstChild;return e.style.setProperty("color","white"),e.style.setProperty("display","flex"),e.style.setProperty("flex","1"),e.style.setProperty("flex-direction","column"),t.style.setProperty("display","flex"),t.style.setProperty("flex","1"),t.style.setProperty("flex-direction","row"),t.style.setProperty("gap","36px"),t.style.setProperty("align-items","center"),_(t,g(it,{style:{color:"#E99525"},size:40}),l),i.style.setProperty("display","flex"),i.style.setProperty("flex","1"),i.style.setProperty("flex-direction","row"),i.style.setProperty("gap","36px"),i.style.setProperty("align-items","center"),_(i,g(ot,{style:{color:"#E99525"},size:24}),n),o.style.setProperty("display","flex"),o.style.setProperty("flex","1"),o.style.setProperty("flex-direction","row"),o.style.setProperty("gap","36px"),o.style.setProperty("align-items","center"),_(o,g(nt,{style:{color:"#E99525"},size:24}),r),e})(),pt=()=>{const[e,t]=Z("night");return(()=>{var l=ut(),i=l.firstChild,n=i.firstChild,o=n.firstChild,r=o.firstChild,s=r.firstChild,a=s.nextSibling;a.nextSibling;var c=r.nextSibling,u=c.firstChild,d=u.nextSibling;return d.nextSibling,i.style.setProperty("color","white"),i.style.setProperty("display","flex"),i.style.setProperty("flex","1"),i.style.setProperty("flex-direction","column"),o.style.setProperty("flex","1"),o.style.setProperty("flex-direction","row"),o.style.setProperty("justify-content","space-between"),o.style.setProperty("display","flex"),r.$$click=()=>t("night"),r.style.setProperty("cursor","pointer"),_(r,g($,{color:"#E99525"}),a),c.$$click=()=>t("week"),c.style.setProperty("cursor","pointer"),_(c,g($,{color:"#E99525"}),d),_(i,(()=>{var f=L(()=>e()==="night");return()=>f()&&g(ct,{})})(),null),_(i,(()=>{var f=L(()=>e()==="week");return()=>f()&&g(dt,{})})(),null),_(i,g(ft,{}),null),_(i,g(tt,{}),null),P(f=>{var b=e()==="night"?1:.6,x=e()==="week"?1:.6;return b!==f.e&&((f.e=b)!=null?r.style.setProperty("opacity",b):r.style.removeProperty("opacity")),x!==f.t&&((f.t=x)!=null?c.style.setProperty("opacity",x):c.style.removeProperty("opacity")),f},{e:void 0,t:void 0}),l})()};ne(["click"]);var mt=v(`<div id=perspective><input type=hidden id=pp_menu_layout name=pp_menu_layout value=leftalign><input type=hidden id=pp_enable_right_click name=pp_enable_right_click value=""><input type=hidden id=pp_enable_dragging name=pp_enable_dragging value=""><input type=hidden id=pp_image_path name=pp_image_path value=https://themes.themegoods.com/hoteller/apartment/wp-content/themes/hoteller/images/><input type=hidden id=pp_homepage_url name=pp_homepage_url value=https://themes.themegoods.com/hoteller/apartment/><input type=hidden id=pp_fixed_menu name=pp_fixed_menu value=""><input type=hidden id=tg_sidebar_sticky name=tg_sidebar_sticky value=1><input type=hidden id=pp_topbar name=pp_topbar value=""><input type=hidden id=post_client_column name=post_client_column value=4><input type=hidden id=pp_back name=pp_back value=Back><input type=hidden id=tg_lightbox_thumbnails name=tg_lightbox_thumbnails value=thumbnail><input type=hidden id=tg_lightbox_thumbnails_display name=tg_lightbox_thumbnails_display value=1><input type=hidden id=tg_lightbox_timer name=tg_lightbox_timer value=7000><input type=hidden id=tg_header_content name=tg_header_content value=menu><input type=hidden id=tg_live_builder name=tg_live_builder value=0><input type=hidden id=pp_footer_style name=pp_footer_style value=2><a id=close_mobile_menu href=javascript:;></a><div class=mobile_menu_wrapper><div class=mobile_menu_content><div class=menu-side-mobile-menu-container><ul id=mobile_main_menu class=mobile_main_nav><li class="menu-item menu-item-home current-menu-item current_page_item"><a href=index.html aria-current=page>Home</a></li><li class=menu-item><a href=our-rooms.html>Our Rooms</a></li><li class=menu-item><a href=about-us.html>About Us</a></li><li class=menu-item><a href=contact.html>Contact</a></li><li class=menu-item><a href=blog.html>Blog</a></li><li class=menu-item><a href=explore.html>Explore</a></li><li class=menu-item><a href=terms-and-conditions.html>Terms and Conditions</a></li></ul></div></div></div><div id=wrapper class=" "><div class=header_style_wrapper><div class=top_bar><div class=standard_wrapper><div id=logo_wrapper><div id=logo_normal class=logo_container><div class=logo_align><a id=custom_logo class="logo_wrapper default"href=index.html><img src=upload/logo.jpg alt=""width=400 height=115></a></div></div><div id=logo_transparent class=logo_container><div class=logo_align><a id=custom_logo_transparent class="logo_wrapper hidden"href=index.html><img src=upload/logo_white.png alt=""width=110 height=120></a></div></div><div id=menu_wrapper><div id=nav_wrapper><div class=nav_wrapper_inner><div id=menu_border_wrapper><div class=menu-main-menu-container><ul id=main_menu class=nav><li class="menu-item menu-item-home current_page_item current-menu-item"><a href=index.html>Accueil</a></li><li class=menu-item><a href=contact.html>Contact</a></li></ul></div></div></div></div></div><div id=logo_right_wrapper><div id=logo_right_button><div class=header_client_wrapper><a class=client_login_link href=javascript:; title=Login><span class=ti-lock></span>Se connecter</a></div><a href=javascript:; id=mobile_nav_icon><span class=ti-menu></span></a></div></div></div></div></div></div><div id=page_content_wrapper class=noheader><div class=inner><div class=inner_wrapper><div class="sidebar_content full_width"><div data-elementor-type=wp-post data-elementor-id=662 class="elementor elementor-662"data-elementor-settings=[]><div class=elementor-inner><div class=elementor-section-wrap><section class="elementor-section elementor-top-section elementor-element elementor-element-a6135f8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"data-id=a6135f8 data-element_type=section data-settings="{&quot;hoteller_ext_is_background_parallax&quot;:&quot;false&quot;,&quot;hoteller_ext_is_background_on_scroll&quot;:&quot;false&quot;}"><div class="elementor-container elementor-column-gap-default"><div class=elementor-row><div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5140bd0"data-id=5140bd0 data-element_type=column data-settings="{&quot;hoteller_ext_is_scrollme&quot;:&quot;false&quot;,&quot;hoteller_ext_is_smoove&quot;:&quot;false&quot;,&quot;hoteller_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;hoteller_ext_is_infinite&quot;:&quot;false&quot;,&quot;hoteller_ext_is_fadeout_animation&quot;:&quot;false&quot;}"><div class="elementor-column-wrap elementor-element-populated"><div class=elementor-widget-wrap><div class="elementor-element elementor-element-8e1c27b elementor-widget elementor-widget-heading"data-id=8e1c27b data-element_type=widget data-settings="{&quot;hoteller_ext_is_scrollme&quot;:&quot;false&quot;,&quot;hoteller_ext_is_smoove&quot;:&quot;false&quot;,&quot;hoteller_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;hoteller_ext_is_infinite&quot;:&quot;false&quot;,&quot;hoteller_ext_is_fadeout_animation&quot;:&quot;false&quot;}"data-widget_type=heading.default><div class=elementor-widget-container><h1 class="elementor-heading-title elementor-size-default">Appartement Duplex Mogador <br>Honfleur</h1></div></div><div class="elementor-element elementor-element-99909d9 elementor-invisible elementor-widget elementor-widget-text-editor"data-id=99909d9 data-element_type=widget data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:400,&quot;hoteller_ext_is_scrollme&quot;:&quot;false&quot;,&quot;hoteller_ext_is_smoove&quot;:&quot;false&quot;,&quot;hoteller_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;hoteller_ext_is_infinite&quot;:&quot;false&quot;,&quot;hoteller_ext_is_fadeout_animation&quot;:&quot;false&quot;}"data-widget_type=text-editor.default><div class=elementor-widget-container><div class="elementor-text-editor elementor-clearfix"><h2 class="elementor-heading-title elementor-size-default"><p class=p1>Situé au coeur du centre historique de Honfleur l’Appartement Duplex Mogador est le lieu idéal pour découvrir avec bonheur les multiples aspects d’un site d’exception.</p></h2><p class=p1><span class=s1>Conçu sur 2 étages, à quelques pas de la place Sainte-Catherine et à une centaine de mètres du Vieux Port, l&#39;Appartement Mogador grâce un cadre spacieux et un décor d’une authentique qualité est une escale privilégiée autant qu’une invitation à poursuivre le voyage.</span></p></div></div></div></div></div></div></div></div></section><section class="elementor-section elementor-top-section elementor-element elementor-element-58441c5 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-invisible"data-id=58441c5 data-element_type=section data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;,&quot;animation_delay&quot;:800,&quot;hoteller_ext_is_background_parallax&quot;:&quot;false&quot;,&quot;hoteller_ext_is_background_on_scroll&quot;:&quot;false&quot;}"><div class="elementor-container elementor-column-gap-no"><div class=elementor-row><div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4ce6044"data-id=4ce6044 data-element_type=column data-settings="{&quot;hoteller_ext_is_scrollme&quot;:&quot;false&quot;,&quot;hoteller_ext_is_smoove&quot;:&quot;false&quot;,&quot;hoteller_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;hoteller_ext_is_infinite&quot;:&quot;false&quot;,&quot;hoteller_ext_is_fadeout_animation&quot;:&quot;false&quot;}"></div><div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-7a8d596"data-id=7a8d596 data-element_type=column data-settings="{&quot;hoteller_ext_is_scrollme&quot;:&quot;false&quot;,&quot;hoteller_ext_is_smoove&quot;:&quot;false&quot;,&quot;hoteller_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;hoteller_ext_is_infinite&quot;:&quot;false&quot;,&quot;hoteller_ext_is_fadeout_animation&quot;:&quot;false&quot;}"><div class="elementor-column-wrap elementor-element-populated"><div class=elementor-widget-wrap><div class="elementor-element elementor-element-58186cb elementor-widget elementor-widget-hoteller-gallery-horizontal"data-id=58186cb data-element_type=widget data-settings="{&quot;hoteller_ext_is_scrollme&quot;:&quot;false&quot;,&quot;hoteller_ext_is_smoove&quot;:&quot;false&quot;,&quot;hoteller_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;hoteller_ext_is_infinite&quot;:&quot;false&quot;,&quot;hoteller_ext_is_fadeout_animation&quot;:&quot;false&quot;}"data-widget_type=hoteller-gallery-horizontal.default><div class=elementor-widget-container><div class=tg_horizontal_gallery_wrapper data-autoplay=0 data-loop=0 data-navigation=1 data-pagination=0 data-parallax=1 data-fullscreen=0><div class=tg_horizontal_gallery_cell style=margin-right:0px;><img class=tg_horizontal_gallery_cell_img src=upload/salon.jpg data-flickity-lazyload=upload/salon.jpg alt=""style=height:600px;></div><div class=tg_horizontal_gallery_cell style=margin-right:0px;><img class=tg_horizontal_gallery_cell_img src=upload/salon2.jpg data-flickity-lazyload=upload/salon2.jpg alt=""style=height:600px;></div><div class=tg_horizontal_gallery_cell style=margin-right:0px;><img class=tg_horizontal_gallery_cell_img src=upload/table.jpg data-flickity-lazyload=upload/table.jpg alt=""style=height:600px;></div><div class=tg_horizontal_gallery_cell style=margin-right:0px;><img class=tg_horizontal_gallery_cell_img src=upload/escalier.jpg data-flickity-lazyload=upload/escalier.jpg alt=""style=height:600px;></div><div class=tg_horizontal_gallery_cell style=margin-right:0px;><img class=tg_horizontal_gallery_cell_img src=upload/bar.jpg data-flickity-lazyload=upload/bar.jpg alt=""style=height:600px;></div><div class=tg_horizontal_gallery_cell style=margin-right:0px;><img class=tg_horizontal_gallery_cell_img src=upload/chambre1.jpg data-flickity-lazyload=upload/chambre1.jpg alt=""style=height:600px;></div><div class=tg_horizontal_gallery_cell style=margin-right:0px;><img class=tg_horizontal_gallery_cell_img src=upload/chambre2.jpg data-flickity-lazyload=upload/chambre2.jpg alt=""style=height:600px;></div><div class=tg_horizontal_gallery_cell style=margin-right:0px;><img class=tg_horizontal_gallery_cell_img src=upload/sdb.jpg data-flickity-lazyload=upload/sdb.jpg alt=""style=height:600px;></div></div></div></div></div></div></div></div></div></section><section class="elementor-section elementor-top-section elementor-element elementor-element-de407e0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"data-id=de407e0 data-element_type=section data-settings="{&quot;hoteller_ext_is_background_parallax&quot;:&quot;false&quot;,&quot;hoteller_ext_is_background_on_scroll&quot;:&quot;false&quot;}"><div class="elementor-container elementor-column-gap-default"><div class=elementor-row><div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2467eb2"data-id=2467eb2 data-element_type=column data-settings="{&quot;hoteller_ext_is_scrollme&quot;:&quot;false&quot;,&quot;hoteller_ext_is_smoove&quot;:&quot;false&quot;,&quot;hoteller_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;hoteller_ext_is_infinite&quot;:&quot;false&quot;,&quot;hoteller_ext_is_fadeout_animation&quot;:&quot;false&quot;}"><div class="elementor-column-wrap elementor-element-populated"><div class=elementor-widget-wrap><div class="elementor-element elementor-element-deda4ce elementor-invisible elementor-widget elementor-widget-heading"data-id=deda4ce data-element_type=widget data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;hoteller_ext_is_scrollme&quot;:&quot;false&quot;,&quot;hoteller_ext_is_smoove&quot;:&quot;false&quot;,&quot;hoteller_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;hoteller_ext_is_infinite&quot;:&quot;false&quot;,&quot;hoteller_ext_is_fadeout_animation&quot;:&quot;false&quot;}"data-widget_type=heading.default></div></div></div></div></div></div></section></div></div></div></div></div></div><br class=clear></div></div><div id=footer_wrapper><div class=footer_bar><div class=footer_bar_wrapper><div id=copyright>© Copyright APP2B - Concepteur d'applications mobiles et web</div><br class=clear></div></div></div><a id=toTop href=javascript:;><span class=ti-angle-up>`);const _t=()=>(()=>{var e=mt(),t=e.firstChild,l=t.nextSibling,i=l.nextSibling,n=i.nextSibling,o=n.nextSibling,r=o.nextSibling,s=r.nextSibling,a=s.nextSibling,c=a.nextSibling,u=c.nextSibling,d=u.nextSibling,f=d.nextSibling,b=f.nextSibling,x=b.nextSibling,se=x.nextSibling,re=se.nextSibling,ae=re.nextSibling,ue=ae.nextSibling,ce=ue.nextSibling,de=ce.firstChild,fe=de.nextSibling,pe=fe.firstChild,me=pe.firstChild,_e=me.firstChild,he=_e.firstChild,ge=he.firstChild,ye=ge.firstChild,be=ye.firstChild,qe=be.nextSibling,ve=qe.firstChild,xe=ve.firstChild,we=xe.firstChild;return _(we,g(pt,{})),e})(),ht=document.getElementById("perspective");Ie(()=>g(_t,{}),ht);
