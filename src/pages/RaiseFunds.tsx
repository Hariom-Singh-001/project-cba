import { Link } from 'react-router-dom';
import { Heart, DollarSign, Users, TrendingUp, Target, Award } from 'lucide-react';

function RaiseFunds() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">CBA</span>
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Raise Funds for Healthcare
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start a fundraising campaign or support ongoing initiatives to help those
            in need of medical treatment and care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Start a Campaign</h3>
            <p className="text-gray-600 mb-6">
              Create a fundraising campaign for yourself or someone in need of medical
              assistance
            </p>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Start Fundraising
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Support Others</h3>
            <p className="text-gray-600 mb-6">
              Browse and contribute to active fundraising campaigns that need your
              support
            </p>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Browse Campaigns
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Track Progress</h3>
            <p className="text-gray-600 mb-6">
              Monitor your campaign's progress and see the impact of your contributions
            </p>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              View Dashboard
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Active Fundraising Campaigns
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Help Sarah Fight Cancer',
                category: 'Cancer Treatment',
                raised: 45000,
                goal: 100000,
                donors: 324,
                daysLeft: 15,
              },
              {
                name: 'Emergency Heart Surgery for John',
                category: 'Heart Surgery',
                raised: 78000,
                goal: 150000,
                donors: 512,
                daysLeft: 8,
              },
              {
                name: 'Support Emily\'s Kidney Transplant',
                category: 'Organ Transplant',
                raised: 120000,
                goal: 200000,
                donors: 687,
                daysLeft: 22,
              },
              {
                name: 'Medical Care for Accident Victim',
                category: 'Emergency Care',
                raised: 32000,
                goal: 80000,
                donors: 198,
                daysLeft: 12,
              },
            ].map((campaign, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">
                      {campaign.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {campaign.category}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span className="font-semibold text-gray-900">
                      ${campaign.raised.toLocaleString()} raised
                    </span>
                    <span>${campaign.goal.toLocaleString()} goal</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all"
                      style={{
                        width: `${(campaign.raised / campaign.goal) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{campaign.donors} donors</span>
                  </div>
                  <span className="font-medium">{campaign.daysLeft} days left</span>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Donate Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-lg">Create Your Campaign</h3>
                  <p className="text-gray-600">
                    Set up your fundraising page with details about your medical need
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-lg">Share Your Story</h3>
                  <p className="text-gray-600">
                    Spread the word through social media, email, and messaging
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-lg">Receive Donations</h3>
                  <p className="text-gray-600">
                    Accept contributions securely through multiple payment methods
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </span>
                <div>
                  <h3 className="font-semibold text-lg">Withdraw Funds</h3>
                  <p className="text-gray-600">
                    Access your funds quickly to cover medical expenses
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white">
            <Award className="w-12 h-12 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Low Fees</h3>
                  <p className="opacity-90">
                    Only 2% platform fee, maximizing funds for your cause
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Large Community</h3>
                  <p className="opacity-90">
                    Connect with thousands of compassionate donors
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Quick Withdrawals</h3>
                  <p className="opacity-90">
                    Access your funds within 24-48 hours
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-6 opacity-90">
            Start your fundraising campaign today or support someone in need
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start a Campaign
            </button>
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold">
              Browse Campaigns
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaiseFunds;
