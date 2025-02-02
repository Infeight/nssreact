import React from 'react'
import '../css/loading.css'

const Loading = () => {

    
  return (
    <div className='load'>
      <div class="carousel">
   <div class="group">
    <div class="card"><img src="load1.png" alt="" /></div>
    <div class="card"><img src="load2.png" alt="" /></div>
    <div class="card"><img src="load3.png" alt="" /></div>
  </div>

  <div aria-hidden class="group">
    <div class="card"><img src="load1.png" alt="" /></div>
    <div class="card"><img src="load2.png" alt="" /></div>
    <div class="card"><img src="load3.png" alt="" /></div>
  </div>
</div>
</div>
  )
}

export default Loading
