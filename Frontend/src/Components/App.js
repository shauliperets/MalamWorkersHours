import React, { useState } from "react";
import "./App.css";
import WorkerHoursForm from "./WorkerHoursForm";
import WorkerTable from "./WorkerHoursTable";

function App() {
  const [workersHours, setWorkersHours] = useState([]);

  return (
    <div className="App">
      <WorkerTable workersHours={workersHours} setWorkersHours={setWorkersHours}></WorkerTable>
      <WorkerHoursForm workersHours={workersHours} setWorkersHours={setWorkersHours}></WorkerHoursForm>
    </div>
  );
}

export default App;
