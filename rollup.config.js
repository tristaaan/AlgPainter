import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import vue from 'rollup-plugin-vue';

export default {
    input: './src/index.js',
    output: {
        file: './dist/alg-painter.js',
        format: 'iife'
    },

    plugins: [
        resolve(),
        vue(),
        babel({
            exclude: 'node_modules/**',
            presets: ['es2015-rollup']
        }),
        (process.env.NODE_ENV === 'production' && uglify()),
    ]
};
