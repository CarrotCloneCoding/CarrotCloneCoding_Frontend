import "./Cars.css";
import Header from "../Header/Header";
import Realty1 from "./CarCode/Car1/Car1";
import Realty2 from "./CarCode/Car2/Car2";
import Footer from "../Footer/Footer";

export default function Realtys() {
  return (
    <div className="Jobs">
      <Header />
      <Realty1 />
      <Realty2 />
      <Footer />
    </div>
  );
}
