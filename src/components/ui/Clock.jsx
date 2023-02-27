import React, { useEffect, useState } from "react";

export const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;
  const countDown = () => {
    let destination = new Date().getDate() + 30;

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = (destination = now);
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);
      if (destination < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  //   useEffect(() => {
  //     countDown();
  //   }, []);
  return (
    <div className="clock_wrapper flex items-center gap-3">
      <div className="clock_data flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white text-3xl mb-2">{days}</h1>
          <h5 className="text-white text-1xl">Days</h5>
        </div>
        <span className="text-white text-3xl">:</span>
      </div>
      <div className="clock_data flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white text-3xl mb-2">{hours}</h1>
          <h5 className="text-white text-1xl">Hours</h5>
        </div>
        <span className="text-white text-3xl">:</span>
      </div>
      <div className="clock_data flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white text-3xl mb-2">{minutes}</h1>
          <h5 className="text-white text-1xl">Minutes</h5>
        </div>
        <span className="text-white text-3xl">:</span>
      </div>
      <div className="clock_data flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white text-3xl mb-2">{seconds}</h1>
          <h5 className="text-white text-1xl">Seconds</h5>
        </div>
        <span className="text-white text-3xl">:</span>
      </div>
    </div>
  );
};
