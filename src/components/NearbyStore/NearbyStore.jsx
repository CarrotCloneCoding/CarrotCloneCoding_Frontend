import "./NearbyStore.css";
import Header from "../Header/Header";
import NearbyStore1 from "./NearbyStoreCode/NearbyStore1/NearbyStore1";
import NearbyStore2 from "./NearbyStoreCode/NearbyStore2/NearbyStore2";


export default function NearbyStore() {
  return (
    <div className="NearbyStore">
      <Header />
      <NearbyStore1 />
      <NearbyStore2 />
    </div>
  );
}
