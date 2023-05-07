import React, { useState } from 'react'

function ImageHover(props) {
  const [image, setImage] = useState(props.initialImage)
  return (
    <img
      src={props.laserMode ? props.hoverImage : image}
      className={props.className}
    />
  )
}

export default ImageHover