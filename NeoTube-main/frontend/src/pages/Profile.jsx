import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Container } from '../Components/container/Container';

const Profile = () => {
    const [activeTab, setActiveTab] = useState("videos");
    const tabs = ["Videos", "Playlists", "Announcements", "Following"];

  return (

    //banner image
    <div className="bg-white">
    <div 
      className="h-32 mt-12 mr-6 mb-6 ml-6 bg-cover bg-center overflow-hidden"
      style={{ 
        backgroundImage: 'url(https://t3.ftcdn.net/jpg/03/08/93/46/360_F_308934657_5Q7cqp8BQSzrJ9DEJQ7G6bJfGAUJqETl.jpg)',
        backgroundSize: 'cover'
      }}
    >
    </div>

      {/* profile info */}
      <Container className="py-4">
      <div className="flex ml-10 items-center">
    <div className="mr-4">
    <img 
      src="https://t3.ftcdn.net/jpg/03/08/93/46/360_F_308934657_5Q7cqp8BQSzrJ9DEJQ7G6bJfGAUJqETl.jpg" 
      alt="Profile" 
      className="w-28 h-28 rounded-full" 
    />
    </div>
  <div className="flex-1 mt-3 ">
    <h2 className="text-2xl font-bold">Krishna</h2>
    <p className="text-gray-600">@Krishna</p>
    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
      <span>8 Followers</span>
      <span>•</span>
      <span>10 Following</span>
    </div>
  </div>
  <div>
    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1 rounded-md text-sm flex items-center">
      <EditIcon className="h-4 w-4 mr-1" /> Edit
    </button>
  </div>
</div>


   {/* Tabs */}
<div className="mt-8 border-b border-gray-300">
  <div className="flex">
    {tabs.map((tab) => (
      <div
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`flex-1 text-center px-4 py-2 cursor-pointer flex items-center justify-center transition-colors duration-300 relative 
          ${activeTab === tab ? "text-teal-500 bg-teal-100 shadow-sm" : "text-gray-600 hover:text-gray-900"}
        `}
      >
        {tab}

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-300"></div>
        {activeTab === tab && (
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-teal-500"></div>
        )}
      </div>
    ))}
  </div>
</div>




        {/*Inputs */}
        <div className="mt-6">
          <div className="border  border-gray-300 rounded-lg p-4">
            <textarea 
              className="w-full h-24 rounded-lg bg-gray-70 resize-none border-0 focus:ring-0 p-0 outline-none" 
              placeholder="Add A Announcement"
            ></textarea>
            <div className="flex justify-end mt-2">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1 rounded-md text-sm">
                Post
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;