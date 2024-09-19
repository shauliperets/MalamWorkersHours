import React from "react";

const TableView = ({ data, columns }) => {
  return (
    <div className="table">
      <div className="table-header">
        {columns.map((col, index) => (
          <div key={index} className="table-header-cell">
            {col.name}
          </div>
        ))}
      </div>
      <div className="table-body">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="table-row">
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="table-cell">
                {row[col.id]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableView;
