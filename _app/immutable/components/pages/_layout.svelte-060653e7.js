import{S as w,i as A,s as D,k as h,l as v,m as d,h as f,n as m,b,C as p,f as _,g as B,d as C,t as $,D as H,E as J,w as S,a as I,q as M,x as V,c as x,r as P,F as N,y as q,z,G as R,H as F,I as G,J as L}from"../../chunks/index-ee22a944.js";import{I as K}from"../../chunks/Icon-31f6f5fd.js";import{N as g,I as y}from"../../chunks/params-2a7efce1.js";import{p as O}from"../../chunks/stores-049399f2.js";import{j as Q}from"../../chunks/singletons-3b933d3f.js";function k(c,t,l){const o=c.slice();return o[3]=t[l],o}function j(c){let t,l,o,r,s=c[3].title+"",i,e,a;return l=new K({props:{icon:c[3].icon,size:"20px"}}),{c(){t=h("a"),S(l.$$.fragment),o=I(),r=h("span"),i=M(s),e=I(),this.h()},l(n){t=v(n,"A",{href:!0,class:!0});var u=d(t);V(l.$$.fragment,u),o=x(u),r=v(u,"SPAN",{class:!0});var E=d(r);i=P(E,s),E.forEach(f),e=x(u),u.forEach(f),this.h()},h(){m(r,"class","nav-menu-item-label svelte-12x85n5"),m(t,"href",`${Q}${c[3].to}`),m(t,"class","nav-menu-item svelte-12x85n5"),N(t,"nav-menu-item-active",c[0]===c[3].to)},m(n,u){b(n,t,u),q(l,t,null),p(t,o),p(t,r),p(r,i),p(t,e),a=!0},p(n,u){(!a||u&3)&&N(t,"nav-menu-item-active",n[0]===n[3].to)},i(n){a||(_(l.$$.fragment,n),a=!0)},o(n){$(l.$$.fragment,n),a=!1},d(n){n&&f(t),z(l)}}}function T(c){let t,l,o,r=c[1],s=[];for(let e=0;e<r.length;e+=1)s[e]=j(k(c,r,e));const i=e=>$(s[e],1,1,()=>{s[e]=null});return{c(){t=h("div"),l=h("nav");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=v(e,"DIV",{class:!0});var a=d(t);l=v(a,"NAV",{class:!0});var n=d(l);for(let u=0;u<s.length;u+=1)s[u].l(n);n.forEach(f),a.forEach(f),this.h()},h(){m(l,"class","container svelte-12x85n5"),m(t,"class","nav-menu svelte-12x85n5")},m(e,a){b(e,t,a),p(t,l);for(let n=0;n<s.length;n+=1)s[n].m(l,null);o=!0},p(e,[a]){if(a&3){r=e[1];let n;for(n=0;n<r.length;n+=1){const u=k(e,r,n);s[n]?(s[n].p(u,a),_(s[n],1)):(s[n]=j(u),s[n].c(),_(s[n],1),s[n].m(l,null))}for(B(),n=r.length;n<s.length;n+=1)i(n);C()}},i(e){if(!o){for(let a=0;a<r.length;a+=1)_(s[a]);o=!0}},o(e){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)$(s[a]);o=!1},d(e){e&&f(t),H(s,e)}}}function U(c,t,l){let o;J(c,O,i=>l(2,o=i));let r="/";const s=[{title:g.home,to:"/",icon:y.Home},{title:g.personal,to:"/projects",icon:y.Projects},{title:g.career,to:"/experience",icon:y.Job},{title:g.resume,to:"/resume",icon:y.Resume}];return c.$$.update=()=>{c.$$.dirty&4&&o&&l(0,r=o.url.pathname)},[r,s,o]}class W extends w{constructor(t){super(),A(this,t,U,T,D,{})}}function X(c){let t,l,o,r;t=new W({});const s=c[2].default,i=R(s,c,c[1],null);return{c(){S(t.$$.fragment),l=I(),o=h("div"),i&&i.c(),this.h()},l(e){V(t.$$.fragment,e),l=x(e),o=v(e,"DIV",{class:!0});var a=d(o);i&&i.l(a),a.forEach(f),this.h()},h(){m(o,"class","content container svelte-1ybpxdf")},m(e,a){q(t,e,a),b(e,l,a),b(e,o,a),i&&i.m(o,null),r=!0},p(e,[a]){i&&i.p&&(!r||a&2)&&F(i,s,e,e[1],r?L(s,e[1],a,null):G(e[1]),null)},i(e){r||(_(t.$$.fragment,e),_(i,e),r=!0)},o(e){$(t.$$.fragment,e),$(i,e),r=!1},d(e){z(t,e),e&&f(l),e&&f(o),i&&i.d(e)}}}function Y(c,t,l){let{$$slots:o={},$$scope:r}=t;const s=!0;return c.$$set=i=>{"$$scope"in i&&l(1,r=i.$$scope)},[s,r,o]}class ae extends w{constructor(t){super(),A(this,t,Y,X,D,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{ae as default};