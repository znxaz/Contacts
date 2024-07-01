import React from "react";
import defaultPfp from "../assets/images/defPfp.png";
import phoneIcon from "../assets/images/phoneIcon.png";
import settings from "../assets/images/settings.png";
import smartPhone from "../assets/images/smartphone.png";
import { Tooltip } from "react-tooltip";
import { useSharedDropDownState } from "../context/dropdownContext";
import { ContactData } from "../dto/ConactData";

interface ContactCardProps {
  contact: ContactData;
}
const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const { sharedState, setSharedState } = useSharedDropDownState();
  return (
    <div
      onClick={() => (sharedState ? setSharedState(!sharedState) : sharedState)}
    >
      <div className="flex m-1 justify-start items-center bg-white shadow-custom w-full h-[5rem] border rounded-md hover:bg-slate-200">
        <div className="w-1/6 flex justify-center h-2/3">
          <img
            src={defaultPfp}
            alt="contact image"
            className=" h-full w-2/5 rounded-full ml-2"
          />
        </div>
        <div className="w-2/3 flex flex-row justify-start">
          <p className="mx-2 whitespace-nowrap w-1/3">
            {contact.firstName} {contact.lastName}
          </p>
          <p className="mx-2 whitespace-nowrap w-1/3">{contact.phoneNumber}</p>
          <p className="mx-2 whitespace-nowrap w-1/3">{contact.email}</p>
        </div>
        <div className="w-1/3 flex flex-row justify-end">
          <img
            src={settings}
            alt="settings"
            className="w-6 h-6 mr-4  hover:cursor-pointer"
            data-tooltip-id="settingsTip"
            data-tooltip-content="Contact info"
            data-tooltip-place="top"
          />
          <Tooltip id="settingsTip" />

          <img
            src={phoneIcon}
            alt="call"
            className="w-6 h-6 mr-4 hover:cursor-pointer"
            data-tooltip-id="Call"
            data-tooltip-content="Call"
            data-tooltip-place="top"
          />
          <Tooltip id="Call" />
          <img
            src={smartPhone}
            alt="message"
            className="w-6 h-6 mr-4 hover:cursor-pointer"
            data-tooltip-id="Email"
            data-tooltip-content="Email"
            data-tooltip-place="top"
          />
          <Tooltip id="Email" />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
