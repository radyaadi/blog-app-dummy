"use client";

import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/default-profile.jpg";
import { FaRegComment } from "react-icons/fa";
import { getDetailUser } from "@/app/_util/user-data";

const getData = (id) => {
  const data = getDetailUser(id);
  return data;
};

const PostItem = ({ id, authorId, title, body, comments }) => {
  const author = getData(authorId);

  return (
    <Link href={`/post/${id}`}>
      <div className="bg-gray-800 p-5 duration-150 ease-in-out hover:bg-gray-500">
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
              <h2>{author.name}</h2>
              <p className="text-sm text-gray-300">({author.gender})</p>
            </span>
            <span className="inline-flex gap-x-2 text-sm">
              <p>{author.email} </p>
            </span>
          </div>
        </div>
        <div className="my-3">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-[.95rem] text-gray-300">{body}</p>
        </div>
        <div className="inline-flex items-center gap-x-2 text-sm">
          <FaRegComment /> {comments.length}
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
