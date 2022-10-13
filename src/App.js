import React, { useState } from "react";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import moment from "moment";

const App = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="App">
      <DatePicker
        placeholder="Start Date"
        format={"DD-MM-YYYY"}
        disabledDate={current => {
          return current && current < moment().startOf('day')
        }}
        onChange={date => setStartDate(date)}
      />

      <DatePicker
        placeholder="End Date"
        disabled={startDate ? false : true}
        format={"DD-MM-YYYY"}
        disabledDate={current => {
          return current && current < startDate
        }}
      />
    </div>
  );
};

export default App;


