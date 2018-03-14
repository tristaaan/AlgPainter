// Select a range from an array, from can be > to.
export function subarray(arr, from, to) {
  var ret = [];
  var op = from > to ? (x) => x - 1 : (x) => x + 1;
  var comp = from > to ? (x,to) => x >= to : (x,to) => x <= to;
  for (var i=from; comp(i,to); i = op(i)) {
    ret.push(arr[i]);
  }
  return ret;
}

// converts sticker number from CubeModel into a web color
export function stickerToColor(stickers, binary, arrows) {
  if (binary) {
    for (var i=0; i < stickers.length; i++) {
      if (arrows) { // a lighter color when arrows are present
        stickers[i] = stickers[i] == 5 ? '#B8B8B8' : 'white';
      } else {
        stickers[i] = stickers[i] == 5 ? '#757575' : 'white';
      }
    }
    return stickers;
  }

  for (var i=0; i < stickers.length; i++) {
    switch (stickers[i]) {
      case 1:
        stickers[i] = 'orange'; // left
        break;
      case 2:
        stickers[i] = '#f31'; // right
        break;
      case 3:
        stickers[i] = '#1d1'; // front
        break;
      case 4:
        stickers[i] = '#06f'; // back
        break;
      case 5:
        stickers[i] = '#ddd'; // top
        break;
      case 6:
        stickers[i] = 'yellow'; // down
        break;
    }
  }
  return stickers;
}
