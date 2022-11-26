import styles from './Map.module.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const location = [35.754509, 51.286674];

function Map() {

  return (
    <div style={{ position:'relative',border: '5px solid white', borderRadius: '10px', width: 'fit-content', margin: '30px auto' }}>
      <MapContainer center={[35.758309, 51.286674]} zoom={15} zoomControl={false} scrollWheelZoom={true} className={styles.leafletContainer} style={{zIndex:300}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[35.758309, 51.286674]}>
          <Popup>
            <h3>خانه</h3>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Map;
