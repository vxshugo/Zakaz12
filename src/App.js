import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/main/Main';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Razdel1 from './pages/razdel/Razdel1';

function App() {
  return (
    <div className="App">
      <Router>
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/razdel" element={<Razdel1/>}/>
                </Routes>    
      </Router>
    </div>
  );
}

export default App;
