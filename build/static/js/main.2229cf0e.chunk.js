(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{14:function(e,s,a){},9:function(e,s,a){"use strict";a.r(s);var t=a(4),r=a(5),i=a(2),o=a(7),n=a(6),c=a(1),d=a.n(c),l=a(8),p=a.n(l),m=(a(14),a(0)),u=[{keyCode:81,keyTrigger:"Q",desc:"High-Tom",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/39[kb]hitom.wav.mp3"},{keyCode:87,keyTrigger:"W",desc:"Medium-Tom",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/42[kb]midtom.wav.mp3"},{keyCode:69,keyTrigger:"E",desc:"Crash-Cymbal",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/91[kb]curecrash.wav.mp3"},{keyCode:65,keyTrigger:"A",desc:"Floor-Tom",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/90[kb]loetom.wav.mp3"},{keyCode:83,keyTrigger:"S",desc:"HighHat-Open",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/36[kb]darkohh.wav.mp3"},{keyCode:68,keyTrigger:"D",desc:"Ride-Cymbal",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/97[kb]curiouscym2.wav.mp3"},{keyCode:90,keyTrigger:"Z",desc:"Bass-Drum",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/61[kb]bass-kickers-2.wav.mp3"},{keyCode:88,keyTrigger:"X",desc:"HighHat-Closed",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/15[kb]chh.wav.mp3"},{keyCode:67,keyTrigger:"C",desc:"Snare",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/33[kb]909sd.wav.mp3"}],h=function(e){Object(o.a)(a,e);var s=Object(n.a)(a);function a(e){var r;return Object(t.a)(this,a),(r=s.call(this,e)).audioHandler=d.a.createRef(),r.onDrumPadClick=r.onDrumPadClick.bind(Object(i.a)(r)),r.onKeyDown=r.onKeyDown.bind(Object(i.a)(r)),r}return Object(r.a)(a,[{key:"onDrumPadClick",value:function(){var e=this.props.padItem.desc.replace(/-/g," "),s=this.audioHandler.current;this.props.updateDisplayText(e),s.currentTime=0,s.play()}},{key:"onKeyDown",value:function(e){e.keyCode===this.props.padItem.keyCode&&this.onDrumPadClick()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){var e=this.props.padItem;return Object(m.jsxs)("div",{className:"drum-pad",id:e.desc,onClick:this.onDrumPadClick,children:[Object(m.jsx)("audio",{className:"clip",id:e.keyTrigger,src:e.url,ref:this.audioHandler}),e.keyTrigger]})}}]),a}(d.a.Component),y=function(e){Object(o.a)(a,e);var s=Object(n.a)(a);function a(e){var r;return Object(t.a)(this,a),(r=s.call(this,e)).state={displayText:" "},r.updateDisplayText=r.updateDisplayText.bind(Object(i.a)(r)),r}return Object(r.a)(a,[{key:"updateDisplayText",value:function(e){this.setState({displayText:e})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"container",id:"drum-machine",children:[Object(m.jsx)("div",{children:Object(m.jsx)("h1",{className:"title",children:"Drum Machine"})}),Object(m.jsx)("div",{className:"drum-display",id:"display",children:Object(m.jsx)("h1",{children:this.state.displayText})}),Object(m.jsx)("div",{className:"drum-pads",children:u.map((function(s,a){return Object(m.jsx)(h,{padItem:s,updateDisplayText:e.updateDisplayText},a)}))}),Object(m.jsxs)("div",{id:"footer",className:"footer",children:["by ",Object(m.jsx)("a",{className:"link",href:"https://codepen.io/villagrat/",children:"@villagrat"})]})]})}}]),a}(d.a.Component);p.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.2229cf0e.chunk.js.map