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
  //              left      right   front   back    up      down
  const colors = ['orange', '#f31', '#1d1', '#06f', '#ddd', 'yellow'];
  for (var i=0; i < stickers.length; i++) {
    stickers[i] = colors[stickers[i] - 1];
  }
  return stickers;
}
