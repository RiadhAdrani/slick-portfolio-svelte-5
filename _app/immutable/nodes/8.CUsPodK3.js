import{P as ot}from"../chunks/projects.C2--bdNb.js";import{s as st,e as it,t as u,a as r,b as p,c as P,d as dt}from"../chunks/disclose-version.Cfp-rwoP.js";import{p as lt,a as nt,g as s,f as k,t as m,d as z,c as S,n as g,s as i,r as c}from"../chunks/utils.jAVDF0d8.js";import{i as N}from"../chunks/index-client.BSQKl7cS.js";import{e as T,i as mt,d as ft}from"../chunks/stores.DiYx_Oak.js";import{s as j,h as ct,g as R,d as vt}from"../chunks/base.b1nvSKRK.js";import{B as _t}from"../chunks/base-page.BVXj-eos.js";import{E as ut}from"../chunks/empty-result.YzUxp-Me.js";import{F as gt,M as pt,E as ht}from"../chunks/markdown.vW8_RmiH.js";import{S as xt}from"../chunks/screenshot-card.DfkxA6Wb.js";import{B as V}from"../chunks/index.D59SQUN7.js";import{S as U}from"../chunks/separator.B2htGY0h.js";import{H as $t}from"../chunks/h1.lR3ePezf.js";import{M,A as Pt}from"../chunks/assets.CqzxopAo.js";import"../chunks/legacy.Ccq7PQRh.js";function bt({params:b}){if(b.slug)return{item:ot.items.find(E=>E.slug===b.slug)}}const Jt=Object.freeze(Object.defineProperty({__proto__:null,load:bt},Symbol.toStringTag,{value:"Module"}));var wt=p('<a target="_blank"><!></a>'),yt=p('<img class="h-[20px] w-[20px]"> <!>',1),kt=p("<a><!></a>"),St=p('<div class="flex w-full flex-col items-center justify-center gap-4"><!> <!> <!> <!> <div class="flex flex-row flex-wrap justify-center gap-2"></div> <div class="flex flex-row flex-wrap justify-center gap-2"></div></div>'),jt=p('<!> <div class="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>',1),Mt=p('<!> <!> <!> <!> <div class="flex flex-col gap-2 px-4 pt-4"><!></div>',1);function Kt(b,t){lt(t,!0);const E=st(),Y=()=>dt(ft,"$mode",E);let W=z(()=>{var d,l;return`${((l=(d=t.data)==null?void 0:d.item)==null?void 0:l.name)??"Not Found"} - Skills`}),X=z(()=>{var d,l,n;return(Y()=="dark"?(l=(d=t.data)==null?void 0:d.item)==null?void 0:l.logo.dark:(n=t.data.item)==null?void 0:n.logo.light)??Pt.Unknown.light}),Z=z(()=>{var d,l,n,w;return`${R((d=t.data.item)==null?void 0:d.period.from)} - ${R((l=t.data.item)==null?void 0:l.period.to)} · ${vt(((n=t.data.item)==null?void 0:n.period.from)??new Date,(w=t.data.item)==null?void 0:w.period.to)}`});_t(b,{get title(){return s(W)},children:(d,l)=>{var n=it(),w=k(n);N(w,()=>!t.data.item,B=>{ut(B)},B=>{var q=Mt(),C=k(q);gt(C,{get img(){return s(X)},children:(f,A)=>{var v=St(),h=S(v);$t(h,{children:(a,o)=>{g();var e=u();m(()=>P(e,t.data.item.name)),r(a,e)},$$slots:{default:!0}});var _=i(h,2);M(_,{children:(a,o)=>{g();var e=u();m(()=>P(e,t.data.item.type)),r(a,e)},$$slots:{default:!0}});var x=i(_,2);M(x,{children:(a,o)=>{g();var e=u();m(()=>P(e,s(Z))),r(a,e)},$$slots:{default:!0}});var y=i(x,2);U(y,{});var D=i(y,2);T(D,21,()=>t.data.item.links,a=>a.to,(a,o)=>{var e=wt(),F=S(e);V(F,{variant:"outline",children:(H,et)=>{g();var $=u();m(()=>P($,s(o).label)),r(H,$)},$$slots:{default:!0}}),c(e),m(()=>j(e,"href",s(o).to)),r(a,e)}),c(D);var L=i(D,2);T(L,21,()=>t.data.item.skills,a=>a.slug,(a,o)=>{var e=kt();m(()=>j(e,"href",ct(`/skills/${s(o).slug}`)));var F=S(e);V(F,{variant:"outline",class:"flex flex-row items-center justify-center gap-2",children:(H,et)=>{var $=yt(),O=k($),at=i(O,2);M(at,{children:(rt,Et)=>{g();var Q=u();m(()=>P(Q,s(o).name)),r(rt,Q)},$$slots:{default:!0}}),m(()=>{j(O,"src",Y()==="dark"?s(o).logo.dark:s(o).logo.light),j(O,"alt",s(o).name)}),r(H,$)},$$slots:{default:!0}}),c(e),r(a,e)}),c(L),c(v),r(f,v)},$$slots:{default:!0}});var G=i(C,2);U(G,{});var I=i(G,2);N(I,()=>t.data.item.description.trim(),f=>{pt(f,{get content(){return t.data.item.description}})},f=>{ht(f)});var J=i(I,2);U(J,{});var K=i(J,2),tt=S(K);N(tt,()=>t.data.item.screenshots&&t.data.item.screenshots.length>0,f=>{var A=jt(),v=k(A);M(v,{children:(_,x)=>{g();var y=u("Screenshots");r(_,y)},$$slots:{default:!0}});var h=i(v,2);T(h,21,()=>t.data.item.screenshots,mt,(_,x)=>{xt(_,{get item(){return s(x)}})}),c(h),r(f,A)}),c(K),r(B,q)}),r(d,n)},$$slots:{default:!0}}),nt()}export{Kt as component,Jt as universal};
