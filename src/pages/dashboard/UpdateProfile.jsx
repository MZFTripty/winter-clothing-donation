import React from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import Swal from "sweetalert2";

export default function UpdateProfile({ setShowModal }) {
  const { user } = React.useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log("Updated Name:", name);
    console.log("Updated Photo URL:", photo);

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("Profile updated successfully");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully updated profile",
          showConfirmButton: false,
          timer: 1500,
        });
        setShowModal(false); // Close the modal after successful update
      })
      .catch((error) => {
        console.error("Error updating profile:", error.message);
        // Optionally, you can show an error message to the user
        alert("Failed to update profile: " + error.message);
      });
  };
  return (
    <div className="fixed inset-0  flex items-center justify-center z-50">
      <div className="bg-black w-full opacity-60 min-h-screen absolute z-40" />
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 z-50">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-semibold text-gray-800">Update your profile here</h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleUpdate} action="">
          <div className="p-6">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="field1"
              >
                User Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                id="field1"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="field2"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={user?.photoURL}
                id="field2"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your photo URL"
              />
            </div>

            <div className="flex justify-end">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Updated
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
