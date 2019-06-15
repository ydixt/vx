!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("classnames"),require("prop-types"),require("@vx/group")):"function"==typeof define&&define.amd?define(["exports","react","classnames","prop-types","@vx/group"],t):t(e.vx=e.vx||{},e.React,e.classNames,e.PropTypes,e.vx)}(this,function(e,C,H,t,J){"use strict";function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function L(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function U(e){var t=e.x1,r=e.x2;return{x1:e.y1,x2:e.y2,y1:t,y2:r}}function r(e){var t=e.left,r=void 0===t?0:t,o=e.top,n=void 0===o?0:o,i=e.className,a=e.max,l=e.min,x=e.firstQuartile,s=e.thirdQuartile,m=e.median,c=e.boxWidth,u=e.fill,y=e.fillOpacity,d=e.stroke,p=e.strokeWidth,f=e.rx,h=void 0===f?2:f,b=e.ry,v=void 0===b?2:b,T=e.valueScale,g=e.outliers,P=void 0===g?[]:g,k=e.horizontal,O=e.medianProps,j=void 0===O?{}:O,M=e.maxProps,W=void 0===M?{}:M,E=e.minProps,N=void 0===E?{}:E,w=e.boxProps,A=void 0===w?{}:w,F=e.outlierProps,Q=void 0===F?{}:F,S=e.container,q=void 0!==S&&S,z=e.containerProps,R=void 0===z?{}:z,_=e.children,B=k?n:r,D=B+c/2,G=T.range(),I={valueRange:G,center:D,offset:B,boxWidth:c,max:{x1:D-c/4,x2:D+c/4,y1:T(a),y2:T(a)},maxToThird:{x1:D,x2:D,y1:T(a),y2:T(s)},median:{x1:B,x2:B+c,y1:T(m),y2:T(m)},minToFirst:{x1:D,x2:D,y1:T(x),y2:T(l)},min:{x1:D-c/4,x2:D+c/4,y1:T(l),y2:T(l)},box:{x1:B,x2:c,y1:T(s),y2:Math.abs(T(s)-T(x))},container:{x1:B,x2:c,y1:Math.min.apply(Math,L(G)),y2:Math.abs(G[0]-G[1])}};return k&&(I.max=U(I.max),I.maxToThird=U(I.maxToThird),I.box=U(I.box),I.box.y1=T(x),I.median=U(I.median),I.minToFirst=U(I.minToFirst),I.min=U(I.min),I.container=U(I.container),I.container.y1=Math.min.apply(Math,L(G))),_?_(I):C.createElement(J.Group,{className:H("vx-boxplot",i)},P.map(function(e,t){var r=k?T(e):D,o=k?D:T(e);return C.createElement("circle",K({key:"vx-boxplot-outlier-".concat(t),className:"vx-boxplot-outlier",cx:r,cy:o,r:4,stroke:d,strokeWidth:p,fill:u,fillOpacity:y},Q))}),C.createElement("line",K({className:"vx-boxplot-max",x1:I.max.x1,y1:I.max.y1,x2:I.max.x2,y2:I.max.y2,stroke:d,strokeWidth:p},W)),C.createElement("line",{className:"vx-boxplot-max-to-third",x1:I.maxToThird.x1,y1:I.maxToThird.y1,x2:I.maxToThird.x2,y2:I.maxToThird.y2,stroke:d,strokeWidth:p}),C.createElement("rect",K({className:"vx-boxplot-box",x:I.box.x1,y:I.box.y1,width:I.box.x2,height:I.box.y2,stroke:d,strokeWidth:p,fill:u,fillOpacity:y,rx:h,ry:v},A)),C.createElement("line",K({className:"vx-boxplot-median",x1:I.median.x1,y1:I.median.y1,x2:I.median.x2,y2:I.median.y2,stroke:d,strokeWidth:p},j)),C.createElement("line",{className:"vx-boxplot-min-to-first",x1:I.minToFirst.x1,y1:I.minToFirst.y1,x2:I.minToFirst.x2,y2:I.minToFirst.y2,stroke:d,strokeWidth:p}),C.createElement("line",K({className:"vx-boxplot-min",x1:I.min.x1,y1:I.min.y1,x2:I.min.x2,y2:I.min.y2,stroke:d,strokeWidth:p},N)),q&&C.createElement("rect",K({x:I.container.x1,y:I.container.y1,width:I.container.x2,height:I.container.y2,fillOpacity:"0"},R)))}C=C&&C.hasOwnProperty("default")?C.default:C,H=H&&H.hasOwnProperty("default")?H.default:H,t=t&&t.hasOwnProperty("default")?t.default:t,r.propTypes={left:t.number,top:t.number,className:t.string,max:t.number,min:t.number,firstQuartile:t.number,thirdQuartile:t.number,median:t.number,boxWidth:t.number,fill:t.string,fillOpacity:t.oneOfType([t.number,t.string]),stroke:t.string,strokeWidth:t.oneOfType([t.number,t.string]),rx:t.number,ry:t.number,valueScale:t.func,outliers:t.array,horizontal:t.bool,medianProps:t.object,maxProps:t.object,minProps:t.object,boxProps:t.object,outlierProps:t.object,container:t.bool,containerProps:t.object,children:t.func},e.BoxPlot=r,e.computeStats=function(e){for(var t=L(e).sort(function(e,t){return e-t}),r=t.length,o=t[Math.round(r/4)],n=t[Math.round(3*r/4)],i=n-o,a=o-1.5*i,l=n+1.5*i,x=t.filter(function(e){return e<a||l<e}),s=2*i*Math.pow(r-x.length,-1/3),m=Math.round((l-a)/s),c=(l-a)/m,u=Array(m+2).fill(0),y=Array(m+2).fill(a),d=1;d<=m;d+=1)y[d]+=c*(d-.5);y[y.length-1]=l,t.filter(function(e){return a<=e&&e<=l}).forEach(function(e){u[Math.floor((e-a)/c)+1]+=1});var p=y.map(function(e,t){return{value:e,count:u[t]}});return{boxPlot:{min:a,firstQuartile:o,median:t[Math.round(r/2)],thirdQuartile:n,max:l,outliers:x},binData:p}},Object.defineProperty(e,"__esModule",{value:!0})});
