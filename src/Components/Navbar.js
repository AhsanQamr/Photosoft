import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-3 navbar">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-xl tracking-tight text-white">
            Photosoft
          </span>
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow mx-2 lg:mx-4 text-white">Features</div>
          <div className="text-sm lg:flex-grow mx-2 lg:mx-4 text-white">Community</div>
          <div className="text-sm lg:flex-grow mx-2 lg:mx-4 text-white">Affiliate</div>
          <div className="text-sm lg:flex-grow mx-2 lg:mx-4 text-white">API</div>
          <div className="text-sm lg:flex-grow mx-2 lg:mx-4 text-white">About</div>
        </div>
        <div className="flex items-center">
          <button className="text-white font-bold rounded mx-2">
            Login
          </button>
          <button
        className="text-white font-bold py-2 px-6 rounded mx-2"
        style={{
          borderRadius: '14px',
          background:
            'linear-gradient(261deg, #96C93D 0%, #00B09B 100%), linear-gradient(93deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)',
        }}
      >
        Signup
      </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
