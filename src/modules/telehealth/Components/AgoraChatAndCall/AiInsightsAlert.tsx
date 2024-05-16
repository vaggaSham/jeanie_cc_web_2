import React from "react";
import star from "../../../../assets/images/star.svg";
import warn from "../../../../assets/images/warn.svg";
const AiInsightsAlerts = () => {
  return (
    <div className="top-8 w-[400px] p-[15px] bg-[#38bdf8] absolute left-2/4 -translate-x-2/4 rounded-[20px] z-[99]">
      <p className="flex font-Mulish text-[white] mb-2.5">
        AI Insight <img src={star} alt="" className="pl-2.5" />{" "}
      </p>
      <p className="text-[15px] font-Mulish inline-flex gap-[7px] px-2.5 py-[5px] rounded-[10px] bg-[#fff4d8] my-2">
        <img src={warn} alt={"warning"}></img>It looks like the patient is in
        pain
      </p>
      <p className="text-[17px] font-Mulish font-semibold">
        Please ask the patient :
      </p>
      <p className="text-[15px] font-Mulish">
        1.Question Number 1 based on what AI detected?
      </p>
      <p className="text-[15px] font-Mulish">
        2.Question Number 2 based on what AI detected?
      </p>
    </div>
  );
};

export default AiInsightsAlerts;
