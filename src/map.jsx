import React from "react"
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { MapContainer, TileLayer } from 'leaflet';
export default function map() {
    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"


                />
            </MapContainer>
        </div>
    )
}