import { useState, useEffect } from "react";

export default function FlipCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const [isFlipping, setIsFlipping] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);
  const [previousValue, setPreviousValue] = useState(value);

  useEffect(() => {
    if (value !== displayValue) {
      setIsFlipping(true);
      setPreviousValue(displayValue);

      setTimeout(() => {
        setDisplayValue(value);
        setIsFlipping(false);
      }, 300);
    }
  }, [value, displayValue]);

  const formatted = displayValue.toString().padStart(2, "0");
  const prevFormatted = previousValue.toString().padStart(2, "0");

  return (
    <div className="time-card">
      <div className="time-card-inner">
        <div className={`flip-card ${isFlipping ? "flipping" : ""}`}>
          <span>{isFlipping ? prevFormatted : formatted}</span>
        </div>
      </div>

      <span className="time-card-label">{label}</span>
    </div>
  );
}
