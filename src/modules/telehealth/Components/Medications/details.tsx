import React from "react";
import minize from "../../../../assets/images/minize.svg";
import { useDispatch } from "react-redux";
import { setDetailsShow } from "../../telehealth.reducer";
const MedicationAlert = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2.5 mt-[15px]">
      <div className="w-[100%] bg-gray-800">
        <div className="bg-card-bg  rounded-[20px]  p-[18px]">
          <div className="flex justify-between mb-2.5">
            <p className="text-lg  font-semibold font-Mulish">Medications</p>
            <img src={minize} alt="icon" className="cursor-pointer" onClick={()=> dispatch(setDetailsShow('All'))}/>
          </div>
          <div className="flex justify-between  items-start">
                    <ul className="list-disc pl-[22px]">
                      <li className="text-sm font-Mulish  mb-[5px] font-semibold">
                      Omeprazol - 5mg
                        <div className="mb-3 flex border max-w-xs px-[10px] rounded-br-[20px] rounded-t-[20px] rounded-bl-[20px] border-solid border-[#707070];">
                         <span className="text-[#707070] w-[210px] p-[5px] text-[12px]">After BF</span>
                         <span className="text-[#707070] w-[210px] p-[5px] text-[12px] border-x-[#707070] border-l border-solid border-r"></span>
                         <span className="text-[#707070] w-[210px] p-[5px] text-[12px]">Before Dinner</span>                        
                         </div>
                      </li>
                      <li className="text-sm font-Mulish  mb-[5px] font-semibold">Validol - 10mg
                      <div className=" mb-3 flex border max-w-xs px-[10px] rounded-br-[20px] rounded-t-[20px] rounded-bl-[20px] border-solid border-[#707070];">
                         <span className="text-[#707070] w-[210px] p-[5px] text-[12px]">After BF</span>
                         <span className="text-[#707070] w-[210px] p-[5px] text-[12px] border-x-[#707070] border-l border-solid border-r"></span>
                         <span className="text-[#707070] w-[210px] p-[5px] text-[12px]">Before Dinner</span>                        
                         </div>
                      </li>
                      <li className="text-sm font-Mulish  mb-[5px] font-semibold">
                      Omeprazol - 5mg
                      <p className="text-[15px] font-Mulish gap-[7px] px-2.5 py-[5px] rounded-[10px] bg-[#fff] my-2 text-[#249003]">
                      Course completed - start date to end date
                    </p>
                      </li>
                      <li className="text-sm font-Mulish  mb-[5px] font-semibold">
                      Validol - 15mg
                        <div className="mb-3 flex border max-w-xs px-[10px] rounded-br-[20px] rounded-t-[20px] rounded-bl-[20px] border-solid border-[#707070];">
                         <span className="text-[#707070] w-[210px] p-[5px] text-[12px]">After BF</span>
                         <span className="text-[#707070] w-[210px] p-[5px] text-[12px] border-x-[#707070] border-l border-solid border-r"></span>
                         <span className="text-[#707070] w-[210px] p-[5px] text-[12px]">Before Dinner</span>                        
                         </div>
                      </li>
                    </ul>
                    <div className="w-[30%] p-3 bg-[#ffe4ee] rounded-[28px]">
                      <p className="text-md font-Mulish font-semibold">
                        Allergies
                      </p>
                      <ul className="list-disc  pl-[25px]">
                        <li className="text-sm font-Mulish  mb-[5px]">
                          Amoxicillin
                        </li>
                      </ul>
                    </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default MedicationAlert;
