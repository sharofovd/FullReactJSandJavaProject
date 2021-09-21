import React,{useState,useEffect} from "react";
import api from "../settings/api";
import Table from "../table/DynamicTable";
import {ExportToExcel} from "../ExportToExcel/ExcelExport";
import Header from "../components/Header";
const columns = [
    {
      label: 'Cl_code',
      field: 'code',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Filial',
      field: 'code_filial',
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
      label: 'Phone',
      field: 'phone',
      sort: 'asc',
      width: 270
    },
    {
      label: 'INN',
      field: 'inn',
      sort: 'asc'||'desc',
      width: 100
    },
    {
      label: 'PINFL',
      field: 'pinfl',
      sort: 'asc',
      width: 100
    },
    {
      label: 'R/NR',
      field: 'resident',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Pass_ser',
      field: 'passport_serial',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Pass_num',
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
    {
      label: 'Reg_code',
      field: 'region_code',
      sort: 'asc',
      width: 150
    },
  ];
const headers = "Поиск клиентов, у которых не заполнен INN";  
const CheckINN = () => {
   const fileName = "excelreport"; // here enter filename for your excel file
   const [checkINN, setCheckINN] = useState([])
   useEffect(() => {
       api.get("checkINN").then(res => setCheckINN(res.data))
   },[])
return (
    <div className="container">
        <Header headers={headers}/>
        <ExportToExcel apiData={checkINN} fileName={fileName} />
        <div className="flex-row">
                <Table 
                   backData={checkINN}
                   columns={columns}
                />
        </div>
    </div>
);
};

export default CheckINN;