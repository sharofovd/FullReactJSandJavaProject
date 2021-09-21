import React,{useState,useEffect} from "react";
import Table from "../table/DynamicTable";
import { Pie,Line,Bar} from "react-chartjs-2";
import api from "../settings/api";
import Header from "../components/Header";
export const Statistics = () => {
return (
	<div className="services">
	<h1>GeeksforGeeks Services</h1>
	</div>
);
};

export const StatisticsOne = () => {
 const	columns = [
	{
		label: 'Order',
		field: 'order',
		sort: 'asc',
		width: 150
	},
	{
	  label: 'Client_id',
	  field: 'client_id',
	  sort: 'asc',
	  width: 150
	},
	{
	  label: 'Client_name',
	  field: 'client_name',
	  sort: 'asc',
	  width: 270
	},
	{
	  label: 'Total',
	  field: 'total',
	  sort: 'asc',
	  width: 170
	}
  ];
  const headers = "TOP(10) P2P Users";
	  const [topUsers, setUsers] = useState([])
	  useEffect(() => {
		  api.get("topUsers").then(res => setUsers(res.data))
	  },[]);

	  let k=1;
	  const topUsersNew=topUsers.map(c => {
		  return {
			  order:k++,
			  client_id: c.client_id,
			  client_name:c.client_name,
			  total: c.total,
		  }
			 
	  });
return (
	<div className="container">
		<Header headers={headers}/>
        <div className="flex-row">
                <Table 
                   backData={topUsersNew}
                   columns={columns}
                />
        </div>
    </div>
);
};

export const StatisticsTwo = () => {
	const	columns = [
		{
			label: 'Order',
			field: 'order',
			sort: 'asc',
			width: 150
		},
		{
		  label: 'Client_id',
		  field: 'client_id',
		  sort: 'asc',
		  width: 150
		},
		{
		  label: 'Client_name',
		  field: 'client_name',
		  sort: 'asc',
		  width: 270
		},
		{
		  label: 'Total',
		  field: 'total',
		  sort: 'asc',
		  width: 170
		}
		];
	const headers = "TOP(10) Payment Users";	
		  const [topPayUsers, setUsers] = useState([])
		  useEffect(() => {
			  api.get("topPayUsers").then(res => setUsers(res.data))
		  },[]);
		  let k=1;
	  const topPayUsersNew=topPayUsers.map(c => {
		  return {
			  order:k++,
			  client_id: c.client_id,
			  client_name:c.client_name,
			  total: c.total,
		  }
			 
	  });
	return (
		<div className="container">
			<Header headers={headers}/>
			<div className="flex-row">
					<Table 
					   backData={topPayUsersNew}
					   columns={columns}
					/>
			</div>
		</div>
	);
};

