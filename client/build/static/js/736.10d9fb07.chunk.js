"use strict";(self.webpackChunkinitproject=self.webpackChunkinitproject||[]).push([[736],{7736:function(n,e,i){i.r(e);var t=i(885),r=i(2791),o=i(6681),d=i(4476),l=i(9434),a=i(1876),u=i(7108),p=i(5174),s=i(184);e.default=function(n){var e,i,c=n.blockId,x=n.onRemove,f=(0,l.v9)((function(n){return(0,a.tj)(n,c)})),g=f.id,v=f.template,h=f.data,b=f.isCardOpened,Z=(0,p.Eo)(v),j=(0,p.yZ)(v),m=(0,l.I0)(),k=(0,r.useState)(h.navTitle),w=(0,t.Z)(k,2),C=w[0],I=w[1],P=(0,r.useState)(j),O=(0,t.Z)(P,2),T=O[0],y=O[1],q=(0,r.useState)(null===(e=h.leftText)||void 0===e?void 0:e.value),R=(0,t.Z)(q,2),S=R[0],z=R[1],F=(0,r.useState)(null===(i=h.rightText)||void 0===i?void 0:i.value),K=(0,t.Z)(F,2),A=K[0],B=K[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(d.Z,{title:"Footer",pinned:!0,onRemove:x,icon:u.$_,isCardOpened:b,blockId:c,children:[(0,s.jsx)(o.oi,{title:"\uba54\ub274\uba85",required:!0,onChange:function(n){I(n.target.value),m((0,a.sK)({blockId:g,field:"navTitle",value:n.target.value}))},guideline:"\ub124\ube44\uac8c\uc774\uc158 \ubc14\uc5d0 \uc785\ub825\ub420 \uba54\ub274\uba85\uc744 \uc785\ub825\ud558\uc138\uc694.",value:C}),(0,s.jsx)(o.AP,{title:"\uc2a4\ud0c0\uc77c",required:!0,guideline:"\uc2a4\ud0c0\uc77c\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",placeholder:"\uc6d0\ud558\ub294 \uc120\ud0dd\uc9c0\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694",options:Z,onChange:function(n){y(n),m((0,a.QB)({blockId:g,newTemplate:n.value}))},value:T}),(0,s.jsx)(o.oi,{title:"\uc67c\ucabd \ud14d\uc2a4\ud2b8",required:!1,placeholder:"\xa92022 Block Inc. All rights reserved",onChange:function(n){z(n.target.value),m((0,a.sK)({blockId:g,field:"leftText",value:{value:n.target.value}}))},guideline:"\ud478\ud130 \uc67c\ucabd\uc5d0 \ub4e4\uc5b4\uac08 \ubb38\uad6c\ub97c \uc785\ub825\ud558\uc138\uc694",value:S}),(0,s.jsx)(o.oi,{title:"\uc624\ub978\ucabd \ud14d\uc2a4\ud2b8",required:!1,placeholder:"\ube14\ub85d",onChange:function(n){B(n.target.value),m((0,a.sK)({blockId:g,field:"rightText",value:{value:n.target.value}}))},guideline:"\ud478\ud130 \uc624\ub978\ucabd\uc5d0 \ub4e4\uc5b4\uac08 \ubb38\uad6c\ub97c \uc785\ub825\ud558\uc138\uc694.",value:A})]})})}},4476:function(n,e,i){i.d(e,{Z:function(){return T}});var t,r,o,d,l,a,u,p,s,c,x=i(168),f=i(1242),g=i(7108),v=(i(2791),i(9434)),h=i(1876),b=i(184),Z=f.ZP.div(t||(t=(0,x.Z)(["\n  background: #ffffff;\n  border: 1px solid #efefef;\n  border-radius: ",";\n  position: relative;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  padding: 0px 24px;\n  box-sizing: border-box;\n  & * {\n    user-select: none;\n    user-drag: none;\n  }\n"])),(function(n){return!0===n.isOpened?"12px 12px 0 0":"12px"})),j=f.ZP.div(r||(r=(0,x.Z)(["\n  width: 100%;\n"]))),m=f.ZP.div(o||(o=(0,x.Z)(["\n  background: #ffffff;\n  border: 1px solid #efefef;\n  border-top: none;\n  padding: 24px;\n  box-sizing: border-box;\n  border-radius: 0 0 12px 12px;\n  div:first-child {\n    margin-top: 0px;\n  }\n"]))),k=f.ZP.img(d||(d=(0,x.Z)(["\n  width: 22px;\n  height: 22px;\n  margin: auto 0;\n  &:hover {\n    cursor: ",";\n  }\n  &:active {\n    cursor: ",";\n  }\n"])),(function(n){return n.pinned?"not-allowed":"grab"}),(function(n){return n.pinned?"not-allowed":"grabbing"})),w=f.ZP.div(l||(l=(0,x.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  display: flex;\n  margin-left: 20px;\n"]))),C=f.ZP.span(a||(a=(0,x.Z)(["\n  margin: auto 0;\n  margin-left: 16px;\n  padding-top: 2px;\n"]))),I=f.ZP.img(u||(u=(0,x.Z)(["\n  width: 24px;\n  height: 24px;\n  margin: auto 0;\n"]))),P=f.ZP.img(p||(p=(0,x.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  padding: 10px;\n  right: 64px;\n  top: 9px;\n  transition: opacity 0.3s;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))),O=f.ZP.img(s||(s=(0,x.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  padding: 10px;\n  right: 22px;\n  top: 9px;\n  transition: transform 0.4s;\n  &:hover {\n    cursor: pointer;\n  }\n  ","\n"])),(function(n){return n.isOpened&&(0,f.iv)(c||(c=(0,x.Z)(["\n      transform: rotate(180deg);\n    "])))})),T=function(n){var e,i=(0,v.I0)(),t=null!==(e=n.isCardOpened)&&void 0!==e&&e;return(0,b.jsxs)(j,{children:[(0,b.jsxs)(Z,{isOpened:t,children:[(0,b.jsx)(k,{pinned:!!n.pinned,src:n.pinned?g.lO:g.Tp,alt:""}),(0,b.jsxs)(w,{children:[(0,b.jsx)(I,{src:n.icon,alt:""}),(0,b.jsx)(C,{children:n.title})]}),(0,b.jsx)(P,{src:g.rF,alt:"",onClick:n.onRemove}),(0,b.jsx)(O,{src:g.Rk,alt:"",isOpened:t,onClick:function(){var e;i((0,h.cQ)(null!==(e=n.blockId)&&void 0!==e?e:""))}})]}),t&&(0,b.jsx)(m,{isOpened:t,children:n.children})]})}}}]);
//# sourceMappingURL=736.10d9fb07.chunk.js.map