import React,{useState,useEffect} from "react";
import api from "../settings/api";
import Table from "../table/DynamicTable";
import Header from "../components/Header";
const columns = [
    {
      label: 'Extid',
      field: 'extid',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Filial',
      field: 'bic',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Fullname',
      field: 'fullname',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Login',
      field: 'login',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Smsphone',
      field: 'smsphone',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Syscreatetime',
      field: 'syscreatetime',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Lastlogintime',
      field: 'lastlogintime',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Typeos',
      field: 'lasttypeos',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Dateofbirth',
      field: 'dateofbirth',
      sort: 'asc',
      width: 50
    },
    {
      label: 'Passport',
      field: 'passport',
      sort: 'asc',
      width: 50
    },
    {
      label: 'Docgivenplace',
      field: 'docgivenplace',
      sort: 'asc',
      width: 50
    },
  ];
const headers = "Мониторинг зарегистрированных клиентов";

const Clients = () => {
   const [clients, setClients] = useState([])
   useEffect(() => {
       api.get("clients").then(res => setClients(res.data))
   },[])
return (
    <div className="container">
      <Header headers={headers}/>
        <div className="flex-row">
            <Table
               backData={clients}
               columns={columns} 
               />
        </div>
    </div>
);
};

export default Clients;