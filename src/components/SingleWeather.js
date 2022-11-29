import React from "react";

function SingleWeather() {
  return (
    <article className="card">
      <header className="location">London</header>
      <div className="info">
        <p className="temp">50^F</p>
        <p className="desc">
          In a curious work, published in Paris in 1863 by Delaville Dedreux,
          there is a suggestion for reaching the North Pole by an aerostat.
        </p>
      </div>
      <footer>
        <p className="feels">65^F</p>
        <p className="humidity">20%</p>
        <p className="wind">12 MPH</p>
      </footer>
    </article>
  );
}

export default SingleWeather;
