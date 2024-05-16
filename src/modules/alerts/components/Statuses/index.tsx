import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";

type StatusesProps = {
  item: {
    status: string;
  };
};

export default function Statuses({ item }: StatusesProps) {
  const handleStatusCode = (status: string) => {
    switch (status) {
      case "closed":
        return "bg-[#D1FAE5] text-[#1A6D28]";
      case "In progress":
        return "bg-[#A5F3FC] text-[#105088]";
      case "Open":
        return "bg-[#FBCFE8] text-[#B50C1B]";
      default:
        return "bg-[#D1FAE5] text-[#1A6D28]";
    }
  };

  return <Menu>
        <MenuButton className={`font-Mulish capitalize inline-flex items-center gap-2 text-[10px] rounded-[18px] font-Mulish px-[15px] py-[2px] bg-gray-800 font-semibold focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white ${handleStatusCode(item?.status)}`}>
          {item?.status}
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="font-Mulish shadow-[0px_0px_5.5px_0px_#00000033] origin-top-right rounded-xl border border-white/5 bg-white px-3 py-[2px] text-sm/6 focus:outline-none"
          >
            <MenuItem>
              <button className="font-Mulish justify-center leading-none my-[7px] group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 bg-[#FBCFE8] font-Mulish text-[10px]">
                Paused
              </button>
            </MenuItem>
            <MenuItem>
              <button className="font-Mulish justify-center leading-none my-[7px] group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 bg-[#D1FAE5] font-Mulish text-[10px]">
                Completed
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
}
