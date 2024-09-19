import React, { useState } from "react";
import "./App.css";
import WorkerHoursForm from "./WorkerHoursForm";
import WorkersHoursTable from "./WorkersHoursTable";

function App() {
  const [workersHours, setWorkersHours] = useState([]);

  return (
    <div className="App">
      <WorkersHoursTable workersHours={workersHours} setWorkersHours={setWorkersHours}></WorkersHoursTable>
      <WorkerHoursForm workersHours={workersHours} setWorkersHours={setWorkersHours}></WorkerHoursForm>
    </div>
  );
}

export default App;
