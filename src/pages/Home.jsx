import React from "react";
import Navbar from "../components/Navigation";
import Myimage from "../assets/sofa2.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="md:bg-green-900  bg-green-900 h-full md:max-w-full w-full md:h-screen items-center">
        <div className="flex ">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 ">
              <h1 className="ml-6 md:ml-28 mt-10 md:mt-32 text-6xl text-white  font-semibold">
                Modern Interior
              </h1>
              <h1 className="ml-6 mt-4 mb-11 md:mb-12 leading-10 text-6xl text-white font-semibold md:ml-28">
                Design
              </h1>
              <p className="text-white ml-6 md:ml-28 max-w-96 text-xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                illum aliquid fuga fugit, beatae accusamus fugiat nemo dolores
                est esse, consequuntur distinctio voluptate vitae doloribus
                sapiente, aliquam veniam repellendus exercitationem.
              </p>
              <div className="flex flex-row gap-2">
                <button className="ml-6 md:ml-28 border p-2 w-44 text-black bg-yellow-400 rounded-xl mt-2 font-medium">
                  Shop Now
                </button>
                <button className=" border p-2 w-44 text-white rounded-xl  mt-2  font-medium">
                  Explore
                </button>
              </div>
            </div>
            <img
              src={Myimage}
              alt=""
              className="md:ml-52 ml-2 md:max-w-sm max-w-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
