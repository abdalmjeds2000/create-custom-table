import React from 'react';
import Table from './Table.jsx';

const Table = (props) => {
  const { config } = props;

  const updateConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: <th>{column.label}</th>,
    };
  });

  return <Table {...props} />;
};

export default Table;
