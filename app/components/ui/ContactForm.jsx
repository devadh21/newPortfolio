"use client";
import { useState, useRef } from "react";

export default function ContactForm() {
  const [SendSuccess, setSendSuccess] = useState(false);
  const [SendFailed, setSendFailed] = useState(false);
  const [form, setForm] = useState({
    floating_full_name: "",
    floating_email: "",
    subject: "",
    floating_message: "",
  });
  const contactForm = useRef(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSendSuccess(true);
      contactForm.current?.reset(); // Reset the form after successful submission
      setTimeout(() => {
        setSendSuccess(false); // Reset the message after 3 seconds
      }, 3000);
    } else {
      setSendFailed(true);
      setTimeout(() => {
        setSendFailed(false); // Reset the message after 3 seconds
      }, 3000);
    }
  };
  return (
    <div>
      {SendSuccess && (
        <div
          class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span class="font-medium">Success :</span> Message sent!.
        </div>
      )}
      {SendFailed && (
        <div
          class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span class="font-medium">Danger alert :</span> Send Message failed!
        </div>
      )}

      <form className="" onSubmit={handleSubmit} ref={contactForm}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_full_name"
            id="floating_full_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 focus:border peer"
            placeholder=" "
            required
            onChange={handleChange}
          />
          <label
            htmlFor="floating_full_name"
            className="peer-focus:font-medium absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:top-0 peer-focus:text-color-text-light peer-focus:dark:text-color-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-400  dark:focus:border focus:outline-none focus:ring-0 focus:border-gray-600 focus:border peer"
            placeholder=" "
            required
            onChange={handleChange}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:top-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="subject"
            id="subject"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 focus:border peer"
            placeholder=""
            required
            onChange={handleChange}
          />
          <label
            htmlFor="subject"
            className="peer-focus:font-medium absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:top-0 peer-focus:text-color-text-light peer-focus:dark:text-color-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Subject
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            rows="6"
            name="floating_message"
            id="floating_full-name"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-400 dark:focus:border focus:outline-none focus:ring-0 focus:border-gray-600 focus:border peer"
            placeholder=" "
            required
            onChange={handleChange}
          />
          <label
            htmlFor="floating_message"
            className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:top-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Message
          </label>
        </div>

        <button type="submit" className="style-btn  ">
          Submit
        </button>
      </form>
    </div>
  );
}
