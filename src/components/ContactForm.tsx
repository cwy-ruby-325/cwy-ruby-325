import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function ContactForm() {

    return <div className="col-12 col-md-6 contact-form">
        <div className="contact-intro title">
            Write Down Your Message below. <br /> 
            I will reply it as soon as possible. Thank you.
        </div>
        <form action="https://formspree.io/f/xgejaoqv"
            method="POST">
            <div className="contact-form-input">
                <div className="form-group">
                    <label className="title">Your Name</label>
                    <input type="text" name="name" className="form-control" id="Name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label className="title">Your Email</label>
                    <input type="email" name="email" className="form-control" id="Email" placeholder="Email" />
                    
                </div>
                <div className="form-group">
                    <label className="title">Your Message</label>
                    <textarea name="message" className="form-control" id="Message" placeholder="Please type your message here." />
                   
                </div>

            </div>
            <button type="submit" className="button button-primary button-md" >Submit Here <img src="/ButtonIcon/send.svg" alt="" /></button>
        </form>
    </div>
}

export default ContactForm;