import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  return (
    <div style={{ border:'5px solid white',borderRadius:'10px',width:'fit-content',margin:'30px auto'}}>
      <MapContainer center={[35.754509, 51.286674]} zoom={17} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[35.754509, 51.286674]}>
          <Popup>
            <h3>خانه</h3>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Map;
