import React from 'react';
type CardDeatilsProps = {
  item: {
    patientId: string;
  };
};

export default function CardDeatils({ item }: CardDeatilsProps) {
  return (
    <div className="px-4 whitespace-nowrap py-2">
     {/* {item?.patientId} */}
     <div className="flex items-center gap-4">
          <img
            className="w-[60px] h-[60px] rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
            alt=""
          />
          <div className="font-medium ">
            <p className="font-Mulish font-semibold font-md mb-1.5 text-md">
              Nancy Drew
            </p>
            <p className="text-sm text-light-blue font-Mulish underline relative">
              444222222 2.16.840.1.113883.4.1{" "}            
            </p>
            <p className="text-sm font-Mulish mt-1.5 text-[#969696]">
            Diabetes, other disease name
            </p>          
          </div>
        </div>
    </div>
  );
}
