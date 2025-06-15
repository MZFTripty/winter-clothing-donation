import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);

  console.log(user);
  const handleSignOutUser = () => {
    // signOutUser()
    // .then(() => {
    console.log("User signed out successfully");
    Swal.fire({
      title: "Are you sure to log out?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser().then(() => {
          Swal.fire({
            title: "Logged Out!",
            text: "You have been logged out successfully.",
            icon: "success",
          });
        });
      }
    });
    // })
    // .catch((error) => {
    //   console.log("Error signing out:", error.message);
    // });
  };
  return (
    <div className=" mb-40">
      <nav className="bg-gray-800 p-4  shadow-gray-500 shadow-lg mb-10 fixed top-0 w-full z-50">
        <div className="container w-full mx-auto  flex flex-col md:flex-row lg:flex-row items-center justify-between space-y-4 md:space-y-0 lg:space-y-0">
          {/* Left: Logo */}
          <div className="flex items-center justify-between md:justify-start lg:justify-start md:flex-none lg:flex-none w-full md:w-auto lg:w-auto">
            <div className="flex items-center space-x-4">
              <img
                className="h-10 w-10 rounded-full"
                src="https://img.freepik.com/free-vector/flat-winter-logo-template_23-2149867061.jpg?semt=ais_hybrid&w=740"
                alt="WarmHearts Logo"
              />
              <div className="text-white text-lg font-bold">WarmHearts</div>
            </div>

            {/* Login Button only visible beside logo on mobile */}
            <div className="block md:hidden lg:hidden">
              {user ? (
                <>
                  <div className="flex items-center space-x-4">
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      className="h-10 w-10 rounded-full"
                    />
                    {/* <span className="text-white">{user.displayName}</span> */}
                    <button
                      onClick={handleSignOutUser}
                      className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-600"
                    >
                      LogOut
                    </button>
                  </div>
                </>
              ) : (
                <Link
                  to="/login"
                  className="bg-blue-500 text-white text-lg font-bold px-6 py-4 rounded hover:bg-blue-600"
                >
                  LogIn
                </Link>
              )}
            </div>
          </div>

          {/* Middle: Links */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 text-center">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link
              to="/donation-campaigns"
              className="text-white hover:text-gray-300"
            >
              Donation Campaigns
            </Link>
            <Link to="/how-to-help" className="text-white hover:text-gray-300">
              How to Help
            </Link>
            {user ? (
              <Link to="/dashboard" className="text-white hover:text-gray-300">
                Dashboard
              </Link>
            ) : (
              <Link to="/login" className="text-white hover:text-gray-300">
                Dashboard
              </Link>
            )}
          </div>

          {/* Right: Login button for medium and larger screens */}
          <div className="hidden md:block">
            {user ? (
              <>
                <div className="flex items-center space-x-4">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="h-10 w-10 rounded-full"
                  />
                  {/* <span className="text-white">{user.displayName}</span> */}
                  <button
                    onClick={handleSignOutUser}
                    className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-600"
                  >
                    LogOut
                  </button>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 text-white text-lg font-bold px-6 py-4 rounded hover:bg-blue-600"
              >
                LogIn
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
