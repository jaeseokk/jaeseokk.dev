(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return u});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(153),c=a(154),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(s.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.a.Component);e.default=l;var u="1097489062"},149:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(32),c=a.n(s);a.d(e,"a",function(){return c.a});a(150);var l=r.a.createContext({}),u=function(t){return r.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(t,e,a){var n;t.exports=(n=a(152))&&n.default||n},151:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"b",function(){return l});a(33);var n=a(156),r=a.n(n),i=a(157),o=a.n(i);o.a.overrideThemeStyles=function(){return{".title a:hover":{textDecoration:"underline"},"a.gatsby-resp-image-link":{boxShadow:"none"},h1:{fontFamily:["PT Sans","Helvetica","Arial","sans-serif"].join(",")},body:{backgroundColor:"#fffffb"}}};var s=new r.a(Object.assign({},o.a,{googleFonts:[{name:"Abril Fatface",styles:["400"]}],headerFontFamily:["PT Sans","Helvetica","Arial","sans-serif"],bodyFontFamily:["PT Sans","Helvetica","Arial","sans-serif"]}));var c=s.rhythm,l=s.scale},152:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(54),c=a(2),l=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},153:function(t,e,a){"use strict";a(33);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(149),c=a(151),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.title,a=t.children;return o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(27),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},o.a.createElement("header",null,o.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.2),{marginBottom:Object(c.a)(1.5),marginTop:0,textAlign:"center",fontFamily:'"Abril Fatface", serif'})},o.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},e))),o.a.createElement("main",null,a),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(o.a.Component);e.a=l},154:function(t,e,a){"use strict";var n=a(155),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(158),l=a.n(c);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,s=t.title,c=n.data.site,u=e||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{property:"og:image",content:c.siteMetadata.image},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=u},155:function(t){t.exports={data:{site:{siteMetadata:{title:"jaeseokk.log",description:"",author:"Jaeseok Kang",image:"/icons/icon-512x512.png"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-be2955539df3b1f2f980.js.map