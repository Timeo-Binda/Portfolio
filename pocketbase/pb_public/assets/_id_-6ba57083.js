import{d as D,w as k,p as b,o as l,c as r,a as t,t as c,b as s,k as I,l as F,F as v,r as L,n as R}from"./index-6e9de153.js";function A(u){const a=new Date(u),i={month:"long",year:"numeric",timeZone:"Europe/Paris"};return new Intl.DateTimeFormat("fr-FR",i).format(a)}const T={class:"mt-8"},V={class:"flex items-center justify-center w-full h-full pt-2 pb-4"},B={key:0,class:"aspect-video w-full"},P=["src"],S={key:1,class:"aspect-w-16 aspect-h-9"},U={controls:"",class:"w-full max-h-screen"},C=["src"],E={class:"lg:grid lg:grid-cols-2"},N={class:"lg:text-right"},Y={class:"capitalize"},z={class:"capitalize"},Z=t("h2",{class:"mt-24 lg:mt-48"},"Le projet",-1),$={class:"mt-4 lg:mt-6 grid lg:grid-cols-2"},q=["src"],G=t("h2",{class:"mt-24 lg:mt-48"},"Sa Réalisation",-1),H={class:"mt-4 lg:mt-6 grid lg:grid-cols-2"},J=["src"],K={class:"mt-4 lg:mt-12 grid lg:grid-cols-2 gap-4"},M={key:0},O=t("h2",null,"Recommandation",-1),Q={class:"lg:px-16 flex content-center justify-center flex-col lg:text-2xl"},W={class:"italic"},X={class:"text-right"},tt=["src","alt"],ot=D({__name:"[id]",props:{id:{}},async setup(u){let a,i;const g=u,e=([a,i]=k(()=>R(g.id)),a=await a,i(),a),m=e.url,p=e.photo_bonus;console.log(p);const d=Array.isArray(p)?p.map(o=>b.getFileUrl(e,o,{thumb:"100x250"})):[];console.log(d);function w(o){return o.includes("youtube.com")||o.includes("youtu.be")}function y(o){const n=x(o);return n?`https://www.youtube.com/embed/${n}`:""}function x(o){const n=new URL(o);return n.hostname==="youtu.be"?n.pathname.substring(1):n.hostname==="www.youtube.com"&&new URLSearchParams(n.search).get("v")||null}const h=(Array.isArray(e.photo_bonus)?e.photo_bonus:[]).map(o=>({url:o?b.getFileUrl(e,o,{thumb:"100x250"}):"/image-not-found.png",description:o?o.description:"Description par défaut"}));return h[0],h[1],(o,n)=>{var _;return l(),r(v,null,[t("h2",T,c(s(e).titre),1),t("div",V,[w(s(m))?(l(),r("div",B,[t("iframe",{src:(_=y(s(m)))==null?void 0:_.toString(),frameborder:"0",allowfullscreen:"",class:"w-full h-full object-cover"},null,8,P)])):(l(),r("div",S,[t("video",U,[t("source",{src:s(m),type:"video/mp4"},null,8,C),I(" Votre navigateur ne prend pas en charge la balise vidéo. ")])]))]),t("div",E,[t("p",null,"Rôle: "+c(s(e).role),1),t("div",N,[t("p",Y,c(s(A)(s(e).date)),1),t("p",z,c(s(e).categorie),1)])]),Z,t("div",$,[t("p",null,c(s(e).projet),1),t("div",null,[t("img",{class:"mt-6 lg:mt-0 lg:pl-20 aspect-[5/3] object-cover",src:s(d)[0]},null,8,q)])]),G,t("div",H,[t("p",null,c(s(e).realisation),1),t("div",null,[t("img",{class:"mt-6 lg:mt-0 lg:pl-20 aspect-[5/3] object-cover",src:s(d)[1]},null,8,J)])]),t("div",K,[s(e).recommandation?(l(),r("div",M,[O,t("div",Q,[t("p",W,'"'+c(s(e).recommandation)+'"',1),t("p",X,c(s(e).nom_personne_reco),1)])])):F("",!0),(l(!0),r(v,null,L(s(d).slice(2),(j,f)=>(l(),r("div",{key:f,class:"lg:col-span-1"},[t("img",{src:j,alt:"Image bonus "+(f+1),class:"w-full h-full aspect-[5/3] object-cover"},null,8,tt)]))),128))])],64)}}});export{ot as default};
