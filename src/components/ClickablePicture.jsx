import { useState } from "react"


const ClickablePicture = ({img, imgClicked}) => {
    const [pic, setPic] = useState(true)

    const handleClick = () => {
        setPic(!pic)
    }
    
  return (
    <div>
      <img onClick={handleClick} src={pic ? img : imgClicked} alt="person" />
    </div>
  )
}

export default ClickablePicture
