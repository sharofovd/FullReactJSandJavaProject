import React,{useState,useEffect} from "react";
import api from "../settings/api";
import Table from "../table/DynamicTable";
import {ExportToExcel} from "../ExportToExcel/ExcelExport";
import Header from "../components/Header";
const columns = [
    {
      label: 'Client_id',
      field: 'client_id',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Name',
      field: 'name',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Syscreatetime',
      field: 'syscreatetime',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Lastloginmodeldevice',
      field: 'lastloginmodeldevice',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Lastlogintime',
      field: 'lastlogintime',
      sort: 'asc',
      width: 270
    },
    {
        label: 'Lasttypeos',
        field: 'lasttypeos',
        sort: 'asc',
        width: 270
      },
  ];
const headers = "Количество визитов клиентов в ДБО за день";
const CheckOFBVisitors = () => {
   const fileName = "excelreport"; // here enter filename for your excel file
   const [CheckOFBVisitors, setCheckOFBVisitors] = useState([])
   useEffect(() => {
       api.get("checkofbvisitors").then(res => setCheckOFBVisitors(res.data))
   },[])
  return (
      <div className="container">
        <Header headers={headers}/>
        <ExportToExcel apiData={CheckOFBVisitors} fileName={fileName} />
          <div className="flex-row">
                  <Table 
                    backData={CheckOFBVisitors}
                    columns={columns}
                  />
          </div>
      </div>
  );
};

export default CheckOFBVisitors;