import React from "react";

function SingleWeather(weatherData) {
  const temp = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].description;
  const weatherMain = weatherData.weather[0].main;
  const icon = weatherData.weather[0].icon;
  const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  const cityName = weatherData.name;

  const cities = [
    {
      id: 1,
      title: "lagos",
    },
    {
      id: 2,
      title: "abuja",
    },
    {
      id: 3,
      title: "kano",
    },
  ];

  return (
    <>
      <div className="images__container">
        {cities.map((city) => {
          const { id, title } = city;

          return (
            <div key={id} className="image__box">
              <div className="bcg">
                <h2>{temp}℃</h2>
                <h2>{weatherMain}</h2>
                <img src={imageUrl} alt="" />
                <h1 className="city">{cityName}</h1>
              </div>
              <div className="content">
                <p className="title">{weatherDescription}</p>
                <h4 className="temp">{temp}℃</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SingleWeather;
