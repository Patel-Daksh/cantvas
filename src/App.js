import logo from "./logo.svg";

import Labs from "./Labs";
import Cantvas from "./Cantvas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'


function App() {
  //const screen = "Labs";
  return (
    <HashRouter>
      <div>
        <Routes>
        <Route path="/" element={<Navigate to="Cantvas" />} />
          <Route path="/Hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Cantvas/*" element={<Cantvas />} />
          
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
