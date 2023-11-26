"use client";

import Link from "next/link";
import { useState } from "react";
import { getAllUsers } from "@/app/_util/user-data";
import UserItem from "./_component/UserItem";
import SearchBar from "./_component/SearchBar";
import CustomButton from "@/app/_component/button/CustomButton";

const getData = () => {
  const data = getAllUsers();
  return data;
};

const UserPage = () => {
  const [keyword, setKeyword] = useState("");

  const users = getData();

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
  };

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(keyword.toLowerCase());
  });
  return (
    <>
      <h1 className=" text-3xl font-bold">User List</h1>
      <div className="my-10 flex w-full flex-col items-center gap-5 sm:inline-flex sm:flex-row">
        <Link href="/user/register">
          <CustomButton
            onName="Create User"
            onColor={"bg-blue-600 hover:bg-blue-500"}
          />
        </Link>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      </div>
      <div className="grid w-full grid-flow-row gap-y-3">
        {!filteredUsers.length ? (
          <p className="w-full text-center">No User Avaiable</p>
        ) : (
          filteredUsers.map((user) => {
            return <UserItem key={user.id} {...user} />;
          })
        )}
      </div>
    </>
  );
};

export default UserPage;
