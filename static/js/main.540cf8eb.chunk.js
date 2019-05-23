(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports=a(292)},120:function(e,t,a){},292:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(107),r=a.n(c),l=(a(120),a(33)),i=a(112),s=a(34),b=a(108),d=a(109),m=a(113),p=a(110),u=a(15),g=a(114),x=a(2),h=a(12),f=function(e){var t=e.styles,a=e.text,n=Object(h.a)(e,["styles","text"]);return o.a.createElement("section",Object.assign({className:Object(x.b)(v.prev)},n),t.map(function(e,t){return o.a.createElement("p",{key:t,className:Object(x.b)(e)},a)}))},v=x.a.create({prev:{margin:"0 1.25em"}}),j=function(e){var t=e.label,a=e.color,n=Object(h.a)(e,["label","color"]);return o.a.createElement("button",Object.assign({className:Object(x.b)(y.btn)},n),o.a.createElement("div",null,t),o.a.createElement("div",{onClick:function(){return navigator.clipboard.writeText(a.hex)},type:"text",className:Object(x.b)(y.colorCode),style:{background:a.hex,color:a.hsl.l>.5?"black":"white"}},a.hex))},y=x.a.create({btn:{borderStyle:"solid",borderWidth:"1px 1px 5px 5px",display:"flex",fontSize:"0.7rem",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"2px 0",background:"#eee",borderColor:"white"},colorCode:{border:"1px solid #ccc",padding:"2px",width:"8em",fontSize:"10px",textAlign:"center"}}),O=function(e){var t=e.previewText,a=e.bg,n=e.fg,c=e.changeFg,r=e.changeBg,l=Object(h.a)(e,["previewText","bg","fg","changeFg","changeBg"]);return o.a.createElement("div",Object.assign({style:{background:a.hex,color:n.hex},className:Object(x.b)(C.colorBox)},l),o.a.createElement("section",{className:Object(x.b)(C.buttonPanel)},o.a.createElement(j,{label:"fg",color:n,onClick:c}),o.a.createElement(j,{label:"bg",color:a,onClick:r})),o.a.createElement(f,{styles:[C.italic,C.bold,C.normal],text:t}))},C=x.a.create({colorBox:{display:"flex",margin:"0.5rem 0",padding:"10px",maxHeight:"8em",minWidth:"10em"},buttonPanel:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},previewText:{fontSize:"1.13em",margin:"0 20px",display:"flex",flexDirection:"column",justifyContent:"space-evenly"},italic:{fontStyle:"italic"},bold:{fontWeight:"bold"},normal:{fontWeight:"normal"}}),k=a(111),E=function(e){var t=e.prevText,a=e.onPrevTextChange,n=e.color,c=e.onColorChange,r=e.onAddBox,l=Object(h.a)(e,["prevText","onPrevTextChange","color","onColorChange","onAddBox"]);return o.a.createElement("aside",Object.assign({className:Object(x.b)([T.sidebar])},l),o.a.createElement("section",{className:Object(x.b)(T.section)},o.a.createElement("fieldset",{className:Object(x.b)(T.inputGroup)},o.a.createElement("button",{className:Object(x.b)([T.customInput,T.inputText]),onClick:r},"\u2728"," add color")),o.a.createElement("fieldset",{className:Object(x.b)(T.inputGroup)},o.a.createElement("label",{className:Object(x.b)(T.inputText),htmlFor:"dText"},"Edit preview text"),o.a.createElement("input",{id:"dText",className:Object(x.b)(T.customInput),type:"text",value:t,onChange:a})),o.a.createElement("fieldset",{className:Object(x.b)(T.inputGroup)},o.a.createElement(k.SketchPicker,{color:n,onChange:c}))))},T=x.a.create({sidebar:{margin:"1rem",display:"flex",fontSize:"0.9rem",paddingBottom:"5px",alignItems:"baseline",flexDirection:"column"},section:{margin:"0 10px",minWidth:"100%"},inputGroup:{display:"flex",flexDirection:"column",margin:"20px 0"},customInput:{borderWidth:"2px 2px 5px 5px",borderColor:"black",borderStyle:"solid",background:"transparent",padding:"5px"},inputText:{color:"#ff00a2"}}),w=x.a.create({grid:{display:"grid",gridTemplateColumns:"30% 1fr",minHeight:"100%"}}),B=x.a.create({container:{width:"100%",height:"100%"},colorBoxes:{display:"flex",flexWrap:"wrap"},ctlText:{padding:"5px"}}),N=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={displayText:"hi",colors:[{fg:{hex:"white",hsl:{h:0,s:0,l:1}},bg:{hex:"black",hsl:{h:0,s:0,l:0}}}],active:{key:0,prop:"fg"}},e.addBox=e.addBox.bind(Object(u.a)(e)),e.changeText=e.changeText.bind(Object(u.a)(e)),e.activateColor=e.activateColor.bind(Object(u.a)(e)),e.onColorChange=e.onColorChange.bind(Object(u.a)(e)),e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"addBox",value:function(){this.setState(function(e){var t=e.colors,a=Object(s.a)({},t[t.length-1]);return{colors:[].concat(Object(i.a)(t),[a])}})}},{key:"changeText",value:function(e){this.setState({displayText:e.target.value})}},{key:"activateColor",value:function(e,t){console.log(e,t),this.setState({active:{key:e,prop:t}})}},{key:"onColorChange",value:function(e,t){this.setState(function(t){return{colors:t.colors.map(function(a,n){return n===t.active.key?Object(s.a)({},a,Object(l.a)({},t.active.prop,e)):Object(s.a)({},a)})}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.displayText,n=t.colors,c=t.active;return o.a.createElement("div",{className:Object(x.b)([w.grid,B.bodyFont])},o.a.createElement(E,{prevText:a,color:n[c.key][c.prop],onPrevTextChange:this.changeText,onAddBox:this.addBox,onColorChange:this.onColorChange}),o.a.createElement("section",{className:Object(x.b)(w.section)},o.a.createElement("div",{className:Object(x.b)(B.colorBoxes)},this.state.colors.map(function(t,a){return o.a.createElement(O,{key:a,bg:t.bg,fg:t.fg,previewText:e.state.displayText,changeFg:function(){return e.activateColor(a,"fg")},changeBg:function(){return e.activateColor(a,"bg")}})}))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[115,1,2]]]);
//# sourceMappingURL=main.540cf8eb.chunk.js.map