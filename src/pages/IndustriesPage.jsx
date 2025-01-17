import React from "react";

const IndustriesPage = () => {
  const industries = [
    {
      title: "Power Utilities",
      image:
        "https://www.totalsafety.com/wp-content/uploads/2021/03/power-utilities-1-e1667327868753.jpg",
      items: ["Power Utilities", "Renewables"],
    },
    {
      title: "Infrastructure",
      image:
        "https://www.totalsafety.com/wp-content/uploads/2021/03/infrastructure-1-e1667327895714.jpg",
      items: ["Bridges & Roadways", "Construction", "Telecommunications"],
    },
    {
      title: "Energy",
      image:
        "https://www.totalsafety.com/wp-content/uploads/2021/03/energy-e1667327797917.jpg",
      items: [
        "Exploration & Production",
        "Marine / Offshore",
        "Midstream",
        "Mining",
        "Petrochemical",
        "Refining",
      ],
    },
    {
      title: "Transportation",
      image:
        "https://www.totalsafety.com/wp-content/uploads/2021/03/transportation-e1667327776908.jpg",
      items: ["Aerospace & Aviation", "Automotive", "Railway"],
    },
    {
      title: "Manufacturing, Food, & Beverage",
      image:
        "https://www.totalsafety.com/wp-content/uploads/2021/03/mfb-e1667327830198.jpg",
      items: ["Food & Beverage", "Manufacturing"],
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <h1 className="text-4xl font-bold">Industries We Serve</h1>
        <p className="text-lg mt-4">
          Explore the industries we serve, providing tailored solutions to meet
          your safety and operational needs.
        </p>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Image */}
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-40 object-cover"
                />
                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-yellow-500 pb-2 mb-4">
                    {industry.title}
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    {industry.items.map((item, idx) => (
                      <li key={idx} className="list-disc list-inside">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
