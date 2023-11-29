/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import profilePic from '@/public/default-profile.jpg';
import { FaRegComment } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Loading from '../loading';

const PostItem = ({ id, user_id, title, body }) => {
  const [author, setAuthor] = useState({});
  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAuthorData = async () => {
    const res = await fetch(`https://gorest.co.in/public/v2/users/${user_id}`);
    const resJson = await res.json();
    setAuthor(resJson);
    setIsLoading(false);
  };

  const fetchCommentData = async () => {
    const res = await fetch(
      `https://gorest.co.in/public/v2/posts/${id}/comments`
    );
    const resJson = await res.json();
    setComment(resJson);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAuthorData();
    fetchCommentData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Link href={`/post/${id}`}>
      <div className="p-8 duration-150 ease-in-out hover:bg-gray-800">
        <div className="inline-flex gap-x-3">
          <div className="relative z-0 mt-2 h-10 w-10">
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
              <h2 className="font-bold ">{author.name || 'Unknown'}</h2>
              <p className="text-sm text-gray-300">
                {author.gender
                  ? author.gender === 'male'
                    ? '(He)'
                    : '(She)'
                  : ''}
              </p>
              <p
                className={`${
                  author.status === 'active'
                    ? 'text-green-400'
                    : 'text-gray-500'
                } text-3xl leading-none font-semibold ml-1 mb-1`}
              >
                {author.status ? '•' : ''}
              </p>
            </span>
            <span className="inline-flex gap-x-2 text-sm leading-none">
              <p>{author.email}</p>
            </span>
          </div>
        </div>
        <div className="my-3">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-[.95rem] text-gray-300">{body}</p>
        </div>
        <div className="inline-flex items-center gap-x-2 text-sm text-gray-400">
          <FaRegComment /> {comment.length}{' '}
          {comment.length <= 1 ? 'comment' : 'comments'}
        </div>
      </div>
      <hr class="h-px bg-gray-500 border-0"></hr>
    </Link>
  );
};

export default PostItem;
