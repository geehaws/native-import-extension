var chuteImport = {};

chuteImport.insertImportButton = function() {
  var chuteImport = this;

  var photoEls = document.getElementsByClassName('photo-wrapper');
  photoEls = Array.prototype.slice.call(photoEls, 0);

  photoEls.forEach(function(photoEl) {
    var chuteIcon = chuteImport.buildImg();
    photoEl.appendChild(chuteIcon);
  });
};

chuteImport.attachEventListener = function(el) {
  el.addEventListener('click', function() {
    var request = new XMLHttpRequest();
    request.open("POST", "//api.getchute.com/album/atVWrunx/assets/import", true);
  });
};

chuteImport.buildImg = function() {
  var img = document.createElement('img');
  img.src = chrome.extension.getURL('chute-logo.png');
  img.className = "chute-import";
  this.setStyles(img);
  this.attachEventListener(img);
  return img;
};

chuteImport.setStyles = function(img) {
  img.style.height = "20%";
  img.style.width = "auto";
  img.style.position = "absolute";
  img.style.top = "30px";
  img.style.right = "10px";
  img.style.zIndex = "100";
};

chuteImport.insertImportButton();