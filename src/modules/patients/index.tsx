import React from "react";
import "./style.css";
import Table from "../../components/common/table";
import { alertData, alertHeader } from "./utils";
import ProgressBar from "./components/ProgressBar";
import CardDeatils from "./components/cardDeatils";
import warn from "../../assets/images/warn.svg";
import MessageIcon from "../../assets/images/MessageIcon.svg";
import CallIconImage from "../../assets/images/callIcon.svg";
import DotsIcon from "../../assets/images/dotsIcon.svg";

function Patients() {
  return (
    <div className="w-full pl-[52px] bg-[#f2f4f6] md:pl-[68px] lg:pl-[84px]  font-Mulish  patient-Table">
      <div className="w-full  px-[20px] py-0 pb-[15px]">
        <p className="text-1xl text-dark-black font-bold font-Mulish pt-2 px-2">
          All Patient
        </p>
        <p className="text-2xl text-dark-black font-bold font-Mulish pt-4 px-2 pb-2">
          Patient List
        </p>
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
                  <td className="px-4">
                    <p className="text-[12px] font-Mulish inline-flex gap-[7px] px-2.5 py-[5px] rounded-[10px] bg-[#fff4d8] max-w-[170px]">
                      <img src={warn} alt="" />High risk of heart disease within 1
                      year
                    </p>
                  </td>
                  <td className="px-4 whitespace-nowrap">
                    <ProgressBar item={item} />
                  </td>
                  <td className="px-4 whitespace-nowrap">
                    <ProgressBar item={item} />
                  </td>
                  <td className="px-4 whitespace-nowrap text-xs text-[#000]">
                    New lab data received
                  </td>
                  <td className="px-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <img src={MessageIcon} alt="msg" />
                      <img src={CallIconImage} alt="call" />
                      <img src={DotsIcon} className="ml-1.5" alt="dot" />
                    </div>
                  </td>
                </tr>
              );
            })}
        </Table>
      </div>
    </div>
  );
}
export default Patients;
