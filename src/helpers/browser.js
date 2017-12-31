if (typeof window !== "undefined") {
  var _isIE8 = !(document.createTextNode('test').textContent);
  var _isIE9 = !!(document.documentMode);
  var _isSafari = (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor));
  var _isChrome = (/Chrome/.test(navigator.userAgent) && /Google/.test(navigator.vendor));
} else {
  var _isIE8 = false;
  var _isIE9 = false;
  var _isSafari = false;
  var _isChrome = true;
}

export function isIE8() {
  return _isIE8;
}

export function isIE9() {
  return _isIE9;
}

export function isSafari() {
  return _isSafari;
}

export function isChrome() {
  return _isChrome;
}

export function isMobileBrowser(userAgent) {
  if (typeof navigator === "undefined") {
    return false;
  }
  if (!userAgent) {
    userAgent = navigator.userAgent;
  }

  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
}
