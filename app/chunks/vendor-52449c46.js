function $(){}function lt(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function Q(){return Object.create(null)}function A(t){t.forEach(K)}function R(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function Ct(t,e){return z||(z=document.createElement("a")),z.href=e,t===z.href}function ut(t){return Object.keys(t).length===0}function U(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Dt(t,e,n){t.$$.on_destroy.push(U(e,n))}function zt(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function Pt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const f=[],o=Math.max(e.dirty.length,r.length);for(let l=0;l<o;l+=1)f[l]=e.dirty[l]|r[l];return f}return e.dirty|r}return e.dirty}function Tt(t,e,n,i,r,f){if(r){const o=V(e,n,i,f);t.p(o,r)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ot(t){return t==null?"":t}function Bt(t,e,n){return t.set(n),e}const X=typeof window!="undefined";let Y=X?()=>window.performance.now():()=>Date.now(),Z=X?t=>requestAnimationFrame(t):$;const S=new Set;function v(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&Z(v)}function at(t){let e;return S.size===0&&Z(v),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let P=!1;function dt(){P=!0}function _t(){P=!1}function ht(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let c=0;c<e.length;c++){const u=e[c];u.claim_order!==void 0&&s.push(u)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const c=e[s].claim_order,u=(r>0&&e[n[r]].claim_order<=c?r+1:ht(1,r,_=>e[n[_]].claim_order,c))-1;i[s]=n[u]+1;const d=u+1;n[d]=s,r=Math.max(d,r)}const f=[],o=[];let l=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(f.push(e[s-1]);l>=s;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);f.reverse(),o.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<o.length;s++){for(;c<f.length&&o[s].claim_order>=f[c].claim_order;)c++;const u=c<f.length?f[c]:null;t.insertBefore(o[s],u)}}function pt(t,e){if(P){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){P&&!n?pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function yt(t){t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function gt(t){return document.createElement(t)}function bt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function It(){return F(" ")}function Wt(){return F("")}function Gt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Jt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Qt(t){return t===""?null:+t}function wt(t){return Array.from(t.childNodes)}function xt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,r=!1){xt(t);const f=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const s=n(l);return s===void 0?t.splice(o,1):t[o]=s,r||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const s=n(l);return s===void 0?t.splice(o,1):t[o]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function et(t,e,n,i){return tt(t,r=>r.nodeName===e,r=>{const f=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];n[l.name]||f.push(l.name)}f.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Rt(t,e,n){return et(t,e,n,gt)}function Ut(t,e,n){return et(t,e,n,bt)}function $t(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function Vt(t){return $t(t," ")}function Xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Yt(t,e){t.value=e==null?"":e}function Zt(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function vt(t,e,n){t.classList[n?"add":"remove"](e)}function te(t,e=document.body){return Array.from(e.querySelectorAll(t))}let T;function L(t){T=t}function q(){if(!T)throw new Error("Function called outside component initialization");return T}function ee(t){q().$$.on_mount.push(t)}function ne(t){q().$$.after_update.push(t)}function ie(t){q().$$.on_destroy.push(t)}function se(t,e){q().$$.context.set(t,e)}function re(t){return q().$$.context.get(t)}const C=[],nt=[],O=[],it=[],kt=Promise.resolve();let H=!1;function Et(){H||(H=!0,kt.then(st))}function I(t){O.push(t)}let W=!1;const G=new Set;function st(){if(!W){W=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];L(e),At(e.$$)}for(L(null),C.length=0;nt.length;)nt.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];G.has(e)||(G.add(e),e())}O.length=0}while(C.length);for(;it.length;)it.pop()();H=!1,W=!1,G.clear()}}function At(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const B=new Set;let k;function oe(){k={r:0,c:[],p:k}}function ce(){k.r||A(k.c),k=k.p}function rt(t,e){t&&t.i&&(B.delete(t),t.i(e))}function St(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),k.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function le(t,e){St(t,1,1,()=>{e.delete(t.key)})}function fe(t,e,n,i,r,f,o,l,s,c,u,d){let _=t.length,a=f.length,h=_;const p={};for(;h--;)p[t[h].key]=h;const w=[],y=new Map,M=new Map;for(h=a;h--;){const m=d(r,f,h),g=n(m);let b=o.get(g);b?i&&b.p(m,e):(b=c(g,m),b.c()),y.set(g,w[h]=b),g in p&&M.set(g,Math.abs(h-p[g]))}const x=new Set,E=new Set;function N(m){rt(m,1),m.m(l,u),o.set(m.key,m),u=m.first,a--}for(;_&&a;){const m=w[a-1],g=t[_-1],b=m.key,D=g.key;m===g?(u=m.first,_--,a--):y.has(D)?!o.has(b)||x.has(b)?N(m):E.has(D)?_--:M.get(b)>M.get(D)?(E.add(b),N(m)):(x.add(D),_--):(s(g,o),_--)}for(;_--;){const m=t[_];y.has(m.key)||s(m,o)}for(;a;)N(w[a-1]);return w}function ue(t,e){const n={},i={},r={$$scope:1};let f=t.length;for(;f--;){const o=t[f],l=e[f];if(l){for(const s in o)s in l||(i[s]=1);for(const s in l)r[s]||(n[s]=l[s],r[s]=1);t[f]=l}else for(const s in o)r[s]=1}for(const o in i)o in n||(n[o]=void 0);return n}function ae(t){return typeof t=="object"&&t!==null?t:{}}function de(t){t&&t.c()}function _e(t,e){t&&t.l(e)}function jt(t,e,n,i){const{fragment:r,on_mount:f,on_destroy:o,after_update:l}=t.$$;r&&r.m(e,n),i||I(()=>{const s=f.map(K).filter(R);o?o.push(...s):A(s),t.$$.on_mount=[]}),l.forEach(I)}function Mt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nt(t,e){t.$$.dirty[0]===-1&&(C.push(t),Et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function he(t,e,n,i,r,f,o,l=[-1]){const s=T;L(t);const c=t.$$={fragment:null,ctx:null,props:f,update:$,not_equal:r,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:Q(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(d,_,...a)=>{const h=a.length?a[0]:_;return c.ctx&&r(c.ctx[d],c.ctx[d]=h)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](h),u&&Nt(t,d)),_}):[],c.update(),u=!0,A(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){dt();const d=wt(e.target);c.fragment&&c.fragment.l(d),d.forEach(yt)}else c.fragment&&c.fragment.c();e.intro&&rt(t.$$.fragment),jt(t,e.target,e.anchor,e.customElement),_t(),st()}L(s)}class me{$destroy(){Mt(this,1),this.$destroy=$}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const j=[];function qt(t,e){return{subscribe:ot(t,e).subscribe}}function ot(t,e=$){let n;const i=new Set;function r(l){if(ft(t,l)&&(t=l,n)){const s=!j.length;for(const c of i)c[1](),j.push(c,t);if(s){for(let c=0;c<j.length;c+=2)j[c][0](j[c+1]);j.length=0}}}function f(l){r(l(t))}function o(l,s=$){const c=[l,s];return i.add(c),i.size===1&&(n=e(r)||$),l(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:f,subscribe:o}}function pe(t,e,n){const i=!Array.isArray(t),r=i?[t]:t,f=e.length<2;return qt(n,o=>{let l=!1;const s=[];let c=0,u=$;const d=()=>{if(c)return;u();const a=e(i?s[0]:s,o);f?o(a):u=R(a)?a:$},_=r.map((a,h)=>U(a,p=>{s[h]=p,c&=~(1<<h),l&&d()},()=>{c|=1<<h}));return l=!0,d(),function(){A(_),u()}})}function ct(t){return Object.prototype.toString.call(t)==="[object Date]"}function J(t,e,n,i){if(typeof n=="number"||ct(n)){const r=i-n,f=(n-e)/(t.dt||1/60),o=t.opts.stiffness*r,l=t.opts.damping*f,s=(o-l)*t.inv_mass,c=(f+s)*t.dt;return Math.abs(c)<t.opts.precision&&Math.abs(r)<t.opts.precision?i:(t.settled=!1,ct(n)?new Date(n.getTime()+c):n+c)}else{if(Array.isArray(n))return n.map((r,f)=>J(t,e[f],n[f],i[f]));if(typeof n=="object"){const r={};for(const f in n)r[f]=J(t,e[f],n[f],i[f]);return r}else throw new Error(`Cannot spring ${typeof n} values`)}}function ye(t,e={}){const n=ot(t),{stiffness:i=.15,damping:r=.8,precision:f=.01}=e;let o,l,s,c=t,u=t,d=1,_=0,a=!1;function h(w,y={}){u=w;const M=s={};if(t==null||y.hard||p.stiffness>=1&&p.damping>=1)return a=!0,o=Y(),c=w,n.set(t=u),Promise.resolve();if(y.soft){const x=y.soft===!0?.5:+y.soft;_=1/(x*60),d=0}return l||(o=Y(),a=!1,l=at(x=>{if(a)return a=!1,l=null,!1;d=Math.min(d+_,1);const E={inv_mass:d,opts:p,settled:!0,dt:(x-o)*60/1e3},N=J(E,c,t,u);return o=x,c=t,n.set(t=N),E.settled&&(l=null),!E.settled})),new Promise(x=>{l.promise.then(()=>{M===s&&x()})})}const p={set:h,update:(w,y)=>h(w(u,t),y),subscribe:n.subscribe,stiffness:i,damping:r,precision:f};return p}export{fe as $,ee as A,lt as B,ot as C,bt as D,Ut as E,Ct as F,vt as G,pt as H,$ as I,Dt as J,zt as K,Tt as L,Lt as M,Pt as N,re as O,pe as P,Zt as Q,Yt as R,me as S,Gt as T,Qt as U,A as V,U as W,ye as X,Bt as Y,nt as Z,Ot as _,wt as a,Ht as a0,ie as a1,le as a2,te as a3,Jt as a4,Kt as b,Rt as c,yt as d,gt as e,Ft as f,$t as g,Xt as h,he as i,de as j,It as k,Wt as l,_e as m,Vt as n,jt as o,ue as p,ae as q,oe as r,ft as s,F as t,St as u,Mt as v,ce as w,rt as x,se as y,ne as z};
