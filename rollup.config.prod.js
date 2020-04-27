import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export default [generateConfig('umd')];

function generateConfig(format) {
  let output = []
  let external = []
  if (format === 'umd') {
    output = [
      generateUmd(`./dist/index.js`),
    ]
  }
  return {
    input: 'src/index.js',
    output: output,
    plugins: [
      resolve({
        // customResolveOptions: {
        //   moduleDirectory: 'node_modules'
        // }
      }),
      commonjs(),
      babel({
        // include: /node_modules/,
      }),
    ],
    external: external
  }
}

function generateUmd(path) {
  return {
    file: path,
    format: 'umd',
    plugins: [
      terser()
    ],
    name: 'queryString'
    // banner: `/* ${name} version ' + ${version} + ' */`,
  }

}
