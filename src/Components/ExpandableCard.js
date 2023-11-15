import React from "react";
import addIcon from "../assets/plus_icon.svg";

const ExpandableCard = (props) => {
  return (
    <div className="flex bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-1 mt-1 text-start flex-1">
        <p className="text-gray-500 whitespace-pre-line ml-4">{props.text}</p>
      </div>
      <img
        src={addIcon}
        alt="Container"
        className="w-10 h-10 object-cover mt-0 mr-2 rounded-lg"
      />
    </div>
  );
};

export default ExpandableCard;
