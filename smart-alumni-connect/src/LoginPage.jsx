import React, { useState } from 'react';
// Corrected the import path to resolve the module.
import { auth, db } from './firebase'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [gradYear, setGradYear] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isLogin && password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (isLogin) {
      // Handle Sign In
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        // Handle specific login errors
        switch (err.code) {
          case 'auth/user-not-found':
            setError('No account found with this email.');
            break;
          case 'auth/wrong-password':
            setError('Incorrect password. Please try again.');
            break;
          default:
            setError('Failed to sign in. Please check your credentials.');
            break;
        }
      }
    } else {
      // Handle Sign Up
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name: name,
          email: email,
          graduationYear: gradYear,
          role: 'Alumni',
          createdAt: new Date()
        });

      } catch (err) {
        // --- NEW: Handle specific sign-up errors ---
        switch (err.code) {
          case 'auth/email-already-in-use':
            setError('This email address is already registered. Please sign in.');
            break;
          case 'auth/invalid-email':
            setError('Please enter a valid email address.');
            break;
          case 'auth/weak-password':
            setError('Password is too weak. Please use at least 6 characters.');
            break;
          default:
            setError('Failed to create an account. Please try again.');
            break;
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Smart Alumni Connect</h1>
          <p className="text-gray-500">{isLogin ? 'Welcome back! Please sign in.' : 'Create an account to get started.'}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Full Name</label>
                <input className="shadow-sm appearance-none border rounded w-full py-2 px-3" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gradYear">Graduation Year</label>
                <input className="shadow-sm appearance-none border rounded w-full py-2 px-3" id="gradYear" type="number" value={gradYear} onChange={(e) => setGradYear(e.target.value)} required />
              </div>
            </>
          )}

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
            <input className="shadow-sm appearance-none border rounded w-full py-2 px-3" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input className="shadow-sm appearance-none border rounded w-full py-2 px-3" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          {error && <p className="text-red-500 text-xs italic">{error}</p>}

          <div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none" type="submit">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button type="button" className="font-semibold text-blue-500 hover:text-blue-600 ml-1" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

