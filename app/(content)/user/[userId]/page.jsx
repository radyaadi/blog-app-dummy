/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';
import useInput from '@/app/_hook/useInput';
import Link from 'next/link';
import CustomButton from '@/app/_component/button/CustomButton';

const ManageUserPage = ({ params }) => {
  const [user, setUser] = useState({});
  const [email, onEmailChange] = useInput();
  const [name, onNameChange] = useInput();
  const [status, onStatusChange] = useInput();

  const getUser = async (id) => {
    const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer 256550d9fcfb7a3c5abb0eb3b7b7dc8d7e64e2257dab1dcafdf2f306fbbbb953`,
      },
    });
    const resJson = await res.json();
    setUser(resJson);
  };

  const editUserHandler = async () => {
    const apiUrl = `https://gorest.co.in/public/v2/users/${params.userId}`;
    const accessToken =
      '256550d9fcfb7a3c5abb0eb3b7b7dc8d7e64e2257dab1dcafdf2f306fbbbb953';

    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ name, email, status }),
      });

      const data = response.json();
      if (response.ok) {
        console.log(data);
        alert('Update Successfully');
      } else {
        alert('Update Failed');
      }
    } catch (error) {
      alert(error);
    }
  };
  const deleteUserHandler = async () => {
    const apiUrl = `https://gorest.co.in/public/v2/users/${params.userId}`;
    const accessToken =
      '256550d9fcfb7a3c5abb0eb3b7b7dc8d7e64e2257dab1dcafdf2f306fbbbb953';

    try {
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  useEffect(() => {
    getUser(params.userId);
  }, []);

  return (
    <>
      <Link href={`/user`}>
        <CustomButton onName="Back" />
      </Link>
      <div>
        <h2 className="mt-6 text-2xl font-bold text-white">
          Manage User {user.name}
        </h2>
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
                  // placeholder={user.email}
                  value={email || user.email}
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
                  // placeholder={user.email}
                  value={name || user.name}
                  onChange={onNameChange}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium leading-6 text-white">
              Status
            </label>
            <div className="mt-2">
              <select
                value={status}
                onChange={onStatusChange}
                name="status"
                className="block w-full rounded-md border-0 bg-black p-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:max-w-xs sm:text-sm sm:leading-6"
                required
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
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
    </>
  );
};

export default ManageUserPage;
