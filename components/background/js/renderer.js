THREE.SpriteCanvasMaterial=function(e){THREE.Material.call(this),this.type="SpriteCanvasMaterial",this.color=new THREE.Color(16777215),this.program=function(e,t){},this.setValues(e)},THREE.SpriteCanvasMaterial.prototype=Object.create(THREE.Material.prototype),THREE.SpriteCanvasMaterial.prototype.constructor=THREE.SpriteCanvasMaterial,THREE.SpriteCanvasMaterial.prototype.clone=function(){var e=new THREE.SpriteCanvasMaterial;return THREE.Material.prototype.clone.call(this,e),e.color.copy(this.color),e.program=this.program,e},THREE.CanvasRenderer=function(e){void 0;var t=THREE.Math.smoothstep;e=e||{};var i,n,o,r,a,s,l,c,p,E,f,h,m,d,x,y,R,u,v,S,T=this,g=new THREE.Projector,w=void 0!==e.canvas?e.canvas:document.createElement("canvas"),H=w.width,C=w.height,M=Math.floor(H/2),L=Math.floor(C/2),b=0,B=0,P=H,z=C,V=1,j=w.getContext("2d",{alpha:!0===e.alpha}),D=new THREE.Color(0),W=!0===e.alpha?0:1,F=1,N=0,k=null,O=null,G=null,I=null,A=null,q=[],U=(new THREE.RenderableVertex,new THREE.RenderableVertex,new THREE.Color),J=(new THREE.Color,new THREE.Color,new THREE.Color,new THREE.Color,new THREE.Color),K=new THREE.Color,Q=new THREE.Color,X={},Y=new THREE.Box2,Z=new THREE.Box2,$=new THREE.Box2,_=new THREE.Color,ee=new THREE.Color,te=new THREE.Color,ie=new THREE.Vector3,ne=new THREE.Vector3,oe=new THREE.Vector3,re=new THREE.Matrix3;function ae(e,t,i){de(i.opacity),xe(i.blending);var n=t.scale.x*M,o=t.scale.y*L,r=.5*Math.sqrt(n*n+o*o);if($.min.set(e.x-r,e.y-r),$.max.set(e.x+r,e.y+r),i instanceof THREE.SpriteMaterial){var a=i.map;if(null!==a&&void 0!==a.image){!1===a.hasEventListener("update",Ee)&&(a.image.width>0&&fe(a),a.addEventListener("update",Ee));var s=X[a.id];Se(void 0!==s?s:"rgba( 0, 0, 0, 1 )");var l=a.image,c=l.width*a.offset.x,p=l.height*a.offset.y,E=l.width*a.repeat.x,f=l.height*a.repeat.y,h=n/E,m=o/f;j.save(),j.translate(e.x,e.y),0!==i.rotation&&j.rotate(i.rotation),j.translate(-n/2,-o/2),j.scale(h,m),j.translate(-c,-p),j.fillRect(c,p,E,f),j.restore()}else Se(i.color.getStyle()),j.save(),j.translate(e.x,e.y),0!==i.rotation&&j.rotate(i.rotation),j.scale(n,-o),j.fillRect(-.5,-.5,1,1),j.restore()}else i instanceof THREE.SpriteCanvasMaterial&&(ve(i.color.getStyle()),Se(i.color.getStyle()),j.save(),j.translate(e.x,e.y),0!==i.rotation&&j.rotate(i.rotation),j.scale(n,o),i.program(j),j.restore())}function se(e,t,i,n){if(de(n.opacity),xe(n.blending),j.beginPath(),j.moveTo(e.positionScreen.x,e.positionScreen.y),j.lineTo(t.positionScreen.x,t.positionScreen.y),n instanceof THREE.LineBasicMaterial){if(ye(n.linewidth),Re(n.linecap),ue(n.linejoin),n.vertexColors!==THREE.VertexColors)ve(n.color.getStyle());else{var o=i.vertexColors[0].getStyle(),r=i.vertexColors[1].getStyle();if(o===r)ve(o);else{try{var a=j.createLinearGradient(e.positionScreen.x,e.positionScreen.y,t.positionScreen.x,t.positionScreen.y);a.addColorStop(0,o),a.addColorStop(1,r)}catch(e){a=o}ve(a)}}j.stroke(),$.expandByScalar(2*n.linewidth)}else n instanceof THREE.LineDashedMaterial&&(ye(n.linewidth),Re(n.linecap),ue(n.linejoin),ve(n.color.getStyle()),Te([n.dashSize,n.gapSize]),j.stroke(),$.expandByScalar(2*n.linewidth),Te([]))}function le(e,i,n,a,s,l,g,w){var H,C,M,L,b,B;if(T.info.render.vertices+=3,T.info.render.faces++,de(w.opacity),xe(w.blending),c=e.positionScreen.x,p=e.positionScreen.y,E=i.positionScreen.x,f=i.positionScreen.y,h=n.positionScreen.x,m=n.positionScreen.y,H=c,C=p,M=E,L=f,b=h,B=m,j.beginPath(),j.moveTo(H,C),j.lineTo(M,L),j.lineTo(b,B),j.closePath(),(w instanceof THREE.MeshLambertMaterial||w instanceof THREE.MeshPhongMaterial)&&null===w.map)J.copy(w.color),K.copy(w.emissive),w.vertexColors===THREE.FaceColors&&J.multiply(g.color),U.copy(_),ne.copy(e.positionWorld).add(i.positionWorld).add(n.positionWorld).divideScalar(3),function(e,t,i){for(var n=0,r=o.length;n<r;n++){var a=o[n];if(Q.copy(a.color),a instanceof THREE.DirectionalLight){var s=ie.setFromMatrixPosition(a.matrixWorld).normalize();if((l=t.dot(s))<=0)continue;l*=a.intensity,i.add(Q.multiplyScalar(l))}else if(a instanceof THREE.PointLight){var l;if(s=ie.setFromMatrixPosition(a.matrixWorld),(l=t.dot(ie.subVectors(s,e).normalize()))<=0)continue;if(0==(l*=0==a.distance?1:1-Math.min(e.distanceTo(s)/a.distance,1)))continue;l*=a.intensity,i.add(Q.multiplyScalar(l))}}}(ne,g.normalModel,U),U.multiply(J).add(K),!0===w.wireframe?ce(U,w.wireframeLinewidth,w.wireframeLinecap,w.wireframeLinejoin):pe(U);else if(w instanceof THREE.MeshBasicMaterial||w instanceof THREE.MeshLambertMaterial||w instanceof THREE.MeshPhongMaterial){if(null!==w.map)w.map.mapping===THREE.UVMapping&&(d=g.uvs,he(c,p,E,f,h,m,d[a].x,d[a].y,d[s].x,d[s].y,d[l].x,d[l].y,w.map));else null!==w.envMap?w.envMap.mapping===THREE.SphericalReflectionMapping&&(oe.copy(g.vertexNormalsModel[a]).applyMatrix3(re),x=.5*oe.x+.5,y=.5*oe.y+.5,oe.copy(g.vertexNormalsModel[s]).applyMatrix3(re),R=.5*oe.x+.5,u=.5*oe.y+.5,oe.copy(g.vertexNormalsModel[l]).applyMatrix3(re),v=.5*oe.x+.5,S=.5*oe.y+.5,he(c,p,E,f,h,m,x,y,R,u,v,S,w.envMap)):(U.copy(w.color),w.vertexColors===THREE.FaceColors&&U.multiply(g.color),!0===w.wireframe?ce(U,w.wireframeLinewidth,w.wireframeLinecap,w.wireframeLinejoin):pe(U))}else w instanceof THREE.MeshDepthMaterial?(U.r=U.g=U.b=1-t(e.positionScreen.z*e.positionScreen.w,r.near,r.far),!0===w.wireframe?ce(U,w.wireframeLinewidth,w.wireframeLinecap,w.wireframeLinejoin):pe(U)):w instanceof THREE.MeshNormalMaterial?(oe.copy(g.normalModel).applyMatrix3(re),U.setRGB(oe.x,oe.y,oe.z).multiplyScalar(.5).addScalar(.5),!0===w.wireframe?ce(U,w.wireframeLinewidth,w.wireframeLinecap,w.wireframeLinejoin):pe(U)):(U.setRGB(1,1,1),!0===w.wireframe?ce(U,w.wireframeLinewidth,w.wireframeLinecap,w.wireframeLinejoin):pe(U))}function ce(e,t,i,n){ye(t),Re(i),ue(n),ve(e.getStyle()),j.stroke(),$.expandByScalar(2*t)}function pe(e){Se(e.getStyle()),j.fill()}function Ee(e){fe(e.target)}function fe(e){if(!(e instanceof THREE.CompressedTexture)){var t=e.wrapS===THREE.RepeatWrapping,i=e.wrapT===THREE.RepeatWrapping,n=e.image,o=document.createElement("canvas");o.width=n.width,o.height=n.height;var r=o.getContext("2d");r.setTransform(1,0,0,-1,0,n.height),r.drawImage(n,0,0),X[e.id]=j.createPattern(o,!0===t&&!0===i?"repeat":!0===t&&!1===i?"repeat-x":!1===t&&!0===i?"repeat-y":"no-repeat")}}function he(e,t,i,n,o,r,a,s,l,c,p,E,f){if(!(f instanceof THREE.DataTexture)){!1===f.hasEventListener("update",Ee)&&(void 0!==f.image&&f.image.width>0&&fe(f),f.addEventListener("update",Ee));var h=X[f.id];if(void 0===h)return Se("rgba(0,0,0,1)"),void j.fill();Se(h);var m,d,x,y,R,u,v,S,T=f.offset.x/f.repeat.x,g=f.offset.y/f.repeat.y,w=f.image.width*f.repeat.x,H=f.image.height*f.repeat.y;l=(l+T)*w,c=(c+g)*H,p=(p+T)*w,E=(E+g)*H,i-=e,n-=t,o-=e,r-=t,0!==(v=(l-=a=(a+T)*w)*(E-=s=(s+g)*H)-(p-=a)*(c-=s))&&(R=e-(m=(E*i-c*o)*(S=1/v))*a-(x=(l*o-p*i)*S)*s,u=t-(d=(E*n-c*r)*S)*a-(y=(l*r-p*n)*S)*s,j.save(),j.transform(m,d,x,y,R,u),j.fill(),j.restore())}}function me(e,t,i){var n,o=t.x-e.x,r=t.y-e.y,a=o*o+r*r;0!==a&&(o*=n=i/Math.sqrt(a),r*=n,t.x+=o,t.y+=r,e.x-=o,e.y-=r)}function de(e){F!==e&&(j.globalAlpha=e,F=e)}function xe(e){N!==e&&(e===THREE.NormalBlending?j.globalCompositeOperation="source-over":e===THREE.AdditiveBlending?j.globalCompositeOperation="lighter":e===THREE.SubtractiveBlending&&(j.globalCompositeOperation="darker"),N=e)}function ye(e){G!==e&&(j.lineWidth=e,G=e)}function Re(e){I!==e&&(j.lineCap=e,I=e)}function ue(e){A!==e&&(j.lineJoin=e,A=e)}function ve(e){k!==e&&(j.strokeStyle=e,k=e)}function Se(e){O!==e&&(j.fillStyle=e,O=e)}function Te(e){q.length!==e.length&&(j.setLineDash(e),q=e)}void 0===j.setLineDash&&(j.setLineDash=function(){}),this.domElement=w,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.info={render:{vertices:0,faces:0}},this.supportsVertexTextures=function(){},this.setFaceCulling=function(){},this.getPixelRatio=function(){return V},this.setPixelRatio=function(e){V=e},this.setSize=function(e,t,i){H=e*V,C=t*V,w.width=H,w.height=C,M=Math.floor(H/2),L=Math.floor(C/2),!1!==i&&(w.style.width=e+"px",w.style.height=t+"px"),Y.min.set(-M,-L),Y.max.set(M,L),Z.min.set(-M,-L),Z.max.set(M,L),F=1,N=0,k=null,O=null,G=null,I=null,A=null,this.setViewport(0,0,e,t)},this.setViewport=function(e,t,i,n){b=e*V,B=t*V,P=i*V,z=n*V},this.setScissor=function(){},this.enableScissorTest=function(){},this.setClearColor=function(e,t){D.set(e),W=void 0!==t?t:1,Z.min.set(-M,-L),Z.max.set(M,L)},this.setClearColorHex=function(e,t){void 0,this.setClearColor(e,t)},this.getClearColor=function(){return D},this.getClearAlpha=function(){return W},this.getMaxAnisotropy=function(){return 0},this.clear=function(){!1===Z.empty()&&(Z.intersect(Y),Z.expandByScalar(2),Z.min.x=Z.min.x+M,Z.min.y=-Z.min.y+L,Z.max.x=Z.max.x+M,Z.max.y=-Z.max.y+L,W<1&&j.clearRect(0|Z.min.x,0|Z.max.y,Z.max.x-Z.min.x|0,Z.min.y-Z.max.y|0),W>0&&(xe(THREE.NormalBlending),de(1),Se("rgba("+Math.floor(255*D.r)+","+Math.floor(255*D.g)+","+Math.floor(255*D.b)+","+W+")"),j.fillRect(0|Z.min.x,0|Z.max.y,Z.max.x-Z.min.x|0,Z.min.y-Z.max.y|0)),Z.makeEmpty())},this.clearColor=function(){},this.clearDepth=function(){},this.clearStencil=function(){},this.render=function(e,t){if(t instanceof THREE.Camera!=!1){!0===this.autoClear&&this.clear(),T.info.render.vertices=0,T.info.render.faces=0,j.setTransform(P/H,0,0,-z/C,b,C-B),j.translate(M,L),i=g.projectScene(e,t,this.sortObjects,this.sortElements),n=i.elements,o=i.lights,r=t,re.getNormalMatrix(t.matrixWorldInverse),function(){_.setRGB(0,0,0),ee.setRGB(0,0,0),te.setRGB(0,0,0);for(var e=0,t=o.length;e<t;e++){var i=o[e],n=i.color;i instanceof THREE.AmbientLight?_.add(n):i instanceof THREE.DirectionalLight?ee.add(n):i instanceof THREE.PointLight&&te.add(n)}}();for(var c=0,p=n.length;c<p;c++){var E=n[c],f=E.material;if(void 0!==f&&0!==f.opacity){if($.makeEmpty(),E instanceof THREE.RenderableSprite)(a=E).x*=M,a.y*=L,ae(a,E,f);else if(E instanceof THREE.RenderableLine)a=E.v1,s=E.v2,a.positionScreen.x*=M,a.positionScreen.y*=L,s.positionScreen.x*=M,s.positionScreen.y*=L,$.setFromPoints([a.positionScreen,s.positionScreen]),!0===Y.isIntersectionBox($)&&se(a,s,E,f);else if(E instanceof THREE.RenderableFace){if(a=E.v1,s=E.v2,l=E.v3,a.positionScreen.z<-1||a.positionScreen.z>1)continue;if(s.positionScreen.z<-1||s.positionScreen.z>1)continue;if(l.positionScreen.z<-1||l.positionScreen.z>1)continue;a.positionScreen.x*=M,a.positionScreen.y*=L,s.positionScreen.x*=M,s.positionScreen.y*=L,l.positionScreen.x*=M,l.positionScreen.y*=L,f.overdraw>0&&(me(a.positionScreen,s.positionScreen,f.overdraw),me(s.positionScreen,l.positionScreen,f.overdraw),me(l.positionScreen,a.positionScreen,f.overdraw)),$.setFromPoints([a.positionScreen,s.positionScreen,l.positionScreen]),!0===Y.isIntersectionBox($)&&le(a,s,l,0,1,2,E,f)}Z.union($)}}j.setTransform(1,0,0,1,0,0)}else void 0}};