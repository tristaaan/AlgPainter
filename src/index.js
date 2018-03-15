import algPainter from './alg-painter.vue';

var AlgPainter = {
  install(Vue, options) {
    Vue.component('alg', algPainter);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(AlgPainter);
} else {
  module.exports = AlgPainter;
}