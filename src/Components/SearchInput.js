// import React, { useState } from "react";
// import CurrentWeather from "./WeatherCardData";
// import { FaLocationArrow } from "react-icons/fa6";
// import PlaceHolderCard from "./PlaceHolderCard";

// function SearchInput() {
//   const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
//   const BASE_URL = REACT_APP_API_URL;
//   const API_KEY = REACT_APP_API_KEY;
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchWeather = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     if (!city || !city.trim() === "") {
//       setIsLoading(false);
//       return alert("Please enter a city name");
//     }
//     try {
//       const url = `${BASE_URL}?q=${city}&appid=${API_KEY}`;
//       const res = await fetch(url);
//       const data = await res.json();
//       setWeather(data);
//       setIsLoading(false);
//     } catch (error) {
//       console.log("Error fetching weather:", error);
//       alert("Error fetching weather");
//       setIsLoading(false);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const data = weather;
//   return (
//     <>
//       <div className="container p-5 md:p-0 max-w-md mx-auto mt-10">
//         <label
//           htmlFor="default-search"
//           className="mb-2 text-sm font-medium text-gray-900 sr-only"
//         >
//           Search
//         </label>
//         <div className="relative">
//           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg
//               className="w-4 h-4 text-gray-500 "
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//           </div>
//           <input
//             type="search"
//             className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
//             placeholder="Search City, (ex: London)..."
//             required
//             onChange={(e) => setCity(e.target.value)}
//           />
//           <button
//             type="submit"
//             data-testid="search-button"
//             onClick={fetchWeather}
//             className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
//           >
//             {isLoading ? "Searching..." : "Search"}
//           </button>
//         </div>

//         {weather && (
//           <div
//             className="flex items-center w-full mt-6 max-w-md p-4 text-gray-500 bg-white rounded-lg shadow "
//             role="alert"
//           >
//             <FaLocationArrow className="text-orange-600" />

//             <div className="ms-3 text-base font-semibold">
//               <h1>
//                 {weather?.name}, {weather?.sys?.country}
//               </h1>
//             </div>
//           </div>
//         )}

//         {weather && <CurrentWeather data={data} />}

//         {!weather && (
//           <PlaceHolderCard
//             mainHeading={"Search Weather"}
//             SubHeading={"Enter a city name to get the current weather details."}
//           />
//         )}
//       </div>
//     </>
//   );
// }

// export default SearchInput;

import React, { useState } from "react";
import CurrentWeather from "./WeatherCardData";
import { FaLocationArrow } from "react-icons/fa6";
import PlaceHolderCard from "./PlaceHolderCard";

function SearchInput() {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
  const BASE_URL = REACT_APP_API_URL;
  const API_KEY = REACT_APP_API_KEY;
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!city || !city.trim() === "") {
      setIsLoading(false);
      return alert("Please enter a city name");
    }
    try {
      const url = `${BASE_URL}?q=${city}&appid=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setWeather(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching weather:", error);
      alert("Error fetching weather");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const data = weather;
  return (
    <div className="container p-5 mx-auto">
      <div className="md:p-0 max-w-md mx-auto mt-10 flex flex-col">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search City, (ex: London)..."
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            data-testid="search-button"
            onClick={fetchWeather}
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            {isLoading ? "Searching..." : "Search"}
          </button>
        </div>

        {weather && (
          <div
            className="flex items-center w-full mt-6 max-w-md p-4 text-gray-500 bg-white rounded-lg shadow "
            role="alert"
          >
            <FaLocationArrow className="text-orange-600" />

            <div className="ms-3 text-base font-semibold">
              <h1>
                {weather?.name}, {weather?.sys?.country}
              </h1>
            </div>
          </div>
        )}

        {weather && <CurrentWeather data={data} />}

        {!weather && (
          <PlaceHolderCard
            mainHeading={"Search Weather"}
            SubHeading={"Enter a city name to get the current weather details."}
          />
        )}
      </div>
    </div>
  );
}

export default SearchInput;