export const StatisticsThree = () => {
const	columns = [
	  {
		label: 'Order',
		field: 'order',
		sort: 'asc',
		width: 150
	  },
	  {
		label: 'ServiceName',
		field: 'servicename',
		sort: 'asc',
		width: 150
	  },
	  {
		label: 'Agent',
		field: 'agentname',
		sort: 'asc',
		width: 270
	  },
	  {
		label: 'Total',
		field: 'total',
		sort: 'asc',
		width: 170
	  }
	];
	const headers = "TOP(10) Payment Services";		
	  const [topServices, setUsers] = useState([])
	  useEffect(() => {
		  api.get("topServices").then(res => setUsers(res.data))
	  },[]);
	  let k=1;
	  const topServicesNew=topServices.map(c => {
		  return {
			  order:k++,
			  servicename: c.servicename,
			  agentname:c.agentname,
			  total: c.total,
		  }
			 
	  });
return (
	<div className="container">
		<Header headers={headers}/>
        <div className="flex-row">
                <Table 
                   backData={topServicesNew}
                   columns={columns}
                />
        </div>
    </div>
);
};

 export const StatisticsFour = () => {
	const defaultProps = {
		display: true,
		displayLegend: true,
		legendPosition:'bottom'
	}  
	const [clientDevice, setUsers] = useState([])
	useEffect(() => {
		api.get("clientDevice").then(res => setUsers(res.data))
	},[]);
	let countall=0;

	clientDevice.map(c => {
		countall+=c.countdevice;
		return '';
	})

 return (
	 <div className="container">
		 	<Header headers="Distribution of Clients' Device(Ios, Android..)"/>
		 <div className="chart" style={{width:"50%", alignItems:"right"}}>
				   <Pie
						 data={{
							 labels: clientDevice.map(i=>i.devicetype),
							 datasets:[
								 {
								//	 label:'Client Device',
									 data:clientDevice.map(i=>i.countdevice),
									 backgroundColor:[
										 'rgb(60, 179, 113)',
										 'rgb(238, 130, 238)',
										 'rgb(255, 165, 0)',
									 ] 
								 }
							 ]
						 }}
						 options={{
							 title:{
							 display:true,
						//	 text:'Client Device',
							 fontSize:25    
							 },
							  legend: {
							  display:defaultProps.displayLegend,
							  position:defaultProps.legendPosition
							  }
						 }}
					 />
						<div style={{ margin: "0 auto", width: "300px", padding:"20px", display: "flex", justifyContent: "space-between",color:"#FE4880"}}>
							<p style={{marginRight:"60px"}}>
								{clientDevice.map(i=>{
									if(i.devicetype==='desktop') return parseFloat(100*i.countdevice/countall).toFixed(0)+'(%)';
									return "";    
								})}
							</p>
							<p style={{marginLeft:"-20px"}}>
								{clientDevice.map(i=>{
									if(i.devicetype==='android') return parseFloat(100*i.countdevice/countall).toFixed(0)+'(%)';
									return "";
								})}
							</p>
							<p style={{marginLeft:"20px"}}>
								{clientDevice.map(i=>{
									if(i.devicetype==='ios') return parseFloat(100*i.countdevice/countall).toFixed(0)+'(%)';
									return "";})}
							</p>
					    </div>	 
		 </div>
		 </div>
 );	 
 }
 export const StatisticsFive = () => {
	const columns = [
		{
		  label: 'Order',
		  field: 'order',
		  sort: 'asc',
		  width: 150
		},
		{
		  label: 'Filial_code',
		  field: 'filial',
		  sort: 'asc',
		  width: 270
		},
		{
		  label: 'Filial_name',
		  field: 'filial_name',
		  sort: 'asc',
		  width: 270
		},
		{
		  label: 'Registration_count',
		  field: 'regcount',
		  sort: 'asc',
		  width: 200
		},
	  ];
	const headers = "Регистрация по филиалу";  
	const [regbybranch, setUsers] = useState([])
	useEffect(() => {
		api.get("regbybranch").then(res => setUsers(res.data))
	},[]);

	let countall=0;
	let k=1;
	let filial_name='';
	const regbybranchNew=regbybranch.map(c => {
		countall+=c.regcount;
		 if (c.filial==='01071')         filial_name='ОПЕРУ при Головном офисе';
            else if (c.filial==='01096') filial_name='Чиланзарский филиал';
            else if (c.filial==='01167') filial_name='Мирабадский филиал';
            else if (c.filial==='01075') filial_name='Юнусабадский филиал';
            else if (c.filial==='01115') filial_name='Шайхантохурский филиал';
            else if (c.filial==='01111') filial_name='Самаркандский филиал';
            else                         filial_name='Центральный операционный филиал';
		return {
			order:k++,
			filial: c.filial,
			filial_name:filial_name,
			regcount: c.regcount,
		}
           
	});

 return (
		<div className="container">
			<Header headers={headers}/>
            <div className="flex-row">
				 <div className="flex-large">
				 <Table 
                   backData={regbybranchNew}
                   columns={columns}
                />
				 </div>
            </div>
				  <div className="flex-column">
					<p style={{color:"red",fontSize:"1.4rem"}}>Общее количество клиентов: {countall.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
				  </div>
        </div>
 );	 
 }
 export const StatisticsSix = () => {
	const defaultProps = {
		display: true,
		displayLegend: true,
		legendPosition:'right'
	}  
	const [clientRegRate, setUsers] = useState([])
	useEffect(() => {
		api.get("clientRegRate").then(res => setUsers(res.data))
	},[]);
	const clientRegRateNew = clientRegRate.map(c => {
		c.period = c.period.substr(0,10);
		return {
			period: c.period,
			countuser: c.countuser,
			};
});
 return (
	<div className="container">
		<Header headers="Registration Rate in the last month"/>
	<div className="chart">      
			<Line
				data={{
					labels: clientRegRateNew.map(i=>i.period),
					datasets:[
						{
							label:'Client Registartion Rate',
							data:clientRegRateNew.map(i=>i.countuser),
							backgroundColor:[
							   'rgba(255, 99, 132, 0.6)',
							   'rgba(54, 162, 235, 0.6)',
							   'rgba(255, 206, 86, 0.6)',
							   'rgba(75, 192, 192, 0.6)',
							   'rgba(153, 102, 255, 0.6)',
							   'rgba(255, 159, 64, 0.6)',
							   'rgba(255, 99, 132, 0.6)',
							   'rgba(255, 206, 86, 0.6)',
							   'rgba(75, 192, 192, 0.6)',
							   'rgba(153, 102, 255, 0.6)',
							   'rgba(255, 159, 64, 0.6)',
							   'rgba(255, 99, 132, 0.6)',
							   'rgba(255, 206, 86, 0.6)',
							   'rgba(75, 192, 192, 0.6)',
							   'rgba(153, 102, 255, 0.6)',
							   'rgba(255, 159, 64, 0.6)',
							   'rgba(255, 99, 132, 0.6)',
							   'rgba(255, 206, 86, 0.6)',
							   'rgba(75, 192, 192, 0.6)',
							   'rgba(153, 102, 255, 0.6)',
							   'rgba(255, 159, 64, 0.6)',
							   'rgba(255, 99, 132, 0.6)',
							   'rgba(255, 206, 86, 0.6)',
							   'rgba(75, 192, 192, 0.6)',
							] 
						}
					]
				}}
				options={{
					title:{
					display:true,
					text:'Registration Rate in the last month',
					fontSize:25    
					},
					legend: {
					display:defaultProps.displayLegend,
					position:defaultProps.legendPosition
					}
				}}
			/>        
	</div>
	</div>
 );	 
 }

 export const StatisticsSeven = () => {
	const defaultProps = {
		display: true,
		displayLegend: true,
		legendPosition:'right'
	}  
	const [transactionrate, setUsers] = useState([])
	useEffect(() => {
		api.get("transactionrate").then(res => setUsers(res.data))
	},[]);
	const transactionrateNew = transactionrate.map(c => {
		c.period = c.period.substr(0,10);
		return {
			period: c.period,
			counttransaction: c.counttransaction,
			};
});
 return (
<div className="container">
             <Header headers="Transaction Rate in the last month"/>
            <div className="chart">      
                    <Bar
                        data={{
                            labels: transactionrateNew.map(i=>i.period),
                            datasets:[
                                {
                                    label:'Transaction Rate',
                                    data:transactionrateNew.map(i=>i.counttransaction),
                                    backgroundColor:[
                                        'rgb(255, 99, 71)',
                                        'rgba(15, 213, 109, 0.4)',
                                        'rgba(15, 204, 246, 0.5)',
                                        'rgb(238, 130, 238)',
                                        'rgb(106, 90, 205)',
                                        'rgb(255, 165, 0)',
                                        'rgb(255, 0, 0)',
                                        'rgb(60, 60, 60)',
                                        'rgb(120, 120, 120)',
                                        'rgba(255, 99, 71, 0.5)',
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(15, 93, 88, 0.9)',
                                        'rgb(0, 0, 255)',
                                        'rgb(60, 179, 113)',
                                        'rgb(238, 130, 238)',
                                        'rgb(255, 165, 0)',
                                        'rgb(106, 90, 205)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                        'rgba(153, 102, 255, 0.6)',
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(15, 141, 109, 0.4)',
                                        'rgba(255, 159, 64, 0.6)',
                                        'rgba(255, 99, 71, 0.2)',
                                        'rgba(255, 99, 71, 0.6)',
                                        'rgb(106, 90, 205)',
                                        'rgb(60, 179, 113)',
                                        'rgba(182, 66, 136, 0.5)',
                                        'rgba(15, 213, 194, 0.8)',
                                        'rgba(255, 99, 71, 0.9)'
                                    ] 
                                }
                            ]
                        }}
                        options={{
                            title:{
                            display:true,
                            text:'Transaction Rate in the last month',
                            fontSize:25    
                            },
                            legend: {
                            display:defaultProps.displayLegend,
                            position:defaultProps.legendPosition
                            }
                        }}
                    />        
            </div>
            </div>
 );	 
 }

