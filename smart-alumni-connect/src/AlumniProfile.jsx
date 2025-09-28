// // import React, { useState, useEffect } from 'react';
// // import { auth, db } from './firebase.js';
// // import { doc, getDoc } from "firebase/firestore";

// // const AlumniProfile = () => {
// //   const [userProfile, setUserProfile] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchUserProfile = async () => {
// //       const currentUser = auth.currentUser;
// //       if (currentUser) {
// //         const userDocRef = doc(db, "users", currentUser.uid);
// //         const docSnap = await getDoc(userDocRef);
// //         if (docSnap.exists()) {
// //           setUserProfile(docSnap.data());
// //         }
// //       }
// //       setLoading(false);
// //     };

// //     fetchUserProfile();
// //   }, []);

// //   if (loading) {
// //     return <div className="text-center p-10">Loading profile...</div>;
// //   }

// //   if (!userProfile) {
// //     return <div className="text-center p-10">Could not load user profile.</div>;
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-8">
// //       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
// //         {/* Profile Header */}
// //         <div className="p-8">
// //           <div className="flex items-center">
// //             <img 
// //               src={`https://i.pravatar.cc/150?u=${userProfile.uid}`} 
// //               alt={userProfile.name} 
// //               className="w-24 h-24 rounded-full mr-6 border-4 border-blue-500" 
// //             />
// //             <div>
// //               <h1 className="text-3xl font-bold text-gray-800">{userProfile.name}</h1>
// //               <p className="text-md text-gray-600">{userProfile.headline}</p>
// //               <p className="text-sm text-gray-500">Class of {userProfile.graduationYear} | {userProfile.email}</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Career History */}
// //         <div className="border-t border-gray-200 px-8 py-6">
// //           <h2 className="text-xl font-semibold text-gray-700 mb-4">Career Journey</h2>
// //           <div className="space-y-4">
// //             {userProfile.careerHistory && userProfile.careerHistory.length > 0 ? (
// //               userProfile.careerHistory.map((job, index) => (
// //                 <div key={index}>
// //                   <p className="font-semibold text-gray-800">{job.title}</p>
// //                   <p className="text-gray-600">{job.company}</p>
// //                 </div>
// //               ))
// //             ) : (
// //               <p className="text-gray-500">No career history added yet.</p>
// //             )}
// //           </div>
// //         </div>
        
// //         {/* Skills */}
// //         <div className="border-t border-gray-200 px-8 py-6 bg-gray-50">
// //           <h2 className="text-xl font-semibold text-gray-700 mb-4">Skills</h2>
// //           <div className="flex flex-wrap gap-2">
// //             {userProfile.skills && userProfile.skills.length > 0 ? (
// //               userProfile.skills.map(skill => (
// //                 <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
// //                   {skill}
// //                 </span>
// //               ))
// //             ) : (
// //               <p className="text-gray-500">No skills added yet.</p>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AlumniProfile;


// import React from 'react';

// // --- Helper Icon Components ---
// const VerifiedIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
//     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//   </svg>
// );
// const StarIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//   </svg>
// );

// const AlumniProfile = ({ userProfile, onEdit }) => {
//   if (!userProfile) {
//     return <div className="text-center p-10">Loading profile...</div>;
//   }
  
//   // Use real data from Firestore or provide defaults for the demo
//   const isVerified = userProfile.isVerified ?? true;
//   const contributionPoints = userProfile.contributionPoints ?? 125;
//   const badges = userProfile.badges ?? ['Top Mentor', 'Fundraiser'];

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
//         <div className="p-8">
//           <div className="flex flex-col sm:flex-row items-center">
//             <img 
//               src={userProfile.photoURL || `https://i.pravatar.cc/150?u=${userProfile.uid}`} 
//               alt={userProfile.name} 
//               className="w-28 h-28 rounded-full mr-0 sm:mr-6 border-4 border-blue-500 object-cover mb-4 sm:mb-0" 
//             />
//             <div className="text-center sm:text-left">
//               <h1 className="text-3xl font-bold text-gray-800">{userProfile.name}</h1>
//               <p className="text-md text-gray-600 mt-1">{userProfile.headline}</p>
//               <p className="text-sm text-gray-500 mt-1">Class of {userProfile.graduationYear} | {userProfile.email}</p>
//               {isVerified && (
//                 <div className="mt-3 inline-flex items-center bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                   <VerifiedIcon />
//                   Blockchain Verified
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="mt-6 flex justify-center sm:justify-start">
//             <button onClick={onEdit} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
//               Edit Profile
//             </button>
//             {userProfile.linkedin && (
//                 <a href={userProfile.linkedin} target="_blank" rel="noopener noreferrer" className="ml-4 bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300">
//                   LinkedIn
//                 </a>
//               )}
//           </div>
//         </div>
        
//         {/* Gamification & Recognition Section */}
//         <div className="border-t border-gray-200 px-8 py-6 bg-blue-50">
//            <h2 className="text-xl font-semibold text-gray-700 mb-4">Contributions & Recognition</h2>
//            <div className="flex items-center space-x-8">
//                 <div className="text-center">
//                     <div className="flex items-center justify-center">
//                         <StarIcon />
//                         <p className="text-3xl font-bold text-gray-800 ml-2">{contributionPoints}</p>
//                     </div>
//                     <p className="text-sm text-gray-500">Contribution Points</p>
//                 </div>
//                 <div>
//                     <p className="text-sm font-bold text-gray-600 mb-2">Badges Earned</p>
//                     <div className="flex flex-wrap gap-2">
//                         {badges.map(badge => (
//                             <span key={badge} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
//                                 {badge}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//            </div>
//         </div>

