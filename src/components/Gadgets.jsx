const GadgetListing = () => {
    const gadgets = [
      {
        name: "Dell XPS 15",
        price: "$25/day",
        features: ["16GB RAM", "512GB SSD", "Intel i7 Processor"],
        image: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_640.jpg",
      },
      {
        name: "Canon DSLR Camera",
        price: "$20/day",
        features: ["24MP", "4K Video", "18-55mm Lens"],
        image: "https://cdn.pixabay.com/photo/2014/08/29/14/53/camera-431119_640.jpg",
      },
      {
        name: "iPhone 14",
        price: "$30/day",
        features: ["128GB Storage", "A15 Bionic Chip", "Super Retina Display"],
        image: "https://cdn.pixabay.com/photo/2021/09/25/17/43/iphone-13-6655517_640.jpg",
      },
    ];
  
    return (
      <section id="gadgets" className="py-16 bg-gray-100">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-[var(--main-color)]">Available Gadgets for Rent</h2>
          <p className="text-lg text-gray-700">Discover top-notch gadgets tailored to your needs!</p>
        </div>
  
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          {gadgets.map((gadget, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={gadget.image}
                alt={gadget.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-[var(--main-color)] mb-2">{gadget.name}</h3>
              <p className="text-lg text-gray-600 mb-2 font-semibold">{gadget.price}</p>
              <ul className="space-y-1 text-gray-600 mb-4">
                {gadget.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[var(--main-color)]">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-2 px-4 bg-[var(--main-color)] text-white font-semibold rounded-md transition-all duration-300 hover:bg-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--main-color)] active:scale-95"
              >
                Rent Now
              </button>
            </div>
          ))}
        </div>
  
        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            Want to share your gadgets? List them here!
          </h3>
          <a
            href="#list-your-gadget"
            className="inline-block py-3 px-8 bg-[var(--main-color)] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--main-color)] active:scale-95"
          >
            List Your Gadget
          </a>
        </div>
      </section>
    );
  };
  
  export default GadgetListing;
  