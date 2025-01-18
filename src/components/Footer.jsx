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
