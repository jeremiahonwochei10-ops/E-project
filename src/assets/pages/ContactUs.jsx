import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function ContactUs() {
  return (
    <motion.main
      className="min-h-screen bg-[#fff8f0] "
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.16 } },
      }}
    >
      <section className="bg-[url('/public/breadcrum.jpg')] bg-cover bg-center bg-blend-overlay bg-[#000000d7] w-full h-100 flex justify-center items-center ">
        <h2 className="font-semibold text-3xl text-[#ffffff]">
          Home <span className="text-[#fffb19]">/Contact Us </span>
        </h2>
      </section>
      <motion.div
        className="max-w-300 mx-auto text-center mb-16 py-20 px-6"
        variants={cardVariants}
      >
        <p className="text-[#2e5996] font-semibold tracking-[0.24em] uppercase text-sm">
          Get In Touch
        </p>
        <h1 className="text-4xl font-bold text-[#1f1f1f] mt-4">Contact Us</h1>
        <p className="text-[#555555] mt-4 text-lg max-w-2xl mx-auto">
          Have a question, custom order request, or just want to say hello? We'd
          love to hear from you.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] max-w-300 mx-auto pb-20 px-6">
        <motion.form
          className="rounded-4xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          variants={cardVariants}
        >
          <label className="block text-[#333333] text-sm font-semibold mb-3">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full rounded-3xl border border-[#dddddd] bg-[#fafafa] px-5 py-3 outline-none focus:border-[#2e5996]"
          />

          <label className="block text-[#333333] text-sm font-semibold mt-6 mb-3">
            Email Address
          </label>
          <input
            type="email"
            placeholder="hello@bakerzbiteng.com"
            className="w-full rounded-3xl border border-[#dddddd] bg-[#fafafa] px-5 py-3 outline-none focus:border-[#2e5996]"
          />

          <label className="block text-[#333333] text-sm font-semibold mt-6 mb-3">
            Your Message
          </label>
          <textarea
            rows="5"
            placeholder="Tell us what you'd like..."
            className="w-full rounded-3xl border border-[#dddddd] bg-[#fafafa] px-5 py-3 outline-none focus:border-[#2e5996]"
          ></textarea>

          <button
            type="submit"
            className="mt-7 w-full rounded-3xl bg-[#2e5996] px-6 py-3 text-white text-lg font-semibold transition hover:bg-[#244b85]"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          className="rounded-4xl bg-[#2e5996] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          variants={cardVariants}
        >
          <h2 className="text-3xl font-semibold">Contact Info</h2>
          <p className="mt-4 text-lg text-[#f2f2f2]">
            Reach out anytime and we will respond as quickly as possible.
          </p>
          <div className="mt-8 space-y-5 text-sm leading-7 text-[#f0f0f0]">
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
              <span>Mon – Sat: 7:00am – 8:00pm | Sunday: 9:00am – 5:00pm</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default ContactUs;
