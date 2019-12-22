import React, { useState } from "react"

export default function Test({ test }) {
  const [state, setState] = useState(0)
  return (
    <>
      <p>{state}</p>
      <p>{test}</p>
      <button onClick={() => setState(state + 1)}>up</button>
      <p>hello world!</p>
    </>
  )
}
