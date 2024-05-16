import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'

export default function GoalStatues() {
  return (
    <div>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 text-[12px] rounded-[24px] font-Mulish px-[15px] py-[5px] bg-gray-800 font-semibold focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white bg-[#a5f3fc]">
            In Progress
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
            className="shadow-[0px_0px_5.5px_0px_#00000033] origin-top-right rounded-xl border border-white/5 bg-white px-3 py-[5px] text-sm/6 focus:outline-none"
          >
            <MenuItem>
              <button className="justify-center leading-none my-[7px] group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 bg-[#FBCFE8] font-Mulish text-[12px]">
                Paused
              </button>
            </MenuItem>
            <MenuItem>
              <button className="justify-center leading-none my-[7px] group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 bg-[#D1FAE5] font-Mulish text-[12px]">
                Completed
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}
