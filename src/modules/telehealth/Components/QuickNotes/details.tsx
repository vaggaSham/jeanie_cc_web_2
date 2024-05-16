import React, { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";
import minize from "../../../../assets/images/minize.svg";
import chatSend from "../../../../assets/images/chatSend.svg";
import { useDispatch, useSelector } from "react-redux";
import { setDetailsShow, setNotes } from "../../telehealth.reducer";
import moment from "moment";
const QuickNotesDetails = () => {
  const dispatch = useDispatch();

  const { notes } = useSelector((state: any) => state.telehealth);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const chatBotDiv = document.getElementById("chatBot");
    if (chatBotDiv && notes?.length > 0) {
      chatBotDiv.scrollTop = chatBotDiv.scrollHeight;
    }
  }, [notes])

  const handleSearchingData = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleAddingNotes = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const noteDateTime = new Date();
      dispatch(
        setNotes([
          ...notes,
          {
            note: searchInput,
            type: "user",
            time: moment(noteDateTime).format("HH:mm A"),
          },
        ])
      );
      setSearchInput("");
    }
  };

  return (
    <div className="bg-card-bg  rounded-[20px]  p-[18px] mt-[15px]  min-h-[450px] relative">
      <div className="flex justify-between mb-2.5">
        <p className="text-lg  font-semibold font-Mulish">Quick Notes</p>
        <img src={minize} alt="icon" className="cursor-pointer" onClick={()=> dispatch(setDetailsShow('All'))} />
      </div>
      <div
        id="chatBot"
        className="h-[440px] overflow-y-auto mb-[15px] bg-[#f2f6fb] pr-2.5 pt-[7px] pb-[15px]"
      >
        {notes?.map((i: any, idx: number) => (
          <div
            key={idx}
            className="bg-[#b0cbe8] mb-[7px] px-[15px] py-[5px] shadow-[0px_3px_15px_0px_rgba(0,0,0,0.15)] rounded-tr-none rounded-xl"
          >
            <p className="text-[12px] font-Mulish">{i.note}</p>
            <p className="text-[8px] text-[white] text-right">{i.time}</p>
          </div>
        ))}

        {/* <div className="bg-[#b0cbe8] mb-[7px] px-[15px] py-[5px] shadow-[0px_3px_15px_0px_rgba(0,0,0,0.15)] rounded-tr-none rounded-xl">
          <p className="text-[12px] font-Mulish  ">
            Patient seems to be doing okay - has attended all scheduled calls
            and is working towards the goals.
          </p>
          <p className="text-[8px] text-[white] text-right">12:20</p>
        </div>
        <div className="flex gap-2.5">
          <div className="bg-[#def6ef] mb-[7px] px-[15px] py-[5px] shadow-[0px_3px_15px_0px_rgba(0,0,0,0.15)] rounded-tl-none rounded-xl">
            <p className="text-[12px] font-Mulish  ">
              Question number 1 based on what Ai detected?
            </p>
            <p className="text-[8px] text-[black] text-right">12:20</p>
          </div>
          <img src={close} alt="icon" />
        </div> */}
      </div>
      <div className="absolute bottom-[5px] inset-x-2.5">
        <form>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              value={searchInput}
              onChange={handleSearchingData}
              onKeyDown={handleAddingNotes}
              className="focus:outline-none block w-full font-Mulish pl-5 pr-[50px] py-0 text-sm h-[43px] leading-[43px] rounded-[28px] border-[none]"
              placeholder="Type here"
              required
            />
            <img src={chatSend} alt="" className="absolute right-5 top-3" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuickNotesDetails;
