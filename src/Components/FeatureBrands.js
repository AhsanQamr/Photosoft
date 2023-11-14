import React from "react";
import google from "../assets/google.png"
import dolby from "../assets/dolby.png"
import logitech from "../assets/logitech.png"
import buffer from "../assets/buffer.png"
import boardriders from "../assets/boardriders.png"
import cisco from "../assets/cisco.png"

const FeatureBrands = () => {
    return (
        <>
          <div className="flex flex-col justify-center items-evenly ">
            <p className="text-center text-gray-500">Features in</p>
            <div className="flex justify-between mt-5 mr-14 ml-14">
              <div className="mx-2">
                <img src={google} alt="google" />
              </div>
              <div className="mx-2">
                <img src={dolby} alt="dolby" />
              </div>
              <div className="mx-2">
                 <img src={logitech} alt="logitech" />
              </div>
              <div className="mx-2">
                <img src={buffer} alt="buffer" />
              </div>
              <div className="mx-2">
                <img src={boardriders} alt="boardriders" />
              </div>
              <div className="mx-2">
                <img src={cisco} alt="cisco" />
              </div>
            </div>
          </div>
        </>
      );
      
};

export default FeatureBrands;
