import React from "react";

const EmailInput = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-1/3 p-3 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-gray-500"            
        />
        <button
          className="px-20 py-2 bg-green-500 text-white font-bold rounded-lg mt-4 "
          style={{
            borderRadius: "10px",
            background:
              "linear-gradient(261deg, #96C93D 0%, #00B09B 100%), linear-gradient(93deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)",
          }}
        >
          Join the waitlist
        </button>
      </div>
    </>
  );
};

export default EmailInput;
