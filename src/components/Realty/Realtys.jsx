import "./Realtys.css";
import Header from "../Header/Header";
import Realty1 from "./RealtyCode/Realty1/Realty1";
import Realty2 from "./RealtyCode/Realty2/Realty2";
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
