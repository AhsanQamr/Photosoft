import "./App.css";
import Navbar from "./Components/Navbar";
import HeadingText from "./Components/HeadingText";
import EmailInput from "./Components/EmailInput";
import GridImages from "./Components/GridImages";
import FeatureBrands from "./Components/FeatureBrands";
import FeatureCards from "./Components/FeatureCards";
import bigImage from "./assets/big_image.png";
import BigCard from "./Components/BigCard";
import noiseBG from "./assets/Noise-Animation.png";
import image1 from "./assets/Figure → image-4.png.png";
import image2 from "./assets/Figure → image-5.png.png";
import image3 from "./assets/Figure → image-5_1.png.png";
import container from "./assets/cube_img.svg";
import explore1 from "./assets/explore1.png";
import explore2 from "./assets/explore2.png";
import explore3 from "./assets/explore3.png";
import TabLayout from "./Components/TabLayout";
import ExpandableCards from "./Components/ExpandableCards";
import Footer from "./Components/Footer";

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

      <div
        className="mx-auto"
        style={{ marginTop: "4.5rem", backgroundImage: { noiseBG } }}
      >
        <div className="mb-7 flex justify-center items-center">
          <HeadingText
            heading={heading_text_heading}
            description={heading_text_description}
            alignment={"vertical"}
            titleStyling={
              "ml-14"
            }
            subtitleStyling={
              "text-gray-500 text-[22px] font-[400] leading-[28px] w-[750px] mx-auto "
            }
          />
        </div>

        <div className="mb-12">
          <EmailInput />
        </div>
        <GridImages />
      </div>

      <FeatureBrands />

      <div className="w-fit flex justify-center items-center gap-20 mt-20 mb-10 mx-auto px-36">
        <HeadingText
          heading={heading_text_why}
          alignment={"start"}

        />

        <HeadingText
          description={desc_text_why}
          alignment={"start"}
          subtitleStyling={
            "text-gray-500 text-[22px] font-[400] leading-[28px] w-[580px]"
          }
        />
      </div>

      <FeatureCards />

      <div className="mt-20 mx-auto w-fit">
        <HeadingText
          heading={"Our Cutting-edge features Revolutionize AI Experience"}
          alignment={"center"}

        />
      </div>

      <div className="mt-7 mx-36">
        <img src={bigImage} alt="big" className="px-24" />
      </div>

      <BigCard />

      <div className="flex w-fit gap-10 mx-auto">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(26, 25, 25, 0.51) 0.03%, rgba(24, 24, 28, 0.00) 185.98%)",
          }}
          className="w-[470px] border-[#323232] border-[0.5px] px-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 my-4 flex justify-between items-center"
        >
          {/* Image at the top left with margin */}
          <img
            src={container}
            alt="Container"
            className="w-24 h-24 object-cover mt-2 rounded-t-lg ml-[-20px]"
          />

          <p className="text-white">
            Lightning Fast. Just start with an idea and see how it evolves{" "}
          </p>
        </div>

        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(26, 25, 25, 0.51) 0.03%, rgba(24, 24, 28, 0.00) 185.98%)",
          }}
          className="w-[470px] border-[#323232] border-[0.5px] px-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 my-4 flex justify-between items-center"
        >
          {/* Image at the top left with margin */}
          <img
            src={container}
            alt="Container"
            className="w-24 h-24 object-cover mt-2 rounded-t-lg ml-[-20px]"
          />

          <p className="text-white">
            Lightning Fast. Just start with an idea and see how it evolves{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-24 justify-center items-center">
        <HeadingText
          heading={"Explore Our AI tools"}
          description={
            "Meet the new standard for modern software development. Streamline issues, sprints, and product roadmaps."
          }
          alignment={"center"}

          subtitleStyling={
            "text-gray-500 text-[18px] font-[400] leading-[20px] w-[500px] mx-auto mb-10"
          }
        />

        <div className="flex gap-4">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(26, 25, 25, 0.51) 0.03%, rgba(24, 24, 28, 0.00) 185.98%)",
            }}
            className="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
          >
            {/* Image at the top left with margin */}
            <img
              src={explore1}
              alt="Container"
              className="w-[499px] h-[315px] object-contain mt-2 rounded-t-lg"
            />

            {/* Heading and description with top margin */}
            <div className="w-fit mr-auto mt-4">
              <HeadingText
                heading={"Text to Image"}
                description={"Make amazing creations by only using text."}
                alignment={"start"}
                subtitleStyling={
                  "text-[16px] leading-[20px] font-[400] text-white"
                }
              />
            </div>
          </div>

          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(26, 25, 25, 0.51) 0.03%, rgba(24, 24, 28, 0.00) 185.98%)",
            }}
            className="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
          >
            {/* Image at the top left with margin */}
            <img
              src={explore2}
              alt="Container"
              className="w-[499px] h-[315px] object-contain mt-2 rounded-t-lg"
            />

            {/* Heading and description with top margin */}
            <div className="w-fit mr-auto mt-4">
              <HeadingText
                heading={"Text to Image"}
                description={"Make amazing creations by only using text."}
                alignment={"start"}

                subtitleStyling={
                  "text-[16px] leading-[20px] font-[400] text-white"
                }
              />
            </div>
          </div>

          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(26, 25, 25, 0.51) 0.03%, rgba(24, 24, 28, 0.00) 185.98%)",
            }}
            className="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
          >
            {/* Image at the top left with margin */}
            <img
              src={explore3}
              alt="Container"
              className="w-[499px] h-[315px] object-contain mt-2 rounded-t-lg"
            />

            {/* Heading and description with top margin */}
            <div className="w-fit mr-auto mt-4">
              <HeadingText
                heading={"Text to Image"}
                description={"Make amazing creations by only using text."}
                alignment={"start"}

                subtitleStyling={
                  "text-[16px] leading-[20px] font-[400] text-white"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-24 justify-center items-center">
        <HeadingText
          heading={"AI Images in Various Style"}
          alignment={"center"}

        />

        <TabLayout />

        <div className="flex justify-center items-center">
          <div className="w-[400px] h-[280px]">
            <img src={image1} alt={``} className="object-contain rounded-lg" />
          </div>

          <div className="w-[400px] h-[280px]">
            <img src={image2} alt={``} className="object-contain rounded-lg" />
          </div>

          <div className="w-[400px] h-[280px]">
            <img src={image3} alt={``} className="object-contain rounded-lg" />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-24 mr-9 ml-5 justify-center items-center">
        <HeadingText
          heading={"Our AI Image Generator is for Everyone"}
          description={
            "A picture is worth a thousand words; with AI-generated images, that value is multiplied by a million. Whether writing an article, building a webpage, or running an ad campaign, you can instantly create a library of creative resources to express yourself fully. With this technology, you can unlock the power of visual communication and enhance the impact of your content."
          }
          alignment={"center"}

          subtitleStyling={
            "text-gray-500 text-[16px] font-[400] leading-[20px] w-[1000px] mx-auto mb-10"
          }
        />

        <FeatureCards />
      </div>

{/* 
          card with images with heading text component
 */}

      <div className="flex flex-row mt-24 mr-9 ml-5">
        <HeadingText
          heading={`Maximize your potential with Photosoft AI`}
          description={`Meet the new standard for modern software development. \n Streamline issues, sprints, and product roadmaps.`}
          alignment={"vertical"}

          subtitleStyling={
            "text-gray-500 text-[16px] font-[400] leading-[20px] w-[1000px] mx-auto mb-10"
          }
        />
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(26, 25, 25, 0.51) 0.03%, rgba(24, 24, 28, 0.00) 185.98%)",
          }}
          className="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
        >
          {/* Image at the top left with margin */}
          <img
            src={explore3}
            alt="Container"
            className="w-[499px] h-[315px] object-contain mt-2 rounded-t-lg"
          />
        </div>
      </div>

          {/* just heading text about questions */}
          <div className="flex justify-center items-center mt-24">
          <div className="ml-9 mr-9">
          <HeadingText
            heading = {"Oh. And if you have any questions…"}
            description = {"…then hopefully we've got the answers right here…"}
            alignment = {"vertical"}
            subtitleStyling = {"text-gray-500 text-[16px] font-[400] leading-[20px] w-[1000px] mx-auto mb-10 ml-20"}
          />
          </div>
          </div>

          <div className="max-w-screen-l mx-40">
          <ExpandableCards />
          </div>

          <div className="bg-black mt-20">
          <hr  />
            <Footer />
          </div>


        


    </>
  );
}

export default App;
