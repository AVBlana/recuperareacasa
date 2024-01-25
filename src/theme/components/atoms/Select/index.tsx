import React, { useCallback, useRef, useState } from "react";
import { Text } from "../Text";
import { useOutsideAlerter } from "@/app/theme/hooks/useOutsideAlerter";

interface Props<DataType> {
  label: string;
  items: Array<DataType>;
  value: string;
  labelExtractor: (item: DataType) => string;
  valueExtractor: (item: DataType) => string;
  onValueChange: (value: string, selectedItem: DataType) => void;
}

export const DynamicSelect = <DataType,>({
  label,
  items,
  value,
  onValueChange,
  labelExtractor,
  valueExtractor,
}: Props<DataType>) => {
  const handleOnValueChange = useCallback(
    (selectedValue: string) => {
      const item = items.find((i) => valueExtractor(i) === selectedValue);

      if (!item) return;

      onValueChange(selectedValue, item!);
      setIsOpen(false);
    },
    [items]
  );

  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
      }}
    >
      <Text white>{label}</Text>

      <div onClick={toggleOpen}>
        <Text white>{value}</Text>
      </div>

      {isOpen ? (
        <div
          style={{
            position: "absolute",
          }}
        >
          {items.map((item, index) => {
            const itemLabel = labelExtractor(item);
            const itemValue = valueExtractor(item);
            return (
              <div key={index} onClick={() => handleOnValueChange(itemValue)}>
                <Text white>{itemLabel}</Text>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
