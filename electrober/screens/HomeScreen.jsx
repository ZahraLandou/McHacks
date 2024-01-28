import { GOOGLE_MAPS_APIKEY } from "@env";
import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { setDestination, setOrigin } from "../slices/navSlice";

console.log(GOOGLE_MAPS_APIKEY)

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={{

            url: "https://cdn.discordapp.com/attachments/1200848153247756320/1201161218983997550/212aff11b389a27abda87842a1b96cfc-removebg-preview.png?ex=65c8cf8f&is=65b65a8f&hm=77dd1fcab24b0c8c8db222fc48e0443c9e84279e0b1932808289982cdbd636ab&"
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where are you?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              }))
            dispatch(setDestination(null));
            console.log('onPress', data);
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}

        />

        <NavOptions />
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