// // import React, { useState, useEffect } from 'react';
// // import { auth, db } from './firebase.js';
// // import { onAuthStateChanged, signOut } from 'firebase/auth';
// // import { doc, getDoc } from 'firebase/firestore';
// // import { Toaster, toast } from 'react-hot-toast'; // Import Toaster and toast

// // // Import all page components
// // import LoginPage from './LoginPage.jsx';
// // import Dashboard from './Dashboard.jsx';
// // import AlumniProfile from './AlumniProfile.jsx';
// // import MentorMatch from './MentorMatch.jsx';
// // import EventsPage from './EventsPage.jsx';
// // import FundraisingPage from './FundraisingPage.jsx';
// // import JobBoardPage from './JobBoardPage.jsx';
// // import DiscussionsPage from './DiscussionsPage.jsx';
// // import CompleteProfile from './CompleteProfile.jsx';
// // import EditProfile from './EditProfile.jsx';
// // import PublicProfile from './PublicProfile.jsx';

// // function App() {
// //   const [activeScreen, setActiveScreen] = useState('dashboard');
// //   const [currentUser, setCurrentUser] = useState(null);
// //   const [userProfile, setUserProfile] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [isEditingProfile, setIsEditingProfile] = useState(false);
// //   const [viewingUserId, setViewingUserId] = useState(null);

// //   const fetchUserProfile = async (user) => {
// //     if (user) {
// //       const userDocRef = doc(db, "users", user.uid);
// //       const docSnap = await getDoc(userDocRef);
// //       if (docSnap.exists()) {
// //         setUserProfile(docSnap.data());
// //       }
// //     } else {
// //       setUserProfile(null);
// //     }
// //   };

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
// //       setCurrentUser(user);
// //       await fetchUserProfile(user);
// //       setLoading(false);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const handleSignOut = async () => {
// //     await signOut(auth);
// //     setCurrentUser(null);
// //     setUserProfile(null);
// //     setViewingUserId(null);
// //     setActiveScreen('dashboard');
// //     toast.success('Signed out successfully!'); // Optional: Add a sign-out toast
// //   };
  
// //   const handleProfileSave = () => {
// //     fetchUserProfile(currentUser); 
// //     setIsEditingProfile(false);
// //     setActiveScreen('profile'); 
// //     toast.success('Profile saved successfully!'); // Show success message
// //   };
  
// //   const handleViewProfile = (userId) => {
// //     setViewingUserId(userId);
// //     setActiveScreen('publicProfile');
// //   };

// //   const handleNavClick = (screen) => {
// //     setViewingUserId(null);
// //     setIsEditingProfile(false);
// //     setActiveScreen(screen);
// //   };
  
// //   const renderScreen = () => {
// //     if (isEditingProfile) {
// //       return <EditProfile onSave={handleProfileSave} onCancel={() => setIsEditingProfile(false)} />;
// //     }

// //     if (viewingUserId) {
// //       return <PublicProfile userId={viewingUserId} />;
// //     }

// //     switch (activeScreen) {
// //       case 'dashboard': return <Dashboard />;
// //       case 'profile': return <AlumniProfile userProfile={userProfile} onEdit={() => setIsEditingProfile(true)} />;
// //       case 'match': return <MentorMatch onViewProfile={handleViewProfile} />;
// //       case 'events': return <EventsPage />;
// //       case 'fundraising': return <FundraisingPage />;
// //       case 'jobs': return <JobBoardPage />;
// //       case 'discussions': return <DiscussionsPage />;
// //       default: return <Dashboard />;
// //     }
// //   };

// //   if (loading) {
// //     return <div className="min-h-screen flex items-center justify-center text-lg font-semibold">Loading...</div>; // Improved loading state
// //   }
  
// //   if (!currentUser) {
// //     return <LoginPage />;
// //   }

