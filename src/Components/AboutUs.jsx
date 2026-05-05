import React from 'react'

function AboutUs() {
  return (
    <section className="max-w-[1200px] mx-auto flex items-center gap-20 p-10 ">
      <div className="w-full">
        <h2 className="font-semibold text-3xl text-[#000000]">Our Story</h2>
        <hr className="border-2 border-[#2e5996] w-20 mt-1 mb-10" />
        <p className="mb-2 text-[#555555] text-lg leading-5">
          Bakerz Bite was born out of a simple belief — that great baking should
          be accessible to everyone. What started as a small home kitchen has
          grown into one of Lagos' most-loved bakeries, serving hundreds of
          smiling customers every single day.
        </p>
        <p className=" text-[#555555] text-lg leading-5">
          We are passionate about quality. Every item on our menu is handcrafted
          using only the finest ingredients — real butter, fresh cream,
          unbleached flour, and natural flavours. No artificial preservatives.
          No compromise.
        </p>
        <p className="mb-2 text-[#555555] text-lg leading-5">
          Whether you're celebrating a birthday, treating yourself after a long
          day, or just passing through — there is always something warm and
          delicious waiting for you at Bakerz Bite.
        </p>
        <button className=" text-white bg-[#2e5996] rounded-xl p-1 text-[15px] px-9 font-semibold mt-5 flex items-center gap-2">
          Learn More<i className="fa-solid fa-arrow-right font-light "></i>
        </button>
      </div>
      <div className="w-full bg-[url('/public/baker.jpg')] bg-cover bg-center rounded-t-4xl rounded-bl-4xl h-100 border-5 border-white shadow-2xl "></div>
    </section>
  );
}

export default AboutUs