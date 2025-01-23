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
        <nav>
            <ul>
                {/* <!-- <img id="nss-head-logo" class="head-logo" src="/images/nss image log.png" alt=""> --> */}
                <button className='selbtn1'><Link to={'/'}>Home</Link></button>
                <button class="selbtn1" id="selbtn11">About</button>
                <button class="selbtn1" id="selbtn12">IIITDM KURNOOL</button>
                <button className='selbtn1'><Link to={'/Events'}>Events</Link></button>
                <button className='selbtn1'><Link to={'/Members'}>Members</Link></button>
                <button className='selbtn1'><Link to={'/Contacts'}>Contacts</Link></button>
                <button className='selbtn1'><Link to={'/Faqs'}>FAQs</Link></button>
                {/* <!-- <img id="iiit-head-logo" class="head-logo" src="/images/iiitdmklogo.png" alt=""> --> */}
                {/* <div class="nssmessage"> NSS "Not Me But You", reflects the essence of democratic living and upholds the need for self-less service.</div> */}
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Header
