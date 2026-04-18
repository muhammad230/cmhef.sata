import React from "react";

const TrackApplication = () => {
  return (
    <section className="bg-[#f5f5f0] min-h-280px flex justify-center p-15">
      <div className="text-center w-100% max-w-680px">
        <h2 className="text-green-700 text-3xl font-bold mb-6 ">Track Your Application Status</h2>
        <form className="flex item-center bg-white rounded-xl border-2 overflow-hidden m-3  ">
          <input className="flex-1 border-none outline-none p-2 text-l text-#444 bg-transparent max-w-4xl"
            type="text"
            placeholder='Enter Application ID (e.g., CMHEF-2025-12345)" required'
          />
          <button className="bg-green-700 text-white border-none p-2 text-xl cursor-pointer whitespace-nowrap flex text-center gap-2">Check Status</button>
        </form>
        <div className="flex text-center justify-center gap-2 text-s text-gray-500 mt-1">
          <i class="fa-solid fa-info-circle"></i>
          <span>
            Your Application ID was sent to your email. Format: CMHEF-YYYY-NNNNN
          </span>
        </div>
      </div>
    </section>
  );
};

export default TrackApplication;
