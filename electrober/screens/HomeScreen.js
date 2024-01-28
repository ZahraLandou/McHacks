import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPA_APIKEY} from "@env"

const HomeScreen = () => {
    return (
     <SafeAreaView style={tw`bg-white h-full`}>
       <View>
        <Image
         style={{
            width: 100,
             height:100, 
             resizeMode:'contain',
         }}
          source = {{
                
                url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where are you?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        
        />

        <NavOptions/>
       </View>
     </SafeAreaView>


    );
  
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});