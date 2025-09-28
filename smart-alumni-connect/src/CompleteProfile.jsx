import React, { useState } from 'react';
import { auth, db } from './firebase.js';
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const CompleteProfile = ({ onComplete }) => {
  const [headline, setHeadline] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [location, setLocation] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [photoURL, setPhotoURL] = useState(''); // Changed from photoFile to photoURL
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const currentUser = auth.currentUser;
    if (!currentUser) {
      setError("You must be logged in.");
      setLoading(false);
      return;
    }

    try {
      // Update the Firestore document with the provided photo URL
      const userDocRef = doc(db, "users", currentUser.uid);
      await updateDoc(userDocRef, {
        headline,
        location,
        linkedin,
        photoURL: photoURL || `https://i.pravatar.cc/150?u=${currentUser.uid}`, // Use provided URL or a default
        skills: skills.split(',').map(skill => skill.trim()),
        careerHistory: arrayUnion({
          title: jobTitle,
          company: company,
          startDate: new Date()
        }),
        profileComplete: true 
      });

      onComplete();

    } catch (err) {
      setError("Failed to update profile. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Complete Your Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="photoURL">Profile Picture URL</label>
            <input className="w-full p-2 border rounded" id="photoURL" type="url" placeholder="https://..." value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="headline">Professional Headline</label>
            <input className="w-full p-2 border rounded" id="headline" type="text" placeholder="e.g., Senior Software Engineer at Google" value={headline} onChange={(e) => setHeadline(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="location">Location</label>
            <input className="w-full p-2 border rounded" id="location" type="text" placeholder="e.g., Mumbai, India" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="linkedin">LinkedIn Profile URL</label>
            <input className="w-full p-2 border rounded" id="linkedin" type="url" placeholder="https://linkedin.com/in/..." value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="jobTitle">Current Job Title</label>
              <input className="w-full p-2 border rounded" id="jobTitle" type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="company">Company</label>
              <input className="w-full p-2 border rounded" id="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="skills">Skills (comma-separated)</label>
            <input className="w-full p-2 border rounded" id="skills" type="text" placeholder="e.g., React, Node.js, Python" value={skills} onChange={(e) => setSkills(e.target.value)} required />
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          <button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg disabled:bg-gray-400" type="submit">
            {loading ? 'Saving...' : 'Save and Continue'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;

