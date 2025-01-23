import React from 'react'
import'../css/members.css'
import '../css/medmembers.css'
import { useState,useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'


const Members = () => {
  const[members,setMembers] = useState([]);

  useEffect(()=>{

  },[members])

  let head = [
    {name:"Dr.Noel Nittala", post:'FIC NSS & Program Officer', image:'noelsir.jpg'},
    {name:"Dr.V.Siva Prasad", post:'Program Officer', image:'sivaprasadsir.jpg'}
  ]

  let members2023=[
    
  ]

    let members2022 = [
        {name:"Sumanth Siddamsetty", post:'President', image:'president.jpg'},
        {name:"Aryan Kumar", post:'Vice-President', image:'aryan vice president.jpg'},
        {name:"Prasanthi", post:'Vice-President', image:'prashanthi.jpg'},
        {name:"Sumanth Segu", post:'Treasurer', image:'sumath.jpg'},
        {name:'Rohith Sonawane', post:'Chief-Secretary', image:'rohit.jpg'},
        {name:'Jyothi Singh', post:'Chief-Secretary', image:'jyothisingh.jpg'},
        {name:'Aditya Rai', post:'Conveyer', image:'rai.jpg'},
        {name:'Kushal', post:'CSE- Secretery', image:'kushal.jpg'},
        {name:'Suguna Sree', post:'CSE- Secretery' ,image:'suguna.jpg'},
        {name:'Mahesh Chituri', post:'ECE- Secretery' ,image:'mahesh.jpg'},
        {name:'Nathanya', post:'ECE- Secretery' ,image:'nathanya ec secretary.jpg'},
        {name:'Sanchay', post:'MECH- Secretery' ,image:'sanchay nss.jpg'},
        {name:'Sai Priya', post:'MECH- Secretery' ,image:'khushi.jpg'},
        {name:'Manjunath', post:'AIDS- Secretery' ,image:'manjunath.jpg'},
        {name:'Sathvika', post:'AIDS- Secretery' ,image:'sathvika.jpg'},
        {name:'Aditya Yadav', post:'Media' ,image:'aditya.jpg'},
        {name:'Subhash Teku', post:'Media' ,image:'subhash media.jpg'},
        {name:'Ashutosh Mishra', post:'Photography' ,image:'ashutosh.jpg'},
        {name:'Kausthab', post:'Photography' ,image:'kausthab.jpg'}

    ]

    let members2021=[
      {name:'Ayush Shukla', post:'President' ,image:'ayushshukla.jpg'},
      {name:'Lavish Singh', post:'Vice-President' ,image:'Lavish vicepresident.jpg'},
      {name:'Aditya Pandey', post:'Chief-Secretary' ,image:'pandey.jpg'},
      {name:'Rishita Reddy', post:'Joint Secretary' ,image:'rishita.png'},
      {name:'Devesh Arya', post:'Media Incharge' ,image:'devesh.jpg'},
      {name:'Sandeep Anand', post:'CSE-Secretary' ,image:'sandeepanand.jpg'},
      {name:'Vineela', post:'CSE-Secretary' ,image:'vineela.jpg'},
      {name:'Sudeepthi', post:'ECE-Secretary' ,image:'sudeepthi.jpg'},
      {name:'Shubham Gehlot', post:'ECE-Secretary' ,image:'shubahm.jpg'},
      {name:'Shiv Shankar Kumar', post:'MECH-Secretary' ,image:'shiva.jpg'},
      {name:'Rama Devi', post:'MECH-Secretary' ,image:'ramadevi.jpg'},
      {name:'Sindhu Priya', post:'AIDS-Secretary' ,image:'sindhupriya.jpg'},
      {name:'Sujan', post:'AIDS-Secretary' ,image:'sujan.jpg'}
      

    ]

    const batch23 = ()=>{
      memberget(members2023) 
    }

    const batch22 = ()=>{
      memberget(members2022) 
    }

    const batch21 = ()=>{
      memberget(members2021)
    }

      const memberget =(curmembers)=>{
        document.getElementById('members-head').innerHTML = ''
        curmembers.map(member=>{
          const members = document.createElement('div')
          const img = document.createElement('img')
          const position = document.createElement('div')
          const name = document.createElement('div')
  
          members.className = 'members'
          position.className = 'position'
          name.className = 'head-name'
  
          img.src = `${member.image}`
          position.innerText = member.post
          name.innerText = member.name
  
          members.appendChild(img)
          members.appendChild(position)
          members.appendChild(name)
          document.getElementById('members-head').appendChild(members)
      })
       
   }

  return (
   <>
<Header/>

<div class="events-head">
        <div class="events-layer"></div>
        <div class="clgheading">
            <p>NSS IIITDM KURNOOL</p>
             {/* <pre id="moto"></pre> */}
         </div>
        <div class="clgpic">
        <iframe src="https://lottie.host/embed/2d52f598-b26f-4bd3-ad8a-540324926bb8/o16BSkSf9c.lottie"></iframe>
        </div>
    </div>

<div class="batches" id="batch22">
<div class="team-heads">
  {
    head.map(e=>{
      return(
        <div class="team-head" id="team-head">
        <img src={`${e.image}`} alt=""/>
        <div class="head-name-noel" id="team-head-name-noel">{e.name}</div>
        <div class="position-noel" id="position-noel">{e.post}</div>
   
    </div>
      )
    })
  }
  </div>

<div class="members-head" id='members-head'>
    {
     
      members2022.map(member=>{
        return(
          <div class="members">
            <img src={`${member.image}`} alt=""/>
            <div class="position">{member.post}</div>
            <div class="head-name">{member.name}</div>
        </div>
        )
      })
    }
    </div>

    </div>

    <div class="prev-batches">
       
       <button onClick={batch23}>Team 23-24</button>
       <button onClick={batch22}>TEAM 22-23</button>
       <button onClick={batch21}>TEAM 21-22</button>

    {/* <a href="#batch23">TEAM 23-24</a>
    <a href="#batch22" onClick={batch22}>TEAM 22-23</a>
   <a href="./members(21-22).html" onClick={batch21}>TEAM 21-22</a> */}
   </div>

<Footer/>
   </>
  )
}

export default Members
