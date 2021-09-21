import React,{useState,useEffect} from "react";
import api from "../settings/api";
import Table from "../table/DynamicTable";
import {ExportToExcel} from "../ExportToExcel/ExcelExport";
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
      label: 'Pinfl',
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
    {
      label: 'Region_code',
      field: 'region_code',
      sort: 'asc',
      width: 50
    },
  ];
const headers = "Поиск клиентов, у которых не заполнен код региона проживания";  
const CheckRegionCode = () => {
  const fileName = "excelreport"; // here enter filename for your excel file
   const [checkregioncode, setCheckregioncode] = useState([])
   useEffect(() => {
       api.get("checkregioncode").then(res => setCheckregioncode(res.data))
   },[])
return (
    <div className="container">
      <Header headers={headers}/>
      <ExportToExcel apiData={checkregioncode} fileName={fileName} />
        <div className="flex-row">
                <Table 
                   backData={checkregioncode}
                   columns={columns}
                />
        </div>
    </div>
);
};

export default CheckRegionCode;