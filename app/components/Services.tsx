"use client";
import { cardListsServices } from "../data";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="section_style" id="services">
      <div className="container flex justify-center">
        <div className="w-[1024px] my-[39px]">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <p className="text-primary font-medium text-sm uppercase tracking-wider">Specialized in</p>
            </div>
            <div className="inline-block">
              <h1 className="style-h1">Services</h1>
              <hr className="my-2 h-1 border-t-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-[55px]">
            {cardListsServices.map((card, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }}
                viewport={{ once: true }}
                key={card.id}
                className="border border-orange-border dark:border-gray-700 rounded-lg p-8 flex flex-col justify-center items-center text-center hover:bg-bg-color2-light dark:hover:bg-bg-color2 transition-all duration-300 group"
              >
                <div className="p-3 mb-4 text-primary group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                <h1 className="text-xl font-semibold mb-2 dark:text-color-text text-color-text-light uppercase">{card.title}</h1>
                <span className="text-sm text-primary font-medium">{card.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
