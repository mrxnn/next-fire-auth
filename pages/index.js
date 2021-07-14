import { useContext } from "react";
import Link from "next/link";
import AuthContext from "../context/auth";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

export default function Home() {
  const { user, loading } = useContext(AuthContext);

  return (
    <Layout>
      <div className="flex flex-col items-start">
        {loading ? (
          <Spinner />
        ) : user ? (
          <DashboardLink />
        ) : (
          <div className="flex flex-col space-y-2">
            <GoogleSignInButton />
            <GithubSignInButton />
          </div>
        )}
      </div>
    </Layout>
  );
}

//button - google sign in
const GoogleSignInButton = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  return (
    <button
      className="bg-gray-800 text-white px-5 rounded py-2 uppercase text-xs tracking-widest hover:bg-gray-700"
      onClick={() => signInWithGoogle()}>
      Sign In With Google
    </button>
  );
};

//button - github sign in
const GithubSignInButton = () => {
  return (
    <button className="bg-gray-800 text-white px-5 rounded py-2 uppercase text-xs tracking-widest hover:bg-gray-700">
      Sign In With GitHub
    </button>
  );
};

//button - go to dashboard
const DashboardLink = () => {
  return (
    <Link href="/dashboard">
      <a
        className="bg-gray-800 text-white px-5 rounded py-2 uppercase text-xs tracking-widest hover:bg-gray-700 inline-block"
        href="/dashboard">
        View Dashboard
      </a>
    </Link>
  );
};
