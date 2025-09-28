import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { doc, getDoc } from "firebase/firestore";

// Helper Icons (same as in AlumniProfile)
const VerifiedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;

// This component takes a `userId` prop to know which profile to fetch.
const PublicProfile = ({ userId }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (userId) {
        const userDocRef = doc(db, "users", userId);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          setUserProfile(docSnap.data());
        }
      }
      setLoading(false);
    };

    fetchUserProfile();
  }, [userId]); // Refetch if the userId prop changes

  if (loading) return <div className="p-10 text-center">Loading profile...</div>;
  if (!userProfile) return <div className="p-10 text-center">Could not find user profile.</div>;

  return (
     <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
            {/* Same layout as AlumniProfile, but with a "Request Mentorship" button */}
            <div className="flex flex-col sm:flex-row items-center">
                 <img src={userProfile.photoURL} alt={userProfile.name} className="w-28 h-28 rounded-full mr-0 sm:mr-6 border-4 border-blue-500 object-cover mb-4 sm:mb-0" />
                 <div className="text-center sm:text-left">
                    <h1 className="text-3xl font-bold text-gray-800">{userProfile.name}</h1>
                    <p className="text-md text-gray-600 mt-1">{userProfile.headline}</p>
                    <p className="text-sm text-gray-500 mt-1">Class of {userProfile.graduationYear}</p>
                 </div>
            </div>
            <div className="mt-6 flex justify-center sm:justify-start">
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700">Request Mentorship</button>
            </div>
        </div>

        {/* Other sections (Gamification, Career, Skills) are identical to AlumniProfile */}
        <div className="border-t border-gray-200 px-8 py-6 bg-blue-50">
           <h2 className="text-xl font-semibold text-gray-700 mb-4">Contributions & Recognition</h2>
            <div className="flex items-center space-x-8">
                <div className="text-center">
                    <div className="flex items-center justify-center">
                        <StarIcon />
                        <p className="text-3xl font-bold text-gray-800 ml-2">{userProfile.contributionPoints ?? 125}</p>
                    </div>
                    <p className="text-sm text-gray-500">Contribution Points</p>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-200 px-8 py-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Career Journey</h2>
          <div className="space-y-4">
            {userProfile.careerHistory?.map((job, index) => (
                <div key={index}>
                  <p className="font-semibold text-gray-800">{job.title}</p>
                  <p className="text-gray-600">{job.company}</p>
                </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 px-8 py-6 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {userProfile.skills?.map(skill => (
                <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;

