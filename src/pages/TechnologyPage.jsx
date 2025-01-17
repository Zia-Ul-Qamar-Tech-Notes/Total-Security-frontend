import React from "react";

const TechnologyPage = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Industrial Safety Technology
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Our solutions empower your workplace with the technology, equipment,
            and compliance to keep your workers protected and connected.
            State-of-the-art safety monitoring software and systems report data
            in real-time, saving lives and streamlining costs.
          </p>
          <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500">
            Get A Quote
          </button>
        </div>
      </section>

      {/* Image Section */}
      <div className="relative">
        <img
          src="https://www.totalsafety.com/wp-content/uploads/2021/03/Desktop_banner_Connected-Solutions-SafeTek-1.jpg"
          alt="Industrial Safety"
          className="w-full object-cover"
        />
      </div>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Services, Equipment Rental & Purchasing
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-12">
            Total Safety solutions integrate advanced technology, specialized
            equipment, compliance resources, and safety services tailored to the
            industry. Discover state-of-the-art monitoring systems, software,
            and services.
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="flex flex-col md:flex-row items-center bg-white shadow-md p-6 rounded-lg">
              <img
                src="https://www.totalsafety.com/wp-content/uploads/2021/03/TS_Desktop_Feautured_Banner_SafeTek-Smart-Monitoring.jpg"
                alt="SmartMonitor"
                className="w-full md:w-1/2 object-cover rounded-lg"
              />
              <div className="mt-4 md:mt-0 md:ml-6">
                <h3 className="text-xl font-bold mb-2">SmartMonitor</h3>
                <p className="text-gray-600 mb-4">
                  Centralized, real-time confined space monitoring for enhanced
                  worker safety.
                </p>
                <a
                  href="#"
                  className="text-yellow-400 font-semibold hover:underline"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
            {/* Service 2 */}
            <div className="flex flex-col md:flex-row items-center bg-white shadow-md p-6 rounded-lg">
              <img
                src="https://www.totalsafety.com/wp-content/uploads/2021/03/TS_Desktop_Feautured_Banner_SafeTek-Smart-Monitoring.jpg"
                alt="Guard"
                className="w-full md:w-1/2 object-cover rounded-lg"
              />
              <div className="mt-4 md:mt-0 md:ml-6">
                <h3 className="text-xl font-bold mb-2">Guard</h3>
                <p className="text-gray-600 mb-4">
                  Advanced worker safety systems ensuring compliance and
                  productivity.
                </p>
                <a
                  href="#"
                  className="text-yellow-400 font-semibold hover:underline"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl italic font-semibold text-gray-700 mb-4">
            “...to ensure the safe Wellbeing of Workers Worldwide.”
          </h2>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Talk to an Expert</h2>
          <p className="text-gray-600 mb-4">(888) 328-6825</p>
          <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500">
            Get A Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
