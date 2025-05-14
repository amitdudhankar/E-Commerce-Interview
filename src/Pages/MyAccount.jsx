import React from "react";

const MyAccount = () => {
  const user = {
    name: "Amit Dudhankar",
    email: "akdudhankar11@gmail.com",
    joinedDate: "January 1, 2024",
    address: "Pune, Maharashtra, India",
    phone: "+91-8329005933",
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        My Account
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="/assets/Amit Photo.jpg"
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="font-medium">Phone:</p>
            <p>{user.phone}</p>
          </div>
          <div>
            <p className="font-medium">Address:</p>
            <p>{user.address}</p>
          </div>
          <div>
            <p className="font-medium">Joined On:</p>
            <p>{user.joinedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
