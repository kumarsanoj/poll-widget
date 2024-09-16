import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      // peerDepsExternal(),
      resolve(),
      commonjs(),
      //   typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        exclude: "node_modules/**", // Exclude node_modules from transpilation
        presets: ["@babel/preset-env", "@babel/preset-react"],
        babelHelpers: "bundled", // Use bundled Babel helpers
      }),
      terser(),
      postcss(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.js",
    output: [{ file: packageJson.types }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];
