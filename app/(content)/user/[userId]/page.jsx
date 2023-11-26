"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import useInput from "@/app/_hook/useInput";
import { getDetailUser, editUser, deleteUser } from "@/app/_util/user-data";
import Link from "next/link";
import CustomButton from "@/app/_component/button/CustomButton";

const getData = (id) => {
  const data = getDetailUser(id);
  return data;
};

const ManageUserPage = ({ params }) => {
  const [isEdited, setIsEdited] = useState(false);
  const router = useRouter();
  const user = getData(params.userId);
  const [email, onEmailChange] = useInput(user.email);
  const [name, onNameChange] = useInput(user.name);
  const [gender, onGenderChange] = useInput(user.gender);
  const [hobby, onHobbyChange] = useInput(user.hobby);

  const editUserHandler = () => {
    const userId = params.userId;
    editUser({ userId, email, name, gender, hobby });
    setIsEdited(true);
  };
  const deleteUserHandler = () => {
    const userId = params.userId;
    deleteUser(userId);
    router.push("/user");
  };

  return (
    <>
      <Link href={`/user`}>
        <CustomButton onName="Back" />
      </Link>
      <div>
        <h2 className="mt-6 text-2xl font-bold text-white">Manage User</h2>
      </div>
      <div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="sm:col-span-4">
            <label className="block text-sm font-medium leading-6 text-white">
              Email
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-400">
                <input
                  type="text"
                  name="email"
                  className="block flex-1 border-0 bg-transparent p-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Email..."
                  value={email}
                  onChange={onEmailChange}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label className="block text-sm font-medium leading-6 text-white">
              Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-400">
                <input
                  type="text"
                  name="name"
                  className="block flex-1 border-0 bg-transparent p-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Name..."
                  value={name}
                  onChange={onNameChange}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium leading-6 text-white">
              Gender
            </label>
            <div className="mt-2">
              <select
                value={gender}
                onChange={onGenderChange}
                name="gender"
                className="block w-full rounded-md border-0 bg-black p-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label className="block text-sm font-medium leading-6 text-white">
              Hobby
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-400">
                <input
                  type="text"
                  name="hobby"
                  className="block flex-1 border-0 bg-transparent p-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Hobby..."
                  value={hobby}
                  onChange={onHobbyChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-4">
        <button
          type="button"
          className={`rounded-md bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-sm duration-150 ease-in-out hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          onClick={editUserHandler}
        >
          Edit
        </button>
        <button
          type="button"
          className={`rounded-md bg-red-500 px-5 py-2 text-sm font-semibold text-white shadow-sm duration-150 ease-in-out hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          onClick={deleteUserHandler}
        >
          Delete
        </button>
      </div>
      {isEdited && (
        <p className="mt-5 w-full text-green-400">Success create user!</p>
      )}
    </>
  );
};

export default ManageUserPage;
