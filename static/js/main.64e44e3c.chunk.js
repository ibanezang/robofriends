(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),c=n.n(o),i=n(10),s=n(7),u=n(18),l=n(19);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h={searchField:""},d={isPending:!1,robots:[],error:""},b=(n(31),n(1)),p=n(2),m=n(5),E=n(3),f=n(4),g=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow shadow-2"},a.a.createElement("img",{src:"https://robohash.org/test".concat(t,"?size?200x200"),alt:"robot"}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))},O=function(e){var t=e.robots;return a.a.createElement("div",null,t.map(function(e){return a.a.createElement(g,{key:e.id,id:e.id,name:e.name,email:e.email})}))},v=function(e){var t=e.onSearchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Type name or email",onChange:t}))},j=function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"}},e.children)},y=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(m.a)(this,Object(E.a)(t).call(this))).updateCount=function(){e.setState(function(e){return{count:e.count+1}})},e.state={count:0},e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return console.log(e,t),this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButton"),a.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(r.Component),C=function(e){function t(){return Object(b.a)(this,t),Object(m.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){return console.log("Header"),a.a.createElement("div",null,a.a.createElement("h1",{className:"f1"},"Robo Friends"),a.a.createElement(y,{color:"red"}))}}]),t}(r.Component),R=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(m.a)(this,Object(E.a)(t).call(this,e))).state={hasError:!1},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oppps something nasty is happening :("):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.Component),S=function(e){function t(){return Object(b.a)(this,t),Object(m.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.email.toLowerCase().includes(t.toLowerCase())});return o?a.a.createElement("h1",null,"Loading Robots!"):a.a.createElement("div",{className:"tc"},a.a.createElement(C,null),a.a.createElement(v,{onSearchChange:n}),a.a.createElement(j,null,a.a.createElement(R,null,a.a.createElement(O,{robots:c}))))}}]),t}(r.Component),w=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(S),_=(n(32),Object(u.createLogger)()),k=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!1});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(s.d)(k,Object(s.a)(l.a,_));c.a.render(a.a.createElement(i.a,{store:T},a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.64e44e3c.chunk.js.map