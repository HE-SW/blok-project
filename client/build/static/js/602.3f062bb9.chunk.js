"use strict";(self.webpackChunkinitproject=self.webpackChunkinitproject||[]).push([[602],{5602:function(n,e,i){i.r(e);var t=i(885),r=i(2791),o=i(6681),d=i(4476),a=i(5174),l=i(9434),p=i(1876),u=i(7108),s=i(184);e.default=function(n){var e,i,c=n.blockId,x=n.onRemove,g=(0,l.v9)((function(n){return(0,p.tj)(n,c)})),f=g.id,v=g.template,h=g.data,b=g.isCardOpened,Z=(0,a.Eo)(v),m=(0,a.yZ)(v),j=(0,l.I0)(),k=(0,r.useState)(m),w=(0,t.Z)(k,2),C=w[0],P=w[1],O=(0,r.useState)(null===(e=h.title)||void 0===e?void 0:e.value),I=(0,t.Z)(O,2),y=I[0],R=I[1],q=(0,r.useState)(null===(i=h.headerHighlight)||void 0===i?void 0:i.value),z=(0,t.Z)(q,2),S=z[0],F=z[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(d.Z,{title:"Header",onRemove:x,icon:u.wp,isCardOpened:b,blockId:c,children:[(0,s.jsx)(o.AP,{title:"\uc2a4\ud0c0\uc77c",required:!0,guideline:"\uc2a4\ud0c0\uc77c\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",placeholder:"\uc6d0\ud558\ub294 \uc120\ud0dd\uc9c0\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694",options:Z,onChange:function(n){P(n),j((0,p.QB)({blockId:f,newTemplate:n.value}))},value:C}),(0,s.jsx)(o.oi,{title:"\ud0c0\uc774\ud2c0",required:!0,guideline:"\ud14d\uc2a4\ud2b8\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",value:y,onChange:function(n){R(n.target.value),j((0,p.sK)({blockId:f,field:"title",value:{value:n.target.value}}))}}),(0,s.jsx)(o.oi,{title:"\ub108\ube44",required:!0,guideline:"1~10 \uc22b\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"number",value:S,onChange:function(n){0<=Number(n.target.value)&&10>=Number(n.target.value)&&(F(n.target.value),j((0,p.sK)({blockId:f,field:"number",value:{value:n.target.value}})))}})]})})}},4476:function(n,e,i){i.d(e,{Z:function(){return y}});var t,r,o,d,a,l,p,u,s,c,x=i(168),g=i(1242),f=i(7108),v=(i(2791),i(9434)),h=i(1876),b=i(184),Z=g.ZP.div(t||(t=(0,x.Z)(["\n  background: #ffffff;\n  border: 1px solid #efefef;\n  border-radius: ",";\n  position: relative;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  padding: 0px 24px;\n  box-sizing: border-box;\n  & * {\n    user-select: none;\n    user-drag: none;\n  }\n"])),(function(n){return!0===n.isOpened?"12px 12px 0 0":"12px"})),m=g.ZP.div(r||(r=(0,x.Z)(["\n  width: 100%;\n"]))),j=g.ZP.div(o||(o=(0,x.Z)(["\n  background: #ffffff;\n  border: 1px solid #efefef;\n  border-top: none;\n  padding: 24px;\n  box-sizing: border-box;\n  border-radius: 0 0 12px 12px;\n  div:first-child {\n    margin-top: 0px;\n  }\n"]))),k=g.ZP.img(d||(d=(0,x.Z)(["\n  width: 22px;\n  height: 22px;\n  margin: auto 0;\n  &:hover {\n    cursor: ",";\n  }\n  &:active {\n    cursor: ",";\n  }\n"])),(function(n){return n.pinned?"not-allowed":"grab"}),(function(n){return n.pinned?"not-allowed":"grabbing"})),w=g.ZP.div(a||(a=(0,x.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  display: flex;\n  margin-left: 20px;\n"]))),C=g.ZP.span(l||(l=(0,x.Z)(["\n  margin: auto 0;\n  margin-left: 16px;\n  padding-top: 2px;\n"]))),P=g.ZP.img(p||(p=(0,x.Z)(["\n  width: 24px;\n  height: 24px;\n  margin: auto 0;\n"]))),O=g.ZP.img(u||(u=(0,x.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  padding: 10px;\n  right: 64px;\n  top: 9px;\n  transition: opacity 0.3s;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))),I=g.ZP.img(s||(s=(0,x.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  padding: 10px;\n  right: 22px;\n  top: 9px;\n  transition: transform 0.4s;\n  &:hover {\n    cursor: pointer;\n  }\n  ","\n"])),(function(n){return n.isOpened&&(0,g.iv)(c||(c=(0,x.Z)(["\n      transform: rotate(180deg);\n    "])))})),y=function(n){var e,i=(0,v.I0)(),t=null!==(e=n.isCardOpened)&&void 0!==e&&e;return(0,b.jsxs)(m,{children:[(0,b.jsxs)(Z,{isOpened:t,children:[(0,b.jsx)(k,{pinned:!!n.pinned,src:n.pinned?f.lO:f.Tp,alt:""}),(0,b.jsxs)(w,{children:[(0,b.jsx)(P,{src:n.icon,alt:""}),(0,b.jsx)(C,{children:n.title})]}),(0,b.jsx)(O,{src:f.rF,alt:"",onClick:n.onRemove}),(0,b.jsx)(I,{src:f.Rk,alt:"",isOpened:t,onClick:function(){var e;i((0,h.cQ)(null!==(e=n.blockId)&&void 0!==e?e:""))}})]}),t&&(0,b.jsx)(j,{isOpened:t,children:n.children})]})}}}]);
//# sourceMappingURL=602.3f062bb9.chunk.js.map