import React from "react";
import Copy from "../../../../assets/images/copy.svg";
const PatientBasic = () => {
  return (
    <div className="flex bg-card-bg  rounded-[20px]">
      <div className="w-[50%] bg-gray-800 p-4">
        <div className="flex items-center gap-4">
          <img
            className="w-[60px] h-[60px] rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
            alt=""
          />
          <div className="font-medium ">
            <p className="font-Mulish font-semibold font-md mb-1.5 text-md">
              Nancy Drew
            </p>
            <p className="text-sm text-light-blue font-Mulish underline relative">
              444222222 2.16.840.1.113883.4.1{" "}
              <img
                src={Copy}
                alt="copy"
                className="absolute right-[-7px] -top-3"
              />
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-gray-300 p-4">
        <div className="max-w-md mx-auto">
          <div>
            <h2 className="text-md font-semibold font-Mulish">
              Health Condition:{" "}
              <span className="text-sm font-normal ">
                {" "}
                Diabetes; Inflated A1C, This data can be filled with three lines
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientBasic;
