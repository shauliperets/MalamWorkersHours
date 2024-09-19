import React, { useEffect } from "react";
//import axios from "axios";
import { api } from "../Services/api";
import TableView from "./TableView";

const WorkerHoursTable = (props) => {
  useEffect(() => {
    api.getWorkersHours().then((response) => {
      props.setWorkersHours(response.data);
    });
  }, []);

  return (
    <div>
      <TableView
        data={props.workersHours}
        columns={["id", "workerName", "taskName", "startDate", "endDate"]}
      ></TableView>
    </div>
  );
};

export default WorkerHoursTable;
