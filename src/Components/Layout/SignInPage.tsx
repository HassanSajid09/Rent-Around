import { FcGoogle } from "react-icons/fc";
import { HiX } from "react-icons/hi";
import logo from "../../assets/logo.svg";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import type { UserCredential } from "firebase/auth";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SignInPageProps {
  showSignIn: boolean;
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInPage: React.FC<SignInPageProps> = ({ setShowSignIn }) => {
  const navigate = useNavigate();
  const { loginWithGoogle, sendMagicLink } = useAuth();
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleLoginwithgoogle = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    try {
      const res: UserCredential | null = await loginWithGoogle();
      if (res && res.user) {
        const user = res.user;
        if (user.metadata.creationTime === user.metadata.lastSignInTime) {
          toast.success("Welcome, new user!");
        } else {
          toast.success("Welcome back!");
        }
        setShowSignIn(false);
        navigate("/");
      } else {
        console.error("User is undefined");
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case "auth/account-exists-with-different-credential":
            toast.error("An account already exists with this email!");
            break;
          case "auth/popup-closed-by-user":
            toast.info("Login cancelled by user.");
            break;
          default:
            toast.error("Sign-in failed. Please try again.");
        }
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const handleSendMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await sendMagicLink(email);
      toast.success("Magic link sent! Check your email.");
    } catch (error) {
      toast.error("Failed to send magic link. Try again.");
      console.error("Magic link error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-6">
        <div className="bg-white rounded-lg shadow-lg px-20 py-8 w-full relative flex flex-col items-start">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
            onClick={() => setShowSignIn(false)}
            aria-label="Close"
          >
            <HiX />
          </button>
          <div>
            <img src={logo} alt="Logo" className="size-56" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Welcome to RentAround
            </h2>
          </div>
          <form
            className="w-full flex flex-col gap-3 mt-2"
            onSubmit={handleSendMagicLink}
          >
            <input
              type="email"
              placeholder="Enter your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
            <p className="text-gray-500 text-sm mb-1">
              Enter your email to sign in or create an account instantly
            </p>
            <button
              type="submit"
              className={`w-full py-3 rounded-md font-semibold transition text-white text-base mt-1 ${
                isSending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#303B97] hover:bg-white hover:text-[#303B97] border hover:border-[#303B97] transition-all delay-75"
              }`}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Sign In with Magic Link"}
            </button>
          </form>
          <div className="flex items-center my-6 w-full">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-400 text-base font-medium">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-900 rounded-md py-3 font-semibold text-gray-900 hover:bg-gray-100 transition text-base mb-2"
            onClick={handleLoginwithgoogle}
          >
            <span className="text-2xl">
              <FcGoogle />
            </span>
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
