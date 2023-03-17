e = getElementById("mapObject");
e.parentElement.replaceChild(
  e.contentDocument.documentElement.cloneNode(true),
  e
);
