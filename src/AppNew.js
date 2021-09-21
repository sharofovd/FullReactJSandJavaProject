import React from 'react';
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { AboutUs } from "./pages/AboutUs"; //, OurAim, OurVision
import {
// Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import {
  StatisticsOne,
  StatisticsTwo,
  StatisticsThree,
  StatisticsFour,
  StatisticsFive,
  StatisticsSix,
  StatisticsSeven
} from "./pages/Statistics";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
import Logout from "./login/Logout";
import LiveUsers from "./pages/LiveUsers";
import Terminals from "./pages/Terminals";
import Clients from "./pages/Clients";
import CheckPINFLCode from "./pages/CheckPINFLCode";
import CheckRegionCode from "./pages/CheckRegionCode";
import ComparePhone from "./pages/CheckBSSandSMSPhone";
import CheckINNCode from "./pages/CheckINNCode";
import RestoreLogin from "./pages/RestoreLogin";
import ExchangeRate from "./pages/ExchangeRate";
import BankCurrency from "./pages/BankCurrency";
import CheckBorrowers from "./pages/CheckBorrowers";
import CheckOFBVisitors from "./pages/CheckOFBVisitors";
//import BankCurrency from "./ExportToExcel/Main";
import BuxModels from './pages/Buxmodels';
import UzcardP2pInfo from './pages/PCUzcard.p2pInfo';
import UzcardCardsnew from './pages/PCUzcard.cards.new';
import HumoGetBalance from './pages/PCHumoGetBalance';
import HumoGetCardInfo from './pages/PCHumoGetCardInfo';
import OFBConversion from './pages/OFBConversion.page';
import CardServices from './pages/BSSCardOpen.page';
import OpenPhysicalCard from './pages/OpenPhysicalCard.page';
import PCTietoGetCardPinTryCount from './pages/PCTietoGetcardPinTryCount';
import BssCovertions from './pages/BSSConvertions';
// import Temp from "./ExportToExcel/temp";
const App=() =>{

  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/monitoring"              component={AboutUs} />
        <Route path="/onlineusers"             component={LiveUsers} />
        <Route path="/checkPINFLCode"          component={CheckPINFLCode} />
        <Route path="/checkregioncode"         component={CheckRegionCode} />
        <Route path="/comparephone"            component={ComparePhone} />
        <Route path="/checkINNCode"            component={CheckINNCode} />
        <Route path="/checkborrowsers"         component={CheckBorrowers} />
        <Route path="/checkofbvisitors"        component={CheckOFBVisitors} />
        <Route path="/terminals"               component={Terminals} />
        <Route path="/clients"                 component={Clients} />
        <Route path="/restorelogin"            component={RestoreLogin} />
        <Route path="/buxmodels"               component={BuxModels} />
        <Route path="/currency/exchangerate"   component={ExchangeRate}/>
        <Route path="/currency/ofbcurrency"    component={BankCurrency}/>

        <Route path="/bssrequests/services1"   component={ServicesOne} />
        <Route path="/bssrequests/services2"   exact component={ServicesTwo} />
        <Route path="/bssrequests/services3"   exact component={ServicesThree} />
        
        <Route path="/bssstatistics/services1" exact component={StatisticsOne} />
        <Route path="/bssstatistics/services2" exact component={StatisticsTwo} />
        <Route path="/bssstatistics/services3" exact component={StatisticsThree} />
        <Route path="/bssstatistics/services4" exact component={StatisticsFour} />
        <Route path="/bssstatistics/services5" exact component={StatisticsFive} />
        <Route path="/bssstatistics/services6" exact component={StatisticsSix} />
        <Route path="/bssstatistics/services7" exact component={StatisticsSeven} />
        <Route path="/contact"                 exact component={Contact} />
        <Route path="/events"                  exact component={Events} />
        <Route path="/events/events1"          exact component={EventsOne} />
        <Route path="/events/events2"          exact component={EventsTwo} />
        <Route path="/support"                 exact component={Support} />
        <Route path="/logout"                  exact component={Logout}/>
                             {/*PC Requests*/}
        <Route path="/p2pinfo"                 exact component={UzcardP2pInfo}/>
        <Route path="/cardsnew"                exact component={UzcardCardsnew}/>
        <Route path="/getbalance"              exact component={HumoGetBalance}/>
        <Route path="/getcardinfo"             exact component={HumoGetCardInfo}/>
        <Route path="/getpintrycount"          exact component={PCTietoGetCardPinTryCount}/>

        <Route path="/ofbconversion"           exact component={OFBConversion}/>
        <Route path="/cardservices"            exact component={CardServices}/>
        <Route path="/openphysicalcard"        exact component={OpenPhysicalCard}/>
        <Route path="/bsscovertions"           exact component={BssCovertions}/> {/* Temp*/}
        
      </Switch>
    </Router>
  );
}
export default App;