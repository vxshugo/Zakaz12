import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/main/Main';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Razdel from './pages/razdel/Razdel1';
import Razdel2 from './pages/razdel/Razdel2';

function App() {
  return (
    <div className="App">
      <Router>
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/razdel/:id" element={<Razdel/>}/>
                    <Route exact path="/razdel2" element={<Razdel2/>}/>
                </Routes>    
      </Router>
    </div>
  );
}

export default App;
