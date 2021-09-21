import React,{useState,useEffect} from "react";
import api from "../settings/api";
import {ExportToExcel} from "../ExportToExcel/ExcelExport";
import Table from "../table/DynamicTable";
import Header from "../components/Header";
const columns = [
    {
      label: 'Code',
      field: 'code',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Name',
      field: 'name',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Code_filial',
      field: 'code_filial',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Resident',
      field: 'resident_code',
      sort: 'asc',
      width: 200
    },
    {
      label: 'PINFL',
      field: 'pinfl',
      sort: 'asc'||'desc',
      width: 100
    },
    {
      label: 'Passport_serial',
      field: 'passport_serial',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Passport_number',
      field: 'passport_number',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Birthday',
      field: 'birthday',
      sort: 'asc',
      width: 150
    },
  ];
const headers = "Поиск клиентов, у которых не заполнен PINFL";
const CheckPINFL = () => {
   const fileName = "excelreport"; // here enter filename for your excel file
   const [checkpinfl, setCheckpinfl] = useState([])
   useEffect(() => {
       api.get("checkpinfl").then(res => setCheckpinfl(res.data))
   },[])
return (
    <div className="container">
                <Header headers={headers}/>
                <ExportToExcel apiData={checkpinfl} fileName={fileName} />
        <div className="flex-row">
                <Table 
                   backData={checkpinfl}
                   columns={columns}
                />
        </div>
    </div>
);
};

export default CheckPINFL;

/*
import {ExportToExcel} from './ExcelExport'
import React,{useState,useEffect} from "react";
import api from "../settings/api";

function ExcelExport() {
  const fileName = "excelreport"; // here enter filename for your excel file
const [data, setData] = useState([])
useEffect(() => {
    api.get("terminal").then(res => setData(res.data))
},[])
  return (
    <div className="App">
      <ExportToExcel apiData={data} fileName={fileName} />
    </div>
  );
}

export default ExcelExport;
*/