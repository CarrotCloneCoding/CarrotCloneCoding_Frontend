import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Section1 from "../Section/Section1/Section1";
import Section2 from "../Section/Section2/Section2";
import Section3 from "../Section/Section3/Section3";
import Section4 from "../Section/Section4/Section4";
import Section5 from "../Section/Section5/Section5";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}
