import React from "react";

export default function Banner() {
  return (
    <>
      <div className="hero bg-[url('https://img.freepik.com/free-vector/set-snowflakes-christmas-design-vector_53876-57813.jpg?semt=ais_hybrid&w=740')] min-h-screen  rounded-2xl bg-cover bg-center bg-opacity-50 relative">
        <div className="absolute inset-0 bg-white opacity-70 rounded-2xl"></div>

        <div className="hero-content flex-col lg:flex-row-reverse gap-6">
          <img
            src="https://media.istockphoto.com/id/2172643243/vector/winter-clothing-donation-poster-template.jpg?s=612x612&w=is&k=20&c=EXt2X7UJqL4_9iLz9C7xoc95A7hL9uG7Fot7pr0G7kA="
            className="w-4xl rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-4xl font-bold">Spread Warmth This Winter</h1>
            <p className="py-6 font-bold text-lg">
              Join our mission to bring comfort and care to those braving the
              cold. Through our winter clothing donation drives and community
              efforts, we’re making a difference—one coat, one smile at a time.
              Swipe through to see how your support is changing lives.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
