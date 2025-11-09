import { Link } from 'react-router-dom';
import { Stethoscope, Package, Search, ShoppingCart, Truck, Shield } from 'lucide-react';

function MedicalEquipment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Stethoscope className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">CBA</span>
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Medical Equipment & Supplies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find, rent, or donate medical equipment. Help bridge the gap in healthcare
            accessibility.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-16">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for medical equipment..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
              <option>All Categories</option>
              <option>Mobility Aids</option>
              <option>Respiratory Equipment</option>
              <option>Diagnostic Tools</option>
              <option>Hospital Furniture</option>
              <option>Home Care Equipment</option>
            </select>
            <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Search
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <ShoppingCart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Buy Equipment</h3>
            <p className="text-gray-600 mb-6">
              Purchase new or refurbished medical equipment at affordable prices
            </p>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Browse Store
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <Package className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Rent Equipment</h3>
            <p className="text-gray-600 mb-6">
              Rent medical equipment for short-term needs at reasonable rates
            </p>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              View Rentals
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
              <Truck className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Donate Equipment</h3>
            <p className="text-gray-600 mb-6">
              Donate unused medical equipment to help those in need
            </p>
            <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
              Donate Now
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Equipment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Wheelchair - Manual',
                category: 'Mobility Aid',
                price: '$250',
                rental: '$25/week',
                image: 'https://images.pexels.com/photos/4587987/pexels-photo-4587987.jpeg',
                inStock: true,
              },
              {
                name: 'Hospital Bed',
                category: 'Hospital Furniture',
                price: '$1,200',
                rental: '$80/week',
                image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
                inStock: true,
              },
              {
                name: 'Oxygen Concentrator',
                category: 'Respiratory',
                price: '$1,800',
                rental: '$120/week',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
                inStock: true,
              },
              {
                name: 'Blood Pressure Monitor',
                category: 'Diagnostic',
                price: '$80',
                rental: '$10/week',
                image: 'https://images.pexels.com/photos/7108332/pexels-photo-7108332.jpeg',
                inStock: true,
              },
              {
                name: 'Walking Frame',
                category: 'Mobility Aid',
                price: '$120',
                rental: '$15/week',
                image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg',
                inStock: true,
              },
              {
                name: 'Patient Lift',
                category: 'Hospital Furniture',
                price: '$2,500',
                rental: '$150/week',
                image: 'https://images.pexels.com/photos/6303577/pexels-photo-6303577.jpeg',
                inStock: false,
              },
              {
                name: 'CPAP Machine',
                category: 'Respiratory',
                price: '$900',
                rental: '$60/week',
                image: 'https://images.pexels.com/photos/7108331/pexels-photo-7108331.jpeg',
                inStock: true,
              },
              {
                name: 'Nebulizer',
                category: 'Respiratory',
                price: '$150',
                rental: '$18/week',
                image: 'https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg',
                inStock: true,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {!item.inStock && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Out of Stock
                    </div>
                  )}
                  {item.inStock && (
                    <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Available
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="font-semibold text-green-600">
                      Buy: {item.price}
                    </span>
                    <span className="text-blue-600">Rent: {item.rental}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className={`flex-1 py-2 rounded-lg font-semibold ${
                        item.inStock
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      } transition-colors`}
                      disabled={!item.inStock}
                    >
                      Buy
                    </button>
                    <button
                      className={`flex-1 py-2 rounded-lg font-semibold ${
                        item.inStock
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      } transition-colors`}
                      disabled={!item.inStock}
                    >
                      Rent
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Shield className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Quality Assured
            </h3>
            <p className="text-gray-600">
              All equipment is thoroughly inspected, sanitized, and certified before
              delivery
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <Truck className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Free Delivery</h3>
            <p className="text-gray-600">
              Get free delivery and installation for orders above $500 in your area
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <Package className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Returns</h3>
            <p className="text-gray-600">
              30-day return policy with full refund for purchased equipment
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Finding Equipment?</h2>
          <p className="text-lg mb-6 opacity-90">
            Our healthcare equipment specialists are here to assist you
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Contact Support
            </button>
            <button className="bg-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-900 transition-colors font-semibold">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalEquipment;
