!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("classnames"),require("@vx/group"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["exports","classnames","@vx/group","prop-types","react"],n):n(e.vx=e.vx||{},e.classNames,e.vx,e.PropTypes,e.React)}(this,function(e,o,s,n,l){"use strict";function p(e){var n=e.links,t=e.linkComponent,r=e.className;return l.createElement(s.Group,null,n.map(function(e,n){return l.createElement(s.Group,{className:o("vx-network-links",r),key:"network-link-".concat(n)},l.createElement(t,{link:e}))}))}function c(e){var n=e.nodes,t=e.nodeComponent,r=e.className;return l.createElement(s.Group,null,n.map(function(e,n){return l.createElement(s.Group,{key:"network-node-".concat(n),className:o("vx-network-nodes",r),transform:"translate(".concat(e.x,", ").concat(e.y,")")},l.createElement(t,{node:e}))}))}function i(e){var n=e.link;return l.createElement("line",{x1:n.source.x,y1:n.source.y,x2:n.target.x,y2:n.target.y,strokeWidth:2,stroke:"#999",strokeOpacity:.6})}function u(){return l.createElement("circle",{r:15,fill:"#21D4FD"})}function t(e){var n=e.graph,t=e.linkComponent,r=void 0===t?i:t,o=e.nodeComponent,a=void 0===o?u:o;return l.createElement(s.Group,null,l.createElement(p,{links:n.links,linkComponent:r}),l.createElement(c,{nodes:n.nodes,nodeComponent:a}))}o=o&&o.hasOwnProperty("default")?o.default:o,n=n&&n.hasOwnProperty("default")?n.default:n,l=l&&l.hasOwnProperty("default")?l.default:l,p.propTypes={links:n.array,linkComponent:n.any,className:n.string},c.propTypes={nodes:n.array,nodeComponent:n.any,className:n.string},i.propTypes={link:n.object},t.propTypes={graph:n.object,linkComponent:n.any,nodeComponent:n.any},e.Graph=t,e.Links=p,e.Nodes=c,e.DefaultLink=i,e.DefaultNode=u,Object.defineProperty(e,"__esModule",{value:!0})});
