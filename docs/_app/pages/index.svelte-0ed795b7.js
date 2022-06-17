import{S as Y,i as Z,s as $,e as g,L as N,c as E,a as y,M as T,d as c,b as m,g as w,J as _,N as ae,O as j,K as z,P as le,l as U,Q as ne,v as ee,t as P,w as se,h as x,x as ie,y as oe,R as re,q as B,o as A,B as fe,k as C,m as V,j as de,p as ce,T as te,U as pe,n as ue}from"../chunks/vendor-f0fce061.js";import{_ as _e}from"../chunks/preload-helper-65d6d0a2.js";function W(s){let a,e,l,n,h,o,t;return{c(){a=g("div"),e=N("svg"),l=N("defs"),n=N("path"),this.h()},l(d){a=E(d,"DIV",{class:!0});var p=y(a);e=T(p,"svg",{width:!0,height:!0,xmlns:!0,"aria-hidden":!0,class:!0,"data-icon":!0,"data-prefix":!0,viewBox:!0});var r=y(e);l=T(r,"defs",{}),y(l).forEach(c),n=T(r,"path",{fill:!0,d:!0}),y(n).forEach(c),r.forEach(c),p.forEach(c),this.h()},h(){m(n,"fill","currentColor"),m(n,"d","M352 426l-79 79c-9 9-25 9-34 0l-79-79c-15-15-5-41 17-41h51V284H127v51c0 22-26 32-41 17L7 273c-9-9-9-25 0-34l79-79c15-15 41-5 41 17v51h101V127h-51c-22 0-32-26-17-41l79-79c9-9 25-9 34 0l79 79c15 15 5 41-17 41h-51v101h101v-51c0-22 26-32 41-17l79 79c9 9 9 25 0 34l-79 79c-15 15-41 5-41-17v-51H284v101h51c22 0 32 26 17 41z"),m(e,"width","20"),m(e,"height","20"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"aria-hidden","true"),m(e,"class","svg-inline--fa fa-arrows-alt fa-w-16"),m(e,"data-icon","arrows-alt"),m(e,"data-prefix","fas"),m(e,"viewBox","0 0 512 512"),m(a,"class","dragger svelte-7u9va8")},m(d,p){w(d,a,p),_(a,e),_(e,l),_(e,n),o||(t=[ae(h=s[0].call(null,a)),j(a,"panmove",s[2]),j(a,"panend",s[3]),j(a,"panstart",s[1])],o=!0)},p:z,d(d){d&&c(a),o=!1,le(t)}}}function he(s){let a,e=s[0]&&W(s);return{c(){e&&e.c(),a=U()},l(l){e&&e.l(l),a=U()},m(l,n){e&&e.m(l,n),w(l,a,n)},p(l,[n]){l[0]?e?e.p(l,n):(e=W(l),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},i:z,o:z,d(l){e&&e.d(l),l&&c(a)}}}function me(s,a,e){let{target:l}=a,{style:n}=a;const h=n;let o,t;const d=ne();let p;ee(async()=>{e(0,{pannable:p}=await _e(()=>import("../chunks/pannable-b2eb42cc.js"),["chunks/pannable-b2eb42cc.js","chunks/vendor-f0fce061.js"]),p)});function r(u){e(6,o=(o||getComputedStyle(l).left.replace("px","")||0)*1),e(7,t=(t||getComputedStyle(l).top.replace("px","")||0)*1),console.log({x:o,y:t}),d("panstart","panstart")}function b(u){console.log({dx:u.detail.dx,dy:u.detail.dy}),e(6,o=o+u.detail.dx),e(7,t=t+u.detail.dy),console.log({left:o,top:t}),d("panmove","panmove")}function S(u){d("panend","panend")}return s.$$set=u=>{"target"in u&&e(5,l=u.target),"style"in u&&e(4,n=u.style)},s.$$.update=()=>{s.$$.dirty&192&&(o||t)&&e(4,n=`left: ${o}px; top: ${t}px; ${h}`)},[p,r,b,S,n,l,o,t]}class ve extends Y{constructor(a){super();Z(this,a,me,he,$,{target:5,style:4})}}function F(s){let a,e,l,n;function h(t){s[2](t)}let o={target:s[0]};return s[1]!==void 0&&(o.style=s[1]),e=new ve({props:o}),te.push(()=>pe(e,"style",h)),{c(){a=P(`PanHandle
		`),se(e.$$.fragment)},l(t){a=x(t,`PanHandle
		`),ie(e.$$.fragment,t)},m(t,d){w(t,a,d),oe(e,t,d),n=!0},p(t,d){const p={};d&1&&(p.target=t[0]),!l&&d&2&&(l=!0,p.style=t[1],re(()=>l=!1)),e.$set(p)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){t&&c(a),fe(e,t)}}}function ye(s){let a,e,l,n,h,o,t,d,p,r,b,S,u,H,I,D,L,M,k,f=s[0]&&F(s);return{c(){a=g("h1"),e=P("Reposition with PanHandle Demo"),l=C(),n=g("h2"),h=g("pre"),o=P("Edit "),t=g("code"),d=P("./src/routes/index.svelte"),p=C(),r=g("div"),b=g("p"),S=P("Reposition Me"),u=C(),H=g("p"),I=P("Style: "),D=P(s[1]),L=C(),f&&f.c(),this.h()},l(i){a=E(i,"H1",{});var v=y(a);e=x(v,"Reposition with PanHandle Demo"),v.forEach(c),l=V(i),n=E(i,"H2",{});var J=y(n);h=E(J,"PRE",{});var O=y(h);o=x(O,"Edit "),t=E(O,"CODE",{});var K=y(t);d=x(K,"./src/routes/index.svelte"),K.forEach(c),O.forEach(c),J.forEach(c),p=V(i),r=E(i,"DIV",{style:!0,class:!0});var R=y(r);b=E(R,"P",{});var Q=y(b);S=x(Q,"Reposition Me"),Q.forEach(c),u=V(R),H=E(R,"P",{});var q=y(H);I=x(q,"Style: "),D=x(q,s[1]),q.forEach(c),L=V(R),f&&f.l(R),R.forEach(c),this.h()},h(){m(r,"style",M="--max-height: "+X+"px; min-width: "+G+"px; "+s[1]),m(r,"class","svelte-xe08l9")},m(i,v){w(i,a,v),_(a,e),w(i,l,v),w(i,n,v),_(n,h),_(h,o),_(h,t),_(t,d),w(i,p,v),w(i,r,v),_(r,b),_(b,S),_(r,u),_(r,H),_(H,I),_(H,D),_(r,L),f&&f.m(r,null),s[3](r),k=!0},p(i,[v]){(!k||v&2)&&de(D,i[1]),i[0]?f?(f.p(i,v),v&1&&B(f,1)):(f=F(i),f.c(),B(f,1),f.m(r,null)):f&&(ue(),A(f,1,1,()=>{f=null}),ce()),(!k||v&2&&M!==(M="--max-height: "+X+"px; min-width: "+G+"px; "+i[1]))&&m(r,"style",M)},i(i){k||(B(f),k=!0)},o(i){A(f),k=!1},d(i){i&&c(a),i&&c(l),i&&c(n),i&&c(p),i&&c(r),f&&f.d(),s[3](null)}}}let G=200,X=400;function ge(s,a,e){let l,n="";ee(async()=>{});function h(t){n=t,e(1,n)}function o(t){te[t?"unshift":"push"](()=>{l=t,e(0,l)})}return[l,n,h,o]}class be extends Y{constructor(a){super();Z(this,a,ge,ye,$,{})}}export{be as default};
