import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

export default function Headers() {
  return (
    <header className="py-4 bg-blue-800 text-white">
      <div className="flex items-center ml-3 md:ml-10 space-x-2">
        <TiWeatherPartlySunny className="text-4xl" />
        <h1 className="text-3xl font-bold">Weather</h1>
      </div>
    </header>
  );
}
