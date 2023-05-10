import React from 'react'

const ImageItem = ({image,showImageModal}) => {
  return (
    <div 
      onClick={() => showImageModal(image)}
      className='w-full h-48 shadow-xl  animate__animated animate__backInUp animate__delay-0.5s'
      style={{cursor:'pointer'}}
    >
        <img src={require("../../images/"+image)} alt={"ImageItem"} className="w-full h-full object-cover" />
    </div>
  )
}

export default ImageItem