import React from "react";

const ContactUsPage = () => {
  return (
    <div className="bg-white text-black">
      {/* Header Section */}
      <section className="text-center py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">We’re Ready to Help</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            We’re here to assist you in setting up eCommerce, RFP, RFI, or
            existing services.
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500">
              Find a Location
            </button>
            <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500">
              Call Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="tel"
                placeholder="Phone*"
                className="p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="text"
                placeholder="Company"
                className="p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Title"
                className="p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="City"
                className="p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <select
                className="p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              >
                <option value="">Country*</option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
                <option value="UK">United Kingdom</option>
              </select>
              <input
                type="text"
                placeholder="State/Province"
                className="p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <select
              className="p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            >
              <option value="">How can we help you?*</option>
              <option value="Support">Support</option>
              <option value="Sales">Sales</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              placeholder="Comments*"
              className="p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="5"
              required
            ></textarea>
            <div className="flex items-center">
              <input type="checkbox" id="recaptcha" className="mr-2" required />
              <label htmlFor="recaptcha" className="text-gray-700">
                I’m not a robot
              </label>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Regional Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Regional Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold">United States</h3>
              <p>1 (888) 328-6825</p>
            </div>
            <div>
              <h3 className="font-bold">Canada</h3>
              <p>1 (780) 400-9402</p>
            </div>
            <div>
              <h3 className="font-bold">United Kingdom</h3>
              <p>44-844-3814550</p>
            </div>
            {/* Add other regions similarly */}
          </div>
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center gap-8">
          <div className="text-center">
            <h3 className="font-bold text-lg">Work With Us</h3>
            <p className="text-gray-700 mb-4">
              We are looking for individuals with an uncompromising commitment
              to integrity and safety.
            </p>
            <button className="bg-black text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-800">
              Careers
            </button>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg">Become A Vendor</h3>
            <p className="text-gray-700 mb-4">
              We partner with the best safety technology, supplies, and
              equipment brands to keep workers safe.
            </p>
            <button className="bg-black text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-800">
              Become A Vendor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
