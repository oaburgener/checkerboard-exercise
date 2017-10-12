// Your JS goes here
// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%
for (var i = 0; i < 81 ; i++) {
  var tile = document.createElement('div')
  tile.style.width = "11.1%"
  tile.style.float = "left"
  tile.style.paddingBottom = "11.1%"
  if ([i]%2 === 0){
    tile.style.backgroundColor = "lightblue"
  }else{
    tile.style.backgroundColor = "lightpurple"
  }
  // tile.style.border = "2px solid black"
  // tile.style.opacity= 0.5
  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = `linear-gradient(12deg, blue, lightblue)`;
  body.style.opacity = 0.5
  body.appendChild(tile);


}

// var body = document.getElementsByTagName('body')[0];
// body.style.background = "linear-gradient(blue, green)"
// body.style.width = "100%"
