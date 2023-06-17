import { BsPersonCircle } from "react-icons/bs";
import { auth, googleProvider } from "../config/firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Auth() {
  const { user, setUser } = useContext(AuthContext);

  const handleGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);

    const googleUser = result.user;

    // await signInWithRedirect(auth, googleProvider);

    setUser(googleUser);
  };

  const handleSignout = async () => await signOut(auth);

  return (
    <div className="w-[160px] relative">
      <div className="flex justify-end items-center space-x-1 cursor-pointer text-[#3d3d3d]">
        {user !== null ? (
          <>
            <span className="text-sm" onClick={handleSignout}>
              Log out
            </span>

            <img src={user.photoURL || ""} alt="google photo url" className="rounded-full w-5" />
          </>
        ) : (
          <>
            <span className="text-sm" onClick={handleGoogle}>
              Sign In
            </span>
            <BsPersonCircle />
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
