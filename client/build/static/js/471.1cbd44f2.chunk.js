"use strict";(self.webpackChunkinitproject=self.webpackChunkinitproject||[]).push([[471],{8471:function(n,e,i){i.r(e);var t=i(885),r=i(2791),o=i(6681),d=i(4476),a=i(5174),l=i(1876),p=i(7629),s=i(5579),u=i(3329);e.default=function(n){var e,i,c=n.blockId,x=n.onRemove,f=(0,s.TL)(),g=(0,s.CG)((function(n){return(0,l.tj)(n,c)})),h=g.id,v=g.template,b=g.data,Z=g.isCardOpened,m=(0,a.Eo)(v),j=(0,a.yZ)(v),k=(0,r.useState)(j),w=(0,t.Z)(k,2),C=w[0],P=w[1],O=(0,r.useState)(null===(e=b.header)||void 0===e?void 0:e.value),y=(0,t.Z)(O,2),I=y[0],R=y[1],q=(0,r.useState)(null===(i=b.body)||void 0===i?void 0:i.value),z=(0,t.Z)(q,2),S=z[0],T=z[1];return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(d.Z,{title:"Calendar",onRemove:x,icon:p.f,isCardOpened:Z,blockId:c,children:[(0,u.jsx)(o.AP,{title:"\uc2a4\ud0c0\uc77c",required:!0,guideline:"\uc2a4\ud0c0\uc77c\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",placeholder:"\uc6d0\ud558\ub294 \uc120\ud0dd\uc9c0\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694",options:m,onChange:function(n){P(n),f((0,l.QB)({blockId:h,newTemplate:n.value}))},value:C}),(0,u.jsx)(o.oi,{title:"\ud0c0\uc774\ud2c0",required:!0,guideline:"\ud5e4\ub4dc\ub77c\uc778\uc5d0 \ud45c\uc2dc\ub420 \ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.",value:I,onChange:function(n){R(n.target.value),f((0,l.sK)({blockId:h,field:"header",value:{value:n.target.value}}))}}),(0,u.jsx)(o.oi,{title:"\ucd94\uac00 \ubb38\uad6c",required:!1,guideline:"\uc124\uba85\uc5d0 \ud45c\uc2dc\ub420 \ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694",value:S,onChange:function(n){T(n.target.value),f((0,l.sK)({blockId:h,field:"body",value:{value:n.target.value}}))}})]})})}},4476:function(n,e,i){i.d(e,{Z:function(){return I}});var t,r,o,d,a,l,p,s,u,c,x=i(168),f=i(1242),g=i(7629),h=(i(2791),i(9434)),v=i(1876),b=i(3329),Z=f.ZP.div(t||(t=(0,x.Z)(["\n  background: #ffffff;\n  border: 1px solid #efefef;\n  border-radius: ",";\n  position: relative;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  padding: 0px 24px;\n  box-sizing: border-box;\n  & * {\n    user-select: none;\n    user-drag: none;\n  }\n"])),(function(n){return!0===n.isOpened?"12px 12px 0 0":"12px"})),m=f.ZP.div(r||(r=(0,x.Z)(["\n  width: 100%;\n"]))),j=f.ZP.div(o||(o=(0,x.Z)(["\n  background: #ffffff;\n  border: 1px solid #efefef;\n  border-top: none;\n  padding: 24px;\n  box-sizing: border-box;\n  border-radius: 0 0 12px 12px;\n  div:first-child {\n    margin-top: 0px;\n  }\n"]))),k=f.ZP.img(d||(d=(0,x.Z)(["\n  width: 22px;\n  height: 22px;\n  margin: auto 0;\n  &:hover {\n    cursor: ",";\n  }\n  &:active {\n    cursor: ",";\n  }\n"])),(function(n){return n.pinned?"not-allowed":"grab"}),(function(n){return n.pinned?"not-allowed":"grabbing"})),w=f.ZP.div(a||(a=(0,x.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  display: flex;\n  margin-left: 20px;\n"]))),C=f.ZP.span(l||(l=(0,x.Z)(["\n  margin: auto 0;\n  margin-left: 16px;\n  padding-top: 2px;\n"]))),P=f.ZP.img(p||(p=(0,x.Z)(["\n  width: 24px;\n  height: 24px;\n  margin: auto 0;\n"]))),O=f.ZP.img(s||(s=(0,x.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  padding: 10px;\n  right: 64px;\n  top: 9px;\n  transition: opacity 0.3s;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))),y=f.ZP.img(u||(u=(0,x.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  padding: 10px;\n  right: 22px;\n  top: 9px;\n  transition: transform 0.4s;\n  &:hover {\n    cursor: pointer;\n  }\n  ","\n"])),(function(n){return n.isOpened&&(0,f.iv)(c||(c=(0,x.Z)(["\n      transform: rotate(180deg);\n    "])))})),I=function(n){var e,i=(0,h.I0)(),t=null!==(e=n.isCardOpened)&&void 0!==e&&e;return(0,b.jsxs)(m,{children:[(0,b.jsxs)(Z,{isOpened:t,children:[(0,b.jsx)(k,{pinned:!!n.pinned,src:n.pinned?g.lO:g.Tp,alt:""}),(0,b.jsxs)(w,{children:[(0,b.jsx)(P,{src:n.icon,alt:""}),(0,b.jsx)(C,{children:n.title})]}),(0,b.jsx)(O,{src:g.rF,alt:"",onClick:n.onRemove}),(0,b.jsx)(y,{src:g.Rk,alt:"",isOpened:t,onClick:function(){var e;i((0,v.cQ)(null!==(e=n.blockId)&&void 0!==e?e:""))}})]}),t&&(0,b.jsx)(j,{isOpened:t,children:n.children})]})}}}]);
//# sourceMappingURL=471.1cbd44f2.chunk.js.map