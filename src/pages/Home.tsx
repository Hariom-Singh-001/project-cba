import { Link } from 'react-router-dom';
import { Droplet, Heart, Stethoscope, ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">Community Blood Alliance</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Home
              </Link>
              <Link to="/donate-blood" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Donate Blood
              </Link>
              <Link to="/raise-funds" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Raise Funds
              </Link>
              <Link to="/medical-equipment" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Medical Equipment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Saving Lives Together
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our community in making healthcare accessible for everyone through blood donation, fundraising, and medical equipment support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/donate-blood" className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg">
              Get Started
            </Link>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-red-600 hover:text-red-600 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Link
            to="/donate-blood"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 group-hover:bg-red-600 transition-colors">
              <Droplet className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Donate Blood</h2>
            <p className="text-gray-600 mb-6">
              Every blood donation can save up to three lives. Find nearby donation camps and register to become a hero.
            </p>
            <div className="flex items-center text-red-600 font-semibold group-hover:gap-2 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>

          <Link
            to="/raise-funds"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 transition-colors">
              <Heart className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Raise Funds</h2>
            <p className="text-gray-600 mb-6">
              Start a fundraising campaign or support others in need of medical treatment and care.
            </p>
            <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>

          <Link
            to="/medical-equipment"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-green-600 transition-colors">
              <Stethoscope className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Equipment</h2>
            <p className="text-gray-600 mb-6">
              Buy, rent, or donate medical equipment to bridge the gap in healthcare accessibility.
            </p>
            <div className="flex items-center text-green-600 font-semibold group-hover:gap-2 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl shadow-xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Make a Difference Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of compassionate individuals who are making healthcare accessible for everyone in our community.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Blood Donations</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">$2M+</div>
              <div className="text-lg opacity-90">Funds Raised</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">Equipment Donated</div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-red-600" />
                <span className="text-xl font-bold">CBA</span>
              </div>
              <p className="text-gray-400">
                Making healthcare accessible for everyone through community support.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/donate-blood" className="hover:text-white transition-colors">Donate Blood</Link></li>
                <li><Link to="/raise-funds" className="hover:text-white transition-colors">Raise Funds</Link></li>
                <li><Link to="/medical-equipment" className="hover:text-white transition-colors">Medical Equipment</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Community Blood Alliance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
