import React, { useState } from 'react';
import left from '../assets/icons/bg-sidebar-desktop.svg';

const Personal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [nameError, setNameError] = useState('');

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    // only numbers
    const regex = /^[0-9+ ]*$/;

    if (regex.test(inputValue) || inputValue === '') {
      setPhone(inputValue);
      setPhoneError('');
    } else {
      setPhoneError('Please enter a valid phone number');
    }
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    // Prevent numbers input
    const regex = /^[a-zA-Z ]*$/;

    if (regex.test(inputValue) || inputValue === '') {
      setName(inputValue);
      setNameError('');
    } else {
      setNameError('Please enter a valid name without numbers');
    }
  };

  return (
    <div className="p-10 bg-slate-500 lg:flex flex-col items-center justify-center">
      <div className="flex bg-white items-center justify-center p-7 w-[800px] rounded-2xl h-[610px]">
        {/* Left Side */}
        <div className="right-4 top-[10px] relative w-[300px] p-4 h-[600px] flex justify-center">
          {/* Background Image */}
          <img src={left} alt="" className="absolute inset-0 w-full h-[580px] object-cover rounded-2xl" />

          {/* Steps  */}
          <div className="steps-container relative right-9 z-10 mt-8 flex flex-col gap-8 px-8">
            {/* Step 1 */}
            <div className="flex gap-3">
              <div className="one-div h-9 w-9 rounded-full bg-blue-200 flex items-center justify-center">
                <p>1</p>
              </div>
              <div className="step-div">
                <p className="text-sm text-gray-400">STEP 1</p>
                <h1 className="text-white text-sm">YOUR INFO</h1>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-3">
              <div className="one-div h-9 w-9 rounded-full border border-white flex items-center justify-center">
                <p className="text-white">2</p>
              </div>
              <div className="step-div">
                <p className="text-sm text-gray-400">STEP 2</p>
                <h1 className="text-white text-sm">SELECT PLAN</h1>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-3">
              <div className="one-div h-9 w-9 rounded-full border border-white flex items-center justify-center">
                <p className="text-white">3</p>
              </div>
              <div className="step-div">
                <p className="text-sm text-gray-400">STEP 3</p>
                <h1 className="text-white text-sm">ADD-ONS</h1>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-3">
              <div className="one-div h-9 w-9 rounded-full border border-white flex items-center justify-center">
                <p className="text-white">4</p>
              </div>
              <div className="step-div">
                <p className="text-sm text-gray-400">STEP 4</p>
                <h1 className="text-white text-sm">SUMMARY</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-side bg-white w-[500px] h-[600px] flex items-center justify-center">
          <div className="right-inner bg-white p-5 relative lg:bottom-16">
            <div className="info mb-10">
              <h1 className="text-4xl font-bold mb-2 text-blue-950"> Personal info</h1>
              <p className="text-sm text-gray-400">Please provide your name, email address, and phone number.</p>
            </div>
            <div className="input-1 mb-5">
              <label className="block mb-2 text-sm text-gray-500">Name</label>
              <input
                type="text"
                placeholder=" e.g. Stephen King"
                value={name}
                onChange={handleNameChange}
                className={`w-full px-3 py-2 text-sm text-gray-700 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 ${nameError ? 'border-red-500' : ''}`}
              />
              {nameError && <span className="text-red-500 text-sm">{nameError}</span>}
            </div>
            <div className="input-2 mb-5">
              <label className="block mb-2 text-sm text-darkSlateGrey">Email Address</label>
              <input
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="number mb-5">
              <label className="block mb-2 text-sm text-darkSlateGrey">Phone Number</label>
              <input
                type="text"
                placeholder="e.g. +1 234 567 890"
                value={phone}
                onChange={handlePhoneChange}
                className={`w-full px-3 py-2 text-sm text-gray-700 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 ${phoneError ? 'border-red-500' : ''}`}
              />
              {phoneError && <span className="text-red-500 text-sm">{phoneError}</span>}
            </div>
            <div className="submit-btn flex justify-end items-end">
              <button className="w-30% px-6 py-3 text-sm font-bold text-white bg-blue-900 rounded-lg focus:outline-none hover:bg-blue-950 relative lg:top-36">
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;

