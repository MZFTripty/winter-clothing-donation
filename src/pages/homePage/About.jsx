import React from "react";

export default function About() {
  return (
    <>
      <section className="bg-gray-100 my-10 rounded-xl" id="aboutus">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Winter can be harsh—but no one should have to face it without
                warmth. Our mission is simple: to collect and distribute winter
                clothing to those in need, ensuring comfort and dignity during
                the coldest months. <br /> You can make a difference. <br /> 👕
                Donate gently-used jackets, sweaters, or blankets. <br /> 🚚
                Drop off at our collection points or schedule a pickup. <br />{" "}
                📲 Spread the word and help others stay warm this winter. <br />{" "}
                Together, we can wrap someone in hope.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://media.istockphoto.com/id/1388517849/photo/close-up-of-woman-packing-clothes-in-donation-boxes-for-charitable-foundation.jpg?s=612x612&w=0&k=20&c=fyM2ZninZ0QgDAfAeT3geXPYfhNnhenuV--lVJssqok="
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- why us  --> */}
      <section className="text-gray-700 body-font mt-10">
        <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
          Why Us?
        </div>
        <div className="max-w-3xl flex justify-center mx-auto">
          <p className="  mt-4 text-gray-600 text-lg text-center">
           Our mission is to ensure no one faces winter without warmth. Through community-driven efforts, we collect and donate winter clothing—like jackets, sweaters, scarves, and blankets—to underprivileged individuals and families.
          </p>
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/007/317/283/non_2x/clothes-donating-linear-icon-thin-monoline-illustration-humanitarian-aid-donation-box-with-t-shirt-hat-and-others-used-clothes-charity-contour-symbol-isolated-outline-drawing-vector.jpg"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                Donate Gently-used Winter Wear
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://thumbs.dreamstime.com/b/volunteer-hands-black-vector-concept-icon-volunteer-hands-flat-illustration-sign-symbol-print-134616437.jpg"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Volunteer for Distribution Drives
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Time Efficiency
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1367/1367888.png"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Share Our Mission
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
