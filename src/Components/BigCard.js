import React from "react";
import container from "../assets/cube_img.svg";
import IconWithHeadingText from "./IconWithHeadingText";
import diamond from "../assets/diamond.svg.svg";
import edit from "../assets/edit.svg.svg";
import HeadingText from "./HeadingText";

const BigCard = (props) => {

    const h1 = "Generate high-quality images"
    const d1 = "A good design is not only aesthetically pleasing, but also \n functional. It should be able to solve the problem "
    const h2 = "Edit and upscale images"
    const d2 = "A good design is not only aesthetically pleasing, but also \n functional. It should be able to solve the problem "

  return (
    <div className="max-w-screen-lg mx-auto bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 my-4">
      {/* Image at the top left with margin */}
      <img
        src={container}
        alt="Container"
        className="w-20 h-20 object-cover mt-0 ml-2 rounded-t-lg"
      />

      <div className="p-2 mt-2 text-start">
        {/* Heading and description with top margin */}
        <HeadingText
          heading={props.heading}
          description={""}
          alignment={"vertical"}
          verticalTextAlign="start"
          className="mt-1"
        />
      </div>

      <IconWithHeadingText
        image={diamond}
        heading={h1}
        description={d1}
      />

      <IconWithHeadingText
        image={edit}
        heading={h2}
        description={d2}
      />
    </div>
  );
};

export default BigCard;
