import React from 'react'
import '../css/events.css'
import '../css/medevents.css'
import Header from './Header'
import Footer from './Footer'
import Loading from './loading'
import Loading1 from './loading1'
import { useEffect, useState } from 'react'

const Events = () => {
    const [eves,setEves] = useState([]);

    useEffect(()=>{
        events();
    },[])

    const events = async()=>{
        const data = await fetch('https://nssreactserver.onrender.com/events',{headers:{accept:'application/json'}})

        const data1 =await data.json();
        
        setEves(data1);
    }

  return (
   <>
   <Header/>
     <div class="events-head">
        <div class="events-layer"></div>
        <div class="clgheading">
            <p>NSS IIITDM KURNOOL</p>
             {/* <!-- <pre id="moto"></pre> --> */}
         </div>
        <div class="clgpic"><img src="eventstopimg.png" alt="" />
        </div>
    </div>


    <div class="events_cont" id="events_cont">
       {
        eves.length!=0?eves.map(eve=>{
            
            const arr = eve.image.data.data
            const base64String = 
          
                 btoa(
                    arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
                 );

            return(
                <div className="eve_matter_cont">
                    <h2 className='pre-head'>`{eve.name}`</h2>
                    <img  src={`data:image/png;base64,${base64String}`} alt="" />
                    <div className="pre">
                        
                        <p>{eve.event}</p>
                        <a href="">{`Access ${eve.name} pdf here`}</a>
                    </div>
                </div>
            )

        }):<>
        <div className="loading">
        {/* <iframe src="https://lottie.host/embed/b974f401-8ef5-4dac-ac0f-5b741600048b/1BE5wLsND7.lottie"></iframe> */}
        <Loading1/>
        </div>
        </>
       }
    </div>

    <Footer/>
   </>
  )
}

export default Events
