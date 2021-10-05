import React, {useState} from 'react';
import {useInput} from "../hooks/useInput";
import api from "../settings/api";
import Pretty from "../hooks/Memo";
import InputMask from 'react-input-mask';
import Header from "../components/Header";
export default function NameForm(props) {
    const { value, setValue } = useInput('');
    const { value: expiry, setValue:setValueExpiry } = useInput('');
    const [bssreq, setBssreq] = useState(undefined);
    
    const regExp = /^9860\d{12}$/;
    function changeHandleWithRegex(event) {
        const {value} = event.target;
        if (value.length > 16) return;
        setValue(value);
    }

    const regExpfor = /^\d{2}\/\d{2}$/;
    function changeHandleWithRegexforExpiry(event) {
       var expire_date = event.target.value;
        if (event.target.value.length > 5) return;
        if (event.target.value.length === 2) {
            event.target.value =  expire_date +'/';
        }
        setValueExpiry(event.target.value);
    }
 
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!String(value).match(regExp) || !String(expiry).match(regExpfor)) return alert(`Incorrect data, please check your data!`);
        alert(`CardNumber: ${value}, Expiry: ${expiry}`);
            api
            .post("getCardInfo", {pan: value, expiry: expiry.replace('/', '')})
            .then((res) => {
                setBssreq(res.data)
            })
            .catch((err) => console.log("ERROR: ", err))
         //   reset();
         //   resetExpiry();  
    }
    const headers = "Метод 'getCardInfo'";
    return (
        <div className="container">
            {/* <div>
                <h1 style={{color:"#0e1c4f", borderRadius:"10px", backgroundColor: "#f1f3f4",marginTop:"10px",marginBottom:"10px",textAlign:"center"}}>Метод "getCardInfo"</h1>
            </div> */}
            <Header headers={headers}/>
            <form onSubmit={handleSubmit}>
                <label style={{fontSize:"1.4rem", color:"black"}}>Pan:</label>
                    <input type="text" onChange={changeHandleWithRegex} value={value} required placeholder="Enter CardNumber"/>
                <label style={{fontSize:"1.4rem", color:"black"}}>Expiry:</label>
                    {/* <input type="text" onChange={changeHandleWithRegexforExpiry} value={expiry} required placeholder="MM/YY"/> */}
                    <InputMask mask="99/99" onChange={changeHandleWithRegexforExpiry} placeholder='MM/YY' />
                <input type="submit" value="Submit" />
            </form>

            <div style={{backgroundColor:"#f2f2f2", color:"black", fontSize:"16px"}}>
                {<Pretty data={bssreq}/>}
            </div>
        </div>    
    );
  }