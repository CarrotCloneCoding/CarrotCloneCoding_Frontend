import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Main from "./components/Main/Main.jsx";
import Card from "./components/Card/Card";
import NearbyStore from "./components/NearbyStore/NearbyStore.jsx";
import Jobs from "./components/Jobs/Jobs.jsx";
import Realty from "./components/Realty/Realtys.jsx";
import Car from "./components/Car/Cars";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Write from "./components/Write/Write";

const firebaseConfig = {
  apiKey: "AIzaSyAR80rkxccA7vPyWs8D5IJDFha9HP52Ki4",
  authDomain: "carrot-clone-coding.firebaseapp.com",
  projectId: "carrot-clone-coding",
  storageBucket: "carrot-clone-coding.appspot.com",
  messagingSenderId: "852668309434",
  appId: "1:852668309434:web:08b84663b0e42e71b44783",
  measurementId: "G-XR2MWW6LK7",
};

export const app = initializeApp(firebaseConfig);
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
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
