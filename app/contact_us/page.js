"use client";
import { Cormorant_Garamond } from "next/font/google";
import { useState } from "react";
import Button from "../component/Button";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const ContactUs = () => {
  const data = {
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFromData] = useState(data);

  return (
    <section className="w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="w-full h-[80vh] flex justify-start items-end bg-center bg-cover relative"
        style={{ backgroundImage: 'url("/images/contact_us/hero-bg.jpg")' }}
      >
        <div className="bg-gradient-to-t from-white  to-transparent w-full h-full absolute top-0 left-0"></div>
        <div className={`z-10 lg:m-24 m-10 ${comorant.className}`}>
          <p className="uppercase tracking-[10px] text-sm text-gray-500 font-thin">
            Get In Touch
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl uppercase">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-[#F8F8F8] w-full min-h-screen px-5 md:px-10 xl:px-24 py-24">
        <div>
          <hr className="text-gray-400 w-90 mx-auto"></hr>
          <p className="font-thin text-6xl text-center mt-5">Get in Touch</p>
          <p className="text-center mt-2">
            We’re here to help. Feel free to reach out with any questions or
            inquiries.
          </p>
        </div>
        <form
          className="bg-white p-10 w-full xl:w-3/4 mx-auto flex flex-col gap-10 mt-10 rounded"
          action="https://formspree.io/f/mjkovywo"
          method="POST"
        >
          <div className="lg:flex lg:justify-between">
            <input
              className="lg:w-9/20 w-full border-gray-400 border-b rounded p-2 focus:outline-none"
              type="text"
              placeholder="First Name"
              required
              name="firstname"
              value={formData.firstname}
              onChange={(e) =>
                setFromData({ ...formData, firstname: e.target.value })
              }
            />
            <input
              className="lg:w-9/20 w-full border-gray-400 border-b rounded p-2 focus:outline-none"
              type="text"
              placeholder="Last Name"
              required
              name="lastname"
              value={formData.lastname}
              onChange={(e) =>
                setFromData({ ...formData, lastname: e.target.value })
              }
            />
          </div>
          <div>
            <input
              className="w-full border-gray-400 border-b rounded p-2 focus:outline-none"
              type="text"
              placeholder="Company Name"
              required
              name="company"
              value={formData.company}
              onChange={(e) =>
                setFromData({ ...formData, company: e.target.value })
              }
            />
          </div>
          <div>
            <input
              className="w-full border-gray-400 border-b rounded p-2 focus:outline-none"
              type="text"
              placeholder="Email Address"
              required
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFromData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <input
              className="w-full border-gray-400 border-b rounded p-2 focus:outline-none"
              type="text"
              placeholder="Phone Number"
              required
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFromData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div>
            <textarea
              className="w-full border-gray-400 border-b rounded p-2 focus:outline-none"
              rows={5}
              placeholder="Please us how we can be of help..."
              required
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFromData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <div className="flex justify-center">
            <Button
              textOne={"Submit"}
              textTwo={"Send"}
              bgColor={"bg-black"}
              marginX={"mx-auto"}
              textColor={"text-white"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
