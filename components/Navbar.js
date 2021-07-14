import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthContext from "../context/auth";
import Spinner from "./Spinner";
import Info from "./Info";

export default function Navbar() {
  const { user, loading } = useContext(AuthContext);

  return (
    <div className="flex flex-col border-b mb-10">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center">
          <Link href="/">
            <a className="font-bold text-xl mr-6">NextFireAuth</a>
          </Link>
          <Link href="/dashboard">
            <a className="text-gray-500 hover:text-gray-900">Dashboard</a>
          </Link>
        </div>
        <div>
          {loading ? (
            <Spinner />
          ) : user ? (
            <UserProfileLink {...user} />
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
      <Info />
    </div>
  );
}

export const UserProfileLink = ({ photoURL }) => {
  return (
    <div className="flex items-center">
      <Link href="/account">
        <a className="mr-5 text-gray-500 hover:text-gray-900">Account</a>
      </Link>
      <Image
        src={photoURL}
        width="32px"
        height="32px"
        className="rounded-full"
      />
    </div>
  );
};

export const SignInButton = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  return (
    <button
      className="bg-gray-800 text-white px-5 rounded py-2 uppercase text-xs tracking-widest hover:bg-gray-700"
      onClick={() => signInWithGoogle()}>
      Sign In
    </button>
  );
};
