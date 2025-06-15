import React from "react";
import { Users, Handshake, Award } from "lucide-react";

export default function CommunitySupport() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white my-10 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Community Support</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of compassionate individuals who are making a real
            difference in their communities across Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">500+ Active Donors</h3>
            <p className="text-blue-100">
              Our growing community of donors continues to expand, bringing hope
              to more families every day.
            </p>
          </div>

          <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">100+ Volunteers</h3>
            <p className="text-blue-100">
              Dedicated volunteers ensure every donation reaches the right hands
              at the right time.
            </p>
          </div>

          <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Recognized Impact</h3>
            <p className="text-blue-100">
              Our efforts have been acknowledged by local communities and
              organizations across Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
