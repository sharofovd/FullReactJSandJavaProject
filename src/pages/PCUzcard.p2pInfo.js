import React, {useState} from 'react';
import {useInput} from "../hooks/useInput";
import api from "../settings/api";
import Pretty from "../hooks/Memo";
export default function NameForm(props) {
    const { value, setValue } = useInput(''); // bind,
    const [bssreq,setBssreq] = useState(undefined); // NOTE: initialvalue should be typeof expected value

    const regExp = /^8600\d{12}$/;
    function changeHandleWithRegex(event) {
        const {value} = event.target;
        if (value.length > 16) return;
        setValue(value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!String(value).match(regExp)) return alert(`Incorrect data, please check your data!`);
        alert(`CardNumber: ${value}`);
        api
        .post("p2pinfo", {pan: value})
        .then((res) => {
            setBssreq(res.data)
        })
        .catch((err) => console.log("ERROR: ", err))
     //   reset();
    }

    return (
        <div className="container">
            <div>
                <h1 style={{color:"#0e1c4f", borderRadius:"10px", backgroundColor: "#f1f3f4",marginTop:"10px",marginBottom:"10px",textAlign:"center"}}>Метод "p2p.info"</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <label style={{fontSize:"1.4rem", color:"black"}}>Pan:  </label>
                <input type="text" onChange={changeHandleWithRegex} value={value} required placeholder="Enter CardNumber"/>

                <input type="submit" value="Submit" />
            </form>

              <div style={{backgroundColor:"#f2f2f2", color:"black", fontSize:"16px"}}>
                    <Pretty data={bssreq}/>
              </div>   

        </div>    
    );
  }