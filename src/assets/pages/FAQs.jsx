import React from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Choose your favorite items from our menu, then contact us through the contact page or call our phone line for custom orders.",
  },
  {
    question: "Can I request a custom cake design?",
    answer:
      "Yes! We create custom cakes for birthdays, weddings, and special events. Share your design ideas when you contact us.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Saturday from 7:00am to 8:00pm, and Sunday from 9:00am to 5:00pm.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Delivery is available for select locations around Lekki. Please reach out to confirm delivery availability for your address.",
  },
  {
    question: "How far in advance should I order?",
    answer:
      "For custom cakes and large orders, we recommend ordering at least 2-3 days in advance to ensure the best experience.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function FAQs() {
  return (
    <motion.main
      className="min-h-screen bg-[#fdf7eb] py-20 px-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.16 } },
      }}
    >
      <motion.div
        className="max-w-300 mx-auto text-center mb-16"
        variants={cardVariants}
      >
        <p className="text-[#2e5996] font-semibold tracking-[0.24em] uppercase text-sm">
          Got Questions?
        </p>
        <h1 className="text-4xl font-bold text-[#1f1f1f] mt-4">
          Frequently Asked Questions
        </h1>
        <p className="text-[#555555] mt-4 text-lg max-w-2xl mx-auto">
          Everything you need to know about ordering, pickup, and what makes
          Bakerz Bite special.
        </p>
      </motion.div>

      <div className="max-w-300 mx-auto grid gap-5">
        {faqs.map((item, index) => (
          <motion.div
            key={item.question}
            className="rounded-4xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <div className="flex items-center gap-3 mb-4 text-[#2e5996]">
              <FaQuestionCircle />
              <h3 className="text-2xl font-semibold">{item.question}</h3>
            </div>
            <p className="text-[#555555] leading-7">{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}

export default FAQs;
