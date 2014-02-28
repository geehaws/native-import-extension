var chuteImport = {};

chuteImport.insertImportButton = function() {
  var chuteImport = this;

  var photoEls = document.getElementsByClassName('photo-wrapper');
  photoEls = Array.prototype.slice.call(photoEls, 0);

  photoEls.forEach(function(photoEl) {
    var src = photoEl.getElementsByTagName('div')[0].attributes.src.value;
    var img = chuteImport.buildImg();
    chuteImport.attachEventListener(img, src);
    photoEl.appendChild(img);
  });
};

chuteImport.attachEventListener = function(el, src) {
  el.addEventListener('click', function() {
    var request = new XMLHttpRequest();
    request.open("POST", "//api.getchute.com/v2/albums/2498348/assets/import?oauth_token=fdc54832e690daa9bc5ed2de8808e16e20c2579f378fd272742877eae49a4ccd&urls="+ src, false);
    var response = request.send();
  });
};

chuteImport.buildImg = function() {
  var img = document.createElement('img');
  img.src = chrome.extension.getURL('chute-logo.png');
  img.className = "chute-import";
  this.setStyles(img);
  return img;
};

chuteImport.setStyles = function(img) {
  img.style.height = "20%";
  img.style.width = "auto";
  img.style.position = "absolute";
  img.style.top = "30px";
  img.style.left = "10px";
  img.style.zIndex = "100";
};

chuteImport.insertImportButton();