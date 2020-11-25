import React, { useEffect, useRef } from 'react';
import './Map.css';

const Map = ({ center, zoom , style, className }) => {   
    const mapRef = useRef();
    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, { /* pointer to actual value of mapRef */
            zoom, // object with configuration of the map
            center
         }); 
     
         new window.google.maps.Marker({ position: center, map });
    }, [center, zoom]); // rerender only if center of zoom is changed
    return ( 
        <div 
            ref={mapRef}
            className={`map ${className}`}
            style={style}>
        </div> 
    );
};
 
export default Map;