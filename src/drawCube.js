function drawStickers(ctx, stickers, width, offset, margin) {
  const w = (width - offset*2 - margin*4) / 3;
  const h = w;
  for (var i = 0; i < stickers.length; i++) {
    const cur = stickers[i];
    const x = margin+offset + (i % 3) * w + margin*(i%3);
    const y = margin+offset + Math.floor(i / 3) * h + margin*Math.floor(i/3);
    if (typeof cur === "string") {
      ctx.fillStyle = cur;
    } else if (cur !== 0) {
      ctx.fillStyle = "#444";
    } else {
      ctx.fillStyle = "#aaa";
    }
    ctx.fillRect(x, y, w, h);
    // ctx.strokeRect(x, y, w, h);
  }
  return w;
}

function edgePosition(ind, size, ctxSize, stickerWidth, margin, offset) {
  const i = Math.floor(ind / 3);
  const j = ind % 3;
  const separation = 2; // tweak separation from cube.
  const w = size.w;
  const h = size.h;
  const fullMargin = stickerWidth - (w > h ? w : h);
  switch (i) {
    case 0: // top
      return {
        x: offset + stickerWidth * j + margin*j + fullMargin,
        y: offset - h - separation
      };
    case 1: // right
      return {
        x: ctxSize - offset + separation,
        y: offset + stickerWidth * j + margin*j + fullMargin
      };
    case 2: // bottom
      return {
        //offset + stickerWidth * (2-j) + margin*(2-j) + fullMargin
        x: offset + stickerWidth * (2-j) + margin*(2-j) + fullMargin,
        y: ctxSize - offset + separation
      };
    case 3: // left
      return {
        x: offset - w - separation,
        y: offset + stickerWidth * (2-j) + margin*(2-j) + fullMargin
      };
    default:
      break;
  }
}

function edgeSize(ind, edgeWidth, margin, offset) {
  const i = Math.floor(ind / 3);
  const longSize = edgeWidth - margin*2;
  // plain width across the top
  if (i == 0 || i == 2) {
    return {w: longSize,
            h: edgeWidth / 10 };
  }
  return {w: edgeWidth / 10,
          h: longSize };
}

function drawEdges(ctx, edges, stickerWidth, ctxWidth, offset) {
  for (var i = 0; i < edges.length; i++) {
    var size = edgeSize(i, stickerWidth, ctx.lineWidth, offset);
    var pos = edgePosition(i, size, ctxWidth, stickerWidth, ctx.lineWidth, offset);
    var cur = edges[i];
    if (typeof cur === "string") {
      ctx.fillStyle = cur;
    } else if (cur !== 0) {
      ctx.fillStyle = "#444";
    } else {
      ctx.fillStyle = "#ddd";
    }
    ctx.fillRect(pos.x, pos.y, size.w, size.h);
  }
}

// thanks Titus Cieslewski, https://stackoverflow.com/a/6333775
function arrow(ctx, fromX, fromY, toX, toY) {
  const headlen = 12; // length of head in pixels
  const headRad = 8; // narrowness of the arrow.
  const angle = Math.atan2(toY - fromY, toX - fromX);
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.lineTo(
    toX - headlen * Math.cos(angle - Math.PI / headRad),
    toY - headlen * Math.sin(angle - Math.PI / headRad)
  );
  ctx.lineTo(
    toX - headlen * Math.cos(angle + Math.PI / headRad),
    toY - headlen * Math.sin(angle + Math.PI / headRad)
  );
  ctx.lineTo(toX, toY);
  ctx.stroke();
  ctx.fill();
}

function drawArrows(ctx, arrows, len, offset) {
  ctx.lineWidth = 2;
  ctx.strokeStyle = ctx.fillStyle = "#111";
  ctx.lineJoin = "round";
  const size = (len - offset * 2) / 3;
  const halfW = size / 2;
  for (let i = 0; i < arrows.length; i++) {
    const cur = arrows[i];
    const x   = offset + ((cur[0] - 1) % 3) * size + halfW;
    const toX = offset + ((cur[1] - 1) % 3) * size + halfW;
    const y   = offset + Math.floor((cur[0] - 1) / 3) * size + halfW;
    const toY = offset + Math.floor((cur[1] - 1) / 3) * size + halfW;
    arrow(ctx, x, y, toX, toY);
  }
}

// el : canvas element
// stickers : array of 9 numbers or colors
//            ex: [1,0], [1...6], ['#f00', 'blue', 'rgb(50,120,255)']
// edges : array of 12 elements, similar format to stickers
// arrows : array of arrays, makes directional arrows
//          ex: [[4,8], [8,6], [6,4]] is a U perm
// width : size of element.
export default function drawCube(el, stickers, edges, arrows, width) {
  const ctx = el.getContext("2d");
  const offset = width / 18; // determines the margins in the canvas.
  const margin = 3;
  const inset = offset + margin;
  ctx.fillRect(inset,inset, width-inset*2, width-inset*2);
  ctx.lineWidth = 3;
  ctx.strokeRect(inset,inset, width-inset*2, width-inset*2);
  const stickerSize = drawStickers(ctx, stickers, width, offset, margin);
  drawEdges(ctx, edges, stickerSize, width, offset);
  if (arrows.length) {
    drawArrows(ctx, arrows, width, offset);
  }
}
