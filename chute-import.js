var chuteImport = {};

chuteImport.start = function() {
  var chuteImport = this;
  var photoEls = chuteImport.getElements();
  this.insertImportButtons(photoEls);
  this.listenForAssetFetch(photoEls);
};

chuteImport.insertImportButtons = function(photoEls) {
  photoEls.forEach(function(photoEl) {
    var src = photoEl.getElementsByTagName('div')[0].attributes.src.value;
    var img = chuteImport.buildImg();
    chuteImport.attachEventListener(img, src);
    photoEl.appendChild(img);
  });
};

chuteImport.listenForAssetFetch = function(photoEls) {
  var chuteImport = this;
  var taggedPhotos = photoEls;
  var checkForNewAssets = function() {
    var photoEls = chuteImport.getElements();
    if (photoEls.length > taggedPhotos.length) {
      chuteImport.insertImportButtons(photoEls.slice(taggedPhotos.length));
    } else {
      return;
    }
  }

  var timeout;
  var debouncedCall = function() {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
      checkForNewAssets();
      timeout = undefined;
    }, 500);
  };

  document.addEventListener('scroll', debouncedCall);
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

chuteImport.getElements = function() {
  var photoEls = document.getElementsByClassName('photo-wrapper');
  if (!photoEls.length) {
    //we're on a timeline page
    photoEls = document.getElementsByClassName('mediaPhoto');
  }
  return Array.prototype.slice.call(photoEls, 0);
}

chuteImport.setStyles = function(img) {
  img.style.height = "20%";
  img.style.width = "auto";
  img.style.position = "absolute";
  img.style.top = "30px";
  img.style.left = "10px";
  img.style.zIndex = "100";
};

chuteImport.start();