import{P as et}from"../chunks/projects.B1Wv1Gb4.js";import{s as at,e as rt,t as $,a,b as _,c as P,d as st}from"../chunks/disclose-version.Cfp-rwoP.js";import{p as ot,a as it,g as o,f as w,t as n,d as L,c as k,n as b,s as i,r as m}from"../chunks/utils.jAVDF0d8.js";import{i as H}from"../chunks/index-client.BSQKl7cS.js";import{e as O,i as lt,d as dt}from"../chunks/stores.B-wyEEU5.js";import{s as S,h as nt}from"../chunks/base.mDsIHoJB.js";import{B as mt}from"../chunks/base-page.BWWcYU_t.js";import{E as ft}from"../chunks/empty-result.Bojbys30.js";import{F as vt,M as ct,E as _t}from"../chunks/markdown.Dgj-VdIQ.js";import{S as gt}from"../chunks/screenshot-card.BqDcjLog.js";import{B as Q}from"../chunks/index.i8LvOluo.js";import{S as z}from"../chunks/separator.CY9iLDiu.js";import{H as ut}from"../chunks/h1.BKfizX9F.js";import{M as D,A as pt}from"../chunks/assets.C_kilVN1.js";import"../chunks/legacy.Ccq7PQRh.js";function ht({params:y}){if(y.slug)return{item:et.items.find(j=>j.slug===y.slug)}}const Ct=Object.freeze(Object.defineProperty({__proto__:null,load:ht},Symbol.toStringTag,{value:"Module"}));var xt=_('<a target="_blank"><!></a>'),$t=_('<img class="h-[20px] w-[20px]"> <!>',1),bt=_("<a><!></a>"),yt=_('<div class="flex w-full flex-col items-center justify-center gap-4"><!> <!> <!> <div class="flex flex-row flex-wrap justify-center gap-2"></div> <div class="flex flex-row flex-wrap justify-center gap-2"></div></div>'),Pt=_('<!> <div class="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>',1),wt=_('<!> <!> <!> <!> <div class="flex flex-col gap-2 px-4 pt-4"><!></div>',1);function Gt(y,t){ot(t,!0);const j=at(),N=()=>st(dt,"$mode",j);let R=L(()=>{var l,f;return`${((f=(l=t.data)==null?void 0:l.item)==null?void 0:f.name)??"Not Found"} - Skills`}),V=L(()=>{var l,f,g;return(N()=="dark"?(f=(l=t.data)==null?void 0:l.item)==null?void 0:f.logo.dark:(g=t.data.item)==null?void 0:g.logo.light)??pt.Unknown.light});mt(y,{get title(){return o(R)},children:(l,f)=>{var g=rt(),W=w(g);H(W,()=>!t.data.item,M=>{ft(M)},M=>{var T=wt(),U=w(T);vt(U,{get img(){return o(V)},children:(d,B)=>{var v=yt(),u=k(v);ut(u,{children:(r,s)=>{b();var e=$();n(()=>P(e,t.data.item.name)),a(r,e)},$$slots:{default:!0}});var c=i(u,2);D(c,{children:(r,s)=>{b();var e=$();n(()=>P(e,t.data.item.type)),a(r,e)},$$slots:{default:!0}});var p=i(c,2);z(p,{});var h=i(p,2);O(h,21,()=>t.data.item.links,r=>r.to,(r,s)=>{var e=xt(),E=k(e);Q(E,{variant:"outline",children:(F,Y)=>{b();var x=$();n(()=>P(x,o(s).label)),a(F,x)},$$slots:{default:!0}}),m(e),n(()=>S(e,"href",o(s).to)),a(r,e)}),m(h);var J=i(h,2);O(J,21,()=>t.data.item.skills,r=>r.slug,(r,s)=>{var e=bt();n(()=>S(e,"href",nt(`/skills/${o(s).slug}`)));var E=k(e);Q(E,{variant:"outline",class:"flex flex-row items-center justify-center gap-2",children:(F,Y)=>{var x=$t(),A=w(x),Z=i(A,2);D(Z,{children:(tt,kt)=>{b();var K=$();n(()=>P(K,o(s).name)),a(tt,K)},$$slots:{default:!0}}),n(()=>{S(A,"src",N()==="dark"?o(s).logo.dark:o(s).logo.light),S(A,"alt",o(s).name)}),a(F,x)},$$slots:{default:!0}}),m(e),a(r,e)}),m(J),m(v),a(d,v)},$$slots:{default:!0}});var q=i(U,2);z(q,{});var C=i(q,2);H(C,()=>t.data.item.description.trim(),d=>{ct(d,{get content(){return t.data.item.description}})},d=>{_t(d)});var G=i(C,2);z(G,{});var I=i(G,2),X=k(I);H(X,()=>t.data.item.screenshots&&t.data.item.screenshots.length>0,d=>{var B=Pt(),v=w(B);D(v,{children:(c,p)=>{b();var h=$("Screenshots");a(c,h)},$$slots:{default:!0}});var u=i(v,2);O(u,21,()=>t.data.item.screenshots,lt,(c,p)=>{gt(c,{get item(){return o(p)}})}),m(u),a(d,B)}),m(I),a(M,T)}),a(l,g)},$$slots:{default:!0}}),it()}export{Gt as component,Ct as universal};
