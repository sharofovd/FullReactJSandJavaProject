import React from "react";
import api from "../settings/api";
import Table from "../table/DynamicTable";
import Header from "../components/Header";
import {ExportToExcel} from "../ExportToExcel/ExcelExport";
export default class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '01071',
      checkBorrowers: [],  //
      headers: "Заемщики, у которых нет карт OFB",
      fileName: "excelreport",
      columns: [
        {
          label: 'Code',
          field: 'code',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Filial_code',
          field: 'filial_code',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Client_name',
          field: 'client_name',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Yadro_phone',
          field: 'yadro_phone',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Kredit_phone',
          field: 'kredit_phone',
          sort: 'asc',
          width: 270
        }
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Confirm that your branch is : ' + this.state.value);
    event.preventDefault();
     api
     .post("checkborrowersNew", {filial_code: this.state.value})
     .then((res) => {
      this.setState({checkBorrowers: res.data})
     })
     .catch((err) => console.log("ERROR: ", err))
  }

  render() {
    return (
      <div className="container">
         <Header headers={this.state.headers}/>
        <form onSubmit={this.handleSubmit}>
          <label style={{color:"#0E1C4F",fontSize:"1.2rem"}}>
            Select a branch:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="01071">01071(Оперу)</option>
              <option value="01096">01096(Чил.Ф.)</option>
              <option value="01167">01167(Мир.Ф.)</option>
              <option value="01075">01075(Юн.Ф.)</option>
              <option value="01115">01115(Шай.Ф.)</option>
              <option value="01111">01111(Сам.Ф.)</option>
              <option value="01110">01110(ЦОФ)</option>
              <option value="'01071','01096','01167','01075','01115','01111','01110'">All filials</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
     { this.state.checkBorrowers.length ?  
                  <Table 
                    backData={this.state.checkBorrowers}
                    columns={this.state.columns}
                   /> :''} 
      { this.state.checkBorrowers.length ?     
                   <ExportToExcel 
                   apiData={this.state.checkBorrowers} 
                   fileName={this.state.fileName} />:''}          
      </div>
    );
  }
}



// import React,{useState,useEffect} from "react";
// import api from "../settings/api";
// import Table from "../table/DynamicTable";
// import {ExportToExcel} from "../ExportToExcel/ExcelExport";
// import Header from "../components/Header";
// const columns = [
//     {
//       label: 'Code',
//       field: 'code',
//       sort: 'asc',
//       width: 150
//     },
//     {
//       label: 'Client_name',
//       field: 'client_name',
//       sort: 'asc',
//       width: 200
//     },
//     {
//       label: 'Yadro_phone',
//       field: 'yadro_phone',
//       sort: 'asc',
//       width: 270
//     },
//     {
//       label: 'Kredit_phone',
//       field: 'kredit_phone',
//       sort: 'asc',
//       width: 270
//     }
//   ];
// const headers = "Заемщики, у которых нет карт OFB";
// const CheckBorrowers = () => {
//    const fileName = "excelreport"; // here enter filename for your excel file
//    const [CheckBorrowers, setCheckBorrowers] = useState([])
//    useEffect(() => {
//        api.get("checkborrowsers").then(res => setCheckBorrowers(res.data))
//    },[])
// return (
//     <div className="container">
//          <Header headers={headers}/>
//          <ExportToExcel apiData={CheckBorrowers} fileName={fileName} />
//         <div className="flex-row">
//                 <Table 
//                    backData={CheckBorrowers}
//                    columns={columns}
//                 />
//         </div>
//     </div>
// );
// };

// export default CheckBorrowers;