import React from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom'
import { IoMdOptions } from "react-icons/io";

const Header = (props) => {


  const options=(e)=>{
    if(e.target.closest('#options').value=='close'){
       document.getElementById('header').style.display = 'flex'
       e.target.closest('#options').value = 'open'
    }
    else{
       document.getElementById('header').style.display = 'none'
       e.target.closest('#options').value = 'close'
    }
}

  return (
    <>
    <button id="options" value="close" onClick={options}><IoMdOptions style={{fontSize:'6.5vw'}} /></button>
       <div class="header" id="header">
       <iframe src="https://lottie.host/embed/ee9cd7c8-1a25-4a38-8d1c-51943428eb4b/O1uJsw0EvX.lottie"></iframe>
        <nav>
            <ul>
                {/* <!-- <img id="nss-head-logo" class="head-logo" src="/images/nss image log.png" alt=""> --> */}
                {/* <button className='selbtn1'><Link to={'/'}>Home</Link></button> */}
                <Link  to={'/'}><button className='selbtn1'>Home</button></Link>
                <button class="selbtn1" id="selbtn11">About</button>
                <button class="selbtn1" id="selbtn12">IIITDM KURNOOL</button>
                {/* <button className='selbtn1'><Link to={'/Events'}>Events</Link></button> */}
                <Link  to={'/Events'}><button className='selbtn1'>Events</button></Link>
                {/* <button className='selbtn1'><Link to={'/Members'}>Members</Link></button> */}
                <Link  to={'/Members'}><button className='selbtn1'>Members</button></Link>
                {/* <button className='selbtn1'><Link to={'/Contacts'}>Contacts</Link></button> */}
                <Link  to={'/Contacts'}><button className='selbtn1'>Contacts</button></Link>
                {/* <button className='selbtn1'><Link to={'/Faqs'}>FAQs</Link></button> */}
                <Link  to={'/Faqs'}><button className='selbtn1'>FAQs</button></Link>
                {/* <!-- <img id="iiit-head-logo" class="head-logo" src="/images/iiitdmklogo.png" alt=""> --> */}
                {/* <div class="nssmessage"> NSS "Not Me But You", reflects the essence of democratic living and upholds the need for self-less service.</div> */}
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Header
