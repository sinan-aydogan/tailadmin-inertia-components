import vue from 'rollup-plugin-vue'
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/library.js'
      }
    ],
    plugins: [
      vue(), 
      peerDepsExternal(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
    ]
  }
]