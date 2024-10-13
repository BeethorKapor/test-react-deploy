function App() {
  return (
    <>
      <div className="bg-white">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-gray-900 text-white">
          <h1 className="text-2xl font-bold">My Website</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center h-screen bg-blue-500 text-white">
          <h2 className="text-5xl font-bold mb-4">Welcome to Our Website</h2>
          <p className="text-lg mb-6">
            We provide the best solutions for your business
          </p>
          <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100">
            Get Started
          </button>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-100 text-gray-900">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-semibold text-center mb-12">
              Our Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 className="text-xl font-semibold mb-4">Feature One</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 className="text-xl font-semibold mb-4">Feature Two</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 className="text-xl font-semibold mb-4">Feature Three</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-gray-900 text-white text-center">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
