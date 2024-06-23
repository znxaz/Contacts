import React, { useState } from "react";
import { useSharedDropDownState } from "../context/dropdownContext";
import contacts from "../assets/images/contacts.png";
import defaultPfp from "../assets/images/defPfp.png";
import { SignOut } from "../api/auth/AuthService";

const NavBar = () => {
  const {sharedState, setSharedState} = useSharedDropDownState(); 
  const showDropDown = () => {
    setSharedState(!sharedState);
  };
  return (
    <div>
      <nav className="w-screen h-1/3 border-2 flex justify-between"
        onClick={() => sharedState ? showDropDown() : sharedState}>
        <div className="flex justify-center items-center">
          <img
            src={contacts}
            alt="Logo"
            className="w-14 h-14 ml-4 max-w-14 max-h-14 cursor-pointer"
          />
        </div>
        <div className="space-x-7 m-4 flex flex-row justify-between items-center text-3xl font-extrabold">
          <a className="hover:underline cursor-pointer"  onClick={()=> window.location.href = "/"}>Home</a>
          <a className="hover:underline cursor-pointer" onClick={()=> window.location.href = "/contacts"}>Contacts</a>
        </div>
        <div className="flex justify-between items-center flex-col">
        <img
          src={defaultPfp}
          alt="pfp"
          onClick={showDropDown}
          className="w-14 h-14 ml-4 max-w-14 max-h-14  mt-4 mx-4 mb-1 rounded-full"
        />
      </div>
      </nav>

      {sharedState && (
        <div className="flex justify-end right-0 max-w-1/6 h-1/4 w-36 absolute mx-2 mt-2">
          <ul className="flex justify-center items-center bg-slate-100 flex-col w-full h-full rounded-xl">

              <li key="MyProfile" className="bg-transparent border border-transparent font-extrabold text-gray-900 text-sm block w-full p-2.5 hover:bg-white">
                <a href="">My Profile</a></li>
                <li key="Settings" className="bg-transparent border border-transparent font-extrabold text-gray-900 text-sm block w-full p-2.5 hover:bg-white">
                <a href="">Settings</a></li>
                <li key="SignOut" className="bg-transparent border border-transparent font-extrabold text-gray-900 text-sm block w-full p-2.5 hover:bg-white">
                <a href="" onClick={SignOut}>Sign Out</a></li>
          </ul>
        </div>
      )}
      </div>
    
  );
};
export default NavBar;
