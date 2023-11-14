import React from "react";

const HeadingText = (props) => {
  // text heading and description
  const flexDirectionStyle =
    props.alignment === 'vertical' ? 'flex-col' : 'flex-row';
  // if horizontal heading to the start of page with margin left
  // if vertical heading to the center or start of the page
  const flexStart =
    props.alignment === 'vertical'
    ? props.verticalTextAlign === 'center'
      ? 'justify-center'
      : 'justify-start'
    : 'justify-start ml-7';

  const textAlign =
    // if horizontal then text to the end with line breaks
    props.alignment === 'vertical'
      ? props.verticalTextAlign === 'center'
        ? 'items-center'
        : 'items-start'
      : 'items-start';

  const description =
    // if horizontal then text to the end with line breaks
    props.alignment === 'vertical' ? 'text-start' : 'text-end';

  return (
    <div className={`flex ${flexStart} ${textAlign} ${flexDirectionStyle} ml-5`}>
      <h2 className="text-3xl font-bold text-white">{props.heading}</h2>
      <p className={` ${description} text-gray-500`}>{props.description}</p>
    </div>
  );
};

export default HeadingText;
