import React from "react";

const App = () => {
  return (
    <div className="flex flex-1 w-full h-screen text-center justify-center bg-black-900 relative flex-col justify-between p-2">
      <div className="flex w-full justify-between">
        <div className="text-left cursor-pointer">
          <h1 className="text-white-300 text-2xl">Timofei</h1>
          <h1 className="text-white-300">Baibekov</h1>
        </div>
        <div className="text-right cursor-pointer">
          <h1 className="text-white-300 text-md">
            <a className="effect-underline" href="">
              about me
            </a>
          </h1>
          <h1 className="text-white-300 text-md my-2">
            <a className="effect-underline" href="">
              projects
            </a>
          </h1>
          <h1 className="text-white-300 text-md">
            <a className="effect-underline" href="">
              contacts
            </a>
          </h1>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="flex flex-col text-left">
          <h1 className="text-white-300">
            <a className="effect-underline" href="">
              telegram
            </a>
          </h1>
          <h1 className="text-white-300">
            <a className="effect-underline" href="">
              mail
            </a>
          </h1>
          <h1 className="text-white-300">
            <a className="effect-underline" href="">
              instagram
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default App;
