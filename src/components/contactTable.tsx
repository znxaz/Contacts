import React, { ReactNode } from "react";

export const ContactTable = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-slate-100"
    //   onClick={() => (sharedState ? setSharedState(!sharedState) : sharedState)}
    >
      <div className=" w-4/5 h-1/2 items-center justify-center">
        <table className="flex justify-center items-center bg-white shadow-custom w-full h-[5rem] border rounded-md hover:bg-slate-200">
          <tr>{children}</tr>
        </table>
      </div>
    </div>
  );
};
