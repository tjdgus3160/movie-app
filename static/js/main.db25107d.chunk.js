(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(0),c=s.n(a),r=s(25),i=s.n(r),o=s(10),j=s(2);var l=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(o.b,{to:"/",children:"Home"}),Object(n.jsx)(o.b,{to:"/about",children:"About"})]})};var m=function(){return Object(n.jsx)("span",{children:"About this page: I built it because I love movies."})},u=s(15),d=s.n(u),b=s(27),v=s(28),h=s(29),p=s(32),x=s(31),O=s(30),g=s.n(O);s(62);var f=function(e){var t=e.year,s=e.title,a=e.summary,c=e.poster,r=e.genres;return Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("img",{src:c,alt:s,title:s}),Object(n.jsxs)("div",{className:"movie__data",children:[Object(n.jsx)("h3",{className:"movie__title",children:s}),Object(n.jsx)("h5",{className:"movie__year",children:t}),Object(n.jsx)("ul",{className:"genres",children:r.map((function(e,t){return Object(n.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(n.jsx)("p",{className:"movie__summary",children:a})]})]})},y=(s(63),function(e){Object(p.a)(s,e);var t=Object(x.a)(s);function s(){var e;Object(v.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(b.a)(d.a.mark((function t(){var s,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(n.jsx)("section",{className:"container",children:t?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(n.jsx)("div",{className:"movies",children:s.map((function(e){return Object(n.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(c.a.Component));var _=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(l,{}),Object(n.jsx)(j.a,{path:"/",exact:!0,component:y}),Object(n.jsx)(j.a,{path:"/about",component:m})]})};i.a.render(Object(n.jsx)(_,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.db25107d.chunk.js.map