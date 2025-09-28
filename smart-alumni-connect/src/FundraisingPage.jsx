import React from 'react';

// --- Helper Icon Component ---
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>;

// --- Mock Data for Fundraising ---
const campaigns = [
  {
    id: 1,
    title: 'Campus Innovation Hub',
    description: 'Help us build a state-of-the-art innovation center for students to collaborate on startups and tech projects.',
    goal: 1000000,
    raised: 750000,
    image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Innovation+Hub'
  },
  {
    id: 2,
    title: 'Student Scholarship Fund',
    description: 'Support meritorious students from underprivileged backgrounds to pursue their education without financial burden.',
    goal: 500000,
    raised: 125000,
    image: 'https://placehold.co/600x400/10b981/ffffff?text=Scholarships'
  },
  {
    id: 3,
    title: 'Upgrade Sports Facilities',
    description: 'Contribute to modernizing our sports infrastructure to help our athletes excel at national and international levels.',
    goal: 800000,
    raised: 650000,
    image: 'https://placehold.co/600x400/f59e0b/ffffff?text=Sports+Facilities'
  },
];

const topDonors = [
    { name: 'Rohan Verma', amount: 50000 },
    { name: 'Anjali Mehta', amount: 35000 },
    { name: 'Vikram Singh', amount: 20000 },
];

// --- Fundraising Page Component ---
const FundraisingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Fundraising Campaigns</h1>
          <p className="text-gray-500 mt-2">Support our institution's growth by contributing to a cause you care about.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Campaigns */}
          <div className="lg:col-span-2 space-y-8">
            {campaigns.map(campaign => {
              const progress = (campaign.raised / campaign.goal) * 100;
              return (
                <div key={campaign.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                  <img src={campaign.image} alt={campaign.title} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800">{campaign.title}</h3>
                    <p className="text-gray-600 mt-2 flex-grow">{campaign.description}</p>
                    
                    <div className="mt-4">
                      <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
                        <span>Raised: ₹{campaign.raised.toLocaleString('en-IN')}</span>
                        <span>Goal: ₹{campaign.goal.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                      </div>
                    </div>

                    <button className="w-full sm:w-auto mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition self-start">
                      Donate Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar: Top Donors */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center"><HeartIcon /> Top Donors</h2>
            <ul className="space-y-4">
              {topDonors.map((donor, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">{index + 1}. {donor.name}</span>
                  <span className="font-medium text-green-600">₹{donor.amount.toLocaleString('en-IN')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraisingPage;
