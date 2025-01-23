import React from 'react'
import '../css/footer.css'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
    <footer>
    <div class="foot">
        <div class="content">
        <div class="addresscont">
            <p>
              <h2 >Address</h2> 
            Jagannathagattu Hill, <br/>
            Kurnool- 518 008, <br/>
            Andhra Pradesh, <br/>
            India. <br/>
            Phone: +91 - 8518 289114 <br/>
            Fax: +91 - 8518 289127 <br/>
            Email: office@iiitk.ac.in <br/>
            Work Hours: 9.00 AM to 5.45 PM 
            </p>
        </div>
      
        <div class="quicklink">
           <h2>Quick Links</h2>
            <ul>
                <li><a href="https://nss.gov.in/">About</a></li>
                <li><button className=''><Link to={'/Events'}>Events</Link></button></li>
                <li><button className=''><Link to={'/Members'}>Members</Link></button></li>
                <li> <button className=''><Link to={'/Contacts'}>Contacts</Link></button></li>
                <li>    <button className=''><Link to={'/Faqs'}>FAQs</Link></button></li>
                
                <li><a href="https://www.iiitk.ac.in/">IIITDM KURNOOL</a></li>       
            </ul>
        </div>
        <div class="location-head">
            <h2><i class="fa fa-map-marker" aria-hidden="true"></i>Location </h2>
        <div class="majorobj">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.799864273715!2d78.03380177555619!3d15.761723184874135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5dc3bfcf99645%3A0x52358ddcfb659cb9!2sIndian%20Institute%20Of%20Information%20Technology%2C%20Design%20%26%20Manufacturing%2C%20Kurnool!5e0!3m2!1sen!2sin!4v1695542145374!5m2!1sen!2sin"  style={{border:'none'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
        
    </div>
    <div class="instalink"> 
        <h2>Follow us</h2>
        <a href="https://www.instagram.com/nss_iiitdmk/"><FaInstagram /> Instagram</a> 
         <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A104169035&keywords=nss%20iiitdm%20kurnool&origin=RICH_QUERY_SUGGESTION&position=0&searchId=001691f9-5502-4d89-a412-21da8f0ea6e1&sid=Byw&spellCorrectionEnabled=false"><CiLinkedin /> Linked In</a> 
         <a href=""><CiMail /> nssiiitk.ac.in</a></div>
    </div></div>
    <div class="copyright">Copy right &copy; 2024, Indian Institute of Information Technology Design and Manufacturing Kurnool. All rights reserved.</div>
</footer>

  )
}

export default Footer
