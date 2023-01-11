import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

import './EmailForm.css'

const EmailForm = ({quitEmail}) => {
  
  const form = useRef();

  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    quitEmail()
  };

  return (
    <div className='container'>
      <form ref={form} onSubmit={sendEmail}>
        <div onClick={quitEmail} className='quit'>
           <FontAwesomeIcon style={{pointerEvents: 'none'}} className='icon' icon={faXmark} />
        </div>
        <input type="text" name="from_name" required placeholder='Your Name' />
        <input type="email" name="reply_to" required placeholder='Your Email' />
        <label>Message</label>
        <textarea rows='20' cols='80' required name="message" />
        <button onSubmit={sendEmail}>Send</button>
      </form>
    </div>
  );
};

export default EmailForm
