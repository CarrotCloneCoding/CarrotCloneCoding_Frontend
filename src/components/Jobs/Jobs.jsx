import "./Jobs.css";
import Header from "../Header/Header";
import Job1 from "./JobCode/Job1/Job1";
import Job2 from "./JobCode/Job2/Job2";

export default function Jobs() {
  return (
    <div className="Jobs">
      <Header />
      <Job1 />
      <Job2 />
    </div>
  );
}
