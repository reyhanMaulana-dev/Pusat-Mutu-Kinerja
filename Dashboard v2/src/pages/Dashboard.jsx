import React, { useState, useEffect } from "react";
import "../pages/Dashboard.css";
import logo from "../assets/images/mutu-kinerja.png";
import { useNavigate, useParams } from "react-router-dom";
import { surveys } from "../constants/Index";

export const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Pusat Mutu Kinerja";
  }, []);

  const [isClose, setIsClose] = useState(true);

  const toggleSidebar = () => {
    setIsClose(!isClose);
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const survey = surveys[id];

  return (
    <div className="dashboard tracking-[.3px]">
      <nav className={`sidebar ${isClose ? "close" : ""} shadow-xl`}>
        <header className="relative mt-3.75">
          <div className="image-text flex items-center tracking-normal">
            <span className="flex items-center justify-center min-w-15">
              <img className="w-10 rounded-md" src={logo} alt="Logo" />
            </span>

            <div className="text header-text flex flex-col">
              <span className="name">Pusat Mutu Kinerja</span>
              <span className="profession">UIN Jakarta</span>
            </div>
          </div>

          <i
            className="bx bx-chevron-right toggle cursor-pointer"
            onClick={toggleSidebar}
          ></i>
        </header>

        <div className="menu-bar">
          <div className="menu border-y-2 border-[#E4E9F7]">
            <ul className="menu-links">
              {surveys.map((item, index) => (
                <li
                  className={`nav-link ${index == id ? "bg-[#F6F5FF] rounded-md" : ""} `}
                  key={index}
                >
                  <a onClick={() => navigate(`/survei/${index}`)}>
                    <i className={`bx ${item.icon} icon`}></i>
                    <span className="text nav-text-item">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bottom-content">
            <li>
              <a onClick={() => navigate("/")} className="cursor-pointer">
                <i className="bx bx-arrow-out-left-square-half icon"></i>
                <span className="text nav-text">Beranda</span>
              </a>
            </li>
          </div>
        </div>
      </nav>

      <section
        className={`dash relative flex-1 overflow-hidden  h-screen bg-[#F5F7FA] transition-all duration-500 ease-out ${isClose ? "left-22 w-[calc(100%-88px)]" : "w-[calc(100%-250px)] left-62.5"}`}
      >
        {survey ? (
          <iframe
            src={survey.looker}
            style={{ border: 0 }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            title="Dashboard"
            className="w-full h-full"
          ></iframe>
        ) : (
          <div className="flex items-center justify-center h-full font-medium">
            <p>Dashboard Belum Tersedia</p>
          </div>
        )}
      </section>
    </div>
  );
};
