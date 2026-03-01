import React from "react";
import { Icon } from "../icons/Icon";
import ilustrasionHero from "../../assets/images/illustration.png";

export const Hero = () => {
  return (
    <section
      id="beranda"
      className="hero max-w-6xl md:px-8 px-4 mx-auto py-12 xl:px-0"
    >
      <div className="flex flex-col gap-y-10 md:flex-row md:justify-between items-center">
        <div className="gap-y-10 flex flex-col md:basis-2/4 lg:basis-3/6">
          <div className="flex py-2 flex-row small-badge items-center bg-white rounded-full gap-x-2 px-3 w-fit">
            <Icon.Globe />
            <p className="lg:text-base text-xs font-semibold text-indigo-950">
              Survei & Dashboard Mutu Layanan
            </p>
          </div>
          <div>
            <h1 className="lg:text-[70px] text-[40px] text-indigo-950 font-['Clash_Display'] font-bold leading-none mb-3">
              Suara Anda
              <br />
              Mutu Kampus.
            </h1>
            <p className="text-base leading-loose text-gray-500">
              Partisipasi survei civitas akademika untuk mendukung
              <br className="lg:block hidden" />
              peningkatan mutu layanan UIN Syarif Hidayatullah Jakarta.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-5 gap-y-5 items-center">
            <a
              href="#survei"
              className="w-full text-center lg:w-fit transition-all ease-in-out duration-500 hover:bg-indigo-950 bg-violet-700 px-10 py-4 rounded-full text-white text-lg font-semibold"
            >
              Mulai Survei
            </a>
            <a
              href="/survei/0"
              className="font-semibold text-violet-700 flex gap-x-2 items-center hover:text-indigo-950 transition-all ease-in-out duration-500"
            >
              <i className="bx bx-widget-horizontal text-[32px]"></i>
              Akses Dashboard
            </a>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <img
            src={ilustrasionHero}
            className="h-99 md:basis-2/4 lg:h-137.5"
            alt="ilustration-hero"
          />
        </div>
      </div>
    </section>
  );
};
