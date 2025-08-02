import React from "react";

const username = ({ params }) => {
  return (
    <div>
      <div className="relative">
        <img
          className=" mt-4 z-10 w-screen h-[40vh] object-cover "
          src="https://www.prodraw.net/fb_cover/images/fb_cover_65.jpg"
          alt=""
        />
        <img
          className="absolute left-[45%] w-[150px] rounded-full ring-2 ring-slate-300 -bottom-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTubmn3UHtYUiows8ASp8bOqKOWE7rmQqtFmQ&s"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 justify-center items-center mt-24  text-white">
        <span className="text-3xl font-bold m-2">@{params.username}</span>
        <span className="text-slate-400">
          Make 3D website compoents for you
        </span>
        <span className="text-slate-400">
          620 Followers . 43 Posts . 4563800 Views
        </span>
      </div>
      <div className="mt-16 h-[50vh]  flex justify-center items-center gap-8 ">
        <div className="bg-slate-800 rounded-lg p-2 w-[40%] h-full ring ring-slate-600 ">
          <span className="text-lg text-slate-200 font-semibold flex flex-col  items-center">
            <img className="invert" width={40} src="./fans.gif" alt="" />{" "}
            Supporters
          </span>
          <ul className="w-[96%]  flex flex-col gap-1 mt-4 h-[34vh] mx-auto overflow-y-auto text-white ">
            <li className="flex gap-1 items-center text-slate-400">
              <img className="invert" width={30} src="./profile.gif" alt="" />
              <span className="text-white font-bold">Harsh</span> donated{" "}
              <span className="text-white font-bold">200$</span> with a message
              "
              <span className="text-white font-semibold">
                love you harsh bhau{" "}
              </span>
              "
            </li>
          </ul>
        </div>
        <div className="bg-slate-800 rounded-lg p-2 w-1/2 h-full ring ring-slate-600">
          <span className="text-lg text-slate-200 font-semibold flex flex-col  items-center">
            <img className="invert" width={40} src="./fund.gif" alt="" /> Fund
            Creator
          </span>
          <div className="flex items-center flex-col gap-2 mt-6">
            <input placeholder="Enter Name" type="text" className="input-dark" />
            <input placeholder="Enter Name" type="text" className="input-dark" />
            <input placeholder="Enter Name" type="text" className="input-dark" />
            <button className=" m-2 w-fit bg-blue-500 hover:bg-blue-700 rounded-md px-4 py-2 text-white font-bold">Fund</button>
          </div>
          <div className="w-1/2 mx-auto flex justify-around items-center mt-2 text-slate-400">
            <button className="bg-slate-700 border border-slate-400 px-2 py-1 rounded-md">Fund $10</button>
            <button className="bg-slate-700 border border-slate-400 px-2 py-1 rounded-md">Fund $20</button>
            <button className="bg-slate-700 border border-slate-400 px-2 py-1 rounded-md">Fund $30</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default username;
