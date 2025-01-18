const FeatureSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Worker Safety Technology</h2>
        <p className="text-lg max-w-2xl mx-auto">
          State-of-the-art safety monitoring software, systems, and equipment
          that centralize, analyze, and report data in real-time, saving lives
          and streamlining costs.
        </p>
      </div>
      <div className="grid md:grid-cols-1 gap-8 p-8">
        {[
          {
            title: "SmartMonitor",
            description:
              "Smarter Digital Monitoring for Workplace Safety & Efficiency.",
            image:
              "https://www.totalsafety.com/wp-content/themes/totalsafety/images/TS_SafeTek_Homepage_SmartMonitor.jpg?v2",
          },
          {
            title: "Guard",
            description: "Advanced Worker Safety Technology.",
            image:
              "https://www.totalsafety.com/wp-content/themes/totalsafety/images/TS_SafeTek_Homepage_Shield.jpg?v2",
          },
        ].map((feature, index) => (
          <div
            key={index}
            ref={ref}
            className={`flex flex-col md:flex-row items-center gap-4 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } ${inView ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full md:w-1/2 object-cover rounded-lg"
            />
            <div className="text-center w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="mb-4">{feature.description}</p>
              <a href="#" className="text-yellow-500">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
