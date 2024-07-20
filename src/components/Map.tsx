import dynamic from 'next/dynamic';
import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import L from 'leaflet';

// Custom SVG icon
const customIcon = L.divIcon({
  html: `
    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
      <path d="m24 6c7.732 0 14 5.641 14 12.6 0 11.363-14 23.4-14 23.4s-14-11.936-14-23.4c0-6.959 6.268-12.6 14-12.6z" fill="#ff6e6e" fill-rule="evenodd"/>
      <circle cx="24" cy="20" fill="#0c0058" r="7"/>
    </svg>
  `,
  className: '',
  iconSize: [48, 48],
  iconAnchor: [24, 48],
});

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 0.3361209893422254,
  lng: 100.64194674014762,
};

const MapComponent: React.FC = () => {
  const [markers, setMarkers] = useState<Array<{ lat: number; lng: number; description: string }>>([
    { lat: center.lat, lng: center.lng, description: 'Candi Muara Takus' },
  ]);

  return (
    <div className="my-8 bg-teal-900">
      <div className="pt-24 bg-teal-900 mb-10 text-6xl text-center text-white max-md:pt-10 max-md:max-w-full max-md:text-4xl font-serif">
        <span className="">Lokasi Destinasi Wisata</span>
        <br />
        <span className="text-lime-200">Populer</span>
      </div>
      <MapContainer center={center} zoom={8} style={mapContainerStyle}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]} icon={customIcon}>
            <Popup>{marker.description}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default dynamic(() => Promise.resolve(MapComponent), { ssr: false });