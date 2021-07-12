import { useContext } from "react";
import Image from "next/image";
import nookies from "nookies";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import { AuthContext } from "../context/auth";

//SSR
export async function getServerSideProps(context) {
  console.log("Testing token...");
  const tkn = nookies.get(context);
  console.log("TOKEN", tkn);
  return {
    props: {},
  };
}

export default function Account() {
  const { user, loading, signOut } = useContext(AuthContext);

  return (
    <Layout>
      <div className="text-center">{loading && <Spinner />}</div>

      {user && (
        <div className="text-center">
          <Image
            src={user.photoURL}
            width="50px"
            height="50px"
            className="rounded-full"
          />
          <h2 className="font-bold text-2xl">{user?.displayName}</h2>
          <p className="text-gray-800 mb-8">{user?.email}</p>
          <button
            className="bg-gray-800 text-white px-5 rounded py-2 uppercase text-xs tracking-widest hover:bg-gray-700"
            onClick={() => signOut("/")}>
            Sign Out
          </button>
        </div>
      )}
    </Layout>
  );
}
