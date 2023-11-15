import React, { useState } from "react";

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState("photo");

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex mt-10 max-w-screen-md flex-col items-center justify-center bg-gray-500 rounded-full">
      <div className="max-w-md bg-gray-900 rounded-xl shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="flex">
          <button
            onClick={() => openTab("photo")}
            className={`flex-1 py-2 px-4 text-white text-center ${
              activeTab === "photo"
                ? "bg-green-500 text-white rounded-xl"
                : "text-white rounded-xl"
            }`}
          >
            Photo
          </button>
          <button
            onClick={() => openTab("realistic")}
            className={`flex-1 py-2 px-4 text-center ${
              activeTab === "realistic"
                ? "bg-green-500 text-white rounded-xl"
                : " rounded-xl text-white"
            }`}
          >
            Realistic
          </button>
          <button
            onClick={() => openTab("anime")}
            className={`flex-1 py-2 px-4 text-center ${
              activeTab === "anime"
                ? "bg-green-500 text-white rounded-xl"
                : " rounded-xl text-white"
            }`}
          >
            Anime
          </button>
          <button
            onClick={() => openTab("cartoons")}
            className={`flex-1 py-2 px-4 text-center ${
              activeTab === "cartoons"
                ? "bg-green-500 text-white rounded-xl"
                : " rounded-xl text-white"
            }`}
          >
            Cartoons
          </button>
          <button
            onClick={() => openTab("artistic")}
            className={`flex-1 py-2 px-4 text-center ${
              activeTab === "artistic"
                ? "bg-green-500 text-white rounded-xl"
                : " rounded-xl text-white"
            }`}
          >
            Artistic
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabLayout;
