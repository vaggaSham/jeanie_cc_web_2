import React, { useEffect, useState } from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AlertsIcon,
  CalendarIcon,
  CallIcon,
  PatientIcon,
  WalletIcon,
} from "../../assets/iconComponents";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");
  const menu = [
    {
      menuIcon: <AlertsIcon />,
      name: "Alerts",
      url: "/alerts",
    },
    {
      menuIcon: <PatientIcon />,
      name: "Patients",
      url: "/patients",
    },
    {
      menuIcon: <CalendarIcon />,
      name: "Schedule",
      url: "/",
    },
    {
      menuIcon: <CallIcon />,
      name: "Meetings",
      url: "/telehealth",
    },
    {
      menuIcon: <WalletIcon />,
      name: "Pricing",
      url: "/",
    },
  ];
  useEffect(() => {
    if (location?.pathname) {
      setActiveMenu(location.pathname);
    }
  }, [location]);
  return (
    <div className="fixed flex flex-col w-12 md:w-16 lg:w-20 pt-20  bg-white h-full">
      <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="">
          {menu?.map((item: any, index: any) => {
            const iconComponent = React.cloneElement(item.menuIcon, {
              isActive: activeMenu === item.url,
            });
            return (
              <li
                key={`menu_${index}`}
                role="button"
                className={`cursor-pointer px-0 py-2.5 ${
                  activeMenu === item.url ? "bg-menu-active-bg" : ""
                }`}
                onClick={() => navigate(item.url)}
              >
                <div className="relative justify-center flex flex-row items-center h-8 text-gray-600">
                  <span className="inline-flex justify-center items-center">
                    {iconComponent}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
