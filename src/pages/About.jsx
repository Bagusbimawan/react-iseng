import React from "react";
import Navbar from "../components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faBagShopping,
  faTruckFast,
  faTty,
} from "@fortawesome/free-solid-svg-icons";
import MyImage from "../assets/sofa1.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="md:bg-gray-200 bg-gray-200 h-full md:h-screen w-full md:w-full">
        <div className="flex md:flex-row flex-col ">
          <div>
            <div>
              <h1 className="text-5xl ml-9 mb-4 mt-24 font-medium md:ml-28 md:mt-32 md:mb-4">
                Why Choose Us
              </h1>
              <p className="max-w-md  ml-10 text-base text-gray-700 fo md:ml-28 font-sans ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                assumenda sequi quaerat, eum necessitatibus quis similique
                recusandae, sapiente consequatur porro quasi illo omnis
                excepturi illum corrupti aliquid officia ad sit.
              </p>
            </div>

            <div>
              <div className="flex md:flex-row  md:mt-7 md:gap-5">
                <div className=" md:w-80 md:ml-28 ml-10 md:mt-0 mt-4 md:max-w-64 w-96">
                  <FontAwesomeIcon icon={faTruckFast} fontSize={28} />
                  <h2 className="my-2">Fast response</h2>
                  <p className="md :text-base text-md  text-gray-500">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
                <div className="md:ml-0 ml-10 md:mt-0 mt-4 md:max-w-64 w-96">
                  <FontAwesomeIcon icon={faBagShopping} fontSize={28} />
                  <h2 className="my-2">Easy to shop</h2>
                  <p className="md :text-base text-md  text-gray-500">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>

              <div className="flex md:flex-row  md:mt-7 md:gap-5">
                <div className=" md:w-80 md:ml-28 ml-10 md:mt-0 mt-4 md:max-w-64 w-96">
                  <FontAwesomeIcon icon={faTty} fontSize={28} />
                  <h2 className="my-2">Fast response</h2>
                  <p className="md:text-base text-md  text-gray-500">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
                <div className="md:ml-0 ml-10 md:mt-0 mt-4 md:max-w-64 w-96">
                  <FontAwesomeIcon icon={faArrowsRotate} fontSize={28} />
                  <h2 className="my-2">Easy to shop</h2>
                  <p className="md :text-base text-md  text-gray-500">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={MyImage} alt="" className="md:mt-24 md:max-w-xl max-w-sm md:w-96 w-96"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
