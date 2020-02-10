(this["webpackJsonpreact-themoviedb-test"]=this["webpackJsonpreact-themoviedb-test"]||[]).push([[0],{209:function(e,t,a){e.exports=a(418)},214:function(e,t,a){},418:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(198),s=a.n(i),o=(a(214),a(63)),c=a(97),u=a(98);function l(){var e=Object(c.a)(["\n    list-style: none; \n    margin: 0; \n    padding: 0; \n    display: flex; \n"]);return l=function(){return e},e}var p=u.a.ul(l());function g(){var e=Object(c.a)(["\n    flex: 3;\n"]);return g=function(){return e},e}var m=u.a.li(g()),h=a(202),f=a(433),v=Object(h.a)((function(e){return Object(f.a)({button:{margin:e.spacing(1)}})})),d=function(){v();return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement(p,null,r.a.createElement(m,null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement(m,null,r.a.createElement(o.b,{to:"/about"},"About")))))},b=a(52),y=a(39),E=a.n(y),k=a(64),_=a(99),w=a(51),x=a(204),S=a(205),j=a(206),z={configuration:"/configuration",searchMovie:"/search/movie"},O={apiKey:"?api_key=",query:"&query="},U=function(){function e(){Object(_.a)(this,e),this.apiUrl=void 0,this.apiKey=void 0,this.apiUrl="https://api.themoviedb.org/3",this.apiKey="8e04168f7bad30462aace99b52adbfd3"}return Object(w.a)(e,[{key:"getApiJson",value:function(){var e=Object(k.a)(E.a.mark((function e(t,a){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a?"".concat(this.apiUrl).concat(t).concat(O.apiKey).concat(this.apiKey).concat(a):"".concat(this.apiUrl).concat(t).concat(O.apiKey).concat(this.apiKey),e.next=3,fetch(n);case 3:if((r=e.sent).ok){e.next=6;break}throw new Error(r.statusText);case 6:return e.next=8,r.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getConfiguration",value:function(){var e=Object(k.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getApiJson(z.configuration);case 2:return t=e.sent,a={images:{baseUrl:t.images.base_url,secureBaseUrl:t.images.secure_base_url,backdropSizes:t.images.backdrop_sizes,logoSizes:t.images.logo_sizes,posterSizes:t.images.poster_sizes,profileSizes:t.images.profile_sizes,stillSizes:t.images.still_sizes},changeKeys:t.change_keys},e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"searchMovies",value:function(){var e=Object(k.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(O.query).concat(t),e.next=3,this.getApiJson(z.searchMovie,a);case 3:if(!((n=e.sent).total_results>0)){e.next=8;break}return e.abrupt("return",{page:n.page,totalResults:n.total_results,totalPages:n.total_pages,movies:n.results.map((function(e){return{id:e.id,title:e.title,overview:e.overview,popularity:e.popularity,video:e.video,voteCount:e.vote_count,voteAverage:e.vote_average,releaseDate:e.release_date,originalLanguage:e.original_language,originalTitle:e.original_title,genreIds:e.genre_ids,backdropPath:e.backdrop_path,adult:e.adult,posterPath:e.poster_path}}))});case 8:return e.abrupt("return",{page:n.page,totalResults:n.total_results,totalPages:n.total_pages,movies:[]});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),R=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(x.a)(this,Object(S.a)(t).call(this,e))).dataService=void 0,a.emptyConfiguration={images:{baseUrl:"",secureBaseUrl:"",backdropSizes:[],logoSizes:[],posterSizes:[],profileSizes:[],stillSizes:[]},changeKeys:[]},a.emptySearchResults={page:0,totalPages:0,totalResults:0,movies:[]},a.dataService=new U,a.state={configuration:a.emptyConfiguration,searchResults:a.emptySearchResults},a}return Object(j.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=Object(k.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dataService.getConfiguration();case 2:return t=e.sent,e.next=5,this.dataService.searchMovies("Godfather");case 5:a=e.sent,this.setState({configuration:t,searchResults:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){""!==this.state.configuration.images.baseUrl&&this.state.configuration.images.baseUrl;var e=""!==this.state.configuration.images.secureBaseUrl?this.state.configuration.images.secureBaseUrl:"",t=""!==e?"".concat(e,"/").concat(this.state.configuration.images.posterSizes[4],"/").concat("/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg"):"";return r.a.createElement("div",null,this.state.searchResults.totalResults>0&&this.state.searchResults.movies.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",null,e.title))})),r.a.createElement("p",null,"Images URL"),""!==this.state.configuration.images.baseUrl&&r.a.createElement("img",{src:t}))}}]),t}(r.a.Component),K=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"About page"))},A=function(){return r.a.createElement("main",null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:R}),r.a.createElement(b.a,{path:"/about",component:K})))},B=a(431),C=a(432),J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null),r.a.createElement(C.a,{maxWidth:"md"},r.a.createElement(d,null),r.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(220),a(229);s.a.render(r.a.createElement(o.a,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[209,1,2]]]);
//# sourceMappingURL=main.7ab0b6f2.chunk.js.map