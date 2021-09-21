import React,{useState,useEffect} from "react";
import api from "../settings/api";
import Table from "../table/DynamicTable";
import Header from "../components/Header";

const columns = [
    {
      label: 'Id',
      field: 'id',
      sort: 'asc',
      width: 50
    },
    {
      label: 'Client',
      field: 'client',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Method_name',
      field: 'method_name',
      sort: 'asc',
      width: 50
    },
    {
      label: 'Date_by',
      field: 'date_by',
      sort: 'asc'||'desc',
      width: 50
    },
    {
      label: 'O_result',
      field: 'o_result',
      sort: 'asc',
      width: 50
    },
    {
      label: 'Cardnumber',
      field: 'cardnumber',
      sort: 'asc',
      width: 50
    },
    {
      label: 'Mobilephone',
      field: 'mobilephone',
      sort: 'asc',
      width: 50
    },
    {
      label: 'Expdate',
      field: 'expiredate',
      sort: 'asc',
      width: 50
    },
    {
      label: 'Err_msg',
      field: 'err_msg',
      sort: 'asc',
      width: 250
    },
  ];
const headers = "Мониторинг восстановление логина";
const RestoreLogin = () => {
   const [restoreLogin, setrestoreLogin] = useState([])
   useEffect(() => {
       api.get("restoreLogin").then(res => setrestoreLogin(res.data))
   },[])
return (
    <div className="container">
      <Header headers={headers}/>
        <div className="flex-row">
                <Table 
                   backData={restoreLogin}
                   columns={columns}
                />
        </div>
    </div>
);
};

export default RestoreLogin;