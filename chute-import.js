var chuteImport = {};

chuteImport.insertImportButton = function() {
  var chuteImport = this;
  var classNames = ['compPhoto', 'photo'];
  classNames.forEach(function(className) {
    var photoEls = document.getElementsByClassName(className);

    photoEls.forEach(function(photoEl) {
      var chuteIcon = document.createElement('img');
      chuteIcon.src = "//chute-icon.png";
      photoEl.appendChild(chuteIcon);
      chuteImport.attachEventListener(chuteIcon);
    });
  });
};

chuteImport.attachEventListeners = function(el) {
  el.addEventListener('click', function() {
    //TODO hit import endpoint
  });
};

document.addEventListener('DOMContentLoaded', function() {
  chuteImport.insertImportButton();
});