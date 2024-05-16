import React from "react";
import minize from "../../../../assets/images/minize.svg";
import { useDispatch } from "react-redux";
import { setDetailsShow } from "../../telehealth.reducer";
const Medication = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-card-bg  rounded-[20px]  p-[18px]">
      <div className="flex justify-between mb-2.5">
        <p className="text-lg  font-semibold font-Mulish">Medications</p>
        <img src={minize} alt="icon" className="cursor-pointer" onClick={()=> dispatch(setDetailsShow('medicationShow'))} />
      </div>
      <div className="flex justify-between">
        <ul className="list-disc pl-[22px]">
          <li className="text-sm font-Mulish  mb-[5px]">Omeprazol</li>
          <li className="text-sm font-Mulish  mb-[5px]">Validol</li>
          <li className="text-sm font-Mulish  mb-[5px]">Medication 3</li>
        </ul>
        <div className="w-[45%] p-3 bg-[#ffe4ee] rounded-[28px]">
          <p className="text-md font-Mulish font-semibold">Allergies</p>
          <ul className="list-disc  pl-[25px]">
            <li className="text-sm font-Mulish  mb-[5px]">Amoxicillin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Medication;
