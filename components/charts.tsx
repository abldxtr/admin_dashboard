import { Chart_view } from "./chart_view";
import { Chat_view_2 } from "./chat_view_2";

export const Charts = () => {
  return (
    <div className="row-span-2 grid grid-cols-3 gap-4 p-4 md:row-span-1">
      {/* <!-- 1 --> */}
      <div className="relative col-span-3 h-80 rounded-lg border-2 border-gray-100 bg-gray-50 md:col-span-2">
        <div className="absolute top-4 flex w-full items-center justify-between px-4">
          {/* <!-- left --> */}
          <p className="text-lg font-semibold">Overall process</p>
          {/* <!-- right --> */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="h-4 w-6 rounded-lg bg-gray-500"></div>
                <p className="text-sm text-gray-400">Processed data</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-6 rounded-lg bg-blue-500"></div>
                <p className="text-sm text-gray-400">Data collected</p>
              </div>
            </div>
          </div>
        </div>
        {/* chart view */}
        <Chart_view />
      </div>
      {/* <!-- 2 --> */}
      <div className="col-span-3 relative h-80 rounded-lg border-2 border-gray-100 bg-gray-50 md:col-span-1">
        {/* <!-- top --> */}
        <div className="mx-2 border-b-2 border-gray-200 pb-4 pt-2">
          <div className="flex items-center justify-between px-3 pt-2">
            {/* <!-- left --> */}
            <div className="flex flex-col gap-1">
              <p className="text- font-semibold">Training analiysis</p>
              <div className="flex items-center gap-x-2">
                <div className="flex -space-x-0.5">
                  {/* <!-- img --> */}
                  <img
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="profile"
                    className="size-6 rounded-full"
                  />
                  <img
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="profile"
                    className="size-6 rounded-full"
                  />
                  <img
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="profile"
                    className="size-6 rounded-full"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500">26 Attended</p>
                </div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div>
              <div className="flex size-8 cursor-pointer items-center justify-center rounded-full transition hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- bottom --> */}
        <Chat_view_2 />
      </div>
    </div>
  );
};
