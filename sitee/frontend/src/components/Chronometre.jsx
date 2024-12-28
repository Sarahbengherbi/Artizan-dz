import React, { useState, useEffect } from 'react';

const Chronometre = ({ initialDays, initialHours, initialMinutes, initialSeconds }) => {
  const [time, setTime] = useState({
    days: initialDays,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const { days, hours, minutes, seconds } = time;

      if (seconds > 0) {
        setTime({ ...time, seconds: seconds - 1 });
      } else if (minutes > 0) {
        setTime({ ...time, minutes: minutes - 1, seconds: 59 });
      } else if (hours > 0) {
        setTime({ ...time, hours: hours - 1, minutes: 59, seconds: 59 });
      } else if (days > 0) {
        setTime({ ...time, days: days - 1, hours: 23, minutes: 59, seconds: 59 });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="flex space-x-16 text-center mt-8">
        <div className='block'>
      <div className="bg-black rounded-lg opacity-60 p-4">
        <span className="text-white text-3xl block">{time.days}</span>
      </div>
        <span className="text-white  text-bold uppercase">jours</span>
        </div>

        <div className='block'>

      <div className="bg-black rounded-lg opacity-60 p-4">
        <span className="text-white text-3xl block">{time.hours}</span>
      </div>
        <span className="text-white  text-bold uppercase">heures</span>
        </div>

        <div className='block'>

      <div className="bg-black rounded-lg opacity-60 p-4">
        <span className="text-white text-3xl block">{time.minutes}</span>
      </div>
        <span className="text-white  text-bold uppercase">minutes</span>
        </div>

        <div className='block'>

      <div className="bg-black rounded-lg opacity-60 p-4">
        <span className="text-white text-3xl  block">{time.seconds}</span>
      </div>
        <span className="text-white  text-bold uppercase">secondes</span>
    </div>
    </div>

  );
};

export default Chronometre;
