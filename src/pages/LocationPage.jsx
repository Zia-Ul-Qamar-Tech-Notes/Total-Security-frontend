import React from "react";

const LocationPage = () => {
  return (
    <div className="bg-white text-black">
      {/* Header Section */}
      <section className="text-center py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Find a Total Safety Location
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Find a location near you. If there is not a location nearby, don’t
            worry, we still have you covered.
          </p>
          <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500">
            Contact Us
          </button>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 bg-white border-t border-b">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <input
              type="text"
              placeholder="Address, City, or Postal code"
              className="w-full md:w-1/2 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="ml-2 bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500">
              Search
            </button>
          </div>
          <div className="text-center mt-4">
            <button className="text-yellow-400 font-bold hover:underline">
              Use My Current Location
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative">
        <div className="w-full h-96 bg-gray-200">
          {/* Placeholder for Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093945!2d144.9537363156861!3d-37.816279179751555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577ae0405dac73f!2sGoogle!5e0!3m2!1sen!2sus!4v1615995944691!5m2!1sen!2sus"
            title="Google Map"
            className="w-full h-full border-none"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Request Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Request a Total Safety Storefront at Your Job Site
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Total Safety offers onsite storefronts for easy access to safety
            supplies and equipment with rental and purchasing options.
          </p>
          <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
