import React, { useState } from "react";

const CityInput = ({ onSubmit }) => {
  const [cityName, setCityName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cityName);

    setCityName(" ");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center">
      <div className="flex flex-row relative">
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Enter Your City"
          className="rounded-md px-2 py-2 pl-3  bg-slate-100 focus:outline-none"
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pr-3">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M0 21V10l7.5-5 7.5 5v11h-5v-7H5v7H0M24 2v19h-7V8.93l-1-.66V6h-2v.93l-4-2.66V2h14m-3 12h-2v2h2v-2m0-4h-2v2h2v-2m0-4h-2v2h2V6z" />
          </svg>
        </div>
      </div>
    </form>
  );
};

export default CityInput;
