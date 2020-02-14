(this["webpackJsonpreact-themoviedb-test"]=this["webpackJsonpreact-themoviedb-test"]||[]).push([[0],{128:function(e,t,a){e.exports=a.p+"static/media/default-image_300.2d2ebf33.png"},255:function(e,t,a){e.exports=a(465)},465:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(21),i=a.n(s),o=a(85),c=a(163),l=a(57);function u(){var e=Object(c.a)(["\n    flex: 3;\n    :hover {\n        color: rgb(0, 120, 212);\n    }\n    a {\n        display: block;\n        text-align: center;\n        padding: 5px 16px;\n        text-decoration: none;\n        color: rgb(102, 102, 102);        \n    }\n"]);return u=function(){return e},e}function h(){var e=Object(c.a)(["\n    list-style: none; \n    display: flex; \n    margin-top: 6px;\n    width: 85%;\n    padding: 0;\n    overflow: hidden;\n    height: 40px;\n    font-size: 1.15em;\n    color: rgb(102, 102, 102);\n    width:100%;    \n"]);return h=function(){return e},e}var p=l.a.ul(h()),g=l.a.li(u()),d=function(){return n.a.createElement("header",null,n.a.createElement("nav",null,n.a.createElement(p,null,n.a.createElement(g,null,n.a.createElement(o.b,{to:"/"},"Home")),n.a.createElement(g,null,n.a.createElement(o.b,{to:"/about"},"About")))))},m=a(72),f=a(23),v=a.n(f),b=a(44),y=a(31),S=a(52),k=a(35),w=a(86),E=a(87),x=a(88),O={configuration:"/configuration",searchMovie:"/search/movie",searchTvShow:"/search/tv",genre:"/genre",movie:"/movie/",tv:"/tv/",keywords:"/keywords"},j={apiKey:"?api_key=",query:"&query=",page:"&page="};function C(e){return e.reduce((function(e,t){return e[t]=t,e}),Object.create(null))}function D(e){var t=e.split("-");return new Date(+t[0],+t[1],+t[2])}var T=function(){function e(){Object(S.a)(this,e),this.apiUrl=void 0,this.apiKey=void 0,this.apiUrl="https://api.themoviedb.org/3",this.apiKey="8e04168f7bad30462aace99b52adbfd3"}return Object(k.a)(e,[{key:"getApiJson",value:function(){var e=Object(b.a)(v.a.mark((function e(t,a){var r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a?"".concat(this.apiUrl).concat(t).concat(j.apiKey).concat(this.apiKey).concat(a):"".concat(this.apiUrl).concat(t).concat(j.apiKey).concat(this.apiKey),e.next=3,fetch(r);case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.statusText);case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getGenres",value:function(){var e=Object(b.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getApiJson("".concat(O.genre).concat(t,"list"));case 2:if(!((a=e.sent).genres.length>0)){e.next=7;break}return e.abrupt("return",a.genres.map((function(e){return{id:e.id,name:e.name}})));case 7:return e.abrupt("return",[]);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getKeywords",value:function(){var e=Object(b.a)(v.a.mark((function e(t,a){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getApiJson("".concat(a).concat(t).concat(O.keywords));case 2:if(!((r=e.sent).keywords.length>0)){e.next=7;break}return e.abrupt("return",r.keywords.map((function(e){return{id:e.id,name:e.name}})));case 7:return e.abrupt("return",[]);case 8:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getConfiguration",value:function(){var e=Object(b.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getApiJson(O.configuration);case 2:return t=e.sent,a={images:{baseUrl:t.images.base_url,secureBaseUrl:t.images.secure_base_url,backdropSizes:C(t.images.backdrop_sizes),logoSizes:C(t.images.logo_sizes),posterSizes:C(t.images.poster_sizes),profileSizes:C(t.images.profile_sizes),stillSizes:C(t.images.still_sizes)},changeKeys:C(t.change_keys)},e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"searchMovies",value:function(){var e=Object(b.a)(v.a.mark((function e(t,a){var r,n,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(j.query).concat(t).concat(j.page).concat(a.toString()),e.next=3,this.getApiJson(O.searchMovie,r);case 3:if(!((n=e.sent).total_results>0)){e.next=9;break}return s=n.results.map((function(e){return{id:e.id,title:e.title,overview:e.overview,shortDescription:e.overview?e.overview.length>60?"".concat(e.overview.substr(0,60),"..."):e.overview:"",popularity:e.popularity,video:e.video,voteCount:e.vote_count,voteAverage:e.vote_average,releaseDate:D(e.release_date),originalLanguage:e.original_language,originalTitle:e.original_title,genreIds:e.genre_ids,backdropPath:e.backdrop_path,adult:e.adult,posterPath:e.poster_path}})),e.abrupt("return",{page:n.page,totalResults:n.total_results,totalPages:n.total_pages,results:s});case 9:return e.abrupt("return",{page:n.page,totalResults:n.total_results,totalPages:n.total_pages,results:[]});case 10:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"searchTvShows",value:function(){var e=Object(b.a)(v.a.mark((function e(t,a){var r,n,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(j.query).concat(t).concat(j.page).concat(a.toString()),e.next=3,this.getApiJson(O.searchTvShow,r);case 3:if(!((n=e.sent).total_results>0)){e.next=9;break}return s=n.results.map((function(e){return{id:e.id,title:e.name,overview:e.overview,shortDescription:e.overview?e.overview.length>60?"".concat(e.overview.substr(0,60),"..."):e.overview:"",popularity:e.popularity,voteCount:e.vote_count,voteAverage:e.vote_average,releaseDate:e.first_air_date&&D(e.first_air_date),originalName:e.original_name,originCountry:e.origin_country,originalLanguage:e.original_language,genreIds:e.genre_ids,backdropPath:e.backdrop_path,posterPath:e.poster_path}})),e.abrupt("return",{page:n.page,totalResults:n.total_results,totalPages:n.total_pages,results:s});case 9:return e.abrupt("return",{page:n.page,totalResults:n.total_results,totalPages:n.total_pages,results:[]});case 10:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),R=a(525),_=a(509),P=a(510),I=a(511),z=a(466),A=a(507),M=a(513),V=a(241),U=a.n(V),B=a(512),K=a(467),H=a(243),W=a.n(H),G=a(242),J=a.n(G),L=a(521),N=Object(R.a)(A.a)({}),q=Object(R.a)(A.a)({display:"flex",flexDirection:"column",alignItems:"center"}),F=Object(R.a)(_.a)({width:270,height:330}),$=Object(R.a)(K.a)({fontSize:"0.9rem",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:400,lineHeight:1.334,letterSpacing:"0em"}),Q=Object(R.a)(K.a)({fontSize:"0.9rem",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:400,lineHeight:1.334,letterSpacing:"0em"}),X=Object(R.a)(P.a)({minHeight:285}),Y=Object(R.a)(I.a)({height:140,backgroundSize:92}),Z=Object(R.a)(B.a)({display:"flex",padding:8,alignItems:"center",justifyContent:"space-between"}),ee=l.a.div({display:"flex",alignItems:"center"}),te=l.a.span({fontSize:"0.9rem",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:400,lineHeight:1.5,letterSpacing:"0.00938em",paddingLeft:"0.2rem"}),ae=Object(l.a)(J.a)({fill:"currentColor",width:"1em",height:"1em",display:"inline-block",fontSize:"1.3rem",transition:"fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",flexShrink:0,userSelect:"none"}),re=Object(l.a)(W.a)({fill:"currentColor",width:"1em",height:"1em",display:"inline-block",fontSize:"1.3rem",transition:"fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",flexShrink:0,userSelect:"none"}),ne=Object(R.a)(A.a)({flexGrow:1}),se=Object(R.a)(z.a)({padding:12,textAlign:"center",color:"rgba(0, 0, 0, 0.54)",width:"100%",height:400}),ie=Object(R.a)(z.a)({padding:"15px 10px 5px",marginBottom:10,display:"flex",alignItems:"flex-start",width:"100%",backgroundColor:"#fff"}),oe=Object(R.a)(M.a)({padding:10}),ce=Object(R.a)(L.a)({root:{"& label.Mui-focused":{color:"green"},"& .MuiInput-underline:after":{borderBottomColor:"green"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"red"},"&:hover fieldset":{borderColor:"yellow"},"&.Mui-focused fieldset":{borderColor:"green"}}},marginLeft:8,flex:1}),le=Object(R.a)(U.a)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start"}),ue=l.a.div({padding:4,margin:0,boxSizing:"border-box"}),he=a(514),pe=a(128),ge=a.n(pe),de=function(e){function t(){var e,a;Object(S.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(w.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(n)))).handleClickCard=function(e){a.props.onClickCard(e.currentTarget.id)},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement(F,null,n.a.createElement(X,{id:this.props.id.toString(),onClick:this.handleClickCard},n.a.createElement(Y,{image:this.props.image?this.props.image:ge.a,title:this.props.title}),n.a.createElement(he.a,null,n.a.createElement($,{gutterBottom:!0,variant:"h5"},this.props.contentTitle),n.a.createElement(Q,{variant:"body2",color:"textSecondary"},this.props.contentDescription?this.props.contentDescription:"No description provided"))),n.a.createElement(Z,null,n.a.createElement(ee,null,n.a.createElement(ae,{titleAccess:"Release date"}),n.a.createElement(te,null,this.props.releaseDate?this.props.releaseDate:"No Release Date Provided")),n.a.createElement(ee,null,n.a.createElement(re,{titleAccess:"Vote average"}),n.a.createElement(te,null,this.props.voteAverage))))}}]),t}(n.a.Component),me=function(e){function t(){var e,a;Object(S.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(w.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(n)))).handleClickCard=function(e){a.props.onClickCard(e)},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this,t=n.a.createElement("div",{key:0,className:"loader"},"Loading ..."),a=this.props.results.map((function(t){return n.a.createElement(ue,{key:t.id},n.a.createElement(de,{id:t.id,title:t.title,image:t.posterPath&&"".concat(e.props.imageBaseUrl).concat(t.posterPath),contentTitle:t.title,contentDescription:t.shortDescription,releaseDate:t.releaseDate&&t.releaseDate.toLocaleDateString(),voteAverage:t.voteAverage,onClickCard:e.handleClickCard}))}));return n.a.createElement(ne,null,n.a.createElement(le,{pageStart:1,loadMore:this.props.loadResults,hasMore:this.props.hasMoreItems,loader:t},this.props.results.length>0&&a))}}]),t}(n.a.Component),fe=a(244),ve=a.n(fe),be=a(527),ye=function(e){return n.a.createElement(ie,{component:"form"},n.a.createElement(L.a,{id:"outlined-select-currency",select:!0,label:"Search Type",value:e.searchTypeValue,onChange:e.onChangeSearchType,helperText:"Please select your search type",variant:"outlined"},n.a.createElement(be.a,{value:"Movies"},"Movies"),n.a.createElement(be.a,{value:"TV Shows"},"TV Shows")),n.a.createElement(ce,{inputProps:{"aria-label":"search movies"},onChange:e.onChangeSearchInput,value:e.searchTerm,label:e.placeHolderText,variant:"outlined"}),n.a.createElement(oe,{type:"submit","aria-label":"search",onClick:e.onClickSearch},n.a.createElement(ve.a,null)),n.a.createElement(L.a,{id:"outlined-select-currency",select:!0,label:"Sort by",value:e.searchSortValue,onChange:e.onChangeSort,helperText:"Please select the field to sort results",variant:"outlined"},n.a.createElement(be.a,{value:"Title"},"Title"),n.a.createElement(be.a,{value:"Release date"},"Release date"),n.a.createElement(be.a,{value:"Vote average"},"Vote average (DESC)")))},Se=a(524),ke=a(515),we=a(516),Ee=a(518),xe=a(519),Oe=a(517),je=function(e){var t,a=e.dialogItem&&e.dialogItem.posterPath?"".concat(e.baseImageUrl).concat(null===(t=e.dialogItem)||void 0===t?void 0:t.posterPath):ge.a;return n.a.createElement(Se.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"md",fullWidth:!1,onEntered:e.onEntered,"aria-labelledby":"confirmation-dialog-title",open:e.openDialog},n.a.createElement(ke.a,{id:"confirmation-dialog-title"},e.dialogItem&&e.dialogItem.title),n.a.createElement(we.a,null,n.a.createElement(Oe.a,{container:!0},n.a.createElement(Oe.a,{item:!0},n.a.createElement("img",{src:a,alt:e.dialogItem&&e.dialogItem.title})),n.a.createElement(Oe.a,{item:!0},n.a.createElement(Oe.a,{container:!0,direction:"column"},n.a.createElement(Oe.a,{item:!0},n.a.createElement(K.a,{component:"h3"},"Overview"),n.a.createElement(K.a,{component:"h4"},e.dialogItem&&e.dialogItem.overview)),n.a.createElement(Oe.a,{item:!0},n.a.createElement(K.a,{component:"h3"},"Popularity"),n.a.createElement(K.a,{component:"h4"},e.dialogItem&&e.dialogItem.popularity)))))),n.a.createElement(Ee.a,null,n.a.createElement(xe.a,{onClick:e.onClickDialogOk,color:"primary"},"Ok")))},Ce=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(w.a)(this,Object(E.a)(t).call(this,e))).dataService=void 0,a.emptyConfiguration={images:{baseUrl:"",secureBaseUrl:"",backdropSizes:[],logoSizes:[],posterSizes:[],profileSizes:[],stillSizes:[]},changeKeys:[]},a.emptySearchResults={page:0,totalPages:0,totalResults:0,results:[]},a.handleChangeSearchType=function(e){var t=e.target.value,r="Search ".concat(t," in The Movie Database API");a.setState((function(e){return Object(y.a)({},e,{searchDefinition:{searchTerm:"",searchTypeValue:t,placeholderText:r},searchResults:{page:0,totalPages:0,totalResults:0,results:[]}})}))},a.handleChangeSort=function(e){var t=e.target.value;a.setState((function(e){return Object(y.a)({},e,{searchSortValue:t})}))},a.handleOnChangeSearchInput=function(e){var t=e.currentTarget.value;a.setState((function(e){return Object(y.a)({},e,{searchDefinition:Object(y.a)({},e.searchDefinition,{searchTerm:t})})}))},a.sortResults=function(e){switch(a.state.searchSortValue){case"Title":e.sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0}));break;case"Release date":e.sort((function(e,t){return+e.releaseDate-+t.releaseDate}));break;case"Vote average":e.sort((function(e,t){return t.voteAverage-e.voteAverage}))}},a.handleOnClickSearch=function(){var e=Object(b.a)(v.a.mark((function e(t){var r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),e.t0=a.state.searchDefinition.searchTypeValue,e.next="Movies"===e.t0?4:"TV Shows"===e.t0?10:16;break;case 4:return e.next=6,a.dataService.searchMovies(a.state.searchDefinition.searchTerm,1);case 6:return r=e.sent,a.sortResults(r.results),a.setState((function(e){return Object(y.a)({},e,{searchResults:r})})),e.abrupt("break",17);case 10:return e.next=12,a.dataService.searchTvShows(a.state.searchDefinition.searchTerm,1);case 12:return n=e.sent,a.sortResults(n.results),a.setState((function(e){return Object(y.a)({},e,{searchResults:n})})),e.abrupt("break",17);case 16:return e.abrupt("break",17);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleLoadMoreResults=Object(b.a)(v.a.mark((function e(){var t,r,n,s,i,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=a.state.searchDefinition.searchTypeValue,e.next="Movies"===e.t0?3:"TV Shows"===e.t0?11:19;break;case 3:return t=a.state.searchResults.results.slice(),e.next=6,a.dataService.searchMovies(a.state.searchDefinition.searchTerm,a.state.searchResults.page+1);case 6:return r=e.sent,n=t.concat(r.results),a.sortResults(n),a.setState((function(e){return Object(y.a)({},e,{searchResults:{page:r.page,totalPages:r.totalPages,totalResults:r.totalResults,results:n}})})),e.abrupt("break",20);case 11:return s=a.state.searchResults.results.slice(),e.next=14,a.dataService.searchTvShows(a.state.searchDefinition.searchTerm,a.state.searchResults.page+1);case 14:return i=e.sent,o=s.concat(i.results),a.sortResults(o),a.setState((function(e){return Object(y.a)({},e,{searchResults:{page:i.page,totalPages:i.totalPages,totalResults:i.totalResults,results:o}})})),e.abrupt("break",20);case 19:return e.abrupt("break",20);case 20:case"end":return e.stop()}}),e)}))),a.handleClickCard=function(e){var t=a.state.searchResults.results.filter((function(t){return t.id===+e}))[0];a.setState((function(e){return Object(y.a)({},e,{dialogProps:Object(y.a)({},e.dialogProps,{loading:!0,openDialog:!0,dialogItem:t})})}))},a.handleDialogOk=function(e){a.setState((function(e){return Object(y.a)({},e,{dialogProps:Object(y.a)({},e.dialogProps,{openDialog:!1})})}))},a.handleEntered=function(){var e=Object(b.a)(v.a.mark((function e(t){var r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r="Movies"===a.state.searchDefinition.searchTypeValue?O.movie:O.tv,!a.state.dialogProps.dialogItem){e.next=6;break}return e.next=4,a.dataService.getKeywords(a.state.dialogProps.dialogItem.id.toString(),r);case 4:n=e.sent,a.setState((function(e){return Object(y.a)({},e,{dialogProps:Object(y.a)({},e.dialogProps,{keywords:n})})}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.dataService=new T,a.state={configuration:a.emptyConfiguration,moviesGenres:[],tvShowGenres:[],searchResults:a.emptySearchResults,searchDefinition:{searchTerm:"",searchTypeValue:"Movies",placeholderText:"Search Movies in The Movie Database API"},searchSortValue:"Title",dialogProps:{loading:!1,openDialog:!1,dialogItem:void 0,keywords:[]}},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark((function e(){var t,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dataService.getConfiguration();case 2:return t=e.sent,e.next=5,this.dataService.getGenres(O.movie);case 5:return a=e.sent,e.next=8,this.dataService.getGenres(O.tv);case 8:r=e.sent,this.setState({configuration:t,moviesGenres:a,tvShowGenres:r});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=""!==this.state.configuration.images.secureBaseUrl?this.state.configuration.images.secureBaseUrl:"",t=""!==e?"".concat(e,"/").concat(this.state.configuration.images.posterSizes.w92,"/"):"",a=""!==e?"".concat(e,"/").concat(this.state.configuration.images.posterSizes.w185,"/"):"";return n.a.createElement(q,null,n.a.createElement(ye,{searchTerm:this.state.searchDefinition.searchTerm,searchTypeValue:this.state.searchDefinition.searchTypeValue,placeHolderText:this.state.searchDefinition.placeholderText,onChangeSearchInput:this.handleOnChangeSearchInput,onChangeSearchType:this.handleChangeSearchType,onClickSearch:this.handleOnClickSearch,onChangeSort:this.handleChangeSort,searchSortValue:this.state.searchSortValue}),0===this.state.searchResults.totalResults&&n.a.createElement(se,null,"No results"),this.state.searchResults.totalResults>0&&n.a.createElement(me,{imageBaseUrl:t,hasMoreItems:this.state.searchResults.page<this.state.searchResults.totalPages,results:(this.state.searchDefinition.searchTypeValue,this.state.searchResults.results),loadResults:this.handleLoadMoreResults,onClickCard:this.handleClickCard}),n.a.createElement(je,{baseImageUrl:a,openDialog:this.state.dialogProps.openDialog,dialogItem:this.state.dialogProps.dialogItem&&this.state.dialogProps.dialogItem,keywords:this.state.dialogProps.keywords,onEntered:this.handleEntered,onClickDialogOk:this.handleDialogOk}))}}]),t}(n.a.Component),De=function(){return n.a.createElement("div",null,n.a.createElement("p",null,"About page"))},Te=function(){return n.a.createElement("main",null,n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/",component:Ce}),n.a.createElement(m.a,{path:"/about",component:De})))},Re=a(526),_e=a(245),Pe=a(520),Ie=Object(_e.a)({palette:{background:{default:"white"}}}),ze=Object(R.a)(K.a)({textAlign:"center",maxWidth:"100%",fontSize:"3rem",color:"steelblue"}),Ae=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(Pe.a,{theme:Ie},n.a.createElement(Re.a,null)),n.a.createElement(N,{maxWidth:"lg"},n.a.createElement(ze,{variant:"h2",gutterBottom:!0},"Movie Database Search"),n.a.createElement(d,null),n.a.createElement(Te,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(267),a(276);i.a.render(n.a.createElement(o.a,null,n.a.createElement(Ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[255,1,2]]]);
//# sourceMappingURL=main.f73e7208.chunk.js.map