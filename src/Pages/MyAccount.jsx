import React from "react";

const MyAccount = () => {
  const user = {
    name: "Amit Dudhankar",
    email: "akdudhankar11@gmail.com",
    joinedDate: "May 14, 2025",
    address: "Pune, Maharashtra, India",
    phone: "+91-8329005933",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafc] to-[#ffffff] px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 tracking-tight">
          My Account
        </h1>

        {/* Account Card */}
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-6 sm:p-8 transition hover:shadow-2xl">
          {/* User Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 text-center sm:text-left">
            <img
              src="/assets/Amit Photo.jpg"
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white"
            />
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">{user.email}</p>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-gray-700">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase">
                Phone
              </p>
              <p className="text-base sm:text-lg font-semibold">{user.phone}</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase">
                Address
              </p>
              <p className="text-base sm:text-lg font-semibold">
                {user.address}
              </p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase">
                Joined
              </p>
              <p className="text-base sm:text-lg font-semibold">
                {user.joinedDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
