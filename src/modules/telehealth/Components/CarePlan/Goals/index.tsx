import React from "react";
import closeBlack from "../../../../../assets/images/closeBlack.svg";
import { useDispatch } from "react-redux";
import { setDetailsShow } from "../../../telehealth.reducer";
const AddNewGoals = () => {
  const dispatch = useDispatch();
  return (
    <div className="shadow-[0px_0px_5.5px_0px_rgba(0,0,0,0.2)] rounded-[8px] px-5 py-[20px] mt-3">
      <div className="flex justify-between">
        <p className="text-[26px] font-semibold mb-2.5 font-Mulish">
          Add New Goal
        </p>
        <img
          src={closeBlack}
          alt=""
          className="cursor-pointer"
          onClick={() => dispatch(setDetailsShow('All'))}
        />
      </div>
      <div>
        <form className="w-full mt-[20px]">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-3">
              <input
                className="font-Mulish border-neutral-200 appearance-none block w-full bg-gray-200 text-gray-700 border border-1  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="GOAL23567"
              />
              <label className="text-[#a2a3a3] text-sm font-Mulish">
                Goal ID
              </label>
            </div>
            <div className="w-full md:w-[66%] px-3">
              <div className="relative">
                <select
                  className="font-Mulish block  border-neutral-200 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Disease Management</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <label className="text-[#a2a3a3] text-sm font-Mulish">
                Goal Category
              </label>
            </div>
            <div className="w-full px-[15px] py-0 mx-0 my-5">
              <textarea
                id="message"
                rows={2}
                className="font-Mulish  border-neutral-200 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:outline-none"
                placeholder="Description of the goal can be displayed here for the nurses reference."
              ></textarea>
              <label className="text-[#a2a3a3] text-sm font-Mulish">
                Description
              </label>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className=" font-Mulish border-neutral-200 appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="17.10.1976"
              />
              <label className="text-[#a2a3a3] text-sm font-Mulish">
                Goal ID
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewGoals;
