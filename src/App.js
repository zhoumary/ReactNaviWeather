import React, { Component } from "react";
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { Root, Container, Card, CardItem, Text, Content, Header, Footer, Left, Right, Body, Button, Icon, Title, List, ListItem } from "native-base";
import CurrWeather from './screens/currentWeather';
import Locations from './screens/locations';


// export default class APP extends Component {
//     render() {
//         return (
//             <Container>
//                 <CurrWeather />
//             </Container>
//         );
//     }
// }


const APP = createStackNavigator({
    Home: {
        screen: CurrWeather,
    },
    Locations: {
        screen: Locations,
    },
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
            height: 0,
            backgroundColor: 'transparent',
        },
    },
});

export default createAppContainer(APP);
