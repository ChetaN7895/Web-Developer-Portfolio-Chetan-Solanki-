"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';


function ContactForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email,
        message: userInput.message
      };

      const res = await emailjs.send('service_1rpa3de', 'template_qonz5mq', emailParams, 'om3Etks-7iq5E4e-5');

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: ""
        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
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
          name="name"
          value={userInput.name}
          onChange={handleChange}
          required
        />
              </div>
               </div>
            <div className="flex flex-col gap-2">
      
            <label className="text-base">Email</label>
        <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
          type="email"
          name="email"
          value={userInput.email}
          onChange={handleChange}
          required
        />
      </div>
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
          name="message"
          maxLength="500"
          value={userInput.message}
          onChange={handleChange}
          required
        />
      </div>
      <button
              className="flex items-center gap-2 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              >
                  
                  <input type="submit"   value="Send Message"  />
              
            </button>
      
      </div>
      </div>
    </form>
  );
}
 export default ContactForm;
