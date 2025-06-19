"use client";

import React from "react";
import Select, { MultiValue, StylesConfig } from "react-select";

export type Option = {
  value: string;
  label: string;
};

type MultiSelectProps = {
  options: Option[];
  value: MultiValue<Option>;
  onSelect: (selected: MultiValue<Option>) => void;
  placeholder?: string;
};

const customStyles: StylesConfig<Option, true> = {
  container: (provided) => ({
    ...provided,
    width: "50%",
  }),
  control: (provided, state) => ({
    ...provided,
    height: "40px",
    backgroundColor: "#1f2937",
    borderColor: "#374151",
    color: "#ffffff",
    boxShadow: state.isFocused ? "0 0 0 1px #4b5563" : "none",
    ":hover": {
      borderColor: "#4b5563",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#1f2937",
    color: "#ffffff",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#374151" : "#1f2937",
    color: "#ffffff",
    cursor: "pointer",
  }),
  valueContainer: (provided) => ({
    ...provided,
    display: "flex",
    flexWrap: "nowrap",
    overflow: "hidden",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#374151",
    fontSize: "10px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#ffffff",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#ffffff",
    ":hover": {
      backgroundColor: "#4b5563",
      color: "#fff",
    },
  }),
  input: (provided) => ({
    ...provided,
    color: "#ffffff",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#ffffff",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#9ca3af",
  }),
};

const MultiSelect = ({
  options,
  value,
  onSelect,
  placeholder,
}: MultiSelectProps) => {
  return (
    <Select
      isMulti
      options={options}
      value={value}
      onChange={onSelect}
      placeholder={placeholder || "Select options"}
      styles={customStyles}
      components={{ IndicatorSeparator: () => null }}
    />
  );
};

export default MultiSelect;
