function fontSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px'
  }
}