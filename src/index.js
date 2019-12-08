import React, { useState } from "react"

export default function Test({ test }) {
  const [state, setState] = useState(0)
  return (
    <>
      {/* <p>{state}</p> */}
      <p>{test}</p>
      <p>hello world!</p>
    </>
  )
}
