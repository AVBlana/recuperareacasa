import React, { ChangeEvent, useState } from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  startValue: number;
  onChange: (startValue: number) => void;
}

export function RangeSlider({
  min,
  max,
  step,
  startValue,
  onChange,
}: RangeSliderProps) {
  const [value, setValue] = useState<number>(startValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
