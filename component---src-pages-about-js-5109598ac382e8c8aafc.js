(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{159:function(e,n,t){"use strict";t.r(n),t.d(n,"query",function(){return c});var a=t(0),i=t.n(a),r=t(178),o=t(180),l=t(179);n.default=function(e){var n=e.data;return i.a.createElement(r.a,null,i.a.createElement(l.a,{pageTitle:n.aboutJson.title}),i.a.createElement(o.a,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.aboutJson.content.childMarkdownRemark.html}})))};var c="3981516706"},166:function(e,n,t){"use strict";var a=t(164),i=t.n(a),r=(t(85),t(57),t(186),t(58),t(165)),o={DESKTOP:1100,TABLET:767,PHONE:500};function l(){var e=i()(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return l=function(){return e},e}function c(){var e=i()(["\n    @media (max-width: ","em) {\n      ",";\n    }\n  "]);return c=function(){return e},e}var s=Object.keys(o).reduce(function(e,n){return e[n]=function(){return Object(r.css)(c(),o[n]/16,r.css.apply(void 0,arguments))},e["MIN_"+n]=function(){return Object(r.css)(l(),o[n]/16,r.css.apply(void 0,arguments))},e},{});n.a=s},168:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return g}),t.d(n,"StaticQueryContext",function(){return d}),t.d(n,"StaticQuery",function(){return f});var a=t(0),i=t.n(a),r=t(3),o=t.n(r),l=t(167),c=t.n(l);t.d(n,"Link",function(){return c.a}),t.d(n,"withPrefix",function(){return l.withPrefix}),t.d(n,"navigate",function(){return l.navigate}),t.d(n,"push",function(){return l.push}),t.d(n,"replace",function(){return l.replace}),t.d(n,"navigateTo",function(){return l.navigateTo});var s=t(26);t.d(n,"waitForRouteChange",function(){return s.c});var m=t(174),p=t.n(m);t.d(n,"PageRenderer",function(){return p.a});var u=t(40);t.d(n,"parsePath",function(){return u.a});var d=i.a.createContext({}),f=function(e){return i.a.createElement(d.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},174:function(e,n,t){var a;e.exports=(a=t(182))&&a.default||a},178:function(e,n,t){"use strict";t(39);var a=t(181),i=t(0),r=t.n(i),o=t(3),l=t.n(o),c=t(168),s=t(179),m=t(164),p=t.n(m),u=t(165);function d(){var e=p()(['\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    line-height: 1.5;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n    line-height: 1;\n    font-size: 1.6rem;\n    color: #000;\n    background-color: #fff;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n    -webkit-font-feature-settings: "pnum";\n    font-feature-settings: "pnum";\n    font-variant-numeric: proportional-nums;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  pre {\n    display: block;\n    padding: 2rem;\n    margin-top: 4rem;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    border-radius: 5px;\n    color: ',';\n    border: 1px solid #ddd;\n    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;\n  }\n\n  video {\n    max-width: 100%;\n  }\n\n  p {\n    margin-bottom: 2rem;\n  }\n  textarea {\n    font-family: sans-serif;\n    resize: none;\n  }\n\n  input[type=\'text\'],\n  input[type=\'password\'],\n  input[type=\'email\'],\n  input[type=\'url\'],\n  input[type=\'number\'],\n  textarea {\n    border: 1px solid hsl(0,0%,80%);\n    border-radius: 2px;\n    box-shadow: 0 0 4px 0 rgba(0,0,0,0.08);\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    padding: 1rem ;\n    margin-bottom: 1rem;\n    font-size: 1.3rem;\n\n    &:focus {\n      border-color: #ff4c00 !important;\n      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08) !important;\n      outline: 0;\n    }\n    &:invalid {\n      border-color: #e91800;\n      box-shadow: 0 0 4px 0 rgba(233, 24, 0, 0.62);\n    }\n    &:valid {\n      border-color: #0e9e0e;\n      box-shadow: 0 0 4px 0 rgba(14, 158, 14, 0.62);\n    }\n    &:invalid ~ .required-lbl {\n      color: #e91800;\n      margin-bottom: 5px;\n      margin-top: -10px;\n    }\n    &:valid ~ .required-lbl {\n      display: none;\n    }\n  }\n\n  .input-status {\n    margin: -.5rem 1rem 1rem;\n    font-size: 1.2rem;\n    &:valid {\n      color: #e91800;\n    }\n    &:invalid {\n      color: #0e9e0e;\n    }\n    &.none {\n      display: none;\n    }\n    &:invalid ~ .required-lbl {\n      color: #e91800;\n      margin-bottom: 5px;\n      margin-top: -10px;\n    }\n    &:valid ~ .required-lbl {\n      display: none;\n    }\n  }\n  .check-cont {\n    position: relative;\n    span {\n      font-size: 1.4rem;\n      line-height: 2;\n      margin-left: 1rem;\n    }\n  }\n  \n  .check-cont label {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 2px;\n    cursor: pointer;\n    height: 2rem;\n    width: 2rem;\n    left: 0;\n    position: absolute;\n    top: 0;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08)\n  }\n  \n  .check-cont label:after {\n    border: 2px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: "";\n    height: 5px;\n    opacity: 0;\n    position: absolute;\n    left: 4px;\n    top: 5px;\n    transform: rotate(-45deg);\n    width: 10px;\n  }\n  \n  .check-cont input[type="checkbox"] {\n    visibility: hidden;\n  }\n  \n  .check-cont input[type="checkbox"]:checked + label {\n    background-color: #ff4c00;\n    border-color: #ff4c00;\n  }\n  \n  .check-cont input[type="checkbox"]:checked + label:after {\n    opacity: 1;\n  }\n']);return d=function(){return e},e}var f=Object(u.createGlobalStyle)(d(),"#f90000"),g=function(e){var n=e.children;return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(s.a,null),n)};g.propTypes={children:l.a.node.isRequired};var h=function(e){return r.a.createElement(c.StaticQuery,{query:"2302781957",render:function(n){return r.a.createElement(g,Object.assign({data:n},e))},data:a})};h.propTypes={children:l.a.node.isRequired};n.a=h},179:function(e,n,t){"use strict";t(39);var a=t(183),i=t(0),r=t.n(i),o=t(3),l=t.n(o),c=t(189),s=t(168),m=t(13),p=function(e){var n=e.siteTitle,t=(e.siteTitleShort,e.siteDescription),a=e.siteUrl,i=e.pageTitle,o=e.pageTitleFull,l=void 0===o?i?n+": "+i:n:o,s=e.themeColor,m=e.social,p=e.imageUrl,u=e.location,d=e.canonical,f=void 0===d?a+(u.pathname||""):d;return r.a.createElement(c.Helmet,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{content:"IE=edge",httpEquiv:"X-UA-Compatible"}),r.a.createElement("meta",{content:"width=device-width,initial-scale=1.0,user-scalable=yes",name:"viewport"}),r.a.createElement("meta",{content:n,name:"apple-mobile-web-app-title"}),r.a.createElement("meta",{content:l,property:"og:title"}),r.a.createElement("meta",{content:l,name:"twitter:title"}),r.a.createElement("title",null,l),r.a.createElement("meta",{content:t,name:"description"}),r.a.createElement("meta",{content:t,property:"og:description"}),r.a.createElement("meta",{content:t,name:"twitter:description"}),r.a.createElement("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),r.a.createElement("meta",{content:"black-translucent",name:"apple-mobile-web-app-status-bar-style"}),r.a.createElement("meta",{content:s,name:"theme-color"}),r.a.createElement("meta",{content:n,name:"application-name"}),r.a.createElement("meta",{content:"website",property:"og:type"}),r.a.createElement("meta",{content:n,property:"og:site_name"}),r.a.createElement("meta",{content:m.fbAppId,property:"fb:app_id"}),r.a.createElement("meta",{content:"summary_large_image",name:"twitter:card"}),r.a.createElement("meta",{content:"@"+m.twitter,name:"twitter:site"}),r.a.createElement("meta",{content:"@"+m.twitter,name:"twitter:creator"}),r.a.createElement("meta",{content:l,name:"twitter:text:title"}),r.a.createElement("meta",{content:f,property:"og:url"}),r.a.createElement("meta",{content:f,name:"twitter:url"}),r.a.createElement("link",{rel:"canonical",href:f}),r.a.createElement("meta",{content:p||a+"/social.png",property:"og:image"}),r.a.createElement("meta",{content:"1024",property:"og:image:width"}),r.a.createElement("meta",{content:"512",property:"og:image:height"}),r.a.createElement("meta",{content:p||a+"/social.png",name:"twitter:image"}),r.a.createElement("meta",{content:"1024",name:"twitter:image:width"}),r.a.createElement("meta",{content:"512",name:"twitter:image:height"}),r.a.createElement("meta",{content:p||a+"/social.png",property:"og:image"}),r.a.createElement("meta",{content:"1024",property:"og:image:width"}),r.a.createElement("meta",{content:"512",property:"og:image:height"}),r.a.createElement("meta",{content:s,name:"msapplication-TileColor"}),r.a.createElement("meta",{content:"/icons/mstile-70x70.png",name:"msapplication-square70x70"}),r.a.createElement("meta",{content:"/icons/mstile-144x144.png",name:"msapplication-square144x144"}),r.a.createElement("meta",{content:"/icons/mstile-150x150.png",name:"msapplication-square150x150"}),r.a.createElement("meta",{content:"/icons/mstile-310x150.png",name:"msapplication-wide310x150"}),r.a.createElement("meta",{content:"/icons/mstile-310x310.png",name:"msapplication-square310x310"}),r.a.createElement("link",{href:"/manifest.json",rel:"manifest"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-57x57.png",rel:"apple-touch-icon",sizes:"57x57"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-60x60.png",rel:"apple-touch-icon",sizes:"60x60"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-72x72.png",rel:"apple-touch-icon",sizes:"72x72"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-76x76.png",rel:"apple-touch-icon",sizes:"76x76"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-114x114.png",rel:"apple-touch-icon",sizes:"114x114"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-120x120.png",rel:"apple-touch-icon",sizes:"120x120"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-144x144.png",rel:"apple-touch-icon",sizes:"144x144"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-152x152.png",rel:"apple-touch-icon",sizes:"152x152"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-167x167.png",rel:"apple-touch-icon",sizes:"167x167"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-180x180.png",rel:"icon",sizes:"180x180",type:"image/png"}),r.a.createElement("link",{href:"/icons/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),r.a.createElement("link",{href:"/icons/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var n=e.location,t=e.canonical,a=e.siteUrl,i=e.pageTitle,r=e.siteTitle,o=[{"@context":"http://schema.org","@type":"WebSite",url:t,name:i||r,alternateName:e.pageTitleFull}];return i&&"/"!==n.pathname&&o.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:r}},{"@type":"ListItem",position:2,item:{"@id":t,name:i}}]}),o}({location:u,canonical:f,siteUrl:a,pageTitle:i,siteTitle:n,pageTitleFull:l}))),r.a.createElement("script",{src:"https://js.braintreegateway.com/web/dropin/1.13.0/js/dropin.min.js"}))};p.propTypes={siteTitle:l.a.string,siteTitleShort:l.a.string,siteDescription:l.a.string,siteUrl:l.a.string,themeColor:l.a.string,social:l.a.objectOf(l.a.string),imageUrl:l.a.string,canonical:l.a.string,pageTitle:l.a.string,pageTitleFull:l.a.string};n.a=function(e){return r.a.createElement(s.StaticQuery,{query:"177639445",render:function(n){return r.a.createElement(m.Location,null,function(t){var a=t.location;return r.a.createElement(p,Object.assign({},n.site.siteMetadata,e,{location:a}))})},data:a})}},180:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(3),o=t.n(r),l=t(164),c=t.n(l),s=t(165),m=t.n(s),p=t(166);function u(){var e=c()(["\n    span {\n      font-size: 2rem;\n      &.large {\n        font-size: 2.2rem;\n      }\n      &.medium {\n        font-size: 1.8rem;\n      }\n      &.small {\n        font-size: 1.3rem;\n      }\n      &.italic {\n        font-style: italic;\n      }\n    }\n  "]);return u=function(){return e},e}function d(){var e=c()(["\n    &, &.padding-15 {\n      margin: 5rem 0;\n    }\n    span {\n      font-size: 2.5rem;\n      &.large {\n        font-size: 3.2rem;\n      }\n      &.medium {\n        font-size: 2.5rem;\n      }\n      &.small {\n        font-size: 1.6rem;\n      }\n      &.italic {\n        font-style: italic;\n      }\n    }\n  "]);return d=function(){return e},e}function f(){var e=c()(["\n  color: #fff;\n  padding: 5rem 0;\n  &.padding-15 {\n    padding: 15rem 0;\n  }\n  .box-tags {\n    margin-bottom: 2.5rem;\n    .box-tag {\n      display: inline-flex;\n      align-items: center;\n    }\n    .box-tag + .box-tag {\n      margin-left: 2rem;\n    }\n    .box-tag-icon {\n      border: 2px solid #fff;\n      border-radius: 10px;\n      font-size: 1rem;\n      display: inline-block;\n      width: 2.6rem;\n      height: 2.6rem;\n      line-height: 2.6rem;\n      text-align: center;\n    }\n  }\n  .box-price {\n    margin-bottom: 4rem;\n  }\n  span {\n    font-size: 1.5rem;\n    &.large {\n      font-size: 4.2rem;\n    }\n    &.medium {\n      font-size: 2.6rem;\n    }\n    &.small {\n      font-size: 1.3rem;\n    }\n    &.italic {\n      font-style: italic;\n    }\n  }\n  span + span {\n    margin-left: 1rem;\n  }\n  ",";\n  ",";\n"]);return f=function(){return e},e}var g=m.a.div(f(),p.a.TABLET(d()),p.a.PHONE(u())),h=function(e){var n=e.children,t=e.className;return i.a.createElement(g,{className:t},n)};h.propTypes={children:o.a.node.isRequired,className:o.a.string};n.a=h},181:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Gatsby Universal"}}}}},182:function(e,n,t){"use strict";t.r(n);t(39);var a=t(0),i=t.n(a),r=t(3),o=t.n(r),l=t(59),c=t(1),s=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(l.a,Object.assign({key:n.pathname,location:n,pageResources:t},t.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=s},183:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Gatsby Universal",siteTitleShort:"GatsbyU",siteDescription:"An opinionated starter for Gatsby.",siteUrl:"https://gu.fabianschultz.com",themeColor:"#000",social:{twitter:"gatsbyjs",fbAppId:"966242223397117"}}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-5109598ac382e8c8aafc.js.map