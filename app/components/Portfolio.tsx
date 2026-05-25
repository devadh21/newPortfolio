"use client";
import Image from "next/image";
import { cardListsPortfolio } from "../data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MyWork() {
  return (
    <section className="section_style" id="portfolio">
      <div className="container flex justify-center">
        <div className="main_section_style">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <p className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</p>
            </div>
            <div className="inline-block">
              <h1 className="style-h1">My Work</h1>
              <hr className="my-2 h-1 border-t-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-[55px]">
            {cardListsPortfolio.map((card, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.15 } }}
                viewport={{ once: true }}
                key={index}
                className="group rounded-lg overflow-hidden border border-orange-border dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={card.img}
                    alt="Card image"
                    width={360}
                    height={360}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="bg-primary text-white px-4 py-2 rounded-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                      <Link href={card.href} target="_blank" className="block text-center text-sm font-medium uppercase">
                        {card.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
