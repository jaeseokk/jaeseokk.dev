(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,t,a){"use strict";a.r(t);a(33);var i=a(7),r=a.n(i),n=a(0),s=a.n(n),o=a(149),l=(a(160),a(162)),d=a(163),c=a.n(d),A=a(151);var u="300244392",f=function(){return s.a.createElement(o.b,{query:u,render:function(e){var t=e.site.siteMetadata,a=t.author,i=t.social;return s.a.createElement("div",{style:{display:"flex",marginBottom:Object(A.a)(2.5)}},s.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(A.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),s.a.createElement("p",null,"Written by"," ",s.a.createElement("strong",null,s.a.createElement("a",{href:"https://twitter.com/"+i.twitter},a))))},data:l})},p=a(153),g=a(154);a.d(t,"pageQuery",function(){return m});var h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,i=a.previous,r=a.next;return s.a.createElement(p.a,{location:this.props.location,title:t},s.a.createElement(g.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),s.a.createElement("h1",{style:Object.assign({},Object(A.b)(.7))},e.frontmatter.title),s.a.createElement("p",{style:Object.assign({},Object(A.b)(-.2),{display:"block",marginBottom:Object(A.a)(1),marginTop:Object(A.a)(-1)})},e.frontmatter.date),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("hr",{style:{marginBottom:Object(A.a)(1)}}),s.a.createElement(f,null),s.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},s.a.createElement("li",null,i&&s.a.createElement(o.a,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),s.a.createElement("li",null,r&&s.a.createElement(o.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},t}(s.a.Component),m=(t.default=h,"3654438753")},149:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(32),l=a.n(o);a.d(t,"a",function(){return l.a});a(150);var d=r.a.createContext({}),c=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},150:function(e,t,a){var i;e.exports=(i=a(152))&&i.default||i},151:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});a(33);var i=a(156),r=a.n(i),n=a(157),s=a.n(n);s.a.overrideThemeStyles=function(){return{".title a:hover":{textDecoration:"underline"},"a.gatsby-resp-image-link":{boxShadow:"none"},h1:{fontFamily:["PT Sans","Helvetica","Arial","sans-serif"].join(",")},body:{backgroundColor:"#fffffb"}}};var o=new r.a(Object.assign({},s.a,{googleFonts:[{name:"Abril Fatface",styles:["400"]}],headerFontFamily:["PT Sans","Helvetica","Arial","sans-serif"],bodyFontFamily:["PT Sans","Helvetica","Arial","sans-serif"]}));var l=o.rhythm,d=o.scale},152:function(e,t,a){"use strict";a.r(t);a(33);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(54),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},153:function(e,t,a){"use strict";a(33);var i=a(7),r=a.n(i),n=a(0),s=a.n(n),o=a(149),l=a(151),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(27),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},s.a.createElement("header",null,s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.2),{marginBottom:Object(l.a)(1.5),marginTop:0,textAlign:"center",fontFamily:'"Abril Fatface", serif'})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},t))),s.a.createElement("main",null,a),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(s.a.Component);t.a=d},154:function(e,t,a){"use strict";var i=a(155),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(158),d=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,l=e.useTitleTemplate,c=i.data.site,A=t||c.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:l?"%s | "+c.siteMetadata.title:o,meta:[{name:"description",content:A},{property:"og:title",content:o},{property:"og:description",content:A},{property:"og:type",content:"website"},{property:"og:image",content:""+c.siteMetadata.siteUrl+c.siteMetadata.image+"?20190312"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:A}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}c.defaultProps={lang:"en",meta:[],keywords:[],useTitleTemplate:!0},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired,useTitleTemplate:o.a.bool},t.a=c},155:function(e){e.exports={data:{site:{siteMetadata:{title:"jaeseokk.log",description:"",author:"Jaeseok Kang",image:"icons/icon-512x512.png",siteUrl:"https://jaeseokk.dev/"}}}}},160:function(e,t,a){"use strict";a(161)("fixed",function(e){return function(){return e(this,"tt","","")}})},161:function(e,t,a){var i=a(11),r=a(17),n=a(18),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},162:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAY943zFXEZu0Exm//8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEhEhAAQ0/9oACAEBAAEFAogrcVUJaE5ixZqgCbXYas8fnXa//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAIBAAAQMCBwAAAAAAAAAAAAAAAQACEBEhAxITM0FRgf/aAAgBAQAGPwIBzQebogYbW9FbZKzeLUpcQaJsf//EABsQAAIDAQEBAAAAAAAAAAAAAAERACExgUGR/9oACAEBAAE/IRn185G8HDYxwU3FvCQ6gvgRsLpkwtSgBUIkjtOUCfZ//9oADAMBAAIAAwAAABAw8H3/xAAYEQACAwAAAAAAAAAAAAAAAAAAARAhMf/aAAgBAwEBPxBFi2P/xAAYEQACAwAAAAAAAAAAAAAAAAAAARARMf/aAAgBAgEBPxBloeR//8QAHRABAAICAgMAAAAAAAAAAAAAAQARIVExQYHB0f/aAAgBAQABPxAgGcHgV0+xoAEo+dajSd0i6gcZGF50iZtdUtz1CgO9aeoWg0iMcaiOVsmnMXdhbU//2Q==",width:50,height:50,src:"/static/d5ca6218c1d941d058b722e784d13c1c/7e494/profile.jpg",srcSet:"/static/d5ca6218c1d941d058b722e784d13c1c/7e494/profile.jpg 1x,\n/static/d5ca6218c1d941d058b722e784d13c1c/36cc2/profile.jpg 1.5x,\n/static/d5ca6218c1d941d058b722e784d13c1c/0a3a6/profile.jpg 2x,\n/static/d5ca6218c1d941d058b722e784d13c1c/75d16/profile.jpg 3x"}}},site:{siteMetadata:{author:"Jaeseok Kang",social:{twitter:"kang89kr"}}}}}},163:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(34)),o=i(a(74)),l=i(a(75)),d=i(a(0)),c=i(a(4)),A=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},f=function(e){var t=A(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},p=[];var g=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+"<img "+o+l+a+r+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,A=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},A,{onLoad:s,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=A(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=A(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.Tag,E=e.itemProp,w="boolean"==typeof b?"lightgray":b,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,u),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),j={title:t,alt:this.state.isVisible?"":a,style:v,className:f};if(p){var B=p;return d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),B.base64&&d.default.createElement(m,(0,l.default)({src:B.base64},j)),B.tracedSVG&&d.default.createElement(m,(0,l.default)({src:B.tracedSVG},j)),w&&d.default.createElement(y,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,B.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),d.default.createElement(m,{alt:a,title:t,sizes:B.sizes,src:B.src,srcSet:B.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},B))}}))}if(g){var x=g,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},n);return"inherit"===n.display&&delete R.display,d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&d.default.createElement(m,(0,l.default)({src:x.base64},j)),x.tracedSVG&&d.default.createElement(m,(0,l.default)({src:x.tracedSVG},j)),w&&d.default.createElement(y,{title:t,style:{backgroundColor:w,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement(m,{alt:a,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,srcSet:x.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:y,sizes:E,fixed:y,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6d47764712eb87f1fa1f.js.map