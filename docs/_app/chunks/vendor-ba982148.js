function p(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function M(t){return t()}function j(){return Object.create(null)}function b(t){t.forEach(M)}function q(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function K(t){return Object.keys(t).length===0}function ft(t,e,n,s){if(t){const o=z(t,e,n,s);return t[0](o)}}function z(t,e,n,s){return t[1]&&s?G(n.ctx.slice(),t[1](s(e))):n.ctx}function ht(t,e,n,s){if(t[2]&&s){const o=t[2](s(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const l=[],c=Math.max(e.dirty.length,o.length);for(let u=0;u<c;u+=1)l[u]=e.dirty[u]|o[u];return l}return e.dirty|o}return e.dirty}function dt(t,e,n,s,o,l){if(o){const c=z(e,n,s,l);t.p(c,o)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function mt(t){return t&&q(t.destroy)?t.destroy:p}let C=!1;function W(){C=!0}function Q(){C=!1}function R(t,e,n,s){for(;t<e;){const o=t+(e-t>>1);n(o)<=s?t=o+1:e=o}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let r=0;r<e.length;r++){const a=e[r];a.claim_order!==void 0&&i.push(a)}e=i}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let o=0;for(let i=0;i<e.length;i++){const r=e[i].claim_order,a=(o>0&&e[n[o]].claim_order<=r?o+1:R(1,o,h=>e[n[h]].claim_order,r))-1;s[i]=n[a]+1;const f=a+1;n[f]=i,o=Math.max(f,o)}const l=[],c=[];let u=e.length-1;for(let i=n[o]+1;i!=0;i=s[i-1]){for(l.push(e[i-1]);u>=i;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);l.reverse(),c.sort((i,r)=>i.claim_order-r.claim_order);for(let i=0,r=0;i<c.length;i++){for(;r<l.length&&c[i].claim_order>=l[r].claim_order;)r++;const a=r<l.length?l[r]:null;t.insertBefore(c[i],a)}}function Z(t,e){if(C){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){C&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode.removeChild(t)}function et(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function gt(){return T(" ")}function Et(){return T("")}function yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function it(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function U(t,e,n,s,o=!1){rt(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const i=n(u);return i===void 0?t.splice(c,1):t[c]=i,o||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const i=n(u);return i===void 0?t.splice(c,1):t[c]=i,o?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return s()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function X(t,e,n,s){return U(t,o=>o.nodeName===e,o=>{const l=[];for(let c=0;c<o.attributes.length;c++){const u=o.attributes[c];n[u.name]||l.push(u.name)}l.forEach(c=>o.removeAttribute(c))},()=>s(e))}function vt(t,e,n){return X(t,e,n,et)}function wt(t,e,n){return X(t,e,n,nt)}function st(t,e){return U(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>T(e),!0)}function bt(t){return st(t," ")}function xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Lt(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}let w;function v(t){w=t}function N(){if(!w)throw new Error("Function called outside component initialization");return w}function Pt(t){N().$$.on_mount.push(t)}function kt(t){N().$$.after_update.push(t)}function Ct(t,e){N().$$.context.set(t,e)}const E=[],I=[],P=[],B=[],Y=Promise.resolve();let O=!1;function D(){O||(O=!0,Y.then(H))}function St(){return D(),Y}function A(t){P.push(t)}const S=new Set;let L=0;function H(){const t=w;do{for(;L<E.length;){const e=E[L];L++,v(e),ot(e.$$)}for(v(null),E.length=0,L=0;I.length;)I.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];S.has(n)||(S.add(n),n())}P.length=0}while(E.length);for(;B.length;)B.pop()();O=!1,S.clear(),v(t)}function ot(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const k=new Set;let _;function $t(){_={r:0,c:[],p:_}}function Ot(){_.r||b(_.c),_=_.p}function ct(t,e){t&&t.i&&(k.delete(t),t.i(e))}function At(t,e,n,s){if(t&&t.o){if(k.has(t))return;k.add(t),_.c.push(()=>{k.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function Tt(t,e){const n={},s={},o={$$scope:1};let l=t.length;for(;l--;){const c=t[l],u=e[l];if(u){for(const i in c)i in u||(s[i]=1);for(const i in u)o[i]||(n[i]=u[i],o[i]=1);t[l]=u}else for(const i in c)o[i]=1}for(const c in s)c in n||(n[c]=void 0);return n}function Nt(t){return typeof t=="object"&&t!==null?t:{}}function jt(t){t&&t.c()}function It(t,e){t&&t.l(e)}function ut(t,e,n,s){const{fragment:o,on_mount:l,on_destroy:c,after_update:u}=t.$$;o&&o.m(e,n),s||A(()=>{const i=l.map(M).filter(q);c?c.push(...i):b(i),t.$$.on_mount=[]}),u.forEach(A)}function lt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(E.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Bt(t,e,n,s,o,l,c,u=[-1]){const i=w;v(t);const r=t.$$={fragment:null,ctx:null,props:l,update:p,not_equal:o,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:j(),dirty:u,skip_bound:!1,root:e.target||i.$$.root};c&&c(r.root);let a=!1;if(r.ctx=n?n(t,e.props||{},(f,h,...g)=>{const x=g.length?g[0]:h;return r.ctx&&o(r.ctx[f],r.ctx[f]=x)&&(!r.skip_bound&&r.bound[f]&&r.bound[f](x),a&&at(t,f)),h}):[],r.update(),a=!0,b(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){W();const f=it(e.target);r.fragment&&r.fragment.l(f),f.forEach(tt)}else r.fragment&&r.fragment.c();e.intro&&ct(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),Q(),H()}v(i)}class Ft{$destroy(){lt(this,1),this.$destroy=p}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const m=[];function Mt(t,e=p){let n;const s=new Set;function o(u){if(J(t,u)&&(t=u,n)){const i=!m.length;for(const r of s)r[1](),m.push(r,t);if(i){for(let r=0;r<m.length;r+=2)m[r][0](m[r+1]);m.length=0}}}function l(u){o(u(t))}function c(u,i=p){const r=[u,i];return s.add(r),s.size===1&&(n=e(o)||p),u(t),()=>{s.delete(r),s.size===0&&(n(),n=null)}}return{set:o,update:l,subscribe:c}}class d{constructor(e){this.id=-1,this.nativePointer=e,this.pageX=e.pageX,this.pageY=e.pageY,this.clientX=e.clientX,this.clientY=e.clientY,self.Touch&&e instanceof Touch?this.id=e.identifier:y(e)&&(this.id=e.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const e=this.nativePointer.getCoalescedEvents().map(n=>new d(n));if(e.length>0)return e}return[this]}}const y=t=>"pointerId"in t,$=t=>"changedTouches"in t,F=()=>{};class qt{constructor(e,{start:n=()=>!0,move:s=F,end:o=F,rawUpdates:l=!1,avoidPointerEvents:c=!1,eventListenerOptions:u={capture:!1,passive:!1,once:!1}}={}){this._element=e,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=i=>{if(y(i)&&i.buttons===0)this._excludeFromButtonsCheck.add(i.pointerId);else if(!(i.buttons&1))return;const r=new d(i);this.currentPointers.some(a=>a.id===r.id)||!this._triggerPointerStart(r,i)||(y(i)?((i.target&&"setPointerCapture"in i.target?i.target:this._element).setPointerCapture(i.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move,this._eventListenerOptions),this._element.addEventListener("pointerup",this._pointerEnd,this._eventListenerOptions),this._element.addEventListener("pointercancel",this._pointerEnd,this._eventListenerOptions)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=i=>{for(const r of Array.from(i.changedTouches))this._triggerPointerStart(new d(r),i)},this._move=i=>{if(!$(i)&&(!y(i)||!this._excludeFromButtonsCheck.has(i.pointerId))&&i.buttons===0){this._pointerEnd(i);return}const r=this.currentPointers.slice(),a=$(i)?Array.from(i.changedTouches).map(h=>new d(h)):[new d(i)],f=[];for(const h of a){const g=this.currentPointers.findIndex(x=>x.id===h.id);g!==-1&&(f.push(h),this.currentPointers[g]=h)}f.length!==0&&this._moveCallback(r,f,i)},this._triggerPointerEnd=(i,r)=>{if(!$(r)&&r.buttons&1)return!1;const a=this.currentPointers.findIndex(h=>h.id===i.id);if(a===-1)return!1;this.currentPointers.splice(a,1),this.startPointers.splice(a,1),this._excludeFromButtonsCheck.delete(i.id);const f=!(r.type==="mouseup"||r.type==="touchend"||r.type==="pointerup");return this._endCallback(i,r,f),!0},this._pointerEnd=i=>{if(!!this._triggerPointerEnd(new d(i),i))if(y(i)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=i=>{for(const r of Array.from(i.changedTouches))this._triggerPointerEnd(new d(r),i)},this._startCallback=n,this._moveCallback=s,this._endCallback=o,this._rawUpdates=l&&"onpointerrawupdate"in window,this._eventListenerOptions=u,self.PointerEvent&&!c?this._element.addEventListener("pointerdown",this._pointerStart,this._eventListenerOptions):(this._element.addEventListener("mousedown",this._pointerStart,this._eventListenerOptions),this._element.addEventListener("touchstart",this._touchStart,this._eventListenerOptions),this._element.addEventListener("touchmove",this._move,this._eventListenerOptions),this._element.addEventListener("touchend",this._touchEnd,this._eventListenerOptions),this._element.addEventListener("touchcancel",this._touchEnd,this._eventListenerOptions))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(e,n){return this._startCallback(e,n)?(this.currentPointers.push(e),this.startPointers.push(e),!0):!1}}export{Nt as A,lt as B,G as C,Mt as D,St as E,ft as F,dt as G,_t as H,ht as I,Z as J,p as K,nt as L,wt as M,mt as N,I as O,qt as P,Ft as S,it as a,yt as b,vt as c,tt as d,et as e,Lt as f,pt as g,st as h,Bt as i,xt as j,gt as k,Et as l,bt as m,$t as n,At as o,Ot as p,ct as q,Ct as r,J as s,T as t,kt as u,Pt as v,jt as w,It as x,ut as y,Tt as z};