import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
//import WeatherIcons from "./WeatherIcons";

function App() {
  const apiKey = "c11eb907238f0b8255b8ad494906f796";
  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(city);
  };

  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading"> Weather app</h1>

        <div className="d-grid gap-3 col-4 mt-3">
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={handleChange}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="col md-12" text center mt-5>
        <div className="shadow rounded weatherBox">
          <h5 className="weatherCity">{data?.name}</h5>
          <h6 className="weatherTemp">{Math.round(data?.main?.temp)}°C</h6>
        </div>
      </div>
      <footer>
        This project was coded by Monica Mntanywa and is{" "}
        <a
          href="https://github.com/MonMihle/react-final-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and is{" "}
        <a
          href="https://cerulean-gumdrop-320cc7.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
