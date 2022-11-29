import axios from "axios";
import { useEffect, useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import SingleWeather from "./components/SingleWeather";
import Loading from "./Loading";

function App() {
  const [weatherData, setWeatherData] = useState([{}]);
  // const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const apiKey = "b050e26e45ce8af5a771a653e6d23ec8"; // Authentication
  const url = `https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=${apiKey}`;

  useEffect(() => {
    setLoading(true);
    const getWeatherData = async () => {
      try {
        const res = await axios.get(url);
        setWeatherData(res.data);
        console.log(res.data);
      } catch (err) {
        console.err(err);
      }
      setLoading(false);
    };
    getWeatherData();
  }, [url]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="container">
      <nav className="navbar">
        <TiWeatherPartlySunny className="nav__logo" />
        <h1 className="nav__header">Weather Forecast</h1>
      </nav>

      <div className="cards">
        {weatherData.map((data) => {
          console.log(data);
          return <SingleWeather key={data.id} data={data} />;
        })}
      </div>
    </main>
  );
}

export default App;
