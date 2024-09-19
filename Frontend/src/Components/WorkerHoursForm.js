import React, { useState } from "react";
//import axios from "axios";
import { api } from "../Services/api";

const WorkerHoursForm = (props) => {
  const [workerName, setWorkerName] = useState("Worker ");
  const [taskName, setTaskName] = useState("Task ");
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 16));
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 16));

  const handleSubmit = async (event) => {
    event.preventDefault();

    api.postWorkerHours(workerName, taskName, startDate, endDate).then(() => {
      props.setWorkersHours([
        ...props.workersHours,
        {
          workerName: workerName,
          taskName: taskName,
          startDate: startDate,
          endDate: endDate,
        },
      ]);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={workerName}
        onChange={(event) => setWorkerName(event.target.value)}
        placeholder="Worker Name"
      />
      <input
        type="text"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        placeholder="Task Name"
      />
      <input type="datetime-local" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
      <input type="datetime-local" value={endDate} onChange={(event) => setEndDate(event.target.value)} />

      <button type="submit">Add</button>
    </form>
  );
};

export default WorkerHoursForm;
