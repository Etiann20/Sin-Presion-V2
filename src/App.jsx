import {

  Routes,
  Route
  
  }
  
  from "react-router-dom";
  
  import Navbar from "./components/Navbar";
  
  import Home from "./pages/Home";
  
  import Test from "./pages/Test";
  
  import Help from "./pages/Help";
  
  import Progress from "./pages/Progress";
  
  function App(){
  
  return(
  
  <>
  
  <Navbar />
  
  <div className="container">
  
  <Routes>
  
  <Route
  
  path="/"
  
  element={<Home/>}
  
  />
  
  <Route
  
  path="/test"
  
  element={<Test/>}
  
  />
  
  <Route
  
  path="/help"
  
  element={<Help/>}
  
  />
  
  <Route
  
  path="/progress"
  
  element={<Progress/>}
  
  />
  
  </Routes>
  
  </div>
  
  </>
  
  )
  
  }
  
  export default App;