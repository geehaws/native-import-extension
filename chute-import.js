var chuteImport = {};

chuteImport.insertImportButton = function() {
  var classNames = ['compPhoto', 'photo'];
  classNames.forEach(function(className) {
    var photoEls = document.getElementsByClassName(className);
    photoEls.forEach(function(photoEl) {
      var chuteIcon = document.createElement('img');
      chuteIcon.src = "//chute-icon.png";
      photoEl.appendChild(chuteIcon);
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  chuteImport.insertImportButton();
});