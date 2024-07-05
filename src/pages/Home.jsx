import React from "react";
import Navbar from "../components/Navigation";
import Myimage from "../assets/sofa2.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-green-900 h-full sm:max-w-full w-full sm:h-screen">
        <div className="flex ">
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1 ">
              <h1 className="ml-12 sm:ml-28 mt-10 sm:mt-32 text-6xl text-white  font-semibold">
                Modern Interior
              </h1>
              <h1 className="ml-12 mt-4 mb-11 sm:mb-12 leading-10 text-6xl text-white font-semibold sm:ml-28">
                Design
              </h1>
              <p className="text-white ml-12 sm:ml-28 max-w-96 text-xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                illum aliquid fuga fugit, beatae accusamus fugiat nemo dolores
                est esse, consequuntur distinctio voluptate vitae doloribus
                sapiente, aliquam veniam repellendus exercitationem.
              </p>
              <div className="flex flex-row gap-2">
                <button className="ml-12 sm:ml-28 border p-2 w-44 text-black bg-yellow-400 rounded-xl  my-3 font-medium">
                  Shop Now
                </button>
                <button className=" border p-2 w-44 text-white rounded-xl  my-3 font-medium">
                  Explore
                </button>
              </div>
            </div>
            <img
              src={Myimage}
              alt=""
              style={{ width: "500px", height: "450px" }}
              className="sm:ml-52 ml-2 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
