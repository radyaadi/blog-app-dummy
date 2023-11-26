import Image from "next/image";
import profilePic from "@/public/default-profile.jpg";
import Link from "next/link";
import CustomButton from "@/app/_component/button/CustomButton";

const UserItem = ({ id, name, email, gender, status }) => {
  return (
    <div className="flex justify-between bg-gray-800 p-5">
      <div className="inline-flex gap-x-3">
        <div className="relative z-0 mt-1 h-10 w-10">
          <Image
            src={profilePic}
            alt="User"
            layout="fill"
            objectFit="cover"
            className="z-0 rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <span className="inline-flex items-center gap-x-1">
            <h2>{name || "Unknown"}</h2>
            <p className="text-sm text-gray-300">
              {gender ? `(${gender})` : ""}
            </p>
          </span>
          <span className="inline-flex gap-x-2 text-sm">
            <p>{email || "Unknown"} </p>
            <p
              className={`${
                status === "active" ? "text-green-400" : "text-gray-500"
              }`}
            >
              {status ? ` · ${status}` : ""}
            </p>
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <Link href={`/user/${id}`}>
          <CustomButton onName="Manage" />
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
