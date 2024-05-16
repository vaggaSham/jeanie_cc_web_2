import React from "react";
import minize from "../../../../assets/images/minize.svg";
import plus from "../../../../assets/images/plus.svg";
import doctorScan from "../../../../assets/images/doctor-scan.svg";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { setDetailsShow } from "../../telehealth.reducer";
import './style.css';
const PatientreportAlert = () => {
  const dispatch = useDispatch();
  const baseUrl = 'https://react-slick.neostack.com/img/react-slick';
  const settings = {
    customPaging: function(i:any) {
      return (
        <a>
            <p className="text-[12px] font-Mulish mb-[5px]">A1C</p>
          <img src={doctorScan} alt='' />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="flex gap-2.5 mt-[15px]">
      <div className="w-[100%] bg-gray-800">
        <div className="bg-card-bg  rounded-[20px]  p-[18px]">
          <div className="flex justify-between mb-2.5">
            <p className="text-lg  font-semibold font-Mulish">Reports</p>
            <span className="flex gap-2.5">
              <img src={plus} alt="icon" />
              <img src={minize} alt="icon" className="cursor-pointer" onClick={()=> dispatch(setDetailsShow('All'))}/>
            </span>
          </div>
          {/* <div className="flex gap-[15px]  mt-2.5">
            <div>
              <p className="text-[12px] font-Mulish mb-[5px]">Full Brain MRI</p>
              <img src={doctorScan} alt="icon" />
            </div>
            <div>
              <p className="text-[12px] font-Mulish mb-[5px]">A1C Chart</p>
              <img src={doctorScan} alt="icon" />
            </div>
          </div> */}
          <div className="slider-container  px-[15px] py-0">
      <Slider {...settings}>
        <div>
            <p className="text-[12px] font-Mulish mb-[5px]">Full Brain MRI</p>
          <img src={doctorScan} className="focus:outline-none"/>
        </div>
        <div>
        <p className="text-[12px] font-Mulish mb-[5px]">Full Brain MRI</p>
          <img src={doctorScan} className="focus:outline-none"/>
        </div>
        <div>
        <p className="text-[12px] font-Mulish mb-[5px]">Full Brain MRI</p>
          <img src={doctorScan} className="focus:outline-none"/>
        </div>
      </Slider>
      <br/><br/><br/>
    </div>
        </div>
      </div>
    </div>
  );
};

export default PatientreportAlert;
