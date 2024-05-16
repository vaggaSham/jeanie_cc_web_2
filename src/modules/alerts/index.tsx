import React from "react";
import "./style.css";
import Table from "../../components/common/table";
import { alertData, alertData2, alertHeader, alertHeader2 } from "./utils";
import ProgressBar from "./components/ProgressBar";
import CardDeatils from "./components/cardDeatils";
import warn from "../../assets/images/warn.svg";
import MessageIcon from "../../assets/images/MessageIcon.svg";
import CallIconImage from "../../assets/images/callIcon.svg";
import DotsIcon from "../../assets/images/dotsIcon.svg";
import Statuses from "./components/Statuses";
import TaskCheckList from "./components/TaskChecklists";
import PatientAdherence from "./components/PatientAdherence";
import CostSaving from "./components/CostSaving";

function Alerts() {
  return (
    <div className="w-full bg-[#f2f4f6] pl-[52px] md:pl-[68px] lg:pl-[84px]  font-Mulish">
      <div className="w-full px-[20px] py-0 pb-[15px]">
        <p className="text-1xl text-dark-black font-bold font-Mulish pt-2 px-2">
          Home
        </p>
        <p className="text-2xl text-dark-black font-bold font-Mulish pt-4 px-2 pb-2">
          Alerts
        </p>
        <div className="alert-Table">
          <Table
            headers={alertHeader}
            className="border rounded border-solid border-[#B0CBE8]"
          >
            {alertData.length > 0 &&
              alertData?.map((item: any, index: any) => {
                return (
                  <tr key={`alerts_tr_${index}`}>
                    <th scope="row" className="w-[320px]">
                      <CardDeatils item={item} />
                    </th>
                    <td className="px-4 w-[200px]">
                      <p className="text-[12px] font-Mulish inline-flex gap-[7px] px-2.5 py-[5px] rounded-[10px] bg-[#fff4d8]">
                        <img src={warn}></img>High risk of heart disease within
                        1 year
                      </p>
                    </td>
                    <td className="px-4">
                      <p className="text-[12px] font-Mulish inline-flex gap-[7px] py-[5px] rounded-[10px] text-[#1E2021]">
                      Hospitalised for Hypertension
                      </p>
                    </td>
                    <td className="px-4">
                      <p className="text-[12px] font-Mulish inline-flex gap-[7px] py-[5px] rounded-[10px] text-[#1E2021]">
                        Discharged patient was hospitalised
                      </p>
                    </td>
                    <td className="px-4 whitespace-nowrap">
                      <ProgressBar item={item} />
                    </td>
                    <td className="px-4 w-[180px]">
                      <p className="text-[12px] font-Mulish inline-flex gap-[7px] py-[5px] rounded-[10px] text-[#B00E66]">
                        Analyse patient status, discuss with specialist
                      </p>
                    </td>
                    <td className="px-4">
                      <Statuses item={item} />
                    </td>
                    <td className="px-4 whitespace-nowrap w-[100px]">
                      <div className="flex gap-2">
                        <img src={MessageIcon} alt='' ></img>
                        <img src={CallIconImage} alt='' ></img>
                        <img src={DotsIcon} className="ml-1.5" alt='' ></img>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </Table>
        </div>
        <p className="text-2xl text-dark-black font-bold font-Mulish pt-4 px-2 pb-2">
          Tasks Queue
        </p>
        <div className="task-Table">
          <Table
            headers={alertHeader2}
            className="border rounded border-solid border-[#B0CBE8]"
          >
            {alertData2.length > 0 &&
              alertData2?.map((item: any, index: any) => {
                return (
                  <tr key={`alerts_tr_${index}`}>
                    <th scope="row" className="w-[390px]">
                      <CardDeatils item={item} />
                    </th>
                    <td className="px-4 w-[400px]">
                      <p className="text-[12px] font-Mulish inline-flex gap-[7px] px-2.5 py-[5px] rounded-[10px] bg-[#FFF5FF]">
                      &bull; Patient’s Activity not updated in 2 weeks
                      </p>
                    </td>
                    <td className="px-4 w-[500px]">
                      <TaskCheckList item={item} />
                    </td>
                    <td className="px-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <img src={DotsIcon} className="ml-1.5" alt='' />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </Table>
        </div>

        <div className="flex gap-5 mt-4">
          <div className="w-[350px]">
          <PatientAdherence />
          </div>
          <div className="w-[350px]">
          <CostSaving />
         </div>        
         
        </div>      
        
      </div>
    </div>
  );
}
export default Alerts;
