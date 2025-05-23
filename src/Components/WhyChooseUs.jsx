import { FaHeadset, FaDollarSign, FaSuitcaseRolling } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-800 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="flex flex-col md:flex-row justify-around gap-6 text-center">
        <div className="flex flex-col items-center">
          <FaHeadset className="text-4xl text-blue-500 mb-2" />
          <span>24/7 Support</span>
        </div>
        <div className="flex flex-col items-center">
          <FaDollarSign className="text-4xl text-green-500 mb-2" />
          <span>Best Price Guarantee</span>
        </div>
        <div className="flex flex-col items-center">
          <FaSuitcaseRolling className="text-4xl text-yellow-400 mb-2" />
          <span>Handpicked Tours</span>
        </div>
      </div>
    </section>
  );
}
