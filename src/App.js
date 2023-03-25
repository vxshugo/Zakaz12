import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/main/Main';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Razdel1 from './pages/razdel/Razdel1';
import Razdel2 from './pages/razdel/Razdel2';
import Razdel3 from './pages/razdel/Razdel3';
import Razdel4 from './pages/razdel/Razdel4';
import Razdel5 from './pages/razdel/Razdel5';

function App() {
  return (
    <div className="App">
      <Router>
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/razdel1" element={<Razdel1/>}/>
                    <Route exact path="/razdel2" element={<Razdel2/>}/>
                    <Route exact path="/razdel3" element={<Razdel3/>}/>
                    <Route exact path="/razdel4" element={<Razdel4/>}/>
                    <Route exact path="/razdel5" element={<Razdel5/>}/>
                </Routes>    
      </Router>
    </div>
  );
}

export default App;
