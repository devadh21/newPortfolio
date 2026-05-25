"use client";
import { cardInfoContact } from "../data";
import ContactForm from "./ui/ContactForm";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";

export default function Contact() {
  return (
    <section id="contact" className="section_style_alt">
      <div className="container flex justify-center">
        <div className="main_section_style">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <p className="text-primary font-medium text-sm uppercase tracking-wider">Contact</p>
            </div>
            <div className="inline-block">
              <h1 className="style-h1 capitalize">get in touch with me</h1>
              <hr className="my-2 h-1 border-t-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            </div>
          </div>
          <div className="border border-orange-border dark:border-gray-700 rounded-lg p-[35px] flex flex-col justify-center gap-6 sm:flex-row">
            <motion.div variants={fadeIn("right", 2, 0.2)} initial="hidden" whileInView={"show"} className="w-full flex flex-col justify-evenly items-center bg-white dark:bg-bg-color2 rounded-lg p-6">
              <h1 className="text-lg mb-6 uppercase font-semibold text-center text-primary">contact info</h1>
              {cardInfoContact.map((card) => (
                <div key={card.id} className="w-full max-w-[220px] flex flex-col justify-center items-center py-4 px-3 rounded-md bg-bg-color2-light dark:bg-bg-color mb-3">
                  <div className="flex justify-center items-center gap-3 mb-1">
                    <div className="text-primary text-xl">{card.icon}</div>
                    <div className="font-medium text-base uppercase dark:text-color-text text-color-text-light">{card.title}</div>
                  </div>
                  <p className="text-sm text-secondary dark:text-gray-400">{card.desc}</p>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeIn("left", 2, 0.2)} initial="hidden" whileInView={"show"} className="w-full bg-white dark:bg-bg-color2 rounded-lg p-6">
              <h1 className="text-lg mb-6 uppercase font-semibold text-center text-primary">just message me</h1>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
