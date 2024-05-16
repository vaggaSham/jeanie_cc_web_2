import React from "react";
import "./style.css";
import Logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user.png";

function Header() {
  return (
    <div className="w-full fixed z-[999]">
      <div className="w-full bg-header-bg flex justify-start md:justify-between items-center py-1 md:pr-[30px]">
        <div className="">
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex justify-between items-center md:px-10 pr-0">
          <div className="hidden lg:block max-w-[345px] w-full border-r-2 border-r-h-border border-solid pr-[25px]">
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-[1.2rem] pointer-events-none">
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block  min-w-[320px]  p-4 pl-12 font-Mulish text-sm text-white bg-search-bg h-12 px-9 py-0 rounded-full focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search contact, facility, and more"
                required
              />
            </div>
          </div>

          <div className="hidden lg:block border-r-2 border-r-h-border border-solid min-w-[200px] px-[15px] py-0">
            <div className="flex">
              <div className="px-[15px] py-0">
                <p className="text-sm text-light-gray font-normal font-Mulish mb-[5px]">
                  Date:
                </p>
                <p className="text-sm text-light-gray font-normal font-Mulish">
                  Time:
                </p>
              </div>
              <div className="px-[15px] py-0">
                <p className="text-sm text-white font-bold font-Mulish mb-[5px]">
                  01/22/2023
                </p>
                <p className="text-sm text-white  font-bold font-Mulish">
                  4:15 PM{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="pl-0 md:px-[15px] py-0 md:min-w-[200px]">
            <div className="flex flex-row-reverse pl-[30px] items-center">
              <div className="pl-[15px] py-0">
                <img src={user} alt="" />
              </div>
              <div className="px-[15px] py-0">
                <p className="text-sm text-white font-bold font-Mulish mb-[5px]">
                  Jean Wiley
                </p>
                <p className="text-sm text-white  font-bold font-Mulish">
                  Wiley
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
