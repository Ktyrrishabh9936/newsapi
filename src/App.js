
import './App.css';
import { Navbar } from './component/navbar';
import { News } from './component/news';
import {
      BrowserRouter as Router,
      Routes,
      Route,
    } from "react-router-dom";
    
function App() {
      let pageno =  15;
  return (
     <>
     <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/general"  element = {<News pagesize = {pageno}  apikey="45597f0db2e44240bb0d2cbdf587927f"  key = "general" country = "in" category = "general" />}/>
      <Route exact path="/"   element = {<News pagesize = {pageno}  apikey="45597f0db2e44240bb0d2cbdf587927f" key = "Home" country = "in" category = "general" />}/>
      <Route exact path="/business"   element = { <News pagesize = {pageno}  apikey="45597f0db2e44240bb0d2cbdf587927f" key = "bussiness" country = "in" category = "business" />}/>
      <Route exact path="/entertainment" element = {<News pagesize = {pageno}  apikey="45597f0db2e44240bb0d2cbdf587927f" key = "enter" country = "in" category = "entertainment" />}/>
      <Route exact path="/health"   element = { <News pagesize = {pageno}  apikey="45597f0db2e44240bb0d2cbdf587927f" key = "hhealth" country = "in" category = "health" />}/>
      <Route exact path="/science"   element={<News pagesize = {pageno}  apikey="45597f0db2e44240bb0d2cbdf587927f" key = "science" country = "in" category = "science" />}/>
            
            
      <Route exact path="/sport"  element={<News pagesize = {pageno}  apikey="45597f0db2e44240bb0d2cbdf587927f"  key = "sport" country = "in" category = "sport" />}/>
            
      <Route exact path="/technology" element={<News pagesize = {pageno}  apikey="45597f0db2e44240bb0d2cbdf587927f"  key = "tech"  country = "in" category = "technology" />}/>
      </Routes>
      
      </Router>
     </>
  );
}

export default App;
