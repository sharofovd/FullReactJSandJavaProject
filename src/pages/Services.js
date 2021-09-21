import React,{useState,useEffect} from "react";
import Table from "../table/DynamicTable";
import api from "../settings/api";
import Header from "../components/Header";
export const ServicesOne = () => {
 const	columns = [
	{
	  label: 'Id',
	  field: 'id',
	  sort: 'asc',
	  width: 150
	},
	{
	  label: 'Method_name',
	  field: 'method_name',
	  sort: 'asc',
	  width: 270
	},
	{
	  label: 'Transact_id',
	  field: 'transact_id',
	  sort: 'asc',
	  width: 200
	},
	{
	  label: 'Date_by',
	  field: 'date_by',
	  sort: 'asc',
	  width: 100
	},
	{
	  label: 'Operator_message',
	  field: 'operatortext',
	  sort: 'asc',
	  width: 150
	},
	{
	  label: 'Status',
	  field: 'text',
	  sort: 'asc',
	  width: 150
	}
  ];
  const headers = "Мониторинг успешных транзакций"; 
	  const [Suctransactions, setSuctransactions] = useState([])
	  useEffect(() => {
		  api.get("bssrequestsImpl").then(res => setSuctransactions(res.data))
	  },[]);
	return (
		<div className="container">
			<Header headers={headers}/>
			<div className="flex-row">
					<Table 
					backData={Suctransactions}
					columns={columns}
					/>
			</div>
		</div>
	);
};

export const ServicesTwo = () => {
	const	columns = [
	   {
		 label: 'Id',
		 field: 'id',
		 sort: 'asc',
		 width: 150
	   },
	   {
		 label: 'Method_name',
		 field: 'method_name',
		 sort: 'asc',
		 width: 270
	   },
	   {
		 label: 'Transact_id',
		 field: 'transact_id',
		 sort: 'asc',
		 width: 200
	   },
	   {
		 label: 'Date_by',
		 field: 'date_by',
		 sort: 'asc',
		 width: 100
	   },
	   {
		 label: 'Operator_message',
		 field: 'operatortext',
		 sort: 'asc',
		 width: 150
	   },
	   {
		 label: 'Status',
		 field: 'text',
		 sort: 'asc',
		 width: 150
	   }
	 ];
	 const headers = "Мониторинг ошибочных транзакций"; 
		 const [Errtransactions, setErrtransactions] = useState([])
		 useEffect(() => {
			 api.get("bssrequestsDec").then(res => setErrtransactions(res.data))
		 },[]);
	return (
		<div className="container">
			<Header headers={headers}/>
			<div className="flex-row">
					<Table 
						backData={Errtransactions}
						columns={columns}
					/>
			</div>
		</div>
	);
   };

   export const ServicesThree = () => {
	const	columns = [
	   {
		 label: 'Id',
		 field: 'id',
		 sort: 'asc',
		 width: 150
	   },
	   {
		 label: 'Method_name',
		 field: 'method_name',
		 sort: 'asc',
		 width: 270
	   },
	   {
		 label: 'Transact_id',
		 field: 'transact_id',
		 sort: 'asc',
		 width: 200
	   },
	   {
		 label: 'Date_by',
		 field: 'date_by',
		 sort: 'asc',
		 width: 100
	   },
	   {
		 label: 'Operator_message',
		 field: 'operatortext',
		 sort: 'asc',
		 width: 150
	   },
	   {
		 label: 'Status',
		 field: 'text',
		 sort: 'asc',
		 width: 150
	   }
	 ];
	 const headers = "Мониторинг всех транзакций"; 
		 const [Alltransactions, setAlltransactions] = useState([])
		 useEffect(() => {
			 api.get("bssrequests").then(res => setAlltransactions(res.data))
		 },[]);
	return (
		<div className="container">
			<Header headers={headers}/>
			<div className="flex-row">
					<Table 
						backData={Alltransactions}
						columns={columns}
					/>
			</div>
		</div>
	);
   };