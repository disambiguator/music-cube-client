(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var n=t(9);l.Cell=n.Cell,l.Cells=n.Cells,l.parseCell=n.parseCell;var a=t(14);l.Color=a.Color,l.Colors=a.Colors,l.HexCodesByColor=a.HexCodesByColor;var r=t(35);l.createCube=r.createCube,l.printCube=r.printCube;var o=t(36);l.getDisorder=o.getDisorder;var c=t(7);l.Face=c.Face,l.Faces=c.Faces,l.CellsByFace=c.CellsByFace,l.RingCellsByFace=c.RingCellsByFace,l.ColorsByFace=c.ColorsByFace;var u=t(37);l.Rotation=u.Rotation,l.Rotations=u.Rotations,l.RotationFunctions=u.RotationFunctions,l.RotationsByFace=u.RotationsByFace,l.parseRotation=u.parseRotation,l.performRotation=u.performRotation,l.getRandomRotation=u.getRandomRotation},,,,,function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.enumValues=function(e){return Object.values(e)},l.createRecord=function(e,l){for(var t={},n=0,a=e;n<a.length;n++){var r=a[n];t[r]=l(r)}return t},l.createEnumParser=function(e){return function(l){var t=l.trim();return t in e?e[t]:null}}},function(e,l,t){"use strict";var n,a,r;Object.defineProperty(l,"__esModule",{value:!0});var o,c=t(9),u=t(14),C=t(6);!function(e){e.Front="Front",e.Back="Back",e.Left="Left",e.Right="Right",e.Up="Up",e.Down="Down"}(o=l.Face||(l.Face={})),l.Faces=C.enumValues(o),l.CellsByFace=((n={})[o.Front]=[c.Cell.F,c.Cell.FNW,c.Cell.FN,c.Cell.FNE,c.Cell.FE,c.Cell.FSE,c.Cell.FS,c.Cell.FSW,c.Cell.FW],n[o.Back]=[c.Cell.B,c.Cell.BNW,c.Cell.BN,c.Cell.BNE,c.Cell.BE,c.Cell.BSE,c.Cell.BS,c.Cell.BSW,c.Cell.BW],n[o.Left]=[c.Cell.L,c.Cell.LNW,c.Cell.LN,c.Cell.LNE,c.Cell.LE,c.Cell.LSE,c.Cell.LS,c.Cell.LSW,c.Cell.LW],n[o.Right]=[c.Cell.R,c.Cell.RNW,c.Cell.RN,c.Cell.RNE,c.Cell.RE,c.Cell.RSE,c.Cell.RS,c.Cell.RSW,c.Cell.RW],n[o.Up]=[c.Cell.U,c.Cell.UNW,c.Cell.UN,c.Cell.UNE,c.Cell.UE,c.Cell.USE,c.Cell.US,c.Cell.USW,c.Cell.UW],n[o.Down]=[c.Cell.D,c.Cell.DNW,c.Cell.DN,c.Cell.DNE,c.Cell.DE,c.Cell.DSE,c.Cell.DS,c.Cell.DSW,c.Cell.DW],n),l.RingCellsByFace=((a={})[o.Front]=[c.Cell.USW,c.Cell.US,c.Cell.USE,c.Cell.RNW,c.Cell.RW,c.Cell.RSW,c.Cell.DNE,c.Cell.DN,c.Cell.DNW,c.Cell.LSE,c.Cell.LE,c.Cell.LNE],a[o.Back]=[c.Cell.UNE,c.Cell.UN,c.Cell.UNW,c.Cell.LNW,c.Cell.LW,c.Cell.LSW,c.Cell.DSW,c.Cell.DS,c.Cell.DSE,c.Cell.RSE,c.Cell.RE,c.Cell.RNE],a[o.Left]=[c.Cell.UNW,c.Cell.UW,c.Cell.USW,c.Cell.FNW,c.Cell.FW,c.Cell.FSW,c.Cell.DNW,c.Cell.DW,c.Cell.DSW,c.Cell.BSE,c.Cell.BE,c.Cell.BNE],a[o.Right]=[c.Cell.USE,c.Cell.UE,c.Cell.UNE,c.Cell.BNW,c.Cell.BW,c.Cell.BSW,c.Cell.DSE,c.Cell.DE,c.Cell.DNE,c.Cell.FSE,c.Cell.FE,c.Cell.FNE],a[o.Up]=[c.Cell.FNW,c.Cell.FN,c.Cell.FNE,c.Cell.LNW,c.Cell.LN,c.Cell.LNE,c.Cell.BNW,c.Cell.BN,c.Cell.BNE,c.Cell.RNW,c.Cell.RN,c.Cell.RNE],a[o.Down]=[c.Cell.FSW,c.Cell.FS,c.Cell.FSE,c.Cell.LSW,c.Cell.LS,c.Cell.LSE,c.Cell.BSW,c.Cell.BS,c.Cell.BSE,c.Cell.RSW,c.Cell.RS,c.Cell.RSE],a),l.ColorsByFace=((r={})[o.Front]=u.Color.White,r[o.Back]=u.Color.Yellow,r[o.Left]=u.Color.Orange,r[o.Right]=u.Color.Blue,r[o.Up]=u.Color.Red,r[o.Down]=u.Color.Green,r)},,function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var n,a=t(6);!function(e){e.F="F",e.FNW="FNW",e.FN="FN",e.FNE="FNE",e.FE="FE",e.FSE="FSE",e.FS="FS",e.FSW="FSW",e.FW="FW",e.B="B",e.BNW="BNW",e.BN="BN",e.BNE="BNE",e.BE="BE",e.BSE="BSE",e.BS="BS",e.BSW="BSW",e.BW="BW",e.L="L",e.LNW="LNW",e.LN="LN",e.LNE="LNE",e.LE="LE",e.LSE="LSE",e.LS="LS",e.LSW="LSW",e.LW="LW",e.R="R",e.RNW="RNW",e.RN="RN",e.RNE="RNE",e.RE="RE",e.RSE="RSE",e.RS="RS",e.RSW="RSW",e.RW="RW",e.U="U",e.UNW="UNW",e.UN="UN",e.UNE="UNE",e.UE="UE",e.USE="USE",e.US="US",e.USW="USW",e.UW="UW",e.D="D",e.DNW="DNW",e.DN="DN",e.DNE="DNE",e.DE="DE",e.DSE="DSE",e.DS="DS",e.DSW="DSW",e.DW="DW"}(n=l.Cell||(l.Cell={})),l.Cells=a.enumValues(n),l.parseCell=a.createEnumParser(n)},,,,,function(e,l,t){"use strict";var n;Object.defineProperty(l,"__esModule",{value:!0});var a,r=t(6);!function(e){e.White="White",e.Yellow="Yellow",e.Orange="Orange",e.Blue="Blue",e.Red="Red",e.Green="Green"}(a=l.Color||(l.Color={})),l.Colors=r.enumValues(a),l.HexCodesByColor=((n={})[a.White]="#FFF",n[a.Yellow]="#FF0",n[a.Orange]="#F80",n[a.Blue]="#00F",n[a.Red]="#F00",n[a.Green]="#0F0",n)},,,,,,,,function(e,l,t){e.exports=t.p+"static/media/up.4a48a97a.wav"},function(e,l,t){e.exports=t.p+"static/media/down.d085edae.wav"},function(e,l,t){e.exports=t.p+"static/media/left.d4981114.wav"},function(e,l,t){e.exports=t.p+"static/media/right.6b4030e7.wav"},function(e,l,t){e.exports=t.p+"static/media/front.31e938c8.wav"},function(e,l,t){e.exports=t.p+"static/media/back.5d7f897c.wav"},,function(e,l,t){e.exports=t(41)},,,,,function(e,l,t){},function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var n=t(9),a=t(7);l.createCube=function(){for(var e={},l=0,t=a.Faces;l<t.length;l++)for(var n=t[l],r=0,o=a.CellsByFace[n];r<o.length;r++){e[o[r]]=a.ColorsByFace[n]}return e},l.printCube=function(e){var l="\n         "+e[n.Cell.UNW]+e[n.Cell.UN]+e[n.Cell.UNE]+"\n         "+e[n.Cell.UW]+e[n.Cell.U]+e[n.Cell.UE]+"\n         "+e[n.Cell.USW]+e[n.Cell.US]+e[n.Cell.USE]+"\n  ",t="\n         "+e[n.Cell.DNW]+e[n.Cell.DN]+e[n.Cell.DNE]+"\n         "+e[n.Cell.DW]+e[n.Cell.D]+e[n.Cell.DE]+"\n         "+e[n.Cell.DSW]+e[n.Cell.DS]+e[n.Cell.DSE]+"\n  ",a="\n    "+e[n.Cell.LNW]+e[n.Cell.LN]+e[n.Cell.LNE]+"  "+e[n.Cell.FNW]+e[n.Cell.FN]+e[n.Cell.FNE]+"  "+e[n.Cell.RNW]+e[n.Cell.RN]+e[n.Cell.RNE]+"  "+e[n.Cell.BNW]+e[n.Cell.BN]+e[n.Cell.BNE]+"\n    "+e[n.Cell.LW]+e[n.Cell.L]+e[n.Cell.LE]+"  "+e[n.Cell.FW]+e[n.Cell.F]+e[n.Cell.FE]+"  "+e[n.Cell.RW]+e[n.Cell.R]+e[n.Cell.RE]+"  "+e[n.Cell.BW]+e[n.Cell.B]+e[n.Cell.BE]+"\n    "+e[n.Cell.LSW]+e[n.Cell.LS]+e[n.Cell.LSE]+"  "+e[n.Cell.FSW]+e[n.Cell.FS]+e[n.Cell.FSE]+"  "+e[n.Cell.RSW]+e[n.Cell.RS]+e[n.Cell.RSE]+"  "+e[n.Cell.BSW]+e[n.Cell.BS]+e[n.Cell.BSE]+"\n  ";console.log(l,a,t)}},function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var n=t(7),a=t(6);l.getDisorder=function(e){return a.createRecord(n.Faces,(function(l){for(var t=n.CellsByFace[l],a=new Set,r=0,o=t;r<o.length;r++){var c=o[r];a.add(e[c])}return a.size-1}))}},function(e,l,t){"use strict";var n,a;Object.defineProperty(l,"__esModule",{value:!0});var r,o=t(7),c=t(6),u=c.createRecord(o.Faces,(function(e){var l=o.CellsByFace[e],t=o.RingCellsByFace[e];return[[l[1],l[3],l[5],l[7]],[l[2],l[4],l[6],l[6]],[t[0],t[3],t[6],t[9]],[t[1],t[4],t[7],t[10]],[t[2],t[5],t[8],t[11]]]})),C=c.createRecord(o.Faces,(function(e){return u[e].map((function(e){return[e[3],e[2],e[1],e[0]]}))}));function i(e){return function(l){for(var t=0,n=e;t<n.length;t++){var a=n[t],r=l[a[3]];l[a[3]]=l[a[2]],l[a[2]]=l[a[1]],l[a[1]]=l[a[0]],l[a[0]]=r}return l}}!function(e){e.F="F",e.f="f",e.B="B",e.b="b",e.U="U",e.u="u",e.D="D",e.d="d",e.L="L",e.l="l",e.R="R",e.r="r"}(r=l.Rotation||(l.Rotation={})),l.Rotations=c.enumValues(r),l.parseRotation=c.createEnumParser(r),l.RotationsByFace=((n={})[o.Face.Front]=[r.F,r.f],n[o.Face.Back]=[r.B,r.b],n[o.Face.Left]=[r.L,r.l],n[o.Face.Right]=[r.R,r.r],n[o.Face.Up]=[r.U,r.u],n[o.Face.Down]=[r.D,r.d],n),l.RotationFunctions=((a={})[r.F]=i(u[o.Face.Front]),a[r.f]=i(C[o.Face.Front]),a[r.B]=i(u[o.Face.Back]),a[r.b]=i(C[o.Face.Back]),a[r.U]=i(u[o.Face.Up]),a[r.u]=i(C[o.Face.Up]),a[r.D]=i(u[o.Face.Down]),a[r.d]=i(C[o.Face.Down]),a[r.L]=i(u[o.Face.Left]),a[r.l]=i(C[o.Face.Left]),a[r.R]=i(u[o.Face.Right]),a[r.r]=i(C[o.Face.Right]),a),l.performRotation=function(e,t){l.RotationFunctions[t](e)},l.getRandomRotation=function(){return l.Rotations[Math.floor(Math.random()*l.Rotations.length)]}},,,,function(e,l,t){"use strict";t.r(l);var n=t(0),a=t.n(n),r=t(15),o=t.n(r),c=(t(34),t(16)),u=t(5),C=t(3),i=t(4),s=t(1);function E(){var e=Object(C.a)(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  width: ","px;\n  height: ","px;\n  cursor: pointer;\n\n  &:hover {\n    ","\n  }\n"]);return E=function(){return e},e}function f(){var e=Object(C.a)(["\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  box-shadow: 0 0 1px black;\n  opacity: 0.8;\n"]);return f=function(){return e},e}var F=i.a.div(f(),50,50,(function(e){var l=e.color;return s.HexCodesByColor[l]})),R=i.a.div(E(),150,150,(function(e){return e.onClick?"background-color: black;":""}));function d(e){var l=e.cube,t=e.face,n=e.rotateCube,r=Object(u.a)(s.RotationsByFace[t],2),o=r[0],c=r[1];var C=Object(u.a)(s.CellsByFace[t],9),i=C[0],E=C[1],f=C[2],d=C[3],W=C[4],S=C[5],N=C[6],b=C[7],v=C[8];return a.a.createElement(R,{onClick:function(){n(o)},onContextMenu:function(e){e.preventDefault(),n(c)}},a.a.createElement(F,{color:l[E]}),a.a.createElement(F,{color:l[f]}),a.a.createElement(F,{color:l[d]}),a.a.createElement(F,{color:l[v]}),a.a.createElement(F,{color:l[i]}),a.a.createElement(F,{color:l[W]}),a.a.createElement(F,{color:l[b]}),a.a.createElement(F,{color:l[N]}),a.a.createElement(F,{color:l[S]}))}function W(){return a.a.createElement(R,null)}var S,N=t(20),b=t(12),v=t.n(b),B=t(21),m=t(2),p=t(22),D=t.n(p),L=t(23),U=t.n(L),O=t(24),g=t.n(O),h=t(25),j=t.n(h),w=t(26),y=t.n(w),k=t(27),x=t.n(k),M=(S={},Object(m.a)(S,s.Face.Up,D.a),Object(m.a)(S,s.Face.Down,U.a),Object(m.a)(S,s.Face.Left,g.a),Object(m.a)(S,s.Face.Right,j.a),Object(m.a)(S,s.Face.Front,y.a),Object(m.a)(S,s.Face.Back,x.a),S),_=M;function P(){var e=Object(C.a)(["\n  display: flex;\n"]);return P=function(){return e},e}function A(){var e=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 100px;\n  margin-bottom: 100px;\n"]);return A=function(){return e},e}var I=i.a.div(A()),V=i.a.div(P());function G(e){var l=e.cube,t=e.rotateCube;return function(e){var l,t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],o=a[1],c=Object(n.useRef)(e),C=Object(n.useRef)((l={},Object(m.a)(l,s.Face.Up,new Audio),Object(m.a)(l,s.Face.Down,new Audio),Object(m.a)(l,s.Face.Left,new Audio),Object(m.a)(l,s.Face.Right,new Audio),Object(m.a)(l,s.Face.Front,new Audio),Object(m.a)(l,s.Face.Back,new Audio),l)),i=Object(n.useCallback)(Object(B.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(s.Faces.map((function(e){return l=C.current[e],t=_[e],new Promise((function(e,n){l.autoplay=!1,l.loop=!0,l.volume=.5,l.src=t,l.addEventListener("canplaythrough",(function(){return e()})),l.addEventListener("error",(function(){return n(new Error("Can't load audio: ".concat(t)))}))}));var l,t})));case 2:o(!0);case 3:case"end":return e.stop()}}),e)}))),[]),E=Object(n.useCallback)((function(){var e,l,t,n=Object(s.getDisorder)(c.current),a=C.current,r=Object(N.a)(s.Faces);try{for(r.s();!(e=r.n()).done;){var o=e.value;l=a[o],t=n[o],l.currentTime=2*t,l.paused&&l.play()}}catch(u){r.e(u)}finally{r.f()}}),[C,c]);return Object(n.useEffect)((function(){i()}),[i]),Object(n.useEffect)((function(){c.current=e})),Object(n.useEffect)((function(){if(r){var e=setInterval(E,2e3);return function(){return clearInterval(e)}}}),[r,E]),r}(l)?a.a.createElement(I,null,a.a.createElement(V,null,a.a.createElement(W,null),a.a.createElement(d,{cube:l,face:s.Face.Up,rotateCube:t}),a.a.createElement(W,null),a.a.createElement(W,null)),a.a.createElement(V,null,a.a.createElement(d,{cube:l,face:s.Face.Left,rotateCube:t}),a.a.createElement(d,{cube:l,face:s.Face.Front,rotateCube:t}),a.a.createElement(d,{cube:l,face:s.Face.Right,rotateCube:t}),a.a.createElement(d,{cube:l,face:s.Face.Back,rotateCube:t})),a.a.createElement(V,null,a.a.createElement(W,null),a.a.createElement(d,{cube:l,face:s.Face.Down,rotateCube:t}),a.a.createElement(W,null),a.a.createElement(W,null))):a.a.createElement("div",null,"Loading...")}function H(e){var l=e.randomMovesEnabled,t=e.setRandomMovesEnabled;return a.a.createElement("div",null,a.a.createElement("div",null,"Left-click a face to rotate it clockwise"),a.a.createElement("div",null,"Right-click a face to rotate it counterclockwise"),a.a.createElement("label",null,"Make random moves after a period of inactivity",a.a.createElement("input",{type:"checkbox",checked:l,onChange:function(){return t(!l)}})))}function Y(){var e=Object(C.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Y=function(){return e},e}var J=i.a.div(Y());function z(){var e=Object(n.useState)(Object(s.createCube)()),l=Object(u.a)(e,2),t=l[0],r=l[1],o=Object(n.useState)(!0),C=Object(u.a)(o,2),i=C[0],E=C[1],f=Object(n.useRef)(Date.now()),F=Object(n.useCallback)((function(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1];r((function(l){var t=Object(c.a)({},l);return Object(s.performRotation)(t,e),t})),l||(f.current=Date.now())}),[]);return Object(n.useEffect)((function(){if(i){var e=setInterval((function(){if(!(Date.now()-f.current<8e3)){var e=Object(s.getRandomRotation)();F(e,!0)}}),4e3);return function(){return clearInterval(e)}}}),[F,i]),a.a.createElement(J,null,a.a.createElement(G,{cube:t,rotateCube:F}),a.a.createElement(H,{randomMovesEnabled:i,setRandomMovesEnabled:E}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.28a2c7dc.chunk.js.map