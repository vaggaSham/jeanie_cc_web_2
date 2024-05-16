import React from "react";
import minize from "../../../../assets/images/minize.svg";
import plus from "../../../../assets/images/plus.svg";
import { useDispatch } from "react-redux";
import { setDetailsShow } from "../../telehealth.reducer";
import GoalStatues from "./componets/statuses";

const CarePlan = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2.5">
      <div className="w-[100%] bg-gray-800">
        <div className="bg-card-bg  rounded-[20px]  p-[18px]">
          <div className="flex justify-between mb-2.5">
            <p className="text-lg  font-semibold font-Mulish">Care Plan</p>
            <img src={minize} alt="icon" className="cursor-pointer" onClick={()=> dispatch(setDetailsShow('carePlanShow'))}/>
          </div>
          <p className="text-sm font-Mulish mb-2.5">
            Description & details about the care plan about the care plan - can
            take up about 3 lines very easily.
          </p>
          <p className="text-[12px] rounded-[10px] font-Mulish mb-[7px] px-[15px] py-[5px] bg-[#ffe4d5]">
            Alerts can be displayed here!
          </p>
          <p className="text-[12px] rounded-[10px] font-Mulish mb-[7px] px-[15px] py-[5px] bg-[#ffe4d5]">
            Alerts can be displayed here!
          </p>
          <div className="flex justify-between mt-3.5">
            <p className="text-lg  font-semibold font-Mulish">Goals</p>
            <img
              src={plus}
              alt="icon"
              className="cursor-pointer"
              onClick={() => dispatch(setDetailsShow('isNewGoalShow'))}
            />
          </div>
          <div id="chatBot" className="overflow-x-auto pb-2.5">
          <div className="flex gap-[15px]  mt-2.5">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white rounded-[9px]  p-[15px]">
              <p className="text-sm font-Mulish mb-[5px] text-[rgba(162,163,163,1)]">
                #goalid
              </p>
              <p className="text-[12px] w-[160px] rounded-[24px] font-Mulish mb-[7px] px-[15px] py-[5px] bg-[#d0d1d1]">
                Disease Management
              </p>
              <p className="text-[12px]  font-Mulish mb-2.5">
                Description & details about the care plan about the care plan -
                can take up about 3 lines very easily.
              </p>
              <div className="flex gap-[10px]  mt-3.5 items-center">
                <p className="text-[12px] font-Mulish font-bold">Status :</p>
                <GoalStatues />
                {/* <p className="text-[11px] rounded-[24px] font-Mulish px-[15px] py-[5px] bg-[#a5f3fc]">
                  In Progress
                </p> */}
              </div>
              <div className="flex gap-[10px]  mt-1.5 items-center">
                <p className="text-[12px] font-Mulish font-bold">
                  Target Date :{" "}
                </p>
                <p className="text-[12px] font-Mulish font-semibold">
                  12/05/2024
                </p>
              </div>
            </div>
          ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarePlan;
