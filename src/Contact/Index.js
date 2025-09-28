import React , { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';

function Index() {

   const [name, setName] = useState("");
   const [message, setMessage] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
	

    emailjs.sendForm('service_adcd7nn', 'template_r4krh7i', form.current, 'TdtEf6ojRcI3WAk5-')
      .then((result) => {
		console.log(result);
      }, (error) => {
		console.log(error);
      });
     setName("");
     setMessage("");
     setEmail("");
     setPhone("");
  };

  return (
    <div>
       
      <div className="container">
      	 <div className="row">
      	 	<div className="col-12">
      	 		<div className="row_spacing">
      	 			<h3 className="hero_heading">Get In Touch</h3>

                    <div className="row m-auto justify-content-center">
                    	<div className="col-md-8 col-12">
                    		<h3 className="footer_hero_heading mt-5">We are a team of creative heads all working towards designing your memory in the most spectacular way. From shooting to editing and the final delivery is curated finely, with attention to detail, to provide you with the best you'll find around. We have partnered with clients who have appreciated us for our quality and also for our timely delivery. Don't trust us? Book your order now and experience it like never before. Call us on:</h3>

                           
                          <div className="contact_section">
                          	 <h4 className="contact_heading">Contact</h4>
                           <p className="contact_des"><a href="tel:+919987253771" rel="noreferrer"  className="contact_des">+91 998 - 7253 - 771</a></p>

                           <h4 className="contact_heading">E-Mail</h4>
                           <p className="contact_des"><a href="https://mail.google.com/mail/u/0/?fs=1&to=inquiry.finalcutproduction@gmail.com&tf=cm" target="_blank" className="contact_des">inquiry.finalcutproduction@gmail.com</a></p>
                          </div>

                           <div className="form_section">

                              <form autoComplete="off" ref={form} onSubmit={sendEmail}>
                              <div className="row">
                              	 <div className="col-md-1 margin_top_grid">
                              	 	<h4 className="form_text">I am</h4>
                              	 </div>
                              	 <div className="col-md-5 margin_top_grid">
                              	 	<input type="text" name="from_name" value={name} placeholder="Name" className="form-control form_custom" onChange={(e) => setName(e.target.value)} />
                              	 </div>
                              	 <div className="col-md-6 margin_top_grid">
                              	 	<h4 className="form_text">I Was Wondering if we could Collabrate</h4>
                              	 </div>
                              	  <div className="col-md-2 margin_top_grid">
                              	 	<h4 className="form_text"> For Project</h4>
                              	 </div>
                              	 <div className="col-md-4 margin_top_grid">
                              	 	<input type="text" name="message" value={message} placeholder="Project Name" className="form-control form_custom" onChange={(e) => setMessage(e.target.value)} />
                              	 </div>
                              	 <div className="col-md-6 margin_top_grid">
                              	 	<h4 className="form_text">Project ? You Can Connect with me</h4>
                              	 </div>
                              	  <div className="col-md-1 margin_top_grid">
                              	 	<h4 className="form_text"> at</h4>
                              	 </div>
                              	  <div className="col-md-4 margin_top_grid">
                              	 	<input type="email" name="email" value={email} placeholder="Email Id" className="form-control form_custom"  onChange={(e) => setEmail(e.target.value)} />
                              	 </div>
                              	  <div className="col-md-3 margin_top_grid">
                              	 	<h4 className="form_text">Or Just give our</h4>
                              	 </div>
                              	  <div className="col-md-4 margin_top_grid">
                              	 	<input type="number" name="phone" value={phone} placeholder="Phone" className="form-control form_custom"  onChange={(e) => setPhone(e.target.value)} />
                              	 </div>
                              	 <div className="col-12 margin_top_grid">
                              	 	<button type="submit" className="btn form_btn ">Send</button>
                              	 </div>

								  
                              </div>
</form>

                           </div>


                    	</div>
                    </div>

      	 		</div>
      	 	</div>
      	 </div>
      </div>

    </div>
  );
}

export default Index;