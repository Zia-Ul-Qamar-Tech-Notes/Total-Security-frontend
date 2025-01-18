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
                            to="/login"
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
                            to="/register"
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
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-500 font-medium"
            >
              Rent
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-500 font-medium"
            >
              Buy
            </a>
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
            <a
              href="#"
              className="block text-gray-700 hover:text-yellow-500 px-4 py-2"
            >
              Rent
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-yellow-500 px-4 py-2"
            >
              Buy
            </a>
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
