
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Timer.css";

function Timer() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-6`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
        HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
        MINUTES: Math.floor((difference / 1000 / 60) % 60),
        SECONDS: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    /*
    if (!timeLeft[interval]) {
      return 0;
    }
    */

    timerComponents.push(
      <span class="col card border-light" style={{borderRadius: "10%", margin: "0 20px"}}>
        <div>
        <h1 class="timerContent">
          {timeLeft[interval]}
        </h1>
        <p class="timerContent interval">
          {interval}{" "}
        </p>
        </div>
      </span>
    );
  });
  return (
    <div>
      <div class="container" style={{marginTop: "2em"}}>
        <div class="row">
          <div class="card-deck">
            {timerComponents.length ? timerComponents : <span>Time for Blastoff!</span>}
          </div>
        </div>
        <div class="row">
        </div>
      </div>
    </div>
  );
}
/* Until Launch text should be at the bottom */

export default Timer;
