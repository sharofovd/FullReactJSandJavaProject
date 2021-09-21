import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = ({ backData,columns }) => {
  const data = {
    columns: columns,
    rows: [...backData]
  };

  return (
    <MDBDataTable
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;