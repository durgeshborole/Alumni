

// import React, { useState, useEffect } from 'react';
// import { auth, db } from './firebase';
// import { collection, getDocs, query, where } from "firebase/firestore";

// // The component now accepts both userProfile and onViewProfile as props
// const MentorMatch = ({ userProfile, onViewProfile }) => {
//   const [mentors, setMentors] = useState([]);
//   const [filteredMentors, setFilteredMentors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');

//   // Fetch all users to display as potential mentors
//   useEffect(() => {
//     const fetchMentors = async () => {
//       const currentUser = auth.currentUser;
//       if (currentUser) {
//         const usersCollectionRef = collection(db, "users");
//         const q = query(usersCollectionRef, where("uid", "!=", currentUser.uid));
        
//         const querySnapshot = await getDocs(q);
//         const mentorsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setMentors(mentorsList);
//         setFilteredMentors(mentorsList);
//       }
//       setLoading(false);
//     };
//     fetchMentors();
//   }, []);

//   // Filter mentors based on the search term
//   useEffect(() => {
//     const results = mentors.filter(mentor => {
//       const term = searchTerm.toLowerCase();
//       return (
//         mentor.name?.toLowerCase().includes(term) ||
//         mentor.headline?.toLowerCase().includes(term) ||
//         mentor.skills?.some(skill => skill.toLowerCase().includes(term))
//       );
//     });
//     setFilteredMentors(results);
//   }, [searchTerm, mentors]);

//   // --- NEW: Function to calculate match score based on skills ---
//   const calculateMatchScore = (mentorSkills) => {
//     const studentSkills = userProfile?.skills || [];
//     if (!studentSkills.length || !mentorSkills || !mentorSkills.length) {
//       // Provide a baseline score if skills are missing
//       return Math.floor(Math.random() * (75 - 65 + 1) + 65);
//     }
    
//     // Find the number of common skills
//     const commonSkills = studentSkills.filter(skill => 
//       mentorSkills.some(mentorSkill => mentorSkill.toLowerCase() === skill.toLowerCase())
//     );
    
//     // Calculate the percentage based on the student's skills
//     const score = (commonSkills.length / studentSkills.length) * 100;
    
//     // Return a score that feels realistic for a demo (e.g., between 70 and 99)
//     return Math.min(99, Math.floor(score * 0.3 + 70));
//   };


//   if (loading) {
//     return <div className="text-center p-10">Finding mentors...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">Find a Mentor</h1>
//         <p className="text-gray-500 mb-6">Connect with experienced alumni ready to help you grow.</p>
        
//         <div className="mb-8 p-4 bg-white rounded-lg shadow-sm flex items-center gap-4">
//           <input 
//             type="text" 
//             placeholder="Search by name, skill, or company..." 
//             className="w-full p-2 border border-gray-300 rounded-lg"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredMentors.length > 0 ? (
//             filteredMentors.map(mentor => (
//               <div key={mentor.id} className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300 flex flex-col">
//                 <img 
//                   src={mentor.photoURL || `https://i.pravatar.cc/150?u=${mentor.uid}`} 
//                   alt={mentor.name} 
//                   className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200 object-cover" 
//                 />
//                 <h3 className="text-lg font-bold text-gray-800">{mentor.name}</h3>
//                 <p className="text-sm text-gray-500 mb-3 flex-grow">{mentor.headline}</p>
                
//                 {/* --- MODIFIED: Display the calculated match score --- */}
//                 <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
//                   {calculateMatchScore(mentor.skills)}% Match
//                 </div>

//                 <button 
//                   onClick={() => onViewProfile(mentor.id)} 
//                   className="w-full mt-auto bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-black"
//                 >
//                   View Profile
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="col-span-full text-center text-gray-500">No mentors found matching your search.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MentorMatch;

import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

const MentorMatch = ({ userProfile, onViewProfile }) => {
  const [mentors, setMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMentors = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const usersCollectionRef = collection(db, "users");
        const q = query(usersCollectionRef, where("uid", "!=", currentUser.uid));
        
        const querySnapshot = await getDocs(q);
        const mentorsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMentors(mentorsList);
        setFilteredMentors(mentorsList);
      }
      setLoading(false);
    };
    fetchMentors();
  }, []);

  useEffect(() => {
    const results = mentors.filter(mentor => {
      const term = searchTerm.toLowerCase();
      return (
        mentor.name?.toLowerCase().includes(term) ||
        mentor.headline?.toLowerCase().includes(term) ||
        mentor.skills?.some(skill => skill.toLowerCase().includes(term))
      );
    });
    setFilteredMentors(results);
  }, [searchTerm, mentors]);

  const calculateMatchScore = (mentorSkills) => {
    const studentSkills = userProfile?.skills || [];
    // If the student or mentor has no skills, the match is 0.
    if (!studentSkills.length || !mentorSkills || !mentorSkills.length) {
      return 0;
    }
    
    const commonSkills = studentSkills.filter(skill => 
      mentorSkills.some(mentorSkill => mentorSkill.toLowerCase() === skill.toLowerCase())
    );
    
    // If there are no common skills, the match is 0.
    if (commonSkills.length === 0) {
        return 0;
    }

    // For the demo, we'll give a substantial score for the first match,
    // and increment it for each additional match.
    const score = Math.min(100, 40 + ((commonSkills.length - 1) * 15));
    return score;
  };

  if (loading) {
    return <div className="text-center p-10">Finding mentors...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Find a Mentor</h1>
        <p className="text-gray-500 mb-6">Connect with experienced alumni ready to help you grow.</p>
        
        <div className="mb-8 p-4 bg-white rounded-lg shadow-sm flex items-center gap-4">
          <input 
            type="text" 
            placeholder="Search by name, skill, or company..." 
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMentors.length > 0 ? (
            filteredMentors.map(mentor => {
              const matchPercentage = calculateMatchScore(mentor.skills);
              
              return (
                <div key={mentor.id} className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300 flex flex-col">
                  <img 
                    src={mentor.photoURL || `https://i.pravatar.cc/150?u=${mentor.uid}`} 
                    alt={mentor.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200 object-cover" 
                  />
                  <h3 className="text-lg font-bold text-gray-800">{mentor.name}</h3>
                  <p className="text-sm text-gray-500 mb-3 flex-grow">{mentor.headline}</p>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full transition-all duration-500" 
                      style={{ width: `${matchPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm font-bold text-green-700 mb-4">{matchPercentage}% Match</p>

                  <button 
                    onClick={() => onViewProfile(mentor.id)} 
                    className="w-full mt-auto bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-black"
                  >
                    View Profile
                  </button>
                </div>
              );
            })
          ) : (
            <p className="col-span-full text-center text-gray-500">No mentors found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorMatch;

