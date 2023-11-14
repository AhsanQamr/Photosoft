import React from "react";

import CardText from "./CardText";

// display 3 cards in flex 

const FeatureCards = () => {

    const card1Heading = "Free to use"
    const card1Description = "Try out a free AI art generator today."

    const card2Heading = "Fully Customizable"
    const card2Description = "Try experimenting with different artistic styles."
    
    const card3Heading = "Fully Customizable"
    const card3Description = "High-quality images that can be used freely on various resolutions."
    
        return (
            <div class="flex flex-wrap justify-center gap-4">
                <CardText 
                    heading = {card1Heading}
                    description = {card1Description} />
                <CardText 
                    heading = {card2Heading}
                    description = {card2Description} />
                <CardText 
                    heading = {card3Heading}
                    description = {card3Description} />
            </div>
        );
    
    }

export default FeatureCards