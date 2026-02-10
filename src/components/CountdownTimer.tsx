import { useState, useEffect } from "react";
import FlipCard from "./FlipCard";

export default function CountDownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.days * 86400 +
          prev.hours * 3600 +
          prev.minutes * 60 +
          prev.seconds -
          1;

        if (totalSeconds < 0) return prev;

        return {
          days: Math.floor(totalSeconds / 86400),
          hours: Math.floor((totalSeconds % 86400) / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex gap-4 items-center max-w-fit mx-auto text-4xl sm:text-5xl">
      <FlipCard label="Days" value={timeLeft.days} />
      <FlipCard label="Hours" value={timeLeft.hours} />
      <FlipCard label="Minutes" value={timeLeft.minutes} />
      <FlipCard label="Seconds" value={timeLeft.seconds} />
    </section>
  );
}
