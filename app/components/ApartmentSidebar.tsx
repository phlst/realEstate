"use client";
import React, { useState } from "react";

export function ApartmentSidebar() {
  const [availability, setAvailability] = useState("available");
  const [rooms, setRooms] = useState(2);

  return (
    <div className="w-72 bg-white h-auto shadow-lg rounded-r-xl overflow-y-auto">
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Filters</h2>
        <p className="text-sm text-gray-500 mt-1">Find your dream apartment</p>
      </div>

      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
          Price Range
        </h3>
        <select className="w-full p-2 shadow-md border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
          <option>From highest to lowest</option>
          <option>From lowest to highest</option>
        </select>
      </div>

      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
          Area (m²)
        </h3>
        <select className="w-full p-2 shadow-md border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
          <option>From highest to lowest</option>
          <option>From lowest to highest</option>
        </select>
      </div>

      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
          Availability
        </h3>
        <div className="space-y-3">
          <button
            className={`w-full py-2 px-3 flex items-center ${availability === "available" ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-700 hover:bg-green-100 hover:text-green-700"} text-left rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500`}
            onClick={() => setAvailability("available")}
          >
            <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            Available
          </button>
          <button
            className={`w-full py-2 px-3 flex items-center ${availability === "reserved" ? "bg-yellow-50 text-yellow-700" : "bg-gray-50 text-gray-700 hover:bg-yellow-100 hover:text-yellow-700"} text-left rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            onClick={() => setAvailability("reserved")}
          >
            <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
            Reserved
          </button>
          <button
            className={`w-full py-2 px-3 flex items-center ${availability === "sold" ? "bg-red-50 text-red-700" : "bg-gray-50 text-gray-700 hover:bg-red-100 hover:text-red-700"} text-left rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500`}
            onClick={() => setAvailability("sold")}
          >
            <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
            Sold
          </button>
        </div>
      </div>

      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
          Number of Rooms
        </h3>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((roomCount) => (
            <button
              key={roomCount}
              className={`h-10 w-10 rounded-full ${rooms === roomCount ? "bg-blue-500 text-white" : "bg-gray-50 text-gray-700 hover:bg-blue-100 hover:text-blue-600"} flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              onClick={() => setRooms(roomCount)}
            >
              {roomCount === 5 ? "5+" : roomCount}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-4 sticky bottom-0 bg-white shadow-md -mt-px">
        <div className="flex gap-3">
          <button
            className="flex-1 py-2 px-4 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={() => {
              setAvailability("available");
              setRooms(2);
            }}
          >
            Reset
          </button>
          <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApartmentSidebar;