// //   if (!userProfile?.profileComplete) {
// //     return <CompleteProfile onComplete={() => fetchUserProfile(currentUser)} />;
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <Toaster position="top-center" reverseOrder={false} /> {/* Add Toaster component here */}
// //       <header className="bg-white shadow-md">
// //         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
// //           <h1 className="text-xl font-bold text-gray-800">Smart Alumni Connect</h1>
// //           <div className="flex items-center space-x-4 flex-wrap">
// //             <button onClick={() => handleNavClick('dashboard')} className="text-gray-600 hover:text-blue-500 font-medium">Dashboard</button>
// //             <button onClick={() => handleNavClick('profile')} className="text-gray-600 hover:text-blue-500 font-medium">Profile</button>
// //             <button onClick={() => handleNavClick('match')} className="text-gray-600 hover:text-blue-500 font-medium">Mentor Match</button>
// //             <button onClick={() => handleNavClick('events')} className="text-gray-600 hover:text-blue-500 font-medium">Events</button>
// //             <button onClick={() => handleNavClick('fundraising')} className="text-gray-600 hover:text-blue-500 font-medium">Fundraising</button>
// //             <button onClick={() => handleNavClick('jobs')} className="text-gray-600 hover:text-blue-500 font-medium">Jobs</button>
// //             <button onClick={() => handleNavClick('discussions')} className="text-gray-600 hover:text-blue-500 font-medium">Discussions</button>
// //             <button onClick={handleSignOut} className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-red-600">Sign Out</button>
// //           </div>
// //         </nav>
// //       </header>
// //       <main>
// //         {renderScreen()}
// //       </main>
// //     </div>
// //   );
// // }

// // export default App;


// import React, { useState, useEffect } from 'react';
// import { auth, db } from './firebase.js';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { doc, getDoc } from 'firebase/firestore';
// import { Toaster, toast } from 'react-hot-toast';

// // Import all page components, assuming they are in the same 'src' folder
// // import LoginPage from './LoginPage.jsx';
// import Dashboard from './Dashboard.jsx';
// import AlumniProfile from './AlumniProfile.jsx';
// import MentorMatch from './MentorMatch.jsx';
// import EventsPage from './EventsPage.jsx';
// import FundraisingPage from './FundraisingPage.jsx';
// import JobBoardPage from './JobBoardPage.jsx';
// import DiscussionsPage from './DiscussionsPage.jsx';
// // import CompleteProfile from './CompleteProfile.jsx';
// import EditProfile from './EditProfile.jsx';
// import PublicProfile from './PublicProfile.jsx';

// function App() {
//   const [activeScreen, setActiveScreen] = useState('dashboard');
//   const [currentUser, setCurrentUser] = useState(null);
//   const [userProfile, setUserProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isEditingProfile, setIsEditingProfile] = useState(false);
//   const [viewingUserId, setViewingUserId] = useState(null);

//   const fetchUserProfile = async (user) => {
//     if (user) {
//       const userDocRef = doc(db, "users", user.uid);
//       const docSnap = await getDoc(userDocRef);
//       if (docSnap.exists()) {
//         setUserProfile(docSnap.data());
//       } else {
//         // Handle case where user exists in Auth but not Firestore
//         setUserProfile({ profileComplete: false }); 
//       }
//     } else {
//       setUserProfile(null);
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       setCurrentUser(user);
//       await fetchUserProfile(user);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleSignOut = async () => {
//     await signOut(auth);
//     setCurrentUser(null);
//     setUserProfile(null);
//     setViewingUserId(null);
//     setActiveScreen('dashboard');
//   };

//   const handleProfileSave = () => {
//     fetchUserProfile(currentUser);
//     setIsEditingProfile(false);
//     setActiveScreen('profile');
//     toast.success('Profile saved successfully!');
//   };

//   const handleViewProfile = (userId) => {
//     setViewingUserId(userId);
//     setActiveScreen('publicProfile');
//   };

//   const handleNavClick = (screen) => {
//     setViewingUserId(null);
//     setIsEditingProfile(false);
//     setActiveScreen(screen);
//   };

