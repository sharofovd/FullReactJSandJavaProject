 import React,{useState,useEffect} from "react";
 import api from "../settings/api";
 import Table from "../table/DynamicTable";
 import Header from "../components/Header";
 import "../styles.css";
 const columns = [
    {
      label: 'Name',
      field: 'user_name',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Login',
      field: 'create_time',
      sort: 'asc',
      width: 270
    },
    {
      label: 'CreateTime',
      field: 'last_access',
      sort: 'asc',
      width: 200
    },
    {
      label: 'LastAccess',
      field: 'point_name',
      sort: 'asc'||'desc',
      width: 100
    },
    {
      label: 'PointName',
      field: 'user_id',
      sort: 'asc',
      width: 150
    }
  ];
 const headers = "Мониторинг онлайн-пользователей";

 const LiveUsers = () => {
    const [users, setUsers] = useState([]);
  //  const [loading, setLoading] = useState(false);
    useEffect(() => {
        api.get("onlineusers").then(res => setUsers(res.data))
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
 
 export default LiveUsers;