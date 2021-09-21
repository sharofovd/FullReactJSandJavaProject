// let xml ='<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n <soapenv:Body>\n  <GetCardPinTryCounterResponse soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\">\n   <ResponseInfo href=\"#id0\"/>\n   <Details href=\"#id1\"/>\n  </GetCardPinTryCounterResponse>\n  <multiRef id=\"id0\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns1:OperationResponseInfo\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\" xmlns:ns1=\"urn:issuing_v_01_02_xsd\">\n   <response_code xsi:type=\"xsd:integer\">0</response_code>\n   <error_description xsi:type=\"xsd:string\" xsi:nil=\"true\"/>\n   <error_action xsi:type=\"xsd:string\" xsi:nil=\"true\"/>\n   <EXTERNAL_SESSION_ID xsi:type=\"xsd:string\">KqjJS1ccxyVBjZw4V1aEj7kqcXA0vHUvv6WcuPhZEXJoPlYC5yFrwrOpCsGx</EXTERNAL_SESSION_ID>\n  </multiRef>\n  <multiRef id=\"id1\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns2:RowType_GetCardPinTryCounter_Response\" xmlns:ns2=\"urn:issuing_v_01_02_xsd\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\n   <CARD xsi:type=\"xsd:string\">410859BCMXLT2808</CARD>\n   <PIN_TRY_COUNT xsi:type=\"xsd:integer\">0</PIN_TRY_COUNT>\n   <UPDATE_DATE xsi:type=\"xsd:dateTime\" xsi:nil=\"true\"/>\n  </multiRef>\n </soapenv:Body>\n</soapenv:Envelope>';

// let getXmlValue = function(str, key) {
//   return str.substring(
//     str.lastIndexOf('<' + key + '>') + ('<' + key + '>').length,
//     str.lastIndexOf('</' + key + '>')
//   );
// }


// alert(getXmlValue(xml, 'CARD')); // gives back Hank


// import React, { Component } from 'react';
// import './temp.css';
// export class App extends Component {
//   state={
//     profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
//   }
//   imageHandler = (e) => {
//     const reader = new FileReader();
//     reader.onload = () =>{
//       if(reader.readyState === 2){
//         this.setState({profileImg: reader.result})
//       }
//     }
//     reader.readAsDataURL(e.target.files[0])
//   };
// 	render() {
//     const { profileImg} = this.state;
// 		return (
// 			<div className="page">
// 				<div className="container">
// 					<h1 className="heading">Add your Image</h1>
// 					<div className="img-holder">
// 						<img src={profileImg} alt="" id="img" className="img" />
// 					</div>
// 					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
// 					<div className="label">
//           <label className="image-upload" htmlFor="input">
// 						<i className="material-icons">add_photo_alternate</i>
// 						Choose your Photo
// 					</label>
//           </div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default App;