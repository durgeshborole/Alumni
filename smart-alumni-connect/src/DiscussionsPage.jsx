import React from 'react';

// --- Helper Icon Components ---
const HashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>;
const ChatAltIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;

// --- Mock Data for Discussions ---
const channels = [
  { id: 1, name: 'career-advice', active: true },
  { id: 2, name: 'interview-prep' },
  { id: 3, name: 'higher-studies' },
  { id: 4, name: 'general-chat' },
  { id: 5, name: 'bangalore-chapter' },
];

const activeThread = {
  channel: 'career-advice',
  posts: [
    { user: 'Rohan Verma \'15', avatar: 'https://i.pravatar.cc/150?img=59', text: 'Anyone have tips for cracking FAANG interviews? The system design round is what I\'m most worried about.', replies: 28 },
    { user: 'Anjali Mehta \'16', avatar: 'https://i.pravatar.cc/150?img=40', text: 'Great question! For system design, I highly recommend the "Grokking the System Design Interview" course. Also, practice explaining trade-offs (e.g., SQL vs. NoSQL, monolith vs. microservices) for common scenarios.', replies: 15 },
    { user: 'Priya Sharma \'19', avatar: 'https://i.pravatar.cc/150?img=31', text: 'Adding to that, don\'t just jump into the solution. Always clarify requirements first. Ask about scale, read/write patterns, and latency expectations.', replies: 9 },
  ]
};

// --- Discussions Page Component ---
const DiscussionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto flex h-screen">
        {/* Left Sidebar: Channels */}
        <aside className="w-1/4 bg-gray-800 text-gray-300 p-4 flex flex-col">
            <h2 className="text-xl font-bold text-white mb-4">Channels</h2>
            <ul className="space-y-2">
                {channels.map(channel => (
                    <li key={channel.id} className={`flex items-center p-2 rounded-lg cursor-pointer ${channel.active ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'}`}>
                        <HashIcon />
                        <span className="ml-2">{channel.name}</span>
                    </li>
                ))}
            </ul>
        </aside>

        {/* Main Content: Thread View */}
        <main className="w-3/4 flex flex-col">
            <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800"># {activeThread.channel}</h1>
                    <p className="text-gray-500">A place to discuss career paths, interviews, and professional growth.</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Create Post</button>
            </header>

            <div className="flex-grow p-6 overflow-y-auto bg-white">
                <div className="space-y-6">
                    {activeThread.posts.map((post, index) => (
                        <div key={index} className="flex items-start">
                            <img src={post.avatar} alt={post.user} className="w-12 h-12 rounded-full mr-4" />
                            <div className="flex-grow">
                                <p className="font-bold text-gray-800">{post.user}</p>
                                <p className="text-gray-700 mt-1">{post.text}</p>
                                <div className="flex items-center text-gray-500 text-sm mt-2 cursor-pointer hover:text-blue-600">
                                    <ChatAltIcon /> {post.replies} replies
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Message Input Box */}
            <footer className="bg-gray-100 p-4 border-t border-gray-200">
                <input 
                    type="text" 
                    placeholder={`Message in #${activeThread.channel}...`}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </footer>
        </main>
      </div>
    </div>
  );
};

export default DiscussionsPage;
