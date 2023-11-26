import { TbBrandNextjs, TbHomeRibbon, TbUser } from "react-icons/tb";
import MenuItem from "./MenuItem";

const SideBar = () => {
  const NAV_MENU = [
    { name: "Blog", path: "/post", icon: <TbHomeRibbon size={28} /> },
    { name: "User", path: "/user", icon: <TbUser size={28} /> },
  ];

  return (
    <div className="fixed z-10 min-h-screen border-r border-solid border-gray-600 sm:w-48 lg:w-60">
      <span className="mb-10 hidden flex-row items-start gap-x-1 px-5 py-4 text-2xl font-extrabold leading-none sm:flex">
        <TbBrandNextjs size={30} /> BlogApp
      </span>
      <ul className="fixed bottom-0 left-0 top-[initial] flex w-full items-center justify-center gap-x-5 border-t border-gray-300 bg-black sm:static sm:flex-col sm:items-start sm:justify-normal sm:border-0">
        {NAV_MENU.map((menu, index) => {
          return <MenuItem key={index} {...menu} />;
        })}
      </ul>
    </div>
  );
};

export default SideBar;
