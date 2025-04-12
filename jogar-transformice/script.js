const langue = (navigator.language || navigator.browserLanguage).substr(0, 2);
const transformiceElement = document.getElementById("transformice");

function positionMolette(X, Y) {}
function activerMolette(OUI, HAUT) {}
function recupLangue() { return langue; }

function pleinEcran(OUI) {
  const transformice = document.getElementById("transformice");
  const bottombar = document.getElementById("bottombar");
  const disqusThread = document.getElementById("disqus_thread");
  
  transformice.classList.toggle("fullscreen", OUI);
  if (bottombar) bottombar.classList.add("hidden");
  if (disqusThread) disqusThread.classList.add("hidden");
}

function cancelEvent(e) {
  if (navigator.userAgent.includes("hrome")) {
    document.getElementById("swf2").x_moletteTransformice(e.wheelDelta);
  }
  
  e = e || window.event;
  if (e.stopPropagation) e.stopPropagation();
  if (e.preventDefault) e.preventDefault();
  e.cancelBubble = true;
  e.cancel = true;
  e.returnValue = false;
  return false;
}

if (transformiceElement) {
  transformiceElement.addEventListener('wheel', cancelEvent);
  transformiceElement.addEventListener('DOMMouseScroll', cancelEvent);
}
