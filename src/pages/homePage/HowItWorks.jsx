import React from "react";
import { MapPin, Package, Heart, Truck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Choose to Donate",
      description:
        "Browse active campaigns and select items you want to donate",
      color: "bg-red-600",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Pack Your Items",
      description:
        "Gather clean winter clothing like jackets, blankets, and sweaters",
      color: "bg-blue-600",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Schedule Pickup",
      description:
        "Provide your location and we'll arrange a convenient pickup time",
      color: "bg-orange-600",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "We Deliver",
      description:
        "Your donations reach those in need through our volunteer network",
      color: "bg-green-600",
    },
  ];

  return (
    <>
      <section className="py-20 bg-gray-50 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Making a difference is simple with our streamlined donation
              process. Follow these easy steps to bring warmth to someone's
              life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div  key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-300 z-0"></div>
                )}

                <div className="relative z-10 text-center">
                  <div
                    className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}
                  >
                    {step.icon}
                  </div>
                  <div  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Supported Divisions */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Supported Divisions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Dhaka",
                "Chittagong",
                "Rajshahi",
                "Khulna",
                "Barisal",
                "Sylhet",
                "Rangpur",
                "Mymensingh",
              ].map((division) => (
                <div
                  key={division}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="font-medium text-gray-800">{division}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
