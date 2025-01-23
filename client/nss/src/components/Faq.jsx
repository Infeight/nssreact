import React from 'react'
import '../css/faq.css'
import '../css/medfaq.css'
import Header from './Header'
import Footer from './Footer'

const Faq = () => {

    const handleClick = (e)=>{
        e.target.closest(".question").classList.toggle("open")
    
    }
  return (
    <>
    
    <Header/>


    <div class="contacts-head">
        <div class="contacts-layer"></div>
       
            <div class="clgheading">
                <p>NSS IIITDM KURNOOL</p>
                 {/* <pre id="moto"></pre> */}
             </div>
        
        <div class="clgpic">
        <iframe src="https://lottie.host/embed/438c4c6b-58b6-4c67-b4df-d1cc5831b326/FoYs36BM5C.lottie"></iframe>
        </div>
    </div>


    <div class="faq-cont" id="faq-cont">
      
      <div class="question" id="q1" onClick={handleClick} aria-valuetext="close"><p>What is NSS IIITDM KURNOOL all about?</p>
      <div class="answer-bar" id="a1">
          <p>Are you looking for an opportunity to make a positive impact on society? Look no further than NSS IIITDM Kurnool! As the National Service Scheme chapter of IIITDM Kurnool, we are committed to inspiring students to engage in nation-building activities that benefit people in and around IIITDM Kurnool. We firmly believe that participating in such activities is a source of great satisfaction and joy. By working together, we can create a positive impact on society and make a real difference in the world.
              <br/>  Join us in this journey towards a better tomorrow by lending us your hand. Together, we can bring about the change we wish to see! 
          </p>
      </div>
  </div>

      <div class="question" id="q2" onClick={handleClick} aria-valuetext="close"><p>Who all can join?</p>
      <div class="answer-bar" id="a2">
          <p>We need your help to achieve our initiatives, and we welcome anyone who is willing to contribute in any capacity they can. As a student of IIITDM Kurnool, you must choose between NSS or NSO at the time of admission and complete 100 hours of work in your chosen option. If you opt for NSS, you must complete these hours in NSS. However, if you choose NSO, we still encourage you to participate in our initiatives if you are willing to help. Your contribution can make a significant difference to our cause.</p>
      </div>
  </div>

      <div class="question" id="q3" onClick={handleClick} aria-valuetext="close"><p>Is it difficult to complete NSS hours?</p>
      <div class="answer-bar" id="a3">
          <p>Completing NSS hours is a breeze, and there's no need to worry about it. With a wide range of activities available all year round, you'll easily find something that piques your interest. Simply participate in the activities you enjoy, and completing your hours will be a piece of cake. Rest assured, you'll have no trouble meeting your NSS requirements.</p>
      </div>
  </div>

      <div class="question" id="q4" onClick={handleClick} aria-valuetext="close"><p>Are all NSS activities held in campus?</p>
      <div class="answer-bar" id="a4">
          <p>At NSS, we offer an extensive range of opportunities for you to choose from, so you can explore and pursue whatever interests you the most. Whether it's taking nature walks, arranging internships, joining us on exposure trips, or working on an NSS project to drive positive change in people's lives, we have got you covered. So, rest assured, you'll find exciting and fulfilling experiences with us at NSS.</p>
      </div>
  </div>

      <div class="question" id="q5" onClick={handleClick} aria-valuetext="close"><p>Can we participate in other events even if we join NSS?</p>
      <div class="answer-bar" id="a5">
          <p>We provide multiple volunteering opportunities and events that take place outside of classes, including weekends. Our regular volunteering opportunities can be chosen based on your schedule and availability. When you join a club, whether it is a cultural or technical one, you will get the chance to volunteer and participate in other activities.
              <br/> However, even if you are not interested in joining a club, you are still welcome to participate in any event without hesitation.</p>
      </div>
  </div>

      <div class="question" id="q6" onClick={handleClick} aria-valuetext="close"><p>Where can I solve my queries about NSS IIITDM Kurnool?</p>
      <div class="answer-bar" id="a6">
          <p>I highly recommend that you reach out to a team member from your hostel for any queries you may have. They will be easier to contact and will have a better understanding of your unique situation. However, if you feel that your query was not properly addressed, do not hesitate to speak with one of our NSS team core members. They have extensive knowledge and expertise and can help answer any and all questions related to NSS.</p>
      </div>
  </div>
</div>

<Footer/>
    </>
  )
}

export default Faq
