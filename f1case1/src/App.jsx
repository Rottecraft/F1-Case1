import BasicLayout from "./Components/BasicLayout/BasicLayout.jsx"
import AdminLogin from "./Components/AdminLogin/AdminLogin.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";






function App() {
  return(
  <> 
      <Router>
      <Routes>
        <Route path="/" element={<BasicLayout />} /> 
        <Route path="/adminlogin" element={<AdminLogin />} />        
      </Routes>
    </Router>
  </>
  ); 
}


export default App