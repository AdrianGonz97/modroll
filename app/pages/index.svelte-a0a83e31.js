import{P as Ce,C as z,S as se,i as le,s as ne,e as g,t as B,k as R,E as ie,c as y,a as E,g as V,d as v,n as A,F as de,b as i,Q as pe,f as H,I as r,R as X,T as G,h as Z,U as be,J,V as ge,W as Re,X as Ve,K as U,Y as ye,G as Ae,Z as Ue,_ as Te,z as Pe,l as De,j as ae,m as re,o as oe,p as je,q as Ge,x,u as $,v as ue,r as Ke,$ as We,w as He,a0 as Je,A as Ye,a1 as ze,B as Fe,a2 as Qe,a3 as Xe}from"../chunks/vendor-f09d60b8.js";let he=z({name:"None",num:0}),Ee=z("None"),Me=z(["None","None"]),Ne=z(0),fe=z(1),_e=z(50),Ze=Ce([fe,_e],([t,s])=>s-t+1);const xe=Ce([fe,_e],([t,s])=>{const e=[];for(let n=t;n<=s;n++){const h={num:n,name:""};e.push(h)}return e}),F=z(new Map);{const t=localStorage.getItem("userList"),s=new Map(JSON.parse(t));F.set(s),F.subscribe(e=>localStorage.userList=JSON.stringify(Array.from(e.entries())))}function $e(t){let s,e,n,h,l,o,c,_,a,f,d,M,N,p,I,S,L,u,b,C,q;return{c(){s=g("div"),e=g("div"),n=B(t[1]),h=R(),l=g("div"),o=g("button"),c=ie("svg"),_=ie("path"),a=R(),f=g("div"),d=g("div"),M=g("input"),p=R(),I=g("input"),S=R(),L=g("button"),u=ie("svg"),b=ie("path"),this.h()},l(T){s=y(T,"DIV",{class:!0});var D=E(s);e=y(D,"DIV",{});var P=E(e);n=V(P,t[1]),P.forEach(v),h=A(D),l=y(D,"DIV",{class:!0});var j=E(l);o=y(j,"BUTTON",{"aria-label":!0,class:!0});var ee=E(o);c=de(ee,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var W=E(c);_=de(W,"path",{d:!0,class:!0}),E(_).forEach(v),W.forEach(v),ee.forEach(v),a=A(j),f=y(j,"DIV",{class:!0});var O=E(f);d=y(O,"DIV",{class:!0,style:!0});var K=E(d);M=y(K,"INPUT",{style:!0,"aria-hidden":!0,class:!0}),p=A(K),I=y(K,"INPUT",{type:!0,class:!0}),K.forEach(v),O.forEach(v),S=A(j),L=y(j,"BUTTON",{"aria-label":!0,class:!0});var te=E(L);u=de(te,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var m=E(u);b=de(m,"path",{d:!0,class:!0}),E(b).forEach(v),m.forEach(v),te.forEach(v),j.forEach(v),D.forEach(v),this.h()},h(){i(_,"d","M0,0.5 L1,0.5"),i(_,"class","svelte-1qdacbr"),i(c,"aria-hidden","true"),i(c,"viewBox","0 0 1 1"),i(c,"class","svelte-1qdacbr"),i(o,"aria-label","Decrease the counter by one"),i(o,"class","svelte-1qdacbr"),pe(M,"top","-100%"),i(M,"aria-hidden","true"),M.value=N=Math.floor(t[2]+1),i(M,"class","svelte-1qdacbr"),i(I,"type","number"),i(I,"class","svelte-1qdacbr"),i(d,"class","counter-digits svelte-1qdacbr"),pe(d,"transform","translate(0, "+100*t[4]+"%)"),i(f,"class","counter-viewport svelte-1qdacbr"),i(b,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),i(b,"class","svelte-1qdacbr"),i(u,"aria-hidden","true"),i(u,"viewBox","0 0 1 1"),i(u,"class","svelte-1qdacbr"),i(L,"aria-label","Increase the counter by one"),i(L,"class","svelte-1qdacbr"),i(l,"class","counter svelte-1qdacbr"),i(s,"class","container svelte-1qdacbr")},m(T,D){H(T,s,D),r(s,e),r(e,n),r(s,h),r(s,l),r(l,o),r(o,c),r(c,_),r(l,a),r(l,f),r(f,d),r(d,M),r(d,p),r(d,I),X(I,t[3]),r(l,S),r(l,L),r(L,u),r(u,b),C||(q=[G(o,"click",t[6]),G(I,"input",t[7]),G(L,"click",t[8])],C=!0)},p(T,[D]){D&2&&Z(n,T[1]),D&4&&N!==(N=Math.floor(T[2]+1))&&M.value!==N&&(M.value=N),D&8&&be(I.value)!==T[3]&&X(I,T[3]),D&16&&pe(d,"transform","translate(0, "+100*T[4]+"%)")},i:J,o:J,d(T){T&&v(s),C=!1,ge(q)}}}function et(t,s){return t%s}function tt(t){return t-1<1?1:--t}function st(t){return t+1>999?999:++t}function lt(t,s,e){let n,h,l,o=J,c=()=>(o(),o=Re(_,p=>e(3,l=p)),_);t.$$.on_destroy.push(()=>o());let{count:_}=s;c();let{label:a}=s;const f=Ve();U(t,f,p=>e(2,h=p));const d=()=>ye(_,l=tt(l),l);function M(){l=be(this.value),_.set(l)}const N=()=>ye(_,l=st(l),l);return t.$$set=p=>{"count"in p&&c(e(0,_=p.count)),"label"in p&&e(1,a=p.label)},t.$$.update=()=>{t.$$.dirty&8&&f.set(l),t.$$.dirty&4&&e(4,n=et(h,1))},[_,a,h,l,n,f,d,M,N]}class Le extends se{constructor(s){super();le(this,s,lt,$e,ne,{count:0,label:1})}}function nt(t){let s,e,n,h,l,o,c,_,a,f,d,M,N,p,I,S,L=!0,u,b;return{c(){s=g("div"),e=g("button"),n=B("CLICK ME TO ROLL"),l=R(),o=g("div"),c=g("span"),_=B("Drum Volume: "),a=g("b"),f=B(t[1]),d=B("%"),M=R(),N=g("input"),p=R(),I=g("audio"),this.h()},l(C){s=y(C,"DIV",{class:!0});var q=E(s);e=y(q,"BUTTON",{class:!0});var T=E(e);n=V(T,"CLICK ME TO ROLL"),T.forEach(v),l=A(q),o=y(q,"DIV",{class:!0});var D=E(o);c=y(D,"SPAN",{});var P=E(c);_=V(P,"Drum Volume: "),a=y(P,"B",{class:!0});var j=E(a);f=V(j,t[1]),d=V(j,"%"),j.forEach(v),P.forEach(v),M=A(D),N=y(D,"INPUT",{type:!0,min:!0,max:!0,class:!0}),D.forEach(v),p=A(q),I=y(q,"AUDIO",{src:!0}),E(I).forEach(v),q.forEach(v),this.h()},h(){e.disabled=h=!t[2],i(e,"class","svelte-14x8rgv"),i(a,"class","svelte-14x8rgv"),i(N,"type","range"),i(N,"min","0"),i(N,"max","100"),i(N,"class","svelte-14x8rgv"),i(o,"class","volume-container svelte-14x8rgv"),Ae(I.src,S="drumroll.mp3")||i(I,"src",S),i(s,"class","roll-container svelte-14x8rgv")},m(C,q){H(C,s,q),r(s,e),r(e,n),r(s,l),r(s,o),r(o,c),r(c,_),r(c,a),r(a,f),r(a,d),r(o,M),r(o,N),X(N,t[1]),r(s,p),r(s,I),t[7](I),u||(b=[G(e,"click",t[3]),G(N,"change",t[5]),G(N,"input",t[5]),G(N,"change",t[4]),G(I,"play",t[6]),G(I,"pause",t[6])],u=!0)},p(C,[q]){q&4&&h!==(h=!C[2])&&(e.disabled=h),q&2&&Z(f,C[1]),q&2&&X(N,C[1]),q&4&&L!==(L=C[2])&&I[L?"pause":"play"]()},i:J,o:J,d(C){C&&v(s),t[7](null),u=!1,ge(b)}}}function at(t,s,e){let n,h,l,o,c,_;U(t,Me,u=>e(8,n=u)),U(t,Ee,u=>e(9,h=u)),U(t,F,u=>e(10,l=u)),U(t,fe,u=>e(11,o=u)),U(t,_e,u=>e(12,c=u)),U(t,Ne,u=>e(13,_=u));let a,f=50,d=!0;function M(){d&&(N(),a.play(),p(),ye(Ne,_++,_),he.set({name:"None",num:0}))}function N(){e(0,a.volume=f/100,a)}function p(){setTimeout(()=>{const u=Math.floor(Math.random()*(c-o+1)+o),b=l.get(u);b?(h!=b&&Me.set([h,n[0]]),he.set({name:b,num:u}),Ee.set(b)):he.set({name:"None",num:u}),console.log(`Winner: ${u} - ${b}`)},3200)}function I(){f=be(this.value),e(1,f)}function S(){d=this.paused,e(2,d)}function L(u){Ue[u?"unshift":"push"](()=>{a=u,e(0,a)})}return[a,f,d,M,N,I,S,L]}class rt extends se{constructor(s){super();le(this,s,at,nt,ne,{})}}function ot(t){let s,e,n,h,l,o,c,_;return{c(){s=g("div"),e=g("span"),n=B(t[1]),h=R(),l=g("input"),this.h()},l(a){s=y(a,"DIV",{class:!0});var f=E(s);e=y(f,"SPAN",{class:!0});var d=E(e);n=V(d,t[1]),d.forEach(v),h=A(f),l=y(f,"INPUT",{"aria-label":!0,placeholder:!0,class:!0}),f.forEach(v),this.h()},h(){i(e,"class","svelte-1ytalfs"),i(l,"aria-label","Username"),i(l,"placeholder",""),i(l,"class","svelte-1ytalfs"),i(s,"class",o=""+(Te(t[2].num===t[1]?"winner":"name-container")+" svelte-1ytalfs"))},m(a,f){H(a,s,f),r(s,e),r(e,n),r(s,h),r(s,l),X(l,t[0]),c||(_=[G(l,"input",t[5]),G(l,"keydown",t[3])],c=!0)},p(a,[f]){f&2&&Z(n,a[1]),f&1&&l.value!==a[0]&&X(l,a[0]),f&6&&o!==(o=""+(Te(a[2].num===a[1]?"winner":"name-container")+" svelte-1ytalfs"))&&i(s,"class",o)},i:J,o:J,d(a){a&&v(s),c=!1,ge(_)}}}function ut(t,s,e){let n,h;U(t,F,a=>e(4,n=a)),U(t,he,a=>e(2,h=a));let{num:l}=s,{name:o}=s;function c(a){(a.key==="Delete"||a.key==="Backspace")&&n.set(l,"")}Pe(()=>{const a=n.get(l);a?e(0,o=a):F.set(n.set(l,""))});function _(){o=this.value,e(0,o)}return t.$$set=a=>{"num"in a&&e(1,l=a.num),"name"in a&&e(0,o=a.name)},t.$$.update=()=>{t.$$.dirty&19&&o&&n.set(l,o)},[o,l,h,c,n,_]}class ct extends se{constructor(s){super();le(this,s,ut,ot,ne,{num:1,name:0})}}function qe(t,s,e){const n=t.slice();return n[8]=s[e],n}function Se(t,s,e){const n=t.slice();return n[11]=s[e],n}function Oe(t){let s,e,n=t[11]+"",h;return{c(){s=B("\xA0"),e=g("strong"),h=B(n),this.h()},l(l){s=V(l,"\xA0"),e=y(l,"STRONG",{class:!0});var o=E(e);h=V(o,n),o.forEach(v),this.h()},h(){i(e,"class","svelte-1nr5b1h")},m(l,o){H(l,s,o),H(l,e,o),r(e,h)},p(l,o){o&8&&n!==(n=l[11]+"")&&Z(h,n)},d(l){l&&v(s),l&&v(e)}}}function Be(t,s){let e,n,h;const l=[s[8]];let o={};for(let c=0;c<l.length;c+=1)o=Fe(o,l[c]);return n=new ct({props:o}),{key:t,first:null,c(){e=De(),ae(n.$$.fragment),this.h()},l(c){e=De(),re(n.$$.fragment,c),this.h()},h(){this.first=e},m(c,_){H(c,e,_),oe(n,c,_),h=!0},p(c,_){s=c;const a=_&16?je(l,[Ge(s[8])]):{};n.$set(a)},i(c){h||(x(n.$$.fragment,c),h=!0)},o(c){$(n.$$.fragment,c),h=!1},d(c){c&&v(e),ue(n,c)}}}function it(t){let s,e,n,h,l,o,c,_,a,f,d,M,N,p,I,S,L,u,b=[],C=new Map,q,T,D,P,j,ee,W=t[3],O=[];for(let m=0;m<W.length;m+=1)O[m]=Oe(Se(t,W,m));let K=t[4];const te=m=>m[8].num;for(let m=0;m<K.length;m+=1){let w=qe(t,K,m),k=te(w);C.set(k,b[m]=Be(k,w))}return{c(){s=g("div"),e=g("div"),n=g("span"),h=B("Roll "),l=g("strong"),o=B("#"),c=B(t[1]),_=R(),a=g("span"),f=B("Current Mod: "),d=g("strong"),M=B(t[2]),N=R(),p=g("span"),I=B("Past Winners: [");for(let m=0;m<O.length;m+=1)O[m].c();S=B(`
			]`),L=R(),u=g("div");for(let m=0;m<b.length;m+=1)b[m].c();q=R(),T=g("button"),D=B("Clear All"),this.h()},l(m){s=y(m,"DIV",{class:!0});var w=E(s);e=y(w,"DIV",{class:!0});var k=E(e);n=y(k,"SPAN",{class:!0});var Q=E(n);h=V(Q,"Roll "),l=y(Q,"STRONG",{class:!0});var ve=E(l);o=V(ve,"#"),c=V(ve,t[1]),ve.forEach(v),Q.forEach(v),_=A(k),a=y(k,"SPAN",{class:!0});var me=E(a);f=V(me,"Current Mod: "),d=y(me,"STRONG",{class:!0});var we=E(d);M=V(we,t[2]),we.forEach(v),me.forEach(v),N=A(k),p=y(k,"SPAN",{class:!0});var ce=E(p);I=V(ce,"Past Winners: [");for(let Y=0;Y<O.length;Y+=1)O[Y].l(ce);S=V(ce,`
			]`),ce.forEach(v),k.forEach(v),L=A(w),u=y(w,"DIV",{class:!0,style:!0});var Ie=E(u);for(let Y=0;Y<b.length;Y+=1)b[Y].l(Ie);Ie.forEach(v),q=A(w),T=y(w,"BUTTON",{class:!0});var ke=E(T);D=V(ke,"Clear All"),ke.forEach(v),w.forEach(v),this.h()},h(){i(l,"class","svelte-1nr5b1h"),i(n,"class","svelte-1nr5b1h"),i(d,"class","svelte-1nr5b1h"),i(a,"class","svelte-1nr5b1h"),i(p,"class","svelte-1nr5b1h"),i(e,"class","stats svelte-1nr5b1h"),i(u,"class","con svelte-1nr5b1h"),i(u,"style",t[0]),i(T,"class","clear svelte-1nr5b1h"),i(s,"class","container svelte-1nr5b1h")},m(m,w){H(m,s,w),r(s,e),r(e,n),r(n,h),r(n,l),r(l,o),r(l,c),r(e,_),r(e,a),r(a,f),r(a,d),r(d,M),r(e,N),r(e,p),r(p,I);for(let k=0;k<O.length;k+=1)O[k].m(p,null);r(p,S),r(s,L),r(s,u);for(let k=0;k<b.length;k+=1)b[k].m(u,null);r(s,q),r(s,T),r(T,D),P=!0,j||(ee=G(T,"click",dt),j=!0)},p(m,[w]){if((!P||w&2)&&Z(c,m[1]),(!P||w&4)&&Z(M,m[2]),w&8){W=m[3];let k;for(k=0;k<W.length;k+=1){const Q=Se(m,W,k);O[k]?O[k].p(Q,w):(O[k]=Oe(Q),O[k].c(),O[k].m(p,S))}for(;k<O.length;k+=1)O[k].d(1);O.length=W.length}w&16&&(K=m[4],Ke(),b=We(b,w,te,1,m,K,C,u,Qe,Be,null,qe),He()),(!P||w&1)&&i(u,"style",m[0])},i(m){if(!P){for(let w=0;w<K.length;w+=1)x(b[w]);P=!0}},o(m){for(let w=0;w<b.length;w+=1)$(b[w]);P=!1},d(m){m&&v(s),Je(O,m);for(let w=0;w<b.length;w+=1)b[w].d();j=!1,ee()}}}function dt(){confirm("Are you really sure you want to clear ALL the NAMES?")&&confirm("OK, yeah. But seriously though, ARE YOU REALLY SURE?")&&(console.log("Clearing all names"),localStorage.removeItem("userList"),window.location.reload())}function ht(t,s,e){let n,h,l,o,c,_;U(t,Ze,d=>e(5,n=d)),U(t,F,d=>e(7,h=d)),U(t,Ne,d=>e(1,l=d)),U(t,Ee,d=>e(2,o=d)),U(t,Me,d=>e(3,c=d)),U(t,xe,d=>e(4,_=d));let a;Ye(()=>{a=setInterval(()=>{F.set(h)},5e3)}),ze(()=>{clearInterval(a)});let f="";return t.$$.update=()=>{if(t.$$.dirty&32){const d=Math.ceil(n/5),M=Math.ceil(n/3);e(0,f=`--rows-lg: ${d}; --rows-md: ${M};`)}},[f,l,o,c,_,n]}class ft extends se{constructor(s){super();le(this,s,ht,it,ne,{})}}function _t(t){let s,e,n,h,l,o,c,_,a,f,d,M,N,p,I,S,L;return f=new Le({props:{count:fe,label:"Min Number"}}),M=new Le({props:{count:_e,label:"Max Number"}}),p=new rt({}),S=new ft({}),{c(){s=R(),e=g("section"),n=g("h1"),h=B("Rolly for Le Mod"),l=R(),o=g("h2"),c=B("Edit the numbers below to adjust the quantity"),_=R(),a=g("div"),ae(f.$$.fragment),d=R(),ae(M.$$.fragment),N=R(),ae(p.$$.fragment),I=R(),ae(S.$$.fragment),this.h()},l(u){Xe('[data-svelte="svelte-1anpopb"]',document.head).forEach(v),s=A(u),e=y(u,"SECTION",{class:!0});var C=E(e);n=y(C,"H1",{class:!0});var q=E(n);h=V(q,"Rolly for Le Mod"),q.forEach(v),l=A(C),o=y(C,"H2",{class:!0});var T=E(o);c=V(T,"Edit the numbers below to adjust the quantity"),T.forEach(v),_=A(C),a=y(C,"DIV",{class:!0});var D=E(a);re(f.$$.fragment,D),d=A(D),re(M.$$.fragment,D),D.forEach(v),N=A(C),re(p.$$.fragment,C),I=A(C),re(S.$$.fragment,C),C.forEach(v),this.h()},h(){document.title="Home",i(n,"class","svelte-1ibeh9m"),i(o,"class","svelte-1ibeh9m"),i(a,"class","counters svelte-1ibeh9m"),i(e,"class","svelte-1ibeh9m")},m(u,b){H(u,s,b),H(u,e,b),r(e,n),r(n,h),r(e,l),r(e,o),r(o,c),r(e,_),r(e,a),oe(f,a,null),r(a,d),oe(M,a,null),r(e,N),oe(p,e,null),r(e,I),oe(S,e,null),L=!0},p:J,i(u){L||(x(f.$$.fragment,u),x(M.$$.fragment,u),x(p.$$.fragment,u),x(S.$$.fragment,u),L=!0)},o(u){$(f.$$.fragment,u),$(M.$$.fragment,u),$(p.$$.fragment,u),$(S.$$.fragment,u),L=!1},d(u){u&&v(s),u&&v(e),ue(f),ue(M),ue(p),ue(S)}}}class mt extends se{constructor(s){super();le(this,s,null,_t,ne,{})}}export{mt as default};
