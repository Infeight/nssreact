import React from 'react'
import '../css/home.css'
import '../css/medhome.css'
import Header from './Header'
import Footer from './Footer'

import Testimonials from './testimonials'
import { useEffect,useState } from 'react'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Home = () => {

    const [upevents,setUpevents] = useState([]);
    const [sneaks,setSneaks] = useState([]);
    const [experiences,setExperiences] = useState([])

    useEffect(()=>{
        upeve();
        sneakpeaks();
        exps();
    },[])

    const sneakpeaks = async()=>{
        const sneak = await fetch('https://nss-server-zeta.vercel.app/sneakpeaks',{headers:{accept:'application/json'}})

        const sneak1 =await sneak.json();
      
         let base64strings=[];
        sneak1.map(e=>{
                
            const arr = e.image.data.data
            const base64String = 
          
                 btoa(
                    arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
                 );

            base64strings.push(base64String)
            
          
        })

        setSneaks(base64strings);
    }
    let i=0;
    setInterval(()=>{
        if(i<sneaks.length){
            i++;
        }
        else{
            i=0;
        }
    },2000)
    const nextslide_sneak=()=>{
       if(  i < sneaks.length ){
        document.getElementById('sneakimg').src = `data:image/png;base64,${sneaks[i++]}`}
        else{
           
         i=0;
            
        }
    
    }

    const prevslide_sneak=()=>{
        if(i> 0)
        {document.getElementById('sneakimg').src = `data:image/png;base64,${sneaks[i--]}`}

        else{
            i = sneaks.length-1;
        }
    }

   const upeve = async()=>{
    const data = await fetch('https://nss-server-zeta.vercel.app/upevents',{headers:{accept:'application/json'}})

    const data1 =await data.json();
    
    setUpevents(data1);
   }

   const exps = async()=>{
    const exps = await fetch('https://nss-server-zeta.vercel.app/experience',{headers:{accept:'application/json'}})

    const exps1 =await exps.json();
    
    setExperiences(exps1);
   }

   const shareexp = async()=>{

    let expfillers=[
        'I bet you will enjoy the Journey.',
        'If you are into service, You are at the correct site.',
        'It was a great experience working in the team!',
        'I loved working in NSS, the village tours hit different..'
    ]
   

  if(!document.getElementById('exp-name').value=='' && !document.getElementById('exp-batch').value=='' && document.getElementById('exp-batch').style.border=='none'){
    document.getElementById("exp-cont").style.display = ""
    const  exp =  {
        Name:document.getElementById("exp-name").value,
        Batch:(document.getElementById("exp-batch").value< new Date().getFullYear())? document.getElementById("exp-batch").value: new Date().getFullYear(),
        Exp:document.getElementById("exp-matter").value?document.getElementById("exp-matter").value: 'If you are into service, You are at the correct site.'
    }

 await fetch ("https://nss-server-zeta.vercel.app/experience",{method:"post", headers: { "Content-Type": "application/json" }, body: JSON.stringify(exp)})
 .then().then( window.location.reload())
  }
  else{
    if(document.getElementById('exp-name').value==''){
        document.getElementById('exp-name').style.border = '1px solid red'
    }
    else if(document.getElementById('exp-batch').value==''){
        document.getElementById('exp-batch').style.border = '1px solid red'

    }
  }

}

const handledate=(e)=>{
    console.log(e.target.value)
  if(e.target.value.length!=4 ){
    
    e.target.style.border = '1px solid red'
  }
  else{
    if(e.target.value > new Date().getFullYear() || e.target.value <2015){
        e.target.style.border = '1px solid red'
    }
    else{
        e.target.style.border = 'none'
    }
  }
}


   const openevent =(e)=>{
       document.getElementById('up-event-des').style.display = 'block';
       document.getElementById('event-matter').innerText = e.target.querySelector('.eventmatter').innerText
       document.getElementById('des-img').src = `data:image/png;base64,${e.target.querySelector('.image').innerText}`
   }

   const close = ()=>{
    document.getElementById('up-event-des').style.display = 'none';
   }



  return (
    <>


    <Header/>

{/* college pic and logos */}

    <div class="clgname">
        <div class="clgnamelayer"></div>
        <div class="clgheading" id='clgheading'>
            <img id="headlogo1" class="head-logo" src="nss image log.png" alt=""/>
           <p id='homeclgheading'>NSS IIITDM <br /> KURNOOL</p>
            <pre id="moto">NOT ME BUT YOU</pre>
            <img id="headlogo2" class="head-logo" src="iiitdmklogo.png" alt=""/>
        </div>
        <div class="clgpic" id='clgpic'>
            <img src="homeing.jpg" alt="" />
        </div>
    </div>

{/* pics and up events */}
    <div class="piccont-upeve">
   <div class="pic_container">
      
           <div class="sneak-peak-layer">Sneak peaks</div>
        
      
             <img className="sneak-peak" id="sneakimg"
             src= {sneaks.length!=0?`data:image/png;base64,${sneaks[Math.floor(Math.random()* sneaks.length-1)]}`:'imagesloading.avif'}
             alt="College front gate"/>
         
             
       <button id="gotoeve" > Go To Events</button>   
       <button onClick={nextslide_sneak} id="nav-next_sneak"  class="nav-next-prev"><MdNavigateNext style={{fontSize:'1.5vw'}}/></button>
       <button onClick={prevslide_sneak} id="nav-prev_sneak"  class="nav-next-prev"><GrFormPrevious  style={{fontSize:'1.5vw'}}/> </button>
   </div>


   <div class="eventscroll">
        <h4>Upcoming Events</h4>
        <div id="eventscroll1">
           
           {
            
             upevents.length!=0?upevents.map(e=>{
          console.log(e.Date)
                const arr = e.Image.data.data
                const base64String = 
              
                     btoa(
                        arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
                     );

                return(
                    <button class="events" onClick={openevent} >
                        {e.Title ? e.Title : 'Events Loading...'}
                    <div style={{display:'none'}} className="image">
                        {
                           base64String    
                        }
                    </div>
                    <p className='eventmatter' style={{display:'none'}}>
                        {e.Event}
                    </p>
                </button>
                )
                
             }): <>
             
             <div className='upeveloading'>
             <iframe style={{width:"100%", height:'100%', border:"none"}} src="https://lottie.host/embed/586498bc-1432-4052-a1b0-d657d0ba6bef/iczqkOtjBu.lottie"></iframe>
             </div>

             </>
           
           }

        </div>

    </div>

</div>

{/* shows up events data */}

<div class="up-event-des" id="up-event-des">
        <div class="des-img" ><img id="des-img" src="" alt="" /></div>
        <div class="event-des">
            <p id="event-matter"></p>
        </div>
        <button id="close1" onClick={close}>&times;</button>
    </div>

{/* about  */}
    <div class="about">
        <div class="aboutlayer"></div>
        <div class="backimg"><img src="aboutimg.png" alt=""/></div>
        <div class="abouthead">
            Who We Are and What We Do?
        </div>
        <p>
        <p>  The National Service Scheme (NSS) is a student-centered program that aims to develop the
  personality and character of students through community service activities.</p>
        <p>  At IIITDM Kurnool, we are committed to making a positive impact on our community by 
  actively participating in various social and volunteering initiatives.</p>
        <p>  Our NSS wing strives to create responsible and socially conscious citizens who contribute 
  to the betterment of society.</p>
        </p>
    </div>

{/* testimonials */}
    <Testimonials/>


{/* suggestions doubts */}

<div class="user-sugg">
    <div class="sharehead-cont" >
    <h2>Personal Narratives from NSS Journeys</h2>
    <button id="sugg-display-btn" style={{display:'block'}} onClick={()=>{
        document.getElementById("exp-cont").style.display = "flex"
    }}>Share your's</button>
</div>
    <div class="sugg-display" id="sugg-display">
        {
            experiences?experiences.map(exp=>{
                
                return(
                    <div className="exp">
                        <div className="suggestion">{exp.Exp}</div>
                        <div className='sugg-det'>
                            <section>{exp.Name}</section>
                            <section>{`Batch ${exp.Batch}`}</section>
                        </div>
                    </div>
                )

            }):<></>
}
</div>
    <div id="exp-cont" style={{display:'none'}}>
    <input id="exp-name"  type="text" placeholder="Name" />
    <input id="exp-batch" type="text" placeholder="Batch (eg: ECE-2022)" onChange={handledate}/>
    <textarea id="exp-matter" placeholder="Share your experience with NSS!"></textarea>
    <button id="share" style={{display:'block'}} onClick={shareexp}>Share</button>
</div>
 </div>

{/* footer */}
<Footer/>
    </>
  )
}

export default Home
