import Login from './LoginAndSignup/Login/Login';
import Signup from './LoginAndSignup/Signup/Signup';
import {Routes,Route} from "react-router-dom";
import Homepage from "./Admin/Homepage"
import { ToastContainer } from 'react-bootstrap';




function App() {
  return (
    <div className="App"> 
      <div>
        <ToastContainer theme ='colored'></ToastContainer>
        <Routes className="main-router">
          <Route exacte path='/' element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign" element={<Signup/>}/>
        </Routes>
      </div>

      {/* <Homepage/> */}

      

    </div>

  );
}

export default App;
