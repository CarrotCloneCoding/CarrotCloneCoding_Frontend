import "./App.css";
import Main from "./components/Main/Main.jsx";
import Card from "./components/Card/Card";
import NearbyStore from "./components/NearbyStore/NearbyStore.jsx";
import Jobs from "./components/Jobs/Jobs.jsx";
import Realty from "./components/Realty/Realtys.jsx"
import Car from "./components/Car/Cars";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/kr/nearby-stores/" element={<NearbyStore />}></Route>
        <Route path="/kr/jobs/" element={<Jobs />}></Route>
        <Route path="/kr/realty/" element={<Realty />}></Route>
        <Route path="/kr/car/" element={<Car />}></Route>
        <Route path="articles/598273895" element={<Card />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
