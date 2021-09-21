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
      width: 270
    },
    {
      label: 'Client_code',
      field: 'client_code',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Filial',
      field: 'filial_code',
      sort: 'asc',
      width: 200
    },  
    {
      label: 'Card_number',
      field: 'card_number',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Date_expiry',
      field: 'date_expiry',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Embossed_name',
      field: 'embossed_name',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Dbo_phone',
      field: 'dbo_phone',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Sms_phone',
      field: 'sms_phone',
      sort: 'asc',
      width: 150
    },
  ];
const headers = "Поиск клиентов, у которых не совпадает номер телефона ДБО и СМС нотификации";  
const CheckPhone = () => {
   const fileName = "excelreport"; // here enter filename for your excel file
   const [comparephone, setComparephone] = useState([])
   useEffect(() => {
       api.get("comparephone").then(res => setComparephone(res.data))
   },[])
return (
    <div className="container">
       <Header headers={headers}/>
       <ExportToExcel apiData={comparephone} fileName={fileName} />
        <div className="flex-row">
                <Table 
                   backData={comparephone}
                   columns={columns}
                />
        </div>
    </div>
);
};

export default CheckPhone;