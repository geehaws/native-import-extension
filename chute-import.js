var chuteImport = {};

chuteImport.insertImportButton = function() {
  var chuteImport = this;
  var classNames = ['compPhoto', 'photo'];
  classNames.forEach(function(className) {
    var photoEls = document.getElementsByClassName(className);

    photoEls.forEach(function(photoEl) {
      var chuteIcon = chuteImport.buildImg();
      photoEl.appendChild(chuteIcon);
    });
  });
};

chuteImport.attachEventListeners = function(el) {
  el.addEventListener('click', function() {
    //TODO hit import endpoint
  });
};

chuteImport.buildImg = function() {
  var img document.createElement('img');
  img.src = "//chute-icon.png";
  img.className = "chute-import";
  this.attachEventListener(img);
  return img;
};

document.addEventListener('DOMContentLoaded', function() {
  chuteImport.insertImportButton();
});