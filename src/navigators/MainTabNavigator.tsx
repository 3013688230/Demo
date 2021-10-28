import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ListenNowScreen from '../components/listenNow/ListenNowScreen';
import SearchScreen from '../components/search/SearchScreen';
import LibraryScreen from '../components/library/LibraryScreen';

const ListenNowStack = createStackNavigator();

const ListenNowStackNavigator = () => {
    return (
        <ListenNowStack.Navigator>
            <ListenNowStack.Screen 
                options={{
                    title: 'Escucha ahora',
                }}
                name="ListenNow" 
                component={ListenNowScreen} 
            />
        </ListenNowStack.Navigator>
    );
};

const SearchStack = createStackNavigator();

const SearchStackNavigator = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="Search" component={SearchScreen} />
        </SearchStack.Navigator>
    );
};

const LibraryStack = createStackNavigator();

const LibraryStackNavigator = () => {
    return (
        <LibraryStack.Navigator>
            <LibraryStack.Screen name="Colecciona tus albumes favoritos" component={LibraryScreen} />
        </LibraryStack.Navigator>
    );
};

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <MainTab.Navigator>
            <MainTab.Screen
                name="ListenNow" 
                options={{
                    title: 'Tu musica favorita',
                }}
                component={ListenNowStackNavigator} 
            />
            <MainTab.Screen name="Albumes" component={LibraryStackNavigator} />
            <MainTab.Screen name="Search" component={SearchStackNavigator} />
        </MainTab.Navigator>
    );
};

export default MainTabNavigator;