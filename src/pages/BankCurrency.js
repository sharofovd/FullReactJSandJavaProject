import React from "react";
import api from "../settings/api";
import Table from "../table/DynamicTable";
import Header from "../components/Header";
const columns = [
    {
      label: 'Createtime',
      field: 'createtime',
      sort: 'asc',
      width: 150
    },
    {
      label: 'RateType',
      field: 'ratetype',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Rate',
      field: 'rate',
      sort: 'asc',
      width: 170
    }
  ];
  const headers = "Импорт курсов валют Банка";
  export default class index extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
         users: [],
         bssServreq: [],
        };
     this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        api
        .get(`getcurrency`)
        .then((res) => this.setState({bssServreq:res.data}))
        .catch((err) => console.log("ERROR: ", err));
    }
    render() {
        const Downloading = ()=>{
            api
            .get(`exchangeRate`)
                    .then(res => {
            const users = res.data;
            this.setState({ users});
      })
        }
        return (
            <div className="container">
            <Header headers={headers}/>
              <div className="flex-row" style={{marginTop:"20px"}}>
                  <div className="flex-column">
                    <button className="excelButton" onClick={Downloading}>UPDATE</button>
                    <label style={{backgroundColor:"WhiteSmoke",marginLeft:"10px",borderRadius:"3px",padding:"3px",fontSize:"0.8em"}}>Note, in order to update OFB MOBILE currency, please click 'UPDATE'.Then, click 'Currency' button</label>
                      <form onSubmit={this.handleSubmit}>
                          <div className="d-flex justify-content-start" style={{ alignItems: "center" }}>
                                  <button className="excelButton" type="submit">CURRENCY</button>
                          </div>                      
                      </form>
                  </div>
                    {this.state.bssServreq.length ? 
                    <Table
                        backData={this.state.bssServreq}
                        columns={columns} 
                    />                
                    : ""}
              </div>
          </div>
        )
    }
}



// import React from "react";
// // import api from "../settings/api";

//   export default class index extends React.Component {
//     render() {
//         const Downloading = ()=>{
//           window.open(
//            // api.get("excel-report").then(console.log("Data downloaded!")),
//             `http://localhost:8081/api/excel-report`,
//             '_blank'
//           )
//         }
//         return (
//             <div className="container">
//               <div className="flex-row" style={{marginTop:"20px"}}>
//                   <div className="flex-column">
//                     <button className="excelButton" onClick={Downloading}>UPDATE</button>
//                   </div>
//               </div>
//           </div>
//         )
//     }
// }