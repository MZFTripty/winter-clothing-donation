import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Swal from "sweetalert2";

export default function Register() {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Here you would typically handle the registration logic, such as sending a request to your backend
    console.log("Name:", name);
    console.log("Photo URL:", photo);
    console.log("Email:", email);
    console.log("Password:", password);

    //reset error message and status
    setErrorMessage("");
    // Validate email format
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset(); // Reset the form after submission
        // Update user profile with name and photo URL
        updateUser(name, photo);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully registered",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error.message);
        setErrorMessage(error.message);
      });
  };
  return (
    <>
      <div className="text-center mb-10 md:mb-10 lg:mb-10 mt-10 md:mt-10 lg:mt-20 ">
        <h2 className="text-4xl">Register here</h2>
      </div>
      <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo URL"
              className="input input-bordered w-full"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
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
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <div>
          {errorMessage && (
            <p className="text-red-500 ml-4 font-bold">{errorMessage}</p>
          )}
        </div>
        <div className="text-center mt-2 mb-5">
          <p>
            Already have an account?{" "}
            <a href="/login" className="link link-hover">
              Log In
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
