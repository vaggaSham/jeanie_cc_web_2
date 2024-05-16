import React from "react";
import MessageIcon from "../../../../assets/images/messageWhite.svg";
import CallIconImage from "../../../../assets/images/callSmall.svg";
import DotsIcon from "../../../../assets/images/dotsIcon.svg";
type Task = {
  title: string;
  status: boolean;
};

type StatusesProps = {
  item: {
    tasks: Task[];
  };
};

export default function TaskCheckList({ item }: StatusesProps) {
  return (
    <div>
      {item.tasks.map((task, index) => (
        <div key={index}>
          <div className="flex justify-between">
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                checked={task?.status}
                className="rounded-none border-[black] custom-checkbox w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className={`ms-2 text-[12px] font-medium text-gray-900 dark:text-gray-300 ${task?.status && 'line-through'}`}
              >
                {task?.title}
              </label>
              <div className="flex gap-1.5 pl-[5px]">
                <img src={MessageIcon} alt='' ></img>
                <img src={CallIconImage} alt='' ></img>
                <p className="text-[10px] text-[#29BAB3] underline">Analyse Records</p>

              </div>
            </div>
            <div className="flex items-center"> <button type="button" className="text-white bg-[#29BAB3] rounded text-xs px-[15px] py-[5px] focus:outline-none  text-center me-2 mb-2 ">Resolve Task</button><img src={DotsIcon} alt='' ></img></div>
          </div>


        </div>
      ))}

    </div>
  );
}
