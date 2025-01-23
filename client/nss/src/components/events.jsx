import React from 'react'
import '../css/events.css'
import '../css/medevents.css'
import Header from './Header'
import Footer from './Footer'
import { useEffect, useState } from 'react'

const Events = () => {
    const [eves,setEves] = useState([]);

    useEffect(()=>{
        events();
    },[])

    const events = async()=>{
        const data = await fetch('https://nss-server-zeta.vercel.app/events',{headers:{accept:'application/json'}})

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
        <div class="clgpic"><iframe  src="https://lottie.host/embed/21e7f95b-a047-44a5-9a89-83e01ddf9d29/kSrraL5JJR.lottie"></iframe>
        </div>
    </div>

    {/* <button id="options" value="close"><i class="fa fa-server" aria-hidden="true"></i></button> */}

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
        <iframe src="https://lottie.host/embed/b974f401-8ef5-4dac-ac0f-5b741600048b/1BE5wLsND7.lottie"></iframe>
        </div>
        </>
       }
    </div>

    <Footer/>
   </>
  )
}

export default Events
