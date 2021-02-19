import React, { useEffect, useRef } from "react"

const transformCodeEvent = (code) => {
  let transformedCode = code
  transformedCode = transformedCode.replace(
    "DOMContentLoaded",
    "mimeeqSiteAppRender"
  )
  transformedCode += `<script>document.dispatchEvent(new Event('mimeeqSiteAppRender'))</script>`
  return transformedCode
}

export default ({ code }) => {
  const codeRef = useRef(null)

  useEffect(() => {
    console.log(window)
    const documentFragment = document
      .createRange()
      .createContextualFragment(transformCodeEvent(code))
    codeRef.current.appendChild(documentFragment)
  }, [code])

  return <div ref={codeRef} />
}
