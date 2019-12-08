import babel from "rollup-plugin-babel"
import packageJSON from "./package.json"

const input = "./src/index.js"

export default [
  {
    input,
    output: {
      name: "rollUpTest",
      file: packageJSON.main,
      format: "iife",
      globals: {
        react: "React"
      }
    },
    external: ["react"],
    plugins: [
      babel({
        exclude: "node_modules/**"
      })
    ]
  }
]