//   const renderScreen = () => {
//     if (isEditingProfile) {
//       return <EditProfile onSave={handleProfileSave} onCancel={() => setIsEditingProfile(false)} />;
//     }
//     if (viewingUserId) {
//       return <PublicProfile userId={viewingUserId} />;
//     }
//     switch (activeScreen) {
//       case 'dashboard': return <Dashboard userProfile={userProfile} onViewProfile={handleViewProfile} />;
//       case 'profile': return <AlumniProfile userProfile={userProfile} onEdit={() => setIsEditingProfile(true)} />;
//       case 'match': return <MentorMatch onViewProfile={handleViewProfile} />;
//       case 'events': return <EventsPage />;
//       case 'fundraising': return <FundraisingPage />;
//       case 'jobs': return <JobBoardPage />;
//       case 'discussions': return <DiscussionsPage />;
//       default: return <Dashboard userProfile={userProfile} onViewProfile={handleViewProfile} />;
//     }
//   };

//   if (loading) {
//     return <div className="min-h-screen flex items-center justify-center">Loading Application...</div>;
//   }
  
//   if (!currentUser) {
//     return <LoginPage />;
//   }

//   if (!userProfile?.profileComplete) {
//     return <CompleteProfile onComplete={() => fetchUserProfile(currentUser)} />;
//   }

//   return (
//     <div>
//       <Toaster position="top-center" />
//       <header className="bg-white shadow-md">
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//           <h1 className="text-xl font-bold text-gray-800">Smart Alumni Connect</h1>
//           <div className="flex items-center space-x-4 flex-wrap">
//             <button onClick={() => handleNavClick('dashboard')} className="text-gray-600 hover:text-blue-500 font-medium">Dashboard</button>
//             <button onClick={() => handleNavClick('profile')} className="text-gray-600 hover:text-blue-500 font-medium">Profile</button>
//             <button onClick={() => handleNavClick('match')} className="text-gray-600 hover:text-blue-500 font-medium">Mentor Match</button>
//             <button onClick={() => handleNavClick('events')} className="text-gray-600 hover:text-blue-500 font-medium">Events</button>
//             <button onClick={() => handleNavClick('fundraising')} className="text-gray-600 hover:text-blue-500 font-medium">Fundraising</button>
//             <button onClick={() => handleNavClick('jobs')} className="text-gray-600 hover:text-blue-500 font-medium">Jobs</button>
//             <button onClick={() => handleNavClick('discussions')} className="text-gray-600 hover:text-blue-500 font-medium">Discussions</button>
//             <button onClick={handleSignOut} className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-red-600">Sign Out</button>
//           </div>
//         </nav>
//       </header>
//       <main>
//         {renderScreen()}
//       </main>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// // Firebase imports are kept for other components that might use them indirectly
// import { auth, db } from './firebase.js';
// import { signOut } from 'firebase/auth';
// import { doc, getDoc } from 'firebase/firestore';
// import { Toaster, toast } from 'react-hot-toast';

// // We comment out the pages we want to bypass for the demo
// // import LoginPage from './LoginPage.jsx';
// // import CompleteProfile from './CompleteProfile.jsx';

// // Import all other page components
// import Dashboard from './Dashboard.jsx';
// import AlumniProfile from './AlumniProfile.jsx';
// import MentorMatch from './MentorMatch.jsx';
// import EventsPage from './EventsPage.jsx';
// import FundraisingPage from './FundraisingPage.jsx';
// import JobBoardPage from './JobBoardPage.jsx';
// import DiscussionsPage from './DiscussionsPage.jsx';
// import EditProfile from './EditProfile.jsx';
// import PublicProfile from './PublicProfile.jsx';

// function App() {
//   const [activeScreen, setActiveScreen] = useState('dashboard');
  
//   // --- MODIFICATION FOR DEMO ---
//   // We will simulate a logged-in user to bypass the login screen.
//   // The 'loading' state is set to false so the app loads instantly.
//   const [currentUser, setCurrentUser] = useState({ uid: 'demo-user-id' }); // Mock user
//   const [userProfile, setUserProfile] = useState({ // Mock profile data
//       name: 'John Doe',
//       email: 'John.doe@gmail.com',
//       headline: 'Student | Aspiring AI Engineer',
//       graduationYear: '2026',
//       profileComplete: true,
//       // --- NEW IMAGE URL ---
//       photoURL: 'https://tse3.mm.bing.net/th/id/OIP.qUZxcyYfkIiE1cZRHZS8YQHaHa?pid=ImgDet&w=197&h=197&c=7&dpr=1.3&o=7&rm=3'
//       // This is crucial to bypass the "Complete Profile" screen
//   });
//   const [loading, setLoading] = useState(false); 
//   // --- END MODIFICATION ---

