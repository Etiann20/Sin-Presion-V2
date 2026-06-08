import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Test from "./pages/Test";
import Help from "./pages/Help";
import Progress from "./pages/Progress";

import "./App.css";

function App() {

return (

<BrowserRouter>

<Navbar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/test" element={<Test />} />

<Route path="/help" element={<Help />} />

<Route path="/progress" element={<Progress />} />

</Routes>

</BrowserRouter>

);

}

export default App;