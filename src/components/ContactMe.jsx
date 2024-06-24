import { Textarea } from "@headlessui/react";
import AnimationTyping from "../assets/AnimationTyping.json";
import React, { useRef, useState } from 'react';
import Lottie from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import DOMPurify from 'dompurify';

const ContactMe = () => {
  const lottieRef = useRef();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const sanitizeInput = (input) => DOMPurify.sanitize(input);

  const sendMail = (e) => {
    e.preventDefault();
    
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);
    
    axios
      .post("http://localhost:5000/contact-us", { email: sanitizedEmail, subject: sanitizedSubject, message: sanitizedMessage })
      .then(() => {
        setStatusMessage('Email sent successfully');
        setIsError(false);
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch(() => {
        setStatusMessage('Failed to send email');
        setIsError(true);
      });
  };

  return (
    <section className="relative h-[682px] w-full bg-[#121212]">
      <div className="mx-auto max-w-7xl px-5 py-12 flex flex-col h-full">
        <div className='relative border-2 border-[#272c36] h-full rounded-3xl grid grid-rows-1 lg:grid-cols-2' style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 10px 10px 12px' }}>
          <div className=" p-5 h-full">
            <form className="flex flex-col mx-3 mt-4 gap-4" onSubmit={sendMail}>
              <div className='flex items-center flex-col'>
                <div className='text-[16px] font-[montserrat] text-white uppercase border-[1px] border-gray-600 rounded-full px-2'>
                  <FontAwesomeIcon icon={faMessage} className='text-white' size='sm' /> Message
                </div>
                <div className='font-[palanquin] italic mb-5 text-[#666]'>
                  We are just one call away
                </div>
              </div>
              {statusMessage && (
                <div className={`text-center py-2 ${isError ? 'text-red-500 border-red-500' : 'text-green-500 border-green-500'} rounded-md border-[2px]`}>
                  {statusMessage}
                </div>
              )}
              <div className="flex flex-col gap-2 text-gray-400">
                <label>Email: </label>
                <input
                  type="email"
                  placeholder="Company's Email"
                  className="px-5 py-2 rounded-md w-full bg-[#272c36]"
                  value={email}
                  onChange={(e) => setEmail(sanitizeInput(e.target.value))}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 text-gray-400">
                <label>Subject: </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="px-5 py-2 rounded-md w-full bg-[#272c36]"
                  value={subject}
                  onChange={(e) => setSubject(sanitizeInput(e.target.value))}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 text-gray-400">
                <label>Message: </label>
                <Textarea
                  placeholder="Message"
                  className="px-5 py-2 rounded-md w-full bg-[#272c36]"
                  value={message}
                  onChange={(e) => setMessage(sanitizeInput(e.target.value))}
                  required
                />
              </div>
              <button type="submit" className="w-full bg-slate-500 rounded-md py-2">Submit message</button>
            </form>
          </div>
          <div className="h-full bg-[#272c36] hidden lg:flex rounded-r-3xl">
            <Lottie loop={true} autoplay={true} lottieRef={lottieRef} animationData={AnimationTyping} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
