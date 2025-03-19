"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
/*function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
*/
    const ContactForm = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_1rpa3de', 'template_qonz5mq', form.current, 
           'om3Etks-7iq5E4e-5')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
    };
           /* console.log(result.text);
           }, (error) => {
            console.log(error.text);
           });
          };
         */
          return (
            <form ref={form} onSubmit={sendEmail}>
            <div>
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
            <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
              <p className="text-sm text-[#d3d8e8]">{"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-base">Your Name: </label>
                  <input
                    className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                    type="text"
                    name="user_name"
                    maxLength="100"
                    required={true}
                    
                  />
                  </div>
               </div>
                <div className="flex flex-col gap-2">
            
            <label className="text-base">Email</label>
  
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              name="user_email"
              maxLength="100"
         
              
          
          />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              name="message"
             
              
             
            />
          </div>
               
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              
            >
              
                
                
                
                  <input type="submit" value="Send" results={'success'}  />
                 
               </button>
           
               
           </div>
            </div>
           
          </form>
          
            );
        };


   
    export default ContactForm; 