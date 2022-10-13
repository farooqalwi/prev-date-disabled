import React from "react";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import moment from "moment";

const App = () => {
  return (
    <div className="App">
      <Space>
        <DatePicker
          format={"DD-MM-YYYY"}
          disabledDate={current => {
            return current && current < moment().startOf('day')
          }}
        />

      </Space>
    </div>
  );
};

export default App;


