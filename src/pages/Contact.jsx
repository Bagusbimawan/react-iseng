import React from "react";
import Navbar from "../components/Navigation";
import Myimage from "../assets/sofa3.png"

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="md:bg-gray-200 bg-gray-200 md:h-full h-full flex w-full md:w-full md:flex-row flex-col items-center">
        <div>
          <img src={Myimage} alt="" className="md:max-w-xl max-w-sm"/>
        </div>
        <div className="md:ml-48 ml-5">
          <div>
            <h1 className="text-2xl">We Help you make design</h1>
            <h1 className="text-2xl">Modern Interior Design</h1>
          </div>
          <div>
            <p className="md:text-xl md:max-w-96 mt-2 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              provident quia beatae accusamus quam labore omnis magni explicabo
              eligendi dolore, consequatur iusto itaque repudiandae dicta a
              mollitia ullam unde magnam.
            </p>
            <button className=" border p-2 w-44 text-black rounded-xl  my-3 font-medium border-gray-700">
                  Explore
                </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
