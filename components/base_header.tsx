export const B_header = () => {
  return (
    <div className="mx-4 flex items-center justify-between border-b border-gray-100 p-4 pt-6">
      {/* <!-- left --> */}
      <div className="  ">
        <p className="font-bold text-gray-700">Overview</p>
      </div>
      {/* <!-- right --> */}
      <div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-sm font-semibold text-gray-600 shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="size-[.9rem]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
            Share
          </a>
          <a
            href="#"
            className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-sm font-semibold text-gray-600 shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="size-[.9rem]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
            Export
          </a>
        </div>
      </div>
    </div>
  );
};
