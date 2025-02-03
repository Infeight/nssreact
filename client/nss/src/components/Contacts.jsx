import React from 'react'
import '../css/contacts.css'
import '../css/medcontacts.css'
import Header from './Header'
import Footer from './Footer'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

const Contacts = () => {

const form = useRef();



const handlechange=()=>{
  if(document.getElementById("user-name").value==""||document.getElementById("user-batch").value==""){
      document.getElementById("share").style.display = "none"
 }
 else{
   document.getElementById("share").style.display = "block"
   if(  document.getElementById("share").style.visibility == "hidden"){
      document.getElementById("share").style.visibility == "visible"
   }
 }
}



const sendEmail = (e) => {
  e.preventDefault();
 
  if(document.getElementById("user-batch").value>=2015 && document.getElementById("user-batch").value<=new Date().getFullYear() && document.getElementById('msg-matter').value!=''){
    document.getElementById("share").innerText = "sending..."
    emailjs
   
    .sendForm('service_36drl1r', 'template_bgfzz4d', form.current, {
      publicKey: 'CAPNuWm_T25OjX75r',
    })
    
    .then(
      () => {
        document.getElementById("emailok").style.display = "block"
        document.getElementById("emailok").innerText = "Query Sent Successfully! "
      setTimeout(()=>{
        document.getElementById("user-name").value = ''
        document.getElementById("user-batch").value=''
        document.getElementById("msg-matter").value= ''
        document.getElementById("user-batch").style.border = 'none'
        document.getElementById("msg-matter").style.border = 'none'
        document.getElementById("emailok").style.display = "none"
        document.getElementById("share").style.display = "none"
         
      },6000)
      },
      (error) => {
        document.getElementById("emailok").style.display = "block"
        document.getElementById("emailok").innerText = "Sorry, There was an Error!"
        setTimeout(()=>{
          document.getElementById("user-name").value = ''
          document.getElementById("user-batch").value=''
          document.getElementById("msg-matter").value= ''
           document.getElementById("user-batch").style.border = 'none'
        document.getElementById("msg-matter").style.border = 'none'
          document.getElementById("emailok").style.display = "none"
          document.getElementById("share").style.display = "none"
        },6000)
      },
    );
  }
  else{
    document.getElementById("user-batch").style.border = '1px solid red'
    document.getElementById('msg-matter').style.border = '1px solid red'
  }

};

  return (
 <>

<Header/>

<div class="contacts-head">
        <div class="contacts-layer"></div>
       
            <div class="clgheading">
                <p>NSS IIITDM KURNOOL</p>
             </div>
        
        <div class="clgpic">
      <img src="contactstopimg.avif" alt="" />
        </div>
    </div>


<div class="contacts">
        <div class="container">
           <div class="name"><pre >Dr.NOEL ANURAG</pre></div> 
           <div class="role"><pre>(FIC-NSS & Program officer)</pre></div>
           <div class="phone"><pre>Ph - 9700940242</pre></div>
           <div class="mail"><pre>Mail - noel@iiitk.ac.in</pre></div>
        </div>
        
        <div class="container">
           <div class="name"> <pre >Dr.NARESH BABU M</pre></div>
           <div class="role"><pre>(Associate Student Dean)</pre></div>
           <div class="phone"><pre>Ph - 8897165555</pre></div>
           <div class="mail"><pre>Mail -nareshbabu@iiitk.ac.in</pre></div>
        </div>

        <div class="container">
            <div class="name"> <pre >Dr.V.SIVA PRASAD</pre></div>
            <div class="role"><pre>(NSS Program officer)</pre></div>
            <div class="phone"><pre>Ph - 7396477963</pre></div>
            <div class="mail"><pre>Mail - vsp@iiitk.ac.in</pre></div>
         </div>
    </div>


    <form ref={form} class="user-sugg" id="contactform" onSubmit={sendEmail}>
  <h2>Any Queries?</h2>
   
    <input id="user-name" name="username" type="text" placeholder="Name" onChange={handlechange}/>
    <input id="user-batch" type="text" name="userbatch" placeholder="Batch (eg: ECE-2022)" onChange={handlechange}/>
    <textarea id="msg-matter" name="message" placeholder="Write your queries."></textarea>
    <button id="share" type="submit" >Send</button>
    <div id="emailok" class="emailok"> Query sent successfully! </div>
</form>
   
   <Footer/>

 </>
  )
}

export default Contacts
