import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import markerred from '../../img/marker-red.png';
import markerblue from '../../img/marker-blue.png';
import markergif from '../../img/marker-gif.gif';
import { useState } from 'react';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { clearConfigCache } from 'prettier';
const icon = L.icon({
  iconUrl: iconMarker,
});
function createIcon(url) {
  return new L.Icon({
    iconUrl: url,
  });
}
const data = [
  {
    name: 'Oslo',
    fillColor: '#7FC9FF',
    id: 1,
    position: {
      lat: 59.923043,
      lng: 10.752839,
    },
  },
  {
    name: 'Stockholm',
    fillColor: '#7FC9FF',
    id: 2,
    position: {
      lat: 59.339025,
      lng: 18.065818,
    },
  },
  {
    name: 'Copenhagen',
    fillColor: '#7FC9FF',
    id: 3,
    position: {
      lat: 55.675507,
      lng: 12.574227,
    },
  },
];

function ExhibitionExploreMap() {
  //   const icon = L.icon({
  //     iconRetinaUrl: iconRetina,
  //     iconUrl: iconMarker,
  //   });
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function handleClick(e) {
    const a = setSelectedIndex(e.target.options.index); //點擊
    console.log(a);
  }

  function getMarkerIcon(index) {
    if (index === selectedIndex) {
      return createIcon(markerred);
    } else {
      return createIcon(markerblue);
    }
  }

  return (
    <MapContainer
      className="markercluster-map"
      center={[52.8174847, 10.6912322]}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((item, index) => {
        return (
          console.log({ index }),
          (
            <Marker
              key={index}
              index={index}
              position={item.position}
              icon={getMarkerIcon(index)}
              eventHandlers={{
                click: handleClick,
              }}
            >
              <Popup>
                {item.name} <br /> <h3>你好</h3>
              </Popup>
            </Marker>
          )
        );
      })}
      ;
      {/* <Marker
        position={[52.2297, 21.0122]}
        eventHandlers={{
          click: handleClick,
        }}
        icon={icon}
      >
        <Popup>
          A pretty CSS376 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[51.5074, -0.0901]} icon={icon}>
        <Popup>
          A pretty CSS36 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
}
export default ExhibitionExploreMap;
