import React from 'react';

// --- Helper Icon Components ---
const CalendarIcon = () => <svg xmlns="http://www.w.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

// --- Mock Data for Events ---
const mockEvents = [
  { id: 1, name: 'Annual Alumni Meet 2025', date: 'December 15, 2025', location: 'University Auditorium', type: 'Reunion', image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Alumni+Meet' },
  { id: 2, name: 'Hackathon: AI for Good', date: 'November 22, 2025', location: 'Online', type: 'Competition', image: 'https://placehold.co/600x400/10b981/ffffff?text=Hackathon' },
  { id: 3, name: 'Webinar: The Future of FinTech', date: 'October 5, 2025', location: 'Online', type: 'Webinar', image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Webinar' },
  { id: 4, name: 'Bengaluru Alumni Chapter Meetup', date: 'September 30, 2025', location: 'Bengaluru, India', type: 'Networking', image: 'https://placehold.co/600x400/f59e0b/ffffff?text=Meetup' },
];

// --- Events Page Component ---
const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">Events & Meetups</h1>
            <p className="text-gray-500 mt-2">Connect with the community at our upcoming events.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-8">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold text-sm">All Events</button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-semibold text-sm border border-gray-300 hover:bg-gray-100">Webinars</button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-semibold text-sm border border-gray-300 hover:bg-gray-100">Reunions</button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-semibold text-sm border border-gray-300 hover:bg-gray-100">Networking</button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{event.type}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-3">{event.name}</h3>
                <div className="flex items-center text-gray-600 mt-2">
                  <CalendarIcon />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mt-1">
                  <LocationIcon />
                  <span>{event.location}</span>
                </div>
                <button className="w-full bg-blue-600 text-white mt-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
