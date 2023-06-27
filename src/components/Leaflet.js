import styles from "../componentsCSS/Leaflet.module.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
// import MapPin from "./MapPin";
// import GoogleMapReact from "google-map-react";

const Leaflet = () => {
  // const location = {
  //   address: "504 Lake Air Drive, Waco, TX",
  //   lat: 31.524214,
  //   lng: -97.185324,
  // };

  const position = [31.524214, -97.185324];
  const zoomLevel = 13;

  return (
    <div className={styles.map}>
      {/* <aside className={styles.test}>Are you seeing this</aside> */}
      <h1 className={styles.contactTitle}>Find/Contact Us!</h1>
      <MapContainer
        className={styles.container2}
        center={[31.524214, -97.185324]}
        id="mapId"
        zoom={zoomLevel}
      >
        <Marker position={position}>
          <Popup>Hello World</Popup>
        </Marker>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default Leaflet;
