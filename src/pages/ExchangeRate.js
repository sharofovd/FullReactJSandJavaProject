import React,{useState,useEffect} from "react";
import api from "../settings/api";
import "mdbreact/dist/css/mdb.css";
import Header from "../components/Header";
const names = {
    840: {cur: "USD",  value: "10568.21" },
    978: { cur: "EUR", value: "12879.48" },
    826: { cur: "GBP", value: "14980.44" },
    756: { cur: "CHF", value: "11737.24" },
    392: { cur: "JPY", value: "96.32" },
};
const staticList = [
    { img: "/images/usd.png",  id: "840" },
    { img: "/images/euro.png", id: "978" },
    { img: "/images/pound.png",id: "826" },
    { img: "/images/chf.png",  id: "756" },
    { img: "/images/yena.png", id: "392" },
];
const headers = "Курс обмена валют";
const ExchangeRate = () => {
    const [bankCurrency, setbankCurrency] = useState([])
    useEffect(() => {
        api.get("bankCurrency").then(res => setbankCurrency(res.data))
    },[])
 return (
    <div className="container">
      <Header headers={headers}/>        
        <div style={{ display: "flex", flexDirection:"row",justifyContent: "space-between", alignItems: "center",width:"270px",marginLeft:"350px",marginTop:"80px",fontFamily:"sans-serif",fontSize:"1.1em"}}>
            <p style={{color:"#cdad56"}}>CBU Rate</p>
            <p style={{color:"#cdad56"}}>We Buy</p>
            <p style={{color:"#cdad56"}}>We Sell</p>
        </div>
        <div>
        
            {bankCurrency.length && staticList.map((item, index) => 
                <CurrencyComponent 
                    key={index} 
                    item={item} 
                    child={bankCurrency?.find(childItem => childItem.base_currency === item.id)} />)}
        </div> 
    </div>
 );
 };
 
 export default ExchangeRate;

 class CurrencyComponent extends React.Component {
    render() {
        return (
            <ul style={{ display: "flex",width:"420px", justifyContent: "space-between", listStyle: "none", alignItems: "center",marginLeft:"220px" }}>
                {/* Static Part */}

                    <li title={names[this.props.item.id].cur} style={{ width: "50px" }}><img alt="flag" src={this.props.item.img} width="35px" height="35px" /></li>
                    <li style={{ width: "50px" }}>{names[this.props.item.id].value}</li>

                {/* Dynamic Part */ console.log(this.props.child)}
                    <li style={{ width: "50px" }}>{this.props.child.buying_rate}</li>
                    <li style={{ width: "50px" }}>{this.props.child.selling_rate}</li>
            </ul>
        )
    }
}