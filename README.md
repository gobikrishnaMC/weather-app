# Weather Search App

A simple weather search application built using **React** with **Tailwind CSS** for styling. This app allows users to search for weather information based on city names using the **OpenWeatherMap API**.

## Features

- Search for weather data by city name.
- Displays current temperature and weather description.
- Alerts users in case of an error during data fetch.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for building custom designs.
- **OpenWeatherMap API**: Provides weather data based on city name.

## Setup Instructions

Follow these steps to get the project running on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Node modules

npm install

### 3. Start the application

npm start

### 4. Test the application

npm test

### If you are using env variables

REACT_APP_API_KEY=your_openweather_api_key
REACT_APP_API_URL=http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

### Steps to Get an API Key from OpenWeather

Visit OpenWeather's Website: Go to the OpenWeather website at https://openweathermap.org/.

### Sign Up or Log In:

If you don’t have an account, click on the "Sign Up" button at the top right corner of the homepage.
If you already have an account, click on "Log In" and enter your credentials.
Create an Account (if needed): If you are signing up for the first time, provide your email and create a password. You'll need to confirm your email address after signing up.

### Access the API Keys Section:

Once logged in, click on your profile icon at the top right corner of the page.
In the drop-down menu, select "My API keys".
Generate a New API Key:

On the "My API keys" page, you’ll see an option to generate a new API key.
Click on "Create Key", give your key a name (e.g., "Weather App Key"), and click "Generate".

### Copy Your API Key:

After generating your key, it will appear on the page. Copy the API key.
You will use this API key in your .env file (as shown in the previous instructions).
