export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex">
          {/* <!-- left --> */}
          <div className="flex w-64 items-center justify-start">
            <button className="block rounded p-2 transition hover:bg-gray-100 hover:text-gray-900 md:hidden">
              <svg
                id="toggleSidebarMobileHamburger"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <a href="#" className="ml-2 flex md:mr-24">
              {" "}
              <img
                src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg"
                alt="logo"
                className="mr-3 size-8"
              />{" "}
              <span className="self-center whitespace-nowrap text-xl font-semibold sm:text-2xl">
                Flowbite
              </span>{" "}
            </a>
            {/* <!-- search input --> */}
          </div>
          {/* <!-- right --> */}
          <div className="flex w-full items-center justify-between pl-10">
            <div className="relative">
              <div className="flex items-center gap-3">
                <button className="relative">
                  <img
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="profile"
                    className="size-12 rounded-full"
                  />
                  <div className="absolute bottom-1 right-0 size-[.75rem] rounded-full border-2 border-white bg-green-500"></div>
                </button>
                <div className="hidden md:block">
                  <p className="font-semibold">Cagatay Becerik</p>
                  <p className="text-xs font-normal text-gray-400">
                    Welcome back
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- right  --> */}
            <div className="flex items-center gap-8">
              <div className="cursor-pointer text-gray-500 transition hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <div className="relative cursor-pointer text-gray-500 transition hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
                <div className="absolute right-0 top-0 size-2 rounded-full border border-white bg-red-500"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
