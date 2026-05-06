import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const stars = [1, 2, 3, 4, 5];
const fieldVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function FeedBack() {
  return (
    <motion.main
      className="min-h-screen bg-[#f7f1e7] py-20 px-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.14 } },
      }}
    >
      <motion.div
        className="max-w-300 mx-auto text-center mb-16"
        variants={fieldVariants}
      >
        <p className="text-[#2e5996] font-semibold tracking-[0.24em] uppercase text-sm">
          We Value Your Voice
        </p>
        <h1 className="text-4xl font-bold text-[#1f1f1f] mt-4">Feedback</h1>
        <p className="text-[#555555] mt-4 text-lg max-w-2xl mx-auto">
          Tell us about your experience with Bakerz Bite, so we can bake even
          better moments for you.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] max-w-300 mx-auto">
        <motion.form
          className="rounded-4xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          variants={fieldVariants}
        >
          <div className="mb-6">
            <label className="block text-[#333333] text-sm font-semibold mb-3">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-3xl border border-[#dddddd] bg-[#fafafa] px-5 py-3 outline-none focus:border-[#2e5996]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#333333] text-sm font-semibold mb-3">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-3xl border border-[#dddddd] bg-[#fafafa] px-5 py-3 outline-none focus:border-[#2e5996]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#333333] text-sm font-semibold mb-3">
              How was your visit?
            </label>
            <textarea
              rows="5"
              placeholder="Share your thoughts..."
              className="w-full rounded-3xl border border-[#dddddd] bg-[#fafafa] px-5 py-3 outline-none focus:border-[#2e5996]"
            ></textarea>
          </div>
          <div className="mb-6">
            <p className="text-[#333333] text-sm font-semibold mb-3">Rate us</p>
            <div className="flex gap-2">
              {stars.map((star) => (
                <button
                  key={star}
                  type="button"
                  className="rounded-full bg-[#ffeb93] p-3 text-[#b17f00] shadow-sm transition hover:scale-110"
                >
                  <FaStar />
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full rounded-3xl bg-[#2e5996] px-6 py-3 text-white font-semibold transition hover:bg-[#244b85]"
          >
            Submit Feedback
          </button>
        </motion.form>

        <motion.div
          className="rounded-4xl bg-[#2e5996] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          variants={fieldVariants}
        >
          <h2 className="text-3xl font-semibold">Thanks for sharing!</h2>
          <p className="mt-4 text-lg text-[#f2f2f2]">
            Your comments help us improve our cakes, service, and bakery
            experience.
          </p>
          <div className="mt-8 space-y-4 text-sm leading-7 text-[#e8e8e8]">
            <p className="font-semibold">What we listen for:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Food quality and taste</li>
              <li>Order speed and pickup experience</li>
              <li>Service friendliness</li>
              <li>Menu variety and presentation</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default FeedBack;
