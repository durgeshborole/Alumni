import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase.js';
import { doc, getDoc, updateDoc } from "firebase/firestore";

const EditProfile = ({ onSave, onCancel }) => {
  const [profileData, setProfileData] = useState({
    headline: '',
    location: '',
    linkedin: '',
    photoURL: '',
    skills: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProfileData({
            ...data,
            skills: Array.isArray(data.skills) ? data.skills.join(', ') : ''
          });
        }
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const currentUser = auth.currentUser;

    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      await updateDoc(userDocRef, {
        ...profileData,
        skills: profileData.skills.split(',').map(s => s.trim()),
      });
      onSave(); // Navigate back to the profile view

    } catch (err) {
      setError('Failed to save changes.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading Profile...</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Edit Your Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="photoURL">Profile Picture URL</label>
            <input className="w-full p-2 border rounded" id="photoURL" name="photoURL" type="url" value={profileData.photoURL} onChange={handleInputChange} />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="headline">Headline</label>
            <input className="w-full p-2 border rounded" id="headline" name="headline" type="text" value={profileData.headline} onChange={handleInputChange} />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="location">Location</label>
            <input className="w-full p-2 border rounded" id="location" name="location" type="text" value={profileData.location} onChange={handleInputChange} />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="linkedin">LinkedIn URL</label>
            <input className="w-full p-2 border rounded" id="linkedin" name="linkedin" type="url" value={profileData.linkedin} onChange={handleInputChange} />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="skills">Skills (comma-separated)</label>
            <input className="w-full p-2 border rounded" id="skills" name="skills" type="text" value={profileData.skills} onChange={handleInputChange} />
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          <div className="flex gap-4">
            <button type="button" onClick={onCancel} className="w-full bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-lg">Cancel</button>
            <button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" type="submit">
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

