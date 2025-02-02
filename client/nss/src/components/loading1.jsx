import '../css/loading1.css'

import React from 'react'

const images = [
    'load1.png','load2.png','load3.png','load5.png'
]

let i=0;
setInterval(()=>{

   if(i>= images.length){i=0}
   document.querySelectorAll('.img').forEach(ele=>{
   ele.src = images[i];
   })
   i++;


},3050)

const Loading1 = () => {
  return (
    <>
      <div className="loadinganimation">
        <div className="loadimg">
            <img src='load5.png' alt="" className='img' />
        </div>
      </div>
    </>
  )
}

export default Loading1
