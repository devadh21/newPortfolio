"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "../../variants";

export default function Hero() {
  return (
    <section className="section_hero_style relative overflow-hidden">
      <div className="absolute top-10 left-10 w-16 h-16 floating opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="currentColor">
          <circle cx="50" cy="50" r="10" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 floating opacity-20" style={{ animationDelay: '-0.5s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="currentColor">
          <circle cx="50" cy="50" r="10" />
        </svg>
      </div>
      <div className="dark:bg-bg-color/80 bg-white/80">
        <div className="container full-screen flex flex-col-reverse justify-center items-center sm:flex-row sm:gap-3">
          <motion.div variants={fadeIn("right", 2, 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6 }} className="flex justify-center w-full">
            <div className="w-full flex flex-col justify-center mb-6 dark:text-color-text text-color-text-light">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <p className="text-primary font-medium text-sm uppercase tracking-wider">Hello, I'm</p>
              </div>
              <h1 className="text-[55px] sm:text-[72px] font-bold text-primary leading-tight">Dev-adh</h1>
              <div className="w-full">
                <p className="text-lg font-medium">Web Designer & Developer</p>
                <hr className="my-3 h-0.5 border-t-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              </div>
              <p className="text-base mt-2">Web design and developer from Morocco.</p>
              <p className="text-base text-secondary dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sint?</p>
              <div className="w-full mt-6">
                <Link className="style-btn inline-block" href="#">
                  <span>click me</span>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("left", 2, 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6 }} className="w-full flex justify-center items-center">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full bg-move-3d"></div>
              <Image src="/img/hero1.jpg" alt="sample image" width={650} height={650} priority={true} className="object-fill rounded-lg shadow-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
