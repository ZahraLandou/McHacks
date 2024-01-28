import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from '../components/RideOptionsCard'
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-elements";

const MapScreen = (component) => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();
    return (
        <View>
            <View style={tw`h-1/4`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("NavigateCard")}
                    style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
                    <Text>NavigateCard</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`h-1/4`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("RideOptionsCard")}
                    style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
                    <Text>RideOptionsCard</Text>
                </TouchableOpacity>
            </View>

            <View style={tw`h-1/2`}>
                <Map />
            </View>
        </View>
    );
};

export default MapScreen;
const styles = StyleSheet.create({});
