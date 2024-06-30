import React from "react";
import defaultPfp from "../assets/images/defPfp.png";
import phoneIcon from "../assets/images/phoneIcon.png";
import settings from "../assets/images/settings.png";
import smartPhone from "../assets/images/smartphone.png";
import { Tooltip } from "react-tooltip";
import { useSharedDropDownState } from "../context/dropdownContext";
const ContactCard = () => {
  const { sharedState, setSharedState } = useSharedDropDownState();
  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-slate-100"
      onClick={() => sharedState ?  setSharedState(!sharedState): sharedState}
    >
      <div className=" w-4/5 h-1/2 items-center justify-center">
        <div className="flex justify-center items-center bg-white shadow-custom w-full h-[5rem] border rounded-md hover:bg-slate-200">
          <div className="flex w-2/3">
            <img
              src={defaultPfp}
              alt="contact image"
              className=" h-[6rem] w-24 m-5 rounded-full p-3"
            />
            <div className="flex w-3/4 items-center justify-between">
              <h3 className="mx-2">Name</h3>
              <p className="mx-2">Number</p>
              <p className="mx-2">Email</p>
            </div>
          </div>
          <div className=" flex flex-row justify-between items-center w-1/6">
            <img
              src={settings}
              alt="settings"
              className="w-6 h-6 mr-4 rounded-lg hover:cursor-pointer"
              data-tooltip-id="settingsTip"
              data-tooltip-content="Contact info"
              data-tooltip-place="top"
            />
            <Tooltip id="settingsTip" />

            <img
              src={phoneIcon}
              alt="call"
              className="w-6 h-6 mr-4 rounded-lg hover:cursor-pointer"
              data-tooltip-id="Call"
              data-tooltip-content="Call"
              data-tooltip-place="top"
            />
            <Tooltip id="Call" />
            <img
              src={smartPhone}
              alt="message"
              className="w-6 h-6 mr-4 rounded-lg hover:cursor-pointer"
              data-tooltip-id="Email"
              data-tooltip-content="Email"
              data-tooltip-place="top"
            />
            <Tooltip id="Email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
