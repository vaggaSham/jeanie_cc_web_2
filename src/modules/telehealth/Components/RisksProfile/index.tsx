import React from "react";
import minize from "../../../../assets/images/minize.svg";
import warn from "../../../../assets/images/warn.svg";
import { useDispatch } from "react-redux";
import { setDetailsShow } from "../../telehealth.reducer";
const RiskProfile = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2.5 mt-[15px]">
      <div className="w-[100%] bg-gray-800">
        <div className="bg-card-bg  rounded-[20px]  p-[18px]">
          <div className="flex justify-between mb-2.5">
            <p className="text-lg  font-semibold font-Mulish">Risk Profile</p>
            <img src={minize} alt="icon" className="cursor-pointer" onClick={()=> dispatch(setDetailsShow('medicationShow'))}/>
          </div>
          <div className="flex  gap-2.5 mx-0 my-2.5">
            <div className="bg-white px-[17px] py-[5px] rounded-lg">
              <p className=" text-[13px] font-Mulish font-bold">22</p>
              <p className="text-[11px] text-[rgba(162,163,163,1)] font-Mulish">
                Risk Score ADA
              </p>
            </div>
            <div className="bg-white px-[17px] py-[5px] rounded-lg">
              <p className=" text-[13px] font-Mulish font-bold">22</p>
              <p className="text-[11px] text-[rgba(162,163,163,1)] font-Mulish">
                Risk Score FINDRISC
              </p>
            </div>
          </div>
          <p className="text-[12px] font-Mulish inline-flex gap-[7px] px-2.5 py-[5px] rounded-[10px] bg-[#fff4d8]">
            <img src={warn}></img>High risk of heart disease within 1 year
          </p>
          <div className="mt-2.5">
            <p className=" text-[18px] font-Mulish font-semibold">
              Risk Factors
            </p>
            <ul className="list-disc  pl-[25px]">
              <li className="text-sm font-Mulish">Age + Gender</li>
              <li className="text-sm font-Mulish">Fasting glucose levels</li>
              <li className="text-sm font-Mulish">
                History of cardiovascular diseases
              </li>
              <li className="text-sm font-Mulish">
                Blood pressure with treatment
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskProfile;
