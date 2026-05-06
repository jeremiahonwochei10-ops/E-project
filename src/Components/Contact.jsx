import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const fadeCard = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Contact() {
  return (
    <motion.section
      className="bg-[#f8f2e9] py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeCard}
    >
      <div className="max-w-300 mx-auto px-6">
        <div className="max-w-125 mx-auto text-center">
          <p className="text-[#2e5996] font-semibold tracking-[0.24em] uppercase text-sm">
            Get In Touch
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[#1f1f1f]">
            Have a question, custom order request, or just want to say hello?
            We'd love to hear from you.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <motion.form
            className="rounded-4xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            variants={fadeCard}
          >
            <label className="block text-[#333333] text-sm font-semibold mb-3">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-3xl border border-[#dddddd] bg-[#fafafa] px-5 py-3 text-[#333333] outline-none focus:border-[#2e5996]"
            />

            <label className="block text-[#333333] text-sm font-semibold mt-6 mb-3">
              Email Address
            </label>
            <input
              type="email"
              placeholder="hello@bakerzbiteng.com"
              className="w-full rounded-3xl border border-[#dddddd] bg-[#fafafa] px-5 py-3 text-[#333333] outline-none focus:border-[#2e5996]"
            />

            <label className="block text-[#333333] text-sm font-semibold mt-6 mb-3">
              Your Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell us what you'd like..."
              className="w-full rounded-3xl border border-[#dddddd] bg-[#fafafa] px-5 py-3 text-[#333333] outline-none focus:border-[#2e5996]"
            />

            <button
              type="submit"
              className="mt-7 w-full rounded-3xl bg-[#2e5996] px-6 py-3 text-white text-lg font-semibold transition hover:bg-[#244b85] cursor-pointer"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            className="rounded-4xl bg-[#2e5996] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            variants={fadeCard}
          >
            <h3 className="text-3xl font-semibold">Contact Info</h3>
            <p className="mt-4 text-lg text-[#f2f2f2]">
              Reach out anytime and we will respond as quickly as possible.
            </p>

            <div className="mt-8 space-y-5 text-sm leading-7">
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-white/15 p-3 text-white">
                  <FaEnvelope />
                </span>
                <span>hello@bakerzbiteng.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-white/15 p-3 text-white">
                  <FaPhone />
                </span>
                <span>+234 800 000 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-white/15 p-3 text-white">
                  <FaMapMarkerAlt />
                </span>
                <span>12 Baker Street, Lekki Phase 1, Lagos</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-white/15 p-3 text-white">
                  <FaClock />
                </span>
                <span>
                  Mon – Sat: 7:00am – 8:00pm | Sunday: 9:00am – 5:00pm
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
