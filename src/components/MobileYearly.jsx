import React from 'react';
import topbg from '../assets/icons/bg-sidebar-mobile.svg';
import arcade from '../assets/icons/icon-arcade.svg'
import advanced from '../assets/icons/icon-advanced.svg';
import pro from '../assets/icons/icon-pro.svg'
import { IoToggleSharp } from "react-icons/io5";
const MobileYearly = () => {
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
        <div className="inner bg-white h-[600px] w-[400px] md:w-[700px] md:h-[700px] rounded-xl relative bottom-[95px] md:bottom-[160px] p-4">
         <div className="in-inner p-5">
         <div className="select text-slate-700 py-3">
            <div>
            <p className="text-3xl font-sans font-semibold">Select your plan</p>
            </div>
           <div className="py-3 text-gray-500 font-medium">
           <p>you have the option of monthly or yearly billing.</p>
           </div>
          </div>
          <div className="space-y-5">
          <div className="op  h-[95px] border border-gray-400 rounded-xl bg-blue-100 p-5 space-y-7 pt-4">
           <div className="count ">
           <div className="img flex  gap-4">
            <img src={arcade} alt="" className="h-12 w-12"/>
            <div className="img-text relative bottom-1">
            <div className="text-xl text-gray-600 font-semibold">Arcade</div>
            <div className="text-gray-500">$90/yr
           </div>
           <div>
           <p className="text-slate-800 text-sm font-medium">2 months free</p>
           </div>
           </div>
           </div>
           </div>
          </div>
          <div className="op  h-[95px]  border border-gray-400 rounded-xl p-5 space-y-7 pt-4">
           <div className="count ">
           <div className="img flex  gap-4">
            <img src={advanced} alt="" className="h-12 w-12"/>
            <div className="img-text relative bottom-1">
            <div className="text-xl text-gray-600 font-semibold">Advanced</div>
            <div className="text-gray-500">$120yro
           </div>
           <div>
           <p className="text-slate-800 text-sm font-medium">2 months free</p>
           </div>
           </div>
           </div>
           </div>
          </div>
          <div className="op  h-[95px] border border-gray-400 rounded-xl p-5 space-y-7 pt-4">
           <div className="count ">
           <div className="img flex  gap-4">
            <img src={pro} alt="" className="h-12 w-12"/>
            <div className="img-text relative bottom-1">
            <div className="text-xl text-gray-600 font-semibold">Pro</div>
            <div className="text-gray-500">$150/yr
           </div>
           <div>
           <p className="text-slate-800 text-sm font-medium">2 months free</p>
           </div>
           </div>
           </div>
           </div>
          </div>
          </div>
         </div>
         <div className="switch h-[100px] text-slate-800 flex justify-center md:w-[700px] ">
            <div className="m-y flex font-semibold translate md:scale-150 text-slate-500 gap-5 items-center relative bottom-3 md:bottom-0 md:right-5 ">
             <p>Monthly</p>
             <IoToggleSharp className="h-9 w-9"/>
           <p>Yearly</p>
             </div>
         </div>
        </div>
      </div>

      {/* Next Step Button aligned to the right */}
      <div className="flex justify-between  items-center p-4">
        <p className="text-slate-500 text-xl font-medium">Go Back</p>
        <button className="bg-blue-800 p-3 w-[110px] flex items-center rounded-lg justify-center text-white">
          Next Step
        </button>
      </div>
      
    </div>
  );
};

export default MobileYearly;
