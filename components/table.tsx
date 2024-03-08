export const Table = () => {
  return (
    <div className="p-4">
      <table className="w-full rounded-lg text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th className="rounded-bl-lg rounded-tl-lg px-6 py-3">Name</th>
            <th className="px-6 py-3">Position</th>
            <th className="px-6 py-3">Status</th>
            <th className="rounded-br-lg rounded-tr-lg px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="d border-b bg-white hover:bg-gray-50">
            <th
              scope="row"
              className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
            >
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">Neil Sims</div>
                <div className="font-normal text-gray-500">
                  neil.sims@flowbite.com
                </div>
              </div>
            </th>
            <td className="px-6 py-4">React Developer</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>
                Online
              </div>
            </td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit user
              </a>
            </td>
          </tr>
          <tr className="d border-b bg-white hover:bg-gray-50">
            <th
              scope="row"
              className="flex items-center whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">Bonnie Green</div>
                <div className="font-normal text-gray-500">
                  bonnie@flowbite.com
                </div>
              </div>
            </th>
            <td className="px-6 py-4">Designer</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>
                Online
              </div>
            </td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit user
              </a>
            </td>
          </tr>
          <tr className="d border-b bg-white hover:bg-gray-50">
            <th
              scope="row"
              className="flex items-center whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">Jese Leos</div>
                <div className="font-normal text-gray-500">
                  jese@flowbite.com
                </div>
              </div>
            </th>
            <td className="px-6 py-4">Vue JS Developer</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>
                Online
              </div>
            </td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit user
              </a>
            </td>
          </tr>
          <tr className="d border-b bg-white hover:bg-gray-50">
            <th
              scope="row"
              className="flex items-center whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">Thomas Lean</div>
                <div className="font-normal text-gray-500">
                  thomes@flowbite.com
                </div>
              </div>
            </th>
            <td className="px-6 py-4">UI/UX Engineer</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>
                Online
              </div>
            </td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit user
              </a>
            </td>
          </tr>
          <tr className="d bg-white hover:bg-gray-50">
            <th
              scope="row"
              className="flex items-center whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">Leslie Livingston</div>
                <div className="font-normal text-gray-500">
                  leslie@flowbite.com
                </div>
              </div>
            </th>
            <td className="px-6 py-4">SEO Specialist</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="me-2 h-2.5 w-2.5 rounded-full bg-red-500"></div>
                Offline
              </div>
            </td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit user
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
