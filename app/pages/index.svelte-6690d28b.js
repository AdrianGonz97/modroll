import{P as me,C as K,S as $,i as x,s as ee,e as w,t as P,k as q,E as ae,c as N,a as I,g as R,d as v,n as L,F as re,b as c,Q as ce,f as j,I as u,R as J,T as U,h as Q,U as de,J as A,V as _e,W as Ie,X as De,K as O,Y as he,G as Ce,Z as Te,_ as ge,z as ze,l as be,j as te,m as se,o as ne,p as Ve,q as Be,x as X,u as Y,v as le,r as qe,$ as Le,w as Pe,a0 as Re,B as Oe,a1 as Ue,a2 as Se}from"../chunks/vendor-ded167ac.js";const ye=K(new Map);let oe=K({name:"None",num:0}),fe=K("None"),ve=K(["None","None"]),pe=K(0),ue=K(1),ie=K(50),je=me([ue,ie],([t,s])=>s-t+1);const Ae=me([ue,ie],([t,s])=>{const e=[];for(let a=t;a<=s;a++){const d={num:a,name:""};e.push(d)}return e});function We(t){let s,e,a,d,n,r,o,f,l,_,k,h,V,m,B,D,E,i,b,y,C;return{c(){s=w("div"),e=w("div"),a=P(t[1]),d=q(),n=w("div"),r=w("button"),o=ae("svg"),f=ae("path"),l=q(),_=w("div"),k=w("div"),h=w("input"),m=q(),B=w("input"),D=q(),E=w("button"),i=ae("svg"),b=ae("path"),this.h()},l(T){s=N(T,"DIV",{class:!0});var z=I(s);e=N(z,"DIV",{});var p=I(e);a=R(p,t[1]),p.forEach(v),d=L(z),n=N(z,"DIV",{class:!0});var g=I(n);r=N(g,"BUTTON",{"aria-label":!0,class:!0});var M=I(r);o=re(M,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var S=I(o);f=re(S,"path",{d:!0,class:!0}),I(f).forEach(v),S.forEach(v),M.forEach(v),l=L(g),_=N(g,"DIV",{class:!0});var F=I(_);k=N(F,"DIV",{class:!0,style:!0});var W=I(k);h=N(W,"INPUT",{style:!0,"aria-hidden":!0,class:!0}),m=L(W),B=N(W,"INPUT",{type:!0,class:!0}),W.forEach(v),F.forEach(v),D=L(g),E=N(g,"BUTTON",{"aria-label":!0,class:!0});var G=I(E);i=re(G,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var Z=I(i);b=re(Z,"path",{d:!0,class:!0}),I(b).forEach(v),Z.forEach(v),G.forEach(v),g.forEach(v),z.forEach(v),this.h()},h(){c(f,"d","M0,0.5 L1,0.5"),c(f,"class","svelte-11rgzbp"),c(o,"aria-hidden","true"),c(o,"viewBox","0 0 1 1"),c(o,"class","svelte-11rgzbp"),c(r,"aria-label","Decrease the counter by one"),c(r,"class","svelte-11rgzbp"),ce(h,"top","-100%"),c(h,"aria-hidden","true"),h.value=V=Math.floor(t[2]+1),c(h,"class","svelte-11rgzbp"),c(B,"type","number"),c(B,"class","svelte-11rgzbp"),c(k,"class","counter-digits svelte-11rgzbp"),ce(k,"transform","translate(0, "+100*t[4]+"%)"),c(_,"class","counter-viewport svelte-11rgzbp"),c(b,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),c(b,"class","svelte-11rgzbp"),c(i,"aria-hidden","true"),c(i,"viewBox","0 0 1 1"),c(i,"class","svelte-11rgzbp"),c(E,"aria-label","Increase the counter by one"),c(E,"class","svelte-11rgzbp"),c(n,"class","counter svelte-11rgzbp"),c(s,"class","container svelte-11rgzbp")},m(T,z){j(T,s,z),u(s,e),u(e,a),u(s,d),u(s,n),u(n,r),u(r,o),u(o,f),u(n,l),u(n,_),u(_,k),u(k,h),u(k,m),u(k,B),J(B,t[3]),u(n,D),u(n,E),u(E,i),u(i,b),y||(C=[U(r,"click",t[6]),U(B,"input",t[7]),U(E,"click",t[8])],y=!0)},p(T,[z]){z&2&&Q(a,T[1]),z&4&&V!==(V=Math.floor(T[2]+1))&&h.value!==V&&(h.value=V),z&8&&de(B.value)!==T[3]&&J(B,T[3]),z&16&&ce(k,"transform","translate(0, "+100*T[4]+"%)")},i:A,o:A,d(T){T&&v(s),y=!1,_e(C)}}}function Ge(t,s){return t%s}function He(t){return t-1<1?1:--t}function Ke(t){return t+1>999?999:++t}function Fe(t,s,e){let a,d,n,r=A,o=()=>(r(),r=Ie(f,m=>e(3,n=m)),f);t.$$.on_destroy.push(()=>r());let{count:f}=s;o();let{label:l}=s;const _=De();O(t,_,m=>e(2,d=m));const k=()=>he(f,n=He(n),n);function h(){n=de(this.value),f.set(n)}const V=()=>he(f,n=Ke(n),n);return t.$$set=m=>{"count"in m&&o(e(0,f=m.count)),"label"in m&&e(1,l=m.label)},t.$$.update=()=>{t.$$.dirty&8&&_.set(n),t.$$.dirty&4&&e(4,a=Ge(d,1))},[f,l,d,n,a,_,k,h,V]}class Ee extends ${constructor(s){super();x(this,s,Fe,We,ee,{count:0,label:1})}}function Je(t){let s,e,a,d,n,r,o,f,l,_,k,h,V,m,B,D=!0,E,i;return{c(){s=w("div"),e=w("button"),a=P("CLICK ME TO ROLL"),n=q(),r=w("div"),o=w("span"),f=P("Drum Volume: "),l=P(t[1]),_=P("%"),k=q(),h=w("input"),V=q(),m=w("audio"),this.h()},l(b){s=N(b,"DIV",{class:!0});var y=I(s);e=N(y,"BUTTON",{class:!0});var C=I(e);a=R(C,"CLICK ME TO ROLL"),C.forEach(v),n=L(y),r=N(y,"DIV",{class:!0});var T=I(r);o=N(T,"SPAN",{});var z=I(o);f=R(z,"Drum Volume: "),l=R(z,t[1]),_=R(z,"%"),z.forEach(v),k=L(T),h=N(T,"INPUT",{type:!0,min:!0,max:!0,class:!0}),T.forEach(v),V=L(y),m=N(y,"AUDIO",{src:!0}),I(m).forEach(v),y.forEach(v),this.h()},h(){e.disabled=d=!t[2],c(e,"class","svelte-kvjbd"),c(h,"type","range"),c(h,"min","0"),c(h,"max","100"),c(h,"class","svelte-kvjbd"),c(r,"class","volume-container svelte-kvjbd"),Ce(m.src,B="drumroll.mp3")||c(m,"src",B),c(s,"class","roll-container svelte-kvjbd")},m(b,y){j(b,s,y),u(s,e),u(e,a),u(s,n),u(s,r),u(r,o),u(o,f),u(o,l),u(o,_),u(r,k),u(r,h),J(h,t[1]),u(s,V),u(s,m),t[7](m),E||(i=[U(e,"click",t[3]),U(h,"change",t[5]),U(h,"input",t[5]),U(h,"change",t[4]),U(m,"play",t[6]),U(m,"pause",t[6])],E=!0)},p(b,[y]){y&4&&d!==(d=!b[2])&&(e.disabled=d),y&2&&Q(l,b[1]),y&2&&J(h,b[1]),y&4&&D!==(D=b[2])&&m[D?"pause":"play"]()},i:A,o:A,d(b){b&&v(s),t[7](null),E=!1,_e(i)}}}function Qe(t,s,e){let a,d,n,r,o,f;O(t,ve,i=>e(8,a=i)),O(t,fe,i=>e(9,d=i)),O(t,ye,i=>e(10,n=i)),O(t,ue,i=>e(11,r=i)),O(t,ie,i=>e(12,o=i)),O(t,pe,i=>e(13,f=i));let l,_=50,k=!0;function h(){k&&(V(),l.play(),m(),he(pe,f++,f),oe.set({name:"None",num:0}))}function V(){e(0,l.volume=_/100,l)}function m(){setTimeout(()=>{const i=Math.floor(Math.random()*(o-r+1)+r);console.log(i);const b=n.get(i);b?(d!=b&&ve.set([d,a[0]]),oe.set({name:b,num:i}),fe.set(b)):oe.set({name:"None",num:i}),console.log("Winner: ",b)},3200)}function B(){_=de(this.value),e(1,_)}function D(){k=this.paused,e(2,k)}function E(i){Te[i?"unshift":"push"](()=>{l=i,e(0,l)})}return[l,_,k,h,V,B,D,E]}class Xe extends ${constructor(s){super();x(this,s,Qe,Je,ee,{})}}function Ye(t){let s,e,a,d,n,r,o,f;return{c(){s=w("div"),e=w("span"),a=P(t[1]),d=q(),n=w("input"),this.h()},l(l){s=N(l,"DIV",{class:!0});var _=I(s);e=N(_,"SPAN",{class:!0});var k=I(e);a=R(k,t[1]),k.forEach(v),d=L(_),n=N(_,"INPUT",{"aria-label":!0,placeholder:!0,class:!0}),_.forEach(v),this.h()},h(){c(e,"class","svelte-1ytalfs"),c(n,"aria-label","Username"),c(n,"placeholder",""),c(n,"class","svelte-1ytalfs"),c(s,"class",r=""+(ge(t[2].num===t[1]?"winner":"name-container")+" svelte-1ytalfs"))},m(l,_){j(l,s,_),u(s,e),u(e,a),u(s,d),u(s,n),J(n,t[0]),o||(f=[U(n,"input",t[5]),U(n,"keydown",t[3])],o=!0)},p(l,[_]){_&2&&Q(a,l[1]),_&1&&n.value!==l[0]&&J(n,l[0]),_&6&&r!==(r=""+(ge(l[2].num===l[1]?"winner":"name-container")+" svelte-1ytalfs"))&&c(s,"class",r)},i:A,o:A,d(l){l&&v(s),o=!1,_e(f)}}}function Ze(t,s,e){let a,d;O(t,ye,l=>e(4,a=l)),O(t,oe,l=>e(2,d=l));let{num:n}=s,{name:r}=s;function o(l){(l.key==="Delete"||l.key==="Backspace")&&a.set(n,"")}ze(()=>{const l=a.get(n);l?e(0,r=l):a.set(n,"")});function f(){r=this.value,e(0,r)}return t.$$set=l=>{"num"in l&&e(1,n=l.num),"name"in l&&e(0,r=l.name)},t.$$.update=()=>{t.$$.dirty&19&&r&&a.set(n,r)},[r,n,d,o,a,f]}class $e extends ${constructor(s){super();x(this,s,Ze,Ye,ee,{num:1,name:0})}}function Me(t,s,e){const a=t.slice();return a[6]=s[e],a}function ke(t,s,e){const a=t.slice();return a[9]=s[e],a}function we(t){let s,e=t[9]+"",a,d;return{c(){s=w("strong"),a=P(e),d=P("\xA0")},l(n){s=N(n,"STRONG",{});var r=I(s);a=R(r,e),r.forEach(v),d=R(n,"\xA0")},m(n,r){j(n,s,r),u(s,a),j(n,d,r)},p(n,r){r&8&&e!==(e=n[9]+"")&&Q(a,e)},d(n){n&&v(s),n&&v(d)}}}function Ne(t,s){let e,a,d;const n=[s[6]];let r={};for(let o=0;o<n.length;o+=1)r=Oe(r,n[o]);return a=new $e({props:r}),{key:t,first:null,c(){e=be(),te(a.$$.fragment),this.h()},l(o){e=be(),se(a.$$.fragment,o),this.h()},h(){this.first=e},m(o,f){j(o,e,f),ne(a,o,f),d=!0},p(o,f){s=o;const l=f&16?Ve(n,[Be(s[6])]):{};a.$set(l)},i(o){d||(X(a.$$.fragment,o),d=!0)},o(o){Y(a.$$.fragment,o),d=!1},d(o){o&&v(e),le(a,o)}}}function xe(t){let s,e,a,d,n,r,o,f,l,_,k,h,V,m,B,D,E=[],i=new Map,b,y=t[3],C=[];for(let p=0;p<y.length;p+=1)C[p]=we(ke(t,y,p));let T=t[4];const z=p=>p[6].num;for(let p=0;p<T.length;p+=1){let g=Me(t,T,p),M=z(g);i.set(M,E[p]=Ne(M,g))}return{c(){s=w("div"),e=w("div"),a=w("span"),d=P("Roll #"),n=P(t[1]),r=q(),o=w("span"),f=P("Current Mod: "),l=w("strong"),_=P(t[2]),k=q(),h=w("span"),V=P(`Past Winners: [
			`);for(let p=0;p<C.length;p+=1)C[p].c();m=P(`
			]`),B=q(),D=w("div");for(let p=0;p<E.length;p+=1)E[p].c();this.h()},l(p){s=N(p,"DIV",{class:!0});var g=I(s);e=N(g,"DIV",{class:!0});var M=I(e);a=N(M,"SPAN",{class:!0});var S=I(a);d=R(S,"Roll #"),n=R(S,t[1]),S.forEach(v),r=L(M),o=N(M,"SPAN",{class:!0});var F=I(o);f=R(F,"Current Mod: "),l=N(F,"STRONG",{});var W=I(l);_=R(W,t[2]),W.forEach(v),F.forEach(v),k=L(M),h=N(M,"SPAN",{class:!0});var G=I(h);V=R(G,`Past Winners: [
			`);for(let H=0;H<C.length;H+=1)C[H].l(G);m=R(G,`
			]`),G.forEach(v),M.forEach(v),B=L(g),D=N(g,"DIV",{style:!0,class:!0});var Z=I(D);for(let H=0;H<E.length;H+=1)E[H].l(Z);Z.forEach(v),g.forEach(v),this.h()},h(){c(a,"class","svelte-ndqtur"),c(o,"class","svelte-ndqtur"),c(h,"class","svelte-ndqtur"),c(e,"class","stats svelte-ndqtur"),c(D,"style",t[0]),c(D,"class","svelte-ndqtur"),c(s,"class","container svelte-ndqtur")},m(p,g){j(p,s,g),u(s,e),u(e,a),u(a,d),u(a,n),u(e,r),u(e,o),u(o,f),u(o,l),u(l,_),u(e,k),u(e,h),u(h,V);for(let M=0;M<C.length;M+=1)C[M].m(h,null);u(h,m),u(s,B),u(s,D);for(let M=0;M<E.length;M+=1)E[M].m(D,null);b=!0},p(p,[g]){if((!b||g&2)&&Q(n,p[1]),(!b||g&4)&&Q(_,p[2]),g&8){y=p[3];let M;for(M=0;M<y.length;M+=1){const S=ke(p,y,M);C[M]?C[M].p(S,g):(C[M]=we(S),C[M].c(),C[M].m(h,m))}for(;M<C.length;M+=1)C[M].d(1);C.length=y.length}g&16&&(T=p[4],qe(),E=Le(E,g,z,1,p,T,i,D,Ue,Ne,null,Me),Pe()),(!b||g&1)&&c(D,"style",p[0])},i(p){if(!b){for(let g=0;g<T.length;g+=1)X(E[g]);b=!0}},o(p){for(let g=0;g<E.length;g+=1)Y(E[g]);b=!1},d(p){p&&v(s),Re(C,p);for(let g=0;g<E.length;g+=1)E[g].d()}}}function et(t,s,e){let a,d,n,r,o;O(t,je,l=>e(5,a=l)),O(t,pe,l=>e(1,d=l)),O(t,fe,l=>e(2,n=l)),O(t,ve,l=>e(3,r=l)),O(t,Ae,l=>e(4,o=l));let f="";return t.$$.update=()=>{if(t.$$.dirty&32){const l=Math.ceil(a/5),_=Math.ceil(a/3);e(0,f=`--rows-lg: ${l}; --rows-md: ${_};`)}},[f,d,n,r,o,a]}class tt extends ${constructor(s){super();x(this,s,et,xe,ee,{})}}function st(t){let s,e,a,d,n,r,o,f,l,_,k,h,V,m,B,D,E;return _=new Ee({props:{count:ue,label:"Min Number"}}),h=new Ee({props:{count:ie,label:"Max Number"}}),m=new Xe({}),D=new tt({}),{c(){s=q(),e=w("section"),a=w("h1"),d=P("Rolly for Le Mod"),n=q(),r=w("h2"),o=P("Edit the numbers below to adjust the quantity"),f=q(),l=w("div"),te(_.$$.fragment),k=q(),te(h.$$.fragment),V=q(),te(m.$$.fragment),B=q(),te(D.$$.fragment),this.h()},l(i){Se('[data-svelte="svelte-1anpopb"]',document.head).forEach(v),s=L(i),e=N(i,"SECTION",{class:!0});var y=I(e);a=N(y,"H1",{class:!0});var C=I(a);d=R(C,"Rolly for Le Mod"),C.forEach(v),n=L(y),r=N(y,"H2",{});var T=I(r);o=R(T,"Edit the numbers below to adjust the quantity"),T.forEach(v),f=L(y),l=N(y,"DIV",{class:!0});var z=I(l);se(_.$$.fragment,z),k=L(z),se(h.$$.fragment,z),z.forEach(v),V=L(y),se(m.$$.fragment,y),B=L(y),se(D.$$.fragment,y),y.forEach(v),this.h()},h(){document.title="Home",c(a,"class","svelte-5gdv5z"),c(l,"class","counters svelte-5gdv5z"),c(e,"class","svelte-5gdv5z")},m(i,b){j(i,s,b),j(i,e,b),u(e,a),u(a,d),u(e,n),u(e,r),u(r,o),u(e,f),u(e,l),ne(_,l,null),u(l,k),ne(h,l,null),u(e,V),ne(m,e,null),u(e,B),ne(D,e,null),E=!0},p:A,i(i){E||(X(_.$$.fragment,i),X(h.$$.fragment,i),X(m.$$.fragment,i),X(D.$$.fragment,i),E=!0)},o(i){Y(_.$$.fragment,i),Y(h.$$.fragment,i),Y(m.$$.fragment,i),Y(D.$$.fragment,i),E=!1},d(i){i&&v(s),i&&v(e),le(_),le(h),le(m),le(D)}}}const lt=!0;class at extends ${constructor(s){super();x(this,s,null,st,ee,{})}}export{at as default,lt as prerender};