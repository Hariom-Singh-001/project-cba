import { Link } from 'react-router-dom';
import { Droplet, Calendar, MapPin, Clock, Phone } from 'lucide-react';

function DonateBlood() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Droplet className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">CBA</span>
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Donate Blood, Save Lives
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every donation can save up to three lives. Join our community of heroes
            and make a difference today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Donate Blood?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Droplet className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Save Lives</h3>
                  <p className="text-gray-600">
                    One donation can save up to three lives in emergency situations
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Droplet className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Health Benefits</h3>
                  <p className="text-gray-600">
                    Regular donation can help maintain healthy iron levels and reduce
                    cardiovascular risk
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Droplet className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Free Health Check</h3>
                  <p className="text-gray-600">
                    Get a mini health screening including blood pressure, hemoglobin,
                    and disease markers
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Eligibility Criteria
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                Age: 18-65 years old
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                Weight: At least 50 kg (110 lbs)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                Hemoglobin: Minimum 12.5 g/dL
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                Good general health condition
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                No recent illness or medication
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                At least 3 months since last donation
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Upcoming Blood Donation Camps
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                location: 'City Hospital',
                address: '123 Main Street',
                date: 'March 15, 2024',
                time: '9:00 AM - 5:00 PM',
              },
              {
                location: 'Community Center',
                address: '456 Oak Avenue',
                date: 'March 20, 2024',
                time: '10:00 AM - 4:00 PM',
              },
              {
                location: 'University Campus',
                address: '789 College Road',
                date: 'March 25, 2024',
                time: '8:00 AM - 3:00 PM',
              },
            ].map((camp, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  {camp.location}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span>{camp.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-red-600" />
                    <span>{camp.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-600" />
                    <span>{camp.time}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Donate?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contact us to schedule your blood donation appointment
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:1-800-DONATE"
              className="flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call: 1-800-DONATE
            </a>
            <button className="bg-red-800 text-white px-8 py-3 rounded-lg hover:bg-red-900 transition-colors font-semibold">
              Schedule Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateBlood;
