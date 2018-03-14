import algPainter from './components/alg-painter.vue';

var AlgPainter = {
    install(Vue, options) {
        Vue.component('alg', algPainter)
    }
};

export default AlgPainter;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(AlgPainter)
}