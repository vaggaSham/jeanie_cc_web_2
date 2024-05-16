import React from 'react'
import DistributedChart from '../ChartsSection/DistributedChart'

function PatientAdherence() {
  return (
    <div className='bg-[#FFF] shadow-[0px_0px_5px_0px_#00000033] rounded-[10px]'>
        <p className="text-black text-xs font-semibold pl-[15px] pr-0 pt-[15px] pb-0 font-Mulish">Patient Adherence</p>
        <p className="text-[#FF4F00] text-xs font-semibold pl-[15px] pr-0 pt-[7px] pb-0 font-Mulish" >Woohoo! You are doing great</p>
        <div className='flex justify-between w-[50%] ml-[15px] mt-1.5'>
            <p className='text-[11px] text-black font-Mulish'>Daily Score</p>
            <p className='text-[11px] text-black font-Mulish'>03-05-2024</p>
            </div>
            <div className='flex gap-5 items-center'>
          <div className="w-[50%] bg-[#F2F1F1] rounded-full h-[7px] dark:bg-gray-700 ml-[15px]">           
            <div
              className="bg-[#F3C769] h-[7px] rounded-full"
              style={{ width: `72%` }}
            ></div>
          </div>
          <p className='text-[14px] font-bold'>49%</p>
          </div>
        <p className='font-semibold mt-2.5 pl-[15px] text-[12px] font-Mulish'>Last 2 weeks average : <span className='text-[#0466B4]'>76%</span></p>
      <DistributedChart />
    </div>
  )
}

export default PatientAdherence
