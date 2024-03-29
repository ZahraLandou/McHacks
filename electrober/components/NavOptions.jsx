import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: "123",
        title: "Charge Full",
        image: "https://cdn-icons-png.flaticon.com/512/6747/6747599.png",
        screen: "MapScreenChargeFull",
    },
    {
        id: "456",
        title: "Charge Quick",
        image: "https://cdn-icons-png.flaticon.com/512/4025/4025181.png",
        screen: "MapScreenChargeQuick", //change in future...
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                    disabled={!origin}
                >

                    <View style={tw`${!origin && "opacity-20"}`}>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                            source={{ url: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold `}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright"
                            color="white"
                            type='antdesign' />
                    </View>
                </TouchableOpacity>
            )} />
    );
};

export default NavOptions;
// const styles = StyleSheet.create({});