//         <div className="border-t border-gray-200 px-8 py-6">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">Career Journey</h2>
//           <div className="space-y-4">
//             {userProfile.careerHistory?.length > 0 ? (
//               userProfile.careerHistory.map((job, index) => (
//                 <div key={index}>
//                   <p className="font-semibold text-gray-800">{job.title}</p>
//                   <p className="text-gray-600">{job.company}</p>
//                 </div>
//               ))
//             ) : (<p className="text-gray-500">No career history added yet.</p>)}
//           </div>
//         </div>
        
//         <div className="border-t border-gray-200 px-8 py-6 bg-gray-50">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">Skills</h2>
//           <div className="flex flex-wrap gap-2">
//             {userProfile.skills?.length > 0 ? (
//               userProfile.skills.map(skill => (
//                 <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
//                   {skill}
//                 </span>
//               ))
//             ) : (<p className="text-gray-500">No skills added yet.</p>)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlumniProfile;

import React, { useState } from 'react';

// --- Helper Icon Components ---
const VerifiedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const AlumniProfile = ({ userProfile, onEdit }) => {
  const [showModal, setShowModal] = useState(false); // State to control the modal's visibility

  if (!userProfile) {
    return <div className="text-center p-10">Loading profile...</div>;
  }
  
  // Use real data from Firestore or provide defaults for the demo
  const isVerified = userProfile.isVerified ?? true;
  const contributionPoints = userProfile.contributionPoints ?? 125;
  const badges = userProfile.badges ?? ['Top Mentor', 'Fundraiser'];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      {/* Blockchain Details Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Credential Verified</h3>
            <p className="text-sm text-gray-600">This academic credential has been securely verified and recorded on our blockchain network, ensuring its authenticity and immutability.</p>
            <div className="text-left text-xs bg-gray-100 p-3 rounded mt-4 space-y-1">
              <p><strong>Verified By:</strong> [Institution Name]</p>
              <p><strong>Issued On:</strong> {new Date().toLocaleDateString()}</p>
              <p><strong>Blockchain ID:</strong> {userProfile.uid}</p>
              <p className="break-all"><strong>Transaction Hash:</strong> 0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b</p>
            </div>
            <button onClick={() => setShowModal(false)} className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">Close</button>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col sm:flex-row items-center">
            <img 
              src={userProfile.photoURL || `https://i.pravatar.cc/150?u=${userProfile.uid}`} 
              alt={userProfile.name} 
              className="w-28 h-28 rounded-full mr-0 sm:mr-6 border-4 border-blue-500 object-cover mb-4 sm:mb-0" 
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-800">{userProfile.name}</h1>
              <p className="text-md text-gray-600 mt-1">{userProfile.headline}</p>
              <p className="text-sm text-gray-500 mt-1">Class of {userProfile.graduationYear} | {userProfile.email}</p>
              {isVerified && (
                <button 
                  onClick={() => setShowModal(true)} 
                  className="mt-3 inline-flex items-center bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full cursor-pointer hover:bg-green-600 transition-colors duration-200"
                >
                  <VerifiedIcon />
                  Blockchain Verified
                </button>
              )}
            </div>
          </div>
          <div className="mt-6 flex justify-center sm:justify-start">
            <button onClick={onEdit} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Edit Profile
            </button>
            {userProfile.linkedin && (
                <a href={userProfile.linkedin} target="_blank" rel="noopener noreferrer" className="ml-4 bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300">
                  LinkedIn
                </a>
              )}
          </div>
        </div>
        
        {/* Gamification & Recognition Section */}
        <div className="border-t border-gray-200 px-8 py-6 bg-blue-50">
           <h2 className="text-xl font-semibold text-gray-700 mb-4">Contributions & Recognition</h2>
           <div className="flex items-center space-x-8">
                <div className="text-center">
                    <div className="flex items-center justify-center">
                        <StarIcon />
                        <p className="text-3xl font-bold text-gray-800 ml-2">{contributionPoints}</p>
                    </div>
                    <p className="text-sm text-gray-500">Contribution Points</p>
                </div>
                <div>
                    <p className="text-sm font-bold text-gray-600 mb-2">Badges Earned</p>
                    <div className="flex flex-wrap gap-2">
                        {badges.map(badge => (
                            <span key={badge} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
           </div>
        </div>

        <div className="border-t border-gray-200 px-8 py-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Career Journey</h2>
          <div className="space-y-4">
            {userProfile.careerHistory?.length > 0 ? (
              userProfile.careerHistory.map((job, index) => (
                <div key={index}>
                  <p className="font-semibold text-gray-800">{job.title}</p>
                  <p className="text-gray-600">{job.company}</p>
                </div>
              ))
            ) : (<p className="text-gray-500">No career history added yet.</p>)}
          </div>
        </div>
        
        <div className="border-t border-gray-200 px-8 py-6 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {userProfile.skills?.length > 0 ? (
              userProfile.skills.map(skill => (
                <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))
            ) : (<p className="text-gray-500">No skills added yet.</p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniProfile;

