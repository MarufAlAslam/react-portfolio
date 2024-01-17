import React from "react";

const Payoneer = () => {
  return (
    <div className="py-10">
      <div className="w-[1200px] mx-auto">
        <div className="divider">
          <span className="text-white text-lg">
            Contact Person Details
          </span>
        </div>

        <div className="flex justify-start mt-10 items-center gap-3">
          <span className="text-lg text-white">Name:</span>
          <span className="text-lg text-yellow-500">MST MARIOM</span>
        </div>
        <div className="flex justify-start mt-2 items-center gap-3">
          <span className="text-lg text-white">Payoneer Email:</span>
          <a href="mailto:begummstmariom@gmail.com" className="text-lg text-yellow-500">begummstmariom@gmail.com</a>
        </div>
        <div className="flex justify-start mt-2 items-center gap-3">
          <span className="text-lg text-white">Present Address:</span>
          <span className="text-lg text-yellow-500">Mohakhali, Dhaka</span>
        </div>
        <div className="flex justify-start mt-2 items-center gap-3">
          <span className="text-lg text-white">Permanent Address:</span>
          <span className="text-lg text-yellow-500">Kedarpur, Babugonj, Barishal</span>
        </div>
        <div className="flex justify-start mt-2 items-center gap-3">
          <span className="text-lg text-white">Contact Email:</span>
          <a href="mailto:begummstmariom@gmail.com" className="text-lg text-yellow-500">begummstmariom@gmail.com</a>
        </div>
        <div className="flex justify-start mt-2 items-center gap-3">
          <span className="text-lg text-white">Contact Number:</span>
          <a href="tel:8801775345038" className="text-lg text-yellow-500">+8801775345038</a>
        </div>
        <div className="flex justify-start mt-2 items-center gap-3">
          <span className="text-lg text-white">Additional Phone Number:</span>
          <a href="tel:+8801724783655" className="text-lg text-yellow-500">+8801724783655</a>
        </div>
      </div>
    </div>
  );
};

export default Payoneer;
