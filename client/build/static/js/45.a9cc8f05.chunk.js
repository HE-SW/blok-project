"use strict";(self.webpackChunkinitproject=self.webpackChunkinitproject||[]).push([[45],{8045:function(n,e,i){i.r(e);var t,r,o,a=i(2982),l=i(885),d=i(168),u=i(2791),p=i(6681),s=i(4476),c=i(5174),f=i(9434),x=i(1876),g=i(1242),v=i(7108),h=i(184),Z=g.ZP.div(t||(t=(0,d.Z)(["\n  box-sizing: border-box;\n  padding: 5px 8px;\n  background-color: #f0f1f3;\n  margin: 0 4px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px !important;\n"]))),b=g.ZP.span(r||(r=(0,d.Z)(["\n  font-size: 1rem;\n  color: black;\n  width: 80%;\n  display: flex;\n  flex-wrap: wrap;\n"]))),m=g.ZP.img(o||(o=(0,d.Z)(["\n  width: 8px;\n  height: 8px;\n  padding: 3px;\n  margin-left: 2px;\n  cursor: pointer;\n"])));e.default=function(n){var e,i,t=n.blockId,r=n.onRemove,o=(0,f.v9)((function(n){return(0,x.tj)(n,t)})),d=o.id,g=o.template,j=o.data,k=o.isCardOpened,w=(0,c.Eo)(g),C=(0,c.yZ)(g),P=(0,f.I0)(),I=(0,u.useState)(C),O=(0,l.Z)(I,2),y=O[0],S=O[1],T=(0,u.useState)(null===(e=j.title)||void 0===e?void 0:e.value),z=(0,l.Z)(T,2),q=z[0],K=z[1],R=(0,u.useState)(j.navTitle),E=(0,l.Z)(R,2),F=E[0],Q=E[1],A=(0,u.useState)(""),B=(0,l.Z)(A,2),D=B[0],G=B[1],H=(0,u.useState)(null===(i=j.arrText)||void 0===i?void 0:i.value),J=(0,l.Z)(H,2),L=J[0],M=J[1];return(0,u.useEffect)((function(){P((0,x.sK)({blockId:d,field:"arrText",value:{value:L}}))}),[L,P,d]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(s.Z,{title:"Skillset",onRemove:r,icon:v.Sj,isCardOpened:k,blockId:t,children:[(0,h.jsx)(p.oi,{title:"\uba54\ub274\uba85",required:!1,onChange:function(n){Q(n.target.value),P((0,x.sK)({blockId:d,field:"navTitle",value:n.target.value}))},guideline:"\ub124\ube44\uac8c\uc774\uc158 \ubc14\uc5d0 \uc785\ub825\ub420 \uba54\ub274\uba85\uc744 \uc785\ub825\ud558\uc138\uc694.",value:F}),(0,h.jsx)(p.AP,{title:"\uc2a4\ud0c0\uc77c",required:!0,guideline:"\uc2a4\ud0c0\uc77c\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",placeholder:"\uc6d0\ud558\ub294 \uc120\ud0dd\uc9c0\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694",options:w,onChange:function(n){S(n),P((0,x.QB)({blockId:d,newTemplate:n.value}))},value:y}),(0,h.jsx)(p.oi,{title:"\ud0c0\uc774\ud2c0",required:!0,guideline:"\ud0c0\uc774\ud2c0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:q,onChange:function(n){K(n.target.value),P((0,x.sK)({blockId:d,field:"title",value:{value:n.target.value}}))}}),(0,h.jsx)(p.w,{title:"\uae30\uc220 \uc2a4\ud0dd",required:!0,guideline:"\uae30\uc220 \uc2a4\ud0dd\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:D,onChange:function(n){G(n.target.value)},onClick:function(n){n.preventDefault(),M((function(n){if(n)return[].concat((0,a.Z)(n),[D])})),G((function(){return""})),P((0,x.sK)({blockId:d,field:"arrText",value:{value:L}}))},arr:(0,h.jsx)(b,{children:function(n){var e=[];if(n){for(var i=function(i){e.push((0,h.jsxs)(Z,{children:[n[i],(0,h.jsx)(m,{src:v.x,onClick:function(){M((function(n){if(n){var e=n.filter((function(n,e){return e!==i}));return(0,a.Z)(e)}}))}})]},"".concat(n,"-").concat(i)))},t=0;t<n.length;t++)i(t);return e}}(L)})},"skillset")]})})}},4476:function(n,e,i){i.d(e,{Z:function(){return y}});var t,r,o,a,l,d,u,p,s,c,f=i(168),x=i(1242),g=i(7108),v=(i(2791),i(9434)),h=i(1876),Z=i(184),b=x.ZP.div(t||(t=(0,f.Z)(["\n  background: #ffffff;\n  border: 1px solid #efefef;\n  border-radius: ",";\n  position: relative;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  padding: 0px 24px;\n  box-sizing: border-box;\n  & * {\n    user-select: none;\n    user-drag: none;\n  }\n"])),(function(n){return!0===n.isOpened?"12px 12px 0 0":"12px"})),m=x.ZP.div(r||(r=(0,f.Z)(["\n  width: 100%;\n"]))),j=x.ZP.div(o||(o=(0,f.Z)(["\n  background: #ffffff;\n  border: 1px solid #efefef;\n  border-top: none;\n  padding: 24px;\n  box-sizing: border-box;\n  border-radius: 0 0 12px 12px;\n  div:first-child {\n    margin-top: 0px;\n  }\n"]))),k=x.ZP.img(a||(a=(0,f.Z)(["\n  width: 22px;\n  height: 22px;\n  margin: auto 0;\n  &:hover {\n    cursor: ",";\n  }\n  &:active {\n    cursor: ",";\n  }\n"])),(function(n){return n.pinned?"not-allowed":"grab"}),(function(n){return n.pinned?"not-allowed":"grabbing"})),w=x.ZP.div(l||(l=(0,f.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  display: flex;\n  margin-left: 20px;\n"]))),C=x.ZP.span(d||(d=(0,f.Z)(["\n  margin: auto 0;\n  margin-left: 16px;\n  padding-top: 2px;\n"]))),P=x.ZP.img(u||(u=(0,f.Z)(["\n  width: 24px;\n  height: 24px;\n  margin: auto 0;\n"]))),I=x.ZP.img(p||(p=(0,f.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  padding: 10px;\n  right: 64px;\n  top: 9px;\n  transition: opacity 0.3s;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))),O=x.ZP.img(s||(s=(0,f.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  padding: 10px;\n  right: 22px;\n  top: 9px;\n  transition: transform 0.4s;\n  &:hover {\n    cursor: pointer;\n  }\n  ","\n"])),(function(n){return n.isOpened&&(0,x.iv)(c||(c=(0,f.Z)(["\n      transform: rotate(180deg);\n    "])))})),y=function(n){var e,i=(0,v.I0)(),t=null!==(e=n.isCardOpened)&&void 0!==e&&e;return(0,Z.jsxs)(m,{children:[(0,Z.jsxs)(b,{isOpened:t,children:[(0,Z.jsx)(k,{pinned:!!n.pinned,src:n.pinned?g.lO:g.Tp,alt:""}),(0,Z.jsxs)(w,{children:[(0,Z.jsx)(P,{src:n.icon,alt:""}),(0,Z.jsx)(C,{children:n.title})]}),(0,Z.jsx)(I,{src:g.rF,alt:"",onClick:n.onRemove}),(0,Z.jsx)(O,{src:g.Rk,alt:"",isOpened:t,onClick:function(){var e;i((0,h.cQ)(null!==(e=n.blockId)&&void 0!==e?e:""))}})]}),t&&(0,Z.jsx)(j,{isOpened:t,children:n.children})]})}}}]);
//# sourceMappingURL=45.a9cc8f05.chunk.js.map