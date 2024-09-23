import React, { useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import Header from '../../components/Header'
import axios from 'axios';

// lat: 6.603200488122016, lng: 3.308623525452729

const Maps = () => {
  // const mapContainerStyle = {
  //   width: '100%',
  //   height: '100vh',
  // };

  // const center = {
  //   lat: 6.602538363202304,
  //   lng: 3.3086827603783764,
  // };

  // const libraries = ['places'];

  // const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: API_KEY,
  //   libraries,
  // });

  // const [markers, setMarkers] = useState([]);
  // const [distance, setDistance] = useState('');
  // const [duration, setDuration] = useState('');

  // const calculateDistance = (source, destination) => {
  //   const distanceMatrixUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${source}&destinations=${destination}&key=${API_KEY}`;

  //   axios.get(distanceMatrixUrl).then((response) => {
  //     const result = response.data.rows[0].elements[0];
  //     setDistance(result.distance.text);
  //     setDuration(result.duration.text);
  //   }).catch((error) => {
  //     console.error('Error calculating distance:', error);
  //   });
  // };

  // const handlePlaceSelect = (e) => {
  //   const latLng = {
  //     lat: e.latLng.lat(),
  //     lng: e.latLng.lng(),
  //   };
  //   setMarkers((prev) => [...prev, latLng]);

  //   if (markers.length === 1) {
  //     calculateDistance(
  //       `${markers[0].lat},${markers[0].lng}`,
  //       `${latLng.lat},${latLng.lng}`
  //     );
  //   }
  // };

  // if (loadError) return <div>Error loading maps</div>;
  // if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <Box m="20px">
      <Header title="MAPS" subtitle="Explore the world" />

      <Box sx={{ width: '100%', height: '80vh' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.356175327976!2d3.3058451575151446!3d6.602583774898276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b904df6d069a1%3A0x6d35613a3e48b598!2sThe%20Place%20Restaurant%2C%20Akowonjo!5e0!3m2!1sen!2sng!4v1726496673607!5m2!1sen!2sng" width="100%" height="100%" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='learn'></iframe>
      </Box>
      {/* <Box>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={20}
          center={center}
          onClick={handlePlaceSelect}
        >
          {markers.map((marker, idx) => (
            <Marker key={idx} position={marker} />
          ))}
        </GoogleMap>
        <div>
          <h3>Distance: {distance}</h3>
          <h3>Duration: {duration}</h3>
        </div>
      </Box> */}
    </Box>
  )
}

export default Maps