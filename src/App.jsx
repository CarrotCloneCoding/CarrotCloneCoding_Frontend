import "./App.css";
import Main from "./components/Main/Main.jsx";
import Card from "./components/Card/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/kr/nearby-stores/" element={<></>}></Route>
        <Route path="articles/598273895" element={<Card />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
