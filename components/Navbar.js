import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "../context/auth";
import Spinner from "./Spinner";

export default function Navbar() {
  const { user, loading, signInWithGoogle } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-between h-20 border-b mb-10">
      <div className="flex items-center">
        <Link href="/">
          <a className="font-bold text-xl mr-6">NextFireAuth</a>
        </Link>
        <Link href="/dashboard">
          <a className="text-gray-500 hover:text-gray-900">Dashboard</a>
        </Link>
      </div>
      <div>
        {loading && <Spinner />}
        {user && (
          <div className="flex items-center">
            <Link href="/account">
              <a className="mr-6 text-gray-500 hover:text-gray-900">Account</a>
            </Link>
            <Image
              src={user.photoURL}
              width="32px"
              height="32px"
              className="rounded-full"
            />
          </div>
        )}
        {!user && !loading && (
          <button
            className="bg-gray-800 text-white px-8 py-2 rounded hover:bg-gray-700"
            onClick={() => signInWithGoogle()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
