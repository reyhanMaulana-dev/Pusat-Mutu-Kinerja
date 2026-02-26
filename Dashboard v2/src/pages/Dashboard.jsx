import React, { useState } from "react";
import "../pages/Dashboard.css";
import logo from "../assets/images/mutu-kinerja.png";
import { useNavigate, useParams } from "react-router-dom";
import { surveys } from "../constants/Index";

export const Dashboard = () => {
  const [isClose, setIsClose] = useState(true);

  const toggleSidebar = () => {
    setIsClose(!isClose);
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const survey = surveys[id];

  return (
    <div>
      <nav className={`sidebar ${isClose ? "close" : ""}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="Logo" />
            </span>

            <div className="text header-text">
              <span className="name">Pusat Mutu Kinerja</span>
              <span className="profession">UIN Jakarta</span>
            </div>
          </div>

          <i className="bx bx-chevron-right toggle cursor-pointer" onClick={toggleSidebar}></i>
        </header>

        <div className="menu-bar">
          <div className="menu border-y-2 border-[#E4E9F7]">
            <ul className="menu-links]">
              {surveys.map((item, index) => (
                <li className={`nav-link ${ index == id ? "bg-[#F6F5FF] rounded-md" : ""} `} key={index} >
                  <a onClick={()=> navigate(`/survei/${index}`)}>
                    <i className={`bx ${item.icon} icon`}></i>
                    <span className="text nav-text-item">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bottom-content">
            <li>
              <a onClick={()=> navigate("/")} className="cursor-pointer" >
                <i className="bx bx-arrow-out-left-square-half icon"></i>
                <span className="text nav-text">Beranda</span>
              </a>
            </li>
          </div>
        </div>
      </nav>

      <section className="home">
        {survey ? (
          <iframe
            src={survey.looker}
            style={{ border: 0 }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            title="Dashboard"
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
