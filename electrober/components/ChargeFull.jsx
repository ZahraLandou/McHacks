import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import HomeScreen from '../screens/HomeScreen';
import {
    FlatList,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import tw from "tailwind-react-native-classnames";

const data = [
    {
        id: 'Now',
        title: 'Now',
        price: 10,
        image: "https://static.vecteezy.com/system/resources/previews/000/623/239/original/auto-car-logo-template-vector-icon.jpg",
    },
    {
        id: 'In 1 hour',
        title: 'In 1 hour',
        price: 7,
        image: "https://static.vecteezy.com/system/resources/previews/000/623/239/original/auto-car-logo-template-vector-icon.jpg",
    },
    {
        id: 'In 2 hours',
        title: 'In 2 hours',
        price: 5,
        image: "https://static.vecteezy.com/system/resources/previews/000/623/239/original/auto-car-logo-template-vector-icon.jpg",
    },
];

// If we have SURGE pricing, this goes up
const SURGE_CHARGE_RATE = 1.5;

const ChargeFull = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <Text style={tw`text-center py-4 text-xl`}>
                    Select a Ride
                </Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, price, image }, item }) => (
                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        style={tw`flex-row justify-between items-center px-4 border-t border-gray-200 ${id === selected?.id && 'bg-gray-100'
                            }`}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain',
                            }}
                            source={{ uri: image }}
                        />
                        <View style={tw`-ml-3`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            }).format(
                                price
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("MapScreen")}
                    style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
                >
                    <Text style={tw`text-center text-white text-xl`}>
                        Choose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ChargeFull;
