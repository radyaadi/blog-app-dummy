import Link from "next/link";
import CustomButton from "./_component/button/CustomButton";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-extrabold">Welcome to Blog Apps</h1>
      <Link href="/post">
        <CustomButton
          onName="Get Started"
          onColor="bg-green-500 hover:bg-green-700"
        />
      </Link>
    </div>
  );
}
