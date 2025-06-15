import React, { useContext, useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

export default function LogIn() {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const emailRef = useRef()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Here you would typically handle the login logic, such as sending a request to your backend
    console.log("Email:", email);
    console.log("Password:", password);

    // Reset error message and status
    setErrorMessage("");

    signInUser(email, password)
      .then((result) => {
        console.log("User signed in:", result.user);
        form.reset(); // Reset the form after submission
        // Optionally, you can show a success message or redirect the user
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in:", error.message);
        setErrorMessage(error.message);
      });
  };

  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter your email address.",
      });
      return;
    }
    else{
      sendPasswordResetEmail(auth, email)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Reset Link Sent",
            text: "Please check your email for the reset link.",
          });
        })
        .catch((error) => {
          console.error("Error sending reset email:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to send reset email.",
          });
        });
    }
  }
  return (
    <>
      <div className="text-center text-2xl md:text-3xl lg:text-4xl mb-10 md:mb-10 lg:mb-10 mt-20  ml-10 md:ml-20 lg:ml-40 ">
        <Link to="/">
          <FaArrowCircleLeft />
        </Link>
      </div>
      <div className="text-center mb-10 md:mb-10 lg:mb-10 mt-10 md:mt-10 lg:mt-20 ">
        <h2 className="text-4xl">Log In here</h2>
      </div>
      <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              ref={emailRef}
              className="input w-full"
              placeholder="Email"
            />
            <div className="relative">
              <label className="label">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input w-full"
                placeholder="Password"
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-3 top-[26px] "
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </p>
            </div>
            <div onClick={handleForgetPassword}>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        {errorMessage && (
          <div className="text-red-500 text-center ml-4 font-bold">
            <p>{errorMessage}</p>
          </div>
        )}

        <div className="text-center mt-2 mb-5">
          <p>
            If you have no account. Please{" "}
            <a href="/register" className="link link-hover">
              Register
            </a>
          </p>
        </div>
        <p className=" text-center m-4">
          <button
            onClick={handleSignInGoogle}
            className="btn  bg-gradient-to-r from-indigo-500 to-purple-500 text-white  w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto"
          >
            Login with Google
          </button>
        </p>
      </div>
    </>
  );
}
