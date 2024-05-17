import { useEffect } from "react";
import "./style.css";
import {
  setIsStarted,
  setFloating,
  setCallReset,
  setNotes,
} from "./telehealth.reducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MedicationAlert from "./Components/Medications/details";
import Medication from "./Components/Medications";
import RiskProfile from "./Components/RisksProfile";
import CarePlan from "./Components/CarePlan";
import AddNewGoals from "./Components/CarePlan/Goals";
import PatientreportAlert from "./Components/Reports/details";
import Patientreport from "./Components/Reports";
// import QuickNotes from "./Components/QuickNotes";
import QuickNotes from "./quickNotes"; 
import ScheduleAppointment from "./Components/ScheduleNewAppointment";
import PatientBasic from "./Components/PatientBasicDetails";
import AiInsightsDetails from "./Components/AI_Insight_Details";
import CarePlanDetails from "./Components/CarePlan/details";
import QuickNotesDetails from "./Components/QuickNotes/details";

function TeleHealth() {
  const {
    isStarted,
    setDetails,
    isEnded,
    isFloating,
  } = useSelector((state: any) => state.telehealth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotes([]));
    if (isFloating) {
      dispatch(setFloating(false));
    } else {
      dispatch(setCallReset());
      return () => {
        dispatch(setFloating(true));
      };
    }
  }, []);

  const handleOtherSections = () => {
    switch (setDetails) {
      case "isAiInsightShow":
        return <AiInsightsDetails />;
      case "isNewGoalShow":
        return <AddNewGoals />;
      case "medicationShow":
        return <MedicationAlert />;
      case "reportsShow":
        return <PatientreportAlert />;
      case "carePlanShow":
        return <CarePlanDetails />;
      case "notesShow":
        return <QuickNotesDetails />;
      default:
        return (
          <div className="flex gap-2.5 mt-[15px]">
            <div className="w-[50%] bg-gray-800">
              <Medication />
              <RiskProfile />
              <Patientreport />
              <ScheduleAppointment />
            </div>
            <div className="w-[50%] bg-gray-800">
              <CarePlan />
              <div className="h-[300px]"><QuickNotes /></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className=" flex flex-col w-[100%] h-[86vh] pl-[52px] md:pl-[68px] lg:pl-[84px] pr-1">
      <div className="h-full w-full">
        <p className="text-sm font-Mulish mt-[8px]">12 April, 2024</p>
        <p className="text-[18px] font-Mulish font-semibold">
          Title Of The Call
        </p>
        <div className="flex">
          <div
            id="agoraVideoContainer"
            className="w-[45%] bg-gray-800 py-2 px-1"
          >
            {isEnded && (
              <div className="relative bg-[#534B52] rounded-[25px] w-full h-[670px] flex items-center justify-center">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-base text-[#FF574C] font-Mulish">
                    This session has ended
                  </p>
                  <p className="text-lg text-white font-Mulish">
                    Please review patient data and save!
                  </p>
                  <button className="mt-[30px] bg-[#35C299] font-Mulish h-[30px] leading-[30px] text-[15px] text-white px-3 py-0 rounded-[100px]">
                    Save
                  </button>
                </div>
              </div>
            )}
            {!isStarted && !isEnded && (
              <div className="relative bg-[#534B52] rounded-[25px] w-full h-[670px] flex items-center justify-center">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-base text-[#FF574C] font-Mulish">
                    Click on Start to Join session
                  </p>

                  <button
                    onClick={() => {
                      if (!isStarted) dispatch(setIsStarted());
                    }}
                    className="mt-[30px] bg-[#35C299] font-Mulish h-[30px] leading-[30px] text-[15px] text-white px-3 py-0 rounded-[100px]"
                  >
                    Start
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="w-[55%] bg-gray-300 p-2">
            <PatientBasic />
            {handleOtherSections()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeleHealth;
