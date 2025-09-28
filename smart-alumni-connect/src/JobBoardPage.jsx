// import React from 'react';

// // --- Helper Icon Components ---
// const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 L 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
// const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

// // --- Mock Data for Job Postings ---
// const jobPostings = [
//   { id: 1, role: 'Software Development Engineer Intern', company: 'Amazon', location: 'Bengaluru', type: 'Internship', postedBy: 'Rohan Verma \'15' },
//   { id: 2, role: 'Jr. Data Analyst', company: 'Swiggy', location: 'Remote', type: 'Full-Time', postedBy: 'Sneha Patil \'18' },
//   { id: 3, role: 'Product Management Intern', company: 'Microsoft', location: 'Hyderabad', type: 'Internship', postedBy: 'Anjali Mehta \'16' },
//   { id: 4, role: 'Cybersecurity Analyst', company: 'Deloitte', location: 'Mumbai', type: 'Full-Time', postedBy: 'Aditya Rao \'17' },
//   { id: 5, role: 'UX Design Intern', company: 'Adobe', location: 'Noida', type: 'Internship', postedBy: 'Priya Sharma \'19' },
// ];

// // --- Job Board Page Component ---
// const JobBoardPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold text-gray-800">Job & Internship Board</h1>
//           <p className="text-gray-500 mt-2">Discover exclusive opportunities posted by our alumni network.</p>
//         </div>

//         {/* Filters Section */}
//         <div className="bg-white p-4 rounded-lg shadow-md mb-8 flex flex-col sm:flex-row gap-4">
//           <input type="text" placeholder="Search by role or company..." className="w-full p-2 border border-gray-300 rounded-lg" />
//           <select className="w-full p-2 border border-gray-300 rounded-lg">
//             <option>All Locations</option>
//             <option>Bengaluru</option>
//             <option>Hyderabad</option>
//             <option>Mumbai</option>
//             <option>Remote</option>
//           </select>
//           <select className="w-full p-2 border border-gray-300 rounded-lg">
//             <option>All Types</option>
//             <option>Full-Time</option>
//             <option>Internship</option>
//           </select>
//           <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Search</button>
//         </div>

//         {/* Job Postings List */}
//         <div className="space-y-6">
//           {jobPostings.map(job => (
//             <div key={job.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-lg transition-shadow duration-300">
//               <div className="flex-grow">
//                 <div className="flex items-center mb-2">
//                   <h3 className="text-xl font-bold text-gray-800 mr-3">{job.role}</h3>
//                   <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${job.type === 'Internship' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>{job.type}</span>
//                 </div>
//                 <div className="flex items-center text-gray-600 text-sm mb-1">
//                   <BriefcaseIcon /> {job.company}
//                 </div>
//                 <div className="flex items-center text-gray-600 text-sm">
//                   <LocationIcon /> {job.location}
//                 </div>
//                 <p className="text-xs text-gray-400 mt-2">Posted by: {job.postedBy}</p>
//               </div>
//               <div className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0">
//                 <button className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-black transition">
//                   Apply Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobBoardPage;

import React, { useState, useEffect } from 'react';
import { db } from '../firebase.js';
import { collection, getDocs } from "firebase/firestore";

// --- Helper Icon Components (Re-verified and corrected) ---
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
  </svg>
);
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657l-5.657 5.657-5.657-5.657a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);


const JobBoardPage = () => {
  const [jobPostings, setJobPostings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using mock data for the demo until a "jobs" collection is created in Firestore
    const mockJobs = [
      { id: 1, role: 'Software Development Engineer Intern', company: 'Amazon', location: 'Bengaluru', type: 'Internship', postedBy: 'Rohan Verma \'15' },
      { id: 2, role: 'Jr. Data Analyst', company: 'Swiggy', location: 'Remote', type: 'Full-Time', postedBy: 'Sneha Patil \'18' },
      { id: 3, role: 'Product Management Intern', company: 'Microsoft', location: 'Hyderabad', type: 'Internship', postedBy: 'Anjali Mehta \'16' },
      { id: 4, role: 'Cybersecurity Analyst', company: 'Deloitte', location: 'Mumbai', type: 'Full-Time', postedBy: 'Aditya Rao \'17' },
    ];
    setJobPostings(mockJobs);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading Job Board...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Job & Internship Board</h1>
          <p className="text-gray-500 mt-2">Discover exclusive opportunities posted by our alumni network.</p>
        </div>

        {/* Filters Section */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8 flex flex-col sm:flex-row gap-4">
          <input type="text" placeholder="Search by role or company..." className="w-full p-2 border border-gray-300 rounded-lg" />
          <select className="w-full p-2 border border-gray-300 rounded-lg">
            <option>All Locations</option>
            <option>Bengaluru</option>
            <option>Hyderabad</option>
            <option>Mumbai</option>
            <option>Remote</option>
          </select>
          <select className="w-full p-2 border border-gray-300 rounded-lg">
            <option>All Types</option>
            <option>Full-Time</option>
            <option>Internship</option>
          </select>
          <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Search</button>
        </div>

        {/* Job Postings List */}
        <div className="space-y-6">
          {jobPostings.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex-grow">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800 mr-3">{job.role}</h3>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${job.type === 'Internship' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>{job.type}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <BriefcaseIcon /> {job.company}
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <LocationIcon /> {job.location}
                </div>
                <p className="text-xs text-gray-400 mt-2">Posted by: {job.postedBy}</p>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0">
                <button className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-black transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobBoardPage;

