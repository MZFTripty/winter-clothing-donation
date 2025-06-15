import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router";
import { IoCall } from "react-icons/io5";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

export default function DonationDetails() {
  const { id } = useParams();
  const [details, setDetails] = React.useState({});

  useEffect(() => {
    fetch("/donationCampaign.json")
      .then((response) => response.json())
      .then((data) => {
        const campaign = data.find((item) => item.id === Number(id));
        setDetails(campaign);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // toast.success("Donation submitted!");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have successfully donated your items",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="text-center mb-10 md:mb-10 lg:mb-10 mt-60 md:mt-0 lg:mt-0 ">
        <h2 className="text-4xl">Donation Campaign Details</h2>
        <p>Here you can find more information about the donation campaign.</p>
      </div>

      <div className="card card-side bg-base-100 shadow-sm flex flex-col md:flex-row lg:flex-row items-center justify-center mb-12">
        <figure>
          <img
            src={details?.image}
            alt="Movie"
            className="p-6 rounded-lg w-96  shadow-gray-500 shadow-lg mb-10"
          />
        </figure>
        <div className="flex flex-col items-start justify-center p-6 gap-4">
          <h2 className="card-title text-3xl">{details?.title}</h2>

          <p
            className="text-xl
          "
          >
            {details?.description}
          </p>

          <div className="badge badge-secondary bg-green-600 p-5 text-xl">
            {details?.status}
          </div>

          <div className="flex items-center gap-2 text-xl pt-4">
            <IoCall className="text-xl" />
            {details?.contactInfo}
          </div>

          <div className=" flex items-center gap-1  pt-4">
            <FaLocationDot className="text-xl" />
            <h1 className="px-4 text-xl ">{details?.division}</h1>
          </div>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div> */}
        </div>
      </div>

      <div className="text-center mb-10 md:mb-10 lg:mb-10 mt-10 md:mt-0 lg:mt-0 ">
        <h2 className="text-4xl">Donate Your Items here</h2>
      </div>



      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl my-10 mx-auto">
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset ">
            <label className="label font-bold text-lg">Item Type</label>
            <input
              name="itemType"
              type="text"
              className="input w-full"
              placeholder="ex: blankets, jackets, sweaters etc"
              required
            />
            <label className="label font-bold text-lg">Quantity of Items</label>
            <input
              name="quantity"
              type="text"
              className="input  w-full"
              placeholder="ex: 2 3 5 etc"
              required
            />
            <label className="label font-bold text-lg">Pickup Location</label>
            <input
              name="pickupLocation"
              type="text"
              className="input w-full"
              placeholder="enter your pickup location"
              required
            />
            <label className="label font-bold text-lg">Additional Notes</label>
            <textarea
              name="notes"
              className="textarea w-full"
              placeholder="say something about your donation"
            ></textarea>
            <button className="btn  mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xl font-bold p-6 rounded-lg">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
