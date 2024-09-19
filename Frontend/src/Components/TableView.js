import React from "react";

import { useEffect } from "react";

const TableView = ({ data, columns }) => {
  useEffect(() => {
    //fetchWorkersHours();
    console.log("Table load. data: ", data);
    console.log("Table load. columns: ", columns);
  }, []);

  return (
    <div className="table">
      <div className="table-header">
        {columns.map((col, index) => (
          <div key={index} className="table-header-cell">
            {col}
          </div>
        ))}
      </div>
      <div className="table-body">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="table-row">
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="table-cell">
                {row[col]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableView;
