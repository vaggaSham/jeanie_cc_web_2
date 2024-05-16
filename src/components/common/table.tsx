import React from "react";
function Table({ headers, children }: any) {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg border border-solid border-[#B0CBE8]">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs font-normal font-Mulish text-[#444444] border-b border-b-[#7CA9D8] bg-[#F2F6FB]">
          <tr>
            {headers &&
              headers?.map((item: any, index: any) => {
                return (
                  <th
                    key={`thead_${index}`}
                    scope="col"
                    className={`px-4 py-3 whitespace-nowrap ${item?.class}`}
                  >
                    <div className="flex items-center">
                      {item?.title}
                        {/* <svg
                          className="w-3 h-3 ml-1.5 cursor-pointer"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg> */}
                    </div>
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody className="tbody" id="tableScroll">{children}</tbody>
      </table>
    </div>
  );
}

export default Table;