//   const [isEditingProfile, setIsEditingProfile] = useState(false);
//   const [viewingUserId, setViewingUserId] = useState(null);

//   // The original useEffect for authentication is commented out for the demo
//   /*
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       setCurrentUser(user);
//       // ... fetch user profile logic
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);
//   */

//   // Sign out is kept for UI demonstration but won't have a persistent effect
//   const handleSignOut = async () => {
//     toast('Signing out...');
//     // In a real app, this would trigger the onAuthStateChanged listener
//     // For the demo, we'll just show a message.
//   };

//   const handleProfileSave = () => {
//     setIsEditingProfile(false);
//     setActiveScreen('profile');
//     toast.success('Profile saved successfully!');
//   };

//   const handleViewProfile = (userId) => {
//     setViewingUserId(userId);
//     setActiveScreen('publicProfile');
//   };

//   const handleNavClick = (screen) => {
//     setViewingUserId(null);
//     setIsEditingProfile(false);
//     setActiveScreen(screen);
//   };

//   const renderScreen = () => {
//     if (isEditingProfile) {
//       return <EditProfile onSave={handleProfileSave} onCancel={() => setIsEditingProfile(false)} />;
//     }
//     if (viewingUserId) {
//       return <PublicProfile userId={viewingUserId} />;
//     }
//     switch (activeScreen) {
//       case 'dashboard': return <Dashboard userProfile={userProfile} onViewProfile={handleViewProfile} />;
//       case 'profile': return <AlumniProfile userProfile={userProfile} onEdit={() => setIsEditingProfile(true)} />;
//       case 'match': return <MentorMatch onViewProfile={handleViewProfile} />;
//       case 'events': return <EventsPage />;
//       case 'fundraising': return <FundraisingPage />;
//       case 'jobs': return <JobBoardPage />;
//       case 'discussions': return <DiscussionsPage />;
//       default: return <Dashboard userProfile={userProfile} onViewProfile={handleViewProfile} />;
//     }
//   };
  
//   // --- MODIFICATION FOR DEMO ---
//   // The logic for loading, login, and profile completion is removed.
//   // The app will now always return the main dashboard view directly.

//   return (
//     <div>
//       <Toaster position="top-center" />
//       <header className="bg-white shadow-md">
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//           <h1 className="text-xl font-bold text-gray-800">Smart Alumni Connect</h1>
//           <div className="flex items-center space-x-4 flex-wrap">
//             <button onClick={() => handleNavClick('dashboard')} className="text-gray-600 hover:text-blue-500 font-medium">Dashboard</button>
//             <button onClick={() => handleNavClick('profile')} className="text-gray-600 hover:text-blue-500 font-medium">Profile</button>
//             <button onClick={() => handleNavClick('match')} className="text-gray-600 hover:text-blue-500 font-medium">Mentor Match</button>
//             <button onClick={() => handleNavClick('events')} className="text-gray-600 hover:text-blue-500 font-medium">Events</button>
//             <button onClick={() => handleNavClick('fundraising')} className="text-gray-600 hover:text-blue-500 font-medium">Fundraising</button>
//             <button onClick={() => handleNavClick('jobs')} className="text-gray-600 hover:text-blue-500 font-medium">Jobs</button>
//             <button onClick={() => handleNavClick('discussions')} className="text-gray-600 hover:text-blue-500 font-medium">Discussions</button>
//             <button onClick={handleSignOut} className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-red-600">Sign Out</button>
//           </div>
//         </nav>
//       </header>
//       <main>
//         {renderScreen()}
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
// Firebase imports are kept as they are needed by child components
import { auth, db } from './firebase.js';
import { Toaster, toast } from 'react-hot-toast';

// Import all page components, assuming they are in the 'src' folder
import Dashboard from './Dashboard.jsx';
import AlumniProfile from './AlumniProfile.jsx';
import MentorMatch from './MentorMatch.jsx';
import EventsPage from './EventsPage.jsx';
// import FundraisingPage from './FundraisingPage.jsx';
import JobBoardPage from './JobBoardPage.jsx';
import DiscussionsPage from './DiscussionsPage.jsx';
import EditProfile from './EditProfile.jsx';
import PublicProfile from './PublicProfile.jsx';

