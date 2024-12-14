import { FaLaptop, FaMoneyBillAlt, FaTruck } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-[var(--main-color)]">
          Key Features
        </h2>
        <p className="text-lg text-gray-700">
          Why choose QuickRent for your gadget rental needs?
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-4">
          <FaLaptop className="text-[var(--main-color)] text-4xl mx-auto" />
          <h3 className="text-xl font-semibold">Wide Variety of Gadgets</h3>
          <p className="text-gray-600">
            Choose from a range of gadgets for rent, from laptops to cameras and
            more!
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-4">
          <FaMoneyBillAlt className="text-[var(--main-color)] text-4xl mx-auto" />
          <h3 className="text-xl font-semibold">Affordable Pricing</h3>
          <p className="text-gray-600">
            Get high-quality gadgets at budget-friendly rental rates. Rent more,
            spend less!
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-4">
          <FaTruck className="text-[var(--main-color)] text-4xl mx-auto" />
          <h3 className="text-xl font-semibold">Quick Delivery</h3>
          <p className="text-gray-600">
            Fast and reliable delivery right to your doorstep, wherever you are.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
