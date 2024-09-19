import React, { useEffect } from "react";
import { api } from "../Services/api";
import TableView from "./TableView";

const WorkersHoursTable = (props) => {
  useEffect(() => {
    api.getWorkersHours().then((response) => {
      props.setWorkersHours(response.data);
    });
  }, []);

  return (
    <div>
      <TableView
        data={props.workersHours}
        columns={[
          { id: "id", name: "Id" },
          { id: "workerName", name: "Worker name" },
          { id: "taskName", name: "Task name" },
          { id: "startDate", name: "Start name" },
          { id: "endDate", name: "End name" },
        ]}
      ></TableView>
    </div>
  );
};

export default WorkersHoursTable;
