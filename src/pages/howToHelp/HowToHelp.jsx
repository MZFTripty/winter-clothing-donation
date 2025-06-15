import React from "react";
import { Heart, Package, Truck, Users, Mail, Phone } from "lucide-react";

export default function HowToHelp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How You Can Help
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            There are many ways to contribute to our mission of bringing warmth
            to those in need. Every contribution, big or small, makes a
            difference.
          </p>
        </div>

        {/* Ways to Help */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Donate Clothing
            </h3>
            <p className="text-gray-600 mb-4">
              Donate your gently used winter clothing like jackets, sweaters,
              blankets, and warm accessories.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Clean and in good condition</li>
              <li>• All sizes welcome</li>
              <li>• Free pickup available</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Organize Drives
            </h3>
            <p className="text-gray-600 mb-4">
              Organize clothing drives in your community, workplace, or
              educational institution.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• We provide collection boxes</li>
              <li>• Promotional materials included</li>
              <li>• Full logistical support</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Truck className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer</h3>
            <p className="text-gray-600 mb-4">
              Join our volunteer network to help with collection, sorting, and
              distribution of donations.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Flexible scheduling</li>
              <li>• Training provided</li>
              <li>• Make direct impact</li>
            </ul>
          </div>
        </div>

        {/* Donation Guidelines */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Donation Guidelines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                ✓ What We Accept
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Winter jackets and coats</li>
                <li>• Sweaters and cardigans</li>
                <li>• Warm blankets and quilts</li>
                <li>• Scarves, gloves, and caps</li>
                <li>• Thermal wear and warm socks</li>
                <li>• Children's winter clothing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-4">
                ✗ What We Don't Accept
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Damaged or torn items</li>
                <li>• Heavily stained clothing</li>
                <li>• Items with strong odors</li>
                <li>• Shoes and footwear</li>
                <li>• Undergarments</li>
                <li>• Non-winter clothing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Collection Points */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Collection Points
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                division: "Dhaka",
                address: "House 15, Road 7, Dhanmondi",
                contact: "+880 1712-345678",
              },
              {
                division: "Chittagong",
                address: "Block A, Halishahar",
                contact: "+880 1823-456789",
              },
              {
                division: "Rajshahi",
                address: "Binodpur Bazar Road",
                contact: "+880 1934-567890",
              },
              {
                division: "Sylhet",
                address: "Zindabazar Main Road",
                contact: "+880 1867-890123",
              },
            ].map((point, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <h4 className="font-bold text-lg mb-2">{point.division}</h4>
                <p className="text-sm text-blue-100 mb-2">{point.address}</p>
                <p className="text-sm text-blue-100">{point.contact}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-blue-100">
              More collection points available in Khulna, Barisal, Rangpur, and
              Mymensingh
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Email Us</div>
                <div className="text-gray-600">info@warmhearts.org</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Call Us</div>
                <div className="text-gray-600">+880 1234-567890</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
