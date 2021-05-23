(this["webpackJsonpthreejs-panorama-marker"]=this["webpackJsonpthreejs-panorama-marker"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i=n(8),o=n.n(i),s=n(12),r=n.n(s),a=(n(17),n(18),n(0)),c=n(3),d=n(1),h=n(2),p=n(6),l=function e(t,n){var i=this;Object(a.a)(this,e),this.onPointerDownMouseX=0,this.onPointerDownMouseY=0,this.lon=0,this.onPointerDownLon=0,this.lat=0,this.onPointerDownLat=0,this.enabled=!0,this.onPointerDown=function(e){i.enabled&&(i.onPointerDownMouseX=e.clientX,i.onPointerDownMouseY=e.clientY,i.onPointerDownLon=i.lon,i.onPointerDownLat=i.lat,i.renderer.domElement.addEventListener("pointermove",i.onPointerMove,!1),i.renderer.domElement.addEventListener("pointerup",i.onPointerUp,!1))},this.onPointerMove=function(e){i.enabled&&(i.lon=.1*(i.onPointerDownMouseX-e.clientX)+i.onPointerDownLon,i.lat=.1*(e.clientY-i.onPointerDownMouseY)+i.onPointerDownLat)},this.onPointerUp=function(e){i.enabled&&(i.renderer.domElement.removeEventListener("pointermove",i.onPointerMove,!1),i.renderer.domElement.removeEventListener("pointerup",i.onPointerUp,!1))},this.onMouseWheel=function(e){if(i.enabled){var t=i.camera.fov+.05*e.deltaY;i.camera.fov=p.d.clamp(t,10,90),i.camera.updateProjectionMatrix()}},this.update=function(){if(i.enabled){i.lat=Math.max(-85,Math.min(85,i.lat));var e=p.d.degToRad(90-i.lat),t=p.d.degToRad(i.lon),n=500*Math.sin(e)*Math.cos(t),o=500*Math.cos(e),s=500*Math.sin(e)*Math.sin(t);i.camera.lookAt(n,o,s)}},this.renderer=t,this.camera=n,this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown,!1),this.renderer.domElement.addEventListener("wheel",this.onMouseWheel,!1)},u=function e(t){var n=this;Object(a.a)(this,e),this.container=null,this.visible=!0,this.setVisible=function(e){n.visible=e,n.container.style.display=e?"initial":"none"},this.setPosition=function(e,t){n.container.style.top=t-0+1+"px",n.container.style.left=e-0+1+"px"},this.setSprite=function(e){n.sprite=e,n.sprite&&(n.commentInput.value=n.sprite.comment||"")},this.container=document.createElement("div"),this.container.setAttribute("class","context-menu");var i=document.createElement("div");this.commentInput=document.createElement("input"),this.commentInput.setAttribute("placeholder","Comment"),this.commentInput.addEventListener("input",(function(e){n.sprite&&(n.sprite.comment=e.target.value)})),i.appendChild(this.commentInput),this.container.appendChild(i),t.appendChild(this.container),this.setVisible(!1),this.container.addEventListener("keydown",(function(e){27!==e.keyCode&&"Escape"!==e.key||(n.setVisible(!1),n.setSprite(null))}))},m=function e(t,n){var i=this;Object(a.a)(this,e),this.scene=null,this.camera=null,this.panoCam=null,this.renderer=null,this.controls=null,this.spriteUrl=null,this.editable=!1,this.pointerPressed=!0,this.activeSpriteToScale=null,this.spriteGroup=[],this.firstPointerX=0,this.firstPointerY=0,this.eventListeners={},this.addEventListener=function(e,t){return i.eventListeners[e]=t},this.setEditable=function(e){i.editable=e,i.controls.enabled=!e,i.ctxMenu.setVisible(!1),i.ctxMenu.setSprite(null)},this.setPanorama=function(e){var t=(new p.m).load(e);t.wrapS=p.j,t.repeat.x=-1,i.panoramaSphere.material=new p.f({map:t,side:p.c})},this.onPointerDown=function(e){if(i.ctxMenu.setVisible(!1),i.ctxMenu.setSprite(null),"function"===typeof i.eventListeners.commentChanged&&i.eventListeners.commentChanged(!1),i.editable){var t=new p.n;if(t.x=e.offsetX/window.innerWidth*2-1,t.y=-e.offsetY/window.innerHeight*2+1,i.firstPointerX=e.offsetX,i.firstPointerY=e.offsetY,i.rayCaster.setFromCamera(t,i.panoCam),1===e.buttons){var n=i.rayCaster.intersectObjects([i.panoramaSphere]);n.length&&i.addSprite((new p.o).copy(n[0].point).multiplyScalar(.5))}else 2===e.buttons?(n=i.rayCaster.intersectObjects(i.spriteGroup)).length&&(i.ctxMenu.setPosition(e.offsetX,e.offsetY),i.ctxMenu.setVisible(!0),i.ctxMenu.setSprite(n[0].object)):4===e.buttons&&(n=i.rayCaster.intersectObjects(i.spriteGroup)).length&&(i.pointerPressed=!0,i.activeSpriteToScale=n[0].object)}},this.onPointerMove=function(e){if("function"===typeof i.eventListeners.commentChanged&&i.eventListeners.commentChanged(!1),i.editable){if(i.pointerPressed&&i.activeSpriteToScale){var t=e.offsetX,n=e.offsetY,o=Math.sqrt(Math.pow(i.firstPointerX-t,2)+Math.pow(i.firstPointerY-n,2))/50;i.activeSpriteToScale.scale.set(o,o,o)}}else{var s=new p.n;s.x=e.offsetX/window.innerWidth*2-1,s.y=-e.offsetY/window.innerHeight*2+1,i.rayCaster.setFromCamera(s,i.panoCam);var r=i.rayCaster.intersectObjects(i.spriteGroup);r.length&&r[0].object.comment&&"function"===typeof i.eventListeners.commentChanged&&i.eventListeners.commentChanged(!0,e.offsetX,e.offsetY,r[0].object.comment)}},this.onPointerUp=function(e){"function"===typeof i.eventListeners.commentChanged&&i.eventListeners.commentChanged(!1),i.pointerPressed=!1},this.setSprite=function(e){return i.spriteUrl=e},this.addSprite=function(e){if(i.spriteUrl){var t=(new p.m).load(i.spriteUrl),n=new p.h(5,5),o=new p.e(n,new p.f({map:t,side:p.c,transparent:!0}));o.position.copy(e),o.lookAt(i.panoCam.position),i.scene.add(o),i.spriteGroup.push(o)}},this.scene=new p.k,this.scene.background=new p.b(14737632),this.panoCam=new p.g(90,t.clientWidth/t.clientHeight,1,2e4),this.scene.add(this.panoCam),this.scene.add(new p.a(9419988,.4)),this.renderer=new p.p({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown),this.renderer.domElement.addEventListener("pointermove",this.onPointerMove),this.renderer.domElement.addEventListener("pointerup",this.onPointerUp),this.renderer.domElement.addEventListener("contextmenu",(function(e){e.preventDefault(),e.stopPropagation()})),this.renderer.setAnimationLoop((function(){i.renderer.render(i.scene,i.panoCam),i.controls.update()})),t.appendChild(this.renderer.domElement),this.controls=new l(this.renderer,this.panoCam),window.addEventListener("resize",(function(){i.renderer.setSize(t.clientWidth,t.clientHeight),i.panoCam.aspect=t.clientWidth/t.clientHeight,i.panoCam.updateProjectionMatrix()}));var o=new p.l(100,32,32);this.panoramaSphere=new p.e(o,new p.f({color:16711680,side:p.c})),this.scene.add(this.panoramaSphere),this.setPanorama(n),this.rayCaster=new p.i,this.ctxMenu=new u(t)},f=n(5),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).isDrawing=!1,e.lastX=0,e.lastY=0,e.componentDidMount=function(){e.refCanvas&&(e.refCanvas.addEventListener("pointerdown",(function(t){var n=t.offsetX,i=t.offsetY;e.isDrawing=!0,e.lastX=n,e.lastY=i})),e.refCanvas.addEventListener("pointerup",(function(){e.isDrawing=!1})),e.refCanvas.addEventListener("pointermove",(function(t){if(e.isDrawing){var n=t.offsetX,i=t.offsetY,o=e.refCanvas.getContext("2d");o.beginPath(),o.lineWidth=4,o.lineCap="round",o.moveTo(e.lastX,e.lastY),o.lineTo(n,i),o.stroke(),e.lastX=n,e.lastY=i}})))},e.handleAdd=function(){e.props.onAdd(e.refCanvas.toDataURL())},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"canvas-section",children:Object(f.jsxs)("div",{className:"canvas-container",children:[Object(f.jsx)("canvas",{ref:function(t){return e.refCanvas=t},width:"500",height:"500"}),Object(f.jsx)("button",{className:"button btn-add",onClick:this.handleAdd,children:"Add"})]})})}}]),n}(o.a.Component),b=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.sprites,i=t.active;return Object(f.jsxs)("div",{className:"sprite-control-container",children:[n.map((function(t,n){return Object(f.jsx)("span",{className:"sprite "+(i===n?"active":""),onClick:function(){return e.props.onSpriteSelected(n)},children:Object(f.jsx)("img",{src:t,alt:"button"})},n)})),Object(f.jsx)("span",{className:"sprite",onClick:function(){return e.props.onSpriteSelected(n.length)},children:Object(f.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"button"})})]})}}]),n}(o.a.Component),w=(n(21),["/assets/sprites/circle.png","/assets/sprites/arrow-arc.png","/assets/sprites/star.png"]),j=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).refContainer=null,i.sceneManager=null,i.componentDidMount=function(){i.sceneManager=new m(i.refContainer,i.props.panorama),i.sceneManager.addEventListener("commentChanged",(function(e,t,n,o){i.setState({commentVisible:e,commentPositionX:t,commentPositionY:n,comment:o})}))},i.setSprite=function(e){i.sceneManager.setSprite(e)},i.state={viewMode:!0,activeSprite:-1,canvasEnabled:!1,commentVisible:!1,commentPositionX:0,commentPositionY:0,comment:""},i}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.viewMode,i=t.activeSprite,o=t.canvasEnabled,s=t.commentVisible,r=t.commentPositionX,a=t.commentPositionY,c=t.comment;return Object(f.jsxs)("div",{className:"pm",ref:function(t){return e.refContainer=t},children:[o&&Object(f.jsx)(v,{onAdd:function(t){e.setState({activeSprite:-1,canvasEnabled:!1}),e.setSprite(t)}}),Object(f.jsxs)("div",{className:"controls-container",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{className:"button "+(n?"":"active"),onClick:function(){e.setState({viewMode:!1}),e.sceneManager.setEditable(!0)},children:"Add Sprite"}),Object(f.jsx)("button",{className:"button "+(n?"active":""),onClick:function(){e.setState({viewMode:!0}),e.sceneManager.setEditable(!1)},children:"View"})]}),!n&&Object(f.jsx)(b,{sprites:w,active:i,onSpriteSelected:function(t){if(t===i)return e.setState({activeSprite:-1}),t===w.length&&e.setState({canvasEnabled:!1}),void e.setSprite(null);e.setState({activeSprite:t}),t<w.length?(e.setSprite(w[t]),e.setState({canvasEnabled:!1})):t===w.length&&e.setState({canvasEnabled:!0})}}),n&&s&&Object(f.jsx)("div",{className:"comment",style:{top:a,left:r},children:c})]})]})}}]),n}(o.a.Component);var P=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("div",{className:"scene-container",children:Object(f.jsx)(j,{panorama:"/assets/test/car-1d3-e7.png"})})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),o(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root")),R()}},[[22,1,2]]]);