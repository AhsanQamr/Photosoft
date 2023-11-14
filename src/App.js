import "./App.css";
import Navbar from "./Components/Navbar";
import HeadingText from "./Components/HeadingText";
import EmailInput from "./Components/EmailInput";
import GridImages from "./Components/GridImages";
import FeatureBrands from "./Components/FeatureBrands";
import FeatureCards from "./Components/FeatureCards";
import bigImage from "./assets/big_image.png"
import BigCard from "./Components/BigCard";

const heading_text_heading = "Generate your ideas into stunning visuals";
const heading_text_description =
  "Meet the new standard for modern software development. Streamline issues, sprints, and product roadmaps.";

const heading_text_why = "Why Photosoft AI";
const desc_text_why =
  "Meet the new standard for modern software development.\n Streamline issues, sprints, and product roadmaps.";


function App() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "4.5rem" }}>
        <HeadingText
          heading={heading_text_heading}
          description={heading_text_description}
          alignment={"vertical"}
          verticalTextAlign = {"center"}
        />

        <EmailInput />

        <GridImages />
      </div>

      <FeatureBrands />

      <div style={{ marginTop: "3rem"}} className="ml-10">
        <HeadingText
          heading={heading_text_why}
          description={desc_text_why}
          alignment={"horizontal"}
          verticalTextAlign = {"center"}
        />
      </div>

      <FeatureCards />

    <div className="mt-10">
    <HeadingText
        heading = {"Our Cutting-edge features Revolutionize AI Experience"}
        description = {""}
        alignment={"vertical"}
        verticalTextAlign = {"center"} />
    
    </div>

    <div className="mt-7 mx-10">
    <img src={bigImage} alt="big" />
    </div>

    <BigCard />

    </>

  );
}

export default App;
