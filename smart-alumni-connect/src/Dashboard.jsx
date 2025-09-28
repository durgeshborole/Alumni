

// import React, { useState, useEffect } from 'react';
// import { auth, db } from './firebase.js';
// import { collection, getDocs, query, where, limit } from "firebase/firestore";

// // --- Helper Icon Components ---
// const BriefcaseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> );
// const AcademicCapIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg> );
// const PlusCircleIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> );

// // --- Static Data for Demo ---
// const alumniSpotlight = { name: 'Aditya Rao', achievement: 'Founder & CEO of InnovateAI, a startup recently valued at $50M.', avatar: 'https://i.pravatar.cc/150?img=12'};
// const trendingDiscussions = [ { id: 1, topic: "Tips for cracking FAANG interviews?", replies: 28 }, { id: 2, topic: "AMA with a Google Product Manager", replies: 45 }];
// const fundraisingCampaign = { title: 'Campus Innovation Hub', goal: 1000000, raised: 750000 };

// const Dashboard = ({ userProfile, onViewProfile }) => {
//   const [recommendedMentors, setRecommendedMentors] = useState([]);
//   const [loadingMentors, setLoadingMentors] = useState(true);

//   // Fetch recommended mentors from Firestore
//   useEffect(() => {
//     const fetchMentors = async () => {
//       if (auth.currentUser) {
//         // Query to get 3 users, excluding the current user, to act as recommendations
//         const usersRef = collection(db, "users");
//         const q = query(
//           usersRef, 
//           where("uid", "!=", auth.currentUser.uid), 
//           limit(3)
//         );
        
//         const querySnapshot = await getDocs(q);
//         const mentorsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setRecommendedMentors(mentorsList);
//       }
//       setLoadingMentors(false);
//     };

//     fetchMentors();
//   }, []);
  
//   if (!userProfile) {
//     return <div className="p-10 text-center">Loading Dashboard...</div>;
//   }

//   const quickActions = userProfile.role === 'Student' 
//     ? [ { text: 'Find a Mentor', icon: <AcademicCapIcon /> }, { text: 'Search Internships', icon: <BriefcaseIcon /> } ]
//     : [ { text: 'Post an Opportunity', icon: <PlusCircleIcon /> }, { text: 'Mentor a Student', icon: <AcademicCapIcon /> } ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">Welcome back, {userProfile.name}!</h1>
//           <p className="text-gray-500 mt-1">Here's your personalized dashboard.</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-8">
//             {/* Quick Actions, Spotlight, etc. */}
//             <section>
//               <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Actions</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {quickActions.map(action => (
//                     <button key={action.text} className="bg-white p-4 rounded-lg shadow-md flex items-center text-blue-600 font-semibold hover:bg-blue-50 transition">
//                         {action.icon} <span className="ml-3">{action.text}</span>
//                     </button>
//                 ))}
//               </div>
//             </section>
            
//             {/* <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg">
//                 <h2 className="text-xl font-bold mb-4">Alumni Spotlight</h2>
//                 <div className="flex items-center">
//                     <img src={alumniSpotlight.avatar} alt={alumniSpotlight.name} className="w-16 h-16 rounded-full border-4 border-white mr-4" />
//                     <div>
//                         <h3 className="font-bold text-lg">{alumniSpotlight.name}</h3> <p className="text-sm opacity-90">{alumniSpotlight.achievement}</p>
//                     </div>
//                 </div>
//             </section> */}

//             {/* AI Recommended Mentors Section (Now Dynamic) */}
//             <section className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-xl font-semibold text-gray-700 mb-4">AI Recommended Mentors</h2>
//               {loadingMentors ? <p>Finding recommendations...</p> : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {recommendedMentors.map(mentor => (
//                     <article key={mentor.id} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
//                       <img src={mentor.photoURL} alt={mentor.name} className="w-16 h-16 rounded-full mb-3 object-cover" />
//                       <h3 className="font-semibold text-gray-800">{mentor.name}</h3>
//                       <p className="text-sm text-gray-500 mb-3 flex-grow">{mentor.headline}</p>
//                       <button 
//                         onClick={() => onViewProfile(mentor.id)}
//                         className="w-full mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm font-semibold"
//                       >
//                         View Profile
//                       </button>
//                     </article>
//                   ))}
//                 </div>
//               )}
//             </section>
//           </div>

//           <div className="space-y-8">
//             {/* Fundraising and Discussions Sections */}
//              {/* <section className="bg-white p-6 rounded-lg shadow-md"> */}
//               {/* <h2 className="text-xl font-semibold text-gray-700 mb-4">{fundraisingCampaign.title}</h2> */}
//               <div>
//                 {/* <div className="flex justify-between text-sm font-medium text-gray-600 mb-1"><span>Raised</span><span>Goal</span></div> */}
//                 {/* <div className="flex justify-between text-sm font-bold text-gray-800 mb-1">
//                   <span>₹{fundraisingCampaign.raised.toLocaleString('en-IN')}</span>
//                   <span>₹{fundraisingCampaign.goal.toLocaleString('en-IN')}</span>
//                 </div> */}
//                 {/* <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(fundraisingCampaign.raised / fundraisingCampaign.goal) * 100}%` }}></div>
//                 </div> */}
//                 {/* <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 font-semibold">Donate Now</button> */}
//               </div>
//             {/* </section> */}
            
