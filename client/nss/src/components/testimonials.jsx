import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Testimonials = () => {

    
    let testimonials = [
        {name: "prof DVLN Somayajulu", img:'dvlnsomayajulu.jpg', matter:'I am thrilled to express my heartfelt appreciation for the profound impact of the National Service Scheme (NSS) at IIITDM, contributing significantly to the advancement and maturation of our institute. The diverse array of communal engagement endeavors and outreach initiatives orchestrated by NSS has not only enriched  academic voyage but has also been instrumental in instilling a profound sense of societal duty within the student body. NSS at IIITDM has not only been a catalyst for societal improvement but has also seamlessly integrated into the fabric of our campus ethos, fostering a spirit of solidarity, compassion, and unwavering commitment to effecting positive transformation.'},
        {name:"Dr.V.Siva Prasad", img:"sivaprasadsir.jpg", matter:'Being a part of the National Service Scheme (NSS) Team  has been a transformative journey, enriching both my personal and professional life. NSS provided a unique platform for community service, fostering a deep sense of social responsibility. Engaging in diverse activities, from outreach programs to awareness campaigns, broadened my perspective and instilled a commitment to making a positive impact. The spirit of unity among volunteers, coupled with the guidance of fellow NSS organizers, enhanced students and Volunteer Teamwork and leadership skills.  NSS is a privilege and an honor that I highly recommend for anyone seeking personal growth, social engagement, and a meaningful connection to the community.'},
        {name:'Dr.Noel Nittala', img:'noelsir.jpg', matter:'It is indeed a great privilege and honor for me to be the FIC of NSS Unit of IIITDM Kurnool. My association with NSS started as a student volunteer during my graduation and now has progressed into a leadership role. "Not Me But You" is the motto of NSS, it inspires the youth of our nation to be service oriented and always put forward the need of others rather than focusing on oneself. \'Education through Service\' is the underlying purpose of NSS, the volunteers are given various opportunities to develop their character and hone their personality by serving the community and nation. NSS Unit of IIITDM Kurnool organises  various Government led community service activities & programmes, in addition to designing their own programs and activities based on the needs of the society. The volunteers actively plan and execute the programmes meticulously. I encourage each and every student to be a part of NSS and make their lives meaningful and purpose driven.'},
        {name:'Dr.Naresh Babu', img:'nareshbabu.JPG', matter:'Serving as the Associate Dean of Student Affairs, my tenure with NSS has been a profoundly transformative experience, leaving an indelible mark on both my personal and professional realms. NSS serves as an unparalleled platform for community engagement, fostering a profound sense of societal responsibility. Participating in a spectrum of activities, from outreach initiatives to awareness campaigns, has significantly broadened my outlook, instilling a firm commitment to effecting positive change. The cohesion among volunteers and the mentorship from fellow NSS organizers have played a pivotal role in refining students\' leadership acumen. Being a part of NSS stands as both a privilege and an honor, offering avenues for personal growth, meaningful social involvement, and a genuine connection to the community. I enthusiastically endorse this experience for those seeking to cultivate as socially responsible leaders'},
        {name:'Ayush Shukla',img:'ayushshukla.jpg', matter:'Ayush Shukla(President 2022) from the vibrant Awadh region, where complexities weave through my thoughts like the ever-changing winds. Amidst the fluctuations, a few constants define me, and one stands out—I lean towards minority viewpoints and embrace non-mainstream thoughts and I made all this real through my NSS journey. I meticulously keep my personal and public lives separate, driven by good intentions.I embrace a plant-based diet and resist the pull of excessive consumerism. Sports, both outdoor and onboard, hold a special place in my heart, from the intensity of basketball and cricket to the strategic dance of chess. Festivals light up my spirit, and witnessing others revel in joy brings a sense of fulfillment. It\'s challenging to offend me. I am open to conversations spanning history, astrophysics, mathematics, religion, philosophy, mythology, economics, and even the depths of emotional introspection.'},
        {name:'Aditya Pandey', img:'pandey.jpg',matter:'Joining NSS as a Chief Secretary has been a life-changing decision, allowing me to serve communities in need and make a tangible impact. Through various projects like serving orphan school children, Doing survey on different languages in our region, I\'ve grown personally and developed essential skills while forming strong bonds with like-minded individuals. NSS has instilled a sense of social responsibility and a deep passion for community service. It\'s a journey of fulfillment, personal growth, and a commitment to positive change. I\'m profoundly grateful for the opportunities and experiences NSS has provided.'},
        {name:'Devesh Arya', img:'devesh.jpg', matter:'I, Devesh Kumar Arya, serving as the Media Head, joined the National Service Scheme out of a deep love for social service. NSS not only allowed me to pursue my passion but also provided me with unforgettable experiences.One particular event that etched a special place in my heart was the Orphan School Visit. Witnessing the radiant smiles on the faces of those children, knowing that a few of them received prizes, all enjoyed a delicious meal, and every one of them felt our love and support, was a truly heartwarming experience. It was a moment that I cherish and one that wouldn\'t have been possible without NSS.NSS has given me numerous reasons to advocate for the forgotten and ignored in our society. It has taught me the importance of preserving our cultural roots and connecting with the essence of India. The entire NSS-2022 team demonstrated unwavering commitment to their service, and I\'m immensely grateful to my team for their dedication and hard work.'},
        {name:'Sudeepthi', img:'sudeepthi.jpg', matter:'When I first got the chance to be part of NSS, I was delighted, but at the same time I was also very tense about how I could work in a team of people whom I just knew. <br/>However, working with all of them in our best way towards understanding society, volunteering for social causes, and sharing the same motto made our NSS period a success. I can genuinely say that we faced many challenges while working for NSS (such as corresponding with people outside the campus, bringing students of the institute together, or leading them), and I am proud that with good social responsibility and solidarity, we never stepped back. <br/>I personally learned how to work with diverse groups of people and appreciate their perspectives, be bold and confident about my opinion, and speak up. The kind of satisfaction I felt doing something for society, be it a drop of water in the ocean, but all our time, effort, and roaming in the hot sun was worth it.'}
    ]
       let i=0;
    const nextslide=()=>{
       if(i< testimonials.length){
     
        i++;
         document.getElementById('testimonyimg').src = testimonials[i].img;
         document.getElementById('test-name').innerText = testimonials[i].name
         document.getElementById('testimonymatter').innerText = testimonials[i].matter
       }
       else{
        i=0;
       }
    }

    const prevslide=()=>{
        if(i>0){
            i--
          document.getElementById('testimonyimg').src = testimonials[i].img;
          document.getElementById('test-name').innerText = testimonials[i].name
          document.getElementById('testimonymatter').innerText = testimonials[i].matter
        }
        else{
         i=testimonials.length-1;
        }
     }

  return (
    
    <div class="testimonials" id="testimonials">
    <h3>TESTIMONIALS</h3>

     

        
            <div class="test-slides" >
            <div class="testimony-img"><img id='testimonyimg' src={`${testimonials[0].img}`} alt=""/></div>
            <div class="testimony-details">
                <li id="test-name">{testimonials[0].name}</li></div>
           
            <div class="testimony-matter" id='testimonymatter'>{testimonials[0].matter}</div>
        </div>
        


    <button onClick={nextslide} id="nav-next" class="nav-next-prev"><MdNavigateNext style={{fontSize:'1.5vw'}}/></button>
    <button onClick={prevslide} id="nav-prev"  class="nav-next-prev"><GrFormPrevious  style={{fontSize:'1.5vw'}}/> </button>
</div>

  )
}

export default Testimonials
