(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(33);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(149),c=a(153),l=a(154),u=a(151),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(l.a,{title:t,useTitleTemplate:!1,keywords:["blog","gatsby","javascript","react"]}),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h1",{className:"title",style:Object.assign({},Object(u.b)(.7))},o.a.createElement(s.a,{style:{boxShadow:"none",color:"rgba(0, 0, 0, 0.9)"},to:t.fields.slug},a)),o.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},t.frontmatter.date))}))},t}(o.a.Component);t.default=d;var p="2785444898"},149:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(32),c=a.n(s);a.d(t,"a",function(){return c.a});a(150);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});a(33);var n=a(156),r=a.n(n),i=a(157),o=a.n(i);o.a.overrideThemeStyles=function(){return{".title a:hover":{textDecoration:"underline"},"a.gatsby-resp-image-link":{boxShadow:"none"},h1:{fontFamily:["PT Sans","Helvetica","Arial","sans-serif"].join(",")},body:{backgroundColor:"#fffffb"}}};var s=new r.a(Object.assign({},o.a,{googleFonts:[{name:"Abril Fatface",styles:["400"]}],headerFontFamily:["PT Sans","Helvetica","Arial","sans-serif"],bodyFontFamily:["PT Sans","Helvetica","Arial","sans-serif"]}));var c=s.rhythm,l=s.scale},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(54),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},153:function(e,t,a){"use strict";a(33);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(149),c=a(151),l=(a(158),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(27),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},o.a.createElement("header",null,o.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.2),{marginBottom:Object(c.a)(1.5),marginTop:0,textAlign:"center",fontFamily:'"Abril Fatface", serif'})},o.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},t))),o.a.createElement("main",null,a),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(o.a.Component));t.a=l},154:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(159),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=e.useTitleTemplate,u=n.data.site,d=t||u.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:c?"%s | "+u.siteMetadata.title:s,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{property:"og:image",content:""+u.siteMetadata.siteUrl+u.siteMetadata.image+"?20190312"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],useTitleTemplate:!0},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired,useTitleTemplate:s.a.bool},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"jaeseokk.log",description:"",author:"Jaeseok Kang",image:"icons/icon-512x512.png",siteUrl:"https://jaeseokk.dev/"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-223a9273eb32fcac8353.js.map