function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" 
  integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" 
  crossorigin="anonymous"

 function openLightbox(src) {
      document.getElementById("lightboxImg").src = src;
      document.getElementById("lightbox").style.display = "flex";
    }

    function closeLightbox() {
      document.getElementById("lightbox").style.display = "none";
    }
