import React from "react";
import { surveys } from "../../constants/Index";
import { useNavigate } from "react-router-dom";

export const Content = () => {
  const navigate = useNavigate();
  return (
    <section
      id="survei"
      className="benefits max-w-6xl mx-auto py-10 md:px-8 px-4 xl:px-0"
    >
      <div className="flex flex-col text-center">
        <h3 className="text-[34px] md:text-5xl text-indigo-950 font-['Clash_Display'] text-center font-bold mb-5">
          Survei Mutu Layanan Kampus
        </h3>
        <p className="text-base leading-lg text-gray-500 mb-14">
          Survei resmi UIN Syarif Hidayatullah Jakarta sebagai dasar evaluasi
          <br className="hidden md:block" />
          {" "}dan peningkatan kualitas layanan akademik dan non-akademik
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8">
        {surveys.map((item, index) => (
          <div
            className="item-card bg-white rounded-2xl p-7 flex flex-col gap-6"
            key={index}
          >
            <div className="flex items-center gap-4">
              <i className={`bx ${item.icon} text-5xl text-violet-700`}></i>
              <h3 className="text-lg font-semibold leading-snug text-gray-900 line-clamp-2">
                {item.title}
              </h3>
            </div>

            <p className="text-gray-500 leading-relaxed text-base lg:text-sm line-clamp-4 text-justify">
              {item.description}
            </p>

            <div className="flex items-center gap-5">
              <button
                onClick={() => window.open(item.gform, "_blank")}
                className="text-violet-600 font-semibold flex items-center gap-2 cursor-pointer hover:text-indigo-950 transition-all ease-in-out duration-500"
              >
                <i className="bx bx-form text-2xl"></i> Survei
              </button>
              <button
                onClick={() => navigate(`/survei/${index}`)}
                className="text-violet-600 font-semibold flex items-center gap-2 cursor-pointer hover:text-indigo-950 transition-all ease-in-out duration-500"
              >
                <i className="bx bx-widget-horizontal text-2xl"></i>
                Dashboard
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
