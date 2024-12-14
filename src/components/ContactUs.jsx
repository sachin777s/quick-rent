const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[var(--main-color)] text-center mb-6">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          We'd love to hear from you! Fill out the form below or visit us at our
          office.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <form
            className="bg-white p-8 rounded-lg shadow-lg"
            action="#"
            method="POST"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[var(--main-color)] text-white font-semibold rounded-lg shadow-md hover:bg-[var(--hover-color)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--main-color)] active:scale-95"
            >
              Send Message
            </button>
          </form>

          <div className="h-full rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.272345590428!2d13.384993415924344!3d52.507541149379566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c17c9a55b7%3A0x0!2zNTLCsDMwJzI3LjMiTiAxM8KwMjMnMTIuOCJF!5e0!3m2!1sen!2sus!4v1631572574673!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="h-[300px] lg:h-full border-0"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
