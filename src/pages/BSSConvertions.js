import React from "react";
import api from "../settings/api";
// import { Button } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Table from "../table/DynamicTable";
import "../App.css";
import Header from "../components/Header";
export default class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bssreq: [],
            value: "",
            fecha: new Date(),
            fecha1: new Date(),
            users:[],
            total:0,
            total1:0,
            headers: "Monitoring OFB Conversion",
            columns: [
                {
                  label: 'Filial',
                  field: 'filial',
                  sort: 'asc',
                  width: 150
                },
                {
                  label: 'FromNumber',
                  field: 'fromnumber',
                  sort: 'asc',
                  width: 270
                },
                {
                  label: 'Cl_name',
                  field: 'cl_name',
                  sort: 'asc',
                  width: 270
                },
                {
                  label: 'V_sum',
                  field: 'v_sum',
                  sort: 'asc',
                  width: 200
                },
                {
                  label: 'V_valyuta',
                  field: 'v_valyuta',
                  sort: 'asc',
                  width: 200
                },
                 {
                  label: 'ToNumber',
                  field: 'tonumber',
                  sort: 'asc',
                  width: 200
                },
                {
                  label: 'Date_by',
                  field: 'date_by',
                  sort: 'asc',
                  width: 200
                },
                {
                  label: 'Status',
                  field: 'status',
                  sort: 'asc',
                  width: 200
                },
              ],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange=fecha=>{
        this.setState({ fecha: fecha });
    }
    onChange1=fecha1=>{
        this.setState({ fecha1 });
    }
   
    handleChange(event) {
        this.setState({ value: event.target.value,  total:event.target.total, total1:event.target.total1 });
    }
    handleSubmit(event) {
        event.preventDefault();
        const value = this.state.fecha;
        const value1 = this.state.fecha1;
        api
            .post("ofbcon", { toDate: value, endDate: value1})
            .then((res) => {
                const users = res.data;
                const idArr = users.map(user =>parseFloat(user.v_sum));
                const idArr1 = users.map(user =>parseFloat(user.v_valyuta));
                let total = idArr.reduce((a, b) => parseFloat(a + b), 0);
                let total1 = idArr1.reduce((a, b) => parseFloat(a + b), 0);
                this.setState({ bssreq: res.data, total: total, total1:total1 })
            })
            .catch((err) => console.log("ERROR: ", err))
    }
    render() {
        return (
            <div className="container">
            <Header headers={this.state.headers}/>   
          <div className="flex-row">
              <form onSubmit={this.handleSubmit}>
                  <div style={{color:"white",backgroundColor:"#454b4e",fontFamily:"inherit",borderRadius:"5px",paddingTop:"30px",paddingBottom:"20px"}}>
                      <div style={{display:"flex",flexDirection:"row"}}>
                                      <label  style={{marginLeft:"20px"}}>From</label><DatePicker type="text" selected={this.state.fecha} onChange={this.onChange} />
                                      <label>To</label><DatePicker type="text" selected={this.state.fecha1} onChange={this.onChange1}/>
                          <button className="excelButton" type="submit">FIND</button>
                           <div className="d-flex justify-content-end"> 
                                      <label>Total: <input type='text' value={parseFloat(this.state.total1).toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")+' USD'} disabled='disabled'/><input type='text' value={parseFloat(this.state.total).toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")+' UZS'} disabled='disabled'/></label>
                          </div>
                      </div>                   
                  </div>
               </form>
               <div className="flex-large">
                      {this.state.bssreq.length ? 
                      <Table backData={this.state.bssreq} columns={this.state.columns}/>: 
                      <h5>Please, Select the date which you want to see the list of transactions and Click 'Find' :(</h5>}
              </div>
          </div>
        </div>
        )
    }
}