// We comment out the pages we want to bypass for the demo
// import LoginPage from './LoginPage.jsx';
// import CompleteProfile from './CompleteProfile.jsx';

function App() {
  const [activeScreen, setActiveScreen] = useState('dashboard');
  
  // --- MODIFICATION FOR DEMO ---
  // A simulated logged-in user to bypass the login screen.
  // The 'loading' state is false so the app loads instantly.
  const [userProfile, setUserProfile] = useState({
       name: 'John Doe',
      email: 'John.doe@gmail.com',
      headline: 'Student | Aspiring AI Engineer',
      graduationYear: '2026',
      skills: ['React', 'Python', 'Machine Learning','AWS'],
      profileComplete: true, // This is crucial to bypass the "Complete Profile" screen
      photoURL: 'https://th.bing.com/th/id/OIP.k2IZM7U-TjbrVvpp1CeJ8gHaHa?w=212&h=212&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'
  });
  // --- END MODIFICATION ---

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [viewingUserId, setViewingUserId] = useState(null);

  // Sign out is kept for UI demonstration
  const handleSignOut = () => {
    toast('Signing out...');
    // In a real app, this would be `signOut(auth)`. For the demo, we just show a message.
  };

  const handleProfileSave = () => {
    setIsEditingProfile(false);
    setActiveScreen('profile');
    toast.success('Profile saved successfully!');
  };

  const handleViewProfile = (userId) => {
    setViewingUserId(userId);
    setActiveScreen('publicProfile');
  };

  const handleNavClick = (screen) => {
    setViewingUserId(null);
    setIsEditingProfile(false);
    setActiveScreen(screen);
  };

  const renderScreen = () => {
    if (isEditingProfile) {
      return <EditProfile onSave={handleProfileSave} onCancel={() => setIsEditingProfile(false)} />;
    }
    if (viewingUserId) {
      return <PublicProfile userId={viewingUserId} />;
    }
    switch (activeScreen) {
      case 'dashboard': return <Dashboard userProfile={userProfile} onViewProfile={handleViewProfile} />;
      case 'profile': return <AlumniProfile userProfile={userProfile} onEdit={() => setIsEditingProfile(true)} />;
      case 'match': return <MentorMatch userProfile={userProfile} onViewProfile={handleViewProfile} />;
      case 'events': return <EventsPage />;
      // case 'fundraising': return <FundraisingPage />;
      case 'jobs': return <JobBoardPage />;
      case 'discussions': return <DiscussionsPage />;
      default: return <Dashboard userProfile={userProfile} onViewProfile={handleViewProfile} />;
    }
  };
  
  return (
    <div>
      <Toaster position="top-center" />
      <header className="bg-white shadow-md sticky top-0 z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Smart Alumni Connect</h1>
          <div className="flex items-center space-x-4 flex-wrap">
            <button onClick={() => handleNavClick('dashboard')} className="text-gray-600 hover:text-blue-500 font-medium">Dashboard</button>
            <button onClick={() => handleNavClick('profile')} className="text-gray-600 hover:text-blue-500 font-medium">Profile</button>
            <button onClick={() => handleNavClick('match')} className="text-gray-600 hover:text-blue-500 font-medium">Mentor Match</button>
            <button onClick={() => handleNavClick('events')} className="text-gray-600 hover:text-blue-500 font-medium">Events</button>
            {/* <button onClick={() => handleNavClick('fundraising')} className="text-gray-600 hover:text-blue-500 font-medium">Fundraising</button> */}
            <button onClick={() => handleNavClick('jobs')} className="text-gray-600 hover:text-blue-500 font-medium">Jobs</button>
            <button onClick={() => handleNavClick('discussions')} className="text-gray-600 hover:text-blue-500 font-medium">Discussions</button>
            <button onClick={handleSignOut} className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-red-600">Sign Out</button>
          </div>
        </nav>
      </header>
      <main>
        {renderScreen()}
      </main>
    </div>
  );
}

export default App;

