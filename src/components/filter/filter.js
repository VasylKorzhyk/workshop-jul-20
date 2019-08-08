import React from "react";
import DateFilter from "../date-filter/date-filter";
import SelectFilter from "../select-filter/select-filter";

export default function Filter() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: `100%`,
        marginBottom: 50
      }}
    >
      <div style={{ width: 300, marginLeft: 20 }}>
        <SelectFilter />
      </div>
      <div>
        <DateFilter />
      </div>
    </div>
  );
}
