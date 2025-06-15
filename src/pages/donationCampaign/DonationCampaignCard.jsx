/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

export default function DonationCampaignCard({ campaign }) {
  const { user } = useContext(AuthContext);
  // Destructure the campaign object to extract properties
  const { image, title, description, status, division } = campaign;
  return (
    <>
      <div className="card bg-base-100 w-full  shadow-sm ">
        <figure>
          <img
            src={campaign.image}
            className="p-4  w-full h-64 object-cover mb-5 "
            alt="Shoes"
          />
        </figure>
        <div className="card-title flex items-center gap-1 px-6 pt-4">
          <FaLocationDot />
          <h1 className="px-6 ">{campaign.division}</h1>
        </div>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">
            {campaign.title}
            <div className="badge badge-secondary">{campaign.status}</div>
          </h2>
          <p>{campaign.description}</p>
          <div className="card-actions justify-end">
            {user ? (
              <Link to={`/donation-details/${campaign.id}`}>
                <button className="btn p-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-xl text-white">
                  Donate Now
                </button>
              </Link>
            ) : (
              <Link to={"/login"}>
                <button className="btn p-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-xl text-white">
                  Donate Now
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
