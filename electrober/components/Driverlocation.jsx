import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Driverlocation = () => {
    const origin = useSelector(selectOrigin);
  
    
    const destination = {"description": "McGill University, Sherbrooke Street West, Montreal, QC, Canada", "location": {"lat": 45.50478469999999, "lng": -73.5771511}};
  
    return (
        <MapView
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}

          
        >
             { origin && destination && (
            <MapViewDirections
                origin={origin.description}
                destination={destination.description}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
            />
             )}




            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}



           
        </MapView>
    );
};

export default Driverlocation;

const styles = StyleSheet.create({});