//             <section className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-xl font-semibold text-gray-700 mb-4">Trending Discussions</h2>
//               <ul className="divide-y divide-gray-200">
//                 {trendingDiscussions.map(d => (
//                   <li key={d.id} className="py-3">
//                     <p className="font-semibold text-gray-800 cursor-pointer hover:text-blue-600">{d.topic}</p>
//                     <p className="text-xs text-gray-500">{d.replies} replies</p>
//                   </li>
//                 ))}
//               </ul>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase.js';
import { collection, getDocs, query, where, limit } from "firebase/firestore";

// --- Helper Icon Components ---
const BriefcaseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> );
const AcademicCapIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg> );
const PlusCircleIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> );

// --- Static Data for Demo ---
const trendingDiscussions = [ { id: 1, topic: "Tips for cracking FAANG interviews?", replies: 28 }, { id: 2, topic: "AMA with a Google Product Manager", replies: 45 }];

const Dashboard = ({ userProfile, onViewProfile }) => {
  const [recommendedMentors, setRecommendedMentors] = useState([]);
  const [loadingMentors, setLoadingMentors] = useState(true);

  // Fetch recommended mentors from Firestore
  useEffect(() => {
    const fetchMentors = async () => {
      if (auth.currentUser) {
        const usersRef = collection(db, "users");
        const q = query(
          usersRef, 
          where("uid", "!=", auth.currentUser.uid), 
          limit(3)
        );
        
        const querySnapshot = await getDocs(q);
        const mentorsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRecommendedMentors(mentorsList);
      }
      setLoadingMentors(false);
    };

    fetchMentors();
  }, []);
  
  if (!userProfile) {
    return <div className="p-10 text-center">Loading Dashboard...</div>;
  }

  const quickActions = userProfile.role === 'Student' 
    // ? [ { text: 'Find a Mentor', icon: <AcademicCapIcon /> }, { text: 'Search Internships', icon: <BriefcaseIcon /> } ]
    // : [ { text: 'Post an Opportunity', icon: <PlusCircleIcon /> }, { text: 'Mentor a Student', icon: <AcademicCapIcon /> } ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, {userProfile.name}!</h1>
          <p className="text-gray-500 mt-1">Here's your personalized dashboard.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickActions.map(action => (
                    <button key={action.text} className="bg-white p-4 rounded-lg shadow-md flex items-center text-blue-600 font-semibold hover:bg-blue-50 transition">
                        {action.icon} <span className="ml-3">{action.text}</span>
                    </button>
                ))}
              </div>
            </section> */}
            
            {/* <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Alumni Spotlight</h2>
                <div className="flex items-center">
                    <img src={alumniSpotlight.avatar} alt={alumniSpotlight.name} className="w-16 h-16 rounded-full border-4 border-white mr-4" />
                    <div>
                        <h3 className="font-bold text-lg">{alumniSpotlight.name}</h3> <p className="text-sm opacity-90">{alumniSpotlight.achievement}</p>
                    </div>
                </div>
            </section> */}

            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">AI Recommended Mentors</h2>
              {loadingMentors ? <p>Finding recommendations...</p> : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recommendedMentors.map(mentor => (
                    <article key={mentor.id} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
                      <img src={mentor.photoURL} alt={mentor.name} className="w-16 h-16 rounded-full mb-3 object-cover" />
                      <h3 className="font-semibold text-gray-800">{mentor.name}</h3>
                      <p className="text-sm text-gray-500 mb-3 flex-grow">{mentor.headline}</p>
                      <button 
                        onClick={() => onViewProfile(mentor.id)}
                        className="w-full mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm font-semibold"
                      >
                        View Profile
                      </button>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>

          <div className="space-y-8">
             {/* <section className="bg-white p-6 rounded-lg shadow-md"> */}
               {/* <h2 className="text-xl font-semibold text-gray-700 mb-4">{fundraisingCampaign.title}</h2> */}
               <div>
                 {/* <div className="flex justify-between text-sm font-medium text-gray-600 mb-1"><span>Raised</span><span>Goal</span></div> */}
                 {/* <div className="flex justify-between text-sm font-bold text-gray-800 mb-1">
                   <span>₹{fundraisingCampaign.raised.toLocaleString('en-IN')}</span>
                   <span>₹{fundraisingCampaign.goal.toLocaleString('en-IN')}</span>
                 </div> */}
                 {/* <div className="w-full bg-gray-200 rounded-full h-2.5">
                   <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(fundraisingCampaign.raised / fundraisingCampaign.goal) * 100}%` }}></div>
                 </div> */}
                 {/* <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 font-semibold">Donate Now</button> */}
               </div>
             {/* </section> */}
            
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Trending Discussions</h2>
              <ul className="divide-y divide-gray-200">
                {trendingDiscussions.map(d => (
                  <li key={d.id} className="py-3">
                    <p className="font-semibold text-gray-800 cursor-pointer hover:text-blue-600">{d.topic}</p>
                    <p className="text-xs text-gray-500">{d.replies} replies</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

