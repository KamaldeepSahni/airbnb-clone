import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coords = searchResults.map(result => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coords);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/kamalsahni/cks1op3554yut18p6nl55lcj2"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {searchResults.map(({ lat, long, title }) => (
        <div key={long}>
          <Marker
            longitude={long}
            latitude={lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation({ lat, long, title })}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {selectedLocation.long === long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={selectedLocation.lat}
              longitude={selectedLocation.long}
            >
              {selectedLocation.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
