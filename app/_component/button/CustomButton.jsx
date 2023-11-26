"use client";

const CustomButton = ({
  onName = "button",
  onColor = "bg-gray-500 hover:bg-gray-400",
  onType = "button",
}) => {
  return (
    <button
      type={onType}
      className={`${onColor} rounded-md px-5 py-2 text-sm font-semibold text-white shadow-sm duration-150 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {onName}
    </button>
  );
};

export default CustomButton;
