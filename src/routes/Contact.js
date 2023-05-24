import React from "react";
import "../components/Styles.css";
import Navbar from "../components/Navbar";
function Contact(){
    //formspree is an website the mail you have login on that will get the message when we submit the  name attribute is important in the forms
    //for map got to gmail.com and enter the location and copy the embeded code 
    return(
        <div>
            <Navbar/>
          <div className="cont">
            
            <h2>Fell Free To Contact</h2>
            <br/>
            <br/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61261.138718708185!2d80.42958526300608!3d16.332079222486065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f5c460ab7d1d%3A0x8c86e4f36490336b!2sVasireddy%20Venkatadri%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1684317714298!5m2!1sen!2sin"
             width="100%" 
             title="Google Maps"
             height="200"
             style={{border:0}}
             allowFullscreen="" 
             loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">

            </iframe>
            <div className="contain">
            <h3>Reach &nbsp;&nbsp;Me &nbsp;&nbsp;out!!</h3>
            <div className="contact-form">
                
                <form action="https://formspree.io/f/mvonydjn" method="POST"> 
                   <table>
                    <tr>
                      <td>Name</td>
                      <td><input type="name" name="username" placeholder="Name" autoComplete="off" required/></td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td><input type="email" name="Email" placeholder="Email" autoComplete="off" required/></td>
                    </tr>
                    <tr>
                      <td>Message</td>
                      <td><textarea name="message" cols={24} rows={6} placeholder="Message me" autoComplete="off" required></textarea></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><input type="submit" value="Send"/></td>
                    </tr>
                   </table>
                </form>
            </div>
        </div>
        </div>
        
        </div>
        
    )
}
export default Contact;