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
      <div className="bg-gray-200 h-screen md:h-screen">
        <div className="flex md:flex-row flex-col ">
          <div>
            <div>
              <h1 className="text-5xl ml-9 mb-4 mt-24 font-medium md :ml-28 md:mt-32 md :mb-4">
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
              <div className="flex md:flex-row  md :mt-7 md :gap-5">
                <div className=" md:w-80 md:ml-28 ml-10 md :mt-0 mt-4">
                  <FontAwesomeIcon icon={faTruckFast} fontSize={28} />
                  <h2 className="my-2">Fast response</h2>
                  <p className="md :text-base text-md  text-gray-500">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
                <div className="md :w-80  md:ml-0 ml-10 md:mt-0 mt-4">
                  <FontAwesomeIcon icon={faBagShopping} fontSize={28} />
                  <h2 className="my-2">Easy to shop</h2>
                  <p className="md :text-base text-md  text-gray-500">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>

              <div className="flex md:flex-row  md :ml-28 md:gap-5 md :mt-7 ">
                <div className="md :w-80 md :ml-0 ml-10 md :mt-0 mt-4">
                  <FontAwesomeIcon icon={faTty} fontSize={28} />
                  <h2 className="my-2">24/7 support </h2>
                  <p className="md :text-base text-md  text-gray-500">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
                <div className="md :w-80 md :ml-0 ml-10 md :mt-0 mt-4">
                  <FontAwesomeIcon icon={faArrowsRotate} fontSize={28} />
                  <h2 className="my-2">hassle free returns</h2>
                  <p className="md :text-base text-md  text-gray-500">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={MyImage} alt="" className="md:mt-24 md :max-w-xl max-w-md"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
