import React, { useState } from 'react'
import '../styles/style.css'

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  let errors = [];
  const ValidateEmail=(email)=> {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  const formValidation = () => {
    setErrorMessages([]);

    const isNameValid = name !== "";
    const isMessageValid = message !== "";
    

    if (!isNameValid) {
      errors.push("Name is not valid, please try again.");
    }
    if (!ValidateEmail(email)) {
      errors.push("Email is not valid, please try again.");
    }
    if (email === "") {
      errors.push("Email field is empty, please try again.");
    }
    if (!isMessageValid) {
      errors.push("Message is not valid, please try again.");
    }
    if (errors.length > 0) {
      setShowErrors({ showErrors: true });
      setErrorMessages(errors);
    } else {
      setShowErrors({ showErrors: false });
      alert("Email Sent");
    }
  };
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Contact us</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5">
            <img src="/assets/images/contact-us-banner-img.png" alt="Contact Us"
              height="400px" width="400px" />
              <br />
              <br/>
              <div class="content">
    
      <ul>
      <a href="https://www.facebook.com/treyozz/"><i class='bx bxl-facebook' ></i></a>
      <a href="https://www.instagram.com/sketchboyie/"><i class='bx bxl-instagram' ></i></a>
    </ul>
 
</div>
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">Full Name</label>
                <input 
                type="text" 
                class="form-control" 
                id="exampleForm"
                 placeholder="Enter your name"
                 onChange={e => setName(e.target.value)}
                  />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                 type="email"
                  class="form-control" 
                  id="email" 
                  placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea
                placeholder="Start typing..." 
                 class="form-control"
                  id="exampleFormControlTextarea1"
                   rows="3"
                   onChange={e => setMessage(e.target.value)}
                   >

                   </textarea>
              </div>
              {showErrors
              ? errorMessages.map((item, index) => {
                  return <ul key={index}>{item}</ul>;
                })
              : null}
              <button
               type="submit"
                className="btn btn-dark"
                onClick={formValidation}>
                  Send Message
                  </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
