import React from "react";

function Offers() {
  return (
    <section className="bg-[#fffb1917]">
      <section className="max-w-300 mx-auto p-10">
        <div className=" max-w-125 mx-auto flex flex-col items-center justify-center text-center  ">
          {" "}
          <h2 className="text-3xl font-semibold text-[#000000] mb-2 text-center ">
            This Week's Special Offers
          </h2>
          <hr className="border-2 border-[#2e5996] w-40 mt-1 mb-2" />
          <p className="text-lg text-[#555555] text-center">
            Don't miss out - these deals are available in-store for a limited
            time only.
          </p>
        </div>

        <div className="flex gap-5  mt-10">
          <div className="rounded-2xl bg-transperent p-5 w-full border border-[#2e5996]">
            <h3 className="text-2xl font-medium text-[#2e5996]">
              20% Off All Cakes
            </h3>
            <p className="text-lg text-[#555555] mt-2">
              Celebrate anything this weekk! Get 20% off on all our signature
              cakes. Valid Monday-Friday.
            </p>
          </div>
          <div className="rounded-2xl bg-transperent p-5 w-full border border-[#2e5996]">
            <h3 className="text-2xl font-medium text-[#2e5996]">
              Buy One Get One Free — Pastries
            </h3>
            <p className="text-lg text-[#555555] mt-2">
              Purchase any pastry and get a second one absolutely free. Today
              only, while stocks last.
            </p>
          </div>
          <div className="rounded-2xl bg-transperent p-5 w-full border border-[#2e5996]">
            <h3 className="text-2xl font-medium text-[#2e5996]">
              Free Drink With Orders Over ₦10,000
            </h3>
            <p className="text-lg text-[#555555] mt-2">
              Spend ₦10,000 or more in a single visit and enjoy a complimentary
              beverage on us.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Offers;
