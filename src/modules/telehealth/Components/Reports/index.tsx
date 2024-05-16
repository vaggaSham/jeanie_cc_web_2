import React from "react";
import minize from "../../../../assets/images/minize.svg";
import plus from "../../../../assets/images/plus.svg";
import doctorScan from "../../../../assets/images/doctor-scan.svg";
import { useDispatch } from "react-redux";
import { setDetailsShow } from "../../telehealth.reducer";
const Patientreport = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2.5 mt-[15px]">
      <div className="w-[100%] bg-gray-800">
        <div className="bg-card-bg  rounded-[20px]  p-[18px]">
          <div className="flex justify-between mb-2.5">
            <p className="text-lg  font-semibold font-Mulish">Reports</p>
            <span className="flex gap-2.5">
              <img src={plus} alt="icon" />
              <img src={minize} alt="icon" className="cursor-pointer" onClick={()=> dispatch(setDetailsShow('reportsShow'))}/>
            </span>
          </div>
          <div className="flex gap-[15px]  mt-2.5">
            <div>
              <p className="text-[12px] font-Mulish mb-[5px]">Full Brain MRI</p>
              <img src={doctorScan} alt="icon" />
            </div>
            <div>
              <p className="text-[12px] font-Mulish mb-[5px]">A1C Chart</p>
              <img src={doctorScan} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patientreport;
