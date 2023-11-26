"use client";

import Link from "next/link";
import { useState } from "react";
import useInput from "@/app/_hook/useInput";
import CustomButton from "@/app/_component/button/CustomButton";
import { addUser } from "@/app/_util/user-data";

const RegisterUserPage = () => {
  const [isCreated, setIsCreated] = useState(false);
  const [email, onEmailChange] = useInput("");
  const [name, onNameChange] = useInput("");
  const [gender, onGenderChange] = useInput("");
  const [hobby, onHobbyChange] = useInput("");

  const addUserHandler = (e) => {
    e.preventDefault();
    setIsCreated(true);
    addUser({ email, name, gender, hobby });
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-white">Register User</h2>
        <p className="text-md text-gray-400">
          Please dont share any private infomation due to publicly displayed
        </p>
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
        <Link href="/user">
          <CustomButton onName="Back" />
        </Link>
        <button
          type="button"
          className={`rounded-md bg-green-500 px-5 py-2 text-sm font-semibold text-white shadow-sm duration-150 ease-in-out hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          onClick={addUserHandler}
        >
          Submit
        </button>
      </div>
      {isCreated && (
        <p className="mt-5 w-full text-green-400">Success create user!</p>
      )}
    </>
  );
};

export default RegisterUserPage;
