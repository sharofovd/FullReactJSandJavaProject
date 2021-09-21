import React from "react";
import api from "../settings/api";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Popup from '../components/Popup';
import Table from "../table/DynamicTable";
import Header from "../components/Header";
import "../App.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ExportToExcel} from "../ExportToExcel/ExcelExport";
toast.configure()
export default class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bssreq: [],
            value: "",
            fecha: new Date(),
            fecha1: new Date(),
            isPopupOpen: false,
            count:0,
            headers: "Карточные услуги",
            fileName: "excelreport",
            columns: [
                {
                  label: 'Client_id',
                  field: 'client_id',
                  sort: 'asc',
                  width: 50
                },
                {
                  label: 'Branchbic',
                  field: 'branchbic',
                  sort: 'asc',
                  width: 50
                },
                {
                  label: 'Opertype',
                  field: 'opertype',
                  sort: 'asc',
                  width: 50
                },
                {
                  label: 'Createtime',
                  field: 'createtime',
                  sort: 'asc',
                  width: 50
                },
                {
                  label: 'Phone',
                  field: 'phone',
                  sort: 'asc',
                  width: 50
                },
                {
                  label: 'Customer',
                  field: 'customer',
                  sort: 'asc',
                  width: 50
                },
                {
                  label: 'CardType',
                  field: 'cardtype',
                  sort: 'asc',
                  width: 50
                },
                {
                  label: 'Status',
                  field: 'status',
                  sort: 'asc',
                  width: 50
                },
                {
                  label: 'Text',
                  field: 'text',
                  sort: 'asc',
                  width: 50
                },
              ],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.popupToggle = this.popupToggle.bind(this);
    }

    onChange=fecha=>{
        this.setState({ fecha: fecha });
    }

    onChange1=fecha1=>{
        this.setState({ fecha1 });
    }

    popupToggle() {
        this.setState(state => ({
            ...state,
            isPopupOpen: !state.isPopupOpen
        }))
    }
   
    handleChange(event) {
        this.setState({ value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const value = this.state.fecha;
        const value1 = this.state.fecha1;
        api
            .post("opencard", { toDate: value, endDate: value1})
            .then((res) => {
                this.setState({ bssreq: res.data})
            })
            .catch((err) => console.log("ERROR: ", err))
    }

    notify = () => {
      this.setState(prev => ({count: prev.count + 1}));
       if (this.state.count >= 1)   return !this.state.bssreq.length ? toast.error('No data found. Try later again!', { position: toast.POSITION.TOP_CENTER, autoClose: 5000}) :"";
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
                                        <button className="excelButton" onClick={this.notify} type="submit">FIND</button> 
                               </div>              
                    </div>
                </form>
                <div className="flex-large">
                {this.state.bssreq.length ?
                <Table 
                    backData={this.state.bssreq}
                    columns={this.state.columns}
                   />:
                <h5>Please, Select the date which you want to see the list of Card services and Click 'Find' :(</h5>}
                {!this.state.bssreq.length ? <button onClick={this.popupToggle} style={{paddingRight:"10px",paddingLeft:"10px",marginLeft:"10px",backgroundColor: 'grey',borderRadius:'3px',border:'none',borderColor:'#007bff',color:'white'}}>Note:  </button>:""}
                                          
                                          <Popup trigger={this.state.isPopupOpen} setTrigger={this.popupToggle}>
                                              <h3 style={{color:'red',textAlign:'center'}}>Note</h3>
                                              <p style={{color:'blue'}}>OpenCard - Открытие основной карты;</p>
                                              <p style={{color:'blue'}}>AdditionalCard - Открытие дополнительной карты;</p>
                                              <p style={{color:'blue'}}>ReissueCard - Перевыпуск карты</p>
                                          </Popup>
                {this.state.bssreq.length ? 
                                          <ExportToExcel 
                                              apiData={this.state.bssreq} 
                                              fileName={this.state.fileName} />:""}
              </div>
            </div>
          </div>
        )
    }
}