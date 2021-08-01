import React from "react"

const Scroll = (props) => {
  const scrollStyle = {
    overflow: "scroll",
    border: "1px solid white",
    height: "75vh",
    scrollbarWidth: "none",
  }

  return <div style={scrollStyle}>{props.children};</div>
}

export default Scroll
