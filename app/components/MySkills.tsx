"use client";
import Image from "next/image";
import { cardsSkills } from "../data";
import { motion } from "framer-motion";

export default function MySkills() {
  return (
    <section className="section_style_alt" id="skills">
      <div className="container flex justify-center">
        <div className="main_section_style">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <p className="text-primary font-medium text-sm uppercase tracking-wider">Expertise</p>
            </div>
            <div className="inline-block">
              <h1 className="style-h1 capitalize">my skills</h1>
              <hr className="my-2 h-1 border-t-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-[55px] p-6 border border-orange-border dark:border-gray-700 rounded-lg">
            {cardsSkills.map((card, index) => (
              <div key={card.id} className="flex items-center gap-3 p-3 rounded-md hover:bg-white dark:hover:bg-bg-color transition-colors duration-300 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-md bg-bg-color2-light dark:bg-bg-color2 group-hover:shadow-sm transition-shadow">
                  <Image src={card.icon} alt={card.alt} width={40} height={40} />
                </div>
                <div className="flex-1">
                  <span className="uppercase text-sm font-medium dark:text-color-text text-color-text-light block mb-1">{card.title}</span>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: card.level, transition: { duration: 2, delay: index * 0.15 } }}
                      viewport={{ once: true }}
                      className="h-full bg-primary rounded-full text-xs font-medium text-white text-center leading-none"
                      style={{ lineHeight: '0.5rem' }}
                    >
                      {card.level}
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
