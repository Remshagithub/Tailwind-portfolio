import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div id="Contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl text-black font-bold text-center">Get in touch</h2>
          <p className="text-black text-lg text-center md:text-left">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className="flex gap-4 items-center text-black text-lg">
            <MdEmail size={30} />
            <span>xyz@gmail.com</span>
          </div>
          <div className="flex gap-4 items-center text-black text-lg">
            <FaPhoneAlt size={30} />
            <span>03124567543</span>
          </div>
          <form className="space-y-4 mt-8">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-black font-semibold">Name</label>
              <input
                type="text"
                id="name"
                className="h-[40px] bg-transparent border border-black p-2 focus:outline-none focus:border-accent transition duration-300"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-black font-semibold">Email</label>
              <input
                type="email"
                id="email"
                className="h-[40px] bg-transparent border border-black p-90 focus:outline-black focus:border-accent transition duration-300"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="msg" className="text-black font-semibold">Message</label>
              <textarea
                id="msg"
                className="bg-transparent border border-black p-2 focus:outline-none focus:border-accent transition duration-300"
                rows={8}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-accent p-2 px-6 text-black font-semibold hover:bg-teal-600 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}