import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";

const MapScreenChargeQuick = (component) => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={tw`h-full`}>
                <Map />
                <TouchableOpacity
                    onPress={() => navigation.navigate("ChargeQuick")}
                    style={tw`bg-gray-100 absolute top-16 left-60 z-50 p-3 rounded-full shadow-lg`}>
                    <Text>Options</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("HomeScreen")}
                    style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MapScreenChargeQuick;
const styles = StyleSheet.create({});
