import babel from "rollup-plugin-babel"
import { terser } from "rollup-plugin-terser"
import packageJSON from "./package.json"

const input = "./src/index.js"

export default [
  {
    input,
    output: {
      name: packageJSON.name,
      file: packageJSON.main,
      format: "umd",
      globals: {
        react: "React"
      }
    },
    external: ["react", "react-dom"],
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      terser()
    ]
  }
]
