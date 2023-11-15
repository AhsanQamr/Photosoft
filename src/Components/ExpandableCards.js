import React from "react";
import ExpandableCard from "./ExpandableCard";

const ExpandableCards = (props) => {
  return (
    <div className="flex flex-col gap-1 mt-24 mx-auto">
      <ExpandableCard text="What is an AI image generator?" />
      <ExpandableCard text="How does it work?" />
      <ExpandableCard text="How can I use it?" />
      <ExpandableCard text="What type of images and art can the AI Image Generator create?" />
      <ExpandableCard text="Is there a free AI art generator? " />
      <ExpandableCard text="What is the best AI art generator now? " />
    </div>
  );
};

export default ExpandableCards;
