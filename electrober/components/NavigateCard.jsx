import React from 'react'
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import tw from "tailwind-react-native-classnames";
import {GOOGLE_MAPS_APIKEY} from "@env";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const NavigateCard = () => {
    return(
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>
                YO
            </Text>
            <View style ={tw `border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                    placeholder = 'Where to?'/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard;

const styles = StyleSheet.create({});