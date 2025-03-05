import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo and Login/Register */}
        <div className="flex items-center justify-between h-16 border-b">
          {/* Logo */}
          <Link to="/home" className="flex-shrink-0">
            <img
              src="https://www.totalsafety.com/wp-content/themes/totalsafety/images/totalsafety-logo.svg"
              alt="Total Safety Logo"
              className="h-10"
            />
          </Link>

          {/* Login/Register Dropdown */}
          <div className="relative">
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button className="flex items-center text-gray-700 hover:text-yellow-500">
                    Login / Register{" "}
                    <ChevronDownIcon className="h-4 w-4 ml-1" />
                  </Menu.Button>
                  <Transition
                    show={open}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md focus:outline-none"
                    >
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="https://mern-store-cbfw.vercel.app/login"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Login
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="https://mern-store-cbfw.vercel.app/signup"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Create Account
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>

        {/* Bottom Section: Navbar Links and Contact Us */}
        <div className="flex items-center justify-between h-16">
          {/* Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="https://mern-store-cbfw.vercel.app/"
              target="_blank"
              className="text-gray-700 hover:text-yellow-500 font-medium"
            >
              Store
            </Link>

            <Link
              to="/solutions"
              className="text-gray-700 hover:text-yellow-500 font-medium"
            >
              Solutions
            </Link>
            <Link
              to="/technology"
              className="text-gray-700 hover:text-yellow-500 font-medium"
            >
              Technology
            </Link>
            <Link
              to="/industries"
              className="text-gray-700 hover:text-yellow-500 font-medium"
            >
              Industries
            </Link>
            <Link
              to="/locations"
              className="text-gray-700 hover:text-yellow-500 font-medium"
            >
              Locations
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-yellow-500 font-medium"
            >
              About
            </Link>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-500 font-medium"
            >
              Careers
            </a>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <Link
              to="https://mern-store-cbfw.vercel.app/"
              target="_blank"
              className="block text-gray-700 hover:text-yellow-500 px-4 py-2"
            >
              Store
            </Link>

            <Link
              to="/solutions"
              className="block text-gray-700 hover:text-yellow-500 px-4 py-2"
            >
              Solutions
            </Link>
            <Link
              to="/technology"
              className="block text-gray-700 hover:text-yellow-500 px-4 py-2"
            >
              Technology
            </Link>
            <Link
              to="/industries"
              className="block text-gray-700 hover:text-yellow-500 px-4 py-2"
            >
              Industries
            </Link>
            <Link
              to="/locations"
              className="block text-gray-700 hover:text-yellow-500 px-4 py-2"
            >
              Locations
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-yellow-500 px-4 py-2"
            >
              About
            </Link>
            <a
              href="#"
              className="block text-gray-700 hover:text-yellow-500 px-4 py-2"
            >
              Careers
            </a>
            <Link
              to="/contact"
              className="block bg-yellow-500 text-white px-4 py-2 mt-4 text-center rounded-md hover:bg-yellow-600"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen flex items-center justify-center">
      <video
        poster="https://d1jxx7l2ar0hzb.cloudfront.net/homepage_video_poster.jpg?v2"
        autoPlay
        loop
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d1jxx7l2ar0hzb.cloudfront.net/homepage_video_v4_1080.mp4"
          type="video/mp4"
        />
      </video>
      <div className="relative text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          When Safety Matters, We’re Ready.
        </h1>
        <p className="text-lg mb-6">
          Advanced Safety Solutions. Technology. Equipment. Compliance. People.
        </p>
        <div className="space-x-4">
          <button className="bg-gray-800 py-2 px-6 rounded text-white hover:bg-gray-700">
            Get Started
          </button>
          <button className="bg-yellow-500 py-2 px-6 rounded text-white hover:bg-yellow-600">
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

// Feature Section Component
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

// Solution Section Component
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
// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 text-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-yellow-500 text-3xl lg:text-xl font-bold mb-4">
              When safety matters, we’re ready.
            </h2>
            <img
              src="https://www.totalsafety.com/wp-content/themes/totalsafety/images/totalsafety-logo.svg"
              alt="Total Safety Logo"
              className="mb-4"
            />
            <p className="text-gray-400">(888) 328-6825</p>
            <p className="text-gray-400 mb-4">
              Europe Service and Product Catalog
            </p>
            <p className="text-gray-400">
              Download Total Safety’s Safety Moments Mobile App
            </p>
            <div className="flex gap-4 mt-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_%28black%29.png"
                alt="App Store"
                className="h-10"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  RapidH2O
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Total Safety 2023 ESG Report
                </a>
              </li>
            </ul>

            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Locations
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mb-0">
            <img
              src="https://www.totalsafety.com/wp-content/themes/totalsafety/images/totalsafety-logo.svg"
              alt="Footer Logo"
              className="h-10 mb-4"
            />
            <p className="text-gray-400 text-xs">America’s Safest Company</p>
          </div>

          <div className="flex gap-4">
            <FaFacebook className="text-gray-400 hover:text-white text-2xl" />
            <FaLinkedin className="text-gray-400 hover:text-white text-2xl" />
            <FaTwitter className="text-gray-400 hover:text-white text-2xl" />
            <FaYoutube className="text-gray-400 hover:text-white text-2xl" />
          </div>

          <div className="text-gray-400 text-xs text-center lg:text-right">
            <p className="mb-2">
              Legal Terms & Notices | Privacy Policy | Sitemap
            </p>
            <p>© 2025 Total Safety U.S., Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, HeroSection, FeatureSection, SolutionSection, Footer };
