import { useState } from "react";
import "./contact.scss";
import Swal from "sweetalert2";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    Swal.fire({
      position: 'top-end',
      title: 'I will reply you as soon as possible',
      showConfirmButton: false,
      timer: 1500
  
    })
  };
 

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Contact Number" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
         {message &&<span> Message ressived</span>}
        </form>
      </div>
    </div>
  );
}
