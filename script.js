// Your JS goes here
// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%
for (var i = 0; i < 81 ; i++) {
var tile = document.createElement('div')
tile.style.width = "11.1%"
tile.style.paddingBottom = "11.1%"
tile.style.float = "left"
if (i%2 === 0){
  tile.style.backgroundColor = "red"
}else{
  tile.style.backgroundColor = "black"
}
var body = document.getElementsByTagName('body')[0];
body.appendChild(tile);

}
