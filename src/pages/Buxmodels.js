import React, {useState} from 'react';
import {stockData} from "../files/buxmodels";
import ReactToExcel from 'react-html-table-to-excel';
import Popup from '../popup/Popup';
function BuxModels(){
    const [tableNew, setTableNew] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
       const changeSelect=(event)=>{
           const id=event.target.value;
           if(id==='tanlang'){
               setTableNew([]);
           }
           else{
                setTableNew(stockData.filter(obj=>obj.id===id))
           }
       } 
       return(
           <div className="container" style={{marginTop:"50px"}}>  
             <div className="d-flex justify-content-start" style={{ alignItems: "center" }}>           
                 <select onChange={changeSelect} style={{padding:"10px"}}>
                    <option value="tanlang">Choose</option>
                    <option value="SV[ho]2SV[ho]">SV[ho]2SV[ho]</option>
                    <option value="SV[ho]2SV[bnk]">SV[ho]2SV[bnk]</option>
                    <option value="SV[fl1]2SV[fl2]">SV[fl1]2SV[fl2]</option>
                    <option value="SV[fl]2SV[ho]">SV[fl]2SV[ho]</option>
                    <option value="SV[fl]2SV[fl]">SV[fl]2SV[fl]</option>
                    <option value="SV[fl]2SV[bnk]">SV[fl]2SV[bnk]</option>
                    <option value="SV[bnk]2SV[ho]">SV[bnk]2SV[ho]</option>
                    <option value="SV[bnk]2SV[fl]">SV[bnk]2SV[fl]</option>
                    <option value="SV[ho]2GL[bnk]">SV[ho]2GL[bnk]</option>
                    <option value="SV[bnk]2GL[ho]">SV[bnk]2GL[ho]</option>
                    <option value="SV[bnk]2GL[bnk]">SV[bnk]2GL[bnk]</option>
                    <option value="SV[ho]2TTUSD[ho]">SV[ho]2TTUSD[ho]</option>
                    <option value="SV[ho]2MUNIS">SV[ho]2MUNIS</option>
                    <option value="GL[ho]2GL[ho]">GL[ho]2GL[ho]</option>
                    <option value="GL[ho]2GL[fl]">GL[ho]2GL[fl]</option>
                    <option value="GL[ho]2GL[bnk]">GL[ho]2GL[bnk]</option>
                    <option value="GL[bnk]2GL[ho]">GL[bnk]2GL[ho]</option>
                    <option value="GL[bnk]2GL[fl]">GL[bnk]2GL[fl]</option>
                    <option value="GL[bnk]2GL[bnk]">GL[bnk]2GL[bnk]</option>
                    <option value="GL[ho]2SV[ho]">GL[ho]2SV[ho]</option>
                    <option value="GL[ho]2SV[fl]">GL[ho]2SV[fl]</option>
                    <option value="GL[fl1]2SV[fl2]">GL[fl1]2SV[fl2]</option>
                    <option value="GL[fl]2SV[ho]">GL[fl]2SV[ho]</option>
                    <option value="GL[fl]2SV[fl]">GL[fl]2SV[fl]</option>
                    <option value="GL[bnk]2SV[ho]">GL[bnk]2SV[ho]</option>
                    <option value="GL[bnk]2SV[fl]">GL[bnk]2SV[fl]</option>
                    <option value="GL[ho]2SV[bnk]">GL[ho]2SV[bnk]</option>
                    <option value="TT[USD]2TT[USD]">TT[USD]2TT[USD]</option>
                    <option value="ACC[UZS]2GL[ho]">ACC[UZS]2GL[ho]</option>
                    <option value="ACC[UZS]2SV[ho]">ACC[UZS]2SV[ho]</option>
                    <option value="ACC[UZS]2ACC[USD]">ACC[UZS]2ACC[USD]</option>
                </select>
                <button onClick={()=>setButtonPopup(true)} style={{paddingRight:"10px",paddingLeft:"10px",marginLeft:"10px",backgroundColor: 'grey',borderRadius:'3px',border:'none',borderColor:'#007bff',color:'white'}}>Note:  </button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <h3>Note</h3>
                        <p style={{color:'blue'}}>SV - UZCARD,  GL - HUMO,  TT - TIETO;</p>
                        <p style={{color:'blue'}}>ACC - ACCOUNT;</p>
                        <p style={{color:'blue'}}>ho - OFB head offfice,  bnk - Other bank,  fl - OFB filial;</p>
                    </Popup>
            <div style={{marginLeft:"10px"}}>        
                    {tableNew.length ?
                                <ReactToExcel
                                    className="excelButton"
                                    table="table-to-xls"
                                    filename="excelFile"
                                    sheet="sheet 2"
                                    buttonText="EXPORT"
                                />:""}
            </div>                    
           </div>
           {
               tableNew.length ?
               <table id="table-to-xls" style={{ alignItems: "center",marginTop:"10px",fontSize:"1.2em",fontFamily:"sans-serif" }}> 
                    <thead>
                            <tr>
                                 <th>Cl_mfo</th>
                                 <th>Cl_acc</th>
                                 <th>Cl_name</th>
                                 <th>Co_mfo</th>
                                 <th>Co_acc</th>
                                 <th>Co_name</th>
                                 <th>Sum_pay</th>
                                 <th>Sum_eqv</th>
                                 <th>Date_execute</th>                          
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableNew.map((user,index)=>{
                                    return <tr key={index}>
                                        <td>{user.CL_MFO}</td>
                                        <td>{user.CL_ACC.toString().replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, ",")}</td>
                                        <td>{user.CL_NAME}</td>
                                        <td>{user.CO_MFO}</td>
                                        <td>{user.CO_ACC.toString().replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, ",")}</td>
                                        <td>{user.CO_NAME}</td>
                                        <td>{user.SUM_PAY}</td>
                                        <td>{user.SUM_EQV}</td>
                                        <td>{user.DATE_EXECUTE}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                 </table>:<h5>Please, select buxmodel which you want from the menu.</h5>
           }
           </div>         
       )
}
export default BuxModels;