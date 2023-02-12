import React from 'react';

const Table = ({ config, data, keyFn }) => {
  const renderHeaders = (
    <tr className="border-b-2">
      {config.map((col) => (
        <td className="p-2 font-semibold">{col.label}</td>
      ))}
    </tr>
  );
  const renderRows = data.map((row) => {
    const renderCells = config.map((cell, ii) => (
      <td key={ii} className="p-3">
        {cell.render(row)}
      </td>
    ));
    return (
      <tr key={keyFn(row)} className="border-b-2">
        {renderCells}
      </tr>
    );
  });

  return (
    <table>
      <thead>{renderHeaders}</thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default Table;
