const SolutionSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Comprehensive Safety Solutions
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Total Safety services aerospace, petrochemical refining, utilities,
          transportation, automotive, mining, production, industrial, and
          commercial sectors.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 p-12 m-auto">
        {[
          {
            title: "Rental & Compliance Solutions",
            description:
              "With our catalog of 130,000+ supplies, equipment, training, and compliance services, we have your safety rental needs covered.",
            image:
              "https://www.totalsafety.com/wp-content/themes/totalsafety/images/safety-equip-rental-compliance.jpg?v2",
          },
          {
            title: "Supplies, Equipment & Distribution",
            description:
              "Purchase from one of the largest safety and MRO supplies and equipment catalogs.",
            image:
              "https://www.totalsafety.com/wp-content/themes/totalsafety/images/supplies-and-solutions.jpg",
          },
          {
            title: "Specialized Safety Personnel Solutions",
            description:
              "Trust our trained, experienced safety supervision and qualified safety attendants.",
            image:
              "https://www.totalsafety.com/wp-content/themes/totalsafety/images/safety-professionals.jpg",
          },
        ].map((solution, index) => (
          <div key={index} className="text-center">
            <img
              src={solution.image}
              alt={solution.title}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">{solution.title}</h3>
            <p>{solution.description}</p>
            <a href="#" className="text-yellow-500">
              Learn More
            </a>
          </div>
        ))}
      </div>
      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl italic font-semibold text-gray-700 mb-4">
            “...to ensure the safe Wellbeing of Workers Worldwide.”
          </h2>
        </div>
      </section>
    </div>
  );
};
