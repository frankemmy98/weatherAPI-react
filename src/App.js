import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import SingleWeather from "./components/SingleWeather";
import Loading from "./components/Loading";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = "b050e26e45ce8af5a771a653e6d23ec8"; // Authentication
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=${apiKey}`;

  const getWeatherData = useCallback(async () => {
    try {
      setLoading(true);
      await axios(weatherUrl).then((response) => {
        setLoading(false);
        setWeatherData(response.data);
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [weatherUrl]);

  useEffect(() => {
    getWeatherData();
  }, [getWeatherData]);

  if (loading) {
    return (
      <main className="container">
        <Loading />
      </main>
    );
  }

  return (
    <main className="container">
      <nav className="navbar">
        <TiWeatherPartlySunny className="nav__logo" />
        <h1 className="nav__header">Weather Forecast</h1>
      </nav>

      <div className="box__container">
        <SingleWeather {...weatherData} />
      </div>
    </main>
  );
}

export default App;
