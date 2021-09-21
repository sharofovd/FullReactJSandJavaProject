import React,{useState,useEffect} from "react";
import api from "../settings/api";
import Table from "../table/DynamicTable";
import Header from "../components/Header";
import "../login/Login.css";
const columns = [
    {
      label: 'Contract_id',
      field: 'contract_id',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Terminal_id',
      field: 'terminal_id',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Merchant_name',
      field: 'merchant_name',
      sort: 'asc',
      width: 170
    },
    {
      label: 'Contract_number',
      field: 'contract_number',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Account',
      field: 'acc',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Account_name',
      field: 'acc_name',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Account_saldo',
      field: 'acc_saldo',
      sort: 'asc',
      width: 100
    }
  ];
const headers = "Мониторинг остатков на терминальных счетах";

const Terminals = () => {
   const [users, setUsers] = useState([])
   useEffect(() => {
       api.get("terminal").then(res => setUsers(res.data))
   },[])
return (
    <div className="container">
        <Header headers={headers}/>
        <div className="flex-row">
                <Table 
                   backData={users}
                   columns={columns}
                />
        </div>
    </div>
);
};

export default Terminals;