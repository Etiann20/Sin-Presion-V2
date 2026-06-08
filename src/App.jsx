import { BrowserRouter, Routes, Route }

from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Test from "./pages/Test";

import Progress from "./pages/Progress";

import Help from "./pages/Help";

import "./App.css";

import NotFound from "./pages/NotFound";

/* rutas */

<Route path="*" element={<NotFound />} />

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route

          path="/"

          element={<Home />}

        />

        <Route

          path="/test"

          element={<Test />}

        />

        <Route

          path="/progress"

          element={<Progress />}

        />

        <Route

          path="/help"

          element={<Help />}

        />

      </Routes>

      <footer className="footer">

        <p>

          Sin Presión © 2026

        </p>

        <p>

          Prevención y apoyo digital

        </p>

      </footer>

    </BrowserRouter>

  );

}

export default App;