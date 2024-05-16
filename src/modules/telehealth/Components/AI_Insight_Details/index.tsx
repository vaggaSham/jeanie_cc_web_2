import React from "react";
import ClientRecord from "../../../../assets/images/Client_audio_record.svg";
import closeBlack from "../../../../assets/images/closeBlack.svg";
import warnWhite from "../../../../assets/images/warnWhite.svg";
import AiImages from "../../../../assets/images/AiImages.svg";
import { useDispatch } from "react-redux";
import { setDetailsShow } from "../../telehealth.reducer";
const AiInsightsDetails = () => {
  const dispatch = useDispatch();
  return (
    <div className="shadow-[0px_0px_5.5px_0px_rgba(0,0,0,0.2)] rounded-[8px] px-5 py-[20px] mt-3">
      <div className="flex justify-between">
        <p className="text-[26px] font-semibold">AI Insights</p>
        <img
          src={closeBlack}
          alt=""
          className="cursor-pointer"
          onClick={() => dispatch(setDetailsShow('All'))}
        />
      </div>
      <p className="text-[15px] font-Mulish inline-flex gap-[7px] px-2.5 py-[5px] rounded-[10px] bg-[#38bdf8] my-2 text-white">
        <img src={warnWhite} alt=""></img>It looks like the patient is in pain
      </p>
      <div className="flex gap-2 mx-0 my-[15px]">
        <img src={AiImages} alt="" />
        <img src={AiImages} alt="" />
      </div>
      <p className="text-sm font-Mulish mb-2.5">
        These facial movements indicate a discomfort that is caused by a certain
        level of pain.
      </p>
      <div className="flex gap-2 mx-0 my-[15px]">
        <img src={ClientRecord} alt="" />
        <img src={ClientRecord} alt="" />
        <img src={ClientRecord} alt="" />
      </div>
      <p className="text-sm font-Mulish mb-2.5">
        The patients voice at these points, indicates a pain level.
      </p>
      <div className="mt-[20px] pt-[20px] border-t-[#e6e6e6] border-t border-solid">
        <p className="text-[17px] font-Mulish font-semibold mb-2.5">
          Please ask the patient :
        </p>
        <p className="text-[15px] font-Mulish">
          1.Question Number 1 based on what AI detected?
        </p>
        <p className="text-[15px] font-Mulish">
          2.Question Number 2 based on what AI detected?
        </p>
      </div>
    </div>
  );
};

export default AiInsightsDetails;
