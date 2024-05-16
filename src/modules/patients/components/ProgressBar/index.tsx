import React from 'react';

type ProgressBarProps = {
  item: {
    actionComplet: boolean;
    actionCount: number;
  };
};

export default function ProgressBar({ item }: ProgressBarProps) {
  return (
    <>
      {item?.actionComplet ? (
        <span className="font-medium text-[#000] text-xs">
          Completed
        </span>
      ) : (
        <>
          <div className="flex justify-between mb-1">
            <span className="text-xs font-medium text-[#000] font-semibold">
              {`${item.actionCount} %`}
            </span>
          </div>
          <div className="w-full bg-[#F2F1F1] rounded-full h-1 dark:bg-gray-700">
            <div
              className="bg-[#29BAB3] h-1 rounded-full"
              style={{ width: `${item.actionCount}%` }}
            ></div>
          </div>
        </>
      )}
    </>
  );
}
