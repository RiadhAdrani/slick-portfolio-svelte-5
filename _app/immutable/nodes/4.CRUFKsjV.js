import{E as R}from"../chunks/education.BxQjrDw4.js";import{s as V,e as W,t as u,a as s,b as B,c as x,d as X}from"../chunks/disclose-version.Cfp-rwoP.js";import{p as Y,a as Z,g as h,f as S,t as b,d as E,c as T,n as v,s as i,r as y}from"../chunks/utils.jAVDF0d8.js";import{i as j}from"../chunks/index-client.BSQKl7cS.js";import{e as q,i as tt,d as et}from"../chunks/stores.B-wyEEU5.js";import{B as at}from"../chunks/base-page.BWWcYU_t.js";import{E as rt}from"../chunks/empty-result.Bojbys30.js";import{F as ot,M as st,E as it}from"../chunks/markdown.Dgj-VdIQ.js";import{S as dt}from"../chunks/screenshot-card.BqDcjLog.js";import{B as lt}from"../chunks/index.i8LvOluo.js";import{S as M}from"../chunks/separator.CY9iLDiu.js";import{H as nt}from"../chunks/h1.BKfizX9F.js";import{M as P,A as mt}from"../chunks/assets.C_kilVN1.js";import{d as ct}from"../chunks/base.mDsIHoJB.js";import"../chunks/legacy.Ccq7PQRh.js";function ft({params:_}){if(_.slug)return{item:R.items.find($=>$.slug===_.slug)}}const At=Object.freeze(Object.defineProperty({__proto__:null,load:ft},Symbol.toStringTag,{value:"Module"}));var ut=B('<div class="flex w-full flex-col items-center justify-center gap-4"><!> <!> <!> <!> <div class="flex flex-row flex-wrap justify-center gap-2"></div></div>'),vt=B('<!> <div class="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>',1),_t=B('<!> <!> <!> <!> <div class="flex flex-col gap-2 px-4 pt-4"><!></div>',1);function Dt(_,t){Y(t,!0);const $=V(),C=()=>X(et,"$mode",$);let G=E(()=>{var e,r;return`${((r=(e=t.data)==null?void 0:e.item)==null?void 0:r.name)??"Not Found"} - Skills`}),I=E(()=>{var e,r,m;return(C()=="dark"?(r=(e=t.data)==null?void 0:e.item)==null?void 0:r.logo.dark:(m=t.data.item)==null?void 0:m.logo.light)??mt.Unknown.light}),J=E(()=>{var e,r;return t.data.item?ct((e=t.data.item)==null?void 0:e.period.from,(r=t.data.item)==null?void 0:r.period.to):"Unknown"});at(_,{get title(){return h(G)},children:(e,r)=>{var m=W(),K=S(m);j(K,()=>!t.data.item,k=>{rt(k)},k=>{var F=_t(),z=S(F);ot(z,{get img(){return h(I)},children:(d,w)=>{var l=ut(),c=T(l);nt(c,{children:(o,p)=>{v();var a=u();b(()=>x(a,t.data.item.degree)),s(o,a)},$$slots:{default:!0}});var n=i(c,2);P(n,{children:(o,p)=>{v();var a=u();b(()=>x(a,`${t.data.item.organization??""} · ${t.data.item.location??""}`)),s(o,a)},$$slots:{default:!0}});var f=i(n,2);P(f,{children:(o,p)=>{v();var a=u();b(()=>x(a,h(J))),s(o,a)},$$slots:{default:!0}});var g=i(f,2);M(g,{});var U=i(g,2);q(U,20,()=>t.data.item.subjects,o=>o,(o,p)=>{lt(o,{variant:"outline",class:"flex flex-row items-center justify-center gap-2",children:(a,gt)=>{P(a,{children:(Q,pt)=>{v();var N=u();b(()=>x(N,p)),s(Q,N)},$$slots:{default:!0}})},$$slots:{default:!0}})}),y(U),y(l),s(d,l)},$$slots:{default:!0}});var A=i(z,2);M(A,{});var D=i(A,2);j(D,()=>t.data.item.description.trim(),d=>{st(d,{get content(){return t.data.item.description}})},d=>{it(d)});var H=i(D,2);M(H,{});var O=i(H,2),L=T(O);j(L,()=>t.data.item.screenshots&&t.data.item.screenshots.length>0,d=>{var w=vt(),l=S(w);P(l,{children:(n,f)=>{v();var g=u("Screenshots");s(n,g)},$$slots:{default:!0}});var c=i(l,2);q(c,21,()=>t.data.item.screenshots,tt,(n,f)=>{dt(n,{get item(){return h(f)}})}),y(c),s(d,w)}),y(O),s(k,F)}),s(e,m)},$$slots:{default:!0}}),Z()}export{Dt as component,At as universal};
