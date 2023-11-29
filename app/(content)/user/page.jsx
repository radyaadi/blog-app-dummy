import CustomButton from '@/app/_component/button/CustomButton';
import UserItem from './_component/UserItem';
import Link from 'next/link';

const getUser = async () => {
  const res = await fetch(
    'https://gorest.co.in/public/v2/users?page=1&per_page=20',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer 256550d9fcfb7a3c5abb0eb3b7b7dc8d7e64e2257dab1dcafdf2f306fbbbb953`,
      },
    }
  );
  const resJson = await res.json();
  return { users: resJson };
};

const UserPage = async () => {
  const { users } = await getUser();
  return (
    <div className="grid w-full grid-flow-row">
      <h1 className="mb-5 text-3xl font-bold">User List</h1>
      <Link href="/user/register">
        <CustomButton
          onName="Create User"
          onColor={'bg-blue-600 hover:bg-blue-500'}
        />
      </Link>
      {users.map((user) => {
        return <UserItem key={user.id} {...user} />;
      })}
    </div>
  );
};

export default UserPage;
