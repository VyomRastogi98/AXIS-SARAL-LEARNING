import { Container } from "@mui/system";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const ContactPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      "service_loiku9j",
      "template_3i7vwx5",
      form.current,
      "gyriAj_SKLawKEgKa"
    )
    .then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div><br/>
      <Container>
        <h1>Contact Us</h1><hr/>
        <div class="shadow p-3 mb-5 bg-white rounded">
            <form onSubmit={sendEmail} ref={form} class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Name</label>
                    <input type="textarea" name="user_name" class="form-control"></input>
                </div>
                <div class="col-md-12">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" name="user_email" class="form-control"></input>
                    <label for="inputPassword4" class="form-label">Message</label>
                    <input type="text" name="message" class="form-control"></input>
                </div>
                <div class="col-12">
                    <button type="submit" value="Send" class="btn btn-danger bg-gradient">Send</button>
                </div>
            </form>
        </div>
      </Container>
      <div>
        <h3>Contact Info</h3>
        <div>
          <div>
            <span><LocationOnOutlinedIcon/></span>
            <p>CP,New Delhi <br/>INDIA</p>
          </div>
          <div>
            <span><EmailOutlinedIcon/></span>
            <a href="mailto:axisbatch9@gmail.com">axisbatch9@gmail.com</a>
          </div>
          <div>
            <span><LocalPhoneOutlinedIcon /></span>
            <a href="tel:+919999955555">+91 999 995 5555</a>
          </div>
        </div>
      </div>      
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.1123135637!2d77
          .20653217117979!3d28.62892055309332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057
          %3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v
          1674186949667!5m2!1sen!2sin"width="500" height="315" style= {{border:0}} allowfullscreen="" loading="lazy"
           referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};
export default ContactPage;


