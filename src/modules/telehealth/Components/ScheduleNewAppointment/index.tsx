import React from "react";
import plus from "../../../../assets/images/plus.svg";

const ScheduleAppointment = () => {
  return (
    <div className="flex gap-2.5 mt-[15px]">
      <div className="w-[100%] bg-gray-800">
        <div className="bg-card-bg  rounded-[20px]  p-[18px]">
          <div className="flex justify-between">
            <p className="text-lg  font-semibold font-Mulish">
              Schedule Next Appointment
            </p>
            <img src={plus} alt="icon" className="w-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
