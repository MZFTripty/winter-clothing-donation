import React from "react";
import { AuthContext } from "../../provider/AuthProvider";
import UpdateProfile from "./UpdateProfile";

export default function Dashboard() {
  const { user } = React.useContext(AuthContext);
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <p className="welcome-message text-3xl font-semibold text-center my-16">
        Welcome, {user.displayName}!
      </p>
      <div className="dashboard-content flex justify-center items-center mb-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="rounded-full w-40 h-40 mx-auto mt-4"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-center font-bold text-xl">
              {user.displayName}
            </h2>
            <p className="text-lg">Email: {user.email}</p>
            <p className="text-gray-500">
              Member since:{" "}
              {new Date(user.metadata.creationTime).toLocaleDateString()}
            </p>
            <div className="card-actions justify-center mt-4">
              <button
                onClick={() => setShowModal(true)}
                className="btn btn-secondary font-bold text-lg"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
        {showModal && (
          <UpdateProfile setShowModal={setShowModal}></UpdateProfile>
        )}
      </div>
    </>
  );
}
