<template>
  <canvas ref="ctx" :width="w" :height="h"></canvas>
</template>

<script>

import CubeModel from './CubeModel';
import drawCube from './drawCube';
import * as util from './util';

/* Component */
export default {
  props: {
    stickers: {
      type: Array,
      default: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      validator: function(arr) {
        return arr.length === 9;
      }
    },
    edges: {
      type: Array,
      default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      validator: function(arr) {
        return arr.length === 12;
      }
    },
    arrows: {
      type: Array,
      default: []
    },
    moves: {
      type: String,
      default: ''
    },
    auf: {
      type: String,
      default: ''
    },
    bw: {
      type: Boolean,
      default: false
    },
    w: { type: Number, default: 200 },
    h: { type: Number, default: 200 }
  },
  computed: {
    size: function() {
      return { w: this.w, h: this.h };
    }
  },
  mounted() {
    if (this.moves.length) {
      let cm = new CubeModel();
      let mvs = this.moves.split(' ');
      cm.doMoves(mvs);
      if (this.auf.length) {
        cm.doMoves([this.auf]);
      }
      this.stickers = util.stickerToColor(util.subarray(cm.model, 36, 44),
                                           this.bw, this.arrows.length);
      this.edges = util.stickerToColor(
        [].concat(
          util.subarray(cm.model, 29, 27),
          util.subarray(cm.model, 11, 9),
          util.subarray(cm.model, 20, 18),
          util.subarray(cm.model, 2, 0),
        ),
        this.bw, this.arrows.length
      );
    }
    drawCube(
      this.$refs.ctx,
      this.stickers,
      this.edges,
      this.arrows,
      this.w,
    );
  }
};
</script>
