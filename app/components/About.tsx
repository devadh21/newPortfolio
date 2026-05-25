"use client";
import Image from "next/image";
import hero from "../../public/img/about.jpg";
import hero1 from "../../public/img/bg_hero.jpg";
import hero2 from "../../public/img/hero2z.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { parentTextTapping, fadeIn, childrenTextTapping } from "../../variants";

export default function About() {
  const text = "i am an full stack developer.";
  return (
    <section className="section_style_alt overflow-hidden" id="about">
      <div className="container flex justify-center">
        <div className="main_section_style">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <p className="text-primary font-medium text-sm uppercase tracking-wider">My intro</p>
            </div>
            <div className="inline-block">
              <h1 className="style-h1 capitalize">about me</h1>
              <hr className="my-2 h-1 border-t-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            </div>
          </div>
          <div className="max-w-[1024px] grid grid-cols-1 gap-8 justify-center items-center sm:grid sm:grid-cols-2 mt-[75px]">
            <div className="">
              <motion.h2 variants={parentTextTapping(0.05)} initial="hidden" whileInView="show" className="text-[22px] font-bold capitalize my-4 dark:text-color-text text-color-text-light">
                {text.split("").map((char, index) => (
                  <motion.span variants={childrenTextTapping()} key={index}>{char}</motion.span>
                ))}
              </motion.h2>
              <p className="text-justify text-secondary dark:text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur.
              </p>
              <Link className="style-btn inline-block mt-6" href="/contact">
                <span>contact me</span>
              </Link>
            </div>
            <motion.div variants={fadeIn("left", 3, 0.2)} initial="hidden" whileInView={"show"} className="order-first sm:order-last">
              <div className="flex flex-col justify-center items-center w-full p-5 border border-orange-border dark:border-gray-700 rounded-lg relative">
                <div className="dark:bg-bg-color2 bg-white p-3 w-2/3 h-[320px] self-end rounded-md shadow-sm">
                  <Image src={hero} alt="hero img" className="h-full w-full object-cover rounded" />
                </div>
                <div className="dark:bg-bg-color2 bg-white p-3 w-2/5 h-[320px] self-start -mt-[300px] rounded-md shadow-sm">
                  <Image src={hero1} alt="hero img" className="h-full w-full object-cover rounded" />
                </div>
                <div className="w-[90%] h-[80px] -mt-[60px] dark:bg-bg-color2 bg-white p-3 rounded-md shadow-sm">
                  <Image src={hero2} alt="hero img" className="h-full w-full object-cover rounded" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
