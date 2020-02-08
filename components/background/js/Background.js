var B = {
  camera: null,
  scene: null,
  renderer: null,
  mouseX: 0,
  mouseY: 0,
  width: window.innerWidth,
  height: window.innerHeight,
  scaleX: 2,
  scaleY: 2,
  easing: 0.06,
  dotColor: "#eee",
  dotOpacity: 1,
  lineColor: "#fff",
  lineOpacity: 0.5,

  _handleWindowResize: function() {
    let w = window.innerWidth;
    let h = window.innerHeight;

    B.width = w;
    B.height = h;
    B.camera.aspect = w / h;
    B.camera.updateProjectionMatrix();
    B.renderer.setSize(w, h);
  },

  _handleDocumentMouseMove: function(e) {
    B.mouseX = -B.scaleX * e.clientX;
    B.mouseY = B.scaleY * e.clientY;
  },

  _handleDocumentTouchStart: function(e) {
    e.touches.length > 1 &&
      (e.preventDefault(),
      (B.mouseX = 0.7 * e.touches[0].pageX),
      (B.mouseY = 0.7 * e.touches[0].pageY));
  },

  _handleDocumentTouchMove: function(e) {
    1 == e.touches.length &&
      (e.preventDefault(),
      (B.mouseX = e.touches[0].pageX),
      (B.mouseY = e.touches[0].pageY));
  },

  update: function() {
    requestAnimationFrame(B.update);
    B.render();
  },

  render: function() {
    B.camera.position.x += B.easing * (B.mouseX - B.camera.position.x);
    B.camera.position.y += B.easing * (B.mouseY - B.camera.position.y);
    B.camera.lookAt(B.scene.position);
    B.renderer.render(B.scene, B.camera);
  },

  init: function() {
    let canvas = document.getElementById("canvas");

    (B.camera = new THREE.PerspectiveCamera(
      75,
      B.width / B.height,
      1,
      1e4
    )).position.z = 1200;

    B.scene = new THREE.Scene();
    (B.renderer = new THREE.CanvasRenderer({ alpha: !0 })).setPixelRatio(
      window.devicePixelRatio
    );
    B.renderer.setClearColor(0, 0);
    B.renderer.setSize(B.width, B.height);

    canvas.appendChild(B.renderer.domElement);

    var dots = new THREE.SpriteCanvasMaterial({
      color: B.dotColor,
      opacity: B.dotOpacity,
      program: function(event) {
        event.beginPath();
        event.arc(0, 0, 1, 0, 2 * Math.PI, !0);
        event.fill();
      }
    });

    let geometry = new THREE.Geometry();

    for (var a = 0; a < 100; a++) {
      (n = new THREE.Sprite(dots)).position.x = 2 * Math.random() - 1;
      n.position.y = 2 * Math.random() - 1;
      n.position.z = 2 * Math.random() - 1;
      n.position.normalize();
      n.position.multiplyScalar(2 * Math.random() + 1000);
      n.scale.x = n.scale.y = 5;
      B.scene.add(n);
      geometry.vertices.push(n.position);
    }

    let lines = new THREE.Line(
      geometry,
      new THREE.LineBasicMaterial({
        color: B.lineColor,
        opacity: B.lineOpacity
      })
    );
    B.scene.add(lines);

    document.addEventListener("mousemove", B._handleDocumentMouseMove, !1);
    document.addEventListener("touchstart", B._handleDocumentTouchStart, !1);
    document.addEventListener("touchmove", B._handleDocumentTouchMove, !1);
    window.addEventListener("resize", B._handleWindowResize, !1);

    B.update();
  }
};
