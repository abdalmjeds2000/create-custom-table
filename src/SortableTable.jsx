import React, { useState } from 'react';
import Table from './Table.jsx';

const Table = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config } = props;

  const handleClick = (label) => {
    alert(label);
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updateConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: (
        <th onClick={() => handleClick(column.label)}>{column.label} SORT</th>
      ),
    };
  });

  return <Table {...props} config={updateConfig} />;
};

export default Table;
