"use client";
import { useState, useRef } from "react";

export default function ContactForm() {
  const [SendSuccess, setSendSuccess] = useState(false);
  const [SendFailed, setSendFailed] = useState(false);
  const [form, setForm] = useState({
    floating_full_name: "", floating_email: "", subject: "", floating_message: "",
  });
  const contactForm = useRef(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setSendSuccess(true);
      contactForm.current?.reset();
      setTimeout(() => setSendSuccess(false), 3000);
    } else {
      setSendFailed(true);
      setTimeout(() => setSendFailed(false), 3000);
    }
  };

  return (
    <div>
      {SendSuccess && (
        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          <span className="font-medium">Success :</span> Message sent!
        </div>
      )}
      {SendFailed && (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">Danger alert :</span> Send Message failed!
        </div>
      )}

      <form onSubmit={handleSubmit} ref={contactForm}>
        <div className="mb-4">
          <input
            type="text"
            name="floating_full_name"
            placeholder="Full Name"
            className="w-full p-3 border border-orange-border dark:border-gray-600 rounded-md bg-transparent dark:text-white text-color-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="floating_email"
            placeholder="Email"
            className="w-full p-3 border border-orange-border dark:border-gray-600 rounded-md bg-transparent dark:text-white text-color-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 border border-orange-border dark:border-gray-600 rounded-md bg-transparent dark:text-white text-color-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <textarea
            name="floating_message"
            placeholder="Message"
            rows={5}
            className="w-full p-3 border border-orange-border dark:border-gray-600 rounded-md bg-transparent dark:text-white text-color-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="style-btn w-full text-center">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
}
