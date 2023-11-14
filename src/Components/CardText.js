import React from "react";
import HeadingText from "./HeadingText";
import container from "../assets/cube_img.svg";

const CardText = (props) => {
  return (
    <div className="max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 my-4">
      {/* Image at the top left with margin */}
      <img
        src={container}
        alt="Container"
        className="w-20 h-20 object-cover mt-2 ml-2 rounded-t-lg"
      />

      <div className="p-2 text-start">
        {/* Heading and description with top margin */}
        <HeadingText
          heading={props.heading}
          description={props.description}
          alignment={"vertical"}
          verticalTextAlign = "start"
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default CardText;
