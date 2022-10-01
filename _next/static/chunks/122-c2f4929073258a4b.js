"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{9098:function(n,e,o){o.r(e)},6186:function(n,e,o){o.d(e,{E:function(){return k}});var t=o(7328),r=o(6297),i=o(2322),s=o(6227),d=o(8694),c=o(9611),l=o(2784),a=o(9291);l.createElement;const u=(0,s.z)(a.Z,{name:"Image",position:"relative",source:{uri:""},zIndex:1},{inlineProps:new Set(["src","width","height"])}),k=u.extractable((n=>{const e=(0,d.p)(n),{src:o}=e,s=(0,r.Z)(e,["src"]),l="string"===typeof o?(0,t.Z)({uri:o},c.$L&&{width:e.width,height:e.height}):o;return(0,i.jsx)(u,(0,t.Z)({source:l},s))}))},4016:function(n,e,o){o.d(e,{Z:function(){return s}});var t=o(6227),r=o(6329),i=o(9611);const s=(0,t.z)(r.K,{name:"Separator",variants:{vertical:{true:{y:0,x:-.5,height:i.$L?"initial":"auto",maxHeight:i.$L?"initial":"auto",width:0,maxWidth:0,borderBottomWidth:0,borderRightWidth:1}}},borderBottomWidth:"_bbw-1px",maxHeight:"_mah-0px",height:"_h-0px",flexGrow:"_fg-1",flexShrink:"_fs-1",borderTopWidth:"_btw-0px",borderRightWidth:"_brw-0px",borderLeftWidth:"_blw-0px",borderTopColor:"_btc-zx92k3",borderRightColor:"_brc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderLeftColor:"_blc-zx92k3",borderBottomStyle:"_borderBottomStyle-solid",borderTopStyle:"_borderTopStyle-solid",borderLeftStyle:"_bls-solid",borderRightStyle:"_borderRightStyle-solid",transform:"_transform-n24na2"});o(9098)},390:function(n,e,o){o.d(e,{r:function(){return d}});var t=o(2322),r=o(9611),i=o(5300),s=o(2784);function d(n){let{children:e,columns:o,itemMinWidth:d=200,gap:c}=n;if(r.$L)return(0,t.jsx)("div",{style:{gap:c,display:"grid",justifyContent:"stretch",gridTemplateColumns:"repeat( auto-fit, minmax(".concat(d,"px, 1fr) )")},children:e});const l=s.Children.toArray(e);return(0,t.jsx)(i.sL,{alignItems:"center",justifyContent:"center",flexWrap:"wrap",children:l.map(((n,e)=>n?(0,t.jsx)(i.sL,{flex:1,minWidth:d,marginRight:c,marginBottom:c,children:n},e):null))})}},7312:function(n,e,o){o.d(e,{o:function(){return j}});var t=o(7328),r=o(6670),i=o(6297),s=o(2322),d=o(4018),c=o(6227),l=o(4722),a=o(5678),u=o(5300),k=o(2784),h=o(5314),x=o(8033),f=o(4902),p=o(2267);function L({colors:n,locations:e,startPoint:o,endPoint:t,...r}){const[i,s]=k.useState(null),{width:d=1,height:c=1}=i??{},l=`linear-gradient(${k.useMemo((()=>{const[n,e]=(()=>{let n=[0,0];Array.isArray(o)&&(n=[null!=o[0]?o[0]:0,null!=o[1]?o[1]:0]);let e=[0,1];return Array.isArray(t)&&(e=[null!=t[0]?t[0]:0,null!=t[1]?t[1]:1]),[n,e]})();n[0]*=d,e[0]*=d,n[1]*=c,e[1]*=c;const r=e[1]-n[1],i=e[0]-n[0];return 90+180*Math.atan2(r,i)/Math.PI}),[d,c,o,t])}deg, ${k.useMemo((()=>n.map(((n,o)=>{const t=function(n,e=1){if(null==n)return;if("string"===typeof n&&(n=>"currentcolor"===n||"currentColor"===n||"inherit"===n||0===n.indexOf("var("))(n))return n;const o=(0,f.a)(n);if(null!=o)return`rgba(${o>>16&255},${o>>8&255},${255&o},${((o>>24&255)/255*e).toFixed(2)})`}(n);let r=t;if(e&&e[o]){r+=` ${100*Math.max(0,Math.min(1,e[o]))}%`}return r}))),[n,e]).join(",")})`;return k.createElement(p.Z,{...r,style:[r.style,{backgroundImage:l}],onLayout:n=>{const{x:e,y:o,width:t,height:d}=n.nativeEvent.layout,c=i??{x:0,y:0,width:1,height:1};e===c.x&&o===c.y&&t===c.width&&d===c.height||s({x:e,y:o,width:t,height:d}),r.onLayout&&r.onLayout(n)}})}class y extends k.Component{render(){const{colors:n,locations:e,start:o,end:t,...r}=this.props;let i=e;return e&&n.length!==e.length&&(console.warn("LinearGradient colors and locations props should be arrays of the same length"),i=e.slice(0,n.length)),k.createElement(L,{...r,colors:x.Z.select({web:n,default:n.map(f.a)}),locations:i,startPoint:m(o),endPoint:m(t)})}}function m(n){if(n){if(!Array.isArray(n)||2===n.length)return Array.isArray(n)?n:[n.x,n.y];console.warn("start and end props for LinearGradient must be of the format [x,y] or {x, y}")}}k.createElement;const j=u.FA.extractable((0,d.Y)(k.forwardRef(((n,e)=>{const{start:o,end:d,colors:c,locations:l,children:a}=n,u=(0,i.Z)(n,["start","end","colors","locations","children"]),k=b(c||[]);return(0,s.jsx)(g,(0,r.Z)((0,t.Z)({ref:e},u),{children:(0,s.jsx)(y,{start:o,end:d,colors:k,locations:l,style:[h.Z.absoluteFill],children:a})}))})))),g=(0,c.z)(u.FA,{name:"LinearGradient",overflow:"hidden",position:"relative"}),b=n=>{const e=(0,l.Fg)();return n.map((n=>"$"===n[0]?(0,a.E0)(e[n]||n):n))}},5947:function(n,e,o){o.d(e,{Zb:function(){return x}});var t=o(2322),r=o(6227),i=o(7537),s=o(4018),d=o(2784),c=o(102);var l=o(9377);d.createElement;const a=(0,r.z)(l.K,{name:"Card",backgroundColor:"$background",position:"relative",overflow:"hidden",variants:{size:{"...size":(n,{tokens:e})=>({borderRadius:e.radius[n]??n})}},defaultVariants:{size:"$4"}}),u=(0,r.z)(l.K,{name:"CardHeader",zIndex:10,backgroundColor:"transparent",marginBottom:"auto",variants:{size:{"...size":(n,{tokens:e})=>({padding:e.space[n]??n})}}}),k=(0,r.z)(u,{name:"CardFooter",zIndex:5,flexDirection:"row",marginTop:"auto",marginBottom:0}),h=(0,r.z)(l.K,{name:"CardBackground",zIndex:0,fullscreen:!0,overflow:"hidden",pointerEvents:"none",padding:0}),x=(0,i.$)(a.extractable((0,s.Y)((0,d.forwardRef)((({size:n,__scopeCard:e,children:o,...r},i)=>(0,t.jsx)(a,{ref:i,...r,children:d.Children.map(o,(e=>((n,e)=>(0,d.isValidElement)(n)&&(0,c.R)(n.type,e))(e)&&!e.props.size?(0,d.cloneElement)(e,{size:n}):e))}))))),{Header:u,Footer:k,Background:h})},102:function(n,e,o){function t(n,e){const o=n&&n.staticConfig;return!(!o||!o.parsed)&&(!e||e===o.componentName)}o.d(e,{R:function(){return t}})},2470:function(n,e,o){o.d(e,{K:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.x1,{x1:"12",y1:"5",x2:"12",y2:"19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.aH,{points:"19 12 12 19 5 12",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="ArrowDown";const c=(0,r.memo)((0,s.H)(d))},609:function(n,e,o){o.d(e,{J:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,t.jsx)(i.aH,{points:"20 6 9 17 4 12",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="Check";const c=(0,r.memo)((0,s.H)(d))},4474:function(n,e,o){o.d(e,{s:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,t.jsx)(i.aH,{points:"15 18 9 12 15 6",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="ChevronLeft";const c=(0,r.memo)((0,s.H)(d))},7367:function(n,e,o){o.d(e,{_:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,t.jsx)(i.aH,{points:"9 18 15 12 9 6",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="ChevronRight";const c=(0,r.memo)((0,s.H)(d))},4533:function(n,e,o){o.d(e,{E:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.aH,{points:"16 18 22 12 16 6",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.aH,{points:"8 6 2 12 8 18",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Code";const c=(0,r.memo)((0,s.H)(d))},1944:function(n,e,o){o.d(e,{C:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.UL,{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.y$,{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Copy";const c=(0,r.memo)((0,s.H)(d))},9503:function(n,e,o){o.d(e,{x:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.UL,{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.UL,{x:"9",y:"9",width:"6",height:"6",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"9",y1:"1",x2:"9",y2:"4",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"15",y1:"1",x2:"15",y2:"4",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"9",y1:"20",x2:"9",y2:"23",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"15",y1:"20",x2:"15",y2:"23",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"20",y1:"9",x2:"23",y2:"9",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"20",y1:"14",x2:"23",y2:"14",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"1",y1:"9",x2:"4",y2:"9",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"1",y1:"14",x2:"4",y2:"14",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Cpu";const c=(0,r.memo)((0,s.H)(d))},2366:function(n,e,o){o.d(e,{N:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.mg,{points:"13 19 22 12 13 5 13 19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.mg,{points:"2 19 11 12 2 5 2 19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="FastForward";const c=(0,r.memo)((0,s.H)(d))},372:function(n,e,o){o.d(e,{S:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.mg,{points:"12 2 2 7 12 12 22 7 12 2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.aH,{points:"2 17 12 22 22 17",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.aH,{points:"2 12 12 17 22 12",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Layers";const c=(0,r.memo)((0,s.H)(d))},3383:function(n,e,o){o.d(e,{H:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.UL,{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.y$,{d:"M7 11V7a5 5 0 0 1 10 0v4",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Lock";const c=(0,r.memo)((0,s.H)(d))},588:function(n,e,o){o.d(e,{$:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.y$,{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.Cd,{cx:"12",cy:"10",r:"3",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="MapPin";const c=(0,r.memo)((0,s.H)(d))},6341:function(n,e,o){o.d(e,{d:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.UL,{x:"6",y:"4",width:"4",height:"16",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.UL,{x:"14",y:"4",width:"4",height:"16",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Pause";const c=(0,r.memo)((0,s.H)(d))},1925:function(n,e,o){o.d(e,{s:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,t.jsx)(i.mg,{points:"5 3 19 12 5 21 5 3",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="Play";const c=(0,r.memo)((0,s.H)(d))},6462:function(n,e,o){o.d(e,{F:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.mg,{points:"11 19 2 12 11 5 11 19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.mg,{points:"22 19 13 12 22 5 22 19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Rewind";const c=(0,r.memo)((0,s.H)(d))},6622:function(n,e,o){o.d(e,{U:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(9125);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,t.jsx)(i.mg,{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="Star";const c=(0,r.memo)((0,s.H)(d))},8682:function(n,e,o){o.d(e,{Q:function(){return l}});var t=o(2322),r=o(1925),i=o(6747),s=o(2041),d=o(6669),c=o(2007);function l(n){const[e,o]=(0,s.T)({strategy:"most-recent-wins",prop:n.position,defaultProp:0}),l=a[e],u=(n=1)=>{o((e=>(e+n)%a.length))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.b,{focusable:!1,animation:n.animation||"bouncy",onPress:()=>u(),size:104,boc:"$backgroundHover",bw:1,br:"$9",bc:"$backgroundStrong",hoverStyle:{scale:1.1},pressStyle:{scale:.9},...l,children:n.children||(0,t.jsx)(i.K7,{downscale:.75})}),(0,t.jsx)(c.zx,{pos:"absolute",b:20,l:20,icon:r.s,theme:n.tint,size:"$5",circular:!0,onPress:()=>u()})]})}const a=[{x:0,y:0,scale:1,rotate:"0deg"},{x:-50,y:-50,scale:.5,rotate:"-45deg",hoverStyle:{scale:.6},pressStyle:{scale:.4}},{x:50,y:50,scale:1,rotate:"180deg",hoverStyle:{scale:1.1},pressStyle:{scale:.9}}]},1428:function(n,e,o){o.d(e,{O:function(){return d},q:function(){return c}});var t=o(2784),r=o(9611),i=o(1439),s=o(4341);const d=(n,{once:e,...o}={})=>{const[s,d]=(0,t.useState)(!r.$L);return r.$L&&c(n,(0,i.z)((({isIntersecting:n})=>{(e&&n||!e)&&d(n)})),o),s},c=(n,e,o={threshold:1},r=[])=>{(0,t.useEffect)((()=>{const t=Array.isArray(n)?n:[n];if(!t.length||!e)return;let r,i=null;const d=new IntersectionObserver((([n])=>{r=new Proxy(n,{get:(n,e)=>"dispose"===e?i:n[e]}),null==i||i(),n.isIntersecting?i=e(r)||null:e(r)}),o),c=new ResizeObserver((0,s.Ds)((()=>{r&&(i=e(r,!0)||null)}),80));c.observe(document.body);for(const n of t)n.current&&d.observe(n.current);return()=>{null==i||i(),c.disconnect(),d.disconnect()}}),[e,n,o,...r])}}}]);