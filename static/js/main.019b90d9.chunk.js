(this.webpackJsonpVideoSearchApp=this.webpackJsonpVideoSearchApp||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),o=a(6),s=a.n(o),l=a(17),m=a(2),u=a(3),d=a(5),p=a(4),v=(a(25),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-bar ui segment",style:{marginTop:10}},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Video Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),a}(r.a.Component)),h=a(18),f=a.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{part:"snippet",maxresults:5,key:"AIzaSyAXRW9M8nugPhxOop7FQIxu6cZU1VA8gSY"}}),b=(a(43),function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},r.a.createElement("img",{className:"ui image",alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.snippet.title)))}),E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return r.a.createElement(b,{key:e.id.videoId,onVideoSelect:a,video:e})}));return r.a.createElement("div",{className:"ui relaxed divided list"},n)},S=function(e){var t=e.video;if(!t)return r.a.createElement("div",null);var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui embed"},r.a.createElement("iframe",{title:"video player",src:a})),r.a.createElement("h4",{className:"ui header"},t.snippet.title),r.a.createElement("p",null,t.snippet.description))},g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("/search",{params:{q:a}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(v,{onFormSubmit:this.onTermSubmit}),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"eleven wide column"},r.a.createElement(S,{video:this.state.selectedVideo})),r.a.createElement("div",{className:"five wide column"},r.a.createElement(E,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(g,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.019b90d9.chunk.js.map