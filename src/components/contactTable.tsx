import React, { ReactNode } from "react";

export const ContactTable = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-slate-100"
    //   onClick={() => (sharedState ? setSharedState(!sharedState) : sharedState)}
    >
      <div className=" w-4/5 h-3/4 max-h-[110em] overflow-y-auto items-center justify-center overflow-auto rounded-xl">
        <table className="flex flex-col justify-center items-center w-full py-3 bg-white shadow-custom border rounded-xl contact-table h-auto">
          {children}
        </table>
      </div>
    </div>
  );
};
