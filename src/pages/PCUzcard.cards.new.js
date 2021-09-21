import React, {useState} from 'react';
import {useInput} from "../hooks/useInput";
import api from "../settings/api";
import Pretty from "../hooks/Memo";
import InputMask from 'react-input-mask';
export default function NameForm(props) {
    const { value, setValue } = useInput('');
    const { value: expiry, setValue:setValueExpiry } = useInput('');
    const [bssreq, setBssreq] = useState(undefined);
    
    const regExp = /^8600\d{12}$/;
    function changeHandleWithRegex(event) {
        const {value} = event.target;
        if (value.length > 16) return;
        setValue(value);
    }

    const regExpfor = /^\d{2}\/\d{2}$/;
    function changeHandleWithRegexforExpiry(event) {
        var value = event.target.value;
        setValueExpiry(value);
    }
 
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!String(value).match(regExp) || !String(expiry).match(regExpfor)) return alert(`Incorrect data, please check your data!`);
        const ExPDate = expiry.substring(3,5).concat(expiry.substring(0,2));
        alert(`CardNumber: ${value}, Expiry: ${expiry}`);
            api
            .post("cardsnew", {pan: value, expiry: ExPDate})
            .then((res) => {
                setBssreq(res.data)
            })
            .catch((err) => console.log("ERROR: ", err))
          //  reset();
          //  resetExpiry();  
    }

    return (
        <div className="container">
            <div>
                <h1 style={{color:"#0e1c4f", borderRadius:"10px", backgroundColor: "#f1f3f4",marginTop:"10px",marginBottom:"10px",textAlign:"center"}}>Метод регистрации карты "cards.new"</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <label style={{fontSize:"1.4rem", color:"black"}}>Pan:</label>
                    <input type="text" onChange={changeHandleWithRegex} value={value} required placeholder="Enter CardNumber"/>
                <label style={{fontSize:"1.4rem", color:"black"}}>Expiry:</label>
                    <InputMask mask="99/99" onChange={changeHandleWithRegexforExpiry} placeholder='MM/YY' />
                <input type="submit" value="Submit" />
            </form>

            <div style={{backgroundColor:"#f2f2f2", color:"black", fontSize:"16px"}}>
                {<Pretty data={bssreq}/>}
            </div>
        </div>    
    );
  }