import { useContext } from "react";
import { AuthContext, signInWithGoogle, signOut } from "../lib/auth";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {!user && <SignInButton />}
      {user && <SignOutButton />}
    </div>
  );
}

//button - sign in
const SignInButton = () => {
  return <button onClick={() => signInWithGoogle()}>Sign In</button>;
};

//button - sign out
const SignOutButton = () => {
  return <button onClick={() => signOut()}>Sign Out</button>;
};
