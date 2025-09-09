import { Cormorant_Garamond } from "next/font/google";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin, 'italics"],
});

const Subscription = () => {
  return (
    <section className="w-full flex justify-center py-24">
      <div className="w-9/10 lg:w-4/5 xl:w-3/5 border-gray-400 border rounded p-15 relative">
        <h2 className={`text-4xl font-thin text-center ${comorant.className}`}>
          Why We're the Design Partner Top Brands Trust
        </h2>
        <p className="mt-5 text-xl font-thin text-center">
          Join innovators who receive our exclusive insights. Every
          month, we share behind-the-scenes case studies of how we transformed
          brands like Smart Interiors, proven frameworks for digital experience
          design and merging trends decoded for business impact
        </p>
        <form className="mt-10 flex gap-3 justify-center">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address..."
            className="py-3 px-6 border border-gray-400 rounded"
            required
          />
          <button className="bg-[#000B18] text-white py-3 px-6 cursor-pointer rounded">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
