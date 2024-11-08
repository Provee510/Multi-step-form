import React, { useState } from 'react';
import topbg from '../assets/icons/bg-sidebar-mobile.svg';
import arcade from '../assets/icons/icon-arcade.svg';
import advanced from '../assets/icons/icon-advanced.svg';
import pro from '../assets/icons/icon-pro.svg';
import { IoToggleSharp } from "react-icons/io5";

const MobileYearly = () => {
  const [selectedAddOns, setSelectedAddOns] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const handleCheckboxChange = (option) => {
    setSelectedAddOns((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <div className="flex flex-col w-full h-screen">
      
      {/* Upper Section */}
      <div className="h-[30vh] relative flex items-center justify-center text-white">
        <div className="img-bg">
          <img src={topbg} alt="" className="w-[500px] md:w-[850px]" />
        </div>
        <div className="absolute flex justify-center gap-5 items-center mb-10">
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
      
      {/* Lower Section */}
      <div className="h-[150vh] bg-blue-100 flex items-center justify-center text-white p-5">
        <div className="inner bg-white h-[500px] w-[400px] md:w-[700px] md:h-[700px] rounded-xl relative bottom-[95px] md:bottom-[160px] p-4">
          <div className="in-inner p-5">
            <div className="select text-slate-700 py-3">
              <p className="text-3xl font-sans font-semibold">Pick add-ons</p>
              <p className="py-3 text-gray-500 font-medium">
                Add-ons help enhance your gaming experience.
              </p>
            </div>

            {/* Options Section */}
            <div className="space-y-5">
              {/* Online Service Option */}
              <div
                className={`op h-[70px] w-[290px] border rounded-lg px-4 py-2 flex items-center ${
                  selectedAddOns.onlineService ? 'border-blue-800 bg-blue-50' : 'border-gray-400'
                }`}
                onClick={() => handleCheckboxChange('onlineService')}
              >
                <input
                  type="checkbox"
                  checked={selectedAddOns.onlineService}
                  onChange={() => handleCheckboxChange('onlineService')}
                  className="h-5 w-5 rounded-xl mr-4 accent-blue-800"
                />
                <div className="flex flex-col text-sm">
                  <p className="text-slate-800 font-medium">Online service</p>
                  <p className="text-slate-500 text-xs">Access to multiplayer games</p>
                </div>
                <div className="price text-blue-800 ml-auto">
                  <p className="text-sm">+$1/mo</p>
                </div>
              </div>

              {/* Larger Storage Option */}
              <div
                className={`op h-[70px] w-[290px] border rounded-lg px-4 py-2 flex items-center ${
                  selectedAddOns.largerStorage ? 'border-blue-800 bg-blue-50' : 'border-gray-400'
                }`}
                onClick={() => handleCheckboxChange('largerStorage')}
              >
                <input
                  type="checkbox"
                  checked={selectedAddOns.largerStorage}
                  onChange={() => handleCheckboxChange('largerStorage')}
                  className="h-5 w-5 rounded-xl mr-4 accent-blue-800"
                />
                <div className="flex flex-col text-sm">
                  <p className="text-slate-800 font-medium">Larger storage</p>
                  <p className="text-slate-500 text-xs">Extra 1TB of cloud save</p>
                </div>
                <div className="price text-blue-800 ml-auto">
                  <p className="text-sm">+$2/mo</p>
                </div>
              </div>

              {/* Customizable Profile Option */}
              <div
                className={`op h-[70px] w-[290px] border rounded-lg px-4 py-2 flex items-center ${
                  selectedAddOns.customizableProfile ? 'border-blue-800 bg-blue-50' : 'border-gray-400'
                }`}
                onClick={() => handleCheckboxChange('customizableProfile')}
              >
                <input
                  type="checkbox"
                  checked={selectedAddOns.customizableProfile}
                  onChange={() => handleCheckboxChange('customizableProfile')}
                  className="h-5 w-5 rounded-xl mr-4 accent-blue-800"
                />
                <div className="flex flex-col text-sm">
                  <p className="text-slate-800 font-medium">Customizable profile</p>
                  <p className="text-slate-500 text-xs">Custom theme on your profile</p>
                </div>
                <div className="price text-blue-800 ml-auto">
                  <p className="text-sm">+$2/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center p-4">
        <p className="text-slate-500 text-xl font-medium">Go Back</p>
        <button className="bg-blue-800 p-3 w-[110px] flex items-center rounded-lg justify-center text-white">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default MobileYearly;
