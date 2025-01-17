import React from "react";

const SolutionsPage = () => {
  const solutions = [
    {
      category: "Distribution",
      items: [
        "Safety Supplies/PPE",
        "In-Plant Service Center",
        "Garment Customizations",
        "Mill, Tool and Welding Supplies",
        "Vending Solutions",
      ],
    },
    {
      category: "Medical Management",
      items: [
        "Emergency Medical Management",
        "COVID-19 Management",
        "On-site Medical Services",
        "Health Compliance Officers",
      ],
    },
    {
      category: "Specialized Safety Personnel",
      items: [
        "Safety Attendants",
        "Safety Technicians",
        "Safety Supervisors",
        "Permit Writers",
      ],
    },
    {
      category: "Gas Detection Services",
      items: [
        "Gas Detection Equipment Rental and Sales",
        "Gas Detection Equipment Inspection, Testing and Maintenance",
        "Calibration Services",
      ],
    },
    {
      category: "Industrial Communication",
      items: [
        "2-way Radio Equipment Rental and Sales",
        "Communications Equipment Testing, Repair and Maintenance",
        "Motorola Communication Consulting & System Design",
      ],
    },
    {
      category: "Fire Protection",
      items: [
        "Fixed Systems and Portable Fire Extinguisher Services and Sales",
        "Fire Protection Engineering, Design and Installation",
        "Fire Protection Inspections, Testing and Maintenance",
      ],
    },
    {
      category: "Turnarounds",
      items: [
        "Technical Safety Equipment Rental and Sales",
        "Grade D Breathing Air Services",
        "Trained On-Site Technicians for Turnaround Safety Support",
      ],
    },
    {
      category: "Training",
      items: [
        "Safety Compliance Training",
        "Safety Equipment Care and Use Training",
        "Confined Space Entry Training",
      ],
    },
    {
      category: "Compliance",
      items: [
        "Safety Compliance Inspection",
        "Regulatory Compliance Consults",
        "Industrial Rescue Services",
        "Emergency Response Planning",
      ],
    },
    {
      category: "Fall Protection",
      items: [
        "Fall Protection Systems",
        "Fall Protection Equipment Rental and Sales",
        "Fall Protection Inspections, Testing and Maintenance",
      ],
    },
    {
      category: "Professional Safety Solutions",
      items: [
        "Industrial Hygiene Services/Certified Industrial Hygienist",
        "Industrial Hygiene Compliance",
        "Workplace Exposure Consulting",
      ],
    },
    {
      category: "Respiratory Protection",
      items: [
        "Respiratory Protection Equipment Rental and Sales",
        "Respiratory Protection Equipment Inspection, Testing and Maintenance",
        "Grade D Breathing Air Systems",
      ],
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <h1 className="text-4xl font-bold">Our Solutions</h1>
        <p className="text-lg mt-4">
          Explore our comprehensive range of safety solutions designed to meet
          your unique needs.
        </p>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold border-b-2 border-yellow-500 pb-2 mb-4">
                  {solution.category}
                </h2>
                <ul className="space-y-2 text-gray-700">
                  {solution.items.map((item, idx) => (
                    <li key={idx} className="list-disc list-inside">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
