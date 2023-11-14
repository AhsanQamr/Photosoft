import React from "react";

const IconWithHeadingText = (props) => {
  return (
    <div className="flex items-center">
      <img src={props.image} alt="some_icon" className="ml-6 h-7 w-7" />

      <div>
        <h5 className="font-bold text-white ml-4">{props.heading}</h5>
        <p className="text-gray-500 whitespace-pre-line ml-4">
          {props.description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default IconWithHeadingText;
