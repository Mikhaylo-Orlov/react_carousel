(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(7),s=a.n(n),i=a(2),r=a(3),c=a(5),l=a(4),u=a(1),o=a.n(u),m=(a(12),a(13),a(0)),p=function(t){var e=t.name,a=t.min,n=t.max,s=t.step,i=t.defaultValue,r=t.onChange;return Object(m.jsxs)("label",{htmlFor:e,children:["".concat(e),Object(m.jsx)("input",{className:"Inputs__input",id:e,type:"number",defaultValue:i,step:s,min:a,max:n,onChange:r})]})},h=function(t){Object(c.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={itemWidth:130,frameSize:3,step:3,animationDuration:1e3,translate:0},t.stepPrev=function(){var e=t.state,a=e.step,n=e.itemWidth;e.translate+a*n<0?t.setState((function(t){return{translate:t.translate+a*n}})):t.setState({translate:0})},t.stepNext=function(){var e=t.state,a=e.step,n=e.itemWidth,s=e.translate,i=e.frameSize,r=-(n*t.props.images.length-i*n);s-a*n<r?t.setState({translate:r}):t.setState((function(t){return{translate:t.translate-a*n}}))},t.widthChanger=function(e){t.setState({itemWidth:+e.target.value}),t.setState({translate:0})},t.stepChanger=function(e){t.setState({step:+e.target.value})},t.animationDurationChanger=function(e){t.setState({animationDuration:+e.target.value})},t.frameSizeChanger=function(e){t.setState({frameSize:+e.target.value}),t.setState({translate:0})},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this.props.images,e=this.state,a=e.itemWidth,n=e.frameSize,s=e.translate,i=e.animationDuration;return Object(m.jsxs)("div",{className:"Carousel",children:[Object(m.jsxs)("div",{className:"Carousel__container",style:{width:"".concat(a*n,"px")},children:[Object(m.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(s,"px)"),transition:"transform ".concat(i,"ms")},children:t.map((function(t,e){return Object(m.jsx)("li",{children:Object(m.jsx)("img",{src:t,alt:"".concat(e),width:a})},t)}))}),Object(m.jsxs)("div",{className:"Carousel__buttons",children:[Object(m.jsx)("button",{type:"button",onClick:this.stepPrev,children:"\u2190"}),Object(m.jsx)("button",{"data-cy":"next",type:"button",onClick:this.stepNext,children:"\u2192"})]})]}),Object(m.jsxs)("div",{className:"Inputs",children:[Object(m.jsx)(p,{className:"Inputs__input",name:"ItemWidth",defaultValue:130,min:50,max:140,step:10,onChange:this.widthChanger}),Object(m.jsx)(p,{className:"Inputs__input",name:"Step",defaultValue:3,min:1,max:10,step:1,onChange:this.stepChanger}),Object(m.jsx)(p,{className:"Inputs__input",name:"Duration",defaultValue:1e3,min:100,max:3e3,step:100,onChange:this.animationDurationChanger}),Object(m.jsx)(p,{className:"Inputs__input",name:"Frame-size",defaultValue:3,min:1,max:10,step:1,onChange:this.frameSizeChanger})]})]})}}]),a}(o.a.Component),g=h,j=function(t){Object(c.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this.state.images;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",t.length," images"]}),Object(m.jsx)(g,{images:t})]})}}]),a}(o.a.Component),d=j;s.a.render(Object(m.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e6b2f953.chunk.js.map