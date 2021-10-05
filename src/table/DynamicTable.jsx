import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = ({ backData,columns }) => {
  const data = {
    columns: columns,
    rows: [...backData]
  };

  return (
    <div style={{overflowX:"scroll"}}>
      <MDBDataTable
        bordered
        small
        data={data}
      />
    </div>
    
  );
}

export default DatatablePage;