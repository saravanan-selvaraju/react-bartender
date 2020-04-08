(this["webpackJsonpreact-bartender"]=this["webpackJsonpreact-bartender"]||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c);a(29),a(30);var s=function(){return r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement("img",{className:"App-Logo-Img",src:"/react-bartender/img/ico/bartender.svg"}),r.a.createElement("a",{className:"App-Logo",href:"/react-bartender/"},"Bartender")))},o=a(5),i=a(16),m=a(17),u=a(22),h=a(18),v=a(23),p=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){for(var e=[],t={Cocktail:"".concat("/img/ico","/cocktail.svg"),Shot:"".concat("/img/ico","/shot.svg"),Beer:"".concat("/img/ico","/beer.svg"),"Homemade Liqueur":"".concat("/img/ico","/homemade.svg")},a=0,n=Object.entries(t);a<n.length;a++){var c=n[a],l=Object(o.a)(c,2),s=l[0],i=l[1];e.push(r.a.createElement("a",{className:"App-List",href:"/react-bartender/show/"+s},r.a.createElement("img",{className:"List-Icon",alt:s,src:"/react-bartender"+i}),r.a.createElement("p",{className:"List-Name"},s)))}return r.a.createElement("div",null,e)}}]),t}(n.Component),d=a(19),E=a(6);var b=function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("p",null,"Fork on Github ",r.a.createElement("a",{href:"/"},"react-bartender")))},f=a(8),g=a.n(f),j=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=(a[0],a[1]),l=Object(n.useState)({}),s=Object(o.a)(l,2),i=s[0],m=s[1],u=e.match.params[0];Object(n.useEffect)((function(){g.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.awrap(fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="+u));case 2:e.sent.json().then((function(e){return m(e)})).catch((function(e){return c(e)}));case 4:case"end":return e.stop()}}))}),[]);for(var h=[],v=0,p=Object.values(i);v<p.length;v++)for(var d=p[v],E=0,b=Object.values(d);E<b.length;E++){var f=b[E],j=Object.values(f);h.push(r.a.createElement("a",{className:"List",href:"".concat("/react-bartender","/details/").concat(u,"/").concat(j[2])},r.a.createElement("img",{className:"List-Thump",src:"".concat(j[1],"/preview")}),r.a.createElement("p",{className:"List-Title"},j[0])))}return r.a.createElement("div",null,h)};var w=function(e){var t=e.match.params[0].split("/")[1],a=Object(n.useState)(!1),c=Object(o.a)(a,2),l=(c[0],c[1]),s=Object(n.useState)({}),i=Object(o.a)(s,2),m=i[0],u=i[1];Object(n.useEffect)((function(){g.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.awrap(fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+t));case 2:e.sent.json().then((function(e){return u(e)})).catch((function(e){return l(e)}));case 4:case"end":return e.stop()}}))}),[]);for(var h,v,p,d,E=[],b=[],f=0,j=Object.entries(m);f<j.length;f++){var w=j[f],O=Object(o.a)(w,2),N=(O[0],O[1]),y=!0,k=!1,x=void 0;try{for(var I,D=N[Symbol.iterator]();!(y=(I=D.next()).done);y=!0){var L=I.value;h=L.strDrink,v=L.strGlass,p=L.strDrinkThumb;var T=!0,S=!1,B=void 0;try{for(var A,G=L.strInstructions.split(/[0-9]./)[Symbol.iterator]();!(T=(A=G.next()).done);T=!0){var M=A.value;M&&E.push(r.a.createElement("li",null,M))}}catch(W){S=!0,B=W}finally{try{T||null==G.return||G.return()}finally{if(S)throw B}}d=L.dateModified;for(var C=0,F=Object.keys(L);C<F.length;C++){var J=F[C];J.includes("strIngredient")&&null!=L[J]&&b.push(r.a.createElement("tr",null,r.a.createElement("td",null,L[J]),r.a.createElement("td",null,L[J.replace("strIngredient","strMeasure")])))}console.log(m)}}catch(W){k=!0,x=W}finally{try{y||null==D.return||D.return()}finally{if(k)throw x}}}return r.a.createElement("div",{className:"Details"},r.a.createElement("h3",{className:"Details-Title"},h),r.a.createElement("img",{className:"Details-Img",src:p}),r.a.createElement("div",{className:"Details-Body"},r.a.createElement("div",{className:"Details-Tag"},r.a.createElement("img",{src:"/img/ico/glass.svg",className:"Tag-Ico"}),r.a.createElement("p",{className:"Glass"},v),r.a.createElement("img",{src:"/img/ico/clock.svg",className:"Tag-Ico"}),r.a.createElement("p",{className:"Date"},d)),r.a.createElement("table",{className:"Details-Table"},r.a.createElement("tr",null,r.a.createElement("th",null,"Ingredients"),r.a.createElement("th",null,"Measure")),b),r.a.createElement("h4",null,"Instructions:"),r.a.createElement("ol",null,E)))};var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{basename:"react-bartender/#"},r.a.createElement(E.b,{render:function(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(E.b,{exact:!0,path:"/",render:function(){return r.a.createElement(E.a,{to:"/"})}}),r.a.createElement(E.d,{location:t},r.a.createElement(E.b,{exact:!0,path:"/",component:p}),r.a.createElement(E.b,{exact:!0,path:"/show/*",component:j}),r.a.createElement(E.b,{exact:!0,path:"/details/*",component:w}),r.a.createElement(E.a,{to:"/"})))}}),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.f3756789.chunk.js.map