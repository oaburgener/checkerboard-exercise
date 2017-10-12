// Your JS goes here// Your JS goes here
// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%
for (var i = 0; i < 81 ; i++) {
var tile = document.createElement('div')
tile.style.width = "11.1%"
tile.style.paddingBottom = "11.1%"
tile.style.float = "left"
tile.style.backgroundColor = getRandomColor()
var body = document.getElementsByTagName('body')[0];
body.appendChild(tile);

}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
