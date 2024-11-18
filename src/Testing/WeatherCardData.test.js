import React from "react";
import { render, screen } from "@testing-library/react";
import CurrentWeather from "../Components/WeatherCardData";

// Sample weather data
const weatherData = {
  weather: [
    {
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  main: {
    temp: 298.15,
    feels_like: 295.15,
    temp_max: 300.15,
    temp_min: 295.15,
    humidity: 60,
    pressure: 1012,
  },
  wind: {
    speed: 5,
  },
};

describe("CurrentWeather Component", () => {
  test("should render weather information correctly", () => {
    render(<CurrentWeather data={weatherData} />);

    // Check if the weather condition is rendered
    expect(screen.getByText("Clear")).toBeInTheDocument();
    expect(screen.getByText("Temp: 25.0°C")).toBeInTheDocument();
    expect(screen.getByText("Humidity: 60%")).toBeInTheDocument();
    expect(screen.getByText("Wind: 5 m/s")).toBeInTheDocument();
    expect(screen.getByText("Pressure: 1012 hPa")).toBeInTheDocument();
    expect(screen.getByText("Feels Like: 22.0°C")).toBeInTheDocument();
    expect(screen.getByText("Max: 27.0°C")).toBeInTheDocument();
    expect(screen.getByText("Min: 22.0°C")).toBeInTheDocument();
  });

  test("should display the correct icon image", () => {
    render(<CurrentWeather data={weatherData} />);

    // Check if the icon is displayed
    const icon = screen.getByAltText("Clear");
    expect(icon).toHaveAttribute(
      "src",
      "https://openweathermap.org/img/wn/01d@2x.png"
    );
  });

  test("should render nothing when no data is provided", () => {
    render(<CurrentWeather data={null} />);

    // Check that nothing is rendered
    expect(screen.queryByText("Temp:")).toBeNull();
  });

  test("should render weather data with Celsius conversion", () => {
    render(<CurrentWeather data={weatherData} />);

    // Convert Kelvin to Celsius (298.15K -> 25.0°C)
    expect(screen.getByText("Temp: 25.0°C")).toBeInTheDocument();
    expect(screen.getByText("Feels Like: 22.0°C")).toBeInTheDocument();
    expect(screen.getByText("Max: 27.0°C")).toBeInTheDocument();
    expect(screen.getByText("Min: 22.0°C")).toBeInTheDocument();
  });
});

// import { render, screen } from "@testing-library/react";
// import CurrentWeather from "./CurrentWeather";

// // Mock weather data from the API
// const mockWeatherData = {
//   coord: { lon: -99.2506, lat: 31.2504 },
//   weather: [
//     {
//       id: 500,
//       main: "Rain",
//       description: "light rain",
//       icon: "10n",
//     },
//   ],
//   main: {
//     temp: 296.02,
//     feels_like: 296.4,
//     temp_min: 295.73,
//     temp_max: 296.12,
//     pressure: 1000,
//     humidity: 78,
//     sea_level: 1000,
//     grnd_level: 938,
//   },
//   wind: {
//     speed: 9.26,
//     deg: 150,
//     gust: 12.86,
//   },
//   rain: {
//     "1h": 0.62,
//   },
//   clouds: {
//     all: 75,
//   },
//   sys: {
//     country: "US",
//     sunrise: 1731935254,
//     sunset: 1731973040,
//   },
//   name: "Texas",
//   cod: 200,
// };

// describe("CurrentWeather Component", () => {
//   test("renders weather data correctly", () => {
//     render(<CurrentWeather data={mockWeatherData} />);

//     // Check if the weather condition is rendered
//     const weatherCondition = screen.getByText(/rain/i);
//     expect(weatherCondition).toBeInTheDocument();

//     // Check temperature
//     const tempElement = screen.getByText(/Temp: 23.9°C/);
//     expect(tempElement).toBeInTheDocument();

//     // Check humidity
//     const humidityElement = screen.getByText(/Humidity: 78%/);
//     expect(humidityElement).toBeInTheDocument();

//     // Check wind speed
//     const windElement = screen.getByText(/Wind: 9.26 m\/s/);
//     expect(windElement).toBeInTheDocument();

//     // Check pressure
//     const pressureElement = screen.getByText(/Pressure: 1000 hPa/);
//     expect(pressureElement).toBeInTheDocument();

//     // Check feels like
//     const feelsLikeElement = screen.getByText(/Feels Like: 23.2°C/);
//     expect(feelsLikeElement).toBeInTheDocument();

//     // Check max and min temperature
//     const maxTempElement = screen.getByText(/Max: 23.0°C/);
//     expect(maxTempElement).toBeInTheDocument();

//     const minTempElement = screen.getByText(/Min: 22.6°C/);
//     expect(minTempElement).toBeInTheDocument();
//   });
// });
