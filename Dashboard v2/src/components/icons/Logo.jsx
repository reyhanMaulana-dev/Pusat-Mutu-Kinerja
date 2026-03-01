import React from "react";
import logo from "../../assets/images/mutu-kinerja.png"

export const Logo = ({ color = "text-indigo-950" }) => {
  return (
    <div className="flex items-center gap-3 text-[15px] tracking-normal">
      <img src={logo} alt="logo" className="h-10.5" />
      <div className={`flex flex-col ${color}`}>
        <span className="font-semibold ">
          Pusat Mutu Kinerja
        </span>
        <span className="-mt-0.5 font-medium">UIN Jakarta</span>
      </div>
    </div>
  );
};
