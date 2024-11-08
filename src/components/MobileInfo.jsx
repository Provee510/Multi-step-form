import React from 'react';
import topbg from '../assets/icons/bg-sidebar-mobile.svg';
import arcade from '../assets/icons/icon-arcade.svg'
import advanced from '../assets/icons/icon-advanced.svg';
import pro from '../assets/icons/icon-pro.svg'
import { IoToggleSharp } from "react-icons/io5";
const MobileInfo = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      
      {/* Upper Section  */}
      <div className="h-[30vh] relative flex items-center justify-center text-white">
        
        {/* Background Image */}
        <div className="img-bg">
          <img src={topbg} alt="" className="w-[500px] md:w-[850px]" />
        </div>
        
        {/* Numbered Steps */}
        <div className="absolute flex justify-center gap-5 items-center  mb-10">
          {['1', '2', '3', '4'].map((num, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 text-white font-bold"
            >
              {num}
            </div>
          ))}
        </div>
        
      </div>
      
      {/* Lower Section  */}
      <div className="h-[150vh] bg-blue-100 flex items-center justify-center text-white p-5">
        <div className="inner bg-white h-[550px] w-[400px] md:w-[700px] md:h-[700px] rounded-xl relative bottom-[95px] md:bottom-[160px] p-4">
         <div className="in-inner p-5">
         <div className="select text-slate-700 py-3">
            <div>
            <p className="text-3xl font-sans font-semibold">Personal info</p>
            </div>
           <div className="py-3 text-gray-500 text-lg">
           <p>Please provide your name, email address and phone number.</p>
           </div>
          </div>
          <div className="space-y-5">
            <p className="text-slate-600 relative top-5">Name</p>
          <div className="op   border border-gray-400 rounded-lg p-3 space-y-7 pt-4">
           <input type="text" 
           placeholder="e.g. Stephen King"
           />
          </div>
          </div>
          <div className="space-y-5">
            <p className="text-slate-600 relative top-5">Email Address</p>
          <div className="op   border border-gray-400 rounded-lg p-3 space-y-7 pt-4">
           <input type="text" 
           placeholder="e.g. Stephen King"
           />
          </div>
          </div>
          <div className="space-y-5">
            <p className="text-slate-600 relative top-5">Phone Number</p>
          <div className="op   border border-gray-400 rounded-lg p-3 space-y-7 pt-4">
           <input type="text" 
           placeholder="e.g. +1 234 567 890"
           />
          </div>
          </div>
         </div>
        </div>
      </div>

      {/* Next Step Button */}
      <div className="flex self-end  items-center p-4">
        <button className="bg-blue-800 p-3 w-[110px] flex items-center rounded-lg justify-center text-white">
          Next Step
        </button>
      </div>
      
    </div>
  );
};

export default MobileInfo;
