import { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../context/auth";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

export default function Home() {
  const { user, loading } = useContext(AuthContext);

  return (
    <Layout>
      <div className="flex flex-col items-start">
        <p className="mb-6 text-gray-800">
          NextFireAuthSSR is an example for building authenticated pages with
          Firebase Authentication. It demonstrates every next.js data fetching
          (CSR, SSR, SSG, ISR) methods including Authenticated API routes.
        </p>
        {loading ? (
          <Spinner />
        ) : user ? (
          <DashboardLink />
        ) : (
          <GoogleSignInButton />
        )}
      </div>
    </Layout>
  );
}

//button - sign in
const GoogleSignInButton = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  return (
    <button
      className="bg-gray-800 text-white px-8 py-2 rounded hover:bg-gray-700"
      onClick={() => signInWithGoogle()}>
      Sign In With Google
    </button>
  );
};

//button - go to dashboard
const DashboardLink = () => {
  return (
    <Link href="/dashboard">
      <a
        className="bg-gray-800 text-white px-8 py-2 rounded hover:bg-gray-700 inline-block"
        href="/dashboard">
        View Dashboard
      </a>
    </Link>
  );
};
