import React, { useState, useEffect } from "react";

type DynamicTextAreaProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export function DynamicTextArea({
  placeholder,
  value,
  onChange,
}: DynamicTextAreaProps) {
  const [rows, setRows] = useState<number>(1);
  const [cols, setCols] = useState<number>(20);

  useEffect(() => {
    const calculateRowsAndCols = (text: string) => {
      const lines = text.split("\n");
      const maxCols = Math.max(...lines.map((line) => line.length));
      const numRows = lines.length;
      setRows(numRows + 1);
      setCols(Math.max(maxCols, 20));
    };

    calculateRowsAndCols(value);
  }, [value]);

  return (
    <div>
      <textarea
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
